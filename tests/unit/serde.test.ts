import { describe, expect, it } from "vitest";

import { parseBulkLookup, parseSingleLookup } from "../../src/internal/serde";

describe("serde", () => {
  it("parses a single lookup response", () => {
    const parsed = parseSingleLookup(
      JSON.stringify({
        ip: "8.8.8.8",
        location: {
          country_name: "United States",
          city: "Mountain View",
          confidence: "high",
        },
        time_zone: {
          name: "America/Los_Angeles",
          offset: -8,
          dst_start: {},
        },
      }),
    );

    expect(parsed.ip).toBe("8.8.8.8");
    expect(parsed.location?.countryName).toBe("United States");
    expect(parsed.location?.confidence).toBe("high");
    expect(parsed.timeZone?.name).toBe("America/Los_Angeles");
    expect(parsed.timeZone?.dstStart).toEqual({});
  });

  it("preserves intentional empty objects", () => {
    const parsed = parseSingleLookup(
      JSON.stringify({
        ip: "8.8.8.8",
        location: {},
        asn: {},
      }),
    );

    expect(parsed).toEqual({
      ip: "8.8.8.8",
      location: {},
      asn: {},
    });
  });

  it("does not invent omitted optional arrays in filtered responses", () => {
    const parsed = parseSingleLookup(
      JSON.stringify({
        ip: "8.8.8.8",
        country_metadata: {
          calling_code: "+1",
        },
        security: {
          threat_score: 99,
          is_vpn: false,
        },
      }),
    );

    expect(parsed).toEqual({
      ip: "8.8.8.8",
      countryMetadata: {
        callingCode: "+1",
      },
      security: {
        threatScore: 99,
        isVpn: false,
      },
    });
  });

  it("parses a bulk mixed response", () => {
    const parsed = parseBulkLookup(
      JSON.stringify([
        { ip: "8.8.8.8", location: {} },
        { message: "invalid ip" },
      ]),
    );

    expect(parsed[0]).toEqual({
      success: true,
      data: {
        ip: "8.8.8.8",
        location: {},
      },
    });
    expect(parsed[1]).toEqual({
      success: false,
      error: {
        message: "invalid ip",
      },
    });
  });

  it("treats bulk items with both ip and message as errors", () => {
    const parsed = parseBulkLookup(
      JSON.stringify([
        { ip: "invalid-ip", message: "invalid ip" },
      ]),
    );

    expect(parsed[0]).toEqual({
      success: false,
      error: {
        message: "invalid ip",
      },
    });
  });

  it("always returns an error object for bulk errors", () => {
    const parsed = parseBulkLookup(
      JSON.stringify([
        { success: false },
      ]),
    );

    expect(parsed[0]).toEqual({
      success: false,
      error: {},
    });
  });

  it("does not invent omitted optional arrays in bulk success items", () => {
    const parsed = parseBulkLookup(
      JSON.stringify([
        {
          ip: "8.8.8.8",
          security: {
            threat_score: 42,
            is_vpn: true,
          },
        },
      ]),
    );

    expect(parsed[0]).toEqual({
      success: true,
      data: {
        ip: "8.8.8.8",
        security: {
          threatScore: 42,
          isVpn: true,
        },
      },
    });
  });
});

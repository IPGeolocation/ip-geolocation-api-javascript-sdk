import { describe, expect, it } from "vitest";

import {
  JsonOutputMode,
  LookupIpGeolocationRequest,
  toJson,
  toPrettyJson,
} from "../../src";

describe("json output helpers", () => {
  it("uses compact mode by default for SDK objects", () => {
    const value = new LookupIpGeolocationRequest({ ip: "8.8.8.8" });

    expect(JSON.parse(toJson(value))).toEqual({
      ip: "8.8.8.8",
      include: [],
      fields: [],
      excludes: [],
      headers: {},
      output: "json",
    });
  });

  it("includes undefined object fields as null in full mode", () => {
    const value = new LookupIpGeolocationRequest({});

    expect(JSON.parse(toJson(value, JsonOutputMode.FULL))).toEqual({
      ip: null,
      lang: null,
      include: [],
      fields: [],
      excludes: [],
      userAgent: null,
      headers: {},
      output: "json",
    });
  });

  it("keeps falsy values while dropping undefined fields in compact mode", () => {
    expect(
      JSON.parse(
        toJson({
          ip: "8.8.8.8",
          location: {
            city: undefined,
            countryName: "United States",
          },
          security: {
            threatScore: 0,
            isVpn: false,
            vpnProviderNames: [],
          },
        }),
      ),
    ).toEqual({
      ip: "8.8.8.8",
      location: {
        countryName: "United States",
      },
      security: {
        threatScore: 0,
        isVpn: false,
        vpnProviderNames: [],
      },
    });
  });

  it("returns indented output for pretty JSON", () => {
    const output = toPrettyJson(new LookupIpGeolocationRequest({ ip: "8.8.8.8" }));

    expect(output).toContain("\n");
    expect(output).toContain('  "ip": "8.8.8.8"');
  });

  it("accepts a valid string mode", () => {
    const parsed = JSON.parse(toJson(new LookupIpGeolocationRequest({}), "full"));

    expect(parsed.ip).toBeNull();
    expect(parsed.output).toBe("json");
  });

  it("rejects null or undefined mode", () => {
    expect(() => toJson(new LookupIpGeolocationRequest({}), undefined as never)).toThrow(
      "mode must not be null or undefined",
    );
    expect(() => toJson(new LookupIpGeolocationRequest({}), null as never)).toThrow(
      "mode must not be null or undefined",
    );
  });

  it("rejects invalid string mode", () => {
    expect(() => toJson(new LookupIpGeolocationRequest({ ip: "8.8.8.8" }), "weird")).toThrow(
      "mode must be either 'compact' or 'full'",
    );
  });

  it("rejects non-string non-enum mode", () => {
    expect(
      () =>
        toPrettyJson(
          new LookupIpGeolocationRequest({ ip: "8.8.8.8" }),
          123 as never,
        ),
    ).toThrow("mode must be a JsonOutputMode or string");
  });
});

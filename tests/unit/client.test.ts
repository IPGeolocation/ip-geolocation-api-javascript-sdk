import { describe, expect, it } from "vitest";

import { ResponseFormat } from "../../src/enums";
import type { HttpRequestData, HttpResponseData, HttpTransport } from "../../src/internal/transport";
import { IpGeolocationClient } from "../../src/client";

class TestTransport implements HttpTransport {
  public requests: HttpRequestData[] = [];
  private readonly responder: (request: HttpRequestData) => Promise<HttpResponseData>;

  public constructor(responder: (request: HttpRequestData) => Promise<HttpResponseData>) {
    this.responder = responder;
  }

  public async send(request: HttpRequestData): Promise<HttpResponseData> {
    this.requests.push(request);
    return await this.responder(request);
  }

  public async close(): Promise<void> {}
}

describe("IpGeolocationClient", () => {
  it("builds and parses a typed single lookup", async () => {
    const transport = new TestTransport(async () => ({
      statusCode: 200,
      body: JSON.stringify({
        ip: "8.8.8.8",
        location: { country_name: "United States" },
      }),
      headers: {
        "X-Credits-Charged": ["1"],
      },
    }));

    const client = new IpGeolocationClient({ apiKey: "key" }, transport);
    const response = await client.lookupIpGeolocation({
      ip: "8.8.8.8",
      fields: ["location.country_name"],
    });

    expect(response.data.ip).toBe("8.8.8.8");
    expect(response.data.location?.countryName).toBe("United States");
    expect(response.metadata.creditsCharged).toBe(1);
    expect(transport.requests[0]?.url).toContain("fields=location.country_name");
  });

  it("sends requestOrigin and raw xml requests correctly", async () => {
    const transport = new TestTransport(async () => ({
      statusCode: 200,
      body: "<LinkedHashMap><ip>8.8.8.8</ip></LinkedHashMap>",
      headers: {
        "Content-Type": ["application/xml"],
      },
    }));

    const client = new IpGeolocationClient(
      {
        requestOrigin: "https://app.example.com",
      },
      transport,
    );

    const response = await client.lookupIpGeolocationRaw({
      ip: "8.8.8.8",
      output: ResponseFormat.XML,
    });

    expect(response.data).toContain("<LinkedHashMap>");
    expect(transport.requests[0]?.headers.Origin).toEqual(["https://app.example.com"]);
    expect(transport.requests[0]?.headers.Accept).toEqual(["application/xml"]);
  });

  it("keeps configured requestOrigin authoritative over per-request Origin headers", async () => {
    const transport = new TestTransport(async () => ({
      statusCode: 200,
      body: JSON.stringify({ ip: "8.8.8.8" }),
      headers: {},
    }));

    const client = new IpGeolocationClient(
      {
        requestOrigin: "https://good.example.com",
      },
      transport,
    );

    await client.lookupIpGeolocation({
      ip: "8.8.8.8",
      headers: {
        Origin: "https://evil.example.com",
      },
    });

    expect(transport.requests[0]?.headers.Origin).toEqual(["https://good.example.com"]);
  });

  it("forwards a custom User-Agent from headers when userAgent is unset", async () => {
    const transport = new TestTransport(async () => ({
      statusCode: 200,
      body: JSON.stringify({ ip: "8.8.8.8" }),
      headers: {},
    }));

    const client = new IpGeolocationClient({ apiKey: "key" }, transport);

    await client.lookupIpGeolocation({
      ip: "8.8.8.8",
      headers: {
        "User-Agent": "MyCustomAgent/1.0",
      },
    });

    expect(transport.requests[0]?.headers["User-Agent"]).toEqual(["MyCustomAgent/1.0"]);
  });

  it("keeps userAgent authoritative over headers-bag User-Agent values", async () => {
    const transport = new TestTransport(async () => ({
      statusCode: 200,
      body: JSON.stringify({ ip: "8.8.8.8" }),
      headers: {},
    }));

    const client = new IpGeolocationClient({ apiKey: "key" }, transport);

    await client.lookupIpGeolocation({
      ip: "8.8.8.8",
      userAgent: "FieldAgent/2.0",
      headers: {
        "User-Agent": "HeaderAgent/1.0",
      },
    });

    expect(transport.requests[0]?.headers["User-Agent"]).toEqual(["FieldAgent/2.0"]);
  });

  it("builds and parses a bulk mixed response", async () => {
    const transport = new TestTransport(async () => ({
      statusCode: 200,
      body: JSON.stringify([{ ip: "8.8.8.8" }, { message: "invalid ip" }]),
      headers: {
        "X-Successful-Record": ["1"],
      },
    }));

    const client = new IpGeolocationClient({ apiKey: "key" }, transport);
    const response = await client.bulkLookupIpGeolocation({
      ips: ["8.8.8.8", "invalid-ip"],
    });

    expect(response.data[0]?.success).toBe(true);
    expect(response.data[1]).toEqual({
      success: false,
      error: { message: "invalid ip" },
    });
    expect(transport.requests[0]?.method).toBe("POST");
    expect(transport.requests[0]?.headers["Content-Type"]).toEqual(["application/json"]);
  });

  it("rejects xml output for typed methods and closed clients", async () => {
    const transport = new TestTransport(async () => ({
      statusCode: 200,
      body: JSON.stringify({ ip: "8.8.8.8" }),
      headers: {},
    }));

    const client = new IpGeolocationClient({ apiKey: "key" }, transport);

    await expect(
      client.lookupIpGeolocation({
        ip: "8.8.8.8",
        output: ResponseFormat.XML,
      }),
    ).rejects.toThrow("XML output is not supported by typed methods");

    await client.close();

    await expect(client.lookupIpGeolocation({ ip: "8.8.8.8" })).rejects.toThrow(
      "client is closed",
    );
  });
});

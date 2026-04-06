import { describe, expect, it } from "vitest";

import { IpGeolocationClientConfig } from "../../src/config";

describe("IpGeolocationClientConfig", () => {
  it("uses the documented defaults", () => {
    const config = new IpGeolocationClientConfig();

    expect(config.apiKey).toBeUndefined();
    expect(config.requestOrigin).toBeUndefined();
    expect(config.baseUrl).toBe("https://api.ipgeolocation.io");
    expect(config.connectTimeoutMs).toBe(10_000);
    expect(config.readTimeoutMs).toBe(30_000);
  });

  it("normalizes apiKey and requestOrigin", () => {
    const config = new IpGeolocationClientConfig({
      apiKey: "  key  ",
      requestOrigin: "https://app.example.com/",
    });

    expect(config.apiKey).toBe("key");
    expect(config.requestOrigin).toBe("https://app.example.com");
  });

  it("rejects malformed requestOrigin values", () => {
    expect(
      () =>
        new IpGeolocationClientConfig({
          requestOrigin: "https://app.example.com/path",
        }),
    ).toThrowError("requestOrigin must not include a path");

    expect(
      () =>
        new IpGeolocationClientConfig({
          requestOrigin: "https://app.example.com?x=1",
        }),
    ).toThrowError("requestOrigin must not include params, query, or fragment");
  });

  it("rejects malformed baseUrl", () => {
    expect(
      () =>
        new IpGeolocationClientConfig({
          baseUrl: "/relative",
        }),
    ).toThrowError("baseUrl must be an absolute http or https URL");

    expect(
      () =>
        new IpGeolocationClientConfig({
          baseUrl: "https://user:pass@proxy.example.com",
        }),
    ).toThrowError("baseUrl must not include userinfo");
  });

  it("allows independent sequential timeout values", () => {
    const config = new IpGeolocationClientConfig({
      connectTimeoutMs: 30_000,
      readTimeoutMs: 5_000,
    });

    expect(config.connectTimeoutMs).toBe(30_000);
    expect(config.readTimeoutMs).toBe(5_000);
  });

  it("rejects non-integer and overflowing timeout values", () => {
    expect(
      () =>
        new IpGeolocationClientConfig({
          connectTimeoutMs: 1.5,
        }),
    ).toThrowError("connectTimeoutMs must be an integer");

    expect(
      () =>
        new IpGeolocationClientConfig({
          readTimeoutMs: 2_147_483_648,
        }),
    ).toThrowError("readTimeoutMs must be less than or equal to 2147483647");
  });

  it("rejects non-plain config init objects", () => {
    expect(
      () => new IpGeolocationClientConfig(new Date() as never),
    ).toThrowError("config must be a plain object");
  });
});

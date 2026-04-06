import { describe, expect, it } from "vitest";

import { Language, ResponseFormat } from "../../src/enums";
import {
  BulkLookupIpGeolocationRequest,
  LookupIpGeolocationRequest,
} from "../../src/request-models";

describe("LookupIpGeolocationRequest", () => {
  it("normalizes basic values", () => {
    const request = new LookupIpGeolocationRequest({
      ip: " 8.8.8.8 ",
      lang: "DE",
      include: ["security", "abuse"],
      userAgent: " custom-agent ",
      headers: {
        "X-Test": [" a ", "b"],
      },
      output: "XML",
    });

    expect(request.ip).toBe("8.8.8.8");
    expect(request.lang).toBe(Language.DE);
    expect(request.include).toEqual(["security", "abuse"]);
    expect(request.userAgent).toBe("custom-agent");
    expect(request.headers["X-Test"]).toEqual(["a", "b"]);
    expect(request.output).toBe(ResponseFormat.XML);
  });

  it("rejects a blank ip", () => {
    expect(
      () =>
        new LookupIpGeolocationRequest({
          ip: "   ",
        }),
    ).toThrowError("ip must not be blank");
  });

  it("rejects a single string include value", () => {
    expect(
      () =>
        new LookupIpGeolocationRequest({
          include: "security" as never,
        }),
    ).toThrowError("include must be an iterable of strings, not a single string");
  });

  it("rejects non-plain request init objects", () => {
    expect(
      () => new LookupIpGeolocationRequest(new Date() as never),
    ).toThrowError("request must be a plain object");
  });

  it("accepts Headers instances", () => {
    const request = new LookupIpGeolocationRequest({
      headers: new Headers([["X-Test", "1"]]),
    });

    expect(request.headers["x-test"]).toEqual(["1"]);
  });

  it("accepts tuple-array headers", () => {
    const request = new LookupIpGeolocationRequest({
      headers: [
        ["X-Test", "1"],
        ["X-Test", "2"],
        ["X-Second", [" 3 ", "4"]],
      ],
    });

    expect(request.headers["X-Test"]).toEqual(["1", "2"]);
    expect(request.headers["X-Second"]).toEqual(["3", "4"]);
  });

  it("rejects non-plain header objects", () => {
    expect(
      () =>
        new LookupIpGeolocationRequest({
          headers: new Date() as never,
        }),
    ).toThrowError(
      "headers must be a plain object, Headers, Map, or iterable of [name, value] pairs",
    );
  });
});

describe("BulkLookupIpGeolocationRequest", () => {
  it("requires at least one ip", () => {
    expect(
      () =>
        new BulkLookupIpGeolocationRequest({
          ips: [],
        }),
    ).toThrowError("ips must not be empty");
  });

  it("normalizes bulk request values", () => {
    const request = new BulkLookupIpGeolocationRequest({
      ips: [" 8.8.8.8 ", "1.1.1.1"],
      fields: ["location.country_name"],
      output: "json",
    });

    expect(request.ips).toEqual(["8.8.8.8", "1.1.1.1"]);
    expect(request.fields).toEqual(["location.country_name"]);
    expect(request.output).toBe(ResponseFormat.JSON);
  });

  it("rejects non-plain bulk request init objects", () => {
    expect(
      () => new BulkLookupIpGeolocationRequest(new Date() as never),
    ).toThrowError("request must be a plain object");
  });
});

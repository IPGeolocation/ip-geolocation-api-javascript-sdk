import { describe, expect, it } from "vitest";

import { ResponseFormat } from "../../src/enums";
import { UnauthorizedError } from "../../src/errors";
import {
  buildQuery,
  extractApiMessage,
  mergeHeaders,
  parseIntHeader,
  toApiError,
  toMetadata,
  validateJsonOutput,
} from "../../src/internal/shared";

describe("internal shared helpers", () => {
  it("builds encoded query strings and skips blank values", () => {
    expect(
      buildQuery({
        apiKey: "k",
        ip: "8.8.8.8",
        empty: "   ",
        none: undefined,
        fields: "location.country_name,security.threat_score",
      }),
    ).toBe(
      "?apiKey=k&ip=8.8.8.8&fields=location.country_name%2Csecurity.threat_score",
    );
  });

  it("merges headers case-insensitively with later values winning", () => {
    const merged = mergeHeaders(
      { Accept: Object.freeze(["application/json"]) },
      { accept: Object.freeze(["application/xml"]) },
      { "User-Agent": Object.freeze(["sdk/1.0"]) },
    );

    expect(merged).toEqual({
      accept: ["application/xml"],
      "User-Agent": ["sdk/1.0"],
    });
  });

  it("rejects xml output for typed methods", () => {
    expect(() => validateJsonOutput(ResponseFormat.XML)).toThrowError(
      "XML output is not supported by typed methods. Use ResponseFormat.JSON.",
    );
  });

  it("maps api errors and extracts metadata", () => {
    const error = toApiError(401, '{"message":"bad key"}');
    expect(error).toBeInstanceOf(UnauthorizedError);
    expect(error.message).toContain("bad key");

    const metadata = toMetadata(200, 45, {
      "X-Credits-Charged": ["2"],
      "X-Successful-Record": ["1"],
    });
    expect(metadata.creditsCharged).toBe(2);
    expect(metadata.successfulRecords).toBe(1);
  });

  it("extracts api messages from json and text bodies", () => {
    expect(extractApiMessage('{"message":"hello"}')).toBe("hello");
    expect(extractApiMessage('{"error":{"message":"bad key"}}')).toBe("bad key");
    expect(extractApiMessage("plain text error")).toBe("plain text error");
  });

  it("parses only whole integer header values", () => {
    expect(parseIntHeader("12")).toBe(12);
    expect(parseIntHeader(" 12 ")).toBe(12);
    expect(parseIntHeader("12x")).toBeUndefined();
    expect(parseIntHeader("-1")).toBeUndefined();
  });
});

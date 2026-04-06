import { describe, expect, it } from "vitest";

import { ApiResponseMetadata } from "../../src/models";

describe("ApiResponseMetadata", () => {
  it("provides case-insensitive header helpers", () => {
    const metadata = new ApiResponseMetadata({
      creditsCharged: 2,
      successfulRecords: 1,
      statusCode: 200,
      durationMs: 42,
      rawHeaders: {
        "X-Credits-Charged": ["2"],
        "Content-Type": ["application/json"],
      },
    });

    expect(metadata.headerValues("content-type")).toEqual(["application/json"]);
    expect(metadata.firstHeaderValue("x-credits-charged")).toBe("2");
  });

  it("rejects non-string rawHeaders array items", () => {
    expect(
      () =>
        new ApiResponseMetadata({
          statusCode: 200,
          durationMs: 1,
          rawHeaders: {
            "X-Test": [1 as never, "ok"],
          },
        }),
    ).toThrowError("rawHeaders values must contain only strings");
  });
});

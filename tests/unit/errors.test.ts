import { describe, expect, it } from "vitest";

import { ApiError, UnauthorizedError } from "../../src/errors";

describe("errors", () => {
  it("preserves api error fields", () => {
    const error = new UnauthorizedError("unauthorized", 401, "bad key");

    expect(error).toBeInstanceOf(ApiError);
    expect(error.statusCode).toBe(401);
    expect(error.apiMessage).toBe("bad key");
    expect(error.name).toBe("UnauthorizedError");
  });
});

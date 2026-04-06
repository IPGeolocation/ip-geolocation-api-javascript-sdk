import { describe, expect, it, vi } from "vitest";

import { RequestTimeoutError, TransportError } from "../../src/errors";
import { FetchHttpTransport } from "../../src/internal/transport";

describe("FetchHttpTransport", () => {
  it("sends requests and normalizes responses", async () => {
    let capturedHeaders: HeadersInit | undefined;

    const transport = new FetchHttpTransport({
      fetch: vi.fn(async (_input, init) => {
        capturedHeaders = init?.headers;
        return new Response("ok", {
          status: 200,
          headers: {
            "Content-Type": "text/plain",
            "X-Test": "1",
          },
        });
      }) as typeof fetch,
    });

    const response = await transport.send({
      url: "https://example.com",
      method: "GET",
      headers: {
        Accept: Object.freeze(["application/json"]),
        "X-Test": Object.freeze(["a", "b"]),
      },
      body: undefined,
      connectTimeoutMs: 1_000,
      readTimeoutMs: 5_000,
    });

    expect(capturedHeaders).toEqual({
      Accept: "application/json",
      "X-Test": "a, b",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe("ok");
    expect(response.headers["content-type"]).toEqual(["text/plain"]);
  });

  it("maps aborted fetch calls to RequestTimeoutError", async () => {
    const transport = new FetchHttpTransport({
      fetch: vi.fn(
        async (_input, init) =>
          await new Promise<Response>((_resolve, reject) => {
            init?.signal?.addEventListener(
              "abort",
              () => reject(new DOMException("aborted", "AbortError")),
              { once: true },
            );
          }),
      ) as typeof fetch,
    });

    await expect(
      transport.send({
        url: "https://example.com",
        method: "GET",
        headers: {},
        body: undefined,
        connectTimeoutMs: 1,
        readTimeoutMs: 1,
      }),
    ).rejects.toMatchObject({
      message:
        "HTTP request timed out after 1ms while waiting for response headers",
    });
  });

  it("uses readTimeoutMs while reading the response body", async () => {
    const transport = new FetchHttpTransport({
      fetch: vi.fn(async (_input, init) => {
        const stream = new ReadableStream<Uint8Array>({
          start(controller) {
            init?.signal?.addEventListener(
              "abort",
              () => controller.error(new DOMException("aborted", "AbortError")),
              { once: true },
            );
          },
        });

        return new Response(stream, {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        });
      }) as typeof fetch,
    });

    await expect(
      transport.send({
        url: "https://example.com",
        method: "GET",
        headers: {},
        body: undefined,
        connectTimeoutMs: 100,
        readTimeoutMs: 1,
      }),
    ).rejects.toMatchObject({
      message:
        "HTTP request timed out after 1ms while reading the response body",
    });
  });

  it("joins streamed response chunks in order", async () => {
    const encoder = new TextEncoder();
    const transport = new FetchHttpTransport({
      fetch: vi.fn(
        async () =>
          new Response(
            new ReadableStream<Uint8Array>({
              start(controller) {
                controller.enqueue(encoder.encode("hello "));
                controller.enqueue(encoder.encode("world"));
                controller.close();
              },
            }),
            {
              status: 200,
              headers: {
                "Content-Type": "text/plain",
              },
            },
          ),
      ) as typeof fetch,
    });

    const response = await transport.send({
      url: "https://example.com",
      method: "GET",
      headers: {},
      body: undefined,
      connectTimeoutMs: 1_000,
      readTimeoutMs: 5_000,
    });

    expect(response.body).toBe("hello world");
  });

  it("preserves the original network failure as cause", async () => {
    const rootCause = new Error("socket hang up");
    const transport = new FetchHttpTransport({
      fetch: vi.fn(async () => {
        throw rootCause;
      }) as typeof fetch,
    });

    try {
      await transport.send({
        url: "https://example.com",
        method: "GET",
        headers: {},
        body: undefined,
        connectTimeoutMs: 1_000,
        readTimeoutMs: 5_000,
      });
      throw new Error("expected transport.send() to throw");
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(TransportError);
      expect((error as TransportError).cause).toBe(rootCause);
    }
  });

  it("enforces the max response body size", async () => {
    const transport = new FetchHttpTransport({
      fetch: vi.fn(async () => new Response("toolong")) as typeof fetch,
      maxResponseBodyChars: 3,
    });

    await expect(
      transport.send({
        url: "https://example.com",
        method: "GET",
        headers: {},
        body: undefined,
        connectTimeoutMs: 1_000,
        readTimeoutMs: 5_000,
      }),
    ).rejects.toBeInstanceOf(TransportError);
  });

  it("cancels the stream reader when the body exceeds the max size", async () => {
    const cancel = vi.fn(async () => undefined);
    const releaseLock = vi.fn(() => undefined);
    const reader = {
      read: vi
        .fn<() => Promise<ReadableStreamReadResult<Uint8Array>>>()
        .mockResolvedValueOnce({
          done: false,
          value: new TextEncoder().encode("toolong"),
        }),
      cancel,
      releaseLock,
    };

    const transport = new FetchHttpTransport({
      fetch: vi.fn(
        async () =>
          ({
            status: 200,
            headers: new Headers(),
            body: {
              getReader: () => reader,
            },
          }) as unknown as Response,
      ) as typeof fetch,
      maxResponseBodyChars: 3,
    });

    await expect(
      transport.send({
        url: "https://example.com",
        method: "GET",
        headers: {},
        body: undefined,
        connectTimeoutMs: 1_000,
        readTimeoutMs: 5_000,
      }),
    ).rejects.toBeInstanceOf(TransportError);

    expect(cancel).toHaveBeenCalledTimes(1);
    expect(releaseLock).toHaveBeenCalledTimes(1);
  });
});

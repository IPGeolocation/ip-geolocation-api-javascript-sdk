import { RequestTimeoutError, TransportError } from "../errors";
import type { HeaderMultiMap } from "../models";

export interface HttpRequestData {
  url: string;
  method: string;
  headers: HeaderMultiMap;
  body?: string | undefined;
  connectTimeoutMs: number;
  readTimeoutMs: number;
}

export interface HttpResponseData {
  statusCode: number;
  body: string;
  headers: HeaderMultiMap;
}

export interface HttpTransport {
  send(request: HttpRequestData): Promise<HttpResponseData>;
  close(): Promise<void>;
}

export type FetchLike = typeof fetch;

export interface FetchHttpTransportInit {
  fetch?: FetchLike;
  maxResponseBodyChars?: number;
}

export const DEFAULT_MAX_RESPONSE_BODY_CHARS = 128 * 1024 * 1024;

export class FetchHttpTransport implements HttpTransport {
  private readonly fetchImpl: FetchLike;
  private readonly maxResponseBodyChars: number;

  public constructor(init: FetchHttpTransportInit = {}) {
    const fetchImpl = init.fetch ?? globalThis.fetch;
    if (typeof fetchImpl !== "function") {
      throw new TypeError("FetchHttpTransport requires a fetch implementation");
    }

    const maxResponseBodyChars =
      init.maxResponseBodyChars ?? DEFAULT_MAX_RESPONSE_BODY_CHARS;
    if (!Number.isInteger(maxResponseBodyChars) || maxResponseBodyChars <= 0) {
      throw new RangeError("maxResponseBodyChars must be a positive integer");
    }

    this.fetchImpl = fetchImpl;
    this.maxResponseBodyChars = maxResponseBodyChars;
  }

  public async send(request: HttpRequestData): Promise<HttpResponseData> {
    const controller = new AbortController();
    let phase: TimeoutPhase = "connect";
    let timeoutHandle = startTimeout(controller, request.connectTimeoutMs);

    try {
      const init: RequestInit = {
        method: request.method,
        headers: toFetchHeaders(request.headers),
        signal: controller.signal,
      };
      if (request.body != null) {
        init.body = request.body;
      }

      const response = await this.fetchImpl(request.url, init);
      clearTimeout(timeoutHandle);
      phase = "read";
      timeoutHandle = startTimeout(controller, request.readTimeoutMs);

      const body = await readResponseBody(
        response,
        this.maxResponseBodyChars,
        controller.signal,
      );
      return {
        statusCode: response.status,
        body,
        headers: extractHeaders(response.headers),
      };
    } catch (error: unknown) {
      if (isAbortError(error)) {
        throw new RequestTimeoutError(toTimeoutMessage(request, phase), { cause: error });
      }
      if (error instanceof TransportError) {
        throw error;
      }
      throw new TransportError("HTTP transport error", { cause: error });
    } finally {
      clearTimeout(timeoutHandle);
    }
  }

  public async close(): Promise<void> {
    // no-op for the fetch transport
  }
}

function toFetchHeaders(headers: HeaderMultiMap): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, values] of Object.entries(headers)) {
    if (values.length === 0) {
      continue;
    }
    result[key] = values.length === 1 ? values[0] ?? "" : values.join(", ");
  }
  return result;
}

async function readResponseBody(
  response: Response,
  maxChars: number,
  signal: AbortSignal,
): Promise<string> {
  if (response.body == null || typeof response.body.getReader !== "function") {
    const text = await withAbort(response.text(), signal);
    if (text.length > maxChars) {
      throw new TransportError(
        `Response body exceeded max size of ${maxChars} characters`,
      );
    }
    return text;
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const chunks: string[] = [];
  let totalChars = 0;
  let shouldCancelReader = false;

  try {
    while (true) {
      const { done, value } = await withAbort(reader.read(), signal);
      if (done) {
        break;
      }

      const decoded = decoder.decode(value, { stream: true });
      if (decoded.length > 0) {
        totalChars += decoded.length;
        if (totalChars > maxChars) {
          shouldCancelReader = true;
          throw new TransportError(
            `Response body exceeded max size of ${maxChars} characters`,
          );
        }
        chunks.push(decoded);
      }
    }

    const finalChunk = decoder.decode();
    if (finalChunk.length > 0) {
      totalChars += finalChunk.length;
      if (totalChars > maxChars) {
        shouldCancelReader = true;
        throw new TransportError(
          `Response body exceeded max size of ${maxChars} characters`,
        );
      }
      chunks.push(finalChunk);
    }

    return chunks.join("");
  } finally {
    if (shouldCancelReader) {
      await cancelReaderQuietly(reader);
    }
    reader.releaseLock();
  }
}

function extractHeaders(headers: Headers): HeaderMultiMap {
  const result: Record<string, readonly string[]> = {};
  headers.forEach((value, key) => {
    result[key] = Object.freeze([value]);
  });
  return Object.freeze(result);
}

function isAbortError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error != null &&
    "name" in error &&
    error.name === "AbortError"
  );
}

type TimeoutPhase = "connect" | "read";

function startTimeout(
  controller: AbortController,
  timeoutMs: number,
): ReturnType<typeof setTimeout> {
  return setTimeout(() => controller.abort(), timeoutMs);
}

async function cancelReaderQuietly(
  reader: ReadableStreamDefaultReader<Uint8Array>,
): Promise<void> {
  try {
    await reader.cancel();
  } catch {
    // Ignore reader cancellation failures during cleanup.
  }
}

function toTimeoutMessage(request: HttpRequestData, phase: TimeoutPhase): string {
  if (phase === "connect") {
    return `HTTP request timed out after ${request.connectTimeoutMs}ms while waiting for response headers`;
  }

  return `HTTP request timed out after ${request.readTimeoutMs}ms while reading the response body`;
}

function withAbort<T>(promise: Promise<T>, signal: AbortSignal): Promise<T> {
  if (signal.aborted) {
    return Promise.reject(new DOMException("aborted", "AbortError"));
  }

  return new Promise<T>((resolve, reject) => {
    const onAbort = (): void => {
      cleanup();
      reject(new DOMException("aborted", "AbortError"));
    };

    const cleanup = (): void => {
      signal.removeEventListener("abort", onAbort);
    };

    signal.addEventListener("abort", onAbort, { once: true });
    promise.then(
      (value) => {
        cleanup();
        resolve(value);
      },
      (error: unknown) => {
        cleanup();
        reject(error);
      },
    );
  });
}

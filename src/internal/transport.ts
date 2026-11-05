import { RequestTimeoutError, TransportError } from "../errors";
import type { HeaderMultiMap } from "../models";
import { safeTransportError } from "./shared";

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
        redirect: "manual",
      };
      if (request.body != null) {
        init.body = request.body;
      }

      const response = await fetchWithRedirects(this.fetchImpl, request.url, init, controller.signal);
      clearTimeout(timeoutHandle);
      phase = "read";
      timeoutHandle = startTimeout(controller, request.readTimeoutMs);

      let body = "";
      try {
        body = await readResponseBody(response, this.maxResponseBodyChars, controller.signal);
      } catch (error) {
        if (response.status < 300) throw error;
      }
      return {
        statusCode: response.status,
        body,
        headers: extractHeaders(response.headers),
      };
    } catch (error: unknown) {
      const key = requestApiKey(request.url);
      if (isAbortError(error)) {
        throw safeTransportError(new RequestTimeoutError(toTimeoutMessage(request, phase), { cause: error }), key);
      }
      if (error instanceof TransportError) {
        throw safeTransportError(error, key);
      }
      throw safeTransportError(new TransportError("HTTP transport error", { cause: error }), key);
    } finally {
      clearTimeout(timeoutHandle);
    }
  }

  public async close(): Promise<void> {
    // no-op for the fetch transport
  }
}

function requestApiKey(url: string): string | undefined {
  try {
    return new URL(url, "https://localhost").searchParams.get("apiKey") ?? undefined;
  } catch {
    return undefined;
  }
}

const redirectStatuses = new Set([301, 302, 303, 307, 308]);

async function fetchWithRedirects(fetchImpl: FetchLike, url: string, init: RequestInit, signal: AbortSignal): Promise<Response> {
  for (let redirects = 0; ; redirects++) {
    const response = await withAbort(fetchImpl(url, init), signal);
    if (response.type === "opaqueredirect") {
      throw new TransportError("The browser blocked an API redirect. Use the final API address.");
    }
    if (!redirectStatuses.has(response.status)) return response;
    const location = response.headers.get("Location");
    if (location === null) return response;
    void response.body?.cancel().catch(() => {});
    if (redirects === 20) throw new TransportError("Too many API redirects");
    const current = new URL(url, globalThis.location?.href);
    const next = new URL(location, current);
    if (next.protocol !== current.protocol || next.origin !== current.origin || next.username || next.password) {
      throw new TransportError("The API redirected the request to another address");
    }
    const method = init.method?.toUpperCase();
    if ((response.status === 303 && method !== "HEAD" && method !== "GET") ||
        ((response.status === 301 || response.status === 302) && method === "POST")) {
      init.method = "GET";
      delete init.body;
      const headers = new Headers(init.headers);
      for (const name of ["content-encoding", "content-language", "content-location", "content-type", "content-length"]) {
        headers.delete(name);
      }
      init.headers = headers;
    }
    url = next.href;
  }
}

function toFetchHeaders(headers: HeaderMultiMap): HeadersInit {
  const result: Record<string, string> = Object.create(null);
  for (const [key, values] of Object.entries(headers)) {
    if (values.length === 0) {
      continue;
    }
    result[key] = values.length === 1 ? values[0] ?? "" : values.join(", ");
  }
  return "__proto__" in result ? Object.entries(result) : { ...result };
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
    if (shouldCancelReader || signal.aborted) {
      void cancelReaderQuietly(reader);
    }
    reader.releaseLock();
  }
}

function extractHeaders(headers: Headers): HeaderMultiMap {
  const result: Record<string, readonly string[]> = Object.create(null);
  headers.forEach((value, key) => {
    result[key] = Object.freeze([value]);
  });
  return Object.freeze({ ...result });
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
  return new Promise<T>((resolve, reject) => {
    const onAbort = (): void => {
      cleanup();
      reject(new DOMException("aborted", "AbortError"));
    };

    const cleanup = (): void => {
      signal.removeEventListener("abort", onAbort);
    };

    signal.addEventListener("abort", onAbort, { once: true });
    if (signal.aborted) onAbort();
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

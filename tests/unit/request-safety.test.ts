import { randomUUID } from "node:crypto";
import { inspect } from "node:util";
import { expect, it } from "vitest";
import {
  FetchHttpTransport,
  IpGeolocationClient,
  IpGeolocationClientConfig,
  Language,
  RateLimitError,
  SerializationError,
  TransportError,
  UnauthorizedError,
  toJson,
  toPrettyJson,
} from "../../src";

const ip = "192.0.2.1";
const key = `fixture-${randomUUID()} /+`;
const config = new IpGeolocationClientConfig({ apiKey: key });
function clientFor(
  fetch: typeof globalThis.fetch,
  maxResponseBodyChars?: number,
) {
  return new IpGeolocationClient(
    config,
    new FetchHttpTransport({ fetch, maxResponseBodyChars }),
  );
}

it("keeps the configured key usable and hides it when displaying a client that has made a request", async () => {
  const transport = {
    requests: [] as string[],
    async send(request: { url: string }) {
      this.requests.push(request.url);
      return { body: "{}", statusCode: 200, headers: {} };
    },
    async close() {},
  };
  const client = new IpGeolocationClient(config, transport);
  await client.lookupIpGeolocation({ ip });
  expect(new URL(transport.requests[0]!).searchParams.get("apiKey")).toBe(key);
  expect({ ...config }.apiKey).toBe(key);
  for (const value of [config, client]) {
    for (const output of [
      JSON.stringify(value),
      toJson(value),
      toPrettyJson(value, "full"),
      inspect(value, { showHidden: true, getters: true }),
    ]) {
      expect(output).toContain("[REDACTED]");
      expect(output).not.toContain(key);
      expect(output).not.toContain(encodeURIComponent(key));
      expect(output).not.toContain("/v3/ipgeo?");
    }
  }
  expect(
    JSON.parse(toJson({ config }, "full")).config.requestOrigin,
  ).toBeNull();
});

it("masks keys before truncating text and after decoding JSON", async () => {
  const formKey = new URLSearchParams({ k: key }).toString().slice(2);
  const errors = [
    "x".repeat(509) + key,
    JSON.stringify({
      message: `bad ${encodeURIComponent(key).replace(/%2F/g, "%2f")} and ${formKey}`,
    }),
    JSON.stringify({ error: { message: key } }).replace(
      key,
      `\\u0066${key.slice(1)}`,
    ),
  ];
  for (const body of errors) {
    const client = clientFor(async () => new Response(body, { status: 401 }));
    const error = await client.lookupIpGeolocationRaw({ ip }).catch((e) => e);
    expect(error).toBeInstanceOf(UnauthorizedError);
    expect(error.apiMessage).not.toContain(key.slice(0, 3));
    expect(error.message).toContain("[RE");
    expect(error.statusCode).toBe(401);
  }
});

it("keeps request URLs and response snippets out of error causes", async () => {
  const transport = {
    async send(request: { url: string }) {
      throw Object.assign(new TypeError(`failed ${request.url}`), {
        cause: { key },
        request,
      });
    },
    async close() {},
  };
  const client = new IpGeolocationClient(config, transport);
  const error = await client.lookupIpGeolocation({ ip }).catch((e) => e);
  expect(error).toBeInstanceOf(TypeError);
  expect(error.message).toContain("[REDACTED]");
  expect(inspect(error, { showHidden: true })).not.toContain(key.slice(0, 8));
  const invalid = await clientFor(async () => new Response("bad: " + key))
    .lookupIpGeolocation({ ip })
    .catch((e) => e);
  expect(invalid).toBeInstanceOf(SerializationError);
  expect(invalid.cause).toBeUndefined();
});

it("preserves an HTTP error if its body is oversized, unreadable or late", async () => {
  const responses = [
    new Response("too large", { status: 429 }),
    new Response(
      new ReadableStream({
        start(c) {
          c.error(new Error("broken"));
        },
      }),
      { status: 429 },
    ),
    new Response(new ReadableStream({}), { status: 429 }),
  ];
  for (const response of responses) {
    const client = new IpGeolocationClient(
      { apiKey: key, readTimeoutMs: 25 },
      new FetchHttpTransport({
        fetch: async () => response,
        maxResponseBodyChars: 4,
      }),
    );
    const error = await client
      .bulkLookupIpGeolocation({ ips: [ip] })
      .catch((e) => e);
    expect(error).toBeInstanceOf(RateLimitError);
    expect(error.statusCode).toBe(429);
  }
  await expect(
    clientFor(async () => new Response("too large"), 4).lookupIpGeolocationRaw({
      ip,
    }),
  ).rejects.toBeInstanceOf(TransportError);
});

it("sends Arabic on both endpoints and leaves successful data and raw response text intact", async () => {
  const raw = JSON.stringify([{ message: key }, { ip: key }], null, 2);
  const requests: URL[] = [];
  const client = clientFor(async (url) => {
    const request = new URL(String(url));
    requests.push(request);
    return new Response(
      request.pathname.endsWith("-bulk")
        ? raw
        : JSON.stringify({ domain: key }),
    );
  });
  const single = await client.lookupIpGeolocation({ ip, lang: Language.AR });
  const request = { ips: [ip, ip], lang: "ar" };
  const bulk = await client.bulkLookupIpGeolocation(request);
  expect(single.data.domain).toBe(key);
  expect(bulk.data).toEqual([
    { success: false, error: { message: "[REDACTED]" } },
    { success: true, data: { ip: key } },
  ]);
  expect((await client.bulkLookupIpGeolocationRaw(request)).data).toBe(raw);
  expect(requests.map((url) => url.searchParams.get("lang"))).toEqual([
    "ar",
    "ar",
    "ar",
  ]);
});

it.each([0, 2])(
  "rejects %i rows for one IP but preserves raw JSON",
  async (count) => {
    const body = JSON.stringify(Array.from({ length: count }, () => ({ ip })));
    const client = clientFor(async () => new Response(body));
    await expect(
      client.bulkLookupIpGeolocation({ ips: [ip] }),
    ).rejects.toBeInstanceOf(SerializationError);
    expect((await client.bulkLookupIpGeolocationRaw({ ips: [ip] })).data).toBe(
      body,
    );
  },
);

it("preserves special header names and JSON keys without changing object prototypes", async () => {
  const headers = new Map([
    ["__proto__", "one"],
    ["constructor", "two"],
  ]);
  const client = clientFor(async (_url, init) => {
    expect(new Headers(init!.headers).get("__proto__")).toBe("one");
    return new Response("{}", { headers: [...headers] });
  });
  const { metadata } = await client.lookupIpGeolocation({ ip, headers });
  expect(metadata.firstHeaderValue("__proto__")).toBe("one");
  const value = JSON.parse('{"__proto__":{"keep":true},"constructor":"two"}');
  expect(JSON.parse(toJson(value))).toEqual(value);
  expect(Object.getPrototypeOf(metadata.rawHeaders)).toBe(Object.prototype);
});

it("returns all 50,000 typed bulk rows in order, including empty and false field values", async () => {
  const ips = Array.from(
    { length: 50_000 },
    (_, n) => `198.18.${Math.floor(n / 256)}.${n % 256}`,
  );
  const client = clientFor(async (_url, init) => {
    expect(JSON.parse(String(init!.body)).ips).toEqual(ips);
    return Response.json(
      ips.map((ip, i) =>
        i === 1
          ? { message: "invalid" }
          : {
              ip,
              network: { is_cdn: false, cdn_provider_name: "" },
              security: { proxy_days_seen_7d: 0, is_corporate_gateway: false },
            },
      ),
    );
  });
  const result = await client.bulkLookupIpGeolocation({
    ips,
    lang: Language.AR,
  });
  expect(
    result.data.map((row) => (row.success ? row.data.ip : "invalid")),
  ).toEqual(ips.map((value, i) => (i === 1 ? "invalid" : value)));
  expect(result.data[0]).toEqual({
    success: true,
    data: {
      ip: ips[0],
      network: { isCdn: false, cdnProviderName: "" },
      security: { proxyDaysSeen7d: 0, isCorporateGateway: false },
    },
  });
});

it("preserves a custom transport's retry error and safe details", async () => {
  class RetryError extends Error {
    readonly code = "ECONNRESET";
    readonly retryable = true;
    readonly cause = { detail: new Error("connection reset") };
  }
  const failure = new RetryError("connection refused");
  const client = new IpGeolocationClient(config, {
    async send() {
      throw failure;
    },
    async close() {},
  });
  await expect(client.lookupIpGeolocation({ ip })).rejects.toBe(failure);
  expect(failure.cause.detail).toBeInstanceOf(Error);
});

it("hides the key in normalized text, unrecognized JSON and the URL actually sent by Fetch", async () => {
  const samples = [
    { apiKey: "fixture proof", body: "errors: fixture \n proof" },
    {
      apiKey: "fixtureKeyZ",
      body: '{"nested":{"context":"fixture\\u004beyZ"}}',
    },
    { apiKey: "fixture'!proof", body: undefined },
  ];
  for (const { apiKey, body } of samples) {
    const client = new IpGeolocationClient(
      { apiKey },
      new FetchHttpTransport({
        fetch: async (input, init) =>
          new Response(
            body ?? JSON.stringify({ message: new Request(input, init).url }),
            { status: 401 },
          ),
      }),
    );
    const error = await client.lookupIpGeolocation({ ip }).catch((e) => e);
    expect(error).toBeInstanceOf(UnauthorizedError);
    expect(error.apiMessage).toContain("[REDACTED]");
    expect(decodeURIComponent(error.apiMessage)).not.toContain(apiKey);
    if (body?.startsWith("{"))
      expect(JSON.parse(error.apiMessage).nested.context).toBe("[REDACTED]");
  }
});

it("retains common network error codes on authenticated requests", async () => {
  const cause = Object.assign(new Error("connection refused"), {
    code: "ECONNREFUSED",
  });
  const client = clientFor(async () => {
    throw cause;
  });
  const error = await client.lookupIpGeolocation({ ip }).catch((e) => e);
  expect(error).toBeInstanceOf(TransportError);
  expect(error.cause).toBe(cause);
});

it("does not retain private request URLs exposed by custom error formatting", async () => {
  class RequestError extends Error {
    #url: string;
    constructor(url: string) {
      super("request failed");
      this.#url = url;
    }
    toString() {
      return `${this.message}: ${this.#url}`;
    }
  }
  const client = new IpGeolocationClient(config, {
    async send(request) {
      throw new RequestError(request.url);
    },
    async close() {},
  });
  const error = await client.lookupIpGeolocation({ ip }).catch((e) => e);
  expect(String(error)).toContain("request failed");
  expect(String(error)).not.toContain("apiKey=");
});

it.each(["apiMessage", "statusCode"])("does not read a custom error's %s getter", async (field) => {
  let reads = 0;
  const client = new IpGeolocationClient(config, {
    async send(request) {
      throw Object.defineProperty(new UnauthorizedError("upstream failed", 401), field, {
        get() {
          reads++;
          throw new Error(request.url);
        },
      });
    },
    async close() {},
  });
  const error = await client.lookupIpGeolocation({ ip }).catch((e) => e);
  expect(reads).toBe(0);
  expect(error.message).toBe("upstream failed");
  if (field === "apiMessage") {
    expect(error).toBeInstanceOf(UnauthorizedError);
    expect(error.statusCode).toBe(401);
  } else {
    expect(error).toBeInstanceOf(TransportError);
  }
});

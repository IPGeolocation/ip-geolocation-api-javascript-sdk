import { createServer, type Server } from "node:http";
import { once } from "node:events";
import type { AddressInfo } from "node:net";
import { afterAll, beforeAll, expect, it } from "vitest";
import {
  FetchHttpTransport,
  IpGeolocationClient,
  TransportError,
} from "../../src";

let origin: string;
let destination: string;
let foreignHits = 0;
const requests: {
  method: string;
  body: string;
  token?: string;
  contentType?: string;
}[] = [];
const receiver = createServer((_req, res) => {
  foreignHits++;
  res.end("[]");
});
const api = createServer(async (req, res) => {
  const path = new URL(req.url!, origin).pathname;
  const route = path.split("/")[1];
  if (route === "final") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    requests.push({
      method: req.method!,
      body: Buffer.concat(chunks).toString(),
      token: req.headers["x-lookup-token"] as string,
      contentType: req.headers["content-type"],
    });
    res.end('[{"ip":"192.0.2.1"}]');
    return;
  }
  const parts = route!.split("-");
  const location =
    parts[0] === "cross"
      ? destination
      : parts[0] === "loop"
        ? req.url!
        : "/final";
  res.writeHead(Number(parts[1]), { Location: location });
  res.end();
});

async function start(server: Server): Promise<string> {
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  return `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
}

beforeAll(async () => {
  destination = await start(receiver);
  origin = await start(api);
});
afterAll(async () => {
  await Promise.all(
    [api, receiver].map(
      (server) =>
        new Promise<void>((resolve) => {
          server.close(() => resolve());
          server.closeAllConnections();
        }),
    ),
  );
});

const lookup = {
  ips: ["192.0.2.1"],
  headers: { "X-Lookup-Token": "test-marker" },
};
function client(route: string) {
  return new IpGeolocationClient({
    baseUrl: `${origin}/${route}`,
    apiKey: "test-only",
  });
}

it.each([301, 302, 303, 307, 308])(
  "blocks a cross-origin %i before the destination receives anything",
  async (status) => {
    await expect(
      client(`cross-${status}`).bulkLookupIpGeolocation(lookup),
    ).rejects.toBeInstanceOf(TransportError);
    expect(foreignHits).toBe(0);
  },
);

it.each([307, 308])(
  "preserves the POST and headers on a same-origin %i",
  async (status) => {
    const result = await client(`same-${status}`).bulkLookupIpGeolocation(
      lookup,
    );
    expect(result.data).toEqual([
      { success: true, data: { ip: lookup.ips[0] } },
    ]);
    expect(requests.at(-1)).toMatchObject({
      method: "POST",
      body: JSON.stringify({ ips: lookup.ips }),
      token: "test-marker",
    });
  },
);

it.each([301, 302, 303])(
  "follows a same-origin %i as a GET without the POST body",
  async (status) => {
    await client(`same-${status}`).bulkLookupIpGeolocation(lookup);
    expect(requests.at(-1)).toMatchObject({
      method: "GET",
      body: "",
      contentType: undefined,
      token: "test-marker",
    });
  },
);

it("stops a redirect loop", async () => {
  await expect(
    client("loop-307").bulkLookupIpGeolocation(lookup),
  ).rejects.toThrow("Too many API redirects");
});

it.each([
  ["post", 302, "GET"],
  ["head", 303, "HEAD"],
] as const)(
  "preserves Fetch redirect semantics for %s and %i",
  async (method, status, expected) => {
    await new FetchHttpTransport().send({
      method,
      url: `${origin}/same-${status}/v3/ipgeo`,
      body: method === "post" ? "payload" : undefined,
      headers: {},
      connectTimeoutMs: 1000,
      readTimeoutMs: 1000,
    });
    expect(requests.at(-1)).toMatchObject({ method: expected, body: "" });
  },
);

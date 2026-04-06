import { describe, expect, it } from "vitest";

import {
  BulkLookupIpGeolocationRequest,
  IpGeolocationClient,
  IpGeolocationClientConfig,
  LookupIpGeolocationRequest,
  toJson,
} from "../../src";

const RUN_LIVE_HARDENING =
  process.env.IPGEO_RUN_LIVE_HARDENING?.toLowerCase() === "true";
const PAID_KEY = process.env.IPGEO_PAID_KEY;
const LIVE_TIMEOUT_MS = 60_000;
const describeParity = RUN_LIVE_HARDENING && PAID_KEY ? describe : describe.skip;

describeParity("live field parity", () => {
  it(
    "include star response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertSingleLookupParity(
        new LookupIpGeolocationRequest({
          ip: "8.8.8.8",
          include: ["*"],
        }),
      );
    },
  );

  it(
    "geo accuracy and dma response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertSingleLookupParity(
        new LookupIpGeolocationRequest({
          ip: "8.8.8.8",
          include: ["geo_accuracy", "dma_code"],
        }),
      );
    },
  );

  it(
    "domain lookup response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertSingleLookupParity(
        new LookupIpGeolocationRequest({
          ip: "ipgeolocation.io",
          include: ["hostnameFallbackLive"],
        }),
      );
    },
  );

  it(
    "security abuse and user-agent response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertSingleLookupParity(
        new LookupIpGeolocationRequest({
          ip: "8.8.8.8",
          include: ["security", "abuse", "user_agent"],
          userAgent:
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) " +
            "AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9",
        }),
      );
    },
  );

  it(
    "filtered security response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertSingleLookupParity(
        new LookupIpGeolocationRequest({
          ip: "8.8.8.8",
          include: ["security"],
          fields: ["location.city", "security.threat_score", "security.is_vpn"],
        }),
      );
    },
  );

  it(
    "filtered country metadata response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertSingleLookupParity(
        new LookupIpGeolocationRequest({
          ip: "8.8.8.8",
          fields: ["country_metadata.calling_code"],
        }),
      );
    },
  );

  it(
    "bulk mixed response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertBulkLookupParity(
        new BulkLookupIpGeolocationRequest({
          ips: ["8.8.8.8", "invalid-ip", "1.1.1.1"],
        }),
      );
    },
  );

  it(
    "bulk filtered security response matches the typed model",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      await assertBulkLookupParity(
        new BulkLookupIpGeolocationRequest({
          ips: ["8.8.8.8", "1.1.1.1"],
          include: ["security"],
          fields: ["location.city", "security.threat_score", "security.is_vpn"],
        }),
      );
    },
  );
});

async function assertSingleLookupParity(
  request: LookupIpGeolocationRequest,
): Promise<void> {
  const client = new IpGeolocationClient(
    new IpGeolocationClientConfig({ apiKey: PAID_KEY! }),
  );

  try {
    const raw = await client.lookupIpGeolocationRaw(request);
    const typed = await client.lookupIpGeolocation(request);

    const rawNode = JSON.parse(raw.data);
    const typedNode = toApiShape(JSON.parse(toJson(typed.data)));
    assertJsonExact(rawNode, typedNode, "$");
  } finally {
    await client.close();
  }
}

async function assertBulkLookupParity(
  request: BulkLookupIpGeolocationRequest,
): Promise<void> {
  const client = new IpGeolocationClient(
    new IpGeolocationClientConfig({ apiKey: PAID_KEY! }),
  );

  try {
    const raw = await client.bulkLookupIpGeolocationRaw(request);
    const typed = await client.bulkLookupIpGeolocation(request);

    const rawArray = JSON.parse(raw.data) as unknown[];
    expect(Array.isArray(rawArray)).toBe(true);
    expect(typed.data).toHaveLength(rawArray.length);

    rawArray.forEach((rawItem, index) => {
      const typedItem = typed.data[index];
      expect(typedItem).toBeDefined();

      if (typedItem?.success) {
        assertJsonExact(
          rawItem,
          toApiShape(JSON.parse(toJson(typedItem.data))),
          `$[${index}]`,
        );
        return;
      }

      const rawNode = rawItem as { message?: unknown };
      expect(rawNode.message).toBe(typedItem?.error.message);
    });
  } finally {
    await client.close();
  }
}

function assertJsonExact(
  rawNode: unknown,
  typedNode: unknown,
  path: string,
): void {
  if (rawNode === null) {
    expect(typedNode, path).toBeNull();
    return;
  }

  expect(typedNode, path).not.toBeUndefined();

  if (isLiveClockField(path)) {
    return;
  }

  if (Array.isArray(rawNode)) {
    expect(Array.isArray(typedNode), path).toBe(true);
    const typedArray = typedNode as unknown[];
    expect(typedArray.length, `${path} size`).toBe(rawNode.length);
    rawNode.forEach((item, index) => {
      assertJsonExact(item, typedArray[index], `${path}[${index}]`);
    });
    return;
  }

  if (isPlainObject(rawNode)) {
    expect(isPlainObject(typedNode), path).toBe(true);
    const typedObject = typedNode as Record<string, unknown>;

    for (const [key, value] of Object.entries(rawNode)) {
      const childPath = `${path}.${key}`;
      if (!(key in typedObject) && isOmittableEmptyObject(value, childPath)) {
        continue;
      }
      expect(key in typedObject, childPath).toBe(true);
      assertJsonExact(value, typedObject[key], childPath);
    }

    const extraKeys = Object.keys(typedObject).filter((key) => !(key in rawNode));
    expect(extraKeys, `${path} unexpected keys`).toEqual([]);
    return;
  }

  if (typeof rawNode === "number" && typeof typedNode === "number") {
    expect(Object.is(typedNode, rawNode), path).toBe(true);
    return;
  }

  expect(typedNode, path).toEqual(rawNode);
}

function toApiShape(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item) => toApiShape(item));
  }

  if (!isPlainObject(value)) {
    return value;
  }

  const result: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value)) {
    result[camelToSnake(key)] = toApiShape(item);
  }
  return result;
}

function camelToSnake(value: string): string {
  return value.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value != null && !Array.isArray(value);
}

function isLiveClockField(path: string): boolean {
  return (
    path.endsWith(".time_zone.current_time") ||
    path.endsWith(".time_zone.current_time_unix")
  );
}

function isOmittableEmptyObject(rawNode: unknown, path: string): boolean {
  return (
    isPlainObject(rawNode) &&
    Object.keys(rawNode).length === 0 &&
    (path.endsWith(".time_zone.dst_start") || path.endsWith(".time_zone.dst_end"))
  );
}

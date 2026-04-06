import { describe, expect, it } from "vitest";

import {
  BulkLookupIpGeolocationRequest,
  IpGeolocationClient,
  IpGeolocationClientConfig,
  LookupIpGeolocationRequest,
  ResponseFormat,
  UnauthorizedError,
} from "../../src";

const RUN_LIVE = process.env.IPGEO_RUN_LIVE_TESTS?.toLowerCase() === "true";
const FREE_KEY = process.env.IPGEO_FREE_KEY;
const PAID_KEY = process.env.IPGEO_PAID_KEY;
const REQUEST_ORIGIN = process.env.IPGEO_REQUEST_ORIGIN;
const LIVE_TIMEOUT_MS = 60_000;
const TEST_IP = "8.8.8.8";

const describeLive = RUN_LIVE && FREE_KEY && PAID_KEY ? describe : describe.skip;
const itRequestOrigin = REQUEST_ORIGIN ? it : it.skip;

describeLive("live integration", () => {
  it(
    "free plan base lookup works",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      const client = new IpGeolocationClient(
        new IpGeolocationClientConfig({ apiKey: FREE_KEY! }),
      );

      try {
        const response = await client.lookupIpGeolocation(
          new LookupIpGeolocationRequest({ ip: TEST_IP }),
        );

        expect(response.data.ip).toBe(TEST_IP);
        expect(response.data.asn).toBeDefined();
        expect(response.data.network).toBeUndefined();
        expect(response.data.company).toBeUndefined();
        expect(response.data.timeZone?.currentTzAbbreviation).toBeTruthy();
        expect(response.data.timeZone?.currentTzFullName).toBeTruthy();
        expect(response.metadata.creditsCharged ?? 0).toBeGreaterThanOrEqual(1);
      } finally {
        await client.close();
      }
    },
  );

  it(
    "free plan domain lookup is rejected",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      const client = new IpGeolocationClient(
        new IpGeolocationClientConfig({ apiKey: FREE_KEY! }),
      );

      try {
        const responsePromise = client.lookupIpGeolocation(
          new LookupIpGeolocationRequest({ ip: "ipgeolocation.io" }),
        );

        await expect(responsePromise).rejects.toBeInstanceOf(UnauthorizedError);
        await expect(responsePromise).rejects.toMatchObject({
          statusCode: 401,
        });
      } finally {
        await client.close();
      }
    },
  );

  it(
    "paid plan security, abuse, and user-agent modules work",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      const overrideUserAgent = "ipgeolocation-js-sdk-live-test/3.0.0";
      const client = new IpGeolocationClient(
        new IpGeolocationClientConfig({ apiKey: PAID_KEY! }),
      );

      try {
        const response = await client.lookupIpGeolocation(
          new LookupIpGeolocationRequest({
            ip: TEST_IP,
            include: ["security", "abuse", "user_agent"],
            userAgent: overrideUserAgent,
          }),
        );

        expect(response.data.security).toBeDefined();
        expect(response.data.abuse).toBeDefined();
        expect(response.data.userAgent?.userAgentString).toBe(overrideUserAgent);
        expect(response.metadata.creditsCharged ?? 0).toBeGreaterThanOrEqual(4);
      } finally {
        await client.close();
      }
    },
  );

  it(
    "paid plan bulk mixed lookup returns success and error items",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      const client = new IpGeolocationClient(
        new IpGeolocationClientConfig({ apiKey: PAID_KEY! }),
      );

      try {
        const response = await client.bulkLookupIpGeolocation(
          new BulkLookupIpGeolocationRequest({
            ips: [TEST_IP, "invalid-ip"],
          }),
        );

        expect(response.data).toHaveLength(2);
        expect(response.data[0]?.success).toBe(true);
        expect(response.data[1]).toEqual({
          success: false,
          error: {
            message: expect.any(String),
          },
        });
      } finally {
        await client.close();
      }
    },
  );

  it(
    "paid plan raw methods return XML when requested",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      const client = new IpGeolocationClient(
        new IpGeolocationClientConfig({ apiKey: PAID_KEY! }),
      );

      try {
        const single = await client.lookupIpGeolocationRaw(
          new LookupIpGeolocationRequest({
            ip: TEST_IP,
            output: ResponseFormat.XML,
          }),
        );
        const bulk = await client.bulkLookupIpGeolocationRaw(
          new BulkLookupIpGeolocationRequest({
            ips: [TEST_IP, "invalid-ip"],
            output: ResponseFormat.XML,
          }),
        );

        expect(single.data).toContain("<");
        expect(bulk.data).toContain("<");
      } finally {
        await client.close();
      }
    },
  );

  itRequestOrigin(
    "paid plan requestOrigin auth works without apiKey",
    { timeout: LIVE_TIMEOUT_MS },
    async () => {
      const client = new IpGeolocationClient(
        new IpGeolocationClientConfig({ requestOrigin: REQUEST_ORIGIN! }),
      );

      try {
        const response = await client.lookupIpGeolocation(
          new LookupIpGeolocationRequest({ ip: TEST_IP }),
        );

        expect(response.data.ip).toBe(TEST_IP);
        expect(response.metadata.creditsCharged ?? 0).toBeGreaterThanOrEqual(1);
      } finally {
        await client.close();
      }
    },
  );
});

# IPGeolocation JavaScript SDK

Official JavaScript SDK for the IPGeolocation IP Location API.

Look up IPv4, IPv6, and domains with `/v3/ipgeo` and `/v3/ipgeo-bulk`. Get geolocation, company, ASN, timezone, network, hostname, abuse, user-agent, and security data from one API. Includes ESM, CommonJS, and TypeScript declarations.

Works in Node.js 18+ and in other runtimes that already provide `fetch`.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [At a Glance](#at-a-glance)
- [Get Your API Key](#get-your-api-key)
- [What You Can Get From One API Call](#what-you-can-get-from-one-api-call)
- [Security and Risk Signals](#security-and-risk-signals)
- [Supported Endpoints](#supported-endpoints)
- [Authentication Modes](#authentication-modes)
- [Plan Features and Limits](#plan-features-and-limits)
- [Client Configuration](#client-configuration)
- [Available Methods](#available-methods)
- [Request Options](#request-options)
- [Single Lookup Examples](#single-lookup-examples)
- [Raw JSON and XML](#raw-json-and-xml)
- [Bulk Lookup Examples](#bulk-lookup-examples)
- [Response Metadata](#response-metadata)
- [JSON Helpers](#json-helpers)
- [Error Handling](#error-handling)
- [Troubleshooting](#troubleshooting)
- [FAQ](#frequently-asked-questions)
- [Related Packages](#related-packages)
- [Links](#links)

## Installation

```bash
npm install @ipgeolocation/ip-geolocation-js-sdk
```

### ES Modules

```js
import { IpGeolocationClient } from "@ipgeolocation/ip-geolocation-js-sdk";
```

### CommonJS

```js
const { IpGeolocationClient } = require("@ipgeolocation/ip-geolocation-js-sdk");
```

## Quick Start

```js
import { IpGeolocationClient } from "@ipgeolocation/ip-geolocation-js-sdk";

async function main() {
  const client = new IpGeolocationClient({
    apiKey: process.env.IPGEO_API_KEY,
  });

  try {
    const response = await client.lookupIpGeolocation({
      ip: "8.8.8.8",
    });

    console.log("IP:", response.data.ip); // "8.8.8.8"
    console.log("Country:", response.data.location?.countryName); // "United States"
    console.log("City:", response.data.location?.city);
    console.log("Timezone:", response.data.timeZone?.name);
    console.log("Credits charged:", response.metadata.creditsCharged);
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error(error);
});
```

You can pass plain objects to request methods. If you want validation before the request is sent, use `LookupIpGeolocationRequest` and `BulkLookupIpGeolocationRequest`.

## At a Glance

| Item | Value |
|------|-------|
| Package | `@ipgeolocation/ip-geolocation-js-sdk` |
| API Type | IPGeolocation IP Location API |
| Supported Endpoints | `/v3/ipgeo`, `/v3/ipgeo-bulk` |
| Supported Inputs | IPv4, IPv6, domain |
| Main Data Returned | Geolocation, company, ASN, timezone, network, security, abuse, hostname, user-agent, currency |
| Authentication | API key, request-origin auth for `/v3/ipgeo` only |
| Response Formats | Structured JSON, raw JSON, raw XML |
| Bulk Limit | Up to 50,000 IPs or domains per request |
| Runtime | Node.js 18+ or any runtime with `fetch` |

## Get Your API Key

To use most SDK features, create or access your IPGeolocation account and copy an API key from your dashboard.

1. Sign up: [https://app.ipgeolocation.io/signup](https://app.ipgeolocation.io/signup)
2. Verify your email if prompted
3. Sign in: [https://app.ipgeolocation.io/login](https://app.ipgeolocation.io/login)
4. Open your dashboard: [https://app.ipgeolocation.io/dashboard](https://app.ipgeolocation.io/dashboard)
5. Copy an API key from the `API Keys` section
6. Pass it to `new IpGeolocationClient({ apiKey: "YOUR_API_KEY" })`

For server-side code, keep the API key in an environment variable or secret manager. For browser-based single lookups on paid plans, use request-origin auth instead of exposing an API key in frontend code.

## What You Can Get From One API Call

| Data Set | How To Request It | Common Use Cases |
|----------|-------------------|------------------|
| IP geolocation | Default response | IP lookup, localization, geo targeting |
| Company and ASN | Default response | ISP lookup, ownership enrichment, network analysis |
| Timezone | Default response | Local time lookup, scheduling, regional reporting |
| Network and currency | Default response | Routing context, analytics, pricing flows |
| Security and risk signals | `include: ["security"]` | VPN detection, proxy detection, fraud prevention, threat analysis |
| Abuse contact data | `include: ["abuse"]` | Incident response, abuse handling, reporting |
| Hostname data | `include: ["hostname"]`, `["liveHostname"]`, `["hostnameFallbackLive"]` | Reverse DNS lookup, infrastructure enrichment, hosting checks |
| User-agent data | `include: ["user_agent"]` with `userAgent` or a `User-Agent` header | Browser detection, device detection, traffic analysis |
| Geo accuracy and DMA data | `include: ["geo_accuracy"]`, `["dma_code"]` | Local targeting, media market mapping, proximity analysis |

## Security and Risk Signals

Request `include: ["security"]` when you need the `security` object in the response.

| Use Case | SDK Fields |
|-----------------|-----------|
| VPN detection | `security.isVpn`, `security.vpnProviderNames`, `security.vpnConfidenceScore`, `security.vpnLastSeen` |
| Proxy detection | `security.isProxy`, `security.proxyProviderNames`, `security.proxyConfidenceScore`, `security.proxyLastSeen` |
| Residential proxy detection | `security.isResidentialProxy` |
| Tor detection | `security.isTor` |
| Anonymous IP detection | `security.isAnonymous` |
| Threat score and risk scoring | `security.threatScore` |
| Bot, spam, and attacker signals | `security.isBot`, `security.isSpam`, `security.isKnownAttacker` |
| Relay detection | `security.isRelay`, `security.relayProviderName` |
| Cloud, hosting, or data center IP detection | `security.isCloudProvider`, `security.cloudProviderName` |

Provider names, confidence scores, and last-seen dates appear when the API has that data.

## Supported Endpoints

| Endpoint | HTTP Method | SDK Methods | Primary Use Case |
|----------|-------------|-------------|------------------|
| `/v3/ipgeo` | `GET` | `lookupIpGeolocation(...)`, `lookupIpGeolocationRaw(...)` | Single IPv4, IPv6, or domain lookup |
| `/v3/ipgeo-bulk` | `POST` | `bulkLookupIpGeolocation(...)`, `bulkLookupIpGeolocationRaw(...)` | Bulk lookup for up to 50,000 IPs or domains |

These two endpoints can return geolocation, company, ASN, timezone, network, currency, hostname, abuse, user-agent, and security data depending on your request and plan.

## Authentication Modes

| Mode | SDK Setup | Typical Use |
|------|-----------|-------------|
| API key query param | `new IpGeolocationClient({ apiKey: "YOUR_API_KEY" })` | Server-side API calls, jobs, bulk lookups |
| Request-origin auth | `new IpGeolocationClient({ requestOrigin: "https://app.example.com" })` | Browser-based single lookups on paid plans |

> [!IMPORTANT]
> Request-origin auth does not work with `/v3/ipgeo-bulk`. Bulk lookup always requires `apiKey`.

> [!NOTE]
> If you set both `apiKey` and `requestOrigin`, single lookup still uses the API key. The API key is sent as the `apiKey` query parameter, so avoid logging full request URLs.

## Plan Features and Limits

Feature availability depends on your plan and request parameters.

| Capability | Free Plan | Paid Plan |
|------------|-----------|-----------|
| IPv4 and IPv6 single lookup | Supported | Supported |
| Domain lookup | Not supported | Supported |
| Bulk endpoint `/v3/ipgeo-bulk` | Not supported | Supported, but always requires an API key |
| `include: ["*"]` | Accepted, returns the default response only | Accepted, returns all available modules |
| `include: ["security"]`, `["abuse"]`, `["hostname"]`, `["liveHostname"]`, `["hostnameFallbackLive"]`, `["geo_accuracy"]`, `["dma_code"]`, `["user_agent"]` | Not supported | Supported |
| Non-English `lang` | Not supported | Supported |
| `fields` and `excludes` | Supported | Supported |
| Request-origin auth | Not supported | Supported for `/v3/ipgeo` only |

Paid plans still need `include` for optional modules. `fields` and `excludes` only trim the response. They do not turn modules on or unlock paid data.

## Client Configuration

| Option | Type | Default | Notes |
|--------|------|---------|-------|
| `apiKey` | `string` | unset | Required for bulk lookup. Optional for single lookup if `requestOrigin` is set. |
| `requestOrigin` | `string` | unset | Must be an absolute `http` or `https` origin. No path, query string, fragment, or userinfo. |
| `baseUrl` | `string` | `https://api.ipgeolocation.io` | Override the API base URL. Must be an absolute `http` or `https` URL. |
| `connectTimeoutMs` | `number` | `10000` | Time to wait for response headers. Must be a positive integer. |
| `readTimeoutMs` | `number` | `30000` | Time to wait while reading the response body. Must be a positive integer. |

You can also pass a custom `HttpTransport` as the second constructor argument.

## Available Methods

| Method | Returns | Notes |
|--------|---------|-------|
| `lookupIpGeolocation(request)` | `Promise<ApiResponse<IpGeolocationResponse>>` | Single lookup. Typed JSON response. |
| `lookupIpGeolocationRaw(request)` | `Promise<ApiResponse<string>>` | Single lookup. Raw JSON or XML string. |
| `bulkLookupIpGeolocation(request)` | `Promise<ApiResponse<readonly BulkLookupResult[]>>` | Bulk lookup. Typed JSON response. |
| `bulkLookupIpGeolocationRaw(request)` | `Promise<ApiResponse<string>>` | Bulk lookup. Raw JSON or XML string. |
| `close()` | `Promise<void>` | Closes the client. Do not reuse the client after this. |

> [!NOTE]
> Typed methods support JSON only. Use the raw methods when you need XML output.

## Request Options

| Option | Applies To | Notes |
|--------|------------|-------|
| `ip` | Single lookup | IPv4, IPv6, or domain. Omit it for caller IP lookup. Domain lookup requires a paid plan. |
| `ips` | Bulk lookup | Iterable of 1 to 50,000 IPs or domains. |
| `lang` | Single and bulk | One of `en`, `de`, `ru`, `ja`, `fr`, `cn`, `es`, `cs`, `it`, `ko`, `fa`, `pt`. |
| `include` | Single and bulk | Iterable of module names such as `security`, `abuse`, `user_agent`, `hostname`, `liveHostname`, `hostnameFallbackLive`, `geo_accuracy`, `dma_code`, or `*`. |
| `fields` | Single and bulk | Iterable of field paths to keep, for example `["location.country_name", "security.threat_score"]`. |
| `excludes` | Single and bulk | Iterable of field paths to remove from the response. |
| `userAgent` | Single and bulk | Overrides the outbound `User-Agent` header. If you also pass a `User-Agent` header in `headers`, `userAgent` wins. |
| `headers` | Single and bulk | Extra request headers. Use a plain object, `Headers`, `Map`, or iterable of `[name, value]` pairs. |
| `output` | Single and bulk | `"json"` or `"xml"`. Typed methods require JSON. |

## Single Lookup Examples

The examples below assume you already have a configured client and are running inside an async function or an ESM module with top-level `await`:

```js
import { IpGeolocationClient } from "@ipgeolocation/ip-geolocation-js-sdk";

const client = new IpGeolocationClient({
  apiKey: process.env.IPGEO_API_KEY,
});
```

### Caller IP

Omit `ip` to look up the public IP of the machine making the request.

```js
const response = await client.lookupIpGeolocation({});
console.log(response.data.ip);
```

### Domain Lookup

Domain lookup is a paid-plan feature.

```js
const response = await client.lookupIpGeolocation({
  ip: "ipgeolocation.io",
});

console.log(response.data.ip);
console.log(response.data.domain); // "ipgeolocation.io"
console.log(response.data.location?.countryName);
```

### Security and Abuse

```js
const response = await client.lookupIpGeolocation({
  ip: "9.9.9.9",
  include: ["security", "abuse"],
});

console.log(response.data.security?.threatScore);
console.log(response.data.security?.isVpn);
console.log(response.data.abuse?.emails?.[0]);
```

### Hostname Variants

```js
const response = await client.lookupIpGeolocation({
  ip: "ipgeolocation.io",
  include: ["hostname", "liveHostname", "hostnameFallbackLive"],
});

console.log(response.data.hostname);
```

### User-Agent Parsing

To parse a visitor user-agent string, request `user_agent` and pass the visitor string in `userAgent`.

```js
const response = await client.lookupIpGeolocation({
  ip: "8.8.8.8",
  include: ["user_agent"],
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) " +
    "AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9",
});

console.log(response.data.userAgent?.name);
console.log(response.data.userAgent?.operatingSystem?.name);
console.log(response.data.userAgent?.device?.type);
```

### Filtered Response

Use `fields` to keep only the data you need, or `excludes` to remove fields from the response.

```js
const response = await client.lookupIpGeolocation({
  ip: "8.8.8.8",
  include: ["security"],
  fields: ["location.country_name", "security.threat_score", "security.is_vpn"],
  excludes: ["currency"],
});

console.log(response.data.location?.countryName);
console.log(response.data.security?.threatScore);
console.log(response.data.security?.isVpn);
```

### Request Classes

If you want request validation before sending the call, create the request explicitly.

```js
import {
  IpGeolocationClient,
  LookupIpGeolocationRequest,
} from "@ipgeolocation/ip-geolocation-js-sdk";

const client = new IpGeolocationClient({
  apiKey: process.env.IPGEO_API_KEY,
});

const request = new LookupIpGeolocationRequest({
  ip: "8.8.8.8",
  include: ["security"],
});

const response = await client.lookupIpGeolocation(request);
console.log(response.data.security?.isProxy);
```

### Request-Origin Auth

Use this only for paid-plan single lookups from an allowlisted origin.

```js
const browserClient = new IpGeolocationClient({
  requestOrigin: "https://app.example.com",
});

const response = await browserClient.lookupIpGeolocation({
  ip: "8.8.8.8",
});

console.log(response.data.ip);

await browserClient.close();
```

## Raw JSON and XML

Use raw methods when you want the original response body as a string.

```js
import {
  IpGeolocationClient,
  ResponseFormat,
} from "@ipgeolocation/ip-geolocation-js-sdk";

const client = new IpGeolocationClient({
  apiKey: process.env.IPGEO_API_KEY,
});

const rawJson = await client.lookupIpGeolocationRaw({
  ip: "8.8.8.8",
});

console.log(rawJson.data);

const rawXml = await client.lookupIpGeolocationRaw({
  ip: "8.8.8.8",
  output: ResponseFormat.XML,
});

console.log(rawXml.data);
```

## Bulk Lookup Examples

Bulk lookup is a paid-plan feature and always requires `apiKey`.

### Basic Bulk Lookup

```js
const response = await client.bulkLookupIpGeolocation({
  ips: ["8.8.8.8", "1.1.1.1"],
});

for (const result of response.data) {
  if (result.success) {
    console.log(result.data.ip, result.data.location?.countryName); // "8.8.8.8", "United States"
  }
}
```

### Mixed Success and Error Results

Each bulk result is either a success with `data` or an error with `error.message`.

```js
const response = await client.bulkLookupIpGeolocation({
  ips: ["8.8.8.8", "invalid-ip", "1.1.1.1"],
  include: ["security"],
});

for (const result of response.data) {
  if (result.success) {
    console.log(result.data.ip, result.data.security?.threatScore);
    continue;
  }

  console.error(result.error.message);
}
```

## Response Metadata

Every SDK call returns an object with `data` and `metadata`.

`metadata` is an `ApiResponseMetadata` instance with:

| Field | Meaning |
|-------|---------|
| `statusCode` | HTTP status code returned by the API |
| `durationMs` | End-to-end request time measured by the SDK |
| `creditsCharged` | Credits charged for the request, when returned by the API |
| `successfulRecords` | Number of successful records for bulk lookups, when returned by the API |
| `rawHeaders` | Raw response headers as a multi-map |

It also provides:

- `metadata.headerValues(name)`
- `metadata.firstHeaderValue(name)`

Example:

```js
const response = await client.lookupIpGeolocation({
  ip: "8.8.8.8",
});

console.log(response.metadata.statusCode);
console.log(response.metadata.durationMs);
console.log(response.metadata.firstHeaderValue("x-ratelimit-remaining"));
```

## JSON Helpers

Use `toJson()` or `toPrettyJson()` when you want a stable JSON view of SDK objects.

```js
import { toPrettyJson } from "@ipgeolocation/ip-geolocation-js-sdk";

const response = await client.lookupIpGeolocation({
  ip: "8.8.8.8",
});

console.log(toPrettyJson(response.data));
```

## Error Handling

All SDK errors extend `IpGeolocationError`.

Runtime and validation errors:

- `ValidationError`
- `SerializationError`
- `TransportError`
- `RequestTimeoutError`

API errors:

- `ApiError`
- `BadRequestError`
- `UnauthorizedError`
- `NotFoundError`
- `MethodNotAllowedError`
- `PayloadTooLargeError`
- `UnsupportedMediaTypeError`
- `LockedError`
- `RateLimitError`
- `ClientClosedRequestError`
- `ServerError`

`ApiError` and its subclasses expose:

- `statusCode`
- `apiMessage`

Example:

```js
import {
  IpGeolocationClient,
  RateLimitError,
  UnauthorizedError,
} from "@ipgeolocation/ip-geolocation-js-sdk";

const client = new IpGeolocationClient({
  apiKey: process.env.IPGEO_API_KEY,
});

try {
  const response = await client.lookupIpGeolocation({
    ip: "8.8.8.8",
  });
  console.log(response.data.location?.countryName);
} catch (error) {
  if (error instanceof UnauthorizedError) {
    console.error(error.apiMessage);
  } else if (error instanceof RateLimitError) {
    console.error("Rate limit reached");
  } else {
    throw error;
  }
} finally {
  await client.close();
}
```

## Troubleshooting

### `ValidationError: single lookup requires apiKey or requestOrigin in client config`

Set either `apiKey` or `requestOrigin` when creating the client.

### `ValidationError: bulk lookup requires apiKey in client config`

Bulk lookup always requires `apiKey`, even if `requestOrigin` is set.

### `UnauthorizedError` on domain lookup, optional modules, or non-English `lang`

Those features require a paid plan. Free plans only support the base single-lookup response.

### XML output does not work with typed methods

Use `lookupIpGeolocationRaw(...)` or `bulkLookupIpGeolocationRaw(...)` with `output: "xml"`.

### `ValidationError: client is closed`

Create a new client after calling `close()`. Closed clients cannot be reused.

### `RequestTimeoutError`

Increase `connectTimeoutMs` or `readTimeoutMs` if your environment needs longer network time.

## Frequently Asked Questions

<details>
<summary><strong>Can I use this SDK in the browser?</strong></summary>
Yes, if your runtime provides `fetch`. Do not expose `apiKey` in frontend code. For browser single lookups on paid plans, use `requestOrigin`.
</details>

<details>
<summary><strong>Does the SDK retry failed requests?</strong></summary>
No. Timeouts, rate limits, and server errors are raised directly. Add your own retry policy outside the SDK if you need one.
</details>

<details>
<summary><strong>Can I pass custom headers?</strong></summary>
Yes. Use `headers` with a plain object, `Headers`, `Map`, or an iterable of `[name, value]` pairs.
</details>

<details>
<summary><strong>Does `userAgent` do the same thing as `headers["User-Agent"]`?</strong></summary>
Almost. Both affect the outbound `User-Agent` header, but `userAgent` takes precedence when both are set.
</details>

<details>
<summary><strong>Can I use request-origin auth with bulk lookup?</strong></summary>
No. Bulk lookup always requires `apiKey`.
</details>

<details>
<summary><strong>Do typed methods support XML?</strong></summary>
No. Typed methods require JSON. Use raw methods if you need XML.
</details>

## Related Packages

- TypeScript runtime SDK: `@ipgeolocation/ip-geolocation-ts-sdk`
- TypeScript types-only package: `@ipgeolocation/ip-geolocation-types`

## Links

- [npm package](https://www.npmjs.com/package/@ipgeolocation/ip-geolocation-js-sdk)
- [GitHub repository](https://github.com/IPGeolocation/ip-geolocation-api-javascript-sdk)
- [API documentation](https://ipgeolocation.io/documentation/ip-location-api.html)
- [Pricing](https://ipgeolocation.io/pricing.html)
- [Authentication](https://ipgeolocation.io/documentation/api-authentication.html)
- [Response formats](https://ipgeolocation.io/documentation/api-response-formats.html)

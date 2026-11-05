# Changelog

## 3.0.2

- Hide API keys when printing client settings and request errors, including errors in typed bulk results.
- Stop redirects from sending lookup data or custom headers to another server.
- Keep the HTTP status when an error response is too large or interrupted. Check that typed bulk results match the number of IPs requested.
- Add Arabic (`ar`) for single and bulk lookups.
- Include CDN, proxy, bot and corporate gateway details in typed results.
- Report the installed package version and preserve special property names in headers and JSON output.

## 3.0.0

- Initial JavaScript SDK release for `/v3/ipgeo` and `/v3/ipgeo-bulk`
- Bulk results use `result.data` for success items and `result.error.message` for error items
- Async `IpGeolocationClient` with typed JSON methods and raw JSON/XML methods
- Strict config and request validation
- Typed response models, response metadata, and JSON output helpers
- Live smoke coverage for free-plan and paid-plan behavior
- Live raw-vs-typed parity coverage against the paid API

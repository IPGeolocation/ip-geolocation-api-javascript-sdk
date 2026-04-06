# Changelog

## 3.0.0

- Initial JavaScript SDK release for `/v3/ipgeo` and `/v3/ipgeo-bulk`
- Bulk results use `result.data` for success items and `result.error.message` for error items
- Async `IpGeolocationClient` with typed JSON methods and raw JSON/XML methods
- Strict config and request validation
- Typed response models, response metadata, and JSON output helpers
- Live smoke coverage for free-plan and paid-plan behavior
- Live raw-vs-typed parity coverage against the paid API

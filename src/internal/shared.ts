import { ResponseFormat, type ResponseFormat as ResponseFormatValue } from "../enums";
import {
  ApiError,
  BadRequestError,
  ClientClosedRequestError,
  LockedError,
  MethodNotAllowedError,
  NotFoundError,
  PayloadTooLargeError,
  RateLimitError,
  ServerError,
  UnauthorizedError,
  UnsupportedMediaTypeError,
  ValidationError,
} from "../errors";
import { ApiResponseMetadata, type HeaderMultiMap } from "../models";

export type QueryParamValue = string | null | undefined;
export type QueryParams =
  | Readonly<Record<string, QueryParamValue>>
  | Iterable<readonly [string, QueryParamValue]>;

export function validateJsonOutput(output?: ResponseFormatValue): void {
  if ((output ?? ResponseFormat.JSON) === ResponseFormat.XML) {
    throw new ValidationError(
      "XML output is not supported by typed methods. Use ResponseFormat.JSON.",
    );
  }
}

export function buildQuery(params: QueryParams): string {
  const items: string[] = [];

  for (const [key, value] of toEntries(params)) {
    const normalizedKey = normalizeQueryToken(key);
    const normalizedValue = normalizeQueryToken(value);
    if (normalizedKey == null || normalizedValue == null) {
      continue;
    }
    items.push(
      `${encodeURIComponent(normalizedKey)}=${encodeURIComponent(normalizedValue)}`,
    );
  }

  return items.length === 0 ? "" : `?${items.join("&")}`;
}

export function mergeHeaders(
  ...headerMaps: ReadonlyArray<HeaderMultiMap | null | undefined>
): HeaderMultiMap {
  const merged: Record<string, readonly string[]> = {};
  const namesByLower = new Map<string, string>();

  for (const headerMap of headerMaps) {
    if (headerMap == null) {
      continue;
    }

    for (const [rawName, rawValues] of Object.entries(headerMap)) {
      if (typeof rawName !== "string" || rawName.trim() === "") {
        continue;
      }

      const name = rawName.trim();
      const existingName = namesByLower.get(name.toLowerCase());
      if (existingName != null && existingName !== name) {
        delete merged[existingName];
      }

      namesByLower.set(name.toLowerCase(), name);
      merged[name] = Object.freeze([...rawValues]);
    }
  }

  return Object.freeze(merged);
}

export function resolveUserAgentHeader(
  userAgent: string | undefined,
  headers: HeaderMultiMap | undefined,
  defaultUserAgent: string,
): readonly string[] {
  const resolvedUserAgent =
    userAgent ?? firstHeaderIgnoreCase(headers ?? Object.freeze({}), "User-Agent") ?? defaultUserAgent;
  return Object.freeze([resolvedUserAgent]);
}

export function toApiError(statusCode: number, body: string): ApiError {
  const apiMessage = extractApiMessage(body);
  const message =
    apiMessage == null
      ? `API request failed with HTTP status ${statusCode}`
      : `API request failed with HTTP status ${statusCode}: ${apiMessage}`;

  switch (statusCode) {
    case 400:
      return new BadRequestError(message, statusCode, apiMessage);
    case 401:
      return new UnauthorizedError(message, statusCode, apiMessage);
    case 404:
      return new NotFoundError(message, statusCode, apiMessage);
    case 405:
      return new MethodNotAllowedError(message, statusCode, apiMessage);
    case 413:
      return new PayloadTooLargeError(message, statusCode, apiMessage);
    case 415:
      return new UnsupportedMediaTypeError(message, statusCode, apiMessage);
    case 423:
      return new LockedError(message, statusCode, apiMessage);
    case 429:
      return new RateLimitError(message, statusCode, apiMessage);
    case 499:
      return new ClientClosedRequestError(message, statusCode, apiMessage);
    default:
      if (statusCode >= 500 && statusCode <= 599) {
        return new ServerError(message, statusCode, apiMessage);
      }
      return new ApiError(message, statusCode, apiMessage);
  }
}

export function extractApiMessage(body: string | null | undefined): string | undefined {
  if (body == null) {
    return undefined;
  }
  const normalizedBody = body.trim();
  if (normalizedBody === "") {
    return undefined;
  }

  try {
    const payload = JSON.parse(normalizedBody);
    return extractJsonMessage(payload) ?? truncateMessageBody(normalizedBody);
  } catch {
    return truncateMessageBody(normalizedBody);
  }
}

export function parseIntHeader(value: string | undefined): number | undefined {
  if (value == null || value.trim() === "") {
    return undefined;
  }

  const normalizedValue = value.trim();
  if (!/^\d+$/.test(normalizedValue)) {
    return undefined;
  }

  const parsed = Number(normalizedValue);
  return Number.isSafeInteger(parsed) ? parsed : undefined;
}

export function firstHeaderIgnoreCase(
  headers: HeaderMultiMap,
  name: string,
): string | undefined {
  const normalizedName = name.toLowerCase();
  for (const [key, values] of Object.entries(headers)) {
    if (key.toLowerCase() === normalizedName) {
      return values[0];
    }
  }
  return undefined;
}

export function isPlainObjectRecord(value: unknown): value is Record<string, unknown> {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

export function containsCrOrLf(value: string): boolean {
  return value.includes("\r") || value.includes("\n");
}

export function toMetadata(
  statusCode: number,
  durationMs: number,
  rawHeaders?: HeaderMultiMap | null,
): ApiResponseMetadata {
  const headers = rawHeaders ?? Object.freeze({});
  const creditsCharged = parseIntHeader(firstHeaderIgnoreCase(headers, "X-Credits-Charged"));
  const successfulRecords = parseIntHeader(
    firstHeaderIgnoreCase(headers, "X-Successful-Record"),
  );

  const init: ApiResponseMetadataInitMutable = {
    statusCode,
    durationMs,
    rawHeaders: headers,
  };
  if (creditsCharged != null) {
    init.creditsCharged = creditsCharged;
  }
  if (successfulRecords != null) {
    init.successfulRecords = successfulRecords;
  }

  return new ApiResponseMetadata(init);
}

interface ApiResponseMetadataInitMutable {
  creditsCharged?: number;
  successfulRecords?: number;
  statusCode: number;
  durationMs: number;
  rawHeaders: HeaderMultiMap;
}

function toEntries(params: QueryParams): Array<readonly [string, QueryParamValue]> {
  if (isIterable(params)) {
    return [...params];
  }
  return Object.entries(params);
}

function isIterable(value: QueryParams): value is Iterable<readonly [string, QueryParamValue]> {
  return Symbol.iterator in Object(value);
}

function normalizeQueryToken(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const normalizedValue = value.trim();
  return normalizedValue === "" ? undefined : normalizedValue;
}

function extractJsonMessage(payload: unknown): string | undefined {
  const directMessage = toMessageText(payload);
  if (directMessage != null) {
    return directMessage;
  }
  if (!isPlainObjectRecord(payload)) {
    return undefined;
  }

  return (
    toMessageText(payload.message) ??
    toMessageText(payload.error) ??
    toNestedMessageText(payload.error) ??
    toMessageText(payload.detail) ??
    toNestedMessageText(payload.detail)
  );
}

function toNestedMessageText(value: unknown): string | undefined {
  if (!isPlainObjectRecord(value)) {
    return undefined;
  }

  return toMessageText(value.message) ?? toMessageText(value.detail);
}

function toMessageText(value: unknown): string | undefined {
  if (typeof value === "string") {
    const normalizedValue = value.trim();
    return normalizedValue === "" ? undefined : normalizedValue;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return undefined;
}

function truncateMessageBody(body: string): string | undefined {
  const normalizedBody = body.replace(/\s+/g, " ").trim();
  if (normalizedBody === "") {
    return undefined;
  }
  return normalizedBody.slice(0, 512);
}

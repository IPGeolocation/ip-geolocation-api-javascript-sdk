import {
  LANGUAGE_VALUES,
  RESPONSE_FORMAT_VALUES,
  type Language,
  type ResponseFormat,
} from "./enums";
import { ValidationError } from "./errors";
import {
  containsCrOrLf,
  isPlainObjectRecord as isPlainObjectRecordShared,
} from "./internal/shared";

export type HeaderValue = string | readonly string[];
export type HeaderEntry = readonly [string, HeaderValue];
export type RequestHeaders =
  | Headers
  | Readonly<Record<string, HeaderValue>>
  | ReadonlyMap<string, HeaderValue>
  | Iterable<HeaderEntry>;
export type NormalizedHeaders = Readonly<Record<string, readonly string[]>>;

export interface LookupIpGeolocationRequestInit {
  ip?: string | null;
  lang?: Language | string | null;
  include?: Iterable<string> | null;
  fields?: Iterable<string> | null;
  excludes?: Iterable<string> | null;
  userAgent?: string | null;
  headers?: RequestHeaders | null;
  output?: ResponseFormat | string | null;
}

export interface BulkLookupIpGeolocationRequestInit {
  ips: Iterable<string>;
  lang?: Language | string | null;
  include?: Iterable<string> | null;
  fields?: Iterable<string> | null;
  excludes?: Iterable<string> | null;
  userAgent?: string | null;
  headers?: RequestHeaders | null;
  output?: ResponseFormat | string | null;
}

export class LookupIpGeolocationRequest {
  public readonly ip: string | undefined;
  public readonly lang: Language | undefined;
  public readonly include: readonly string[];
  public readonly fields: readonly string[];
  public readonly excludes: readonly string[];
  public readonly userAgent: string | undefined;
  public readonly headers: NormalizedHeaders;
  public readonly output: ResponseFormat;

  public constructor(init: LookupIpGeolocationRequestInit = {}) {
    if (!isPlainObjectRecordShared(init)) {
      throw new TypeError("request must be a plain object");
    }
    const normalizedInit = init as LookupIpGeolocationRequestInit;

    this.ip = normalizeOptionalString(normalizedInit.ip, "ip");
    this.lang = normalizeLanguage(normalizedInit.lang);
    this.include = normalizeTokens(normalizedInit.include, "include");
    this.fields = normalizeTokens(normalizedInit.fields, "fields");
    this.excludes = normalizeTokens(normalizedInit.excludes, "excludes");
    this.userAgent = normalizeOptionalString(normalizedInit.userAgent, "userAgent");
    this.headers = normalizeHeaders(normalizedInit.headers);
    this.output = normalizeOutput(normalizedInit.output);

    Object.freeze(this);
  }
}

export class BulkLookupIpGeolocationRequest {
  public readonly ips: readonly string[];
  public readonly lang: Language | undefined;
  public readonly include: readonly string[];
  public readonly fields: readonly string[];
  public readonly excludes: readonly string[];
  public readonly userAgent: string | undefined;
  public readonly headers: NormalizedHeaders;
  public readonly output: ResponseFormat;

  public constructor(init: BulkLookupIpGeolocationRequestInit) {
    if (!isPlainObjectRecordShared(init)) {
      throw new TypeError("request must be a plain object");
    }
    const normalizedInit = init as BulkLookupIpGeolocationRequestInit;

    this.ips = normalizeTokens(normalizedInit.ips, "ips");
    if (this.ips.length === 0) {
      throw new ValidationError("ips must not be empty");
    }
    if (this.ips.length > 50_000) {
      throw new ValidationError("ips must contain at most 50000 entries");
    }

    this.lang = normalizeLanguage(normalizedInit.lang);
    this.include = normalizeTokens(normalizedInit.include, "include");
    this.fields = normalizeTokens(normalizedInit.fields, "fields");
    this.excludes = normalizeTokens(normalizedInit.excludes, "excludes");
    this.userAgent = normalizeOptionalString(normalizedInit.userAgent, "userAgent");
    this.headers = normalizeHeaders(normalizedInit.headers);
    this.output = normalizeOutput(normalizedInit.output);

    Object.freeze(this);
  }
}

function normalizeOptionalString(
  value: string | null | undefined,
  field: string,
  options: { blankAsUndefined?: boolean } = {},
): string | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new ValidationError(`${field} must be a string`);
  }
  const normalizedValue = value.trim();
  if (normalizedValue === "") {
    if (options.blankAsUndefined) {
      return undefined;
    }
    throw new ValidationError(`${field} must not be blank`);
  }
  if (containsCrOrLf(normalizedValue)) {
    throw new ValidationError(`${field} must not contain CR or LF`);
  }
  return normalizedValue;
}

function normalizeLanguage(value: Language | string | null | undefined): Language | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new ValidationError("lang must be a Language or string");
  }

  const normalizedValue = value.trim().toLowerCase();
  if (normalizedValue === "") {
    throw new ValidationError(`Unsupported language code: ${value}`);
  }
  if (LANGUAGE_VALUES.includes(normalizedValue as Language)) {
    return normalizedValue as Language;
  }

  throw new ValidationError(`Unsupported language code: ${value}`);
}

function normalizeOutput(
  value: ResponseFormat | string | null | undefined,
): ResponseFormat {
  if (value == null) {
    return "json";
  }
  if (typeof value !== "string") {
    throw new ValidationError("output must be a ResponseFormat or string");
  }

  const normalizedValue = value.trim().toLowerCase();
  if (RESPONSE_FORMAT_VALUES.includes(normalizedValue as ResponseFormat)) {
    return normalizedValue as ResponseFormat;
  }

  throw new ValidationError("output must be either 'json' or 'xml'");
}

function normalizeTokens(
  values: Iterable<string> | null | undefined,
  field: string,
): readonly string[] {
  if (values == null) {
    return Object.freeze([]);
  }
  if (typeof values === "string") {
    throw new ValidationError(`${field} must be an iterable of strings, not a single string`);
  }
  if (!isIterable(values)) {
    throw new ValidationError(`${field} must be an iterable of strings`);
  }

  const normalized: string[] = [];
  for (const value of values) {
    if (typeof value !== "string") {
      throw new ValidationError(`${field} value must be a string`);
    }
    const normalizedValue = value.trim();
    if (normalizedValue === "") {
      throw new ValidationError(`${field} value must not be blank`);
    }
    normalized.push(normalizedValue);
  }
  return Object.freeze(normalized);
}

function normalizeHeaders(value: RequestHeaders | null | undefined): NormalizedHeaders {
  if (value == null) {
    return Object.freeze({});
  }

  const normalized: Record<string, string[]> = {};
  const namesByLower = new Map<string, string>();

  for (const [rawName, rawValue] of toHeaderEntries(value)) {
    if (typeof rawName !== "string") {
      throw new ValidationError("headers name must be a string");
    }
    const name = rawName.trim();
    if (name === "") {
      throw new ValidationError("headers name must not be blank");
    }
    if (containsCrOrLf(name)) {
      throw new ValidationError("headers name must not contain CR or LF");
    }

    const normalizedValue = normalizeHeaderValues(rawValue);
    const lowerName = name.toLowerCase();
    const existingName = namesByLower.get(lowerName);

    if (existingName == null) {
      namesByLower.set(lowerName, name);
      normalized[name] = [...normalizedValue];
      continue;
    }

    const existingValues = normalized[existingName];
    if (existingValues == null) {
      normalized[existingName] = [...normalizedValue];
      continue;
    }

    existingValues.push(...normalizedValue);
  }

  return freezeNormalizedHeaders(normalized);
}

function normalizeHeaderValues(value: HeaderValue): readonly string[] {
  if (typeof value === "string") {
    return freezeHeaderValues([value]);
  }
  if (!isIterable(value)) {
    throw new ValidationError("headers value must be a string or iterable of strings");
  }

  const rawValues = [...value];
  if (rawValues.length === 0) {
    throw new ValidationError("headers value must not be empty");
  }

  return freezeHeaderValues(rawValues);
}

function freezeHeaderValues(values: readonly string[]): readonly string[] {
  const normalized: string[] = [];
  for (const rawItem of values) {
    if (typeof rawItem !== "string") {
      throw new ValidationError("headers value must contain only strings");
    }
    const item = rawItem.trim();
    if (item === "") {
      throw new ValidationError("headers value must not contain blank strings");
    }
    if (containsCrOrLf(item)) {
      throw new ValidationError("headers value must not contain CR or LF");
    }
    normalized.push(item);
  }
  return Object.freeze(normalized);
}

function toHeaderEntries(value: RequestHeaders): Array<readonly [string, HeaderValue]> {
  if (isHeadersInstance(value)) {
    return [...value.entries()];
  }
  if (value instanceof Map) {
    return [...value.entries()];
  }
  if (isIterable<unknown>(value)) {
    return [...value].map(toHeaderEntry);
  }
  if (isPlainObjectRecord(value)) {
    return Object.entries(value);
  }

  throw new ValidationError(
    "headers must be a plain object, Headers, Map, or iterable of [name, value] pairs",
  );
}

function toHeaderEntry(entry: unknown): readonly [string, HeaderValue] {
  if (!Array.isArray(entry) || entry.length !== 2) {
    throw new ValidationError("headers iterable entries must be [name, value] pairs");
  }

  return [entry[0] as string, entry[1] as HeaderValue];
}

function freezeNormalizedHeaders(
  headers: Record<string, string[]>,
): NormalizedHeaders {
  const normalized: Record<string, readonly string[]> = {};
  for (const [name, values] of Object.entries(headers)) {
    normalized[name] = Object.freeze([...values]);
  }
  return Object.freeze(normalized);
}

function isHeadersInstance(value: unknown): value is Headers {
  return typeof Headers !== "undefined" && value instanceof Headers;
}

function isPlainObjectRecord(value: unknown): value is Readonly<Record<string, HeaderValue>> {
  return isPlainObjectRecordShared(value);
}

function isIterable<T = unknown>(value: unknown): value is Iterable<T> {
  return (
    value != null &&
    typeof value !== "string" &&
    Symbol.iterator in Object(value)
  );
}

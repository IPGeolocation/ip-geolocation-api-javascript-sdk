import { ValidationError } from "./errors";
import { containsCrOrLf, isPlainObjectRecord } from "./internal/shared";

const DEFAULT_BASE_URL = "https://api.ipgeolocation.io";
const DEFAULT_CONNECT_TIMEOUT_MS = 10_000;
const DEFAULT_READ_TIMEOUT_MS = 30_000;
const MAX_TIMEOUT_MS = 2_147_483_647;

export interface IpGeolocationClientConfigInit {
  apiKey?: string | null;
  requestOrigin?: string | null;
  baseUrl?: string | null;
  connectTimeoutMs?: number | null;
  readTimeoutMs?: number | null;
}

export class IpGeolocationClientConfig {
  public readonly apiKey: string | undefined;
  public readonly requestOrigin: string | undefined;
  public readonly baseUrl: string;
  public readonly connectTimeoutMs: number;
  public readonly readTimeoutMs: number;

  public constructor(init: IpGeolocationClientConfigInit = {}) {
    if (!isPlainObjectRecord(init)) {
      throw new TypeError("config must be a plain object");
    }
    const normalizedInit = init as IpGeolocationClientConfigInit;

    const apiKey = normalizeApiKey(normalizedInit.apiKey);
    const requestOrigin = normalizeRequestOrigin(normalizedInit.requestOrigin);
    const baseUrl = normalizeBaseUrl(normalizedInit.baseUrl);
    const connectTimeoutMs = normalizeTimeoutMs(
      normalizedInit.connectTimeoutMs,
      "connectTimeoutMs",
      DEFAULT_CONNECT_TIMEOUT_MS,
    );
    const readTimeoutMs = normalizeTimeoutMs(
      normalizedInit.readTimeoutMs,
      "readTimeoutMs",
      DEFAULT_READ_TIMEOUT_MS,
    );

    this.apiKey = apiKey;
    this.requestOrigin = requestOrigin;
    this.baseUrl = baseUrl;
    this.connectTimeoutMs = connectTimeoutMs;
    this.readTimeoutMs = readTimeoutMs;

    Object.freeze(this);
  }
}

function normalizeApiKey(value: string | null | undefined): string | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new TypeError("apiKey must be a string");
  }
  const normalizedValue = value.trim();
  if (normalizedValue === "") {
    throw new ValidationError("apiKey must not be blank");
  }
  return normalizedValue;
}

function normalizeRequestOrigin(value: string | null | undefined): string | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new TypeError("requestOrigin must be a string");
  }

  const normalizedValue = value.trim();
  if (normalizedValue === "") {
    throw new ValidationError("requestOrigin must not be blank");
  }
  if (containsCrOrLf(normalizedValue)) {
    throw new ValidationError("requestOrigin must not contain CR or LF");
  }

  let url: URL;
  try {
    url = new URL(normalizedValue);
  } catch {
    throw new ValidationError("requestOrigin must be an absolute http or https origin");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new ValidationError("requestOrigin must be an absolute http or https origin");
  }
  if (url.host === "") {
    throw new ValidationError("requestOrigin must be an absolute http or https origin");
  }
  if (url.pathname !== "/" && url.pathname !== "") {
    throw new ValidationError("requestOrigin must not include a path");
  }
  if (url.search !== "" || url.hash !== "") {
    throw new ValidationError("requestOrigin must not include params, query, or fragment");
  }
  if (url.username !== "" || url.password !== "") {
    throw new ValidationError("requestOrigin must not include userinfo");
  }

  return url.origin;
}

function normalizeBaseUrl(value: string | null | undefined): string {
  if (value === undefined) {
    return DEFAULT_BASE_URL;
  }
  if (value === null) {
    throw new TypeError("baseUrl must not be null");
  }
  if (typeof value !== "string") {
    throw new TypeError("baseUrl must be a string");
  }

  const normalizedValue = trimTrailingSlashes(value.trim());
  if (normalizedValue === "") {
    throw new ValidationError("baseUrl must not be blank");
  }

  let url: URL;
  try {
    url = new URL(normalizedValue);
  } catch {
    throw new ValidationError("baseUrl must be an absolute http or https URL");
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new ValidationError("baseUrl must be an absolute http or https URL");
  }
  if (url.host === "") {
    throw new ValidationError("baseUrl must be an absolute http or https URL");
  }
  if (url.search !== "" || url.hash !== "") {
    throw new ValidationError("baseUrl must not include params, query, or fragment");
  }
  if (url.username !== "" || url.password !== "") {
    throw new ValidationError("baseUrl must not include userinfo");
  }

  return normalizedValue;
}

function normalizeTimeoutMs(
  value: number | null | undefined,
  field: string,
  defaultValue: number,
): number {
  if (value === undefined) {
    return defaultValue;
  }
  if (value === null) {
    throw new TypeError(`${field} must not be null`);
  }
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError(`${field} must be a number`);
  }
  if (!Number.isFinite(value)) {
    throw new ValidationError(`${field} must be finite`);
  }
  if (!Number.isInteger(value)) {
    throw new ValidationError(`${field} must be an integer`);
  }
  if (value <= 0) {
    throw new ValidationError(`${field} must be greater than zero`);
  }
  if (value > MAX_TIMEOUT_MS) {
    throw new ValidationError(`${field} must be less than or equal to ${MAX_TIMEOUT_MS}`);
  }
  return value;
}

function trimTrailingSlashes(value: string): string {
  return value.replace(/\/+$/, "");
}

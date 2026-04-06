import type { LocationConfidence } from "./enums";

const EMPTY_HEADER_VALUES = Object.freeze([]) as readonly string[];

export type HeaderMultiMap = Readonly<Record<string, readonly string[]>>;

export interface ApiResponse<T> {
  data: T;
  metadata: ApiResponseMetadata;
}

export interface ApiResponseMetadataInit {
  creditsCharged?: number | null;
  successfulRecords?: number | null;
  statusCode: number;
  durationMs: number;
  rawHeaders?: HeaderMultiMap | null;
}

export class ApiResponseMetadata {
  public readonly creditsCharged: number | undefined;
  public readonly successfulRecords: number | undefined;
  public readonly statusCode: number;
  public readonly durationMs: number;
  public readonly rawHeaders: HeaderMultiMap;

  public constructor(init: ApiResponseMetadataInit) {
    if (!Number.isInteger(init.statusCode) || init.statusCode < 100 || init.statusCode > 599) {
      throw new RangeError("statusCode must be an integer between 100 and 599");
    }
    if (!Number.isFinite(init.durationMs) || init.durationMs < 0) {
      throw new RangeError("durationMs must be a finite number >= 0");
    }

    this.creditsCharged = normalizeOptionalInteger(init.creditsCharged, "creditsCharged");
    this.successfulRecords = normalizeOptionalInteger(
      init.successfulRecords,
      "successfulRecords",
    );
    this.statusCode = init.statusCode;
    this.durationMs = init.durationMs;
    this.rawHeaders = normalizeHeaderMultiMap(init.rawHeaders);

    Object.freeze(this);
  }

  public headerValues(name: string): readonly string[] {
    if (typeof name !== "string" || name.trim() === "") {
      throw new TypeError("header name must not be blank");
    }

    const normalizedName = name.trim().toLowerCase();
    for (const [key, values] of Object.entries(this.rawHeaders)) {
      if (key.toLowerCase() === normalizedName) {
        return values;
      }
    }
    return EMPTY_HEADER_VALUES;
  }

  public firstHeaderValue(name: string): string | undefined {
    return this.headerValues(name)[0];
  }
}

function normalizeOptionalInteger(
  value: number | null | undefined,
  field: string,
): number | undefined {
  if (value == null) {
    return undefined;
  }
  if (!Number.isInteger(value) || value < 0) {
    throw new TypeError(`${field} must be a non-negative integer when provided`);
  }
  return value;
}

function normalizeHeaderMultiMap(input: HeaderMultiMap | null | undefined): HeaderMultiMap {
  if (input == null) {
    return Object.freeze({});
  }

  const normalized: Record<string, readonly string[]> = {};
  for (const [key, values] of Object.entries(input)) {
    if (typeof key !== "string" || key.trim() === "") {
      continue;
    }

    if (!Array.isArray(values)) {
      throw new TypeError("rawHeaders values must be arrays of strings");
    }

    const normalizedValues: string[] = [];
    for (const value of values) {
      if (typeof value !== "string") {
        throw new TypeError("rawHeaders values must contain only strings");
      }
      normalizedValues.push(value);
    }

    normalized[key] = Object.freeze(normalizedValues);
  }

  return Object.freeze(normalized);
}

export interface Abuse {
  route?: string;
  country?: string;
  name?: string;
  organization?: string;
  kind?: string;
  address?: string;
  emails?: readonly string[];
  phoneNumbers?: readonly string[];
}

export interface Asn {
  asNumber?: string;
  organization?: string;
  country?: string;
  type?: string;
  domain?: string;
  dateAllocated?: string;
  rir?: string;
}

export interface Company {
  name?: string;
  type?: string;
  domain?: string;
}

export interface CountryMetadata {
  callingCode?: string;
  tld?: string;
  languages?: readonly string[];
}

export interface Currency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface DstTransition {
  utcTime?: string;
  duration?: string;
  gap?: boolean;
  dateTimeAfter?: string;
  dateTimeBefore?: string;
  overlap?: boolean;
}

export interface Location {
  continentCode?: string;
  continentName?: string;
  countryCode2?: string;
  countryCode3?: string;
  countryName?: string;
  countryNameOfficial?: string;
  countryCapital?: string;
  stateProv?: string;
  stateCode?: string;
  district?: string;
  city?: string;
  locality?: string;
  accuracyRadius?: string;
  confidence?: LocationConfidence;
  dmaCode?: string;
  zipcode?: string;
  latitude?: string;
  longitude?: string;
  isEu?: boolean;
  countryFlag?: string;
  geonameId?: string;
  countryEmoji?: string;
}

export interface Network {
  connectionType?: string;
  route?: string;
  isAnycast?: boolean;
}

export interface Security {
  threatScore?: number;
  isTor?: boolean;
  isProxy?: boolean;
  proxyProviderNames?: readonly string[];
  proxyConfidenceScore?: number;
  proxyLastSeen?: string;
  isResidentialProxy?: boolean;
  isVpn?: boolean;
  vpnProviderNames?: readonly string[];
  vpnConfidenceScore?: number;
  vpnLastSeen?: string;
  isRelay?: boolean;
  relayProviderName?: string;
  isAnonymous?: boolean;
  isKnownAttacker?: boolean;
  isBot?: boolean;
  isSpam?: boolean;
  isCloudProvider?: boolean;
  cloudProviderName?: string;
}

export interface TimeZoneInfo {
  name?: string;
  offset?: number;
  offsetWithDst?: number;
  currentTime?: string;
  currentTimeUnix?: number;
  currentTzAbbreviation?: string;
  currentTzFullName?: string;
  standardTzAbbreviation?: string;
  standardTzFullName?: string;
  isDst?: boolean;
  dstSavings?: number;
  dstExists?: boolean;
  dstTzAbbreviation?: string;
  dstTzFullName?: string;
  dstStart?: DstTransition;
  dstEnd?: DstTransition;
}

export interface UserAgentDevice {
  name?: string;
  type?: string;
  brand?: string;
  cpu?: string;
}

export interface UserAgentEngine {
  name?: string;
  type?: string;
  version?: string;
  versionMajor?: string;
}

export interface UserAgentOperatingSystem {
  name?: string;
  type?: string;
  version?: string;
  versionMajor?: string;
  build?: string;
}

export interface UserAgent {
  userAgentString?: string;
  name?: string;
  type?: string;
  version?: string;
  versionMajor?: string;
  device?: UserAgentDevice;
  engine?: UserAgentEngine;
  operatingSystem?: UserAgentOperatingSystem;
}

export interface IpGeolocationResponse {
  ip?: string;
  domain?: string;
  hostname?: string;
  location?: Location;
  countryMetadata?: CountryMetadata;
  network?: Network;
  currency?: Currency;
  asn?: Asn;
  company?: Company;
  security?: Security;
  abuse?: Abuse;
  timeZone?: TimeZoneInfo;
  userAgent?: UserAgent;
}

export interface BulkLookupSuccess {
  success: true;
  data: IpGeolocationResponse;
}

export interface BulkLookupError {
  success: false;
  error: {
    message?: string;
  };
}

export type BulkLookupResult = BulkLookupSuccess | BulkLookupError;

import { LocationConfidence } from "../enums";
import { SerializationError } from "../errors";
import { isPlainObjectRecord } from "./shared";
import type {
  Abuse,
  Asn,
  BulkLookupError,
  BulkLookupResult,
  BulkLookupSuccess,
  Company,
  CountryMetadata,
  Currency,
  DstTransition,
  IpGeolocationResponse,
  Location,
  Network,
  Security,
  TimeZoneInfo,
  UserAgent,
  UserAgentDevice,
  UserAgentEngine,
  UserAgentOperatingSystem,
} from "../models";

export function parseSingleLookup(body: string): IpGeolocationResponse {
  const payload = parseJson(body, "Failed to deserialize API response");
  if (!isPlainObjectRecord(payload)) {
    throw new SerializationError("Failed to deserialize API response");
  }
  return parseIpGeolocationResponse(payload);
}

export function parseBulkLookup(body: string): readonly BulkLookupResult[] {
  const payload = parseJson(body, "Failed to deserialize bulk lookup response");
  if (!Array.isArray(payload)) {
    throw new SerializationError(
      "Failed to deserialize bulk response: expected an array payload",
    );
  }

  return Object.freeze(
    payload.map((item) => {
      if (isBulkErrorItem(item)) {
        return freezeDefined<BulkLookupError>({
          success: false,
          error: freezeDefined({
            message: coerceOptionalString(item.message, "message"),
          }),
        });
      }

      if (!isPlainObjectRecord(item)) {
        throw new SerializationError("Failed to deserialize API response");
      }

      return freezeDefined<BulkLookupSuccess>({
        success: true,
        data: parseIpGeolocationResponse(item),
      });
    }),
  );
}

function isBulkErrorItem(item: unknown): item is Record<string, unknown> {
  if (!isPlainObjectRecord(item)) {
    return false;
  }
  if (item.success === true) {
    return false;
  }
  return item.success === false || "message" in item;
}

function parseIpGeolocationResponse(node: Record<string, unknown>): IpGeolocationResponse {
  return freezeDefined<IpGeolocationResponse>({
    ip: coerceOptionalString(node.ip, "ip"),
    domain: coerceOptionalString(node.domain, "domain"),
    hostname: coerceOptionalString(node.hostname, "hostname"),
    location: parseOptionalObject(node.location, parseLocation),
    countryMetadata: parseOptionalObject(node.country_metadata, parseCountryMetadata),
    network: parseOptionalObject(node.network, parseNetwork),
    currency: parseOptionalObject(node.currency, parseCurrency),
    asn: parseOptionalObject(node.asn, parseAsn),
    company: parseOptionalObject(node.company, parseCompany),
    security: parseOptionalObject(node.security, parseSecurity),
    abuse: parseOptionalObject(node.abuse, parseAbuse),
    timeZone: parseOptionalObject(node.time_zone, parseTimeZoneInfo),
    userAgent: parseOptionalObject(node.user_agent, parseUserAgent),
  });
}

function parseAbuse(node: Record<string, unknown>): Abuse {
  return freezeDefined<Abuse>({
    route: coerceOptionalString(node.route, "abuse.route"),
    country: coerceOptionalString(node.country, "abuse.country"),
    name: coerceOptionalString(node.name, "abuse.name"),
    organization: coerceOptionalString(node.organization, "abuse.organization"),
    kind: coerceOptionalString(node.kind, "abuse.kind"),
    address: coerceOptionalString(node.address, "abuse.address"),
    emails: coerceStringArray(node.emails, "abuse.emails"),
    phoneNumbers: coerceStringArray(node.phone_numbers, "abuse.phone_numbers"),
  });
}

function parseAsn(node: Record<string, unknown>): Asn {
  return freezeDefined<Asn>({
    asNumber: coerceOptionalString(node.as_number, "asn.as_number"),
    organization: coerceOptionalString(node.organization, "asn.organization"),
    country: coerceOptionalString(node.country, "asn.country"),
    type: coerceOptionalString(node.type, "asn.type"),
    domain: coerceOptionalString(node.domain, "asn.domain"),
    dateAllocated: coerceOptionalString(node.date_allocated, "asn.date_allocated"),
    rir: coerceOptionalString(node.rir, "asn.rir"),
  });
}

function parseCompany(node: Record<string, unknown>): Company {
  return freezeDefined<Company>({
    name: coerceOptionalString(node.name, "company.name"),
    type: coerceOptionalString(node.type, "company.type"),
    domain: coerceOptionalString(node.domain, "company.domain"),
  });
}

function parseCountryMetadata(node: Record<string, unknown>): CountryMetadata {
  return freezeDefined<CountryMetadata>({
    callingCode: coerceOptionalString(node.calling_code, "country_metadata.calling_code"),
    tld: coerceOptionalString(node.tld, "country_metadata.tld"),
    languages: coerceStringArray(node.languages, "country_metadata.languages"),
  });
}

function parseCurrency(node: Record<string, unknown>): Currency {
  return freezeDefined<Currency>({
    code: coerceOptionalString(node.code, "currency.code"),
    name: coerceOptionalString(node.name, "currency.name"),
    symbol: coerceOptionalString(node.symbol, "currency.symbol"),
  });
}

function parseDstTransition(node: Record<string, unknown>): DstTransition {
  return freezeDefined<DstTransition>({
    utcTime: coerceOptionalString(node.utc_time, "dst.utc_time"),
    duration: coerceOptionalString(node.duration, "dst.duration"),
    gap: coerceOptionalBoolean(node.gap, "dst.gap"),
    dateTimeAfter: coerceOptionalString(node.date_time_after, "dst.date_time_after"),
    dateTimeBefore: coerceOptionalString(node.date_time_before, "dst.date_time_before"),
    overlap: coerceOptionalBoolean(node.overlap, "dst.overlap"),
  });
}

function parseLocation(node: Record<string, unknown>): Location {
  return freezeDefined<Location>({
    continentCode: coerceOptionalString(node.continent_code, "location.continent_code"),
    continentName: coerceOptionalString(node.continent_name, "location.continent_name"),
    countryCode2: coerceOptionalString(node.country_code2, "location.country_code2"),
    countryCode3: coerceOptionalString(node.country_code3, "location.country_code3"),
    countryName: coerceOptionalString(node.country_name, "location.country_name"),
    countryNameOfficial: coerceOptionalString(
      node.country_name_official,
      "location.country_name_official",
    ),
    countryCapital: coerceOptionalString(node.country_capital, "location.country_capital"),
    stateProv: coerceOptionalString(node.state_prov, "location.state_prov"),
    stateCode: coerceOptionalString(node.state_code, "location.state_code"),
    district: coerceOptionalString(node.district, "location.district"),
    city: coerceOptionalString(node.city, "location.city"),
    locality: coerceOptionalString(node.locality, "location.locality"),
    accuracyRadius: coerceOptionalString(node.accuracy_radius, "location.accuracy_radius"),
    confidence: coerceOptionalLocationConfidence(node.confidence),
    dmaCode: coerceOptionalString(node.dma_code, "location.dma_code"),
    zipcode: coerceOptionalString(node.zipcode, "location.zipcode"),
    latitude: coerceOptionalString(node.latitude, "location.latitude"),
    longitude: coerceOptionalString(node.longitude, "location.longitude"),
    isEu: coerceOptionalBoolean(node.is_eu, "location.is_eu"),
    countryFlag: coerceOptionalString(node.country_flag, "location.country_flag"),
    geonameId: coerceOptionalString(node.geoname_id, "location.geoname_id"),
    countryEmoji: coerceOptionalString(node.country_emoji, "location.country_emoji"),
  });
}

function parseNetwork(node: Record<string, unknown>): Network {
  return freezeDefined<Network>({
    connectionType: coerceOptionalString(node.connection_type, "network.connection_type"),
    route: coerceOptionalString(node.route, "network.route"),
    isAnycast: coerceOptionalBoolean(node.is_anycast, "network.is_anycast"),
  });
}

function parseSecurity(node: Record<string, unknown>): Security {
  return freezeDefined<Security>({
    threatScore: coerceOptionalNumber(node.threat_score, "security.threat_score"),
    isTor: coerceOptionalBoolean(node.is_tor, "security.is_tor"),
    isProxy: coerceOptionalBoolean(node.is_proxy, "security.is_proxy"),
    proxyProviderNames: coerceStringArray(
      node.proxy_provider_names,
      "security.proxy_provider_names",
    ),
    proxyConfidenceScore: coerceOptionalNumber(
      node.proxy_confidence_score,
      "security.proxy_confidence_score",
    ),
    proxyLastSeen: coerceOptionalString(node.proxy_last_seen, "security.proxy_last_seen"),
    isResidentialProxy: coerceOptionalBoolean(
      node.is_residential_proxy,
      "security.is_residential_proxy",
    ),
    isVpn: coerceOptionalBoolean(node.is_vpn, "security.is_vpn"),
    vpnProviderNames: coerceStringArray(node.vpn_provider_names, "security.vpn_provider_names"),
    vpnConfidenceScore: coerceOptionalNumber(
      node.vpn_confidence_score,
      "security.vpn_confidence_score",
    ),
    vpnLastSeen: coerceOptionalString(node.vpn_last_seen, "security.vpn_last_seen"),
    isRelay: coerceOptionalBoolean(node.is_relay, "security.is_relay"),
    relayProviderName: coerceOptionalString(
      node.relay_provider_name,
      "security.relay_provider_name",
    ),
    isAnonymous: coerceOptionalBoolean(node.is_anonymous, "security.is_anonymous"),
    isKnownAttacker: coerceOptionalBoolean(
      node.is_known_attacker,
      "security.is_known_attacker",
    ),
    isBot: coerceOptionalBoolean(node.is_bot, "security.is_bot"),
    isSpam: coerceOptionalBoolean(node.is_spam, "security.is_spam"),
    isCloudProvider: coerceOptionalBoolean(
      node.is_cloud_provider,
      "security.is_cloud_provider",
    ),
    cloudProviderName: coerceOptionalString(
      node.cloud_provider_name,
      "security.cloud_provider_name",
    ),
  });
}

function parseTimeZoneInfo(node: Record<string, unknown>): TimeZoneInfo {
  return freezeDefined<TimeZoneInfo>({
    name: coerceOptionalString(node.name, "time_zone.name"),
    offset: coerceOptionalNumber(node.offset, "time_zone.offset"),
    offsetWithDst: coerceOptionalNumber(node.offset_with_dst, "time_zone.offset_with_dst"),
    currentTime: coerceOptionalString(node.current_time, "time_zone.current_time"),
    currentTimeUnix: coerceOptionalNumber(node.current_time_unix, "time_zone.current_time_unix"),
    currentTzAbbreviation: coerceOptionalString(
      node.current_tz_abbreviation,
      "time_zone.current_tz_abbreviation",
    ),
    currentTzFullName: coerceOptionalString(
      node.current_tz_full_name,
      "time_zone.current_tz_full_name",
    ),
    standardTzAbbreviation: coerceOptionalString(
      node.standard_tz_abbreviation,
      "time_zone.standard_tz_abbreviation",
    ),
    standardTzFullName: coerceOptionalString(
      node.standard_tz_full_name,
      "time_zone.standard_tz_full_name",
    ),
    isDst: coerceOptionalBoolean(node.is_dst, "time_zone.is_dst"),
    dstSavings: coerceOptionalNumber(node.dst_savings, "time_zone.dst_savings"),
    dstExists: coerceOptionalBoolean(node.dst_exists, "time_zone.dst_exists"),
    dstTzAbbreviation: coerceOptionalString(
      node.dst_tz_abbreviation,
      "time_zone.dst_tz_abbreviation",
    ),
    dstTzFullName: coerceOptionalString(
      node.dst_tz_full_name,
      "time_zone.dst_tz_full_name",
    ),
    dstStart: parseOptionalObject(node.dst_start, parseDstTransition),
    dstEnd: parseOptionalObject(node.dst_end, parseDstTransition),
  });
}

function parseUserAgentDevice(node: Record<string, unknown>): UserAgentDevice {
  return freezeDefined<UserAgentDevice>({
    name: coerceOptionalString(node.name, "user_agent.device.name"),
    type: coerceOptionalString(node.type, "user_agent.device.type"),
    brand: coerceOptionalString(node.brand, "user_agent.device.brand"),
    cpu: coerceOptionalString(node.cpu, "user_agent.device.cpu"),
  });
}

function parseUserAgentEngine(node: Record<string, unknown>): UserAgentEngine {
  return freezeDefined<UserAgentEngine>({
    name: coerceOptionalString(node.name, "user_agent.engine.name"),
    type: coerceOptionalString(node.type, "user_agent.engine.type"),
    version: coerceOptionalString(node.version, "user_agent.engine.version"),
    versionMajor: coerceOptionalString(
      node.version_major,
      "user_agent.engine.version_major",
    ),
  });
}

function parseUserAgentOperatingSystem(
  node: Record<string, unknown>,
): UserAgentOperatingSystem {
  return freezeDefined<UserAgentOperatingSystem>({
    name: coerceOptionalString(node.name, "user_agent.operating_system.name"),
    type: coerceOptionalString(node.type, "user_agent.operating_system.type"),
    version: coerceOptionalString(node.version, "user_agent.operating_system.version"),
    versionMajor: coerceOptionalString(
      node.version_major,
      "user_agent.operating_system.version_major",
    ),
    build: coerceOptionalString(node.build, "user_agent.operating_system.build"),
  });
}

function parseUserAgent(node: Record<string, unknown>): UserAgent {
  return freezeDefined<UserAgent>({
    userAgentString: coerceOptionalString(
      node.user_agent_string,
      "user_agent.user_agent_string",
    ),
    name: coerceOptionalString(node.name, "user_agent.name"),
    type: coerceOptionalString(node.type, "user_agent.type"),
    version: coerceOptionalString(node.version, "user_agent.version"),
    versionMajor: coerceOptionalString(node.version_major, "user_agent.version_major"),
    device: parseOptionalObject(node.device, parseUserAgentDevice),
    engine: parseOptionalObject(node.engine, parseUserAgentEngine),
    operatingSystem: parseOptionalObject(
      node.operating_system,
      parseUserAgentOperatingSystem,
    ),
  });
}

function freezeDefined<T extends object>(value: Record<string, unknown>): T {
  const result: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value)) {
    if (item !== undefined) {
      result[key] = item;
    }
  }
  return Object.freeze(result) as T;
}

function parseJson(body: string, message: string): unknown {
  try {
    return JSON.parse(body);
  } catch (error) {
    throw new SerializationError(message, { cause: error });
  }
}

function parseOptionalObject<T>(
  value: unknown,
  parser: (node: Record<string, unknown>) => T,
): T | undefined {
  if (value == null) {
    return undefined;
  }
  if (!isPlainObjectRecord(value)) {
    throw new SerializationError("Failed to deserialize API response");
  }
  return parser(value);
}

function coerceOptionalString(value: unknown, field: string): string | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value === "string") {
    return value;
  }
  throw new SerializationError(`Failed to deserialize API response: ${field} must be a string`);
}

function coerceStringArray(
  value: unknown,
  field: string,
): readonly string[] | undefined {
  if (value == null) {
    return undefined;
  }
  if (!Array.isArray(value)) {
    throw new SerializationError(`Failed to deserialize API response: ${field} must be an array`);
  }
  return Object.freeze(
    value.map((item) => {
      if (typeof item !== "string") {
        throw new SerializationError(
          `Failed to deserialize API response: ${field} must contain strings`,
        );
      }
      return item;
    }),
  );
}

function coerceOptionalBoolean(value: unknown, field: string): boolean | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value === "boolean") {
    return value;
  }
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") {
      return true;
    }
    if (normalized === "false") {
      return false;
    }
  }
  throw new SerializationError(`Failed to deserialize API response: ${field} must be a boolean`);
}

function coerceOptionalNumber(value: unknown, field: string): number | undefined {
  if (value == null) {
    return undefined;
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new SerializationError(
        `Failed to deserialize API response: ${field} must be finite`,
      );
    }
    return value;
  }
  if (typeof value === "string") {
    const normalized = value.trim();
    if (normalized === "") {
      throw new SerializationError(
        `Failed to deserialize API response: ${field} must be numeric`,
      );
    }
    const parsed = Number(normalized);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  throw new SerializationError(`Failed to deserialize API response: ${field} must be numeric`);
}

function coerceOptionalLocationConfidence(
  value: unknown,
): Location["confidence"] | undefined {
  const raw = coerceOptionalString(value, "location.confidence");
  if (raw == null) {
    return undefined;
  }
  switch (raw) {
    case LocationConfidence.HIGH:
    case LocationConfidence.MEDIUM:
    case LocationConfidence.LOW:
    case LocationConfidence.UNKNOWN:
      return raw;
    default:
      return LocationConfidence.UNKNOWN;
  }
}

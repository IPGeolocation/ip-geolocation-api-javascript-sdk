import {
  JSON_OUTPUT_MODE_VALUES,
  JsonOutputMode,
  type JsonOutputMode as JsonOutputModeType,
} from "./enums";
import { SerializationError } from "./errors";

const OMIT = Symbol("omit");

export function toJson(
  value: unknown,
  mode?: JsonOutputModeType | string,
): string {
  return writeJson(
    value,
    arguments.length < 2 ? JsonOutputMode.COMPACT : mode,
    false,
  );
}

export function toPrettyJson(
  value: unknown,
  mode?: JsonOutputModeType | string,
): string {
  return writeJson(
    value,
    arguments.length < 2 ? JsonOutputMode.COMPACT : mode,
    true,
  );
}

function writeJson(
  value: unknown,
  mode: JsonOutputModeType | string | undefined,
  pretty: boolean,
): string {
  const normalizedMode = normalizeMode(mode);

  try {
    const payload = toPlainData(value, normalizedMode, new WeakSet<object>(), "root");
    return pretty
      ? JSON.stringify(payload, null, 2)
      : JSON.stringify(payload);
  } catch (error) {
    if (error instanceof TypeError || error instanceof RangeError) {
      throw error;
    }
    if (error instanceof SerializationError) {
      throw error;
    }
    throw new SerializationError("Failed to serialize output as JSON", {
      cause: error,
    });
  }
}

type SerializationContext = "root" | "object" | "array";

function toPlainData(
  value: unknown,
  mode: JsonOutputModeType,
  seen: WeakSet<object>,
  context: SerializationContext,
): unknown {
  if (value === undefined) {
    if (mode === JsonOutputMode.COMPACT && context === "object") {
      return OMIT;
    }
    return null;
  }

  if (value === null) {
    return null;
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value;
  }

  if (typeof value === "bigint") {
    throw new TypeError("bigint values are not supported in JSON output");
  }

  if (typeof value === "function" || typeof value === "symbol") {
    if (mode === JsonOutputMode.COMPACT && context === "object") {
      return OMIT;
    }
    return null;
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value !== "object") {
    return value;
  }

  if (seen.has(value)) {
    throw new TypeError("circular structures are not supported in JSON output");
  }

  seen.add(value);
  try {
    if (Array.isArray(value)) {
      return value.map((item) => {
        const normalized = toPlainData(item, mode, seen, "array");
        return normalized === OMIT ? null : normalized;
      });
    }

    if (value instanceof Map) {
      return serializeEntries(value.entries(), mode, seen);
    }

    if (value instanceof Set) {
      return [...value].map((item) => {
        const normalized = toPlainData(item, mode, seen, "array");
        return normalized === OMIT ? null : normalized;
      });
    }

    return serializeEntries(Object.entries(value), mode, seen);
  } finally {
    seen.delete(value);
  }
}

function serializeEntries(
  entries: Iterable<readonly [unknown, unknown]>,
  mode: JsonOutputModeType,
  seen: WeakSet<object>,
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [rawKey, rawValue] of entries) {
    const key = String(rawKey);
    const normalizedValue = toPlainData(rawValue, mode, seen, "object");
    if (normalizedValue === OMIT) {
      continue;
    }
    result[key] = normalizedValue;
  }
  return result;
}

function normalizeMode(
  mode: JsonOutputModeType | string | null | undefined,
): JsonOutputModeType {
  if (mode == null) {
    throw new TypeError("mode must not be null or undefined");
  }
  if (typeof mode !== "string") {
    throw new TypeError("mode must be a JsonOutputMode or string");
  }

  const normalized = mode.trim().toLowerCase();
  if (JSON_OUTPUT_MODE_VALUES.includes(normalized as JsonOutputModeType)) {
    return normalized as JsonOutputModeType;
  }

  throw new RangeError("mode must be either 'compact' or 'full'");
}

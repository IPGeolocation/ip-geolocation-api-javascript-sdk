import type { IpGeolocationClientConfig } from "../config";

const MASK = "[REDACTED]";
export const configJson = Symbol.for("ipgeolocation.clientConfig.toJSON");

export function redactApiKey(text: string, key?: string): string {
  if (!key) return text;
  if (/^[A-Za-z0-9._-]+$/.test(key)) return text.split(key).join(MASK);

  const form = new URLSearchParams({ k: key });
  const encoded = encodeURIComponent(form.get("k")!);
  let result = text;
  for (const token of new Set([
    encoded.replace(/'/g, "%27"),
    encoded,
    form.toString().slice(2),
  ])) {
    if (token === key || token.length > result.length) continue;
    const upperEscapes = (s: string) =>
      s.replace(/%[a-f\d]{2}/gi, (escape) => escape.toUpperCase());
    const haystack = upperEscapes(result);
    const needle = upperEscapes(token);
    let start = 0;
    const parts: string[] = [];
    for (
      let at = haystack.indexOf(needle);
      at >= 0;
      at = haystack.indexOf(needle, start)
    ) {
      parts.push(result.slice(start, at), MASK);
      start = at + token.length;
    }
    if (parts.length) result = parts.join("") + result.slice(start);
  }
  const escaped = JSON.stringify(key).slice(1, -1);
  if (escaped !== key) result = result.split(escaped).join(MASK);
  return result.split(key).join(MASK);
}

const nativeStackGetter = Object.getOwnPropertyDescriptor(
  new Error(),
  "stack",
)?.get;
const inspectSymbol = Symbol.for("nodejs.util.inspect.custom");

export function hasSafeErrorDetails(
  value: unknown,
  key: string,
  seen = new Set<object>(),
): boolean {
  if (typeof value === "string") return redactApiKey(value, key) === value;
  if (value === null || typeof value !== "object") {
    return typeof value !== "function" && typeof value !== "symbol";
  }
  if (seen.has(value)) return true;
  const proto = Object.getPrototypeOf(value);
  if (
    seen.size >= 32 ||
    "toJSON" in value ||
    Symbol.toPrimitive in value ||
    inspectSymbol in value ||
    (!(value instanceof Error) &&
      !Array.isArray(value) &&
      proto !== null &&
      proto !== Object.prototype)
  ) {
    return false;
  }
  seen.add(value);
  if (value instanceof Error) {
    for (
      let p = proto;
      p && p !== Error.prototype;
      p = Object.getPrototypeOf(p)
    ) {
      for (const name of Reflect.ownKeys(p)) {
        if (name === "constructor") continue;
        const field = Object.getOwnPropertyDescriptor(p, name)!;
        if (
          typeof name !== "string" ||
          name === "toString" ||
          name === "valueOf" ||
          !("value" in field) ||
          redactApiKey(name, key) !== name
        )
          return false;
        if (
          typeof field.value !== "function" &&
          !hasSafeErrorDetails(field.value, key, seen)
        )
          return false;
      }
    }
  }
  for (const name of Reflect.ownKeys(value)) {
    if (typeof name !== "string" || redactApiKey(name, key) !== name)
      return false;
    const property = Object.getOwnPropertyDescriptor(value, name)!;
    let detail = property.value;
    if (!("value" in property)) {
      if (
        name !== "stack" ||
        !(value instanceof Error) ||
        !nativeStackGetter ||
        property.get !== nativeStackGetter
      )
        return false;
      detail = nativeStackGetter.call(value);
    }
    if (!hasSafeErrorDetails(detail, key, seen)) return false;
  }
  return true;
}

export function configForOutput(config: IpGeolocationClientConfig) {
  const key = config.apiKey;
  return {
    apiKey: key === undefined ? undefined : MASK,
    requestOrigin:
      config.requestOrigin && redactApiKey(config.requestOrigin, key),
    baseUrl: redactApiKey(config.baseUrl, key),
    connectTimeoutMs: config.connectTimeoutMs,
    readTimeoutMs: config.readTimeoutMs,
  };
}

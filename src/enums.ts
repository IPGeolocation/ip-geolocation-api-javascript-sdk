export const Language = Object.freeze({
  EN: "en",
  DE: "de",
  RU: "ru",
  JA: "ja",
  FR: "fr",
  CN: "cn",
  ES: "es",
  CS: "cs",
  IT: "it",
  KO: "ko",
  FA: "fa",
  PT: "pt",
} as const);

export type Language = (typeof Language)[keyof typeof Language];

export const LANGUAGE_VALUES = Object.freeze(Object.values(Language) as Language[]);

export const ResponseFormat = Object.freeze({
  JSON: "json",
  XML: "xml",
} as const);

export type ResponseFormat = (typeof ResponseFormat)[keyof typeof ResponseFormat];

export const RESPONSE_FORMAT_VALUES = Object.freeze(
  Object.values(ResponseFormat) as ResponseFormat[],
);

export const JsonOutputMode = Object.freeze({
  COMPACT: "compact",
  FULL: "full",
} as const);

export type JsonOutputMode = (typeof JsonOutputMode)[keyof typeof JsonOutputMode];

export const JSON_OUTPUT_MODE_VALUES = Object.freeze(
  Object.values(JsonOutputMode) as JsonOutputMode[],
);

export const LocationConfidence = Object.freeze({
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
  UNKNOWN: "unknown",
} as const);

export type LocationConfidence =
  (typeof LocationConfidence)[keyof typeof LocationConfidence];

export const LOCATION_CONFIDENCE_VALUES = Object.freeze(
  Object.values(LocationConfidence) as LocationConfidence[],
);

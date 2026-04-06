import { ResponseFormat } from "./enums";
import { SerializationError, ValidationError } from "./errors";
import type {
  ApiResponse,
  BulkLookupResult,
  IpGeolocationResponse,
} from "./models";
import {
  BulkLookupIpGeolocationRequest,
  type BulkLookupIpGeolocationRequestInit,
  LookupIpGeolocationRequest,
  type LookupIpGeolocationRequestInit,
} from "./request-models";
import {
  buildQuery,
  mergeHeaders,
  resolveUserAgentHeader,
  toApiError,
  toMetadata,
  validateJsonOutput,
} from "./internal/shared";
import {
  FetchHttpTransport,
  type HttpRequestData,
  type HttpResponseData,
  type HttpTransport,
} from "./internal/transport";
import { parseBulkLookup, parseSingleLookup } from "./internal/serde";
import { IpGeolocationClientConfig, type IpGeolocationClientConfigInit } from "./config";
import { getVersion } from "./version";

export class IpGeolocationClient {
  private readonly config: IpGeolocationClientConfig;
  private readonly transport: HttpTransport;
  private readonly ownsTransport: boolean;
  private closed = false;

  public constructor(
    config: IpGeolocationClientConfig | IpGeolocationClientConfigInit,
    transport?: HttpTransport,
  ) {
    if (config == null) {
      throw new TypeError("config must not be null");
    }

    this.config =
      config instanceof IpGeolocationClientConfig
        ? config
        : new IpGeolocationClientConfig(config);
    this.transport = transport ?? new FetchHttpTransport();
    this.ownsTransport = transport == null;
  }

  public static defaultUserAgent(): string {
    return `ipgeolocation-javascript-sdk/${getVersion()}`;
  }

  public async lookupIpGeolocation(
    request: LookupIpGeolocationRequest | LookupIpGeolocationRequestInit,
  ): Promise<ApiResponse<IpGeolocationResponse>> {
    this.ensureOpen();
    const normalizedRequest = toLookupRequest(request);
    this.validateLookupRequestBase(normalizedRequest);
    validateJsonOutput(normalizedRequest.output);

    const httpRequest = this.buildLookupHttpRequest(normalizedRequest);
    const { response, durationMs } = await this.executeWithMetrics(httpRequest);

    if (Math.floor(response.statusCode / 100) !== 2) {
      throw toApiError(response.statusCode, response.body);
    }

    return {
      data: parseSingleLookup(response.body),
      metadata: toMetadata(response.statusCode, durationMs, response.headers),
    };
  }

  public async lookupIpGeolocationRaw(
    request: LookupIpGeolocationRequest | LookupIpGeolocationRequestInit,
  ): Promise<ApiResponse<string>> {
    this.ensureOpen();
    const normalizedRequest = toLookupRequest(request);
    this.validateLookupRequestBase(normalizedRequest);

    const httpRequest = this.buildLookupHttpRequest(normalizedRequest);
    const { response, durationMs } = await this.executeWithMetrics(httpRequest);

    if (Math.floor(response.statusCode / 100) !== 2) {
      throw toApiError(response.statusCode, response.body);
    }

    return {
      data: response.body,
      metadata: toMetadata(response.statusCode, durationMs, response.headers),
    };
  }

  public async bulkLookupIpGeolocation(
    request:
      | BulkLookupIpGeolocationRequest
      | BulkLookupIpGeolocationRequestInit,
  ): Promise<ApiResponse<readonly BulkLookupResult[]>> {
    this.ensureOpen();
    const normalizedRequest = toBulkRequest(request);
    this.validateBulkRequestBase(normalizedRequest);
    validateJsonOutput(normalizedRequest.output);

    const httpRequest = this.buildBulkHttpRequest(normalizedRequest);
    const { response, durationMs } = await this.executeWithMetrics(httpRequest);

    if (Math.floor(response.statusCode / 100) !== 2) {
      throw toApiError(response.statusCode, response.body);
    }

    return {
      data: parseBulkLookup(response.body),
      metadata: toMetadata(response.statusCode, durationMs, response.headers),
    };
  }

  public async bulkLookupIpGeolocationRaw(
    request:
      | BulkLookupIpGeolocationRequest
      | BulkLookupIpGeolocationRequestInit,
  ): Promise<ApiResponse<string>> {
    this.ensureOpen();
    const normalizedRequest = toBulkRequest(request);
    this.validateBulkRequestBase(normalizedRequest);

    const httpRequest = this.buildBulkHttpRequest(normalizedRequest);
    const { response, durationMs } = await this.executeWithMetrics(httpRequest);

    if (Math.floor(response.statusCode / 100) !== 2) {
      throw toApiError(response.statusCode, response.body);
    }

    return {
      data: response.body,
      metadata: toMetadata(response.statusCode, durationMs, response.headers),
    };
  }

  public async close(): Promise<void> {
    if (this.closed) {
      return;
    }

    this.closed = true;
    if (this.ownsTransport) {
      await this.transport.close();
    }
  }

  private ensureOpen(): void {
    if (this.closed) {
      throw new ValidationError("client is closed");
    }
  }

  private validateLookupRequestBase(request: LookupIpGeolocationRequest): void {
    if (this.config.apiKey == null && this.config.requestOrigin == null) {
      throw new ValidationError(
        "single lookup requires apiKey or requestOrigin in client config",
      );
    }
  }

  private validateBulkRequestBase(request: BulkLookupIpGeolocationRequest): void {
    if (this.config.apiKey == null) {
      throw new ValidationError("bulk lookup requires apiKey in client config");
    }
    if (request.ips.length === 0) {
      throw new ValidationError("ips must not be empty");
    }
    if (request.ips.length > 50_000) {
      throw new ValidationError("ips must contain at most 50000 entries");
    }
  }

  private buildLookupHttpRequest(request: LookupIpGeolocationRequest): HttpRequestData {
    const output = request.output ?? ResponseFormat.JSON;
    const query = buildQuery({
      apiKey: this.config.apiKey,
      ip: request.ip,
      lang: request.lang,
      include: request.include.length > 0 ? request.include.join(",") : undefined,
      fields: request.fields.length > 0 ? request.fields.join(",") : undefined,
      excludes: request.excludes.length > 0 ? request.excludes.join(",") : undefined,
      output,
    });

    const headers = mergeHeaders(
      request.headers,
      this.config.requestOrigin == null
        ? undefined
        : { Origin: Object.freeze([this.config.requestOrigin]) },
      {
        "User-Agent": resolveUserAgentHeader(
          request.userAgent,
          request.headers,
          this.resolveDefaultUserAgent(),
        ),
        Accept: Object.freeze([
          output === ResponseFormat.XML ? "application/xml" : "application/json",
        ]),
      },
    );

    return {
      url: `${this.config.baseUrl}/v3/ipgeo${query}`,
      method: "GET",
      headers,
      body: undefined,
      connectTimeoutMs: this.config.connectTimeoutMs,
      readTimeoutMs: this.config.readTimeoutMs,
    };
  }

  private buildBulkHttpRequest(request: BulkLookupIpGeolocationRequest): HttpRequestData {
    const output = request.output ?? ResponseFormat.JSON;
    const query = buildQuery({
      apiKey: this.config.apiKey,
      lang: request.lang,
      include: request.include.length > 0 ? request.include.join(",") : undefined,
      fields: request.fields.length > 0 ? request.fields.join(",") : undefined,
      excludes: request.excludes.length > 0 ? request.excludes.join(",") : undefined,
      output,
    });

    let payload: string;
    try {
      payload = JSON.stringify({ ips: [...request.ips] });
    } catch (error) {
      throw new SerializationError("Failed to serialize bulk lookup request body", {
        cause: error,
      });
    }

    const headers = mergeHeaders(
      request.headers,
      this.config.requestOrigin == null
        ? undefined
        : { Origin: Object.freeze([this.config.requestOrigin]) },
      {
        "User-Agent": resolveUserAgentHeader(
          request.userAgent,
          request.headers,
          this.resolveDefaultUserAgent(),
        ),
        Accept: Object.freeze([
          output === ResponseFormat.XML ? "application/xml" : "application/json",
        ]),
        "Content-Type": Object.freeze(["application/json"]),
      },
    );

    return {
      url: `${this.config.baseUrl}/v3/ipgeo-bulk${query}`,
      method: "POST",
      headers,
      body: payload,
      connectTimeoutMs: this.config.connectTimeoutMs,
      readTimeoutMs: this.config.readTimeoutMs,
    };
  }

  private async executeWithMetrics(
    request: HttpRequestData,
  ): Promise<{ response: HttpResponseData; durationMs: number }> {
    const started = Date.now();
    const response = await this.transport.send(request);
    return {
      response,
      durationMs: Math.max(0, Date.now() - started),
    };
  }

  private resolveDefaultUserAgent(): string {
    const clientClass = this.constructor as typeof IpGeolocationClient;
    return clientClass.defaultUserAgent();
  }
}

function toLookupRequest(
  request: LookupIpGeolocationRequest | LookupIpGeolocationRequestInit,
): LookupIpGeolocationRequest {
  if (request == null) {
    throw new ValidationError("request must not be null");
  }
  return request instanceof LookupIpGeolocationRequest
    ? request
    : new LookupIpGeolocationRequest(request);
}

function toBulkRequest(
  request: BulkLookupIpGeolocationRequest | BulkLookupIpGeolocationRequestInit,
): BulkLookupIpGeolocationRequest {
  if (request == null) {
    throw new ValidationError("request must not be null");
  }
  return request instanceof BulkLookupIpGeolocationRequest
    ? request
    : new BulkLookupIpGeolocationRequest(request);
}

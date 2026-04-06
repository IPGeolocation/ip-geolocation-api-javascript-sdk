type ErrorConstructorWithCaptureStackTrace = ErrorConstructor & {
  captureStackTrace?: (targetObject: object, constructorOpt?: Function) => void;
};

function captureStack(instance: Error, constructor: Function): void {
  const errorConstructor = Error as ErrorConstructorWithCaptureStackTrace;
  if (typeof errorConstructor.captureStackTrace === "function") {
    errorConstructor.captureStackTrace(instance, constructor);
  }
}

export interface ErrorCauseOptions {
  cause?: unknown;
}

export class IpGeolocationError extends Error {
  public readonly cause: unknown;

  public constructor(message: string, options?: ErrorCauseOptions) {
    super(message);
    this.name = new.target.name;
    this.cause = options?.cause;
    captureStack(this, new.target);
  }
}

export class ValidationError extends IpGeolocationError {}

export class SerializationError extends IpGeolocationError {}

export class TransportError extends IpGeolocationError {}

export class RequestTimeoutError extends TransportError {}

export class ApiError extends IpGeolocationError {
  public readonly statusCode: number;
  public readonly apiMessage: string | undefined;

  public constructor(message: string, statusCode: number, apiMessage?: string) {
    super(message);
    this.statusCode = statusCode;
    this.apiMessage = apiMessage;
  }
}

export class BadRequestError extends ApiError {}

export class UnauthorizedError extends ApiError {}

export class NotFoundError extends ApiError {}

export class MethodNotAllowedError extends ApiError {}

export class PayloadTooLargeError extends ApiError {}

export class UnsupportedMediaTypeError extends ApiError {}

export class LockedError extends ApiError {}

export class RateLimitError extends ApiError {}

export class ClientClosedRequestError extends ApiError {}

export class ServerError extends ApiError {}

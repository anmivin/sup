export enum ErrorStatus {
  BAD_REQUEST = 400, // запрос искажен
  UNAUTHORIZED = 401, //недействительные данные аутентификации
  FORBIDDEN = 403, //аутентифицированный пользователь не имеет доступа к ресурсу
  NOT_FOUND = 404, //несуществующий ресурс
  CONFLICT = 409,
}

export enum SuccessStatus {
  OK = 200, //успешные GET, PUT, PATCH или DELETE
  CREATED = 201, //ответом на POST, который приводит к созданию.
  NO_CONTENT = 204, //успешный запрос, который не будет возвращать тело
}

class HttpError extends Error {
  status: number;
  public constructor(public code: number, message: unknown, context: unknown = null) {
    super("");
    this.status = code;
    // @ts-ignore
    this.message = message;
    // @ts-ignore
    this.context = context;
  }
}

class AppError {
  constructor(code: number, message?: unknown, context?: unknown) {
    throw new HttpError(code, message || ErrorStatus[code], context);
  }
}

export class BadRequestError extends AppError {
  constructor(message?: unknown) {
    super(ErrorStatus.BAD_REQUEST, message);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message?: unknown) {
    super(ErrorStatus.UNAUTHORIZED, message);
  }
}

export class ForbiddenError extends AppError {
  constructor(message?: unknown) {
    super(ErrorStatus.FORBIDDEN, message);
  }
}

export class NotFoundError extends AppError {
  constructor(message?: unknown) {
    super(ErrorStatus.NOT_FOUND, message);
  }
}

export class ConflictError extends AppError {
  constructor(message?: unknown, context?: unknown) {
    super(ErrorStatus.CONFLICT, message, context);
  }
}

export enum ErrorStatus {
  BAD_REQUEST = 400, // этот код состояния указывает, что запрос искажен, например, если тело не может быть проанализировано
  UNAUTHORIZED = 401, //Если не указаны или недействительны данные аутентификации. Также полезно активировать всплывающее окно auth, если приложение используется из браузера
  FORBIDDEN = 403, //когда аутентификация прошла успешно, но аутентифицированный пользователь не имеет доступа к ресурсу
  NOT_FOUND = 404, //если запрашивается несуществующий ресурс
  NOT_ALLOWED = 405, // когда запрашивается HTTP-метод, который не разрешен для аутентифицированного пользователя
}


export enum SuccessStatus {
  OK = 200, //это ответ на успешные GET, PUT, PATCH или DELETE. Этот код также используется для POST, который не приводит к созданию.
  CREATED = 201, //этот код состояния является ответом на POST, который приводит к созданию.
  NO_CONTENT = 204, //Нет содержимого. Это ответ на успешный запрос, который не будет возвращать тело (например, запрос DELETE)
}


class HttpError extends Error {
  status: number;
  public constructor(public code: number, message: unknown, context: unknown = null) {
    super('');
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
    super(ErrorStatus.NOT_ALLOWED, message, context);
  }
}

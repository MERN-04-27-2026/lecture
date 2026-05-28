export class CustomError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Fix the prototype chain explicitly for TypeScript
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string = "Resource not found", status: number = 404) {
    super(message, status);
  }
}

export class ConflictError extends CustomError {
  constructor(message: string = "Conflict", status: number = 409) {
    super(message, status);
  }
}
export class UnAuthorizedError extends CustomError {
  constructor(message: string = "You don't have permission", status: number = 403) {
    super(message, status);
  }
}


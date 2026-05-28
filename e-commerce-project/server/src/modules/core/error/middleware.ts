// middleware/error.middleware.ts
import { Request, Response, NextFunction } from "express";
import { CustomError } from "./CustomError";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // 1. According to the Express Guide, check if headers have already been sent.
  // If true, delegate to the default Express handler to avoid crashing.
  if (res.headersSent) {
    return next(err);
  }

  // 2. Extract standard fields or fallbacks
  const statusCode = err instanceof CustomError ? err.statusCode : 500;
  const message = err.message || "Internal Server Error";

  // 3. Optional: Log the complete error server-side
  console.error(`[Error] [${req.method}] ${req.url}:`);

  // 4. Send the structured payload
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
    // Only expose stack traces when running in local development mode
    // ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};

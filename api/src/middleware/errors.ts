import { NextFunction, Request, RequestHandler, Response } from "express";

export const appErrorHandler = (handler: RequestHandler) => (
  ...args: [Request, Response, NextFunction]
) => handler(...args).catch(args[2]);

export const NotFound = (req: Request, res: Response, next: NextFunction) =>
  res.status(404).json({ message: "Not Found" });

export const internalServerError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.status) {
    console.error(err.stack);
  }
  return res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server Error" });
};

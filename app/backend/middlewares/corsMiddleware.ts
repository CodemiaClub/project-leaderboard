import { NextFunction, Request, Response } from "express";

if (!process.env.ACCESS_CONTROL_ALLOW_ORIGIN) {
  throw new Error(
    "No ACCESS_CONTROL_ALLOW_ORIGIN environment variable found. Please refer to README.md for more info.",
  );
}

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.header(
    "Access-Control-Allow-Origin",
    process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
  );
  next();
};

import { NextFunction, Request, Response } from "express";

if (!process.env.NODE_ENV) {
  throw new Error(
    "No NODE_ENV environment variable found. Please refer to README.md for more info.",
  );
}

if (process.env.NODE_ENV === "production" && !process.env.URL_CLIENT) {
  throw new Error(
    "No URL_CLIENT environment variable found. Please refer to README.md for more info.",
  );
}

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const allowedOrigins: (string | undefined)[] =
    process.env.NODE_ENV === "development" ? ["*"] : [process.env.URL_CLIENT];
  const origin = req.headers.origin as string;
  if (
    (origin && allowedOrigins.includes(origin)) ||
    allowedOrigins.includes("*")
  ) {
    res.header("Access-Control-Allow-Origin", origin);
  } else {
    res.status(403).end();
  }
  next();
};

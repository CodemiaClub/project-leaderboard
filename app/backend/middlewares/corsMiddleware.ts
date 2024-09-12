import { NextFunction, Request, Response } from "express";

const ACCEPTED_ORIGINS = process.env.ACCEPTED_ORIGINS;

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const origin = req.get("host");
  if (origin && ACCEPTED_ORIGINS!.includes(origin)) {
    res.set({
      "Access-Control-Allow-Origin": `${origin}`,
      "Access-Control-Allow-Methods": "GET",
    });
    next();
  } else {
    res.status(403).json({ message: "Forbidden request: Origin not allowed" });
  }
};

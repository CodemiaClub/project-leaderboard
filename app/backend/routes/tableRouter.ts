import { NextFunction, Request, Response, Router } from "express";
import { TableController } from "../controllers/tableController";
export const tableRouter = Router();

tableRouter.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

tableRouter.get("/", TableController.getByPosition);

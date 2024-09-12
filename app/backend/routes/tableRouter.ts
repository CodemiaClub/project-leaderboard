import { Router } from "express";
import { TableController } from "../controllers/tableController";
export const tableRouter = Router();

tableRouter.get("/", TableController.getByPosition);

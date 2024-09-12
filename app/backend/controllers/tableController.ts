import { Request, Response } from "express";
import { TableModel } from "../models/tableModel";

export class TableController {
  static async getAll(req: Request, res: Response) {
    try {
      const data = await TableModel.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send("Error at fetching all data");
    }
  }
  static async getByPosition(req: Request, res: Response) {
    try {
      const data = await TableModel.getByPosition();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send("Error at fetching all data by position");
    }
  }
}

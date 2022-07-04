import { Router } from "express";

import { FinanceController } from "../controllers/FinanceController";
import { Auth } from "../middlewares/Auth";

const financeRouter = Router();

const financeController = new FinanceController();
const authMiddleware = new Auth();

financeRouter.post(
  "/create",
  (req, res, next) => authMiddleware.verifyToken(req, res, next),
  (req, res) => financeController.createFinance(req, res)
);

financeRouter.get(
  "/total",
  (req, res, next) => authMiddleware.verifyToken(req, res, next),
  (req, res) => financeController.getFinancesTotal(req, res)
);

financeRouter.get(
  "/:id",
  (req, res, next) => authMiddleware.verifyToken(req, res, next),
  (req, res) => financeController.getOneFinance(req, res)
);

financeRouter.get(
  "/",
  (req, res, next) => authMiddleware.verifyToken(req, res, next),
  (req, res) => financeController.getAllFinances(req, res)
);

export { financeRouter };

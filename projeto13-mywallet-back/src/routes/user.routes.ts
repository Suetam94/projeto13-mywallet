import { Router } from "express";

import { UserController } from "../controllers/UserController";

const userRouter = Router();
const userController = new UserController();

userRouter.get("/:id", (req, res) => userController.getUser(req, res));
userRouter.post("/create", (req, res) => userController.createUser(req, res));
userRouter.post("/login", (req, res) => userController.loginUser(req, res));

export { userRouter };

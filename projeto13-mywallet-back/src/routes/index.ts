import { Router } from "express";

import { financeRouter } from "./finance.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.use("/user", userRouter);
router.use("/finance", financeRouter);

export { router };

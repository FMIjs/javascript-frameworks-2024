import { Router } from "express";
import userRouter from "./user";

const router = Router();

router.use("/user", userRouter);
// router.use('/todos', todoRouter);
// router.use('/basic', basicTodoRouter);
// router.use('/timed', timedTodoRouter);
// router.use('/advanced', advancedTodoRouter);

export default router;

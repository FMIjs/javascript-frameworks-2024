import { Router } from "express";

import basicTodoRouter from "./basic";
import timedTodoRouter from "./basic";
import advancedTodoRouter from "./basic";
import { DB } from "./db";

const router = Router();

router.use('/basic', basicTodoRouter);
router.use('/timed', timedTodoRouter);
router.use('/advanced', advancedTodoRouter);

router.get('/', (req, res) => {
  res.json(DB.getAll()).status(200);
});


export default router;
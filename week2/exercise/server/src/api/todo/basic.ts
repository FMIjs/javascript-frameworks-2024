import { Router } from "express";
import { DB } from "./db";
import { CreateBasicTODO, EditBasicTODO } from "../../types";

const router = Router();

router.post("/", (req, res) => {
  const { description } = req.body as CreateBasicTODO;

  if (!description) {
    return res
      .status(400)
      .json({ error: "Description is required" });
  }

  const todoInput: CreateBasicTODO = {
    description: req.body.description
  };

  const todo = DB.create(todoInput);
  res.json(todo).status(201);
});

router.put("/:id", (req, res) => {
  const { description } = req.body as EditBasicTODO;
  const { id } = req.params;

  const todoInput: EditBasicTODO = { id, description };
  const todo = DB.edit(todoInput);
  res.json(todo).status(201);
});


export default router;
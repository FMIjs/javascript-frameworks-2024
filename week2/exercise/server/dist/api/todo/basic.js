"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./db");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const { description } = req.body;
    if (!description) {
        return res
            .status(400)
            .json({ error: "Description is required" });
    }
    const todoInput = {
        description: req.body.description
    };
    const todo = db_1.DB.create(todoInput);
    res.json(todo).status(201);
});
router.put("/:id", (req, res) => {
    const { description } = req.body;
    const { id } = req.params;
    const todoInput = { id, description };
    const todo = db_1.DB.edit(todoInput);
    res.json(todo).status(201);
});
exports.default = router;

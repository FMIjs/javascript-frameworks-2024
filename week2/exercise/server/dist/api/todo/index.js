"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basic_1 = __importDefault(require("./basic"));
const basic_2 = __importDefault(require("./basic"));
const basic_3 = __importDefault(require("./basic"));
const db_1 = require("./db");
const router = (0, express_1.Router)();
router.use('/basic', basic_1.default);
router.use('/timed', basic_2.default);
router.use('/advanced', basic_3.default);
router.get('/', (req, res) => {
    res.json(db_1.DB.getAll()).status(200);
});
exports.default = router;

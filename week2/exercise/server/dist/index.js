"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
const port = 8081;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use("/api", api_1.default);
app.get("/", (req, res) => {
    res.send("HELLO WORLD!");
});
app.listen(port, () => {
    console.log(`Server is listening on :${port}`);
});

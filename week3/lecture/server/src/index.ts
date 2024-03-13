import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import api from "./api";

const port = 8081;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", api);

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

app.listen(port, () => {
  console.log(`Server is listening on :${port}`);
});

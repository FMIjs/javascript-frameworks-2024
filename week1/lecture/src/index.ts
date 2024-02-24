import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD!!!");
});

console.log(123);

app.listen(8081, () => {
  console.log("Server is listening on :8080");
});

import "dotenv/config";
import express from "express";

const app = express();

if (!process.env.PORT) {
  throw new Error("Env PORT must be set");
}
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

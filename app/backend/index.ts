import "dotenv/config";
import express from "express";

const app = express();

if (!process.env.PORT) {
  throw new Error("Env PORT must be set");
}
const port = process.env.PORT;

if (!process.env.SPREADSHEETID) {
  throw new Error("Err: No spreadsheet");
}
const spreadsheetID = process.env.SPREADSHEETID;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

import "dotenv/config";
import express, { raw } from "express";
import { google } from "googleapis";
import * as path from "path";


const app = express();

if (!process.env.PORT) {
  throw new Error("Env PORT must be set");
}
const port = process.env.PORT;

if (!process.env.SPREADSHEETID) {
  throw new Error("Err: No spreadsheet");
}
const spreadsheetID = process.env.SPREADSHEETID;

const keyFilePath = path.join(__dirname, "../keys.json");

async function accessSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetID,
    range: "Totales",
  });
  return response.data.values;
}

async function getData() {
  const rawData = await accessSheet();
  const header = rawData![0];
  const rows = rawData!.slice(1);
  const formattedData = rows.map((row) => {
    return Object.fromEntries(header.map((key, index) => [key, row[index]]));
  });

  return formattedData;
}

app.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const data = await getData();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error at fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

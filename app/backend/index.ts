import "dotenv/config";
import express, { raw } from "express";
import { google } from "googleapis";
import { error } from "node:console";
import * as path from "node:path";

const app = express();

if (!process.env.PORT) {
  throw new Error("Env PORT must be set");
}
const port = process.env.PORT;

if (!process.env.SPREADSHEETID) {
  throw new Error("Err: No spreadsheet");
}

if (!process.env.GOOGLE_CREDENTIALS) {
  throw new Error("Err: No path to credentials found")
}
const spreadsheetID = process.env.SPREADSHEETID;

const keyFilePath = path.join(__dirname, process.env.GOOGLE_CREDENTIALS);

async function fetSheet() {
  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetID,
    range: "Totales!A:Z",
  });
  return response.data.values;
}

async function fetchFormattedData() {
  const rawData = await fetSheet();
  if (!Array.isArray(rawData)) {
    throw new Error("Error: La spreadsheet esta vacía");
  }
  const [header, ...rows] = rawData;
  const formattedData = rows.map((row) => {
    return Object.fromEntries(header.map((key, index) => [key, row[index]]));
  });

  return formattedData;
}

app.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    const data = await fetchFormattedData();
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

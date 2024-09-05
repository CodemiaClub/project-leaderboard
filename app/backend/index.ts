import "dotenv/config";
import express, { raw } from "express";
import { google } from 'googleapis';
import * as path from 'path';
import * as fs from 'fs';

const app = express();

if (!process.env.PORT) {
  throw new Error("Env PORT must be set");
}
const port = process.env.PORT;

if (!process.env.SPREADSHEETID) {
  throw new Error("Err: No spreadsheet");
}
const spreadsheetID = process.env.SPREADSHEETID;

const keyFilePath = path.join(__dirname,"../keys.json")


async function accessSheet(){
  try{
    const auth = new google.auth.GoogleAuth({
      keyFile:keyFilePath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    const sheets = google.sheets({version:"v4",auth})
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId:spreadsheetID,
      range:"Totales"
    })
    return response.data.values
  }catch(e){
    console.error("error: " + e)
  }
}

async function getData() {
  try {
    const rawData = await accessSheet();
    const header = rawData![0]
    const rows = rawData!.slice(1)
    const formattedData = rows.map((row) => {
      return Object.fromEntries(
        header.map((key, index) => [key, row[index]])
      );
    });

    return formattedData;
  } catch (e) {
    console.error("Error formatting data: " + e);
    throw e;
  }
}

app.get("/", async (req, res) => {
  try {
    const data = await getData()
    res.json(data)
  } catch (error) {
    res.status(500).send("Error")
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

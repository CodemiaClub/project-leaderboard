import { google } from "googleapis";

if (!process.env.SPREADSHEETID) {
  throw new Error("No SPREADSHEETID found");
}

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  throw new Error("No path to credentials found");
}
const spreadsheetID = process.env.SPREADSHEETID;

async function fetchSheet() {
  const auth = new google.auth.GoogleAuth({
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
  const rawData = await fetchSheet();
  if (!Array.isArray(rawData)) {
    throw new Error("Error: Empty spreadsheet");
  }
  const [header, ...rows] = rawData;
  const formattedData = rows.map((row) => {
    return Object.fromEntries(header.map((key, index) => [key, row[index]]));
  });

  return formattedData;
}

export class TableModel {
  static async getAll() {
    const data = await fetchFormattedData();
    return data;
  }
  static async getByPosition() {
    const data = await TableModel.getAll();
    const membersByPosition = data
      .sort((a, b) => b.Totales - a.Totales)
      .map((member, index) => ({
        position: index + 1,
        name: member.Quien,
        coins: member.Totales,
      }));

    return membersByPosition;
  }
}

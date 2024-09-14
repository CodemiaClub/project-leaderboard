import "dotenv/config";
import express, { Express } from "express";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware";
import { tableRouter } from "./routes/tableRouter";

const app: Express = express();

if (!process.env.PORT) {
  throw new Error(
    "No PORT environment variable found. Please refer to README.md for more info.",
  );
}
const port = process.env.PORT;
app.use("/table", tableRouter);
app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

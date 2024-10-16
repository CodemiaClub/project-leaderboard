import { createRoot } from "react-dom/client";
import { App } from "./components/App";

if (!process.env.NODEJS_URI) {
  throw new Error(
    "No URL environment variable found. Please refer to README.md for more info.",
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);

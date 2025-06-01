import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css";
import { theme } from "./theme.css";

import App from "@/App";

const container = document.getElementById("app")!;
container.className = theme;
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

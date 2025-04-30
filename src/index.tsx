import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css.ts";

import App from "@/App";

const container = document.getElementById("app");
createRoot(container!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/* ============================================================
 * main.tsx — Vite setup
 *
 * Imports global styles and renders the App.
 * ============================================================ */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.tsx"; //  Tailwind/global styles



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

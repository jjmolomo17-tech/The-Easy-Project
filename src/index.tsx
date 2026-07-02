/* ============================================================
 * index.tsx — Entry point
 *
 * Mounts the React app into index.html.
 * ============================================================ */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Mount the App into the root div
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

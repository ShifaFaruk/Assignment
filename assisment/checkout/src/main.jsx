import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChecklistProvider } from "./ChecklistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap App with ChecklistProvider */}
    <ChecklistProvider>
      <App />
    </ChecklistProvider>
  </React.StrictMode>
);

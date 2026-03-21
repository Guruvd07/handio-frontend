import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./context/LanguageContext";

// 🔥 Global Error Handler (VERY IMPORTANT)
window.addEventListener("error", (event) => {
  console.error("Global Error:", event.message);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled Promise Error:", event.reason);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

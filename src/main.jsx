import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback=<div>Hello, what going on</div>>
      <App />
    </Suspense>
  </StrictMode>,
);

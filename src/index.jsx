import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AboutUs } from "./screens/AboutUs";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <AboutUs />
  </StrictMode>,
);

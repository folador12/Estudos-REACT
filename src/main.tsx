import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/themes";
import { Routes } from "@/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);

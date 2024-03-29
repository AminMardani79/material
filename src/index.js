import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/css/index.css";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

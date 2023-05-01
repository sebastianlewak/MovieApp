import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme.js";
import { GlobalStyle } from "./components/GlobalStyle.jsx";
import "./config/fonts.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);

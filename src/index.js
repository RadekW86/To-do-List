import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/tasks/Tasks";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

reportWebVitals();

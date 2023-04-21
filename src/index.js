import React from "react";
import ReactDOM from "react-dom/client";
import App from "./features/tasks/Tasks";
import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

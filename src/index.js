import React from "react";
import ReactDOM from "react-dom";

import App from "./TaskApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
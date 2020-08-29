import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="parent">
      <App />
    </div>
  </React.StrictMode>,
  rootElement
);

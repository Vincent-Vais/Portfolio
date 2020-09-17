// REACT
import React from "react";
import ReactDOM from "react-dom";

// ROUTER
import { BrowserRouter } from "react-router-dom";

// COMPONENTS & STYLES
import "./index.scss";
import App from "./App.component";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

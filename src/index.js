import React from "react";
import ReactDOM from "react-dom/client";
import "./style/general.css";
import "./style/home.css";
import "./style/store.css";
import "./style/lore.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

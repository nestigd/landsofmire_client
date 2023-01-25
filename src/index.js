//modules
import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./style/general.css";
import "./style/home.css";
import "./style/game.css"
import "./style/store.css";
import "./style/lore.css";
import "./style/auth.css";

//components
import App from "./App";

//context
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

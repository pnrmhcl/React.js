import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/home/Home";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>
);

App();

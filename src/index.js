import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import scheduleSend from "./utils/controllers/schedule-cron";

scheduleSend.start();
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<App />);

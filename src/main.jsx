import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <Router>
      <Sidebar />
      <Header />
      <App />
    </Router>
  </React.StrictMode>
);

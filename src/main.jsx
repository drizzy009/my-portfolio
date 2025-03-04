import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Analytics />
      <Router>
        <Sidebar />
        <Header />
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

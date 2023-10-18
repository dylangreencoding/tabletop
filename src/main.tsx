import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./main.css";
import HomePage from "./home-page";
import { DashboardWrapper } from "./dashboard";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/dashboard" Component={DashboardWrapper} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

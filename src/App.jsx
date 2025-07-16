
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StromInitiativePage from "./pages/StromInitiativePage";
import Gewerbekunden from "./pages/Gewerbekunden";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StromInitiativePage />} />
        <Route path="/gewerbe" element={<Gewerbekunden />} />
      </Routes>
    </Router>
  );
}

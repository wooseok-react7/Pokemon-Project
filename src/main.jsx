import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import PoketmonDex from "./PoketmonDex.jsx";
import PokemonDetail from "./PokemonDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PoketmonDex" element={<PoketmonDex />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  </StrictMode>
);

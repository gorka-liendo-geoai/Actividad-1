import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Contacto from "../pages/contacto";
import Dashboard from "../pages/dashboard";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1>404 Página no encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;

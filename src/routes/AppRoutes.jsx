import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Manual from '../pages/Manual';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manual" element={<Manual />} />
      {/* Opcional: Rota 404 */}
      <Route path="*" element={<h1 className="text-center pt-32 text-4xl">404 | Página Não Encontrada</h1>} />
    </Routes>
  );
};

export default AppRoutes;
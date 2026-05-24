import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopAppBar from './components/TopAppBar';
import BottomNavBar from './components/BottomNavBar';
import Home from './pages/Home';
import Especialidades from './pages/Especialidades';
import Sobre from './pages/Sobre';
import Depoimentos from './pages/Depoimentos';
import Agendar from './pages/Agendar';
import Confirmacao from './pages/Confirmacao';

function Layout({ children }) {
  const location = useLocation();
  const isConfirmacao = location.pathname === '/confirmacao';

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background overflow-x-hidden w-full">
      <TopAppBar />
      <div className="flex-grow pt-24 pb-28 md:pb-8 w-full overflow-x-hidden">
        {children}
      </div>
      {!isConfirmacao && <BottomNavBar />}
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
        <Route path="/agendar" element={<Agendar />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
    </Layout>
  );
}

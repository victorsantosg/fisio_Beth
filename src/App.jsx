import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Especialidades from './pages/Especialidades';
import Sobre from './pages/Sobre';
import Depoimentos from './pages/Depoimentos';
import Agendar from './pages/Agendar';
import Confirmacao from './pages/Confirmacao';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background overflow-x-hidden w-full">
      <Header />
      <div className="flex-grow pt-20 w-full overflow-x-hidden">
        {children}
      </div>
      <Footer />
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

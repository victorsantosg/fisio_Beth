import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-surface-container-highest mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Purpose */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div className="flex flex-col">
              <span className="font-headline font-bold text-primary text-headline-sm">
                Elizabeth Ferreira
              </span>
              <span className="text-[10px] uppercase tracking-wider text-soft-taupe font-semibold">
                Fisioterapia Pediátrica
              </span>
            </div>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Cuidado especializado e fisioterapia motora domiciliar para bebês, focando no desenvolvimento saudável e acolhimento familiar.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-label-md font-semibold text-primary uppercase tracking-wider text-xs">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/especialidades" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                Especialidades
              </Link>
              <Link to="/depoimentos" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                Feedbacks
              </Link>
              <Link to="/sobre" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                Sobre Mim
              </Link>
              <Link to="/agendar" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">
                Agendar Consulta
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact & Area */}
          <div className="flex flex-col gap-3">
            <h4 className="text-label-md font-semibold text-primary uppercase tracking-wider text-xs">
              Contato & Visitas
            </h4>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2 text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary">chat_bubble</span>
                <a href="https://wa.me/5585999873447" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (85) 99987-3447
                </a>
              </li>
              <li className="flex items-center gap-2 text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary">mail</span>
                <a href="mailto:contato@elizabethferreira.com.br" className="hover:text-primary transition-colors">
                  contato@elizabethferreira.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-body-md text-on-surface-variant">
                <span className="material-symbols-outlined text-sm text-primary mt-1">location_on</span>
                <span>Atendimento Domiciliar<br />Fortaleza - CE e Região Metropolitana</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory Info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-label-md font-semibold text-primary uppercase tracking-wider text-xs">
              Registro Profissional
            </h4>
            <div className="bg-surface-white p-4 rounded-xl border border-surface-container-highest">
              <p className="text-caption text-on-surface-variant leading-relaxed">
                <strong>Dra. Elizabeth Ferreira</strong><br />
                Fisioterapeuta Pediátrica<br />
                CREFITO-6 / 123456-F
              </p>
              <p className="text-[10px] text-on-surface-variant/60 mt-2">
                A prática fisioterapêutica é regulamentada pelo COFFITO. Todos os atendimentos domiciliares seguem rigorosos protocolos de higiene e segurança.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-surface-container-highest/60 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-caption text-on-surface-variant/70 text-center md:text-left">
            &copy; {new Date().getFullYear()} Elizabeth Ferreira. Todos os direitos reservados.
          </span>
          <span className="text-caption text-on-surface-variant/70 text-center md:text-right">
            Desenvolvido com carinho e profissionalismo
          </span>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import bethImg from '../img/beth_img.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface-container-highest/50 transition-all duration-300">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter h-20 flex items-center justify-between">
          
          {/* Brand/Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover:scale-110 transition-transform"></div>
              <img
                alt="Elizabeth Ferreira Portrait"
                className="relative w-12 h-12 rounded-full object-cover border-2 border-primary-container z-10 transition-transform group-hover:scale-105 duration-300"
                src={bethImg}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-body-lg font-headline font-bold text-primary tracking-wide leading-tight group-hover:text-primary/80 transition-colors">
                Elizabeth Ferreira
              </span>
              <span className="text-[10px] uppercase tracking-wider text-soft-taupe font-semibold leading-none">
                Fisioterapia Pediátrica
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-body-md font-medium transition-all duration-200 relative py-1 hover:text-primary ${
                  isActive ? 'text-primary font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' : 'text-on-surface-variant'
                }`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/especialidades"
              className={({ isActive }) =>
                `text-body-md font-medium transition-all duration-200 relative py-1 hover:text-primary ${
                  isActive ? 'text-primary font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' : 'text-on-surface-variant'
                }`
              }
            >
              Especialidades
            </NavLink>
            <NavLink
              to="/depoimentos"
              className={({ isActive }) =>
                `text-body-md font-medium transition-all duration-200 relative py-1 hover:text-primary ${
                  isActive ? 'text-primary font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' : 'text-on-surface-variant'
                }`
              }
            >
              Feedbacks
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `text-body-md font-medium transition-all duration-200 relative py-1 hover:text-primary ${
                  isActive ? 'text-primary font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full' : 'text-on-surface-variant'
                }`
              }
            >
              Sobre Mim
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/agendar"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-semibold text-label-md px-6 py-2.5 rounded-full hover:bg-primary/95 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Agendar Consulta
              <span className="material-symbols-outlined text-sm">calendar_month</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 text-primary focus:outline-none z-50 rounded-lg hover:bg-primary-container/20 transition-colors"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Glassmorphism Modal) */}
      <div
        className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-surface-white/95 dark:bg-background/95 backdrop-blur-lg border-l border-surface-container-highest shadow-2xl z-[60] flex flex-col justify-between p-6 transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 mt-16 relative">
          <button
            onClick={closeMenu}
            className="absolute -top-12 right-0 p-2 text-primary focus:outline-none rounded-lg hover:bg-primary-container/20 transition-colors md:hidden"
            aria-label="Close Menu"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          
          <span className="text-xs font-semibold uppercase tracking-widest text-soft-taupe border-b border-surface-container-highest pb-2">
            Navegação
          </span>
          <nav className="flex flex-col gap-5">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-headline-md font-semibold font-headline transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/especialidades"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-headline-md font-semibold font-headline transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              Especialidades
            </NavLink>
            <NavLink
              to="/depoimentos"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-headline-md font-semibold font-headline transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              Feedbacks
            </NavLink>
            <NavLink
              to="/sobre"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-headline-md font-semibold font-headline transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              Sobre Mim
            </NavLink>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-surface-container-highest pt-6">
          <Link
            to="/agendar"
            onClick={closeMenu}
            className="w-full flex items-center justify-center gap-2 bg-[#DCAEB2] text-[#2E1317] font-bold text-label-md py-4 px-6 rounded-full shadow-md hover:brightness-95 transition-all"
          >
            Agendar Consulta
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          <div className="text-center text-[10px] text-on-surface-variant/60 font-medium">
            Atendimento Domiciliar Personalizado
          </div>
        </div>
      </div>

      {/* Backdrop overlay when mobile menu is open */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/10 backdrop-blur-xs z-[55] md:hidden"
        ></div>
      )}
    </>
  );
}

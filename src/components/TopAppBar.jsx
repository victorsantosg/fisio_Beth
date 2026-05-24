import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import bethImg from '../img/beth_img.png';

export default function TopAppBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-margin-mobile md:px-gutter h-16 bg-background/90 backdrop-blur-md shadow-sm">
      <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
        <img
          alt="Elizabeth Ferreira Portrait"
          className="w-10 h-10 rounded-full object-cover border border-primary-container"
          src={bethImg}
        />
        <span className="text-headline-md font-headline font-semibold text-primary">
          Elizabeth Ferreira
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
            }`
          }
        >
          Início
        </NavLink>
        <NavLink
          to="/especialidades"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
            }`
          }
        >
          Especialidades
        </NavLink>
        <NavLink
          to="/depoimentos"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
            }`
          }
        >
          Feedbacks
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
            }`
          }
        >
          Sobre
        </NavLink>
        <NavLink
          to="/agendar"
          className={({ isActive }) =>
            `font-medium transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'
            }`
          }
        >
          Agendar
        </NavLink>
      </nav>

      <Link
        to="/agendar"
        aria-label="Agendar Consulta"
        className="text-primary hover:opacity-80 transition-opacity scale-95 duration-150 ease-in-out p-2 rounded-full hover:bg-surface-container-low"
      >
        <span className="material-symbols-outlined">chat_bubble</span>
      </Link>
    </header>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe h-20 bg-surface-container-lowest dark:bg-surface-dim shadow-[0_-4px_24px_rgba(121,85,88,0.06)] rounded-t-xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-16 py-2 rounded-xl transition-all duration-200 ${
            isActive
              ? 'text-primary bg-primary-container/20 font-semibold scale-95'
              : 'text-secondary opacity-70 hover:bg-surface-container-high'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>home</span>
            <span className="text-caption mt-1">Início</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/especialidades"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-16 py-2 rounded-xl transition-all duration-200 ${
            isActive
              ? 'text-primary bg-primary-container/20 font-semibold scale-95'
              : 'text-secondary opacity-70 hover:bg-surface-container-high'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>medical_services</span>
            <span className="text-caption mt-1 truncate max-w-full text-center">Serviços</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/depoimentos"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-16 py-2 rounded-xl transition-all duration-200 ${
            isActive
              ? 'text-primary bg-primary-container/20 font-semibold scale-95'
              : 'text-secondary opacity-70 hover:bg-surface-container-high'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>star</span>
            <span className="text-caption mt-1">Feedbacks</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/sobre"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-16 py-2 rounded-xl transition-all duration-200 ${
            isActive
              ? 'text-primary bg-primary-container/20 font-semibold scale-95'
              : 'text-secondary opacity-70 hover:bg-surface-container-high'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>person</span>
            <span className="text-caption mt-1">Sobre</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/agendar"
        className={({ isActive }) =>
          `flex flex-col items-center justify-center w-16 py-2 rounded-xl transition-all duration-200 ${
            isActive
              ? 'text-primary bg-primary-container/20 font-semibold scale-95'
              : 'text-secondary opacity-70 hover:bg-surface-container-high'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}>calendar_month</span>
            <span className="text-caption mt-1">Agendar</span>
          </>
        )}
      </NavLink>
    </nav>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Confirmacao() {
  const location = useLocation();
  const whatsappUrl = location.state?.whatsappUrl || 'https://wa.me/5585999873447';

  return (
    <div className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center p-margin-mobile md:p-gutter selection:bg-primary-container selection:text-on-primary-container animate-[fadeIn_0.5s_ease-out]">
      <main className="w-full max-w-md flex flex-col items-center text-center">
        {/* Success Icon */}
        <div className="mb-stack-md animate-fade-in-up">
          <div className="w-24 h-24 rounded-full bg-primary-container/20 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary-container/10 rounded-full animate-ping opacity-75 duration-1000"></div>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px' }}>
              check_circle
            </span>
          </div>
        </div>

        {/* Header */}
        <h1 className="font-headline font-semibold text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm animate-fade-in-up delay-100">
          Solicitação Enviada!
        </h1>

        {/* Personalized Message */}
        <p className="text-body-md text-on-surface-variant mb-stack-lg px-4 animate-fade-in-up delay-200">
          Recebemos seus dados com sucesso. Para finalizarmos o horário e a data da consulta domiciliar com a Dra. Elizabeth, você será redirecionado para o nosso WhatsApp.
        </p>

        {/* Next Steps Card */}
        <div className="w-full bg-surface-white rounded-xl shadow-sm p-6 mb-stack-lg text-left border border-surface-container-highest animate-fade-in-up delay-300">
          <h2 className="text-label-md font-semibold text-primary mb-4 uppercase tracking-wider">
            Próximos Passos
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="material-symbols-outlined text-primary-container mr-3 mt-0.5" style={{ fontSize: '20px' }}>
                location_on
              </span>
              <span className="text-body-md text-on-surface-variant">
                Confirme sua localização para o atendimento domiciliar.
              </span>
            </li>
            <li className="flex items-start">
              <span className="material-symbols-outlined text-primary-container mr-3 mt-0.5" style={{ fontSize: '20px' }}>
                menu_book
              </span>
              <span className="text-body-md text-on-surface-variant">
                Tenha em mãos a caderneta de saúde do bebê.
              </span>
            </li>
          </ul>
        </div>

        {/* Primary CTA */}
        <div className="w-full animate-fade-in-up delay-400 flex flex-col items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-semibold text-label-md rounded-full py-4 px-6 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg shadow-sm"
          >
            <span className="material-symbols-outlined mr-2" style={{ fontSize: '20px' }}>
              chat_bubble
            </span>
            Abrir WhatsApp Agora
          </a>
          <Link
            to="/"
            className="mt-stack-sm inline-block text-body-md text-secondary hover:text-primary transition-colors duration-200"
          >
            Voltar ao Início
          </Link>
        </div>
      </main>
    </div>
  );
}

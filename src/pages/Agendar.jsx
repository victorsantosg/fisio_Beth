import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Agendar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    preocupacao: '',
    localizacao: '',
    telefone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.nome || !formData.telefone) {
      alert('Por favor, preencha pelo menos o Nome e o Telefone.');
      return;
    }

    // Format fields for WhatsApp
    const whatsappNumber = '5585999873447';
    const text = `Olá Elizabeth! Gostaria de agendar uma consulta domiciliar.

*Nome do Responsável:* ${formData.nome}
*Idade do Bebê:* ${formData.idade || 'Não informada'}
*Preocupação Clínica:* ${formData.preocupacao || 'Não informada'}
*Bairro/Localização:* ${formData.localizacao || 'Não informada'}
*Telefone/WhatsApp:* ${formData.telefone}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Redirect to confirmation page
    navigate('/confirmacao', { state: { whatsappUrl } });
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-stack-md flex flex-col md:flex-row gap-stack-lg items-start animate-[fadeIn_0.5s_ease-out]">
      {/* Left Side: Context (Visible on md+) */}
      <div className="hidden md:block w-full md:w-1/2 lg:w-5/12 sticky top-24">
        <div>
          <h2 className="text-headline-lg font-headline font-semibold text-primary mb-4">Cuidado Especializado em Casa</h2>
          <p className="text-body-lg text-on-surface-variant">
            Transformamos o ambiente familiar em um espaço de desenvolvimento e cura, oferecendo fisioterapia pediátrica de alto padrão no conforto do seu lar.
          </p>
        </div>
      </div>

      {/* Right Side: The Form */}
      <div className="w-full md:w-1/2 lg:w-7/12 max-w-lg mx-auto md:mx-0">
        <div className="mb-stack-md">
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline font-semibold text-primary mb-2">
            Agendar Consulta Domiciliar
          </h1>
          <p className="text-body-md text-on-surface-variant">
            Preencha os dados abaixo para iniciar o agendamento. Retornaremos via WhatsApp para confirmar os detalhes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-stack-sm bg-surface-white p-6 md:p-8 rounded-xl shadow-sm border border-surface-container-highest">
          {/* Nome do Responsável */}
          <div className="flex flex-col gap-1">
            <label className="text-label-md font-semibold text-on-surface-variant uppercase tracking-wide text-xs" htmlFor="nome">
              Nome do Responsável
            </label>
            <input
              required
              className="w-full bg-surface-white border border-[#E8E8E8] rounded-lg px-4 py-3 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
              id="nome"
              name="nome"
              placeholder="Seu nome completo"
              type="text"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          {/* Idade do Bebê */}
          <div className="flex flex-col gap-1">
            <label className="text-label-md font-semibold text-on-surface-variant uppercase tracking-wide text-xs" htmlFor="idade">
              Idade do Bebê
            </label>
            <input
              className="w-full bg-surface-white border border-[#E8E8E8] rounded-lg px-4 py-3 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
              id="idade"
              name="idade"
              placeholder="Ex: 8 meses"
              type="text"
              value={formData.idade}
              onChange={handleChange}
            />
          </div>

          {/* Preocupação Clínica (dropdown) */}
          <div className="flex flex-col gap-1">
            <label className="text-label-md font-semibold text-on-surface-variant uppercase tracking-wide text-xs" htmlFor="preocupacao">
              Preocupação Clínica
            </label>
            <div className="relative">
              <select
                className="w-full bg-surface-white border border-[#E8E8E8] rounded-lg px-4 py-3 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none appearance-none"
                id="preocupacao"
                name="preocupacao"
                value={formData.preocupacao}
                onChange={handleChange}
              >
                <option value="">Selecione o motivo principal</option>
                <option value="Torcicolo Congênito">Torcicolo Congênito</option>
                <option value="Assimetria Craniana">Assimetria Craniana</option>
                <option value="Atraso Motor">Atraso Motor</option>
                <option value="Outros">Outros</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="flex flex-col gap-1">
            <label className="text-label-md font-semibold text-on-surface-variant uppercase tracking-wide text-xs" htmlFor="localizacao">
              Localização (Bairro)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                <span className="material-symbols-outlined text-lg">location_on</span>
              </div>
              <input
                className="w-full bg-surface-white border border-[#E8E8E8] rounded-lg pl-10 pr-4 py-3 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
                id="localizacao"
                name="localizacao"
                placeholder="Seu bairro/cidade"
                type="text"
                value={formData.localizacao}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-1">
            <label className="text-label-md font-semibold text-on-surface-variant uppercase tracking-wide text-xs" htmlFor="telefone">
              Telefone (WhatsApp)
            </label>
            <input
              required
              className="w-full bg-surface-white border border-[#E8E8E8] rounded-lg px-4 py-3 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
              id="telefone"
              name="telefone"
              placeholder="(00) 00000-0000"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          {/* Submit Area */}
          <div className="pt-4 flex flex-col gap-3 items-center">
            <button
              type="submit"
              className="w-full bg-[#DCAEB2] text-[#2E1317] rounded-full py-4 px-6 text-label-md font-semibold flex items-center justify-center gap-2 hover:brightness-95 hover:-translate-y-0.5 transition-all shadow-md"
            >
              <span>Enviar Solicitação</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-xs text-gentle-success">mark_chat_unread</span>
              <span className="text-caption text-secondary">Será direcionado para o WhatsApp</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

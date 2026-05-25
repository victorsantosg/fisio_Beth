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
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 flex flex-col md:flex-row gap-12 items-start animate-fade-in">
      
      {/* Left Side: Context */}
      <div className="w-full md:w-5/12 sticky top-28 flex flex-col gap-6 animate-fade-in-up">
        <div>
          <span className="text-label-md font-semibold text-soft-taupe uppercase tracking-widest text-xs">Agendamento</span>
          <h2 className="text-headline-lg font-headline font-bold text-primary mt-1">Cuidado Especializado no Seu Lar</h2>
        </div>
        <p className="text-body-lg text-on-surface-variant leading-relaxed">
          Transformamos o ambiente familiar em um espaço seguro de desenvolvimento e estimulação motora, oferecendo fisioterapia pediátrica de alto padrão no conforto do seu lar.
        </p>
        <div className="bg-surface-white p-6 rounded-2xl border border-surface-container-highest flex items-start gap-4 shadow-sm">
          <span className="material-symbols-outlined text-primary text-2xl mt-1">info</span>
          <div className="flex flex-col gap-1">
            <h4 className="text-label-md font-bold text-on-surface">Importante</h4>
            <p className="text-caption text-on-surface-variant leading-relaxed">
              Após enviar este formulário, você será direcionado para o WhatsApp para confirmarmos juntos o dia e horário mais adequados para a visita.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: The Form */}
      <div className="w-full md:w-7/12 max-w-lg mx-auto md:mx-0 animate-fade-in-up delay-100">
        <div className="mb-8">
          <h1 className="text-headline-md font-headline font-bold text-on-surface mb-2">
            Iniciar Solicitação
          </h1>
          <p className="text-body-md text-on-surface-variant">
            Preencha os dados do bebê e do responsável abaixo. Retornaremos o contato em breve.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-surface-white p-8 rounded-2xl shadow-sm border border-surface-container-highest">
          {/* Nome do Responsável */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-[11px]" htmlFor="nome">
              Nome do Responsável
            </label>
            <input
              required
              className="w-full bg-surface-white border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              type="text"
              value={formData.nome}
              onChange={handleChange}
            />
          </div>

          {/* Idade do Bebê */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-[11px]" htmlFor="idade">
              Idade do Bebê
            </label>
            <input
              className="w-full bg-surface-white border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
              id="idade"
              name="idade"
              placeholder="Ex: 6 meses"
              type="text"
              value={formData.idade}
              onChange={handleChange}
            />
          </div>

          {/* Preocupação Clínica (dropdown) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-[11px]" htmlFor="preocupacao">
              Motivo do Atendimento
            </label>
            <div className="relative">
              <select
                className="w-full bg-surface-white border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none appearance-none"
                id="preocupacao"
                name="preocupacao"
                value={formData.preocupacao}
                onChange={handleChange}
              >
                <option value="">Selecione o motivo principal</option>
                <option value="Torcicolo Congênito">Torcicolo Congênito</option>
                <option value="Assimetria Craniana">Assimetria Craniana</option>
                <option value="Atraso Motor">Atraso Motor / Estimulação</option>
                <option value="Outros">Outros motivos</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-[11px]" htmlFor="localizacao">
              Bairro ou Cidade
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                <span className="material-symbols-outlined text-lg">location_on</span>
              </div>
              <input
                className="w-full bg-surface-white border border-[#E8E8E8] rounded-xl pl-12 pr-4 py-3.5 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
                id="localizacao"
                name="localizacao"
                placeholder="Ex: Aldeota, Cocó, Meireles..."
                type="text"
                value={formData.localizacao}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-label-md font-bold text-on-surface-variant uppercase tracking-wider text-[11px]" htmlFor="telefone">
              Telefone / WhatsApp
            </label>
            <input
              required
              className="w-full bg-surface-white border border-[#E8E8E8] rounded-xl px-4 py-3.5 text-body-md font-body focus:border-primary focus:ring-2 focus:ring-primary-container/30 transition-all outline-none"
              id="telefone"
              name="telefone"
              placeholder="Ex: (85) 99999-9999"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
            />
          </div>

          {/* Submit Area */}
          <div className="pt-4 flex flex-col gap-4 items-center">
            <button
              type="submit"
              className="w-full bg-[#DCAEB2] text-[#2E1317] rounded-full py-4 px-6 text-label-md font-bold flex items-center justify-center gap-2 hover:bg-[#d49ea3] hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md"
            >
              <span>Enviar Solicitação de Visita</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-xs text-gentle-success">mark_chat_unread</span>
              <span className="text-caption text-secondary font-medium">Você será direcionado para o WhatsApp</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Especialidades() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg animate-[fadeIn_0.5s_ease-out]">
      {/* Header Section */}
      <section className="text-center md:text-left flex flex-col gap-stack-sm mt-4">
        <span className="text-label-md font-semibold text-soft-taupe uppercase tracking-widest text-xs">Áreas de Atuação</span>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline font-semibold text-primary">Especialidades Clínicas</h2>
        <p className="text-body-md text-on-surface-variant max-w-2xl">
          Cuidado especializado e gentil no conforto do seu lar, focado no desenvolvimento motor e bem-estar do seu bebê.
        </p>
      </section>

      {/* Specialties Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-stack-md">
        {/* Torcicolo Congênito */}
        <article className="col-span-1 md:col-span-8 bg-surface-white rounded-xl p-stack-md ambient-shadow flex flex-col gap-stack-md border border-surface-container-highest">
          <div className="flex flex-col md:flex-row gap-stack-md items-start">
            <div className="w-16 h-16 rounded-full bg-primary-container/30 flex items-center justify-center shrink-0 text-primary">
              <span className="material-symbols-outlined text-3xl">child_care</span>
            </div>
            <div className="flex flex-col gap-stack-sm">
              <h3 className="text-headline-md font-headline font-semibold text-primary">Torcicolo Congênito</h3>
              <p className="text-body-md text-on-surface-variant">
                Tratamento especializado para assimetrias de postura no pescoço do bebê. O diagnóstico precoce e a intervenção domiciliar garantem um ambiente livre de estresse, promovendo o ganho de amplitude de movimento e força muscular de forma lúdica.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-caption text-secondary">Alongamento Suave</span>
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-caption text-secondary">Estímulo Lúdico</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-outline-variant">
            <h4 className="text-label-md font-semibold text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">settings_suggest</span> Abordagem Terapêutica
            </h4>
            <p className="text-caption text-on-surface-variant">
              Utilizamos a Terapia Manual Pediátrica para liberar tensões fasciais, aliada a estratégias de posicionamento e estimulação sensorial para incentivar a rotação ativa da cervical através do olhar e do alcance.
            </p>
          </div>
        </article>

        {/* Assimetrias Cranianas */}
        <article className="col-span-1 md:col-span-4 bg-surface-white rounded-xl p-stack-md ambient-shadow flex flex-col gap-stack-sm border border-surface-container-highest">
          <div className="w-12 h-12 rounded-full bg-tertiary-container/30 flex items-center justify-center mb-2 text-tertiary">
            <span className="material-symbols-outlined text-2xl">face</span>
          </div>
          <h3 className="text-headline-md font-headline font-semibold text-primary text-xl">Assimetrias Cranianas</h3>
          <p className="text-body-md text-on-surface-variant text-sm">
            Acompanhamento cuidadoso (Plagiocefalia, Braquicefalia) com orientações de reposicionamento e terapia manual suave para otimizar o formato craniano.
          </p>
          <div className="mt-auto pt-4 border-t border-outline-variant">
            <h4 className="text-label-md font-semibold text-tertiary mb-2">Abordagem</h4>
            <p className="text-caption text-on-surface-variant">Protocolos de <i>tummy time</i> orientado e manobras osteopáticas suaves.</p>
          </div>
        </article>

        {/* Atraso no Desenvolvimento */}
        <article className="col-span-1 md:col-span-12 bg-primary-fixed/20 rounded-xl p-stack-md ambient-shadow border border-primary-container/20">
          <div className="flex flex-col md:flex-row gap-stack-md items-center">
            <div className="flex-1 flex flex-col gap-stack-sm">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center mb-2 text-on-primary-container">
                <span className="material-symbols-outlined text-2xl">timeline</span>
              </div>
              <h3 className="text-headline-md font-headline font-semibold text-primary">Atraso no Desenvolvimento Motor</h3>
              <p className="text-body-md text-on-surface-variant">
                Avaliação e intervenção para bebês que apresentam atraso nos marcos motores (rolar, sentar, engatinhar, andar). Utilizamos brincadeiras direcionadas no ambiente familiar para estimular as vias neuromotoras.
              </p>
              <div className="mt-4 p-4 bg-surface-white/50 rounded-lg">
                <h4 className="text-label-md font-semibold text-primary mb-2">Nossa Metodologia</h4>
                <p className="text-body-md text-on-surface-variant italic font-semibold">"A casa é o melhor ginásio."</p>
                <p className="text-caption text-on-surface-variant mt-2">Adaptamos o mobiliário e os brinquedos que o bebê já conhece para facilitar transições motoras, focando no ganho de força de core e equilíbrio dinâmico.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-lg overflow-hidden shrink-0 shadow-sm border border-surface-container-highest">
              <img 
                alt="Bebê recebendo terapia motora suave" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ujHStfUJemBU8f3Ho9cDL9HnDwXfxBbtsMBKyZUqzioz24tO_QVi5KNrXYjUVG8IV7RgwvybkJ0npmajiTMnAIkJyUkSHJVDSfNYHls2XWx_fMVzhFkAxzdwlujox8c9Vd41LTVYYw7CI7paD1_Czrq3vFy7pdtup38xhUUKr5F6IvVFoG7JLsZrd-pNcAPfV7nPQCMOYQxD2XhmpibLBif8CK9pcOCz-1_rF6CiF4HxRlsgroYt6de"
              />
            </div>
          </div>
        </article>
      </section>

      {/* Common Signs Section */}
      <section className="bg-surface-container-low rounded-2xl p-stack-md md:p-stack-lg flex flex-col gap-stack-md mt-stack-lg border border-surface-container-highest">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <h2 className="text-headline-md font-headline font-semibold text-primary">Sinais de Alerta: Quando procurar ajuda?</h2>
          <p className="text-body-md text-on-surface-variant">Pequenos detalhes observados no dia a dia podem indicar a necessidade de uma avaliação precoce.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface-white p-6 rounded-xl shadow-sm border border-surface-container-highest">
            <span className="material-symbols-outlined text-primary mb-3">visibility</span>
            <h4 className="text-label-md font-semibold mb-2 text-on-surface">Preferência de Olhar</h4>
            <p className="text-caption text-on-surface-variant">O bebê olha apenas para um lado ou mantém a cabeça sempre inclinada para o mesmo ombro.</p>
          </div>
          <div className="bg-surface-white p-6 rounded-xl shadow-sm border border-surface-container-highest">
            <span className="material-symbols-outlined text-primary mb-3">pan_tool</span>
            <h4 className="text-label-md font-semibold mb-2 text-on-surface">Dificuldade com as Mãos</h4>
            <p className="text-caption text-on-surface-variant">Mantém as mãos fechadas a maior parte do tempo após os 3 meses ou usa apenas um lado para pegar objetos.</p>
          </div>
          <div className="bg-surface-white p-6 rounded-xl shadow-sm border border-surface-container-highest">
            <span className="material-symbols-outlined text-primary mb-3">directions_walk</span>
            <h4 className="text-label-md font-semibold mb-2 text-on-surface">Atraso nos Marcos</h4>
            <p className="text-caption text-on-surface-variant">Não sustenta o pescoço aos 3 meses, não senta aos 7 meses ou não engatinha aos 10 meses.</p>
          </div>
        </div>
      </section>

      {/* Materials & Preparation Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center py-stack-md mt-stack-lg">
        <div className="flex flex-col gap-stack-sm">
          <h2 className="text-headline-md font-headline font-semibold text-primary">Preparação para a Visita Domiciliar</h2>
          <p className="text-body-md text-on-surface-variant">Para que o atendimento seja o mais proveitoso possível, sugerimos preparar alguns itens simples:</p>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Um tapete de atividades ou manta confortável no chão.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Os brinquedos favoritos do seu bebê para estímulo.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Roupa confortável que permita livre movimento.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Última mamada/refeição pelo menos 30-40 min antes.</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#A68D85]/10 rounded-2xl p-stack-md border border-[#A68D85]/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#A68D85] text-white p-3 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">home_health</span>
            </div>
            <h3 className="text-headline-md font-headline font-semibold text-on-surface text-lg">Benefícios do Domicílio</h3>
          </div>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            O atendimento no lar reduz o estresse do bebê com deslocamentos e ambientes estranhos, além de permitir orientações reais sobre como usar os móveis da própria casa para o desenvolvimento.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center mt-8 mb-4">
        <Link 
          to="/agendar" 
          className="bg-primary text-on-primary px-8 py-4 rounded-full text-label-md font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          Agendar Avaliação Domiciliar
        </Link>
      </section>
    </div>
  );
}

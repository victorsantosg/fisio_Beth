import React from 'react';
import { Link } from 'react-router-dom';

export default function Especialidades() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg animate-fade-in">
      
      {/* Header Section */}
      <section className="text-center md:text-left flex flex-col gap-3 mt-8 animate-fade-in-up">
        <span className="text-label-md font-semibold text-soft-taupe uppercase tracking-widest text-xs">Áreas de Atuação</span>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline font-bold text-primary">Especialidades Clínicas</h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Cuidado especializado e gentil no conforto do seu lar, focado no desenvolvimento motor e bem-estar do seu bebê.
        </p>
      </section>

      {/* Specialties Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
        {/* Torcicolo Congênito */}
        <article className="col-span-1 md:col-span-8 bg-surface-white rounded-xl p-8 shadow-sm border border-surface-container-highest hover-premium-card flex flex-col gap-6 animate-fade-in-up delay-100">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-full bg-primary-container/30 flex items-center justify-center shrink-0 text-primary">
              <span className="material-symbols-outlined text-3xl">child_care</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-headline-md font-headline font-bold text-primary">Torcicolo Congênito</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Tratamento especializado para assimetrias de postura no pescoço do bebê. O diagnóstico precoce e a intervenção domiciliar garantem um ambiente livre de estresse, promovendo o ganho de amplitude de movimento e força muscular de forma lúdica.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-caption text-secondary font-medium">Alongamento Suave</span>
                <span className="px-3 py-1 bg-surface-container-low rounded-full text-caption text-secondary font-medium font-medium">Estímulo Lúdico</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-6 border-t border-surface-container-highest">
            <h4 className="text-label-md font-bold text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">settings_suggest</span> Abordagem Terapêutica
            </h4>
            <p className="text-caption text-on-surface-variant leading-relaxed">
              Utilizamos a Terapia Manual Pediátrica para liberar tensões fasciais, aliada a estratégias de posicionamento e estimulação sensorial para incentivar a rotação ativa da cervical através do olhar e do alcance de brinquedos.
            </p>
          </div>
        </article>

        {/* Assimetrias Cranianas */}
        <article className="col-span-1 md:col-span-4 bg-surface-white rounded-xl p-8 shadow-sm border border-surface-container-highest hover-premium-card flex flex-col gap-4 animate-fade-in-up delay-200">
          <div className="w-12 h-12 rounded-full bg-tertiary-container/30 flex items-center justify-center mb-2 text-tertiary">
            <span className="material-symbols-outlined text-2xl">face</span>
          </div>
          <h3 className="text-headline-md font-headline font-bold text-primary text-xl">Assimetrias Cranianas</h3>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Acompanhamento cuidadoso de plagiocefalia e braquicefalia posicional, combinando manobras cranianas de toque suave e orientações práticas de posicionamento no dia a dia.
          </p>
          <div className="mt-auto pt-6 border-t border-surface-container-highest">
            <h4 className="text-label-md font-bold text-tertiary mb-2">Abordagem</h4>
            <p className="text-caption text-on-surface-variant leading-relaxed">Protocolos de <i>tummy time</i> direcionado e técnicas de liberação de tensões teciduais na base do crânio.</p>
          </div>
        </article>

        {/* Atraso no Desenvolvimento */}
        <article className="col-span-1 md:col-span-12 bg-primary-fixed/5 rounded-xl p-8 border border-primary-container/20 hover-premium-card animate-fade-in-up delay-300">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">timeline</span>
              </div>
              <h3 className="text-headline-md font-headline font-bold text-primary">Atraso no Desenvolvimento Motor</h3>
              <p className="text-body-md text-on-surface-variant leading-relaxed">
                Avaliação e estimulação direcionada para bebês que apresentam lentidão para alcançar marcos motores essenciais, como rolar, sentar sem apoio, engatinhar ou dar os primeiros passos. Elaboramos planos lúdicos de estímulo integrados ao espaço da própria casa.
              </p>
              <div className="mt-2 p-6 bg-surface-white/85 rounded-xl border border-surface-container-highest shadow-xs">
                <h4 className="text-label-md font-bold text-primary mb-2">Nossa Metodologia</h4>
                <p className="text-body-md text-on-surface-variant italic font-semibold">"A sua casa é o melhor espaço de reabilitação."</p>
                <p className="text-caption text-on-surface-variant mt-2 leading-relaxed">
                  Adaptamos a disposição do mobiliário e os próprios brinquedos do bebê para incentivar o fortalecimento do core, o equilíbrio e a exploração do espaço físico de forma ativa.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-xl overflow-hidden shrink-0 shadow-sm border border-surface-container-highest">
              <img 
                alt="Bebê recebendo terapia motora suave" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ujHStfUJemBU8f3Ho9cDL9HnDwXfxBbtsMBKyZUqzioz24tO_QVi5KNrXYjUVG8IV7RgwvybkJ0npmajiTMnAIkJyUkSHJVDSfNYHls2XWx_fMVzhFkAxzdwlujox8c9Vd41LTVYYw7CI7paD1_Czrq3vFy7pdtup38xhUUKr5F6IvVFoG7JLsZrd-pNcAPfV7nPQCMOYQxD2XhmpibLBif8CK9pcOCz-1_rF6CiF4HxRlsgroYt6de"
              />
            </div>
          </div>
        </article>
      </section>

      {/* Common Signs Section */}
      <section className="bg-surface-container-low rounded-2xl p-8 md:p-12 flex flex-col gap-8 mt-16 border border-surface-container-highest animate-fade-in-up">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <h2 className="text-headline-md font-headline font-bold text-primary">Sinais de Alerta: Quando procurar avaliação?</h2>
          <p className="text-body-md text-on-surface-variant">Pequenos detalhes observados na rotina diária ajudam a identificar a necessidade de uma estimulação precoce.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-white p-6 rounded-xl shadow-sm border border-surface-container-highest hover-premium-card">
            <span className="material-symbols-outlined text-primary mb-3">visibility</span>
            <h4 className="text-label-md font-bold mb-2 text-on-surface">Preferência de Lado</h4>
            <p className="text-caption text-on-surface-variant leading-relaxed">O bebê vira ou dorme com a cabeça sempre virada para o mesmo lado, ou tem dificuldade para olhar na outra direção.</p>
          </div>
          <div className="bg-surface-white p-6 rounded-xl shadow-sm border border-surface-container-highest hover-premium-card">
            <span className="material-symbols-outlined text-primary mb-3">pan_tool</span>
            <h4 className="text-label-md font-bold mb-2 text-on-surface">Uso Assimétrico das Mãos</h4>
            <p className="text-caption text-on-surface-variant leading-relaxed">Usa apenas um lado do corpo para alcançar brinquedos após os 4-5 meses, ou mantém a mão sempre fechada em punho.</p>
          </div>
          <div className="bg-surface-white p-6 rounded-xl shadow-sm border border-surface-container-highest hover-premium-card">
            <span className="material-symbols-outlined text-primary mb-3">directions_walk</span>
            <h4 className="text-label-md font-bold mb-2 text-on-surface">Atraso nos Marcos Motores</h4>
            <p className="text-caption text-on-surface-variant leading-relaxed">Não sustenta o pescoço aos 3-4 meses, não rola aos 6 meses, não senta aos 8 meses ou não apoia o pé aos 10 meses.</p>
          </div>
        </div>
      </section>

      {/* Materials & Preparation Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16 animate-fade-in-up">
        <div className="flex flex-col gap-4">
          <h2 className="text-headline-md font-headline font-bold text-primary">Preparação para a Visita Domiciliar</h2>
          <p className="text-body-md text-on-surface-variant">Para que o atendimento flua de maneira tranquila e proveitosa para o bebê, sugerimos organizar:</p>
          <ul className="flex flex-col gap-3 mt-2">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success text-lg mt-0.5">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Uma manta macia ou tapete emborrachado colocado no chão.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success text-lg mt-0.5">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Dois ou três brinquedos sonoros ou visuais que o bebê goste muito.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success text-lg mt-0.5">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Roupinha confortável que facilite os movimentos livres das perninhas e braços.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-gentle-success text-lg mt-0.5">check_circle</span>
              <span className="text-body-md text-on-surface-variant">Tentar alimentar o bebê pelo menos 30 a 45 minutos antes da sessão.</span>
            </li>
          </ul>
        </div>
        <div className="bg-[#A68D85]/10 rounded-2xl p-8 border border-[#A68D85]/20 hover-premium-card">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#A68D85] text-white p-3 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">home_health</span>
            </div>
            <h3 className="text-headline-md font-headline font-bold text-on-surface text-lg">Praticidade no Dia a Dia</h3>
          </div>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Eliminamos a necessidade de arrumar bolsas pesadas, enfrentar trânsito e expor o bebê a salas de espera. O tratamento acontece na segurança e privacidade da sua casa, respeitando os horários de sono e rotina da família.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center mt-12 mb-4 animate-fade-in-up">
        <Link 
          to="/agendar" 
          className="bg-primary text-on-primary px-8 py-4 rounded-full text-label-md font-bold hover:bg-primary/95 transition-colors shadow-lg flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          Agendar Avaliação Domiciliar
        </Link>
      </section>
    </div>
  );
}

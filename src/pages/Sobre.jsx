import React from 'react';
import { Link } from 'react-router-dom';
import bethImg2 from '../img/beth_img2.png';

export default function Sobre() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg animate-fade-in">
      
      {/* Hero Profile Section */}
      <section className="flex flex-col items-center text-center mb-16 mt-8 animate-fade-in-up">
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-primary-container rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <img
            alt="Elizabeth Ferreira Portrait"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-surface-white ambient-shadow z-10 transition-transform duration-500 group-hover:scale-105"
            src={bethImg2}
          />
        </div>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline font-bold text-primary mb-2">
          Elizabeth Ferreira
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Fisioterapeuta dedicada ao desenvolvimento motor de bebês, unindo ciência, carinho e acolhimento no ambiente mais seguro para a criança: o seu próprio lar.
        </p>
      </section>

      {/* Mission Statement (Glassmorphism Bento) */}
      <section className="mb-16 animate-fade-in-up delay-100">
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden shadow-sm border border-surface-container-highest">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
              <span className="material-symbols-outlined text-3xl fill">favorite</span>
            </div>
            <div>
              <h3 className="text-headline-md font-headline font-bold text-on-surface mb-2">Minha Missão</h3>
              <p className="text-body-lg text-on-surface-variant italic font-medium leading-relaxed">
                "Promover a independência motora e o desenvolvimento saudável dos bebês por meio de uma abordagem terapêutica científica, respeitando o tempo de cada criança e dando suporte integral às famílias."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values Section */}
      <section className="mb-16 animate-fade-in-up delay-200">
        <h3 className="text-headline-md font-headline font-bold text-on-surface mb-8 text-center md:text-left">
          Valores Profissionais
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest hover-premium-card">
            <div className="text-primary w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined text-2xl">diversity_1</span></div>
            <h4 className="text-label-md font-bold text-on-surface mb-2">Humanização</h4>
            <p className="text-body-md text-on-surface-variant leading-relaxed">Olhar para cada bebê e família como seres uniques, adaptando as estratégias de estímulo à rotina natural da casa.</p>
          </div>
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest hover-premium-card">
            <div className="text-primary w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined text-2xl">science</span></div>
            <h4 className="text-label-md font-bold text-on-surface mb-2">Ciência</h4>
            <p className="text-body-md text-on-surface-variant leading-relaxed">Prática clínica baseada em evidências científicas sólidas e atualizações internacionais contínuas.</p>
          </div>
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest hover-premium-card">
            <div className="text-primary w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"><span className="material-symbols-outlined text-2xl">volunteer_activism</span></div>
            <h4 className="text-label-md font-bold text-on-surface mb-2">Empatia</h4>
            <p className="text-body-md text-on-surface-variant leading-relaxed">Escuta ativa dos pais para sanar dúvidas e diminuir a ansiedade natural relacionada ao desenvolvimento infantil.</p>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="mb-16 animate-fade-in-up delay-300">
        <h3 className="text-headline-md font-headline font-bold text-on-surface mb-8 text-center md:text-left">
          Formação de Destaque
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-white rounded-xl p-6 shadow-sm hover-premium-card border border-surface-container-highest flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">child_care</span>
            </div>
            <div>
              <h4 className="text-label-md font-bold text-on-surface mb-1">Especialista Pediátrica</h4>
              <p className="text-caption text-on-surface-variant">Foco exclusivo em reabilitação infantil.</p>
            </div>
          </div>
          <div className="bg-surface-white rounded-xl p-6 shadow-sm hover-premium-card border border-surface-container-highest flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div>
              <h4 className="text-label-md font-bold text-on-surface mb-1">Terapia Manual</h4>
              <p className="text-caption text-on-surface-variant">Certificações e cursos internacionais.</p>
            </div>
          </div>
          <div className="bg-surface-white rounded-xl p-6 shadow-sm hover-premium-card border border-surface-container-highest flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div>
              <h4 className="text-label-md font-bold text-on-surface mb-1">Foco Clínico</h4>
              <p className="text-caption text-on-surface-variant">Torcicolo postural e formato craniano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace & Tools Gallery */}
      <section className="mb-16 animate-fade-in-up delay-400">
        <h3 className="text-headline-md font-headline font-bold text-on-surface mb-2 text-center md:text-left">
          Recursos Terapêuticos Domiciliares
        </h3>
        <p className="text-body-md text-on-surface-variant mb-8 text-center md:text-left">
          Todo o material necessário para criar um "ginásio de estímulo" seguro e lúdico na sala do seu lar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="hover-premium-card bg-surface-white p-4 rounded-2xl border border-surface-container-highest">
            <div className="aspect-square rounded-xl overflow-hidden mb-3">
              <img alt="Mats and Rollers" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW0LI98yfV3LG2pTC6K7ZN_o5RdSygg0fTJ8jnP_BP7hjCZ-dck-b_y1XZ54ji1qBM5DyCRPS2-UHcMeGs-pUrbU1Ds1ZWOT5yuv7Z1quXJ4XOtKiNDi0OKoHqluwT6g8r2kH3WO9mJflg5Q6LiQAq9Wii_QyJbRMPaAnIbEYyT7CtOeqY0dxs745ISi5PcFFqjrsvfhonEoaz3tGQVXWzhPqpkrr0JECf0a8rjGBm5uz9LeRt0R3iIHjvBoIWhtUuvzHuJbAo" />
            </div>
            <h4 className="text-label-md font-bold text-on-surface">Tapetes & Rolo Terapêutico</h4>
            <p className="text-caption text-on-surface-variant mt-1">Materiais laváveis e higienizados a cada visita.</p>
          </div>
          <div className="hover-premium-card bg-surface-white p-4 rounded-2xl border border-surface-container-highest">
            <div className="aspect-square rounded-xl overflow-hidden mb-3">
              <img alt="Educational Toys" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEV9QwKStk5gxRjmtsB3qofW4fXTnexLPnBwc2XA7sQ2x0Mka13oF-MGDfNu2hBXREPwLFQ1u5C0y021gyhVlHIcM26BhYxen3yvP5B0NHAvGvoUmfGVf0BDA76SGs62S026LIMDUlpKdntEZ4WioeIj22uisI7duQ6qglfYhssaeTVPd6j76m6PXqnwGmOOb8xnRq-HWtniOFvQcZUcSS53edS-lxewOLsz6JlL_unatKpA7r6BbzheRkCskGRhAD2Kp9xwzL" />
            </div>
            <h4 className="text-label-md font-bold text-on-surface">Brinquedos de Estímulo Lúdico</h4>
            <p className="text-caption text-on-surface-variant mt-1">Recursos selecionados para motivar transições motoras.</p>
          </div>
          <div className="hover-premium-card bg-surface-white p-4 rounded-2xl border border-surface-container-highest">
            <div className="aspect-square rounded-xl overflow-hidden mb-3">
              <img alt="Sensory Tools" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkqxgJpodc08wfqZofxcXz892a7bd8oc9DYfCoQJwOg6itkpnFcTQfOdOdUKNGLqq0wZizzsp9XtHnqSENb0xdtTrB_SFhLVRKM2EWSLXArJ62FYoR_poj16RLNarYjTVLAcvivnoZ6FYlpko6_MPWwXwednK_UowLueaZoar858DDTDDU4tf7XNoTd4_KugAoa_H0lZs3MvRkpPkJROUeyiEF0Cku4EdCM1nVLByylZi_HQjBXeqGxj2Vdtc_Zn0KN7ixaw4t" />
            </div>
            <h4 className="text-label-md font-bold text-on-surface">Kits Sensoriais Específicos</h4>
            <p className="text-caption text-on-surface-variant mt-1">Estimulação tátil e visual para bebês jovens.</p>
          </div>
        </div>
      </section>

      {/* Certifications & Continuous Education */}
      <section className="mb-16 animate-fade-in-up">
        <h3 className="text-headline-md font-headline font-bold text-on-surface mb-8 text-center md:text-left">
          Certificações & Atualizações
        </h3>
        <div className="bg-surface-white rounded-2xl p-6 md:p-8 border border-surface-container-highest shadow-sm">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <div>
                <span className="text-label-md block text-on-surface font-bold">Método Bobath Pediátrico Avançado</span>
                <span className="text-body-md text-on-surface-variant mt-1 block">Certificação Internacional especializada em facilitação neuromuscular infantil (2023).</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <div>
                <span className="text-label-md block text-on-surface font-bold">Formação em Osteopatia e Terapia Manual Craniana Pediátrica</span>
                <span className="text-body-md text-on-surface-variant mt-1 block">Abordagem suave e não invasiva focada na correção de assimetrias cranianas posicionais (2024).</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <div>
                <span className="text-label-md block text-on-surface font-bold">Atualização em Intervenção Precoce no Atraso Motor</span>
                <span className="text-body-md text-on-surface-variant mt-1 block">Capacitação clínica focada em protocolos baseados em neurociências aplicadas.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Personal Touch Story */}
      <section className="mb-16 animate-fade-in-up">
        <div className="bg-surface-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center border border-surface-container-highest shadow-sm">
          <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden shadow-md border border-surface-container-highest">
            <img
              alt="Atendimento Domiciliar de Fisioterapia"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFbweH844tlNKPCqvtTMwonriWG3oW1Anevja0KLZRNgrWxzNvm6RtiTOOpiUNwDFabmuUtnxf3jI2-O4_bkBiT1kvzUiZl2yY2wLfPSx38Iul2drtkspOoHE_3pkpjbhIxU9CttNMRrKPgWGrMtmykpUYh7QoEJyHOWQydsuyVQNF7UqpjUzyaQdVj50LY2vmCOQcuutFGfmIiIkiBV0AeVPIsYDTWUtlMzbNYF42pJ7qr1vlzCVlg2TRpYJn6_UnJjskmtEy"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-headline-md font-headline font-bold text-primary mb-4">A Essência do Cuidado no Lar</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Minha paixão por trabalhar no ambiente domiciliar vem da observação de como os bebês respondem melhor aos estímulos quando estão cercados de seus brinquedos, de seus cheiros e de seus cuidadores.
            </p>
            <p className="text-body-md text-on-surface-variant leading-relaxed mt-4">
              Cada sessão é planejada para ser leve. A fisioterapia deixa de ser uma obrigação clínica cansativa e passa a ser integrada a brincadeiras inteligentes, promovendo o ganho de força e mobilidade de forma natural.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-8 flex justify-center animate-fade-in-up">
        <Link
          to="/agendar"
          className="bg-primary text-on-primary font-bold text-label-md py-4 px-8 rounded-full shadow-lg hover:bg-primary/95 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        >
          <span className="material-symbols-outlined">event_available</span>
          Agendar Consulta Domiciliar
        </Link>
      </section>
    </div>
  );
}

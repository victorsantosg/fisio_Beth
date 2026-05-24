import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg animate-[fadeIn_0.5s_ease-out]">
      {/* Hero Profile Section */}
      <section className="flex flex-col items-center text-center mb-stack-lg mt-4">
        <div className="relative mb-stack-sm group">
          <div className="absolute inset-0 bg-primary-container rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
          <img
            alt="Elizabeth Ferreira Portrait"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-surface-white ambient-shadow z-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5KiLWS1qwm10uYYXwaIruS8dsPWe-3nGxHXcLWO2zXHCQ4lNHAcDopw8Kj6gDLA_SncvzuZP7FCdPJuRmV8Nq2kNThuvZFbqCpjARBTSxT7-8Xv_-gSadQQ9BUQFBqr8bBZJpz7vFFPKH2Rp6NaAUfyVPn6x3VSjIw_15AWTC2WPwNVST8wFYVI0bh13CCdULqal3-Ev5m-_Tx-KPqsEHZzb39k01XeqgbDngco-o0sEWay9tfC9jlRxXv-23qkxyFyyN8md3"
          />
        </div>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline font-semibold text-on-surface mb-2">
          Elizabeth Ferreira
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          Fisioterapeuta de bebês dedicada a transformar o desenvolvimento motor com técnica, ciência e acolhimento.
        </p>
      </section>

      {/* Mission Statement (Glassmorphism Bento) */}
      <section className="mb-stack-lg">
        <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-sm border border-surface-container-highest">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 fill">favorite</span>
            <h3 className="text-headline-md font-headline font-semibold text-on-surface mb-3">Minha Missão</h3>
            <p className="text-body-lg text-on-surface-variant italic font-medium">
              "Transformar o desenvolvimento motor dos bebês com técnica, ciência e, acima de tudo, acolhimento familiar."
            </p>
          </div>
        </div>
      </section>

      {/* Professional Values Section */}
      <section className="mb-stack-lg">
        <h3 className="text-headline-md font-headline font-semibold text-on-surface mb-stack-sm">Valores Profissionais</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest">
            <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl">diversity_1</span></div>
            <h4 className="text-label-md font-semibold text-on-surface mb-2">Humanização</h4>
            <p className="text-body-md text-on-surface-variant">Olhar para cada bebê e família como seres únicos, respeitando seu tempo e individualidade no ambiente doméstico.</p>
          </div>
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest">
            <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl">science</span></div>
            <h4 className="text-label-md font-semibold text-on-surface mb-2">Ciência</h4>
            <p className="text-body-md text-on-surface-variant">Prática baseada em evidências científicas atualizadas, garantindo os melhores resultados terapêuticos e segurança.</p>
          </div>
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest">
            <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl">volunteer_activism</span></div>
            <h4 className="text-label-md font-semibold text-on-surface mb-2">Empatia</h4>
            <p className="text-body-md text-on-surface-variant">Escuta ativa e acolhimento emocional para apoiar os pais nos desafios do desenvolvimento motor infantil.</p>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="mb-stack-lg">
        <h3 className="text-headline-md font-headline font-semibold text-on-surface mb-stack-sm">Especialidades & Formação</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Credential 1 */}
          <div className="bg-surface-white rounded-xl p-5 shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-surface-container-highest">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined">child_care</span>
            </div>
            <h4 className="text-label-md font-semibold text-on-surface mb-1">Fisioterapeuta Pediátrica</h4>
            <p className="text-caption text-on-surface-variant">Foco exclusivo no desenvolvimento motor infantil.</p>
          </div>
          {/* Credential 2 */}
          <div className="bg-surface-white rounded-xl p-5 shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-surface-container-highest">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined">public</span>
            </div>
            <h4 className="text-label-md font-semibold text-on-surface mb-1">Formação Internacional</h4>
            <p className="text-caption text-on-surface-variant">Especialização em Terapia Manual com certificação global.</p>
          </div>
          {/* Credential 3 */}
          <div className="bg-surface-white rounded-xl p-5 shadow-sm hover:-translate-y-1 transition-transform duration-300 border border-surface-container-highest">
            <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center mb-4 text-primary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h4 className="text-label-md font-semibold text-on-surface mb-1">Especialista Clínica</h4>
            <p className="text-caption text-on-surface-variant">Torcicolo Congênito e Assimetrias Cranianas.</p>
          </div>
        </div>
      </section>

      {/* Workspace & Tools Gallery */}
      <section className="mb-stack-lg overflow-hidden">
        <h3 className="text-headline-md font-headline font-semibold text-on-surface mb-stack-sm">Meu Espaço de Atendimento</h3>
        <p className="text-body-md text-on-surface-variant mb-6">Equipamentos selecionados para levar a clínica até o conforto do seu lar.</p>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
          <div className="min-w-[280px] snap-start">
            <div className="aspect-square rounded-2xl overflow-hidden mb-3">
              <img alt="Mats and Rollers" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW0LI98yfV3LG2pTC6K7ZN_o5RdSygg0fTJ8jnP_BP7hjCZ-dck-b_y1XZ54ji1qBM5DyCRPS2-UHcMeGs-pUrbU1Ds1ZWOT5yuv7Z1quXJ4XOtKiNDi0OKoHqluwT6g8r2kH3WO9mJflg5Q6LiQAq9Wii_QyJbRMPaAnIbEYyT7CtOeqY0dxs745ISi5PcFFqjrsvfhonEoaz3tGQVXWzhPqpkrr0JECf0a8rjGBm5uz9LeRt0R3iIHjvBoIWhtUuvzHuJbAo" />
            </div>
            <h4 className="text-label-md text-on-surface">Tapetes Terapêuticos</h4>
            <p className="text-caption text-on-surface-variant">Superfícies seguras e higienizadas.</p>
          </div>
          <div className="min-w-[280px] snap-start">
            <div className="aspect-square rounded-2xl overflow-hidden mb-3">
              <img alt="Educational Toys" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEV9QwKStk5gxRjmtsB3qofW4fXTnexLPnBwc2XA7sQ2x0Mka13oF-MGDfNu2hBXREPwLFQ1u5C0y021gyhVlHIcM26BhYxen3yvP5B0NHAvGvoUmfGVf0BDA76SGs62S026LIMDUlpKdntEZ4WioeIj22uisI7duQ6qglfYhssaeTVPd6j76m6PXqnwGmOOb8xnRq-HWtniOFvQcZUcSS53edS-lxewOLsz6JlL_unatKpA7r6BbzheRkCskGRhAD2Kp9xwzL" />
            </div>
            <h4 className="text-label-md text-on-surface">Brinquedos Educativos</h4>
            <p className="text-caption text-on-surface-variant">Estímulo lúdico com propósito.</p>
          </div>
          <div className="min-w-[280px] snap-start">
            <div className="aspect-square rounded-2xl overflow-hidden mb-3">
              <img alt="Sensory Tools" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkqxgJpodc08wfqZofxcXz892a7bd8oc9DYfCoQJwOg6itkpnFcTQfOdOdUKNGLqq0wZizzsp9XtHnqSENb0xdtTrB_SFhLVRKM2EWSLXArJ62FYoR_poj16RLNarYjTVLAcvivnoZ6FYlpko6_MPWwXwednK_UowLueaZoar858DDTDDU4tf7XNoTd4_KugAoa_H0lZs3MvRkpPkJROUeyiEF0Cku4EdCM1nVLByylZi_HQjBXeqGxj2Vdtc_Zn0KN7ixaw4t" />
            </div>
            <h4 className="text-label-md text-on-surface">Kits Sensoriais</h4>
            <p className="text-caption text-on-surface-variant">Recursos para integração sensorial.</p>
          </div>
        </div>
      </section>

      {/* Certifications & Continuous Education */}
      <section className="mb-stack-lg">
        <h3 className="text-headline-md font-headline font-semibold text-on-surface mb-stack-sm">Certificações & Atualização</h3>
        <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 border border-surface-container-highest">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">verified</span>
              <div>
                <span className="text-label-md block text-on-surface font-semibold">Método Bobath Pediátrico Avançado</span>
                <span className="text-caption text-on-surface-variant">Certificação Internacional - 2023</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">verified</span>
              <div>
                <span className="text-label-md block text-on-surface font-semibold">Atualização em Osteopatia Pediátrica</span>
                <span className="text-caption text-on-surface-variant">Instituto de Saúde Integral - 2024</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-1">verified</span>
              <div>
                <span className="text-label-md block text-on-surface font-semibold">Manejo Clínico de Assimetrias Cranianas</span>
                <span className="text-caption text-on-surface-variant">Simpósio Brasileiro de Fisioterapia Pediátrica</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Personal Touch Story */}
      <section className="mb-stack-lg">
        <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-surface-container-highest">
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-xl overflow-hidden shadow-md">
              <img
                alt="Atendimento Domiciliar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFbweH844tlNKPCqvtTMwonriWG3oW1Anevja0KLZRNgrWxzNvm6RtiTOOpiUNwDFabmuUtnxf3jI2-O4_bkBiT1kvzUiZl2yY2wLfPSx38Iul2drtkspOoHE_3pkpjbhIxU9CttNMRrKPgWGrMtmykpUYh7QoEJyHOWQydsuyVQNF7UqpjUzyaQdVj50LY2vmCOQcuutFGfmIiIkiBV0AeVPIsYDTWUtlMzbNYF42pJ7qr1vlzCVlg2TRpYJn6_UnJjskmtEy"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-headline-md font-headline font-semibold text-on-surface mb-3">A Essência do Cuidado em Casa</h3>
            <p className="text-body-md text-on-surface-variant">
              Acredito que o ambiente familiar é o melhor cenário para o desenvolvimento de um bebê. Minha jornada na fisioterapia pediátrica nasceu da paixão por proporcionar um cuidado altamente técnico, mas que não abre mão da ternura e da segurança que apenas o lar pode oferecer.
            </p>
            <p className="text-body-md text-on-surface-variant mt-3">
              Cada sessão é desenhada para ser um momento de conexão, reduzindo a ansiedade clínica e transformando exercícios terapêuticos em brincadeiras com propósito.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mb-stack-lg flex justify-center">
        <Link
          to="/agendar"
          className="bg-primary text-on-primary font-semibold text-label-md py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
        >
          <span className="material-symbols-outlined">event_available</span>
          Agendar Consulta Domiciliar
        </Link>
      </section>
    </div>
  );
}

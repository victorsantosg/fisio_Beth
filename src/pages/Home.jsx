import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg animate-fade-in">
      
      {/* Hero Section - Split Screen layout on desktop */}
      <section className="mt-6 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/20 text-[#634044] rounded-full text-xs font-semibold uppercase tracking-wider">
            ✨ Atendimento Domiciliar Especializado
          </div>
          
          <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline font-bold text-on-background leading-tight">
            Transformando o desenvolvimento motor do seu bebê no conforto do seu lar
          </h1>
          
          <p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
            Fisioterapia Pediátrica de Excelência com acolhimento familiar. Soluções especializadas para Torcicolo Congênito, Assimetrias Cranianas e Atrasos do Desenvolvimento Motor.
          </p>
          
          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2">
            <Link 
              to="/agendar" 
              className="inline-flex justify-center bg-[#DCAEB2] text-[#2E1317] font-bold text-label-md px-8 py-4 rounded-full hover:bg-[#d49ea3] hover:-translate-y-0.5 transition-all shadow-md items-center gap-2"
            >
              Agendar Consulta Domiciliar
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
            <Link 
              to="/especialidades" 
              className="inline-flex justify-center bg-surface-white text-primary border border-primary-container/40 font-bold text-label-md px-6 py-4 rounded-full hover:bg-surface-container-low transition-all items-center gap-2"
            >
              Ver Especialidades
            </Link>
          </div>

          {/* Social Proof Badges */}
          <div className="flex items-center gap-4 mt-4 border-t border-surface-container-highest/60 pt-4 w-full">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm fill">star</span>
              ))}
            </div>
            <span className="text-caption text-on-surface-variant font-medium">
              Avaliação de 5.0 no Google por mais de 100 famílias
            </span>
          </div>
        </div>

        {/* Right Image/Graphic Column */}
        <div className="lg:col-span-5 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-lg border border-surface-container-highest animate-fade-in-up delay-100">
          <img 
            alt="Dra. Elizabeth realizando fisioterapia pediátrica" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJGKZz5THwRZLJdZCNb1TMcPQTbk-pVUd7fbHGId35sqISGiVf2d9K4NdQR5L3dzjjox8vU3SmTigxqbK_yF1dWO9yAMXYE3eu_sRxxAzpawmhHQ73qOumkteyp0MIC8YqAB5dVQYI7r4zeEvN66vNVahKgR63AsN4W0sfrQ5u8K5Wp1a_MPfMjA3YyWp6srmBNPAc3bqjb0P_lYqPowS3DOFUw12xVX6ZtqunAcMH8QQBu65yuLQr7hfeuht26E7pfJhU3CyY'"
          />
          {/* Ambient Overlay to blend text with background */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Floating interactive card inside the image (Micro-animation float) */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/20 animate-float">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">home_health</span>
              <div>
                <h4 className="text-caption font-bold text-on-surface">Atendimento 100% Seguro</h4>
                <p className="text-[10px] text-on-surface-variant">Protocolos rígidos de biossegurança no seu lar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Stats Bar */}
      <section className="mt-16 bg-surface-white border border-surface-container-highest rounded-2xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-surface-container-highest animate-fade-in-up delay-200">
        <div className="flex flex-col gap-1 py-4 md:py-0">
          <span className="text-headline-md font-headline font-bold text-primary">+500</span>
          <span className="text-body-md font-semibold text-on-surface">Famílias Satisfeitas</span>
          <span className="text-caption text-on-surface-variant">Acompanhadas no conforto de suas casas</span>
        </div>
        <div className="flex flex-col gap-1 py-4 md:py-0 md:px-4">
          <span className="text-headline-md font-headline font-bold text-primary">Terapia Manual</span>
          <span className="text-body-md font-semibold text-on-surface">Formação Internacional</span>
          <span className="text-caption text-on-surface-variant">Técnicas atualizadas baseadas em ciência</span>
        </div>
        <div className="flex flex-col gap-1 py-4 md:py-0 md:pl-4">
          <span className="text-headline-md font-headline font-bold text-primary">Personalizado</span>
          <span className="text-body-md font-semibold text-on-surface">Uso dos brinquedos do bebê</span>
          <span className="text-caption text-on-surface-variant">Estímulo no próprio ambiente da criança</span>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="mt-20 animate-fade-in-up delay-300">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <span className="text-label-md font-semibold text-soft-taupe uppercase tracking-widest text-xs">O que tratamos</span>
            <h2 className="text-headline-md font-headline font-bold text-on-surface mt-1">Especialidades em Fisioterapia</h2>
          </div>
          <Link to="/especialidades" className="text-primary font-bold text-label-md hover:text-primary-container transition-colors inline-flex items-center gap-1 group">
            Ver todas as especialidades
            <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest hover-premium-card flex flex-col items-start">
            <div className="w-12 h-12 bg-[#DCAEB2]/30 rounded-full flex items-center justify-center mb-4 text-[#795558] shrink-0">
              <span className="material-symbols-outlined text-2xl">accessibility_new</span>
            </div>
            <h3 className="text-body-lg font-headline font-bold text-on-surface mb-2">Torcicolo Congênito</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
              Alongamento e fortalecimento suave para bebês com preferência postural de pescoço, promovendo movimentação livre e simétrica.
            </p>
            <Link to="/especialidades" className="text-primary font-semibold text-caption mt-auto hover:underline inline-flex items-center gap-1">
              Saiba mais <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest hover-premium-card flex flex-col items-start">
            <div className="w-12 h-12 bg-[#DCAEB2]/30 rounded-full flex items-center justify-center mb-4 text-[#795558] shrink-0">
              <span className="material-symbols-outlined text-2xl">face</span>
            </div>
            <h3 className="text-body-lg font-headline font-bold text-on-surface mb-2">Assimetrias Cranianas</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
              Avaliação e tratamento de plagiocefalia e braquicefalia posicional através de reposicionamento e terapia craniana leve.
            </p>
            <Link to="/especialidades" className="text-primary font-semibold text-caption mt-auto hover:underline inline-flex items-center gap-1">
              Saiba mais <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-white rounded-xl p-6 shadow-sm border border-surface-container-highest hover-premium-card flex flex-col items-start">
            <div className="w-12 h-12 bg-[#DCAEB2]/30 rounded-full flex items-center justify-center mb-4 text-[#795558] shrink-0">
              <span className="material-symbols-outlined text-2xl">child_care</span>
            </div>
            <h3 className="text-body-lg font-headline font-bold text-on-surface mb-2">Atraso do Desenvolvimento</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed mb-4">
              Estímulo focado e orientação aos pais para auxiliar o bebê a atingir marcos motores como rolar, sentar, engatinhar e andar.
            </p>
            <Link to="/especialidades" className="text-primary font-semibold text-caption mt-auto hover:underline inline-flex items-center gap-1">
              Saiba mais <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Home Care Section */}
      <section className="mt-20 py-8 border-t border-surface-container-highest/60 animate-fade-in-up delay-400">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-label-md font-semibold text-soft-taupe uppercase tracking-widest text-xs">Praticidade e Segurança</span>
          <h2 className="text-headline-md font-headline font-bold text-on-surface mt-1">Por que escolher o atendimento em casa?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3 group hover-premium-card bg-surface-white p-6 rounded-2xl border border-surface-container-highest/50">
            <div className="text-primary w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-2xl">home_heart</span>
            </div>
            <h3 className="text-body-lg font-headline font-bold text-on-surface">Conforto Familiar</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">Seu bebê fica muito mais calmo e receptivo aos exercícios em seu próprio ambiente e rotina.</p>
          </div>
          <div className="flex flex-col gap-3 group hover-premium-card bg-surface-white p-6 rounded-2xl border border-surface-container-highest/50">
            <div className="text-primary w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-2xl">nature</span>
            </div>
            <h3 className="text-body-lg font-headline font-bold text-on-surface">Ambiente de Uso Real</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">Trabalhamos utilizando os brinquedos e móveis que a criança já usa no dia a dia, acelerando o aprendizado motor.</p>
          </div>
          <div className="flex flex-col gap-3 group hover-premium-card bg-surface-white p-6 rounded-2xl border border-surface-container-highest/50">
            <div className="text-primary w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
            </div>
            <h3 className="text-body-lg font-headline font-bold text-on-surface">Sem Deslocamento</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">Menos estresse com trânsito, salas de espera barulhentas e riscos de exposição a vírus e bactérias de consultório.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Quote Section */}
      <section className="mt-20">
        <div className="bg-[#A68D85]/10 rounded-2xl p-8 md:p-12 shadow-sm border border-[#A68D85]/20 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DCAEB2]/10 rounded-full blur-3xl -z-10"></div>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <span className="material-symbols-outlined text-primary text-5xl fill">
              format_quote
            </span>
            <blockquote className="text-body-lg text-on-surface font-headline font-semibold italic leading-relaxed">
              "O atendimento da Dra. Elizabeth foi um divisor de águas na nossa vida. O fato de ser em casa acalmou meu filho, e com poucas sessões ele conseguiu rolar e sentar de forma segura. A dedicação e carinho dela são incomparáveis!"
            </blockquote>
            <div className="flex flex-col">
              <span className="font-bold text-on-surface text-body-md">Ana P.</span>
              <span className="text-caption text-on-surface-variant">Mãe do Léo (atendimento de Torcicolo Congênito)</span>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4 bg-surface-white p-6 rounded-xl border border-surface-container-highest shadow-sm">
            <h4 className="text-label-md font-bold text-primary text-xs uppercase tracking-wider">
              O que dizem as famílias
            </h4>
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm fill">star</span>
              ))}
            </div>
            <p className="text-caption text-on-surface-variant">
              Veja outras histórias inspiradoras de progresso e reabilitação de nossos bebês.
            </p>
            <Link to="/depoimentos" className="inline-flex justify-center bg-primary text-on-primary text-caption font-bold py-2.5 px-4 rounded-full hover:brightness-95 transition-all">
              Ver Feedbacks
            </Link>
          </div>
        </div>
      </section>

      {/* How it works Process Section */}
      <section className="mt-20 bg-surface-container-low rounded-2xl p-8 md:p-12 border border-surface-container-highest">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-label-md font-semibold text-soft-taupe uppercase tracking-widest text-xs">Jornada Terapêutica</span>
          <h2 className="text-headline-md font-headline font-bold text-on-surface mt-1">Como funciona o nosso processo</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="flex flex-col items-center text-center px-4 relative z-10">
            <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-md">1</div>
            <h3 className="text-body-lg font-headline font-bold mb-2">Primeiro Contato</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Você preenche o formulário online e nós conversamos via WhatsApp para entender as preocupações com o bebê.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4 relative z-10">
            <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-md">2</div>
            <h3 className="text-body-lg font-headline font-bold mb-2">Avaliação Inicial</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Vou até a sua casa fazer uma análise motora detalhada no ambiente onde a criança passa a maior parte do tempo.
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-4 relative z-10">
            <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-md">3</div>
            <h3 className="text-body-lg font-headline font-bold mb-2">Plano & Sessões</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Montamos objetivos terapêuticos específicos e iniciamos as sessões lúdicas de estimulação para a evolução motora.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20">
        <h2 className="text-headline-md font-headline font-bold text-on-surface mb-8 text-center">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="group bg-surface-white border border-surface-container-highest rounded-xl p-5 cursor-pointer transition-all hover:border-primary/20">
            <summary className="flex justify-between items-center font-bold text-on-surface list-none">
              <span>Quanto tempo dura cada sessão de atendimento?</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
              As sessões duram em média 50 a 60 minutos. Esse tempo é flexível e respeita sempre o ritmo do bebê, as pausas de amamentação/sono e a disposição da criança no dia.
            </p>
          </details>
          <details className="group bg-surface-white border border-surface-container-highest rounded-xl p-5 cursor-pointer transition-all hover:border-primary/20">
            <summary className="flex justify-between items-center font-bold text-on-surface list-none">
              <span>Qual é a frequência sugerida para o tratamento?</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
              A frequência ideal é definida apenas após a avaliação inicial. Algumas condições demandam visitas semanais, enquanto outras podem necessitar de sessões quinzenais com orientações de exercícios para os pais realizarem de forma diária.
            </p>
          </details>
          <details className="group bg-surface-white border border-surface-container-highest rounded-xl p-5 cursor-pointer transition-all hover:border-primary/20">
            <summary className="flex justify-between items-center font-bold text-on-surface list-none">
              <span>Os planos de saúde cobrem o atendimento domiciliar?</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">
              Os atendimentos são particulares. Contudo, forneço recibos completos com todos os códigos necessários da ANS e relatórios clínicos específicos para que você possa dar entrada no reembolso junto ao seu convênio médico.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Final Banner */}
      <section className="mt-20 mb-8 bg-primary text-on-primary rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden flex flex-col items-center gap-4">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
        <h2 className="text-headline-lg font-headline font-bold text-white max-w-2xl leading-tight">
          Pronta para dar o primeiro passo para o desenvolvimento seguro do seu bebê?
        </h2>
        <p className="text-body-md text-primary-fixed-dim max-w-lg mb-4">
          Reserve uma data para a avaliação clínica domiciliar. Atendemos com flexibilidade de horários.
        </p>
        <Link 
          to="/agendar" 
          className="bg-surface-white text-primary font-bold text-label-md py-4 px-8 rounded-full shadow-md hover:bg-surface-container-low hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          Agendar Consulta no WhatsApp
        </Link>
      </section>

    </div>
  );
}

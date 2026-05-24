import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg animate-[fadeIn_0.5s_ease-out]">
      {/* Hero Section */}
      <section 
        className="mt-stack-md md:mt-stack-lg rounded-xl overflow-hidden relative min-h-[450px] flex flex-col justify-end shadow-sm bg-surface-container-high" 
        style={{ 
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJGKZz5THwRZLJdZCNb1TMcPQTbk-pVUd7fbHGId35sqISGiVf2d9K4NdQR5L3dzjjox8vU3SmTigxqbK_yF1dWO9yAMXYE3eu_sRxxAzpawmhHQ73qOumkteyp0MIC8YqAB5dVQYI7r4zeEvN66vNVahKgR63AsN4W0sfrQ5u8K5Wp1a_MPfMjA3YyWp6srmBNPAc3bqjb0P_lYqPowS3DOFUw12xVX6ZtqunAcMH8QQBu65yuLQr7hfeuht26E7pfJhU3CyY')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
        <div className="relative z-10 p-6 md:p-12 w-full max-w-2xl">
          <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline font-semibold text-on-background mb-2">
            Transformando o desenvolvimento motor do seu bebê no conforto do seu lar
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-6">
            Fisioterapia Pediátrica de Excelência com atendimento domiciliar.
          </p>
          <Link 
            to="/agendar" 
            className="inline-flex bg-[#DCAEB2] text-[#634044] font-semibold text-label-md px-6 py-3 rounded-full hover:-translate-y-0.5 transition-transform shadow-sm items-center gap-2"
          >
            Agendar Consulta
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="mt-stack-md text-center">
        <p className="text-label-md font-semibold text-primary bg-primary-container/20 inline-block px-4 py-2 rounded-full">
          🎓 Formação Internacional em Terapia Manual
        </p>
      </section>

      {/* Specialties Section */}
      <section className="mt-stack-lg">
        <div className="flex justify-between items-end mb-stack-md">
          <h2 className="text-headline-md font-headline font-semibold text-on-surface">Especialidades</h2>
          <Link to="/especialidades" className="text-primary font-semibold text-label-md hover:opacity-80 transition-opacity">
            Ver todas
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-sm md:gap-gutter">
          {/* Card 1 */}
          <div className="bg-surface-white rounded-lg p-6 shadow-sm hover:-translate-y-1 transition-transform border border-surface-container-highest">
            <div className="w-12 h-12 bg-[#DCAEB2]/30 rounded-full flex items-center justify-center mb-4 text-[#795558]">
              <span className="material-symbols-outlined">accessibility_new</span>
            </div>
            <h3 className="text-body-lg font-semibold text-on-surface mb-2">Torcicolo Congênito</h3>
            <p className="text-body-md text-on-surface-variant">
              Intervenção precoce para correção da postura cervical, garantindo mobilidade livre e sem dor.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-white rounded-lg p-6 shadow-sm hover:-translate-y-1 transition-transform border border-surface-container-highest">
            <div className="w-12 h-12 bg-[#DCAEB2]/30 rounded-full flex items-center justify-center mb-4 text-[#795558]">
              <span className="material-symbols-outlined">face</span>
            </div>
            <h3 className="text-body-lg font-semibold text-on-surface mb-2">Assimetrias Cranianas</h3>
            <p className="text-body-md text-on-surface-variant">
              Avaliação e tratamento especializado para promover o formato saudável da cabecinha do bebê.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-white rounded-lg p-6 shadow-sm hover:-translate-y-1 transition-transform border border-surface-container-highest">
            <div className="w-12 h-12 bg-[#DCAEB2]/30 rounded-full flex items-center justify-center mb-4 text-[#795558]">
              <span className="material-symbols-outlined">child_care</span>
            </div>
            <h3 className="text-body-lg font-semibold text-on-surface mb-2">Atraso Motor</h3>
            <p className="text-body-md text-on-surface-variant">
              Estímulos direcionados para auxiliar seu bebê a alcançar os marcos de desenvolvimento no tempo certo.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-stack-lg">
        <div className="flex justify-between items-center mb-stack-md">
          <h2 className="text-headline-md font-headline font-semibold text-on-surface">O que dizem as famílias</h2>
          <Link to="/depoimentos" className="text-primary font-semibold text-label-md hover:underline">
            Ver mais
          </Link>
        </div>
        <div className="bg-surface-white rounded-xl p-8 shadow-sm border border-surface-container-highest relative">
          <span className="material-symbols-outlined text-primary/20 absolute top-4 left-4 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            format_quote
          </span>
          <p className="text-body-lg text-on-surface-variant italic mt-6 mb-6 leading-relaxed">
            "O atendimento da Dra. Elizabeth foi um divisor de águas. O fato de ser em casa deixou meu filho muito mais calmo e os resultados apareceram rápido. Recomendo muito!"
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-on-surface">Ana P.</span>
              <span className="text-caption text-on-surface-variant">Mãe do Léo</span>
            </div>
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm fill">star</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Home Care Section */}
      <section className="mt-stack-lg py-stack-md">
        <h2 className="text-headline-md font-headline font-semibold text-on-surface mb-stack-md">Por que o atendimento domiciliar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="flex flex-col gap-3 group">
            <div className="text-primary group-hover:scale-110 transition-transform origin-left">
              <span className="material-symbols-outlined text-4xl">home_heart</span>
            </div>
            <h3 className="text-body-lg font-semibold text-on-surface">Conforto Familiar</h3>
            <p className="text-body-md text-on-surface-variant">O bebê se sente seguro no seu próprio espaço, o que facilita a aceitação dos exercícios e estímulos.</p>
          </div>
          <div className="flex flex-col gap-3 group">
            <div className="text-primary group-hover:scale-110 transition-transform origin-left">
              <span className="material-symbols-outlined text-4xl">nature</span>
            </div>
            <h3 className="text-body-lg font-semibold text-on-surface">Ambiente Natural</h3>
            <p className="text-body-md text-on-surface-variant">Trabalhamos com os brinquedos e móveis que a criança já utiliza no dia a dia, otimizando o aprendizado real.</p>
          </div>
          <div className="flex flex-col gap-3 group">
            <div className="text-primary group-hover:scale-110 transition-transform origin-left">
              <span className="material-symbols-outlined text-4xl">sentiment_satisfied</span>
            </div>
            <h3 className="text-body-lg font-semibold text-on-surface">Menos Estresse</h3>
            <p className="text-body-md text-on-surface-variant">Sem trânsito, salas de espera ou mudanças na rotina de sono e alimentação do seu pequeno.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="mt-stack-lg bg-surface-container-low rounded-2xl p-6 md:p-10 border border-surface-container-highest">
        <h2 className="text-headline-md font-headline font-semibold text-on-surface mb-stack-lg text-center">Como funciona o atendimento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">1</div>
            <h3 className="text-body-lg font-semibold mb-2">Primeiro Contato</h3>
            <p className="text-body-md text-on-surface-variant">Conversamos sobre as necessidades do bebê e agendamos a visita inicial.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">2</div>
            <h3 className="text-body-lg font-semibold mb-2">Avaliação Detalhada</h3>
            <p className="text-body-md text-on-surface-variant">Realizo uma análise completa do desenvolvimento motor no ambiente familiar.</p>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-md">3</div>
            <h3 className="text-body-lg font-semibold mb-2">Plano Personalizado</h3>
            <p className="text-body-md text-on-surface-variant">Traçamos objetivos específicos e iniciamos as sessões focadas na evolução do seu filho.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-stack-lg">
        <h2 className="text-headline-md font-headline font-semibold text-on-surface mb-stack-md text-center">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          <details className="group bg-surface-white border border-surface-container-highest rounded-xl p-4 cursor-pointer transition-all hover:border-primary/20">
            <summary className="flex justify-between items-center font-semibold text-on-surface list-none">
              <span>Quanto tempo dura cada sessão?</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">As sessões duram em média 50 a 60 minutos, respeitando sempre o ritmo e o tempo de atenção de cada bebê.</p>
          </details>
          <details className="group bg-surface-white border border-surface-container-highest rounded-xl p-4 cursor-pointer transition-all hover:border-primary/20">
            <summary className="flex justify-between items-center font-semibold text-on-surface list-none">
              <span>Qual a frequência ideal de tratamento?</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">A frequência é definida após a avaliação inicial, dependendo do quadro clínico e dos objetivos terapêuticos estabelecidos.</p>
          </details>
          <details className="group bg-surface-white border border-surface-container-highest rounded-xl p-4 cursor-pointer transition-all hover:border-primary/20">
            <summary className="flex justify-between items-center font-semibold text-on-surface list-none">
              <span>Atende por convênio médico?</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <p className="mt-4 text-body-md text-on-surface-variant leading-relaxed">Atendo de forma particular, mas forneço toda a documentação necessária (recibos e relatórios) para que você solicite o reembolso junto ao seu convênio.</p>
          </details>
        </div>
      </section>
    </div>
  );
}

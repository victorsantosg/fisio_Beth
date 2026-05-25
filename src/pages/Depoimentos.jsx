import React from 'react';

export default function Depoimentos() {
  const testimonials = [
    {
      id: 1,
      name: "Mariana S.",
      child: "Mãe do Leo, 8 meses",
      text: "A Elizabeth não é apenas uma fisioterapeuta maravilhosa, ela traz uma paz enorme para nossa casa. O desenvolvimento motor do Leo deu um salto impressionante em poucas semanas. Somos muito gratos pelo cuidado tão gentil.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUlqUYqvdkB8mh1X6EaH2qe21csK-5gvnSnfHLPnJNhZ1EoJ3gGj-Ig_AM58RUFVa-Bi7CES0u4-AKgn8vwPhfm5Pla_-2J1FthFf0Z8d0pKi_kjTHLqaFKWrf8YTafR4iWfBxdZD9QctgF21B1cfROfah5MN1QGOxNH4zCE_uqX0v5Jgv2NiF74jzEyDg9inBRzXEUI9hsJ72oICSe_3607XOjOiN4E20tXZG5WIZzRGc_XKP1Cus9f13hK-NdEJrzjU53iQA"
    },
    {
      id: 2,
      name: "Camila R.",
      child: "Mãe da Sofia, 4 meses",
      text: "Ter as sessões em casa foi a melhor decisão. A Sofia fica muito mais relaxada, e o profissionalismo da Dra. Elizabeth é impecável. Ela nos ensinou exercícios práticos que mudaram a nossa rotina para melhor.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6LoNAPCxk_3jzY0TJbRQmGGKTeZYj3ETb7cqQ9dPpAiBp0ivJwa0TrGwkOx8BikGW9U6aKmLOvkVVWXSmOtKSuELqvOpvWIcE_eiaN1IzFQPGmFgICn5hY-PGFsISjjWep27RzbL2aop9HjyX1XTgB9oY_nGEhhEmbE93AZZRLFDkhHeUL9cem1BtGjZQXjIUfvZx0I6rYbWsu6fFewCCpzWYbJraz9MON2VkGNXBkUgu2lNDvH0-Jtlr3vvN2xuUaNJDmu2t"
    },
    {
      id: 3,
      name: "Rafael T.",
      child: "Pai do Theo, 2 anos",
      text: "O atendimento é de altíssimo nível. A pontualidade, a higiene e principalmente o carinho com o Theo nos deram muita segurança desde o primeiro dia. Recomendamos de olhos fechados.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv7D57U_14i12XLG4zn5hsjosxSIOB7R80qqd2qm0xtk-uNcAJH1k1Bw7ImmVcFIeQLshCgc7TaUC4cvarrCKX5VQQ2EDbN7wFhtIq5We3LaEvrU087wL23RjApAXgCT7hwOeGXl9NFcA19sTRNvhAFXFoOXuXp7yxN8kggVI3VXXFHH-O6bDfZwpc43ucJMZTNYQz0hStzqe13extjXQa4TCZv9BsKvgbx0j3K6jxeXC_0h0_UqARvuEcqI7r9as5EYggGDhA"
    },
    {
      id: 4,
      name: "Ana P.",
      child: "Mãe da Clara, 10 meses",
      text: "Ver ela sorrindo durante os exercícios não tem preço. A Dra. Elizabeth consegue extrair o melhor da minha filha de um jeito totalmente leve, lúdico e brincando.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUlqUYqvdkB8mh1X6EaH2qe21csK-5gvnSnfHLPnJNhZ1EoJ3gGj-Ig_AM58RUFVa-Bi7CES0u4-AKgn8vwPhfm5Pla_-2J1FthFf0Z8d0pKi_kjTHLqaFKWrf8YTafR4iWfBxdZD9QctgF21B1cfROfah5MN1QGOxNH4zCE_uqX0v5Jgv2NiF74jzEyDg9inBRzXEUI9hsJ72oICSe_3607XOjOiN4E20tXZG5WIZzRGc_XKP1Cus9f13hK-NdEJrzjU53iQA"
    }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-stack-lg animate-fade-in">
      
      {/* Header Section */}
      <section className="mb-12 text-center md:text-left mt-8 animate-fade-in-up">
        <span className="text-label-md font-semibold text-soft-taupe uppercase tracking-widest text-xs">Depoimentos</span>
        <h2 className="text-headline-lg-mobile font-headline md:text-headline-lg font-bold text-primary mt-1">
          Histórias de Progresso
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mt-2 leading-relaxed">
          Histórias reais de progresso e cuidado. Veja como transformamos a vida dos nossos pequenos pacientes no conforto do lar.
        </p>
      </section>

      {/* Grid of Testimonials */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {testimonials.map((item, index) => (
          <article 
            key={item.id} 
            className="bg-surface-white rounded-xl overflow-hidden shadow-sm border border-surface-container-highest hover-premium-card flex flex-col h-full animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            {/* Child Photo Wrapper */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                src={item.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col">
                <h3 className="text-body-md font-bold text-white leading-tight">{item.name}</h3>
                <p className="text-caption text-white/95">{item.child}</p>
              </div>
            </div>
            
            {/* Feedback Content */}
            <div className="p-6 flex-grow flex flex-col justify-between items-center gap-4 bg-surface-white">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm fill">star</span>
                ))}
              </div>
              <p className="text-body-md text-on-surface-variant italic text-center w-full leading-relaxed flex-grow">
                "{item.text}"
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

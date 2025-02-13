import React from 'react';

export function Hero() {
  return (
    <section id="inicio" className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Seu sorriso merece o melhor cuidado</h1>
          <p className="text-xl mb-8">Oferecemos tratamentos odontológicos de alta qualidade com profissionais experientes e tecnologia avançada.</p>
          <a href="#agendamento" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Agende sua consulta
          </a>
        </div>
      </div>
    </section>
  );
}
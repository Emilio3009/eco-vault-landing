import React from 'react';
export default function GreenImpact() {
  return (
    <section id="impact" data-aos="fade-up" className="py-16 bg-green-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Green Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: 'forest_project.jpg', title: 'Reforestación', text: 'Plantamos árboles en áreas degradadas para restaurar ecosistemas.' },
            { img: 'river_cleanup.jpg', title: 'Limpieza de Ríos', text: 'Recogemos residuos plásticos y contaminantes de cuencas fluviales.' },
            { img: 'wildlife_protection.jpg', title: 'Protección de Fauna', text: 'Colaboramos con santuarios para la conservación de especies amenazadas.' }
          ].map((card, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img src={`/assets/${card.img}`} alt={card.title} className="mb-4 rounded" />
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

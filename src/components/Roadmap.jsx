import React from 'react';
export default function Roadmap() {
  return (
    <section id="roadmap" data-aos="fade-up" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Roadmap</h2>
        <div className="relative">
          <div className="border-l-2 border-green-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {[
              { title: 'Testnet Launch', desc: 'Publicación en testnet y pruebas comunitarias.' },
              { title: 'Mainnet Deploy', desc: 'Despliegue en mainnet y verificación de contrato.' }
            ].map((item, i) => (
              <div key={i} className={`flex justify-between items-center w-full ${i % 2 === 0 ? '' : 'flex-row-reverse'}`} data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}>
                <div className="order-1 w-5/12"></div>
                <div className="order-1 bg-green-300 rounded-full shadow w-8 h-8 flex items-center justify-center">✓</div>
                <div className="order-1 bg-white rounded-lg shadow p-6 w-5/12">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

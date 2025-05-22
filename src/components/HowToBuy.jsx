import React from 'react';
export default function HowToBuy() {
  return (
    <section id="buy" data-aos="fade-up" className="py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">How to Buy</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {['Instala tu Sui Wallet','Consigue $SUI','Conecta a Cetus/Jupiter','Cambia por $ECOV'].map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={(i+1)*100}>
              <div className="text-2xl mb-4">{i+1}</div>
              <h3 className="font-semibold mb-2">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

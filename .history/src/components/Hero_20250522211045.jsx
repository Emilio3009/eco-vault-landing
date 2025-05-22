import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Comprobar si la imagen existe cuando el componente se monta
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/ecov_big_icon.png";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => console.error("Error al cargar la imagen: /assets/ecov_big_icon.png");
  }, []);
  
  // Textos de respaldo en caso de que las traducciones fallen
  const fallbackTexts = {
    title: "Your Green Crypto-Bro on Sui",
    subtitle: "La primera criptomoneda verde en Sui Network que combina rentabilidad con impacto ambiental positivo",
    buyButton: "How to Buy",
    learnButton: "Learn More",
    stats: {
      holders: { value: "10,000+", label: "Holders" },
      community: { value: "25,000+", label: "Community" },
      projects: { value: "15+", label: "Eco Projects" }
    }
  };
  
  // Función para obtener texto seguro (con fallback si falla la traducción)
  const safeText = (key, fallback) => {
    const translated = t(key);
    // Si la traducción devuelve la misma clave, usamos el fallback
    return translated === key ? fallback : translated;
  };
  
  return (
    <section id="home" className="pt-28 pb-16 relative overflow-hidden">
      {/* Efecto de fondo con partículas */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white"></div>
        <div className="particle-container"></div>
      </div>
      
      {/* Nuevo icono grande superpuesto */}
      {imageLoaded && (
        <div className="absolute top-32 inset-x-0 flex justify-center z-30">
          <div className="relative scroll-reveal" data-aos="zoom-in" data-aos-delay="300">
            <img 
              src="/assets/ecov_big_icon.png" 
              alt="EcoVault Big Icon" 
              className="w-52 h-52 md:w-72 md:h-72 object-contain filter drop-shadow-2xl animate-pulse-slow"
            />
            <div className="absolute -inset-4 bg-gradient-to-b from-green-200 to-transparent opacity-40 rounded-full blur-2xl -z-10"></div>
            
            {/* Círculos decorativos animados */}
            <div className="absolute -inset-10 border-2 border-green-200 rounded-full animate-pulse-slow opacity-50"></div>
            <div className="absolute -inset-20 border border-green-100 rounded-full animate-reverse-spin opacity-30"></div>
          </div>
        </div>
      )}
      
      {/* Contenido principal con animación */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 pt-72 sm:pt-80 md:pt-96">
        <div className="text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6 scroll-reveal"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {safeText('hero.title', fallbackTexts.title)}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 scroll-reveal"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            {safeText('hero.subtitle', fallbackTexts.subtitle)}
          </p>
          
          <div 
            className="flex flex-wrap justify-center gap-4 scroll-reveal"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <a 
              href="#howtobuy" 
              className="px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 button-float"
            >
              {safeText('hero.buyButton', fallbackTexts.buyButton)}
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 border-2 border-green-500 text-green-600 font-medium rounded-full hover:bg-green-50 transition-all shadow-md hover:shadow-lg button-float"
            >
              {safeText('hero.learnButton', fallbackTexts.learnButton)}
            </a>
          </div>
          
          {/* Flecha de scroll animada */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" className="text-green-500 hover:text-green-600 transition-colors">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
          
          {/* Stats con animaciones escalonadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {['holders', 'community', 'projects'].map((key, index) => (
              <div 
                key={key} 
                className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-md card-hover scroll-reveal"
                data-aos="fade-up"
                data-aos-delay={1100 + (index * 200)}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {safeText(`hero.stats.${key}.value`, fallbackTexts.stats[key].value)}
                </div>
                <div className="text-gray-600">
                  {safeText(`hero.stats.${key}.label`, fallbackTexts.stats[key].label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  // Estado para verificar si la imagen existe
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
      {/* Imagen original de fondo */}
      <div className="absolute top-0 inset-x-0 flex justify-center z-10">
        <div className="w-full max-w-4xl relative -mt-5">
          <img 
            src="/assets/ecov_hero_illustration.png" 
            alt="EcoVault Hero" 
            className="w-full h-auto object-contain transform scale-125 filter drop-shadow-2xl"
          />
          {/* Efectos de sombra y brillo */}
          <div className="absolute -inset-10 bg-gradient-to-b from-green-200 to-transparent opacity-30 blur-3xl -z-10"></div>
          <div className="absolute -bottom-5 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
      
      {/* Nuevo icono grande superpuesto */}
      {imageLoaded && (
        <div className="absolute top-32 inset-x-0 flex justify-center z-30">
          <div className="relative">
            <img 
              src="/assets/ecov_big_icon.png" 
              alt="EcoVault Big Icon" 
              className="w-52 h-52 md:w-72 md:h-72 object-contain filter drop-shadow-2xl animate-fadeIn"
            />
            <div className="absolute -inset-4 bg-gradient-to-b from-green-200 to-transparent opacity-40 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      )}
      
      {/* Ajustamos el padding superior para dar espacio a la imagen */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 pt-72 sm:pt-80 md:pt-96">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-6">
            {safeText('hero.title', fallbackTexts.title)}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
            {safeText('hero.subtitle', fallbackTexts.subtitle)}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#howtobuy" 
              className="px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {safeText('hero.buyButton', fallbackTexts.buyButton)}
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 border-2 border-green-500 text-green-600 font-medium rounded-full hover:bg-green-50 transition-all shadow-md hover:shadow-lg"
            >
              {safeText('hero.learnButton', fallbackTexts.learnButton)}
            </a>
          </div>
          
          {/* Stats o highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {['holders', 'community', 'projects'].map((key) => (
              <div key={key} className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-md">
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
      
      {/* Añadir consola para depuración (opcional) */}
      {process.env.NODE_ENV === 'development' && !imageLoaded && (
        <div className="fixed bottom-0 left-0 bg-red-100 p-2 text-xs">
          Imagen no cargada: /assets/ecov_big_icon.png
        </div>
      )}
    </section>
  );
}

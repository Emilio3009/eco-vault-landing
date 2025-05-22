import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración simplificada sin dependencias adicionales
i18n
  .use(initReactI18next)
  .init({
    // Idiomas soportados
    supportedLngs: ['en', 'es'],
    
    // Idioma de respaldo (se usa si una traducción no existe)
    fallbackLng: 'en',
    
    // Modo debug en desarrollo
    debug: process.env.NODE_ENV === 'development',
    
    // Namespace por defecto
    defaultNS: 'common',
    
    // Función para detectar el idioma del navegador
    lng: localStorage.getItem('preferred-language') || navigator.language?.split('-')[0] || 'en',
    
    // Interpolación
    interpolation: {
      escapeValue: false, // No es necesario para React
    },
    
    // Recursos de traducción
    resources: {
      en: {
        common: {
          nav: {
            home: 'Home',
            about: 'About',
            howToBuy: 'How to Buy',
            tokenomics: 'Tokenomics',
            roadmap: 'Roadmap',
            governance: 'Governance',
          },
          hero: {
            title: 'Your Green Crypto-Bro on Sui',
            subtitle: 'The first green cryptocurrency on Sui Network that combines profitability with positive environmental impact',
            buyButton: 'How to Buy',
            learnButton: 'Learn More',
            stats: {
              holders: { value: '10,000+', label: 'Holders' },
              community: { value: '25,000+', label: 'Community' },
              projects: { value: '15+', label: 'Eco Projects' },
            },
          },
        },
      },
      es: {
        common: {
          nav: {
            home: 'Inicio',
            about: 'Sobre Nosotros',
            howToBuy: 'Cómo Comprar',
            tokenomics: 'Tokenomics',
            roadmap: 'Hoja de Ruta',
            governance: 'Gobernanza',
          },
          hero: {
            title: 'Tu Crypto Verde en Sui',
            subtitle: 'La primera criptomoneda verde en Sui Network que combina rentabilidad con impacto ambiental positivo',
            buyButton: 'Cómo Comprar',
            learnButton: 'Saber Más',
            stats: {
              holders: { value: '10,000+', label: 'Holders' },
              community: { value: '25,000+', label: 'Comunidad' },
              projects: { value: '15+', label: 'Proyectos Eco' },
            },
          },
        },
      },
    },
  });

// Función para cambiar el idioma
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem('preferred-language', lng);
};

export default i18n;
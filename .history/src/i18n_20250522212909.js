import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Carga traducciones usando http (puede ser estático también)
  .use(Backend)
  // Detecta el idioma del usuario
  .use(LanguageDetector)
  // Pasa el i18n a react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    // Idiomas soportados
    supportedLngs: ['en', 'es'],
    
    // Idioma de respaldo (se usa si una traducción no existe)
    fallbackLng: 'en',
    
    // Solo registrar errores en consola en modo desarrollo
    debug: process.env.NODE_ENV === 'development',
    
    // Namespace por defecto usado para traducciones
    defaultNS: 'common',
    
    // Opciones de detección de idioma
    detection: {
      // Orden en el que se detecta el idioma
      order: ['localStorage', 'navigator'],
      // Clave usada para almacenar el idioma en localStorage
      lookupLocalStorage: 'preferred-language',
      // Caché del idioma detectado
      caches: ['localStorage'],
    },
    
    // Opciones de interpolación
    interpolation: {
      // No es necesario escapar valores para React
      escapeValue: false,
    },
    
    // Recursos de traducción (para modo estático)
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

export default i18n;
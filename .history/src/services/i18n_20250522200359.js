import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones
import translationES from '../locales/es.json';
import translationEN from '../locales/en.json';
import translationFR from '../locales/fr.json';
import translationDE from '../locales/de.json';
import translationIT from '../locales/it.json';
import translationPT from '../locales/pt.json';
import translationZH from '../locales/zh.json';
import translationJA from '../locales/ja.json';
import translationAR from '../locales/ar.json';
import translationRU from '../locales/ru.json';

// Recursos con traducciones
const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  de: {
    translation: translationDE
  },
  it: {
    translation: translationIT
  },
  pt: {
    translation: translationPT
  },
  zh: {
    translation: translationZH
  },
  ja: {
    translation: translationJA
  },
  ar: {
    translation: translationAR
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'preferredLanguage',
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // React ya escapa los valores
    }
  });

export default i18n;
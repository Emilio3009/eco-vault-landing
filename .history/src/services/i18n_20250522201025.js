import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones - método alternativo para evitar problemas de importación
import es from '../locales/es.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';
import de from '../locales/de.json';
import it from '../locales/it.json';
import pt from '../locales/pt.json';
import zh from '../locales/zh.json';
import ja from '../locales/ja.json';
import ar from '../locales/ar.json';
import ru from '../locales/ru.json';

// Recursos con traducciones
const resources = {
  es: { translation: es },
  en: { translation: en },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  zh: { translation: zh },
  ja: { translation: ja },
  ar: { translation: ar },
  ru: { translation: ru }
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
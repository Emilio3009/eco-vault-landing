import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Definimos los idiomas disponibles
const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

export default function Header() {
  const { t, i18n } = useTranslation();
  
  // Estado para el menú de idiomas
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Obtener el idioma actual de i18n
    const currentLang = i18n.language;
    return languages.find(lang => lang.code === currentLang) || languages[0];
  });
  const langMenuRef = useRef(null);
  
  // Estado para menú móvil (hamburguesa)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Cerrar el menú de idiomas al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuRef]);
  
  // Cambiar idioma
  const selectLanguage = (language) => {
    if (language.code !== currentLanguage.code) {
      setCurrentLanguage(language);
      
      // Cambiar el idioma usando i18next
      i18n.changeLanguage(language.code);
    }
    
    setIsLangMenuOpen(false);
  };

  // Array de items del menú
  const navItems = [
    { id: 'home', label: t('navigation.home') },
    { id: 'about', label: t('navigation.about') },
    { id: 'howtobuy', label: t('navigation.howToBuy') },
    { id: 'greenimpact', label: t('navigation.greenImpact') },
    { id: 'tokenomics', label: t('navigation.tokenomics') },
    { id: 'roadmap', label: t('navigation.roadmap') },
    { id: 'governance', label: t('navigation.governance') }
  ];

  return (
    <header className="fixed w-full bg-white bg-opacity-70 backdrop-blur-md z-50 transition-all duration-300 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        {/* Logo de EcoVault - REDISEÑADO */}
        <div className="flex-shrink-0">
          <a href="#home" className="group flex items-center transition-transform duration-300 hover:transform hover:scale-105">
            {/* Logo con tamaño aumentado */}
            <div className="relative">
              <img 
                src="/assets/ecov_refined_color_mono.png" 
                alt="EcoVault Logo" 
                className="h-14 w-auto transition-all duration-300 group-hover:filter group-hover:drop-shadow-lg" 
              />
              {/* Efecto de brillo sutil */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 opacity-0 rounded-full blur-lg group-hover:opacity-20 transition duration-500"></div>
            </div>
            
            {/* Nombre con estilo mejorado */}
            <div className="ml-3 flex flex-col">
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500 tracking-tight">
                EcoVault
              </span>
              <span className="text-xs text-green-600 font-semibold tracking-wider uppercase">
                Green Crypto · Sui Network
              </span>
            </div>
          </a>
        </div>
        
        {/* Navegación para escritorio */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Parte derecha con selector de idiomas y botón whitepaper */}
        <div className="flex items-center space-x-4">
          {/* Selector de idiomas con estilo mejorado */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 px-2 py-1 rounded-full border border-gray-200 bg-white bg-opacity-80 backdrop-blur-sm hover:border-green-300 hover:bg-green-50 transition-all duration-200"
              aria-label="Seleccionar idioma"
            >
              <span className="text-xl">{currentLanguage.flag}</span>
              <svg 
                className={`w-4 h-4 text-gray-600 transform transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => selectLanguage(language)}
                      className={`flex items-center px-4 py-2.5 text-sm w-full text-left transition-colors ${
                        currentLanguage.code === language.code 
                          ? 'bg-green-50 text-green-800 border-l-4 border-green-500' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      role="menuitem"
                    >
                      <span className="mr-3 text-xl">{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Botón Whitepaper mejorado */}
          <a 
            href="#" 
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:shadow-md hover:from-green-500 hover:to-green-600 transition-all duration-300"
          >
            <span>{t('navigation.whitepaper')}</span>
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          {/* Botón de hamburguesa para menú móvil */}
          <button 
            className="md:hidden text-green-700 hover:text-green-600 p-2 rounded-md hover:bg-green-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menú móvil mejorado */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fadeIn">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className="flex items-center py-2 px-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#" 
              className="flex items-center justify-center py-3 mt-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-medium rounded-lg hover:from-green-500 hover:to-green-600 transition-colors"
            >
              {t('navigation.whitepaper')}
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

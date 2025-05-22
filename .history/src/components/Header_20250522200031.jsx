import React, { useState, useRef, useEffect } from 'react';

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
  // Estado para el menú de idiomas
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Recuperar el idioma guardado en localStorage o usar el predeterminado
    const savedLang = localStorage.getItem('preferredLanguage');
    return languages.find(lang => lang.code === savedLang) || languages[0];
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
      localStorage.setItem('preferredLanguage', language.code);
      
      // Opcional: Recargar la página para aplicar cambios de idioma
      // window.location.reload();
      
      // Mensaje de confirmación
      console.log(`Idioma cambiado a: ${language.name}`);
      
      // Simulación de cambio de idioma (para demostración)
      document.documentElement.lang = language.code;
      
      // Para una implementación completa, aquí usaríamos i18next:
      // i18n.changeLanguage(language.code);
    }
    
    setIsLangMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-60 backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo de EcoVault (ahora sin el selector de idiomas a la izquierda) */}
        <div className="flex items-center">
          <img src="/assets/ecov_refined_color_mono.png" alt="EcoVault Logo" className="h-10" />
          <span className="ml-2 font-bold text-xl text-green-700">EcoVault</span>
        </div>
        
        {/* Parte central con navegación para escritorio */}
        <nav className="hidden md:flex items-center space-x-6">
          {['Home','About','How to Buy','Green Impact','Tokenomics','Roadmap','Governance'].map(label => (
            <a 
              key={label} 
              href={'#'+label.toLowerCase().replace(/ /g,'')} 
              className="hover:text-green-600"
            >
              {label}
            </a>
          ))}
        </nav>
        
        {/* Parte derecha con selector de idiomas y botón whitepaper */}
        <div className="flex items-center space-x-4">
          {/* Selector de idiomas (ahora a la derecha) */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors"
              aria-label="Seleccionar idioma"
            >
              <span className="text-xl">{currentLanguage.flag}</span>
              <svg 
                className={`w-4 h-4 transform transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => selectLanguage(language)}
                      className={`flex items-center px-4 py-2 text-sm w-full text-left ${
                        currentLanguage.code === language.code 
                          ? 'bg-green-100 text-green-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      role="menuitem"
                    >
                      <span className="mr-2 text-xl">{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Botón Whitepaper */}
          <a href="#" className="hidden md:block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Whitepaper
          </a>
          
          {/* Botón de hamburguesa para menú móvil */}
          <button 
            className="md:hidden text-green-700 hover:text-green-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-4 space-y-3">
            {['Home','About','How to Buy','Green Impact','Tokenomics','Roadmap','Governance'].map(label => (
              <a 
                key={label} 
                href={'#'+label.toLowerCase().replace(/ /g,'')} 
                className="hover:text-green-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a 
              href="#" 
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center"
            >
              Whitepaper
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

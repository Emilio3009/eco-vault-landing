import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    localStorage.setItem('preferred-language', code);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span>{currentLanguage.label}</span>
        <svg 
          className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-lg shadow-xl z-50">
          {languages.map(language => (
            <button
              key={language.code}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 
                ${language.code === currentLanguage.code ? 'text-green-600' : 'text-gray-700'}`}
              onClick={() => changeLanguage(language.code)}
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const prevScrollY = useRef(0);

  // Detectar dirección y posición del scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determinar si ha hecho scroll hacia abajo o hacia arriba
      if (currentScrollY > prevScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      // Determinar si ha scrolleado lo suficiente para cambiar el estilo
      setIsScrolled(currentScrollY > 50);
      
      // Actualizar la referencia del scroll previo
      prevScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.howToBuy'), href: '#howtobuy' },
    { label: t('nav.tokenomics'), href: '#tokenomics' },
    { label: t('nav.roadmap'), href: '#roadmap' },
    { label: t('nav.governance'), href: '#governance' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white bg-opacity-90 shadow-md scrolled' : 'bg-white bg-opacity-70 backdrop-blur-md'} 
      ${scrollDirection === 'up' || !isScrolled ? 'scroll-up' : 'scroll-down'}
    `}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Solo texto sin logo */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-green-600">
              EcoVault
              <span className="block text-xs text-gray-500 tracking-wider mt-1">
                GREEN CRYPTO · SUI NETWORK
              </span>
            </a>
          </div>

          {/* Menu de navegación de escritorio */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botón de cambio de idioma y botón de menú móvil */}
          <div className="flex items-center">
            <LanguageSelector />
            
            <button 
              className="ml-4 md:hidden text-gray-500 hover:text-green-600 transition-colors focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil */}
      <MobileMenu isOpen={mobileMenuOpen} items={navItems} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}

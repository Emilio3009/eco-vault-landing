import React, { useEffect } from 'react';

export default function MobileMenu({ isOpen, items, onClose }) {
  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Si no está abierto, no renderizar
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300"
        onClick={e => e.stopPropagation()} // Evitar que clics en el menú lo cierren
      >
        <div className="p-5">
          <button 
            className="absolute top-4 right-4 text-gray-500 hover:text-green-600"
            onClick={onClose}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="block py-2 text-lg text-gray-600 hover:text-green-600 transition-colors"
                onClick={onClose}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
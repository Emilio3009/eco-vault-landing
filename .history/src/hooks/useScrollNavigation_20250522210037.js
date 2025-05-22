import { useEffect } from 'react';

export function useScrollNavigation() {
  useEffect(() => {
    // Hacer que todos los enlaces con href="#algo" tengan scroll suave
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      
      const id = target.getAttribute('href');
      if (!id || id === '#') return;
      
      e.preventDefault();
      
      const element = document.querySelector(id);
      if (!element) return;

      // Obtener la altura del header (asumiendo que tiene una clase específica)
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Animar con opciones personalizadas
      const yOffset = -headerHeight - 20; // 20px extra de padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleSmoothScroll);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
}
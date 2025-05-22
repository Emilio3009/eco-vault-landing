import { useEffect } from 'react';

export function useScrollNavigation() {
  useEffect(() => {
    // Función para manejar clics en enlaces que navegan a secciones internas
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      
      // Verificar que sea un enlace de anclaje interno
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Scroll suave hacia el elemento
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajusta según el tamaño de tu header
            behavior: 'smooth'
          });
          
          // Actualizar URL sin recargar la página
          window.history.pushState(null, '', href);
        }
      }
    };
    
    // Añadir event listener a todos los enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });
    
    // Cleanup
    return () => {
      internalLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);
}
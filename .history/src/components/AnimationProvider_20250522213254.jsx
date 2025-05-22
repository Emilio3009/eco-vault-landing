import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/animations.css'; // Importamos nuestras animaciones personalizadas

export default function AnimationProvider({ children }) {
  const observerRef = useRef(null);

  useEffect(() => {
    // Inicializar AOS con configuración personalizada
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });

    // Configurar el Intersection Observer para animar elementos al scroll
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el elemento es visible
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcional: dejar de observar una vez que se haya animado
            // observerRef.current.unobserve(entry.target);
          } else {
            // Opcional: quitar la clase si el elemento ya no está en el viewport
            // entry.target.classList.remove('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Elemento visible cuando el 10% es visible
      }
    );

    // Observar todos los elementos con la clase scroll-reveal
    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      observerRef.current.observe(element);
    });

    // Reinicializar en cambio de tamaño de ventana
    const refreshAOS = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', refreshAOS);

    return () => {
      window.removeEventListener('resize', refreshAOS);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <>{children}</>;
}
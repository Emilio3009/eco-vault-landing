import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AnimationProvider({ children }) {
  useEffect(() => {
    // Inicializar AOS con configuración personalizada
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });

    // Reinicializar en cambio de tamaño de ventana
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return <>{children}</>;
}
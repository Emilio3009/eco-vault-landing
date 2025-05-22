import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/animations.css'; // Importamos nuestras animaciones personalizadas

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
    const refreshAOS = () => {
      AOS.refresh();
    };
    
    window.addEventListener('resize', refreshAOS);
    
    return () => {
      window.removeEventListener('resize', refreshAOS);
    };
  }, []);

  return <>{children}</>;
}
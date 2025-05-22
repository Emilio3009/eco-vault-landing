import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import GreenImpact from './components/GreenImpact';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Governance from './components/Governance';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import AnimationProvider from './components/AnimationProvider';
import { useScrollNavigation } from './hooks/useScrollNavigation';
import './styles/animations.css';

function App() {
  // Usar el hook de navegación con scroll suave
  useScrollNavigation();
  
  useEffect(() => {
    // Añadir clase para animación de entrada inicial
    document.body.classList.add('animate-fadeIn');
    
    // Limpiar estado de scroll al cargar la página
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Implementar detección de elementos visibles para animaciones
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observar todos los elementos con la clase scroll-reveal
    document.querySelectorAll('.scroll-reveal').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      // Limpiar observer
      document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <AnimationProvider>
      <div className="app-container">
        <ScrollIndicator />
        <Header />
        <main>
          <Hero />
          <About />
          <HowToBuy />
          <GreenImpact />
          <Tokenomics />
          <Roadmap />
          <Governance />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;

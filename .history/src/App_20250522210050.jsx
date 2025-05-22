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

// Importamos estilos adicionales para transiciones de página
import './styles/transitions.css';

function App() {
  useScrollNavigation();
  
  useEffect(() => {
    // Añadir clase para animación de entrada inicial
    document.body.classList.add('loaded');
    
    // Limpiar estado de scroll al cargar la página
    window.history.scrollRestoration = 'manual';
    
    return () => {
      document.body.classList.remove('loaded');
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

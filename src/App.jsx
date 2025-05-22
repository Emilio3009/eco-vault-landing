import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import GreenImpact from './components/GreenImpact';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Governance from './components/Governance';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-800">
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
  );
}

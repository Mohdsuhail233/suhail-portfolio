
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import './App.css';
import Experience from './components/Experience';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 font-['Outfit']">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;

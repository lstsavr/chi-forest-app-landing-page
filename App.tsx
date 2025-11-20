import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CommunityPreview from './components/CommunityPreview';
import AISection from './components/AISection';
import Footer from './components/Footer';
import CTA from './components/CTA';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white selection:bg-brand-green selection:text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <AISection />
        <CommunityPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
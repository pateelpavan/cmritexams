import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuestionPaperSection } from './components/QuestionPaperSection';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { InstallPrompt } from './components/InstallPrompt';
import { LogoSection } from './components/LogoSection';

export default function App() {
  useEffect(() => {
    // Prevent pull-to-refresh on mobile browsers
    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].pageY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].pageY;
      // If at top of page and scrolling down, prevent default
      if (document.documentElement.scrollTop === 0 && y > startY) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <InstallPrompt />
      <Header />
      <main>
        <Hero />
        <LogoSection />
        <QuestionPaperSection />
        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
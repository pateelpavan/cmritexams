import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuestionPaperSection } from './components/QuestionPaperSection';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { InstallPrompt } from './components/InstallPrompt';
import { LogoSection } from './components/LogoSection';

export default function App() {
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
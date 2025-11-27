import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'Question Papers', id: 'question-papers' },
    { label: 'Contact', id: 'contact' },
    { label: 'About', id: 'about' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between lg:justify-center lg:gap-12">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Logo - Center on desktop, left on mobile */}
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="relative">
              <h1 className="text-2xl lg:text-3xl cursor-pointer">
                <span className="text-green-600">CMRIT</span>
                <span className="text-orange-500"> EXAM</span>
              </h1>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-green-400 to-orange-400 rounded-lg opacity-0 blur"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-green-600 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Spacer for mobile to keep logo centered visually */}
          <div className="lg:hidden w-10" />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-6 pb-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-green-600 hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
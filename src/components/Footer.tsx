import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto">
          {/* Logo and Description */}
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl mb-3">
              <span className="text-green-400">CMRIT</span>
              <span className="text-orange-400"> EXAM</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A student-made platform dedicated to helping CMRIT students access previous question papers for better exam preparation.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a
              href="#"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#contact"
              className="hover:text-green-400 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
              This is a student-made platform for educational purposes. All question papers are shared 
              for academic preparation only. We do not claim ownership of any content.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-sm text-gray-400">
                © {currentYear} CMRIT EXAM. All rights reserved.
              </p>

              {/* Made with Love */}
              <p className="text-sm text-gray-400 flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for CMRIT Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

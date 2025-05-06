
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-cream py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-montserrat font-bold text-xl">
              <span className="text-clay">R</span>afael <span className="text-clay">N</span>adal
            </p>
            <p className="text-sm text-cream/70 mt-1">
              © {new Date().getFullYear()} | All rights reserved
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/Nadal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-clay transition-colors duration-200"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/rafaelnadal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-clay transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/RafaelNadal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-clay transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/rafa-nadal-academy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-clay transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-cream/60">
          <a 
            href="https://www.rafanadalfoundation.org/en/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-clay transition-colors duration-200"
          >
            Fundación Rafa Nadal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

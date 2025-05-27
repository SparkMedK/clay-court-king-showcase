
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
            <div className="text-sm text-cream/70 mt-1">
              <p>
                © 2025 Sportifio. All rights reserved.
                <br />
                The profile of Rafael Nadal shown here is for demonstration purposes only and uses publicly available information.
                <br />
                Sportifio is <strong>not affiliated with or endorsed by Rafael Nadal</strong> or his official team.
              </p>
            </div>
          </div>
          
          <div className="flex space-x-6">

            <a 
              href="https://x.com/sportifio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream hover:text-clay transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

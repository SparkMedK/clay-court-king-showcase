
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeAction = () => {
    // Scroll to top smoothly when home is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-cream text-xl md:text-2xl font-montserrat font-bold">
          Rafa Nadal
        </NavLink>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className="nav-link flex items-center space-x-2 hover:text-clay transition-colors duration-200"
            onClick={handleHomeAction}
          >
            <span>Home</span>
          </NavLink>
          <a href="/#about" className="nav-link">About</a>
          <a href="/#achievements" className="nav-link">Achievements</a>
          <a href="/#sportifio" className="nav-link">Sportifio</a>
          <NavLink to="/chat" className="nav-link text-clay font-bold">
            Chat with AI
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-navy/95 flex flex-col items-center justify-center z-50 transition-transform duration-300 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <button 
            className="absolute top-4 right-4 text-cream"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6">
            <NavLink 
              to="/" 
              className="mobile-nav-link flex items-center space-x-3" 
              onClick={() => {
                setIsOpen(false);
                handleHomeAction();
              }}
            >
              <Home size={20} />
              <span>Home</span>
            </NavLink>
            <a href="/#about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="/#achievements" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              Achievements
            </a>
            <a href="/#sportifio" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              Sportifio
            </a>
            <NavLink to="/chat" className="mobile-nav-link text-clay font-bold" onClick={() => setIsOpen(false)}>
              Chat with AI
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

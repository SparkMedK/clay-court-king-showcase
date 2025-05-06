
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(26, 46, 68, 0.7), rgba(26, 46, 68, 0.7)), url('https://images.unsplash.com/photo-1622279457486-28f746125e28?q=80&w=2070&auto=format')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-extrabold text-cream mb-4">
          Rafael Nadal
        </h1>
        <p className="text-xl md:text-3xl text-clay font-montserrat mb-8">
          14-Time Roland Garros Champion
        </p>
        <h2 className="text-2xl md:text-4xl text-cream font-montserrat mb-12">
          The King of Clay
        </h2>
        <a href="#achievements" className="btn-clay shadow-lg shadow-clay/20">
          Explore His Legacy
        </a>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <a 
          href="#about" 
          className="text-cream animate-bounce inline-block"
          aria-label="Scroll to About section"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

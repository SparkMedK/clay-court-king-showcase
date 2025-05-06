
import React from 'react';
import Section from '@/components/Section';

const PhilanthropySection = () => {
  return (
    <Section id="philanthropy" title="Philanthropy" className="bg-cream">
      <div className="bg-paris/10 rounded-lg p-6 md:p-8 border border-paris/30">
        <h3 className="text-2xl font-montserrat font-bold text-paris mb-6">Fundación Rafa Nadal</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-navy mb-4 leading-relaxed">
              Launched in 2007, the Fundación Rafa Nadal supports disadvantaged children and teenagers through sports and education programs. The foundation is directed by Nadal's wife, Maria Francisca Perello.
            </p>
            <p className="text-navy mb-4 leading-relaxed">
              In 2010, Nadal participated in the "Hit for Haiti" charity event alongside other tennis stars, raising funds for the earthquake relief efforts in Haiti.
            </p>
            <p className="text-navy mb-6 leading-relaxed">
              The foundation currently runs centers in Spain and India, helping thousands of children develop skills that extend beyond sports into their daily lives.
            </p>
            <a 
              href="https://www.rafanadalfoundation.org/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-paris hover:bg-paris-dark text-cream py-3 px-6 rounded-md font-montserrat font-semibold transition-colors duration-300 inline-flex items-center"
            >
              Support the Foundation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="flex justify-center">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1597344239190-0d49193c2fae?q=80&w=2073&auto=format&fit=crop" 
                alt="Rafael Nadal Foundation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PhilanthropySection;

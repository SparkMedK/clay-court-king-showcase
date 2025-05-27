
import React from 'react';
import Section from '@/components/Section';
import { Mail, Code, Trophy } from 'lucide-react';

const SportifioSection = () => {
  return (
    <Section id="sportifio" title="Created by Sportifio" className="bg-clay text-cream" titleClassName="text-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-gold mr-3" />
            <h3 className="text-2xl font-montserrat font-bold text-gold">Portfolio Development</h3>
          </div>
          <p className="mb-6 leading-relaxed">
            This Rafael Nadal tribute portfolio was crafted by Sportifio, showcasing the legendary career of the King of Clay through modern web design and interactive features.
          </p>
          <div className="bg-navy/20 border-l-4 border-gold p-4 rounded">
            <div className="flex items-center mb-2">
              <Mail className="w-5 h-5 text-gold mr-2" />
              <span className="font-montserrat font-semibold text-gold">Get in Touch</span>
            </div>
            <a 
              href="mailto:sportifio.team@gmail.com" 
              className="text-cream hover:text-gold transition-colors duration-200 font-medium"
            >
              sportifio.team@gmail.com
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative max-w-sm overflow-hidden rounded-lg shadow-xl bg-navy/30 p-8">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-gold mx-auto mb-4" />
              <h4 className="text-xl font-montserrat font-bold text-gold mb-2">Sportifio</h4>
              <div className="bg-gold/20 rounded-lg p-4">
                <p className="text-cream text-sm italic">
                  "Celebrating your athletic journey in one link!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SportifioSection;


import React from 'react';
import Section from '@/components/Section';

const LegacySection = () => {
  return (
    <Section id="legacy" title="Roland Garros Legacy" className="bg-paris text-cream" titleClassName="text-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">The King of Clay</h3>
          <p className="mb-4 leading-relaxed">
            Nadal's dominance at Roland Garros is unprecedented in tennis history. With only 4 losses in 116 matches (to Robin Soderling in 2009, Novak Djokovic in 2015 and 2021, and Alexander Zverev in 2024), his mastery of clay court tennis has earned him the title "King of Clay."
          </p>
          <p className="mb-4 leading-relaxed">
            In 2021, the French Tennis Federation unveiled a steel statue of Nadal at Stade Roland Garros, immortalizing his legacy at the venue where he has made tennis history time and again.
          </p>
          <div className="bg-clay/20 border-l-4 border-gold p-4 rounded">
            <p className="italic text-cream">
              "Nadal is the king of Roland Garros and of world tennis."
            </p>
            <p className="text-right text-sm mt-2 text-gold">— Felipe VI, King of Spain, 2022</p>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative max-w-sm overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1622279457486-28f746125e28?q=80&w=2070&auto=format" 
              alt="Rafael Nadal at Roland Garros" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-cream text-sm">
                Nadal's statue at Roland Garros, unveiled in 2021, stands as a testament to his unparalleled achievement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LegacySection;

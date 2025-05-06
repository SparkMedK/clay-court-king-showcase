
import React from 'react';
import Section from '@/components/Section';

const AboutSection = () => {
  return (
    <Section id="about" title="About Nadal" className="bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-navy mb-4 leading-relaxed">
            Born June 3, 1986, in Manacor, Mallorca, Spain, Rafael Nadal has become one of tennis's greatest legends. Known for his relentless athleticism, topspin-heavy forehand, and mental toughness, Nadal has redefined what's possible on a clay court.
          </p>
          <p className="text-navy mb-4 leading-relaxed">
            As part of tennis's "Big Three" alongside Roger Federer and Novak Djokovic, Nadal has helped elevate the sport to unprecedented heights. His tenacity and sportsmanship have earned him respect from fans and competitors alike.
          </p>
          <p className="text-navy leading-relaxed">
            Off the court, Nadal founded the Fundación Rafa Nadal in 2007 to support disadvantaged youth through sports and education programs, showing his commitment to giving back to society.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-lg shadow-xl max-w-sm">
            <img 
              src="https://images.unsplash.com/photo-1622279457486-28f746125e28?q=80&w=2070&auto=format" 
              alt="Rafael Nadal" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent flex items-end p-4">
              <p className="text-cream text-sm font-montserrat italic">
                "I just try to play every point, every match like it's my last one."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

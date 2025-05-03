
import { Facebook, Instagram, Twitter, Linkedin, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import StatCard from "@/components/StatCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Achievements Section */}
      <Section id="achievements" title="Career Achievements" className="bg-navy text-cream" titleClassName="text-cream">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard value={22} title="Grand Slam Titles" />
          <StatCard value={14} title="French Open Titles" description="Record for any player at a single major" />
          <StatCard value={96} title="Win Rate %" description="112-4 record at Roland Garros" />
          <StatCard value={81} title="Consecutive Clay Wins" description="Open Era record (2005-2007)" />
        </div>

        <div className="bg-paris/80 rounded-lg p-6 md:p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-montserrat font-bold mb-6 text-gold">Grand Slam Timeline</h3>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-clay rounded-full p-3 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-cream" />
              </div>
              <div>
                <h4 className="text-lg font-montserrat font-bold text-gold">First French Open Title (2005)</h4>
                <p className="text-cream opacity-90">
                  At just 19 years old, Nadal defeated Mariano Puerta in the final to win his first Roland Garros title on his very first attempt, beginning his clay court dynasty.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-clay rounded-full p-3 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-cream" />
              </div>
              <div>
                <h4 className="text-lg font-montserrat font-bold text-gold">Five Consecutive Titles (2010)</h4>
                <p className="text-cream opacity-90">
                  Nadal won his fifth consecutive French Open title (2005-2008, 2010), matching Björn Borg's record of five consecutive French Open wins.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-clay rounded-full p-3 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-cream" />
              </div>
              <div>
                <h4 className="text-lg font-montserrat font-bold text-gold">La Décima (2017)</h4>
                <p className="text-cream opacity-90">
                  Nadal became the first player in the Open Era to win 10 titles at a single Grand Slam tournament, defeating Stan Wawrinka in the final without dropping a set.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="bg-clay rounded-full p-3 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-cream" />
              </div>
              <div>
                <h4 className="text-lg font-montserrat font-bold text-gold">14th Title (2022)</h4>
                <p className="text-cream opacity-90">
                  At age 36, Nadal won his 14th French Open title and 22nd Grand Slam overall, defeating Casper Ruud in straight sets despite struggling with a chronic foot injury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Legacy Section */}
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

      {/* Philanthropy Section */}
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
                  src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format" 
                  alt="Rafael Nadal Foundation" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;

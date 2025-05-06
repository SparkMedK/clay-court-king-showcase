
import React from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import LegacySection from '@/components/sections/LegacySection';
import PhilanthropySection from '@/components/sections/PhilanthropySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <LegacySection />
      <PhilanthropySection />
      <Footer />
    </div>
  );
};

export default Index;

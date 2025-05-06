
import React from 'react';
import Section from '@/components/Section';
import StatsDisplay from '@/components/StatsDisplay';
import AchievementsDisplay from '@/components/AchievementsDisplay';

const AchievementsSection = () => {
  return (
    <Section id="achievements" title="Career Achievements" className="bg-navy text-cream" titleClassName="text-cream">
      <StatsDisplay />

      <div className="bg-paris/80 rounded-lg p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-montserrat font-bold mb-6 text-gold">Grand Slam Timeline</h3>
        <AchievementsDisplay />
      </div>
    </Section>
  );
};

export default AchievementsSection;

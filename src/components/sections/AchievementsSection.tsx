
import React from 'react';
import Section from '@/components/Section';
import StatsDisplay from '@/components/StatsDisplay';
import TopAchievements from '@/components/TopAchievements';

const AchievementsSection = () => {
  return (
    <Section id="achievements" title="Career Achievements" className="bg-navy text-cream" titleClassName="text-cream">
      <StatsDisplay />
      <TopAchievements />
    </Section>
  );
};

export default AchievementsSection;

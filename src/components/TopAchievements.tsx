
import React from 'react';
import { Trophy, Award, Medal, Crown, Target, Calendar, Star, Shield, Heart } from 'lucide-react';

const TopAchievements = () => {
  const achievements = [
    {
      icon: Trophy,
      emoji: "🎾",
      number: "1",
      title: "14-Time French Open Champion (Roland Garros)",
      description: "Nadal holds the record for most titles at a single Grand Slam with 14 wins at Roland Garros (2005–2022). Nicknamed the 'King of Clay', his dominance on this surface is unparalleled."
    },
    {
      icon: Award,
      emoji: "🏆",
      number: "2",
      title: "22 Grand Slam Titles",
      description: "As of 2024, Nadal has won 22 Grand Slam singles titles: 14 × French Open, 4 × US Open, 2 × Wimbledon, 2 × Australian Open."
    },
    {
      icon: Medal,
      emoji: "🥇",
      number: "3",
      title: "Olympic Gold Medals",
      description: "2008 Beijing Olympics: Gold in Singles. 2016 Rio Olympics: Gold in Doubles (with Marc López)."
    },
    {
      icon: Crown,
      emoji: "🏅",
      number: "4",
      title: "Career Grand Slam",
      description: "Nadal is one of only a few players in history to win all four Grand Slam titles at least once (achieved by age 24)."
    },
    {
      icon: Shield,
      emoji: "💪",
      number: "5",
      title: "Davis Cup Champion (5 Titles)",
      description: "Helped Spain win the Davis Cup in 2004, 2008, 2009, 2011, and 2019. A passionate team player, often playing through injury."
    },
    {
      icon: Calendar,
      emoji: "🔢",
      number: "6",
      title: "Longest Consecutive Weeks in Top 10",
      description: "Nadal spent 912 consecutive weeks in the ATP Top 10 (2005–2023), a record in men's tennis."
    },
    {
      icon: Target,
      emoji: "🟢",
      number: "7",
      title: "92 ATP Singles Titles",
      description: "As of retirement talks in 2024–2025, Nadal has 92 career titles, including 36 ATP Masters 1000 wins."
    },
    {
      icon: Trophy,
      emoji: "🧱",
      number: "8",
      title: "Most Clay Court Titles in History",
      description: "63 clay court titles, the most in the Open Era. Undefeated in best-of-5 set matches on clay for over 12 years."
    },
    {
      icon: Star,
      emoji: "👑",
      number: "9",
      title: "World No. 1 Ranking (209 Weeks)",
      description: "Held the World No. 1 ranking for 209 weeks over his career. Finished as year-end No. 1 five times (2008, 2010, 2013, 2017, 2019)."
    },
    {
      icon: Heart,
      emoji: "💖",
      number: "10",
      title: "Revered Sportsmanship and Popularity",
      description: "Winner of the Stefan Edberg Sportsmanship Award (5 times). Known for humility, resilience, and respect—beloved worldwide, even outside tennis."
    }
  ];

  return (
    <div className="mt-16">
      <div className="bg-paris/80 rounded-lg p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-montserrat font-bold mb-8 text-gold text-center">
          Top 10 Career Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div key={achievement.number} className="bg-navy/40 rounded-lg p-6 border border-gold/20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="bg-clay rounded-full p-3 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-cream" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{achievement.emoji}</span>
                      <span className="text-gold font-bold text-lg">{achievement.number}.</span>
                    </div>
                    <h4 className="text-lg font-montserrat font-bold text-gold mb-2">
                      {achievement.title}
                    </h4>
                  </div>
                </div>
                <p className="text-cream/90 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopAchievements;

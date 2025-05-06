
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Trophy } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";

type Achievement = Tables<"achievements">;

const AchievementsDisplay = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('achievements')
          .select('*')
          .order('year', { ascending: false });

        if (error) {
          throw error;
        }

        setAchievements(data || []);
      } catch (err) {
        console.error("Error fetching achievements:", err);
        setError("Failed to load achievements");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Loading achievements...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (achievements.length === 0) {
    return <div className="text-center py-8">No achievements available.</div>;
  }

  return (
    <div className="space-y-8">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="flex flex-col md:flex-row gap-4 items-start">
          <div className="bg-clay rounded-full p-3 flex items-center justify-center flex-shrink-0">
            <Trophy className="w-6 h-6 text-cream" />
          </div>
          <div>
            <h4 className="text-lg font-montserrat font-bold text-gold">{achievement.title} ({achievement.year})</h4>
            <p className="text-cream opacity-90">
              {achievement.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsDisplay;

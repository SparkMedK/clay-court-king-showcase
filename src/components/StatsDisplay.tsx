
import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import StatCard from "@/components/StatCard";
import { Tables } from "@/integrations/supabase/types";

type Statistic = Tables<"statistics">;

const StatsDisplay = () => {
  const [stats, setStats] = useState<Statistic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('statistics')
          .select('*');

        if (error) {
          throw error;
        }

        setStats(data || []);
      } catch (err) {
        console.error("Error fetching statistics:", err);
        setError("Failed to load statistics");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Loading statistics...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (stats.length === 0) {
    return <div className="text-center py-8">No statistics available.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat) => (
        <StatCard 
          key={stat.id} 
          value={stat.value} 
          title={stat.title} 
          description={stat.description || undefined}
        />
      ))}
    </div>
  );
};

export default StatsDisplay;

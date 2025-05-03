
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  title: string;
  description?: string;
  className?: string;
  icon?: React.ReactNode;
}

const StatCard = ({ value, title, description, className, icon }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = Math.min(value, 999);
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      ref={ref}
      className={cn("stats-card flex flex-col items-center text-center", className)}
    >
      {icon && <div className="mb-2 text-gold text-3xl">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{isVisible ? count : 0}</div>
      <h3 className="text-lg font-montserrat font-bold mb-1">{title}</h3>
      {description && <p className="text-sm opacity-85">{description}</p>}
    </div>
  );
};

export default StatCard;

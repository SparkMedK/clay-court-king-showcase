
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section = ({ id, title, children, className, titleClassName }: SectionProps) => {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        <h2 className={cn("section-heading", titleClassName)}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

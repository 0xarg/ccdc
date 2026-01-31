"use client";
import { cn } from "@/lib/utils";
import { useTypewriter } from "@/hooks/use-typewriter";

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  backgroundImage?: string;
  className?: string;
}

export const PageHero = ({ breadcrumb, title, backgroundImage, className }: PageHeroProps) => {
  const { displayText, isComplete } = useTypewriter({ text: title, speed: 50 });

  return (
    <section className={cn("relative h-[40vh] min-h-[320px] flex items-end", className)}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary via-primary-dark to-primary" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pb-12">
        <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-3">
          {breadcrumb}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {displayText}
          {!isComplete && <span className="animate-pulse">|</span>}
        </h1>
      </div>
    </section>
  );
};

export default PageHero;

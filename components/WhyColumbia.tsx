"use client";
import { GraduationCap, Globe, Clock, PiggyBank } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import careerFocusedTraining from "../assets/career.png";
import culture from "../assets/culture.png";
import flexibility from "../assets/flexibility.png";
import affordability from "../assets/affordability.png";
import Image from "next/image";

// instead of icons we have to use images

const features = [
  {
    icon: careerFocusedTraining,
    title: "Career-Focused Training",
    description:
      "Columbia College's programs are taught by highly qualified instructors who focus on career-specific training, equipping students with the knowledge and skills employers seek.",
  },
  {
    icon: culture,
    title: "Culture",
    description:
      "With students from over 50 countries, Columbia College offers a rich, multicultural environment where diverse perspectives are celebrated and global connections are made every day.",
  },
  {
    icon: flexibility,
    title: "Flexibility",
    description:
      "We prioritize our students, accommodating their unique situations and lifestyles to help them achieve their goals.",
  },
  {
    icon: affordability,
    title: "Affordability",
    description:
      "Columbia College offers quality educational programs at competitive tuition rates, with a variety of financial aid options available.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "text-center group transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
      >     
        {/* Icon */}
        {/* Images should be rounded-full with no padding */}
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-secondary group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-90 group-hover:-rotate-3">
          <Image 
            src={feature.icon} 
            alt={feature.title} 
            width={150}
            height={150}
            className="rounded-full p-0 w-full h-full object-contain text-primary transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      {/* Content */}
      <h3 className="font-serif font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
        {feature.description}
      </p>
    </div>
  );
};

export const WhyColumbia = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Our Difference
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Why Columbia College DC
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyColumbia;

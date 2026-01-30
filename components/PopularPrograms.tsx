import { ArrowRight } from "lucide-react";
import { useScrollAnimation, useScrollZoom } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Dental Labs",
    description:
      "As the only program of its kind in the Washington DC Metropolitan area, the Associate of Applied Science in Dental Laboratory Technology prepares students for careers in dental labs.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=400&fit=crop",
  },
  {
    title: "Culinary Arts",
    description:
      "The Associate of Applied Science in Culinary Arts program offers hands-on training in culinary methods, kitchen management, and food service operations.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    title: "Cosmetology",
    description:
      "The Cosmetology Program prepares students for careers in hair design, nail artistry, and facial makeup application.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
  },
  {
    title: "Business Administration",
    description:
      "Our Business Administration program provides foundational knowledge in management, marketing, and entrepreneurship.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    title: "ESL Programs",
    description:
      "English as a Second Language programs designed to help international students achieve fluency and academic success.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
];

const ProgramCard = ({ program, index }: { program: typeof programs[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: imageRef, scale } = useScrollZoom(1, 1.1);

  return (
    <article
      ref={ref}
      className={cn(
        "group cursor-pointer transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div 
        ref={imageRef}
        className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 shadow-elegant"
      >
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: `scale(${scale})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Overlay Button */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="font-serif font-semibold text-xl mb-2 text-white group-hover:text-primary transition-colors duration-300">
        {program.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
        {program.description}
      </p>
    </article>
  );
};

export const PopularPrograms = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="section-padding bg-section-dark text-section-dark-foreground">
      <div className="container-wide">
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-14 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Explore Our Offerings
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Popular Programs
          </h2>
        </div>

        {/* Programs Grid - Clean 3-column layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.slice(0, 3).map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>

        {/* Second Row - Left aligned 2 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {programs.slice(3, 5).map((program, index) => (
            <ProgramCard key={index + 3} program={program} index={index + 3} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularPrograms;

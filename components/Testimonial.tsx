import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTypewriter } from "@/hooks/use-typewriter";
import { cn } from "@/lib/utils";
import gita from "../assets/gitaAkhgar.png";

const testimonials = [
  {
    quote:
      "I came here as a refugee and wanted to learn English. I studied English fully online at Columbia College because I needed to take care of my 4 kids. The grant I received from FAFSA and the scholarship from Columbia College allowed me to study at almost no cost. After graduating and getting a certificate, I landed my first job in the United States.",
    name: "Gita Akhgar",
    program: "ESL Graduate",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    quote:
      "Columbia College provided me with the skills and confidence I needed to pursue my dreams. The instructors are dedicated and the small class sizes meant I received personalized attention throughout my studies.",
    name: "Maria Santos",
    program: "Culinary Arts",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    quote:
      "The flexibility of Columbia College's programs allowed me to work while studying. The career services team helped me land an internship that turned into a full-time position right after graduation.",
    name: "Ahmed Hassan",
    program: "Business Administration",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
];

// TypewriterQuote component for individual testimonial quotes
const TypewriterQuote = ({ quote, isActive }: { quote: string; isActive: boolean }) => {
  const { displayText, isComplete } = useTypewriter({
    text: quote,
    speed: 25, // Fast typing speed
    delay: 300,
  });

  // Only show typewriter when slide is active
  if (!isActive) {
    return <span className="opacity-50">{quote}</span>;
  }

  return (
    <span>
      {displayText}
      {!isComplete && <span className="animate-pulse text-primary">|</span>}
    </span>
  );
};

export const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    setSlideKey((prev) => prev + 1); // Reset typewriter on slide change
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play with longer interval for reading
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 12000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-secondary/30 to-background overflow-hidden"
    >
      <div className="container-wide">
        <div 
          className={cn(
            "max-w-6xl mx-auto transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
              Student Stories
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Hear From Our Community
            </h2>
          </div>

          {/* Modern Carousel */}
          <div className="relative">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
                  >
                    <div className={cn(
                      "bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-border/50 transition-all duration-500",
                      selectedIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-70"
                    )}>
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-lg" />
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 relative min-h-[120px]">
                            <span className="text-primary text-5xl font-serif absolute -top-6 -left-2 opacity-20">"</span>
                            <TypewriterQuote 
                              key={`${index}-${slideKey}`}
                              quote={testimonial.quote} 
                              isActive={selectedIndex === index} 
                            />
                          </blockquote>
                          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 pt-4 border-t border-border/50">
                            <p className="font-serif font-semibold text-lg text-foreground">
                              {testimonial.name}
                            </p>
                            <span className="hidden md:block text-primary text-xl">•</span>
                            <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                              {testimonial.program}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Positioned on sides */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 -ml-2 md:ml-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 -mr-2 md:mr-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    selectedIndex === index
                      ? "bg-primary w-10"
                      : "bg-border w-2.5 hover:bg-primary/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


import { Users } from "lucide-react";
import { useScrollAnimation, useParallax } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export const LearningExperience = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: visualRef, offset } = useParallax(0.03);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-section-light overflow-hidden"
    >
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div 
            className={cn(
              "flex-1 text-center lg:text-left transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
              Learning Experience
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              ENHANCED
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              with Smaller Classes
            </p>
          </div>

          {/* Right - Visual */}
          <div 
            ref={visualRef}
            className={cn(
              "flex-1 flex flex-col items-center transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
            style={{ transform: `translateY(${-offset}px)` }}
          >
            {/* People Icons - animated on scroll */}
            <div className="flex items-end gap-2 mb-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col items-center transition-all duration-500 ",
                    i === 11 ? "text-primary" : "text-foreground"
                  )}
                  style={{ 
                    transitionDelay: `${i * 50}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)"
                  }}
                >
                  <div 
                    className={cn(
                      "w-4 h-4 rounded-full mb-1 transition-transform duration-300",
                      i === 11 ? "bg-primary scale-125" : "bg-foreground"
                    )} 
                  />
                  <Users 
                    className={cn(
                      "w-7 h-9 transition-all duration-300",
                      i === 11 ? "text-primary scale-110" : "text-foreground"
                    )} 
                  />
                </div>
              ))}
            </div>

            {/* Ratio Text */}
            <div 
              className={cn(
                "text-center transition-all duration-700 delay-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p className="text-primary font-medium text-lg md:text-xl">
                Average Student-to-Faculty ratio = 
                <span className="font-bold text-2xl md:text-3xl ml-2">12:1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningExperience;

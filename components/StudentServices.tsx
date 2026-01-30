import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation, useScrollZoom } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import studentServicesImage from "../assets/studentService.png";
import Image from "next/image";

export const StudentServices = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, scale } = useScrollZoom(1, 1.08);

  return (
    <section 
      ref={sectionRef}
      className="section-padding bg-section-light overflow-hidden"
    >
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div 
            className={cn(
              "flex-1 transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            <div 
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-elegant-lg"
            >
              <Image
                src={studentServicesImage}
                alt="Student Services"
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-700"
                style={{ transform: `scale(${scale})` }}
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div 
            className={cn(
              "flex-1 space-y-6 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <p className="text-primary font-medium tracking-wider uppercase text-sm">
              Support & Success
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Student Services
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Designed to ensure that Columbia College students have the
              opportunity to succeed through academic guidance and support,
              providing a comprehensive and variety of services and programs. At
              a student's request, the school can provide services such as
              assistance for disabled students, academic counseling, tutoring,
              faculty mentoring, and learning enhancement strategies.
            </p>
            <Button 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentServices;

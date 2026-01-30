import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import panelEvents from "../assets/panelEvent.png";
import onCampusJob from "../assets/onCampusJobs.png";
import guidedCareerAdvising from "../assets/guidedCareer.png";
import Image from "next/image";

const services = [
  {
    title: "Panel Events for Expert Job Advice",
    image: panelEvents,
  },
  {
    title: "On-campus Job Opportunities for Student Visa",
    image: onCampusJob,
  },
  {
    title: "Individually Guided Career Advising",
    image: guidedCareerAdvising,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className={cn(
        "text-center group transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-transparent group-hover:ring-primary/20 transition-all duration-500 group-hover:scale-105 shadow-elegant">
        <Image
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="font-medium  text-foreground group-hover:text-primary transition-colors duration-300 max-w-xs mx-auto">
        {service.title}
      </h3>
    </div>
  );
};

export const CareerServices = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            "text-center mb-12 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Your Future Career
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Career Services
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Students who complete programs successfully are well prepared to find
            jobs related to their respective fields of study. Our experienced
            career coordinators will work with students to find satisfactory
            employment through personalized support such as resume building and
            career counseling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-3 gap-10 mb-14">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <ArrowRight className="w-4 h-4 mr-2" />
            Alumni Success Stories
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base rounded-full transition-all duration-300"
          >
            <Search className="w-4 h-4 mr-2" />
            Search by Career Path
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareerServices;

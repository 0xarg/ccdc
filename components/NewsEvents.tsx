"use client";
import { ArrowRight, Calendar } from "lucide-react";
import { useScrollAnimation, useScrollZoom } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    date: { month: "MAR", day: "8" },
    title: "Daylight Savings Time Start",
    description: "Daylight savings time will start on March 8th, at 2am, set your clock forward 1h",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=300&fit=crop",
  },
  {
    date: { month: "SEPT", day: "11" },
    title: "Federal Student Aid (FAFSA®) Deadline for 2026 Fall B",
    description: "Deadline to apply for the Federal Student Aid (FAFSA®) for 2026 Fall B Session.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
  },
  {
    date: { month: "NOV", day: "1" },
    title: "2026 Daylight Savings Time Ends",
    description: "Daylight savings time will end on November 1st, at 2am, set your clock back 1h.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=300&fit=crop",
  },
];

const NewsCard = ({ item, index }: { item: typeof newsItems[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: imageRef, scale } = useScrollZoom(1, 1.08);

  return (
    <article
      ref={ref}
      className={cn(
        "group bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div ref={imageRef} className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: `scale(${scale})` }}
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-primary text-white text-center px-4 py-2 rounded-lg shadow-lg">
          <div className="text-xs font-semibold tracking-wide">{item.date.month}</div>
          <div className="text-2xl font-bold">{item.date.day}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif font-semibold text-lg mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {item.description}
        </p>

        {/* Link */}
        <div className="flex justify-end">
          <button className="w-10 h-10 rounded-full bg-secondary text-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export const NewsEvents = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="section-padding bg-section-light">
      <div className="container-wide">
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4 transition-all duration-700",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div>
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
              Stay Updated
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              News & Events
            </h2>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-full transition-all duration-300"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

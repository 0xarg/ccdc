import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";


interface Partner {
  name: string;
  logo?: string;
}

interface PartnerGridProps {
  partners: Partner[];
  className?: string;
}

export const PartnerGrid = ({ partners, className }: PartnerGridProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6",
        className
      )}
    >
      {partners.map((partner, index) => (
        <div
          key={partner.name}
          className={cn(
            "bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm border border-border",
            "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
            "opacity-0 translate-y-4",
            isVisible && "fade-up"
          )}
          style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
        >
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-16 h-16 object-contain mb-3"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-3 text-primary font-bold text-xl">
              {partner.name.charAt(0)}
            </div>
          )}
          <p className="text-xs font-medium text-muted-foreground leading-tight">
            {partner.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PartnerGrid;

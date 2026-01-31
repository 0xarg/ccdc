import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white/90",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;

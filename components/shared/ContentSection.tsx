"use client";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ReactNode } from "react";

interface ContentSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "light" | "dark" | "muted";
  className?: string;
}

export const ContentSection = ({
  id,
  title,
  subtitle,
  children,
  variant = "light",
  className,
}: ContentSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const bgClasses = {
    light: "bg-background",
    dark: "bg-[hsl(var(--section-dark))] text-[hsl(var(--section-dark-foreground))]",
    muted: "bg-secondary",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "section-padding",
        bgClasses[variant],
        className
      )}
    >
      <div className="container-wide">
        <div
          className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={cn(
                  "text-lg max-w-3xl mx-auto",
                  variant === "dark" ? "text-white/80" : "text-muted-foreground"
                )}>
                  {subtitle}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

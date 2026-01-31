"use client";
import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

// Hook for parallax scroll effects
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > 0) {
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}

// Hook for image zoom on scroll
export function useScrollZoom(minScale: number = 1, maxScale: number = 1.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(minScale);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the element is visible
      const visibleTop = Math.max(0, viewportHeight - rect.top);
      const visibleBottom = Math.max(0, rect.bottom);
      const visibleHeight = Math.min(visibleTop, visibleBottom, rect.height);
      const visibilityRatio = visibleHeight / rect.height;
      
      // Scale based on visibility (centered = max scale)
      const centerOffset = Math.abs((rect.top + rect.height / 2) - viewportHeight / 2);
      const normalizedOffset = 1 - Math.min(centerOffset / (viewportHeight / 2), 1);
      const newScale = minScale + (maxScale - minScale) * normalizedOffset;
      
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [minScale, maxScale]);

  return { ref, scale };
}

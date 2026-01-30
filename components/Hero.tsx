"use client";
import { Play, Pause, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRotatingTypewriter } from "@/hooks/use-typewriter";
const HERO_VIDEO_URL =
  "https://pub-fb6fab5030804954ab86da323c27d523.r2.dev/ccdc_draft_1_lowbitrate_1080.mp4";

// Poster: inline SVG gradient matching the overlay – shows instantly while video loads
const HERO_POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230a0a0a'/%3E%3Cstop offset='50%25' stop-color='%23121212'/%3E%3Cstop offset='100%25' stop-color='%23080808'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='1920' height='1080'/%3E%3C/svg%3E";
export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const subtitleText = useRotatingTypewriter({
    phrases: [
      "Associate Degrees for Career Success",
      "Vocational Certificates for Real-World Skills",
      "ESL Programs for a Global Community",
    ],
    typingSpeed: 60,
    deletingSpeed: 30,
    pauseDuration: 2500,
  });

  const placeholderText = useRotatingTypewriter({
    phrases: [
      "Search for Business programs...",
      "Explore Healthcare certificates...",
      "Find ESL courses...",
      "Discover IT programs...",
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          poster={HERO_POSTER}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover bg-[hsl(0,0%,8%)]"
        />
        {/* Smooth gradient transition to next dark section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[hsl(0,0%,8%)]" />
      </div>

      {/* Content - Centered with tighter typography */}
      <div className="relative z-10 container-wide text-center pt-28 pb-28">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Bold Condensed Headline - tighter spacing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-[-0.02em] uppercase animate-fade-in">
            YOUR FUTURE
            <br />
            <span className="text-primary">STARTS HERE</span>
          </h1>

          {/* Typewriter Subheadline */}
          <div 
            className="h-8 flex items-center justify-center animate-fade-in"
            style={{ animationDelay: '0.15s' }}
          >
            <p className="text-base md:text-lg text-white/85 font-semibold">
              {subtitleText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Program Search Bar - Prettified */}
          <div 
            className="max-w-lg mx-auto animate-fade-in pt-4"
            style={{ animationDelay: '0.3s' }}
          >
            <form onSubmit={handleSearch} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/95 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-white/20">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder=""
                  className="w-full px-5 py-4 pr-14 bg-transparent text-foreground font-semibold text-base focus:outline-none"
                />
                {!searchQuery && (
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-base pointer-events-none">
                    {placeholderText}
                    <span className="animate-pulse">|</span>
                  </span>
                )}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* CTA Button - Prettified */}
          <div 
            className="pt-4 animate-fade-in"
            style={{ animationDelay: '0.45s' }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold text-base rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-primary-dark/20"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      {/* Video Control - Bottom right, higher z-index */}
      <button
        onClick={togglePlay}
        className="absolute bottom-24 right-8 z-30 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full text-white/90 hover:text-white hover:bg-black/70 transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>
    </section>
  );
};

export default Hero;

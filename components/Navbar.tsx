"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../assets/logo.svg";

interface SubItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  href?: string;
  items?: SubItem[];
}

const navItems: NavItem[] = [
  {
    title: "About",
    href: "/about",
    items: [
      { title: "Mission & Vision", href: "/about#mission-vision" },
      { title: "Welcome Letter", href: "/about#welcome-letter" },
      { title: "History", href: "/about#history" },
      { title: "Accreditation & Affiliations", href: "/about/accreditation" },
      { title: "Memorandum of Understanding", href: "/about/mou" },
    ],
  },
  {
    title: "Programs",
    href: "/programs",
    items: [
      { title: "Program Finder", href: "/programs/finder" },
      { title: "Global Education Programs", href: "/programs/global-education" },
      { title: "Online Learning", href: "/programs/online-learning" },
      { title: "Faculty", href: "/programs/faculty" },
    ],
  },
  {
    title: "Admissions & Aid",
    items: [
      { title: "How to Apply", href: "#" },
      { title: "Tuition & Costs", href: "#" },
      { title: "Financial Aid", href: "#" },
      { title: "Scholarships", href: "#" },
      { title: "FAFSA FAQ", href: "#" },
    ],
  },
  {
    title: "Student Life",
    items: [
      { title: "Campus Life", href: "#" },
      { title: "Student Organizations", href: "#" },
      { title: "International Students", href: "#" },
      { title: "Veterans & Military", href: "#" },
      { title: "Career Services", href: "#" },
    ],
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Handle hash scrolling after navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);

  const handleNavClick = (href: string) => {
    const hasHash = href.includes('#');
    if (hasHash) {
      const [path, hash] = href.split('#');
      const targetPath = path || pathname;
      
      // If we're already on the target page, just scroll
      if (pathname === targetPath || (targetPath === '/about' && pathname === '/about')) {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - navbarHeight, behavior: 'smooth' });
        }
      } else {
        // Navigate to the page with hash
        router.push(href);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileItem(null);
  }, [pathname]);

  const isActiveRoute = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar */}
      <div
        className={cn(
          "transition-all duration-500",
          isScrolled
            ? "bg-white shadow-lg py-2"
            : "bg-black/20 backdrop-blur-sm py-4"
        )}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300",
                isScrolled ? "" : ""
              )}>
                <Image src={logo} alt="Columbia College DC"  className="w-full h-full object-contain" />
              </div>
              <div className="hidden sm:block">
                <span className={cn(
                  "font-serif text-xl font-bold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-foreground" : "text-white"
                )}>
                  Columbia College DC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.title)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Nav Item - Link or Button */}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "h-12 px-4 text-sm font-medium transition-all duration-300 flex items-center gap-1 relative group",
                        isScrolled 
                            ? "text-foreground" 
                          : "text-white/90",
                        (hoveredItem === item.title || isActiveRoute(item.href)) && "!text-primary"
                      )}
                    >
                      <span className="relative">
                        {item.title}
                        <span className={cn(
                          "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                          (hoveredItem === item.title || isActiveRoute(item.href)) ? "scale-x-100" : "scale-x-0"
                        )} />
                      </span>
                      {item.items && item.items.length > 0 && (
                        <ChevronDown 
                          className={cn(
                            "w-3 h-3 transition-transform duration-300",
                            hoveredItem === item.title && "rotate-180"
                          )} 
                        />
                      )}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        "h-12 px-4 text-sm font-medium transition-all duration-300 flex items-center gap-1 relative group",
                        isScrolled 
                          ? "text-foreground" 
                          : "text-white/90",
                        hoveredItem === item.title && "!text-primary"
                      )}
                    >
                      <span className="relative">
                        {item.title}
                        <span className={cn(
                          "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300",
                          hoveredItem === item.title ? "scale-x-100" : "scale-x-0"
                        )} />
                      </span>
                      {item.items && item.items.length > 0 && (
                        <ChevronDown 
                          className={cn(
                            "w-3 h-3 transition-transform duration-300",
                            hoveredItem === item.title && "rotate-180"
                          )} 
                        />
                      )}
                    </button>
                  )}
                  
                  {/* Dropdown - positioned under the specific link */}
                  {item.items && item.items.length > 0 && (
                    <div className={cn(
                      "absolute top-full left-0 pt-2 transition-all duration-300",
                      hoveredItem === item.title 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible -translate-y-2"
                    )}>
                      <div className="w-64 bg-white/95 backdrop-blur-xl border-t-4 border-primary shadow-2xl rounded-lg overflow-hidden">
                        <ul className="py-2">
                          {item.items.map((subItem) => {
                            const isHashLink = subItem.href.includes('#');
                            return (
                              <li key={subItem.title}>
                                {isHashLink ? (
                                  <button
                                    onClick={() => {
                                      handleNavClick(subItem.href);
                                      setHoveredItem(null);
                                    }}
                                    className={cn(
                                      "block w-full text-left py-3 px-5 text-sm text-foreground transition-all duration-200 font-medium relative group/link",
                                      "hover:text-primary hover:bg-primary/5"
                                    )}
                                  >
                                    <span className="relative">
                                      {subItem.title}
                                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover/link:w-full" />
                                    </span>
                                  </button>
                                ) : (
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block py-3 px-5 text-sm text-foreground transition-all duration-200 font-medium relative group/link",
                                      "hover:text-primary hover:bg-primary/5",
                                      isActiveRoute(subItem.href) && "text-primary bg-primary/5"
                                    )}
                                  >
                                    <span className="relative">
                                      {subItem.title}
                                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover/link:w-full" />
                                    </span>
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Research link */}
              <Link
                href="#"
                className={cn(
                  "h-12 px-4 text-sm font-medium transition-all duration-300 flex items-center relative group",
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white/90 hover:text-primary"
                )}
              >
                <span className="relative">
                  Research
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
                </span>
              </Link>

              {/* CTA Button */}
              <Button
                className={cn(
                  "ml-4 font-semibold transition-all duration-300 hover:scale-105 rounded-full",
                  isScrolled 
                    ? "bg-primary text-white hover:bg-primary-dark" 
                    : "bg-white text-primary hover:bg-white/90"
                )}
              >
                Apply Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg animate-fade-in">
          <div className="container-wide py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.title}>
                <div className="flex items-center">
                  {item.href ? (
                    <Link
                    href={item.href}
                      className={cn(
                        "flex-1 py-3 font-medium transition-colors duration-200",
                        isActiveRoute(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <span className="flex-1 py-3 font-medium text-foreground">
                      {item.title}
                    </span>
                  )}
                  {item.items && item.items.length > 0 && (
                    <button
                      onClick={() => setOpenMobileItem(openMobileItem === item.title ? null : item.title)}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          openMobileItem === item.title && "rotate-180"
                        )} 
                      />
                    </button>
                  )}
                </div>
                {item.items && openMobileItem === item.title && (
                  <div className="pl-4 pb-2 space-y-1 animate-fade-in">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className={cn(
                          "block py-2 transition-colors duration-200",
                          isActiveRoute(subItem.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary-dark text-white rounded-full">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

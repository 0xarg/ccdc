"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SubNavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

interface SubNavigationProps {
  items: SubNavItem[];
}

export const SubNavigation = ({ items }: SubNavigationProps) => {
  const pathname = usePathname();

  return (
    <div className="bg-primary">
      <div className="container-wide">
        <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
          {items.map((item) => {
            const isActive = item.isAnchor 
              ? false 
              : pathname === item.href;

            return item.isAnchor ? (
              < Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium whitespace-nowrap rounded transition-all duration-300",
                  "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium whitespace-nowrap rounded transition-all duration-300",
                  isActive
                    ? "bg-white/20 text-white underline underline-offset-4"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default SubNavigation;

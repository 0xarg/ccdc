"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

interface NavLinkCompatProps extends Omit<LinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  isActive?: boolean;
  isPending?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, href, isActive, isPending, ...props }, ref) => {
    return (
        <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName, isPending && pendingClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

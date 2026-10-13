"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

export function isActivePath(pathname: string | null, href: string) {
  return pathname !== null && (pathname === href || pathname.startsWith(`${href}/`));
}

type NavLinksProps = {
  links: NavLink[];
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

/** Plain list of nav links; highlights the link matching `pathname`. */
export function NavLinkList({ links, pathname, className, linkClassName, onNavigate }: NavLinksProps & { pathname: string | null }) {
  return (
    <ul className={className}>
      {links.map((link) => {
        const active = isActivePath(pathname, link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "rounded-sm text-nav transition-colors focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-4 focus-visible:outline-none",
                active ? "font-bold text-ink" : "text-muted hover:text-ink",
                linkClassName,
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Nav links with the current page highlighted.
 * Reads the URL, so render it inside <Suspense> with a <NavLinkList pathname={null} /> fallback.
 */
export function NavLinks(props: NavLinksProps) {
  const pathname = usePathname();
  return <NavLinkList {...props} pathname={pathname} />;
}

"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModalButton } from "@/components/ui/ModalButton";
import type { ModalCta, NavLink } from "@/types";
import { NavLinks } from "./NavLinks";

/** Hamburger + slide-down menu, shown below 1024px. */
export function MobileNav({
  links,
  cta,
  menuLabel,
  closeMenuLabel,
}: {
  links: NavLink[];
  cta: ModalCta;
  menuLabel: string;
  closeMenuLabel: string;
}) {
  const pathname = usePathname();
  // Remember which page the menu was opened on, so it closes by itself after navigating.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const close = () => setOpenOn(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? closeMenuLabel : menuLabel}
        onClick={() => setOpenOn(open ? null : pathname)}
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-pill text-ink hover:bg-field focus-visible:ring-2 focus-visible:ring-pink focus-visible:outline-none"
      >
        {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-divider bg-surface shadow-elevated motion-safe:animate-fade-in"
        >
          <nav aria-label={menuLabel} className="mx-auto max-w-[calc(1296px+3rem)] px-4 pt-2 pb-6 sm:px-6">
            <NavLinks
              links={links}
              onNavigate={close}
              className="flex flex-col divide-y divide-divider"
              linkClassName="block py-4 text-lg"
            />
            <ModalButton modal={cta.modal} preset={cta.preset} onClick={close} className="mt-4 w-full">
              {cta.label}
            </ModalButton>
          </nav>
        </div>
      )}
    </div>
  );
}

import { Suspense } from "react";
import { ModalButton } from "@/components/ui/ModalButton";
import { header } from "@/content/nav";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLinkList, NavLinks } from "./NavLinks";

/** Sticky site header: logo, centered nav, "Free consultation" button. */
export function Header() {
  const { links, cta, navLabel, menuLabel, closeMenuLabel } = header;
  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-surface">
      <Container className="relative grid h-[76px] grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
        <Logo priority />

        <nav aria-label={navLabel} className="hidden lg:block">
          {/* The active link depends on the URL; until it's known, show the links unhighlighted. */}
          <Suspense fallback={<NavLinkList links={links} pathname={null} className="flex items-center gap-7" />}>
            <NavLinks links={links} className="flex items-center gap-7" />
          </Suspense>
        </nav>

        <div className="flex justify-end">
          <ModalButton
            modal={cta.modal}
            preset={cta.preset}
            variant="outline"
            size="md"
            className="hidden px-6 lg:inline-flex"
          >
            {cta.label}
          </ModalButton>
          <Suspense fallback={<span className="size-11 lg:hidden" />}>
            <MobileNav links={links} cta={cta} menuLabel={menuLabel} closeMenuLabel={closeMenuLabel} />
          </Suspense>
        </div>
      </Container>
    </header>
  );
}

import Link from "next/link";
import { ModalButton } from "@/components/ui/ModalButton";
import { footer } from "@/content/nav";
import { site } from "@/content/site";
import type { NavLink } from "@/types";
import { Logo } from "./Logo";
import { InstagramIcon, XIcon } from "./SocialIcons";

const focusRing = "rounded-sm focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:outline-none";

function LinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <h2 className="text-overline text-muted uppercase">{title}</h2>
      <ul className="mt-8 flex flex-col gap-[18px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={`text-lg leading-none text-ink hover:text-pink ${focusRing}`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const socialLinks = [
  { ...site.social.instagram, Icon: InstagramIcon },
  { ...site.social.x, Icon: XIcon },
];

/** The white card at the top of the footer: logo, link columns, contact + cutoff. */
export function FooterCard() {
  const { information, menu, support, cta, contact, cutoff } = footer;
  return (
    <div className="grid gap-10 rounded-xl bg-surface p-6 sm:grid-cols-2 sm:p-10 lg:min-h-[444px] lg:grid-cols-[1.27fr_1fr_1fr_auto] lg:gap-0 xl:grid-cols-[341px_269px_1fr_auto]">
      {/* Brand */}
      <div className="flex flex-col justify-between gap-8 sm:col-span-2 lg:col-span-1 lg:pr-8">
        <div className="flex flex-col items-start gap-4">
          <Logo width={250} />
          <p className="max-w-[298px] rounded-pill bg-success-tint px-4 py-1.5 text-small font-medium text-muted">
            {footer.tagline}
          </p>
        </div>
        <ul className="flex gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-pill bg-ink text-white transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Information + customer support */}
      <div className="flex flex-col justify-between gap-8 lg:pt-2">
        <LinkColumn title={information.title} links={information.links} />
        <p className="text-small font-semibold text-ink">
          <span className="block font-bold">{support.title}</span>
          <a href={support.phone.href} className={`hover:text-pink ${focusRing}`}>
            {support.phone.display}
          </a>
        </p>
      </div>

      {/* Menu */}
      <div className="lg:pt-2">
        <LinkColumn title={menu.title} links={menu.links} />
      </div>

      {/* Contact + cutoff */}
      <div className="flex flex-col justify-between gap-8 sm:col-span-2 sm:items-end lg:col-span-1">
        <div className="flex flex-col gap-3 text-small font-semibold text-ink sm:items-end sm:text-right">
          <ModalButton modal={cta.modal} variant="dark" className="mb-3 self-start sm:self-end">
            {cta.label}
          </ModalButton>
          <a href={contact.phone.href} className={`hover:text-pink ${focusRing}`}>
            {contact.phone.display}
          </a>
          <a href={`mailto:${contact.email}`} className={`hover:text-pink ${focusRing}`}>
            {contact.email}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-4xl leading-none font-bold tracking-tight text-ink">{cutoff.value}</p>
          <span aria-hidden className="h-12 w-px rotate-[20deg] bg-border" />
          <p className="text-[13px] leading-[21px] font-semibold text-ink">
            {cutoff.label.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

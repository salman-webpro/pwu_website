import { ArrowRight } from "lucide-react";
import { cacheLife } from "next/cache";
import Link from "next/link";
import { BlurBlob } from "@/components/decor/BlurBlob";
import { footer } from "@/content/nav";
import { FooterCard } from "./FooterCard";

// Cached so the static pages can show the current year without becoming dynamic.
async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

/** Site footer: white card, then a dark band with colored glows and the email link. */
export async function Footer() {
  const { bottom, copyright, legalLinks } = footer;
  const year = await getCurrentYear();

  return (
    <footer className="relative isolate overflow-hidden bg-footer pt-10">
      <BlurBlob className="bottom-[-140px] -left-16 -z-10 size-[300px] bg-blob-blue/70 sm:size-[520px]" />
      <BlurBlob className="bottom-0 left-[36%] -z-10 hidden size-[380px] bg-blob-amber/70 sm:block" />
      <BlurBlob className="right-[10%] bottom-[20px] -z-10 size-[300px] bg-blob-pink/70 sm:size-[440px]" />
      <BlurBlob className="top-[280px] -right-24 -z-10 hidden size-[360px] bg-blob-pink/40 lg:block" />

      <div className="mx-auto max-w-[calc(1200px+2rem)] px-4">
        <FooterCard />
      </div>

      <div className="mx-auto max-w-[calc(1150px+2rem)] px-4 pt-14 pb-8 lg:pt-[60px]">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_555px]">
          <h2 className="max-w-[420px] text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-white lg:text-[56px]">
            {bottom.title}
          </h2>
          <div>
            <p className="text-body text-muted-on-dark">{bottom.body}</p>
            <a
              href={`mailto:${bottom.email}`}
              className="mt-4 flex h-[72px] items-center justify-between gap-4 rounded-md border border-white/20 bg-white/5 px-5 text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-pink focus-visible:outline-none"
            >
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className="text-[11px] leading-none font-medium tracking-[0.04em] text-white/80 uppercase">
                  {bottom.emailLabel}
                </span>
                <span className="truncate text-lg leading-none sm:text-xl">{bottom.email}</span>
              </span>
              <ArrowRight aria-hidden className="size-5 shrink-0" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 text-small text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {copyright.legalName}. {copyright.suffix}
          </p>
          <ul className="flex items-center gap-1.5">
            {legalLinks.map((link, i) => (
              <li key={link.href} className="flex items-center gap-1.5">
                {i > 0 && <span aria-hidden>·</span>}
                <Link href={link.href} className="rounded-sm hover:text-white focus-visible:ring-2 focus-visible:ring-pink focus-visible:outline-none">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

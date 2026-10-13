import { BlurBlob } from "@/components/decor/BlurBlob";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types";
import { SectionHeading } from "./SectionHeading";

/** Full-width dark navy band with 4 big-number stat cards ("Business Memory"). */
export function StatsBand({
  id,
  title,
  subtitle,
  stats,
  className,
}: {
  id?: string;
  title: string;
  subtitle: string;
  stats: Stat[];
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative isolate overflow-hidden bg-navy py-16 lg:py-[88px]", className)}>
      <BlurBlob className="-top-48 -right-24 -z-10 size-[520px] bg-magenta/35" />
      <BlurBlob className="-bottom-56 -left-32 -z-10 size-[460px] bg-purple-glow/50" />

      <Container>
        <SectionHeading title={title} subtitle={subtitle} tone="dark" />
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="rounded-lg border border-white/10 bg-navy-card px-6 pt-9 pb-7 lg:min-h-[177px]">
              <p className="text-stat-dark text-stat">{stat.value}</p>
              <p className="mt-6 text-[15px] leading-[23px] text-muted-on-dark">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

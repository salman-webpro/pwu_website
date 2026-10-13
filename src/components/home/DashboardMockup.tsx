import { BlurBlob } from "@/components/decor/BlurBlob";
import { IconSquare } from "@/components/ui/IconSquare";
import type { dashboardMockup } from "@/content/home";
import { icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types";

type MockupData = typeof dashboardMockup;

/** Small white card floating over the mockup frame. */
function FloatingBadge({
  icon,
  tone,
  title,
  body,
  className,
}: {
  icon: IconName;
  tone: "pink-tint" | "green-tint";
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 hidden items-center gap-2.5 rounded-[12px] bg-surface px-3.5 py-2.5 shadow-elevated sm:flex motion-safe:animate-float",
        className,
      )}
    >
      <IconSquare icon={icon} tone={tone} size={32} />
      <div>
        <p className="text-[13px] leading-tight font-bold text-ink">{title}</p>
        <p className="mt-0.5 text-[11px] leading-tight tracking-wide text-muted">{body}</p>
      </div>
    </div>
  );
}

/** Pure HTML/CSS illustration of the client dashboard (Home hero, right side). */
export function DashboardMockup({ data, className }: { data: MockupData; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[577px]", className)}>
      <p className="sr-only">{data.srLabel}</p>
      <div aria-hidden className="relative">
        <BlurBlob className="inset-6 bg-lavender/60" />

        <div className="relative flex overflow-hidden rounded-[16px] bg-surface p-[3px] shadow-elevated sm:min-h-[477px]">
          {/* Sidebar */}
          <div className="hidden w-[34%] shrink-0 rounded-l-[13px] bg-ink-deep p-3 sm:block">
            <p className="text-[12px] leading-[18px] font-bold text-white">
              {data.org.initials} {data.org.name}
            </p>
            <ul className="mt-5 flex flex-col gap-1.5">
              {data.nav.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <li
                    key={item.label}
                    className={cn(
                      "flex h-9 items-center gap-2 rounded-[6px] px-2.5 text-[13px] whitespace-nowrap",
                      item.active ? "bg-pink font-semibold text-white" : "text-white/85",
                    )}
                  >
                    <Icon className="size-3 shrink-0" strokeWidth={2} />
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Main panel */}
          <div className="min-w-0 flex-1 px-4 pt-5 pb-4">
            <p className="text-[22px] leading-tight font-bold text-pink">{data.title}</p>
            <p className="mt-1.5 text-[13px] leading-5 text-muted">{data.intro}</p>
            <p className="mt-2.5 rounded-[6px] bg-pink-tint px-2 py-1.5 text-[11px] leading-[15px] text-pink">
              {data.alert}
            </p>

            <div className="mt-2.5 grid grid-cols-2 gap-2.5">
              {data.stats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-border bg-surface p-2.5">
                  <p className="text-[12px] leading-tight font-medium text-ink uppercase sm:text-[13px]">{stat.label}</p>
                  <p className="mt-1.5 text-xl leading-none font-bold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-2.5 rounded-[8px] border border-border bg-surface px-2.5 pt-2.5 pb-1">
              <p className="pb-1.5 text-[13px] font-bold text-ink">{data.table.title}</p>
              <ul className="text-[13px] text-ink">
                {data.table.rows.map((row) => (
                  <li key={row.name} className="flex justify-between border-t border-border py-2">
                    <span>{row.name}</span>
                    <span>{row.qty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <FloatingBadge
          icon="RefreshCw"
          tone="pink-tint"
          {...data.badges.reorder}
          className="-top-5 -right-4"
        />
        <FloatingBadge
          icon="CircleCheck"
          tone="green-tint"
          {...data.badges.proof}
          className="bottom-7 -left-8 [animation-delay:-2s]"
        />
      </div>
    </div>
  );
}

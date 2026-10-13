import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { BlurBlob } from "@/components/decor/BlurBlob";
import { HandDrawnCircle } from "@/components/decor/HandDrawnCircle";
import { Squiggle } from "@/components/decor/Squiggle";
import { Container } from "@/components/layout/Container";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GradientText } from "@/components/ui/GradientText";
import { IconSquare } from "@/components/ui/IconSquare";
import { Input } from "@/components/ui/Input";
import { NumberBadge } from "@/components/ui/NumberBadge";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { ChoiceDemos, ModalDemos, ProgressDemos } from "./InteractiveDemos";

// Dev-only reference page for the design tokens and UI primitives.
// Labels here are internal, so the "no copy in components" rule doesn't apply.

const colorGroups: { title: string; tokens: string[] }[] = [
  {
    title: "Core",
    tokens: ["ink", "ink-deep", "navy", "navy-card", "body", "muted", "muted-on-dark", "bg", "surface", "field", "border", "divider", "footer"],
  },
  {
    title: "Brand accents",
    tokens: ["coral", "pink", "magenta", "stat", "orange", "pink-tint", "error", "error-tint", "success", "success-tint"],
  },
  { title: "Decorative", tokens: ["squiggle", "tile", "blob-blue", "blob-amber", "blob-pink"] },
];

const gradients = [
  { name: "gradient-brand", className: "bg-gradient-brand" },
  { name: "gradient-hero", className: "bg-gradient-hero" },
  { name: "gradient-ink-panel", className: "bg-gradient-ink-panel" },
];

const typeScale = [
  { name: "display-xl", className: "text-display-xl" },
  { name: "display-l", className: "text-display-l" },
  { name: "h2", className: "text-h2" },
  { name: "big-word", className: "text-big-word text-pink" },
  { name: "stat-dark", className: "text-stat-dark text-stat" },
  { name: "stat-light", className: "text-stat-light" },
  { name: "h3", className: "text-h3" },
  { name: "lead", className: "text-lead text-body" },
  { name: "body", className: "text-body text-muted" },
  { name: "small", className: "text-small text-muted" },
  { name: "eyebrow", className: "text-eyebrow text-pink" },
  { name: "overline", className: "text-overline uppercase text-muted" },
  { name: "nav", className: "text-nav text-muted" },
  { name: "script", className: "font-script text-5xl text-orange" },
];

const variants: ButtonVariant[] = ["primary", "secondary", "outline", "dark", "solid-pink"];
const sizes: ButtonSize[] = ["sm", "md", "lg"];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-h2">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <Container className="space-y-20 py-16">
      <h1 className="text-display-l">Styleguide</h1>

      <Section title="Colors">
        {colorGroups.map((group) => (
          <div key={group.title} className="space-y-3">
            <h3 className="text-h3">{group.title}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
              {group.tokens.map((token) => (
                <div key={token} className="overflow-hidden rounded-md border border-border bg-surface">
                  <div className="h-16" style={{ background: `var(--color-${token})` }} />
                  <p className="p-2 text-small">{token}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="grid gap-4 sm:grid-cols-3">
          {gradients.map((g) => (
            <div key={g.name} className="overflow-hidden rounded-md border border-border bg-surface">
              <div className={`h-20 ${g.className}`} />
              <p className="p-2 text-small">{g.name}</p>
            </div>
          ))}
        </div>
        <p className="text-gradient-brand text-h2">Gradient text: Reorder it forever.</p>
      </Section>

      <Section title="Type scale">
        <div className="space-y-6">
          {typeScale.map((t) => (
            <div key={t.name} className="flex flex-col gap-1 border-b border-border pb-4">
              <span className="text-small text-muted">{t.name}</span>
              <span className={t.className}>Approve once, reorder forever</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radii & shadows">
        <div className="flex flex-wrap gap-6">
          {["md", "lg", "modal", "xl", "hero"].map((r) => (
            <div key={r} className="flex size-32 items-end border border-border bg-surface p-3 text-small" style={{ borderRadius: `var(--radius-${r})` }}>
              {r}
            </div>
          ))}
          <div className="flex size-32 items-end rounded-lg border border-border bg-surface p-3 text-small shadow-card">shadow-card</div>
          <div className="flex size-32 items-end rounded-lg bg-surface p-3 text-small shadow-elevated">shadow-elevated</div>
          <div className="flex size-32 items-end rounded-tile bg-tile p-3 text-small shadow-tile">shadow-tile</div>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="space-y-6">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-wrap items-center gap-4">
              <span className="w-28 text-small text-muted">{variant}</span>
              {sizes.map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {size}
                </Button>
              ))}
              <Button variant={variant}>
                With icon <ArrowRight aria-hidden className="size-4" />
              </Button>
              <Button variant={variant} disabled>
                Disabled
              </Button>
              <Button variant={variant} loading>
                Loading
              </Button>
              <Button variant={variant} href="/styleguide">
                As link
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Display primitives">
        <div className="flex flex-wrap items-center gap-6">
          <Eyebrow>How it works</Eyebrow>
          <NumberBadge n={1} />
          <NumberBadge n={2} />
          <GradientText className="text-h2">print specialist.</GradientText>
          <IconSquare icon="File" tone="light" className="border border-border" />
          <IconSquare icon="Layers" tone="gradient" />
          <IconSquare icon="Clock" tone="ink" size={34} />
          <IconSquare icon="RefreshCw" tone="pink-tint" size={36} />
          <IconSquare icon="CircleCheck" tone="green-tint" size={36} />
        </div>
        <ul className="flex flex-wrap gap-3">
          <Chip>Dental and medical offices</Chip>
          <Chip>Restaurants and cafes</Chip>
          <Chip>Agencies</Chip>
        </ul>
        <Card className="max-w-sm">
          <h3 className="text-h3">Card title</h3>
          <p className="mt-2 text-body text-muted">Card body text in the muted color.</p>
        </Card>
      </Section>

      <Section title="Form fields">
        <div className="grid max-w-[960px] gap-6 sm:grid-cols-2">
          <Input label="Name" autoComplete="name" />
          <Input label="Phone" type="tel" placeholder="+1 310 000 0000" />
          <Input label="Work email" error="Add a valid work email" defaultValue="not-an-email" />
          <Input label="Disabled" disabled defaultValue="Can't edit" />
          <Select label="What is it about?" options={[{ value: "new-quote", label: "New Quote" }, { value: "reorder", label: "Reorder" }]} />
          <Select label="Products you print" error="Choose a product" options={[{ value: "", label: "Choose…" }]} />
          <Textarea label="Message" hint="At least 10 characters." wrapperClassName="sm:col-span-2" />
        </div>
      </Section>

      <Section title="Choice options & progress">
        <ChoiceDemos />
        <ProgressDemos />
      </Section>

      <Section title="Modals">
        <ModalDemos />
      </Section>

      <Section title="Decor">
        <div className="relative h-72 rounded-xl border border-border bg-surface">
          <Squiggle variant="right" className="top-6 left-8 w-[142px]" />
          <Squiggle variant="left" className="top-2 left-64 w-[141px]" />
          <Squiggle variant="right" className="top-6 left-[30rem] w-[142px] -scale-x-100" />
          <div className="absolute top-24 right-12">
            <HandDrawnCircle>
              <span className="text-[22px] font-medium text-pink">Why Print Wave USA</span>
            </HandDrawnCircle>
          </div>
        </div>
        <div className="relative isolate h-56 overflow-hidden rounded-xl bg-footer">
          <BlurBlob className="-bottom-24 -left-10 -z-10 size-80 bg-blob-blue/70" />
          <BlurBlob className="bottom-0 left-[40%] -z-10 size-60 bg-blob-amber/70" />
          <BlurBlob className="right-0 -bottom-10 -z-10 size-72 bg-blob-pink/70" />
        </div>
      </Section>
    </Container>
  );
}

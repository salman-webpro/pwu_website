import { Card } from "@/components/ui/Card";
import { ModalButton } from "@/components/ui/ModalButton";
import type { contactOptions } from "@/content/contact";
import { cn } from "@/lib/utils";
import type { ModalCta } from "@/types";

const linkClass =
  "rounded-sm hover:text-ink hover:underline focus-visible:ring-2 focus-visible:ring-pink focus-visible:outline-none";

function OptionCard({ title, body, cta }: { title: string; body: string; cta: ModalCta }) {
  return (
    <Card as="li" className="flex flex-col items-start">
      <h2 className="text-xl leading-snug font-bold text-ink">{title}</h2>
      <p className="mt-3 text-body text-muted">{body}</p>
      <ModalButton modal={cta.modal} preset={cta.preset} size="sm" className="mt-6">
        {cta.label}
      </ModalButton>
    </Card>
  );
}

/** Three ways to get in touch: consultation, call-back, phone/email. */
export function ContactOptions({ content, className }: { content: typeof contactOptions; className?: string }) {
  const { consultation, call, direct } = content;
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2 lg:min-h-[219px] lg:grid-cols-3", className)}>
      <OptionCard {...consultation} />
      <OptionCard {...call} />
      <Card as="li">
        <h2 className="text-xl leading-snug font-bold text-ink">{direct.title}</h2>
        <p className="mt-3 flex flex-col items-start text-body text-muted">
          <a href={direct.phone.href} className={linkClass}>
            {direct.phone.display}
          </a>
          <a href={`mailto:${direct.email}`} className={`break-all ${linkClass}`}>
            {direct.email}
          </a>
        </p>
      </Card>
    </ul>
  );
}

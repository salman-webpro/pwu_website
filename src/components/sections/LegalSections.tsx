import type { LegalSection } from "@/types";

// Headed sections for long legal pages (/privacy, /terms).
export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="flex max-w-[760px] flex-col gap-10">
      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-3 text-body text-copy">
          <h2 className="text-xl leading-snug font-bold text-ink">{section.heading}</h2>
          {section.intro?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul className="flex list-disc flex-col gap-1.5 pl-6 marker:text-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {section.outro?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </div>
  );
}

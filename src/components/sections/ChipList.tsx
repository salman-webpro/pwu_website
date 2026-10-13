import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "./SectionHeading";

/** Heading + wrapping row of pill labels ("Who we work with"). */
export function ChipList({ title, chips, className }: { title: string; chips: string[]; className?: string }) {
  return (
    <div className={className}>
      <SectionHeading title={title} />
      <ul className="mt-6 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </ul>
    </div>
  );
}

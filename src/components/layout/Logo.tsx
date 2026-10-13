import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Brand logo linking home. `width` sets the rendered width; height follows the image ratio. */
export function Logo({ width = 84, priority = false, className }: { width?: number; priority?: boolean; className?: string }) {
  const { src, alt, width: w, height: h } = site.logo;
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 rounded-md focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <Image src={src} alt={alt} width={width} height={Math.round((width * h) / w)} priority={priority} />
    </Link>
  );
}

import { cn } from "@/lib/utils";
import type { Product } from "@/types";

const tileSizes = {
  landscape: "h-[60px] w-[85px]",
  portrait: "h-[80px] w-[60px]",
};

/** 4×2 grid of product category cards: gradient top with a tilted peach tile, title below. */
export function ProductGrid({ products, className }: { products: Product[]; className?: string }) {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {products.map((product) => (
        // TODO(design): cards become links once product pages exist (slug is ready in content).
        <li key={product.slug} className="overflow-hidden rounded-lg border border-border bg-surface shadow-card">
          <div
            aria-hidden
            className="flex h-[170px] items-center justify-center"
            style={{ backgroundImage: `linear-gradient(135deg, ${product.gradient[0]}, ${product.gradient[1]})` }}
          >
            <span
              className={cn("rounded-tile bg-tile shadow-tile", tileSizes[product.tile])}
              style={{ transform: `rotate(${product.tilt}deg)` }}
            />
          </div>
          <div className="px-4 py-[18px]">
            <h3 className="text-lg leading-tight font-bold text-ink">{product.title}</h3>
            <p className="mt-1 text-small text-muted">{product.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

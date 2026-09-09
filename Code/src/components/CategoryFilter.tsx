"use client";

import { ProductCategory, categoryLabels } from "@/data/products";

type CategoryFilterProps = {
  active: ProductCategory | "all";
  onChange: (category: ProductCategory | "all") => void;
};

const categories: (ProductCategory | "all")[] = ["all", "gateaux", "cupcakes", "patisseries", "special"];

const labels: Record<ProductCategory | "all", string> = {
  all: "Tout",
  ...categoryLabels,
};

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div
      className="flex gap-1 overflow-x-auto border-b border-stone-dark/60 pb-px"
      role="tablist"
      aria-label="Filtrer par catégorie"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={`shrink-0 px-5 py-3 text-sm font-medium transition-all ${
            active === cat
              ? "border-b-2 border-accent text-ink"
              : "border-b-2 border-transparent text-ink-faint hover:text-ink-muted"
          }`}
        >
          {labels[cat]}
        </button>
      ))}
    </div>
  );
}

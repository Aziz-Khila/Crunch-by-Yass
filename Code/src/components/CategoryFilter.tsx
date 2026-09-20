"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCategory, categoryLabels, products } from "@/data/products";

type CategoryFilterProps = {
  active: ProductCategory | "all";
  onChange: (category: ProductCategory | "all") => void;
};

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const categories = useMemo(() => {
    const present = new Set(products.map((p) => p.category));
    const list: (ProductCategory | "all")[] = ["all"];
    (Object.keys(categoryLabels) as ProductCategory[]).forEach((cat) => {
      if (present.has(cat)) list.push(cat);
    });
    return list;
  }, []);

  const labels: Record<ProductCategory | "all", string> = {
    all: "Tout",
    ...categoryLabels,
  };

  return (
    <div
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
      role="tablist"
      aria-label="Filtrer par catégorie"
    >
      {categories.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(cat)}
            className={`relative rounded-full px-4 py-3 text-sm font-medium transition-colors sm:px-5 ${
              isActive ? "text-white" : "text-ink-muted hover:text-ink"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="catalogue-filter-pill"
                className="absolute inset-0 rounded-full bg-accent shadow-[0_8px_20px_rgba(232,141,77,0.35)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {!isActive && (
              <span className="absolute inset-0 rounded-full bg-white ring-1 ring-cream-dark" />
            )}
            <span className="relative z-10">{labels[cat]}</span>
          </button>
        );
      })}
    </div>
  );
}

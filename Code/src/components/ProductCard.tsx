"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { categoryLabels } from "@/data/products";
import { buildProductOrderMessage } from "@/lib/whatsapp";
import { fadeUp } from "@/lib/motion";
import WhatsAppButton from "./WhatsAppButton";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
  index?: number;
};

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const preload = () => {
    const img = new window.Image();
    img.src = product.image;
  };

  return (
    <motion.article
      layout
      variants={fadeUp}
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
      onPointerEnter={preload}
      onFocusCapture={preload}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_36px_rgba(45,30,18,0.06)] ring-1 ring-cream-dark/50 transition-shadow hover:shadow-[0_18px_44px_rgba(45,30,18,0.1)]"
    >
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="relative block w-full shrink-0 overflow-hidden bg-cream text-left"
        aria-label={`Voir les détails de ${product.name}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink shadow-sm backdrop-blur-sm">
          {categoryLabels[product.category]}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <button type="button" onClick={() => onSelect(product)} className="text-left">
          <h3 className="line-clamp-2 min-h-0 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent sm:min-h-[3.25rem] sm:text-2xl">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 min-h-0 text-sm leading-relaxed text-ink-muted sm:min-h-[2.75rem]">
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-accent">{product.price}</p>
            {product.servings && (
              <p className="text-xs text-ink-faint">{product.servings}</p>
            )}
          </div>
        </button>

        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-cream-dark bg-cream-light px-4 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Détails
          </button>
          <div className="flex-[1.4]">
            <WhatsAppButton
              message={buildProductOrderMessage(product.name)}
              label="Commander"
              size="md"
              variant="primary"
              fullWidth
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

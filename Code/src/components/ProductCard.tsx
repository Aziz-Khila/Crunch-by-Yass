"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { categoryLabels } from "@/data/products";
import { buildProductOrderMessage } from "@/lib/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
  index?: number;
};

export default function ProductCard({ product, onSelect, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group flex h-full flex-col"
    >
      <button
        type="button"
        onClick={() => onSelect(product)}
        className="relative block w-full shrink-0 overflow-hidden rounded-2xl bg-stone text-left"
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
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-ink backdrop-blur-sm">
          {categoryLabels[product.category]}
        </span>
      </button>

      <div className="mt-4 flex flex-1 flex-col">
        <button type="button" onClick={() => onSelect(product)} className="text-left">
          <h3 className="line-clamp-2 min-h-[3.5rem] font-display text-xl font-medium text-ink transition-colors group-hover:text-accent">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-ink-muted">
            {product.description}
          </p>
          <p className="mt-2 text-sm font-medium text-accent">{product.price}</p>
        </button>

        <div className="mt-auto pt-4">
          <WhatsAppButton
            message={buildProductOrderMessage(product.name)}
            label="Commander"
            size="sm"
            variant="ghost"
            fullWidth
          />
        </div>
      </div>
    </motion.article>
  );
}

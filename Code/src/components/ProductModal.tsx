"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";
import { categoryLabels } from "@/data/products";
import { buildProductOrderMessage } from "@/lib/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/70 backdrop-blur-md"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-ivory sm:rounded-3xl sm:flex-row"
          >
            <div className="relative aspect-square w-full shrink-0 sm:aspect-auto sm:w-1/2">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 384px"
                priority
              />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-ink backdrop-blur-sm transition-colors hover:bg-white"
                aria-label="Fermer"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto p-6 sm:p-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                {categoryLabels[product.category]}
              </span>
              <h2 id="product-modal-title" className="mt-2 font-display text-3xl font-medium text-ink">
                {product.name}
              </h2>
              <p className="mt-2 font-display text-2xl text-accent">{product.price}</p>

              {product.servings && (
                <p className="mt-3 text-sm text-ink-muted">
                  <span className="font-medium text-ink">Portions</span> · {product.servings}
                </p>
              )}

              <p className="mt-5 flex-1 leading-relaxed text-ink-muted">
                {product.longDescription || product.description}
              </p>

              <div className="mt-8">
                <WhatsAppButton
                  message={buildProductOrderMessage(product.name)}
                  label="Commander via WhatsApp"
                  size="lg"
                  fullWidth
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "@/data/products";
import { categoryLabels } from "@/data/products";
import { buildProductOrderMessage } from "@/lib/whatsapp";
import WhatsAppButton from "./WhatsAppButton";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
};

const easeSmooth = [0.22, 1, 0.36, 1] as const;

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    lockBodyScroll();
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      unlockBodyScroll();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  useEffect(() => {
    if (!product?.image) return;
    const img = new window.Image();
    img.src = product.image;
  }, [product?.image]);

  return (
    <AnimatePresence>
      {product && (
        <div
          key={product.id}
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            className="absolute inset-0 bg-ink/55 backdrop-blur-[6px]"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
          />

          <motion.div
            initial={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 20, scale: 0.985 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.99 }
            }
            transition={{
              duration: reduceMotion ? 0.12 : 0.28,
              ease: easeSmooth,
            }}
            className="relative z-10 flex max-h-[min(92vh,100dvh)] w-full max-w-3xl flex-col overflow-hidden rounded-t-[1.75rem] bg-cream-light pb-[env(safe-area-inset-bottom)] shadow-[0_24px_80px_rgba(45,30,18,0.28)] will-change-transform sm:rounded-[1.75rem] sm:pb-0 sm:flex-row"
          >
            <div className="relative aspect-[4/3] max-h-[36vh] w-full shrink-0 overflow-hidden bg-cream sm:aspect-auto sm:max-h-none sm:w-[46%] sm:self-stretch">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
                priority
              />
            </div>

            <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto p-5 sm:p-8">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink ring-1 ring-cream-dark transition-colors hover:bg-white sm:right-5 sm:top-5"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </button>

              <span className="pr-12 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                {categoryLabels[product.category]}
              </span>
              <h2
                id="product-modal-title"
                className="mt-2 pr-12 font-display text-2xl font-bold text-ink sm:text-3xl"
              >
                {product.name}
              </h2>
              <p className="mt-2 text-lg font-semibold text-accent">{product.price}</p>

              {product.servings && (
                <p className="mt-3 rounded-lg bg-cream px-3 py-2 text-sm text-ink-muted">
                  <span className="font-semibold text-ink">Portions</span>
                  {" · "}
                  {product.servings}
                </p>
              )}

              <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-muted sm:mt-5 sm:text-base">
                {product.longDescription || product.description}
              </p>

              <div className="mt-6 space-y-3 sm:mt-8">
                <WhatsAppButton
                  message={buildProductOrderMessage(product.name)}
                  label="Commander via WhatsApp"
                  size="lg"
                  fullWidth
                />
                <p className="text-center text-xs text-ink-faint">
                  Réponse rapide · commande 48h à l&apos;avance
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

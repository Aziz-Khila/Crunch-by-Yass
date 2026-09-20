"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/data/site";

export default function CatalogueView() {
  return (
    <div className="bg-cream-light">
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-cream-dark/60 bg-cream">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
          aria-hidden="true"
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-accent sm:text-base">
            Catalogue
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 max-w-2xl font-display text-[clamp(1.875rem,8vw,2.25rem)] font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Nos créations
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Parcourez nos gâteaux et pâtisseries. Cliquez pour les détails, ou
            commandez directement via WhatsApp.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-3 text-sm text-ink-faint">
            {siteConfig.orderNotice}
          </motion.p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ProductGrid />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-ink px-6 py-10 sm:flex-row sm:items-center sm:px-10"
          >
            <div>
              <p className="text-sm font-semibold text-accent">Sur mesure</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
                Vous ne trouvez pas exactement ce qu&apos;il vous faut ?
              </h2>
              <p className="mt-2 max-w-lg text-sm text-white/60">
                Décrivez votre idée — occasion, parfum, portions — et on vous répond vite.
              </p>
            </div>
            <Link
              href="/commande-personnalisee"
              className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Commande personnalisée
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

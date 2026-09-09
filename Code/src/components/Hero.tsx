"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

const heroImage = "/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Pâtisserie artisanale · Tunis
          </p>

          <h1 className="mt-5 font-display text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-ink">
            Des gâteaux
            <br />
            <span className="italic text-accent">faits avec amour</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
            {siteConfig.tagline}. Parcourez nos créations et commandez en un clic via WhatsApp.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/menu"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-ivory transition-all hover:bg-accent"
            >
              Voir nos gâteaux
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/commande-personnalisee"
              className="inline-flex items-center gap-2 px-2 py-4 text-sm font-medium text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Commande sur mesure
            </Link>
          </div>

          <div className="mt-14 flex gap-10 border-t border-stone-dark/60 pt-8">
            {[
              { value: "100%", label: "Fait maison" },
              { value: "48h", label: "Délai minimum" },
              { value: "WhatsApp", label: "Commande facile" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-medium text-ink">{stat.value}</p>
                <p className="mt-0.5 text-xs text-ink-faint">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone">
            <Image
              src={heroImage}
              alt="Gâteau blanc à deux étages avec roses et gypsophile"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>

          <div className="absolute -right-2 top-8 hidden rounded-2xl bg-ivory px-5 py-4 shadow-lg ring-1 ring-stone-dark/40 sm:block lg:-right-6">
            <p className="font-display text-3xl font-medium text-accent">★ 5.0</p>
            <p className="text-xs text-ink-faint">Avis clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

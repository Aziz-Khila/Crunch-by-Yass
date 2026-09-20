"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function CtaBand() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />

          <motion.p variants={fadeUp} className="relative text-sm font-semibold text-accent">
            Prêt à commander ?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Un gâteau pour chaque moment spécial
          </motion.h2>
          <motion.p variants={fadeUp} className="relative mx-auto mt-4 max-w-md text-white/65">
            Parcourez nos créations ou décrivez votre idée — on s&apos;occupe du reste.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Voir le catalogue
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/commande-personnalisee"
              className="inline-flex items-center rounded-md border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              Sur mesure
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

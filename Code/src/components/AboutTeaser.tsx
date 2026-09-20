"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function AboutTeaser() {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section className="relative overflow-hidden bg-cream py-14 sm:py-28" aria-labelledby="about-teaser-heading">
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-accent sm:text-base">
              Notre histoire
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-2 font-display text-3xl font-bold leading-[1.12] text-ink sm:text-4xl lg:text-5xl"
            >
              Chaque bouchée raconte une passion
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 leading-relaxed text-ink-muted">
              {siteConfig.about.story}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-ink-muted">
              {siteConfig.about.philosophy}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
              >
                En savoir plus
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative pb-16 lg:col-span-7 lg:pb-8" ref={imageWrapRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem] bg-cream-dark shadow-[0_24px_60px_rgba(45,30,18,0.14)]"
            >
              <motion.div style={{ y: imageY }} className="absolute inset-[-12%]">
                <Image
                  src={siteConfig.about.image}
                  alt="Verrines de desserts artisanaux Crunch by Yass"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-2 left-3 right-3 max-w-xs rounded-2xl bg-white p-4 shadow-[0_16px_40px_rgba(45,30,18,0.12)] sm:-bottom-5 sm:left-6 sm:right-auto sm:p-5 lg:-bottom-6"
            >
              <p
                id="about-teaser-heading"
                className="font-display text-lg font-semibold italic text-ink sm:text-2xl"
              >
                &ldquo;La pâtisserie, c&apos;est de l&apos;art comestible.&rdquo;
              </p>
              <p className="mt-2 text-sm text-ink-muted">— Yass, fondatrice</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

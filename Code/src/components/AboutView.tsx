"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import WhatsAppButton from "./WhatsAppButton";

const values = [
  {
    num: "01",
    title: "Fait maison",
    desc: "Du biscuit à la décoration, tout est préparé à la main avec soin.",
  },
  {
    num: "02",
    title: "Ingrédients soignés",
    desc: "Des produits sélectionnés pour un goût authentique et généreux.",
  },
  {
    num: "03",
    title: "Sur mesure",
    desc: "Chaque événement mérite une création unique, pensée pour vous.",
  },
];

export default function AboutView() {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <div className="bg-cream-light">
      {/* Hero */}
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
            Notre histoire
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 max-w-3xl font-display text-[clamp(1.875rem,8vw,2.25rem)] font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            L&apos;art de la pâtisserie, fait maison
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {siteConfig.tagline}. Une cuisine artisanale, des moments partagés.
          </motion.p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative pb-14 lg:col-span-6 lg:pb-8" ref={imageWrapRef}>
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-cream shadow-[0_24px_60px_rgba(45,30,18,0.12)] sm:aspect-[5/4] lg:aspect-[4/5]"
              >
                <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
                  <Image
                    src={siteConfig.about.image}
                    alt="Verrines de desserts artisanaux Crunch by Yass"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-3 right-3 max-w-[260px] rounded-2xl bg-white p-4 shadow-[0_16px_40px_rgba(45,30,18,0.12)] sm:-bottom-5 sm:left-auto sm:right-6 sm:p-5 lg:-bottom-6"
              >
                <p className="font-display text-lg font-semibold italic text-ink sm:text-xl">
                  &ldquo;La pâtisserie, c&apos;est de l&apos;art comestible.&rdquo;
                </p>
                <p className="mt-2 text-sm text-ink-muted">— Yass, fondatrice</p>
              </motion.div>
            </div>

            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="lg:col-span-6 lg:pt-4"
            >
              <motion.p variants={fadeUp} className="text-sm font-semibold text-accent">
                Passion &amp; savoir-faire
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl"
              >
                Chaque bouchée raconte une histoire
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
                {siteConfig.about.story}
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {siteConfig.about.philosophy}
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 space-y-5 border-t border-cream-dark pt-10"
              >
                {values.map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-display text-2xl font-bold text-accent">{item.num}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              { label: "100%", title: "Artisanal", desc: "Aucune production de masse" },
              { label: "48h", title: "À l'avance", desc: "Pour une fraîcheur garantie" },
              { label: "WhatsApp", title: "Simple", desc: "Commande en un message" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl bg-white px-6 py-8 text-center shadow-[0_8px_30px_rgba(45,30,18,0.05)]"
              >
                <p className="font-display text-3xl font-bold text-accent">{item.label}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.p variants={fadeUp} className="text-sm font-semibold text-accent">
              Témoignages
            </motion.p>
            <motion.h2
              id="testimonials-heading"
              variants={fadeUp}
              className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
            >
              Ce qu&apos;ils en disent
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid gap-5 sm:grid-cols-3 sm:gap-6"
          >
            {siteConfig.testimonials.map((testimonial) => (
              <motion.blockquote
                key={testimonial.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="flex flex-col rounded-[1.5rem] bg-white p-7 shadow-[0_10px_36px_rgba(45,30,18,0.06)] ring-1 ring-cream-dark/50 sm:p-8"
              >
                <span className="font-display text-5xl leading-none text-accent/35" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="mt-2 flex-1 leading-relaxed text-ink-muted">{testimonial.text}</p>
                <footer className="mt-6 border-t border-cream-dark pt-4 text-sm font-semibold text-ink">
                  {testimonial.name}
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-12 sm:px-12 sm:py-14"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-accent">Envie de commander ?</p>
                <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                  Découvrez nos créations ou parlez-nous de votre projet
                </h2>
                <p className="mt-3 text-sm text-white/60">{siteConfig.orderNotice}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/menu"
                  className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  Voir le catalogue
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </Link>
                <WhatsAppButton
                  message="Bonjour, j'aimerais en savoir plus sur Crunch by Yass."
                  label="WhatsApp"
                  size="md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MapPin, Palette } from "lucide-react";
import CustomOrderForm from "@/components/CustomOrderForm";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { siteConfig } from "@/data/site";

const perks = [
  {
    icon: Check,
    title: "Consultation gratuite",
    desc: "On discute ensemble de votre idée avant de se lancer.",
  },
  {
    icon: Palette,
    title: "100% personnalisable",
    desc: "Saveurs, couleurs, décor et message — à votre image.",
  },
  {
    icon: MapPin,
    title: "Livraison Tunis",
    desc: siteConfig.deliveryZone,
  },
  {
    icon: Clock,
    title: "Délai 48h",
    desc: siteConfig.orderNotice,
  },
];

export default function CustomOrderView() {
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
            Sur mesure
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 max-w-3xl font-display text-[clamp(1.875rem,8vw,2.25rem)] font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl"
          >
            Votre gâteau de rêve
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Décrivez votre vision — occasion, parfum, portions — et nous vous
            répondrons rapidement via WhatsApp.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-3 text-sm text-ink-faint">
            {siteConfig.orderNotice}
          </motion.p>
        </motion.div>
      </section>

      {/* Form + info */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="order-2 lg:order-1 lg:col-span-5"
            >
              <motion.h2
                variants={fadeUp}
                className="font-display text-2xl font-bold text-ink sm:text-3xl"
              >
                Comment ça marche ?
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-ink-muted">
                Remplissez le formulaire : tout part automatiquement dans un
                message WhatsApp (ou email) prêt à envoyer.
              </motion.p>

              <div className="mt-8 space-y-4">
                {perks.map((perk) => (
                  <motion.div
                    key={perk.title}
                    variants={fadeUp}
                    className="flex gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_28px_rgba(45,30,18,0.05)] ring-1 ring-cream-dark/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <perk.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink">{perk.title}</h3>
                      <p className="mt-0.5 text-sm text-ink-muted">{perk.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeUp} className="mt-8">
                <Link
                  href="/menu"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
                >
                  Ou parcourir le catalogue
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 lg:order-2 lg:col-span-7"
            >
              <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_16px_50px_rgba(45,30,18,0.08)] ring-1 ring-cream-dark/50 sm:p-8 lg:p-10">
                <div className="mb-8 border-b border-cream-dark pb-6">
                  <p className="text-sm font-semibold text-accent">Votre projet</p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                    Formulaire de commande
                  </h2>
                </div>
                <CustomOrderForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.5rem] bg-cream px-6 py-8 text-center sm:px-10"
          >
            <p className="font-display text-xl font-bold text-ink sm:text-2xl">
              Une question avant de commander ?
            </p>
            <p className="mx-auto mt-2 max-w-lg text-sm text-ink-muted">
              Écrivez-nous directement sur WhatsApp — on répond généralement
              rapidement.
            </p>
            <div className="mt-5">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Bonjour, j'ai une question sur une commande sur mesure.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a]"
              >
                Contacter via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { buildProductOrderMessage } from "@/lib/whatsapp";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import WhatsAppButton from "./WhatsAppButton";

const featured = products.filter((p) => p.featured);

export default function FeaturedProducts() {
  if (featured.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-28" aria-labelledby="featured-heading">
      <div
        className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-accent sm:text-base">
            Nos créations
          </motion.p>
          <motion.h2
            id="featured-heading"
            variants={fadeUp}
            className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
          >
            Doux, moelleux &amp; délicieux
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base text-ink-muted">
            Trois signatures faites maison — commande en un clic via WhatsApp.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid items-stretch gap-10 sm:mt-16 sm:grid-cols-3 sm:gap-8"
        >
          {featured.map((product, index) => (
            <motion.article
              key={product.id}
              variants={fadeUp}
              className="group flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative h-44 w-44 overflow-hidden rounded-full bg-cream shadow-[0_16px_40px_rgba(45,30,18,0.12)] ring-[6px] ring-cream sm:h-52 sm:w-52"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="208px"
                />
              </motion.div>

              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-ink">
                {product.name}
              </h3>
              <p className="mt-2 line-clamp-2 min-h-[2.75rem] max-w-[240px] text-sm leading-relaxed text-ink-muted">
                {product.description}
              </p>
              <p className="mt-2 text-sm font-semibold text-accent">{product.price}</p>
              <div className="mt-auto w-full max-w-[220px] pt-5">
                <WhatsAppButton
                  message={buildProductOrderMessage(product.name)}
                  label="Commander"
                  size="md"
                  variant="primary"
                  fullWidth
                />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
          >
            Voir le catalogue complet
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

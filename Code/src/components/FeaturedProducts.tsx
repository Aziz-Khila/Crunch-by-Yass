"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { buildProductOrderMessage } from "@/lib/whatsapp";
import SectionHeader from "./SectionHeader";
import WhatsAppButton from "./WhatsAppButton";

const featured = products.filter((p) => p.featured);

export default function FeaturedProducts() {
  if (featured.length === 0) return null;

  return (
    <section className="bg-stone py-20 sm:py-28" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          number="01"
          label="Sélection"
          title="Nos créations"
          description="Trois signatures faites maison — commandez-les en un clic via WhatsApp."
        />

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-ivory ring-1 ring-stone-dark/50 transition-all hover:ring-accent/40"
            >
              <div className="relative aspect-[4/5] shrink-0 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3
                  id={index === 0 ? "featured-heading" : undefined}
                  className="line-clamp-2 min-h-[3.5rem] font-display text-2xl font-medium text-ink"
                >
                  {product.name}
                </h3>
                <p className="mt-2 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-ink-muted">
                  {product.description}
                </p>
                <p className="mt-2 text-sm font-medium text-accent">{product.price}</p>
                <div className="mt-auto pt-5">
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 text-sm font-medium text-ink"
          >
            <span className="h-px w-8 bg-ink transition-all group-hover:w-12" />
            Voir le catalogue
            <span className="h-px w-8 bg-ink transition-all group-hover:w-12" />
          </Link>
        </div>
      </div>
    </section>
  );
}

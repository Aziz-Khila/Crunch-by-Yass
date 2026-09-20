"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SocialLinks from "./SocialLinks";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-ink text-white">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8"
      >
        <div className="grid gap-12 md:grid-cols-12">
          <motion.div variants={fadeUp} className="md:col-span-5">
            <p className="font-display text-2xl font-bold">
              CRUNCH <span className="text-accent">BY YASS</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
              {siteConfig.tagline}
            </p>
            <div className="mt-6">
              <SocialLinks variant="dark" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-8 sm:grid-cols-2 md:col-span-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Navigation
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { href: "/menu", label: "Catalogue" },
                  { href: "/a-propos", label: "À propos" },
                  { href: "/commande-personnalisee", label: "Sur mesure" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Contact
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.location}</li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-3 md:text-right">
            <WhatsAppButton
              message="Bonjour, j'aimerais avoir des informations sur vos pâtisseries."
              label="WhatsApp"
              size="md"
            />
            <p className="mt-4 text-xs text-white/45">{siteConfig.deliveryZone}</p>
            <p className="mt-1 text-xs text-white/45">{siteConfig.orderNotice}</p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row"
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>Fait avec ♥ à Tunis</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}

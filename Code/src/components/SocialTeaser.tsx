"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { animate, stagger } from "animejs";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SocialLinks from "./SocialLinks";

const steps = [
  { step: "01", title: "Parcourez", desc: "Explorez notre catalogue en ligne" },
  { step: "02", title: "Choisissez", desc: "Sélectionnez votre envie gourmande" },
  { step: "03", title: "Commandez", desc: "Un clic WhatsApp, c'est parti" },
];

export default function SocialTeaser() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const root = stepsRef.current;
    if (!root) return;

    const cards = root.querySelectorAll<HTMLElement>("[data-step-card]");
    const nums = root.querySelectorAll<HTMLElement>("[data-step-num]");

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      cards.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      nums.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || animated.current) return;
        animated.current = true;

        animate(cards, {
          opacity: [0, 1],
          translateY: [28, 0],
          delay: stagger(120),
          duration: 700,
          ease: "out(3)",
        });

        animate(nums, {
          opacity: [0, 1],
          scale: [0.7, 1],
          delay: stagger(140, { start: 80 }),
          duration: 650,
          ease: "out(3)",
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(root);

    const fallback = window.setTimeout(() => {
      if (animated.current) return;
      animated.current = true;
      cards.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      nums.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="bg-white py-14 sm:py-24" aria-labelledby="social-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.75rem] bg-cream px-5 py-10 sm:px-12 sm:py-16"
        >
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >
            <div className="max-w-xl">
              <motion.p variants={fadeUp} className="text-sm font-semibold text-accent">
                Instagram
              </motion.p>
              <motion.h2
                id="social-heading"
                variants={fadeUp}
                className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl"
              >
                Suivez nos créations
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-3 text-base leading-relaxed text-ink-muted">
                Coulisses, nouveautés et inspirations gourmandes.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <SocialLinks />
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent sm:inline-flex"
              >
                @crunch_byyass
              </a>
            </motion.div>
          </motion.div>

          <div ref={stepsRef} className="mt-12 grid gap-4 sm:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                data-step-card
                className="rounded-2xl bg-white px-5 py-7 shadow-[0_8px_30px_rgba(45,30,18,0.06)]"
                style={{ opacity: 0, transform: "translateY(28px)" }}
              >
                <span
                  data-step-num
                  className="inline-block text-sm font-bold text-accent"
                  style={{ opacity: 0 }}
                >
                  {item.step}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream-dark/70 pt-8 sm:flex-row">
            <p className="text-sm text-ink-faint">{siteConfig.orderNotice}</p>
            <Link
              href="/commande-personnalisee"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              Commander sur mesure
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

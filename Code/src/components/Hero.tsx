"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import HeroBackdrop from "./HeroBackdrop";

const heroImage = "/images/hero-cheesecake.png";

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.4 });
  const backdropX = useTransform(x, (v) => v * -0.25);
  const backdropY = useTransform(y, (v) => v * -0.25);
  const imageX = useTransform(x, (v) => v * 0.5);
  const imageY = useTransform(y, (v) => v * 0.5);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    rawX.set(offsetX / 20);
    rawY.set(offsetY / 20);
  };

  const handlePointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative mx-auto grid max-w-7xl items-center gap-4 px-5 pb-10 pt-6 sm:gap-6 sm:px-8 sm:pb-12 sm:pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl lg:py-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold tracking-wide text-accent sm:text-lg"
          >
            Qu&apos;est-ce qui vous fait envie ?
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-2 font-display text-[clamp(1.9rem,8.5vw,4.1rem)] font-bold leading-[1.08] tracking-tight text-ink text-balance sm:mt-3"
          >
            Le goût du fait-maison pour enrichir chaque moment.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-muted sm:mt-5 sm:text-[1.05rem]"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8"
          >
            <Link
              href="/menu"
              className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(45,30,18,0.16)] transition-all hover:bg-accent hover:shadow-[0_12px_28px_rgba(232,141,77,0.28)] sm:px-7 sm:py-3.5"
            >
              Commander
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/commande-personnalisee"
              className="inline-flex min-h-11 items-center rounded-md px-3 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
            >
              Sur mesure
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-6 hidden flex-wrap items-center gap-x-6 gap-y-2 border-t border-cream-dark/80 pt-5 text-sm text-ink-faint sm:mt-10 sm:flex sm:pt-6"
          >
            <span>Fait maison</span>
            <span className="hidden h-1 w-1 rounded-full bg-accent/70 sm:inline-block" aria-hidden="true" />
            <span>48h à l&apos;avance</span>
            <span className="hidden h-1 w-1 rounded-full bg-accent/70 sm:inline-block" aria-hidden="true" />
            <span>WhatsApp</span>
          </motion.div>
        </motion.div>

        <motion.div
          ref={stageRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative mx-auto flex h-[min(42vh,320px)] w-full max-w-[420px] items-center justify-center sm:h-auto sm:aspect-square sm:max-w-[520px] lg:max-w-none"
        >
          <motion.div style={{ x: backdropX, y: backdropY }} className="absolute inset-0">
            <HeroBackdrop />
          </motion.div>

          <motion.div
            style={{ x: imageX, y: imageY }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 h-[90%] w-[90%]"
          >
            <Image
              src={heroImage}
              alt="Verrines cheesecake artisanales Crunch by Yass"
              fill
              priority
              className="object-contain drop-shadow-[0_18px_36px_rgba(45,30,18,0.18)]"
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

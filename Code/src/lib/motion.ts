import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerContainer = (stagger = 0.1, delay = 0.05): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const viewportOnce = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -40px 0px",
} as const;

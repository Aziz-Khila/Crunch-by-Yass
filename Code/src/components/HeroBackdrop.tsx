"use client";

import { useEffect, useId, useRef } from "react";
import { animate, createTimeline, svg } from "animejs";

type HeroBackdropProps = {
  className?: string;
};

/**
 * Soft watercolor brush behind the hero product —
 * morphs with Anime.js instead of a flat circle.
 * @see https://animejs.com/
 */
export default function HeroBackdrop({ className = "" }: HeroBackdropProps) {
  const uid = useId().replace(/:/g, "");
  const pathRef = useRef<SVGPathElement>(null);
  const targetARef = useRef<SVGPathElement>(null);
  const targetBRef = useRef<SVGPathElement>(null);
  const targetCRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const targetA = targetARef.current;
    const targetB = targetBRef.current;
    const targetC = targetCRef.current;
    if (!path || !targetA || !targetB || !targetC) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    let timeline: ReturnType<typeof createTimeline> | null = null;
    let fallback: ReturnType<typeof animate> | null = null;

    try {
      timeline = createTimeline({
        defaults: { ease: "inOutSine", duration: 4800 },
        loop: true,
      });

      timeline
        .add(path, { d: svg.morphTo(targetB, 0.4) })
        .add(path, { d: svg.morphTo(targetC, 0.4) })
        .add(path, { d: svg.morphTo(targetA, 0.4) });
    } catch {
      fallback = animate(path, {
        scale: [1, 1.045, 1],
        duration: 6500,
        ease: "inOutSine",
        loop: true,
      });
    }

    return () => {
      timeline?.pause();
      fallback?.pause();
    };
  }, []);

  const gradId = `hero-grad-${uid}`;
  const softId = `hero-soft-${uid}`;
  const blurId = `hero-blur-${uid}`;

  const shapeA =
    "M78 42C98 28 132 22 158 30C186 39 208 58 214 86C220 116 208 146 186 164C162 184 128 192 98 184C68 176 42 156 34 126C26 96 40 64 68 48C70 46 74 44 78 42Z";
  const shapeB =
    "M72 38C96 24 138 26 164 40C192 54 214 78 212 108C210 140 190 166 162 176C132 188 98 184 72 168C46 152 30 124 34 96C38 66 52 46 72 38Z";
  const shapeC =
    "M84 36C112 24 146 28 170 46C196 66 210 96 204 124C198 154 174 176 144 182C112 188 80 176 58 154C36 132 32 100 44 74C56 48 72 38 84 36Z";

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 220"
        className="absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient id={gradId} x1="36" y1="24" x2="204" y2="196" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f6bf91" />
            <stop offset="48%" stopColor="#e99558" />
            <stop offset="100%" stopColor="#d4783a" />
          </linearGradient>
          <radialGradient id={softId} cx="50%" cy="48%" r="52%">
            <stop offset="0%" stopColor="#f2a56f" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#e88d4d" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#e88d4d" stopOpacity="0" />
          </radialGradient>
          <filter id={blurId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <path ref={targetARef} d={shapeA} fill="none" opacity="0" />
        <path ref={targetBRef} d={shapeB} fill="none" opacity="0" />
        <path ref={targetCRef} d={shapeC} fill="none" opacity="0" />

        <ellipse cx="120" cy="110" rx="96" ry="88" fill={`url(#${softId})`} filter={`url(#${blurId})`} />

        <path d={shapeB} fill="#f0a06a" opacity="0.2" transform="translate(10 12)" />

        <path
          ref={pathRef}
          d={shapeA}
          fill={`url(#${gradId})`}
          opacity="0.9"
          style={{ transformOrigin: "120px 110px" }}
        />
      </svg>
    </div>
  );
}

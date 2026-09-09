import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import SectionHeader from "./SectionHeader";

export default function AboutTeaser() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="about-teaser-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              number="02"
              label="Notre histoire"
              title="Chaque bouchée raconte une passion"
            />
            <p className="mt-6 leading-relaxed text-ink-muted">{siteConfig.about.story}</p>
            <p className="mt-4 leading-relaxed text-ink-muted">{siteConfig.about.philosophy}</p>
            <Link
              href="/a-propos"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              Découvrir notre univers
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-stone">
              <Image
                src={siteConfig.about.image}
                alt="Verrines de desserts artisanaux Crunch by Yass"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-2 max-w-xs rounded-2xl bg-accent-soft p-6 sm:-left-6 lg:-bottom-8">
              <p id="about-teaser-heading" className="font-display text-2xl font-medium italic text-ink">
                &ldquo;La pâtisserie, c&apos;est de l&apos;art comestible.&rdquo;
              </p>
              <p className="mt-2 text-sm text-ink-muted">— Yass, fondatrice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

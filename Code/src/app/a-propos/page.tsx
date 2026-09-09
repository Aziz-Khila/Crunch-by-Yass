import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "À Propos",
  description: `Découvrez l'histoire de ${siteConfig.name}, notre philosophie et les témoignages de nos clients.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Notre histoire"
            title="L'art de la pâtisserie, fait maison"
          />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone">
              <Image
                src={siteConfig.about.image}
                alt="Verrines de desserts artisanaux Crunch by Yass"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="lg:pt-8">
              <p className="text-lg leading-relaxed text-ink-muted">{siteConfig.about.story}</p>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">{siteConfig.about.philosophy}</p>

              <div className="mt-12 space-y-6 border-t border-stone-dark/60 pt-12">
                {[
                  { num: "01", title: "Fait maison", desc: "Du biscuit à la décoration, tout est préparé à la main." },
                  { num: "02", title: "Ingrédients soignés", desc: "Des produits sélectionnés pour un goût authentique." },
                  { num: "03", title: "Sur mesure", desc: "Chaque événement mérite une création unique." },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6">
                    <span className="font-display text-2xl font-light text-accent">{item.num}</span>
                    <div>
                      <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone py-20 sm:py-28" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Témoignages"
            title="Ce qu'ils en disent"
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {siteConfig.testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex flex-col rounded-2xl bg-ivory p-8 ring-1 ring-stone-dark/50"
              >
                <span className="font-display text-4xl leading-none text-accent/40">&ldquo;</span>
                <p className="mt-2 flex-1 leading-relaxed text-ink-muted">{testimonial.text}</p>
                <footer className="mt-6 border-t border-stone-dark/40 pt-4 text-sm font-medium text-ink">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

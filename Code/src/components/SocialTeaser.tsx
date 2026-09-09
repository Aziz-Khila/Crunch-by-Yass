import { siteConfig } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function SocialTeaser() {
  return (
    <section className="border-y border-stone-dark/60 bg-ink py-20 text-ivory sm:py-24" aria-labelledby="social-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Instagram</p>
            <h2 id="social-heading" className="mt-3 font-display text-4xl font-medium sm:text-5xl">
              Suivez nos créations
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Coulisses, nouveautés et inspirations gourmandes — directement sur nos réseaux.
            </p>
          </div>
          <SocialLinks variant="dark" />
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
          {[
            { step: "01", title: "Parcourez", desc: "Explorez notre catalogue en ligne" },
            { step: "02", title: "Choisissez", desc: "Sélectionnez votre gâteau préféré" },
            { step: "03", title: "Commandez", desc: "Un clic WhatsApp, c'est commandé" },
          ].map((item) => (
            <div key={item.step} className="bg-ink p-8">
              <span className="font-display text-3xl font-light text-accent">{item.step}</span>
              <h3 className="mt-3 font-display text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/40">{siteConfig.orderNotice}</p>
      </div>
    </section>
  );
}

import Link from "next/link";
import { siteConfig } from "@/data/site";
import SocialLinks from "./SocialLinks";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="border-t border-stone-dark/60 bg-ivory">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl font-medium text-ink">Crunch by Yass</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{siteConfig.tagline}</p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-4">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Navigation</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { href: "/menu", label: "Catalogue" },
                  { href: "/a-propos", label: "À propos" },
                  { href: "/commande-personnalisee", label: "Sur mesure" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-ink-muted transition-colors hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-accent">
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
          </div>

          <div className="md:col-span-3 md:text-right">
            <WhatsAppButton
              message="Bonjour, j'aimerais avoir des informations sur vos pâtisseries."
              label="WhatsApp"
              size="sm"
            />
            <p className="mt-4 text-xs text-ink-faint">{siteConfig.deliveryZone}</p>
            <p className="mt-1 text-xs text-ink-faint">{siteConfig.orderNotice}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-stone-dark/40 pt-8 text-xs text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p>Fait avec ♥ à Tunis</p>
        </div>
      </div>
    </footer>
  );
}

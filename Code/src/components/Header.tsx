"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/menu", label: "Catalogue" },
  { href: "/a-propos", label: "À propos" },
  { href: "/commande-personnalisee", label: "Sur mesure" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isHome
          ? "border-b border-transparent bg-ivory/80 backdrop-blur-lg"
          : "border-b border-stone-dark/50 bg-ivory/95 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logo`}
            width={36}
            height={36}
            className="rounded-full object-cover ring-1 ring-stone-dark/60 transition-transform group-hover:scale-105"
            priority
          />
          <div className="leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Crunch
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.3em] text-ink-faint">
              by Yass
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full ${
                pathname === link.href
                  ? "text-ink after:w-full"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/menu"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory transition-all hover:bg-accent"
          >
            Commander
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-ink transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-stone-dark/40 bg-ivory transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="px-5 py-4" aria-label="Navigation mobile">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-stone-dark/30 py-4 text-base font-medium text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/menu"
                className="block rounded-full bg-ink py-3.5 text-center text-sm font-medium text-ivory"
                onClick={() => setMenuOpen(false)}
              >
                Voir le catalogue
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

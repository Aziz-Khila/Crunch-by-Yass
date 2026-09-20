"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/menu", label: "Catalogue" },
  { href: "/commande-personnalisee", label: "Sur mesure" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    lockBodyScroll();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      unlockBodyScroll();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      data-scroll-lock-compensate
      className="sticky top-0 z-40 border-b border-cream-dark/60 bg-cream-light/95 pt-[env(safe-area-inset-top)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:px-8 sm:py-3.5">
        <Link
          href="/"
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} logo`}
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
            priority
          />
          <span className="truncate font-display text-base font-bold tracking-tight text-ink sm:text-xl">
            CRUNCH <span className="font-medium text-accent">BY YASS</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-accent"
                  : "text-ink hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/menu"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Commander
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center text-ink lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 h-0.5 w-full rounded bg-ink transition-all ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full rounded bg-ink transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full rounded bg-ink transition-all ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-cream-dark/50 bg-cream-light transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[min(24rem,calc(100dvh-4.5rem))] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="max-h-[min(24rem,calc(100dvh-4.5rem))] overflow-y-auto px-5 py-4"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-cream-dark/40 py-3.5 text-base font-medium text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/menu"
                className="block rounded-md bg-accent py-3.5 text-center text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Commander
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

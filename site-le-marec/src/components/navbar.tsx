"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/etude", label: "L'Étude" },
  { href: "/constats", label: "Les Services" },
  { href: "/competences", label: "Les Compétences" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkColor = scrolled
    ? "text-slate-700 hover:text-slate-900"
    : "text-white/90 hover:text-white";

  const mobileMenuBg = scrolled ? "bg-white" : "bg-[#1c6868]";

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        scrolled
          ? "border-slate-200 bg-white backdrop-blur"
          : "border-transparent bg-[#1c6868]"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-4">
        <Link href="/" className="flex shrink-0 items-center gap-3 md:-ml-[183px]">
          <div className="relative h-10 w-[min(180px,calc(100vw-10rem))] md:h-[95px] md:w-[501px]">
            <Image
              src="/images/logo2selarl.png"
              alt="SELARL Eric Le Marec"
              fill
              sizes="(max-width: 767px) 180px, 501px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition md:hidden ${
              scrolled
                ? "text-slate-800 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          <Link
            href="/contact"
            className={`hidden rounded-full border px-4 py-2 text-sm font-semibold transition md:inline-flex ${
              scrolled
                ? "border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50"
                : "border-white/40 text-white hover:border-white/70 hover:bg-white/10"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/constats#cabinet-abgi"
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:px-4 ${
              scrolled
                ? "bg-primary text-white hover:bg-primary-strong"
                : "bg-white text-[#1c6868] hover:bg-white/90"
            }`}
          >
            <span className="md:hidden">ABGI</span>
            <span className="hidden md:inline">Cabinet ABGI</span>
          </Link>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-[24rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className={`border-t px-4 py-4 ${mobileMenuBg} ${
            scrolled ? "border-slate-200" : "border-white/20"
          }`}
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    scrolled
                      ? "text-slate-800 hover:bg-slate-50"
                      : "text-white hover:bg-white/10"
                  } ${pathname === link.href ? (scrolled ? "bg-slate-50" : "bg-white/10") : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className={`block rounded-full border px-4 py-3 text-center text-base font-semibold transition ${
                  scrolled
                    ? "border-slate-200 text-slate-800 hover:bg-slate-50"
                    : "border-white/40 text-white hover:bg-white/10"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen ? (
        <div
          className="fixed inset-0 top-14 z-20 bg-black/25 md:hidden"
          aria-hidden
          onClick={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}

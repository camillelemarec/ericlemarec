"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/etude", label: "L'Étude" },
  { href: "/constats", label: "Les Services" },
  { href: "/competences", label: "Les Compétences" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b transition-colors duration-300 ${
        scrolled
          ? "border-slate-200 bg-white backdrop-blur"
          : "border-transparent bg-[#1c6868]"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 md:-ml-[183px]">
          <div className="relative h-[95px] w-[501px]">
            <Image
              src="/images/logo2selarl.png"
              alt="SELARL Eric Le Marec"
              fill
              sizes="501px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                scrolled
                  ? "text-slate-700 hover:text-slate-900"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
            href="/paiement"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              scrolled
                ? "bg-primary text-white hover:bg-primary-strong"
                : "bg-white text-[#1c6868] hover:bg-white/90"
            }`}
          >
            Payer en ligne
          </Link>
        </div>
      </div>
    </header>
  );
}

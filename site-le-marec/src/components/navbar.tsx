import Link from "next/link";

const navLinks = [
  { href: "/etude", label: "L'Étude" },
  { href: "/constats", label: "Les Services" },
  { href: "/competences", label: "Les Compétences" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-sm">
            EL
          </span>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
              SELARL
            </div>
            <div className="text-base font-semibold">Eric Le Marec</div>
            <div className="text-xs text-slate-500">
              Commissaire de Justice
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 md:inline-flex"
          >
            Contact
          </Link>
          <Link
            href="/paiement"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ color: "#ffffff" }}
          >
            Payer en ligne
          </Link>
        </div>
      </div>
    </header>
  );
}


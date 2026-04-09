import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
            SELARL
          </div>
          <div className="text-xl font-semibold text-slate-900">
            Eric Le Marec
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Commissaire de Justice à Herbignac – Cour d&apos;Appel de Rennes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 text-sm text-slate-700 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Coordonnées
            </div>
            <ul className="mt-3 space-y-2">
              <li>10, rue de Verdun</li>
              <li>44410 Herbignac</li>
              <li>Email : lemareceric@gmail.com</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Navigation
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="hover:text-slate-900" href="/etude">
                  L&apos;Étude
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" href="/constats">
                  Les Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" href="/competences">
                  Les Compétences
                </Link>
              </li>
              <li>
                <Link className="hover:text-slate-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Services
            </div>
            <ul className="mt-3 space-y-2">
              <li>Constat par Drone</li>
              <li>Exécution & Signification</li>
              <li>Recouvrement</li>
              <li>Médiation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} SELARL Eric Le Marec</span>
          <Link href="/mentions-legales" className="hover:text-slate-700">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}


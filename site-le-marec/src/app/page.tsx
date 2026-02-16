import Link from "next/link";
import { CardGrid } from "@/components/card-grid";
import { Hero } from "@/components/hero";

const cards = [
  {
    title: "L'Étude",
    description: "Approche moderne, accessible et rigoureuse.",
    href: "/etude",
    icon: "⚖️",
  },
  {
    title: "Les Services",
    description: "Commissaire de Justice, constats, médiation, recouvrement.",
    href: "/constats",
    icon: "📷",
  },
  {
    title: "Les Compétences",
    description: "Signification, exécution, recouvrement, médiation.",
    href: "/competences",
    icon: "📂",
  },
  {
    title: "Nous Contacter",
    description: "Réactivité et suivi personnalisé.",
    href: "/contact",
    icon: "☎️",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f5f7fa]">
      <Hero
        eyebrow="Commissaire de Justice"
        title="Réactivité et Qualité d'intervention"
        subtitle="SELARL Eric Le Marec – Herbignac. Compétence judiciaire sur la Cour d’Appel de Rennes (44, 56, 35) et nationale pour les constats."
        note="Commissaire de Justice à votre écoute : particuliers, entreprises, institutions."
        backgroundImage="/images/page_accueil.jpg"
      />

      <section className="mx-auto mt-14 flex max-w-6xl flex-col gap-10 px-6 pb-28">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Navigation rapide
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">
              Accédez en un clic à l&apos;information
            </h2>
            <p className="max-w-2xl text-slate-600">
              Une structure claire et directe pour orienter rapidement chaque
              profil : particuliers, professionnels, institutions.
            </p>
          </div>
          <Link
            href="/paiement"
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong"
          >
            Payer en ligne
          </Link>
        </div>
        <CardGrid cards={cards} />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              SELARL Eric Le Marec
            </p>
            <h3 className="text-xl font-semibold text-slate-900">
              Une étude à l&apos;écoute de ses clients depuis 2001
            </h3>
            <p className="text-sm text-slate-600">
              Accompagnement rigoureux et moderne, pour particuliers,
              professionnels et institutions, sur l&apos;ensemble de la Cour
              d&apos;Appel de Rennes.
            </p>
          </div>
          <Link
            href="/etude"
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ color: "#ffffff" }}
          >
            Découvrir notre histoire
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

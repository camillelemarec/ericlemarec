import Image from "next/image";
import Link from "next/link";
import { CardGrid } from "@/components/card-grid";
import { Hero } from "@/components/hero";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Commissaire de Justice à Herbignac — Étude Le Marec",
  description:
    "SELARL Eric Le Marec, Commissaire de Justice (ex-huissier) à Herbignac. Constats, signification, recouvrement et médiation à La Baule, Guérande, Saint-Nazaire et Cour d'Appel de Rennes.",
  path: "/",
  keywords: [
    "étude le marec",
    "huissier herbignac",
    "commissaire de justice la baule",
  ],
});

const cards = [
  {
    title: "L'Étude",
    description: "Une approche moderne, accessible et rigoureuse.",
    href: "/etude",
    icon: "⚖️",
  },
  {
    title: "Les Services",
    description: "Constats, médiation, recouvrement, exécution.",
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
        subtitle="SELARL Eric Le Marec, Herbignac. Compétence sur la Cour d'Appel de Rennes (44, 56, 35) et nationale pour les constats."
        note="Commissaire de Justice à votre écoute, que vous soyez particulier, entreprise ou institution."
        backgroundVideo="/images/0708.mov"
      />

      <section className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 px-4 pb-20 md:mt-14 md:px-6 md:pb-28">
        <CardGrid cards={cards} />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6 md:pb-16">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              SELARL Eric Le Marec
            </p>
            <h3 className="text-xl font-semibold text-slate-900">
              À votre écoute depuis 2001
            </h3>
            <p className="text-sm text-slate-600">
              Je vous accompagne avec rigueur et modernité, que vous soyez
              particulier, professionnel ou institution, sur l&apos;ensemble
              de la Cour d&apos;Appel de Rennes.
            </p>
          </div>
          <Link
            href="/etude"
            className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ color: "#ffffff" }}
          >
            Découvrir notre parcours
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6 md:pb-20">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-sm lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Notre second pôle
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src="/images/logoABGI.svg"
                alt=""
                width={200}
                height={59}
                className="h-10 w-auto max-w-[min(220px,72vw)] object-contain object-left brightness-0 invert"
                unoptimized
                aria-hidden
              />
              <h3 className="text-xl font-semibold text-white">Cabinet ABGI</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Cabinet ABGI, 10, rue de Verdun, 44410 Herbignac. Cabinet de
              gestion immobilière — Agence Brière Gestion Immobilière.
            </p>
            <p className="text-sm text-white/85">
              <a
                href="https://www.leboncoin.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Retrouvez nos annonces de biens à louer sur Le Bon Coin
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

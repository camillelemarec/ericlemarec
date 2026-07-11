import Image from "next/image";
import { PageHeader } from "@/components/page-header";

const constats = [
  {
    title: "Constat par drone",
    description:
      "J'observe et capte des éléments en hauteur ou difficiles d'accès, avec valeur probante.",
  },
  {
    title: "Travaux",
    description:
      "Je réalise des constats avant, pendant et après chantier, avec suivi d'exécution.",
  },
  {
    title: "Immobilier et locatif",
    description: "États des lieux, dégradations, abandon de domicile.",
  },
  {
    title: "Numérique",
    description: "Je capte les SMS, contenus Internet, réseaux sociaux et sites web.",
  },
  {
    title: "Voisinage",
    description: "Troubles, nuisances, empiétement, servitudes.",
  },
];

const executionRecouvrement = [
  {
    title: "Amiable",
    description: "Relances, plans d'échelonnement, sécurisation des accords.",
  },
  {
    title: "Judiciaire",
    description: "Injonction, exécution, saisies adaptées au dossier.",
  },
  {
    title: "Impayés de loyers",
    description: "Commandement, résiliation, exécution des décisions.",
  },
];

const mediation = [
  {
    title: "Médiation conventionnelle",
    description: "Je préviens le contentieux et facilite un accord rapide.",
  },
  {
    title: "Médiation judiciaire",
    description: "J'interviens sur désignation judiciaire pour rapprocher les parties.",
  },
];

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services — Constats, Exécution, Recouvrement, Médiation",
  description:
    "Constats par drone, exécution, recouvrement et médiation par l'étude Le Marec à Herbignac. Commissaire de Justice compétent sur La Baule, Guérande et la Cour d'Appel de Rennes. Constats sur tout le territoire national.",
  path: "/constats",
  keywords: [
    "constat drone herbignac",
    "constat la baule commissaire de justice",
    "services huissier herbignac",
  ],
});

type ServiceItem = { title: string; description: string };

function ServiceCategory({
  label,
  items,
  badgeLabel,
  badgeClassName,
}: {
  label: string;
  items: ServiceItem[];
  badgeLabel: string;
  badgeClassName: string;
}) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${badgeClassName}`}
              >
                {badgeLabel}
              </span>
            </div>
            <p className="text-sm text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConstatsPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl space-y-12 px-6 py-12">
        <PageHeader
          title="Les Services"
          subtitle="Deux pôles d'activité : Commissaire de Justice et Gérance immobilière (Cabinet ABGI)."
        />

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900">
              1 — Commissaire de Justice
            </h2>
            <p className="text-sm text-slate-600">
              Constats, exécution, recouvrement et médiation : j&apos;interviens
              sur la Cour d&apos;Appel de Rennes et sur tout le territoire
              national pour les constats.
            </p>
          </div>

          <ServiceCategory
            label="Constats"
            items={constats}
            badgeLabel="Constat"
            badgeClassName="bg-emerald-600"
          />

          <ServiceCategory
            label="Exécution et recouvrement"
            items={executionRecouvrement}
            badgeLabel="Exécution"
            badgeClassName="bg-amber-600"
          />

          <ServiceCategory
            label="Médiation"
            items={mediation}
            badgeLabel="Médiation"
            badgeClassName="bg-blue-600"
          />
        </div>

        <div id="cabinet-abgi" className="space-y-4 scroll-mt-28">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Image
                src="/images/logoABGI.svg"
                alt=""
                width={160}
                height={47}
                className="h-9 w-auto max-w-[min(180px,55vw)] shrink-0 object-contain object-left"
                unoptimized
                aria-hidden
              />
              <h2 className="text-2xl font-semibold text-slate-900">
                2 — Gérance immobilière, Cabinet ABGI
              </h2>
            </div>
            <p className="text-sm text-slate-600">
              Notre activité de gérance immobilière est portée par le Cabinet
              ABGI — cabinet de gestion immobilière Agence Brière Gestion
              Immobilière, 10, rue de Verdun, 44410 Herbignac.{" "}
              <a
                href="https://www.leboncoin.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary-strong"
              >
                Retrouvez nos annonces de biens à louer sur Le Bon Coin
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2">
              <span className="w-fit rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Cabinet ABGI
              </span>
              <p className="text-sm text-slate-700">
                Gestion locative, suivi des biens et accompagnement des
                propriétaires.
              </p>
              <p className="text-sm text-slate-700">
                <a
                  href="https://www.leboncoin.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-primary-strong"
                >
                  Retrouvez nos annonces de biens à louer sur Le Bon Coin
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

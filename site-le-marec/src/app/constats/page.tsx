import { PageHeader } from "@/components/page-header";
import Link from "next/link";

const constats = [
  {
    title: "Constat par drone",
    description:
      "Observation et captation d’éléments en hauteur ou difficiles d’accès, avec valeur probante.",
  },
  {
    title: "Travaux",
    description: "Constats avant / pendant / après chantier, suivi d’exécution.",
  },
  {
    title: "Immobilier & locatif",
    description: "État des lieux, dégradations, abandon de domicile.",
  },
  {
    title: "Numérique",
    description: "Captation SMS, Internet, réseaux sociaux, sites web.",
  },
  {
    title: "Voisinage",
    description: "Troubles, nuisances, empiétement, servitudes.",
  },
];

const mediation = [
  {
    title: "Médiation conventionnelle",
    description: "Prévenir le contentieux, trouver un accord rapide.",
  },
  {
    title: "Médiation judiciaire",
    description: "Intervention sur désignation judiciaire pour rapprocher les parties.",
  },
];

const executionRecouvrement = [
  {
    title: "Amiable",
    description: "Relances, plans d’échelonnement, sécurisation des accords.",
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

export const metadata = {
  title: "Les Services | SELARL Eric Le Marec",
  description:
    "Constats, médiation, exécution et recouvrement. Interventions sur la Cour d'Appel de Rennes et constats nationaux.",
};

type ServiceCtaCardProps = {
  badgeClassName: string;
  badgeLabel: string;
  cardClassName: string;
};

function ServiceCtaCard({
  badgeClassName,
  badgeLabel,
  cardClassName,
}: ServiceCtaCardProps) {
  return (
    <Link
      href="/rendez-vous"
      className={`group flex flex-col gap-3 rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 ${cardClassName}`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Prendre rendez-vous</h3>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${badgeClassName}`}>
          {badgeLabel}
        </span>
      </div>
      <p className="text-sm text-slate-700">
        Échange rapide avec l&apos;étude pour être orienté vers la bonne procédure.
      </p>
      <span className="mt-auto text-sm font-semibold text-primary transition group-hover:text-primary-strong">
        Réserver en ligne →
      </span>
    </Link>
  );
}

export default function ConstatsPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <PageHeader
          title="Les Services"
          subtitle="Commissaire de Justice : constats, médiation, exécution et recouvrement. Interventions nationales pour les constats."
        />

        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-900">
            Commissaire de Justice
          </h2>
          <p className="text-sm text-slate-600">
            Constat, exécution, recouvrement, médiation : interventions sur la Cour d&apos;Appel de Rennes et constats nationaux.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Constats
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {constats.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                    Constat
                  </span>
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            ))}
            <ServiceCtaCard
              badgeClassName="bg-emerald-600"
              badgeLabel="Constat"
              cardClassName="border-emerald-200 bg-emerald-50 hover:border-emerald-300"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Exécution & recouvrement
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {executionRecouvrement.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                    Exécution
                  </span>
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            ))}
            <ServiceCtaCard
              badgeClassName="bg-amber-600"
              badgeLabel="Exécution"
              cardClassName="border-amber-200 bg-amber-50 hover:border-amber-300"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Médiation
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mediation.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Médiation
                  </span>
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            ))}
            <ServiceCtaCard
              badgeClassName="bg-primary"
              badgeLabel="Médiation"
              cardClassName="border-teal-200 bg-teal-50 hover:border-teal-300"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Gérance immobilière – Cabinet ABGI
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
            Future rubrique vers les annonces (Le Bon Coin). Mise en ligne à venir.
          </div>
        </div>

      </section>
    </div>
  );
}


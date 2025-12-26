import { PageHeader } from "@/components/page-header";

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
  {
    title: "Entreprise & voisinage",
    description: "Désaccords commerciaux, litiges de voisinage, copropriété.",
  },
  {
    title: "Famille & locatif",
    description: "Tensions locatives, charges, réparations, usage des lieux.",
  },
];

const recouvrement = [
  {
    title: "Amiable",
    description: "Relances, plans d’échelonnement, sécurisation des accords.",
  },
  {
    title: "Judiciaire",
    description: "Injonction, exécution, saisies adaptées au dossier.",
  },
  {
    title: "Suivi des paiements",
    description: "Tableaux de suivi et reporting pour les créanciers.",
  },
];

const contentieux = [
  {
    title: "Impayés de loyers",
    description: "Commandement, résiliation, exécution des décisions.",
  },
  {
    title: "État des lieux & dégradations",
    description: "Constats d’entrée/sortie, évaluations de dommages.",
  },
  {
    title: "Troubles de jouissance",
    description: "Voisinage, nuisances, usage des parties communes.",
  },
];

export const metadata = {
  title: "Les Services | SELARL Eric Le Marec",
  description:
    "Constats, médiation, recouvrement, contentieux locatif. Interventions sur la Cour d'Appel de Rennes et constats nationaux.",
};

export default function ConstatsPage() {
  return (
    <div className="bg-[var(--color-sand)]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <PageHeader
          title="Les Services"
          subtitle="Constats, médiation, recouvrement et contentieux locatif. Interventions nationales pour les constats."
        />

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
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    Constat
                  </span>
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span className="h-px flex-1 bg-slate-200" />
          <span>Médiation</span>
          <span className="h-px flex-1 bg-slate-200" />
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
                <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-semibold text-white">
                  Médiation
                </span>
              </div>
              <p className="text-sm text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Recouvrement
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recouvrement.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                    Recouvrement
                  </span>
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Contentieux locatif
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contentieux.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                    Locatif
                  </span>
                </div>
                <p className="text-sm text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-6">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-strong)]"
          >
            Prendre rendez-vous en ligne
          </a>
        </div>
      </section>
    </div>
  );
}


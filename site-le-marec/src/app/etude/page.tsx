import { PageHeader } from "@/components/page-header";

const milestones = [
  {
    year: "2001",
    title: "Huissier en région parisienne",
    detail:
      "Spécialisation dans le tirage au sort des jeux de hasard et contrôle des opérations.",
  },
  {
    year: "2010",
    title: "Expertises constats et recouvrement",
    detail:
      "Développement des constats (locatif, voisinage, numérique) et du recouvrement amiable/judiciaire.",
  },
  {
    year: "2022",
    title: "Formation médiation – Sorbonne",
    detail:
      "Certification complémentaire permettant d'intervenir en qualité de médiateur.",
  },
  {
    year: "2026",
    title: "Installation à Herbignac",
    detail:
      "Arrivée sur la côte Atlantique et formation drone pour les constats en hauteur ou zones difficiles d'accès.",
  },
];

export const metadata = {
  title: "L'Étude | SELARL Eric Le Marec",
  description:
    "Présentation de l'étude, approche moderne et rigoureuse de Maître Eric Le Marec.",
};

export default function EtudePage() {
  return (
    <div className="bg-[var(--color-sand)]">
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-8">
          <PageHeader
            title="L'Étude"
          />

          <div className="space-y-4 text-slate-700">
            <p>
              Eric Le Marec est huissier depuis 2001. Il a commencé en région
              parisienne, spécialisé dans le tirage au sort des jeux de hasard
              et le contrôle des opérations.
            </p>
            <p>
              En parallèle, il a développé une expertise solide en constats
              (locatif, voisinage, numérique), en recouvrement amiable et
              judiciaire, ainsi qu&apos;en signification et exécution des
              décisions.
            </p>
            <p>
              Depuis 2022, grâce à une formation complémentaire à la Sorbonne,
              il peut intervenir en qualité de médiateur. En 2026, il s&apos;installe
              à Herbignac et complète sa pratique par l&apos;usage du drone pour
              réaliser des constats en hauteur ou dans des zones difficiles
              d&apos;accès.
            </p>
          </div>

          <div className="relative mt-4 space-y-6">
            <div className="absolute left-3 top-1 bottom-1 w-px bg-slate-200" />
            {milestones.map((item) => (
              <div key={item.year} className="relative pl-10">
                <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-white bg-[var(--color-primary)] shadow-sm" />
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  <span>{item.year}</span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="mt-2 text-base font-semibold text-slate-900">
                  {item.title}
                </div>
                <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[var(--shadow-card)]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/image%20tf1.jpeg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
            <div className="relative flex flex-col gap-4 p-8 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
                Portrait
              </div>
              <div className="text-3xl font-semibold leading-tight">
                Maître Eric Le Marec
              </div>
              <p
                className="text-white/90"
                style={{ color: "#ffffff" }}
              >
                Commissaire de Justice, compétent sur la Cour d&apos;Appel de
                Rennes et pour des constats sur tout le territoire national.
              </p>
              <div className="rounded-2xl bg-white/12 px-4 py-3 text-sm font-medium text-white backdrop-blur">
                Dirigeant de la SELARL Eric Le Marec
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


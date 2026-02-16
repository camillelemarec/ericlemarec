import { PageHeader } from "@/components/page-header";
import { TeamProfile } from "@/components/team-profile";

const milestones = [
  {
    year: "2001",
    title: "Prestation de serment",
    detail:
      "Installation à Paris 9e en tant qu’associé de la SCP Simonin-Le Marec.",
  },
  {
    year: "2001-2025",
    title: "Constats, recouvrement, exécution",
    detail:
      "Expérience approfondie en constats (locatif, voisinage, numérique), recouvrement amiable/judiciaire et procédures d’exécution.",
  },
  {
    year: "2022",
    title: "Qualification Commissaire de Justice",
    detail:
      "Membre de la Chambre Régionale de Paris : réclamations, chantier du siège, création du centre de médiation CJMED.",
  },
  {
    year: "2024",
    title: "Médiation – MARD (Science Po)",
    detail: "Formation médiation et vérification des comptes de tutelle.",
  },
  {
    year: "2025",
    title: "CJMED Paris & saisie des rémunérations",
    detail:
      "Qualification en tant que répartiteur et membre fondateur du CJMED Paris.",
  },
  {
    year: "2026",
    title: "Installation à Herbignac",
    detail:
      "Reprise de l’office de Me Jean-Philippe Marchand et certification télépilote de drone (constats en hauteur ou zones difficiles d’accès).",
  },
];

export const metadata = {
  title: "L'Étude | SELARL Eric Le Marec",
  description:
    "Présentation de l'étude, approche moderne et rigoureuse de Maître Eric Le Marec.",
};

export default function EtudePage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-8">
          <PageHeader title="L'Étude" />

          <div className="space-y-4 text-slate-700">
            <p>
              Eric Le Marec exerce en qualité d’Huissier de Justice depuis 2001
              (devenu Commissaire de Justice en 2022). Il a été associé dans une
              importante étude parisienne, pratiquant toutes les facettes du
              métier, et particulièrement actif en constats, constats internet,
              contrôle des opérations de jeux et tirages au sort.
            </p>
            <p>
              En parallèle, il a développé une expertise solide en recouvrement
              amiable et judiciaire, ainsi qu&apos;en signification et exécution
              des décisions.
            </p>
            <p>
              Depuis 2024, grâce à une formation complémentaire à Science Po, il
              propose d’intervenir en qualité de médiateur. Depuis février 2026,
              succédant à Me Jean-Philippe Marchand, il s&apos;installe à Herbignac
              et complète sa pratique par une qualification de télépilote de
              drone pour réaliser des constats en hauteur ou dans des zones
              difficiles d&apos;accès.
            </p>
          </div>

          <div className="relative mt-4 space-y-6">
            <div className="absolute left-3 top-1 bottom-1 w-px bg-slate-200" />
            {milestones.map((item) => (
              <div key={item.year} className="relative pl-10">
                <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-white bg-primary shadow-sm" />
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

        <TeamProfile />
      </section>
    </div>
  );
}


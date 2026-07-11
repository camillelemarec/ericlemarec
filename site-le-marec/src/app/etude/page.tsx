import { PageHeader } from "@/components/page-header";
import { TeamProfile } from "@/components/team-profile";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "L'Étude — Commissaire de Justice à Herbignac",
  description:
    "Découvrez l'étude Le Marec à Herbignac : Maître Eric Le Marec, Commissaire de Justice, et Magali Bonnet, stagiaire INCJ. Interventions à Herbignac, La Baule, Guérande et Cour d'Appel de Rennes.",
  path: "/etude",
  keywords: [
    "étude le marec herbignac",
    "commissaire de justice eric le marec",
    "huissier herbignac parcours",
  ],
});

export default function EtudePage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl space-y-8 px-6 py-12">
        <PageHeader title="L'Étude" />
        <TeamProfile />
      </section>
    </div>
  );
}

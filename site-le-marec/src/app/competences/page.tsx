import { Accordion } from "@/components/accordion";
import { PageHeader } from "@/components/page-header";

const items = [
  {
    title: "Signification des actes",
    content:
      "Notification sécurisée des actes judiciaires et extra-judiciaires, respect des délais et des règles de compétence.",
  },
  {
    title: "Exécution des décisions de justice",
    content:
      "Mise en œuvre des décisions : saisies, expulsions, mesures conservatoires, avec accompagnement pédagogique.",
  },
  {
    title: "Recouvrement judiciaire et amiable",
    content:
      "Relances amiables, négociation, mise en place de plans, puis exécution judiciaire si nécessaire.",
  },
  {
    title: "Médiation",
    content:
      "Favoriser un accord entre les parties lorsque cela est possible, pour réduire le contentieux et les délais.",
  },
  {
    title: "Contentieux locatif",
    content:
      "Impayés, résiliation, expulsion, état des lieux, sécurisation des droits des bailleurs et locataires.",
  },
];

export const metadata = {
  title: "Les Compétences | SELARL Eric Le Marec",
  description:
    "Signification, exécution, recouvrement, médiation et contentieux locatif.",
};

export default function CompetencesPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <PageHeader
          title="Les Compétences"
          subtitle="Interventions complètes en signification, exécution, recouvrement et médiation."
        />
        <Accordion items={items} />
      </section>
    </div>
  );
}


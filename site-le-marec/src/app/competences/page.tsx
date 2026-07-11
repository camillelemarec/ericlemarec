import { Accordion } from "@/components/accordion";
import { PageHeader } from "@/components/page-header";

const items = [
  {
    title: "Signification des actes",
    definition:
      "La signification est la remise officielle d'un acte juridique (assignation, jugement, commandement, mise en demeure...) à son destinataire par un commissaire de justice. Elle donne à l'acte une date certaine, garantit qu'il a bien été porté à la connaissance de son destinataire et déclenche les délais légaux (appel, exécution, etc.). Seul le CDJ et son clerc assermenté sont habilités à y procéder.",
    content:
      "Nous notifions de manière sécurisée les actes judiciaires et extra-judiciaires, dans le respect des délais et des règles de compétence.",
  },
  {
    title: "Exécution des décisions de justice",
    definition:
      "Lorsqu'un jugement a été rendu en votre faveur mais qu'il n'est pas exécuté spontanément par la partie adverse, l'exécution forcée permet de le faire respecter concrètement. Le commissaire de justice est le seul professionnel habilité à mettre en œuvre les mesures d'exécution prévues par la loi : saisies (sur compte, sur salaire, sur véhicule), expulsions, mesures conservatoires...",
    content:
      "Nous mettons en œuvre les décisions : saisies, expulsions, mesures conservatoires, avec un accompagnement pédagogique à chaque étape.",
  },
  {
    title: "Recouvrement judiciaire et amiable",
    definition:
      "Le recouvrement consiste à obtenir le paiement d'une créance impayée. Il peut être amiable (relances, négociation, mise en place d'un échéancier sans passer par le juge) ou judiciaire (obtention d'un titre exécutoire devant le tribunal, puis saisies si le débiteur ne règle toujours pas).",
    content:
      "Nous procédons aux relances amiables, à la négociation et à la mise en place de plans, puis à l'exécution judiciaire si nécessaire.",
  },
  {
    title: "Médiation",
    definition:
      "La médiation est un mode amiable de règlement des différends. Un tiers neutre et indépendant — le médiateur — accompagne les parties pour les aider à trouver elles-mêmes une solution équilibrée à leur conflit. Confidentielle, plus rapide et souvent moins coûteuse qu'un procès, elle peut intervenir avant ou pendant une procédure judiciaire.",
    content:
      "Nous favorisons un accord entre les parties lorsque cela est possible, pour réduire le contentieux et les délais.",
  },
  {
    title: "Contentieux locatif",
    definition:
      "Le contentieux locatif regroupe l'ensemble des litiges qui peuvent opposer un bailleur (propriétaire) et son locataire : loyers ou charges impayés, défaut d'entretien, résiliation du bail, restitution du dépôt de garantie, état des lieux contesté, expulsion... Il concerne aussi bien les baux d'habitation que les baux commerciaux ou professionnels.",
    content:
      "Nous intervenons sur les impayés, résiliations, expulsions, états des lieux, et nous sécurisons les droits des bailleurs comme des locataires.",
  },
];

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Compétences — Signification, Exécution, Recouvrement",
  description:
    "Commissaire de Justice à Herbignac et La Baule : signification d'actes, exécution des décisions, recouvrement amiable et judiciaire, médiation et contentieux locatif.",
  path: "/competences",
  keywords: [
    "signification actes herbignac",
    "recouvrement commissaire de justice la baule",
    "médiation huissier herbignac",
  ],
});

export default function CompetencesPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <PageHeader
          title="Les Compétences"
          subtitle="J'interviens en signification, exécution, recouvrement et médiation."
        />
        <Accordion items={items} />
      </section>
    </div>
  );
}

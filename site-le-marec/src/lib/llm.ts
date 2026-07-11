import { BUSINESS, SITE_URL } from "@/lib/seo";

export const FAQ_ITEMS = [
  {
    question: "Qu'est-ce que la signification des actes ?",
    answer:
      "La signification est la remise officielle d'un acte juridique (assignation, jugement, commandement, mise en demeure...) à son destinataire par un commissaire de justice. Elle donne à l'acte une date certaine, garantit qu'il a bien été porté à la connaissance de son destinataire et déclenche les délais légaux. L'étude Le Marec notifie les actes judiciaires et extra-judiciaires dans le respect des délais et des règles de compétence.",
  },
  {
    question: "Qu'est-ce que l'exécution des décisions de justice ?",
    answer:
      "Lorsqu'un jugement n'est pas exécuté spontanément, l'exécution forcée permet de le faire respecter. Le commissaire de justice met en œuvre les mesures prévues par la loi : saisies sur compte, salaire ou véhicule, expulsions, mesures conservatoires, avec accompagnement à chaque étape.",
  },
  {
    question: "Quels services de recouvrement propose l'étude ?",
    answer:
      "L'étude procède aux relances amiables, à la négociation et à la mise en place de plans d'échelonnement, puis à l'exécution judiciaire si nécessaire : injonction de payer, saisies adaptées au dossier, traitement des impayés de loyers.",
  },
  {
    question: "Proposez-vous de la médiation ?",
    answer:
      "Oui. Maître Eric Le Marec est formé à la médiation (MARD, Sciences Po). La médiation est un mode amiable de règlement des différends, confidentiel et souvent plus rapide qu'un procès.",
  },
  {
    question: "Intervenez-vous en contentieux locatif ?",
    answer:
      "Oui : loyers impayés, résiliations, expulsions, états des lieux, restitution de dépôt de garantie, pour baux d'habitation, commerciaux ou professionnels.",
  },
  {
    question: "Quels types de constats réalisez-vous ?",
    answer:
      "Constats par drone, constats de travaux, constats immobiliers et locatifs, constats numériques (SMS, Internet, réseaux sociaux), constats de voisinage. Constats possibles sur tout le territoire national.",
  },
  {
    question: "Où est située l'étude et quelle est sa zone d'intervention ?",
    answer:
      "10, rue de Verdun, 44410 Herbignac. Compétence sur la Cour d'Appel de Rennes (Loire-Atlantique 44, Morbihan 56, Ille-et-Vilaine 35) : Herbignac, La Baule, Guérande, Saint-Nazaire, Pornichet et communes environnantes.",
  },
  {
    question: "Comment contacter l'étude Le Marec ?",
    answer:
      "Téléphone : 02 40 88 95 57. Email : elm@etudelemarec.com. Formulaire de contact sur etudelemarec.com/contact. La prise de rendez-vous se fait par contact direct (pas de réservation en ligne).",
  },
] as const;

const CONSTATS = [
  "Constat par drone — éléments en hauteur ou zones difficiles d'accès, valeur probante",
  "Constats de travaux — avant, pendant et après chantier",
  "Immobilier et locatif — états des lieux, dégradations, abandon de domicile",
  "Numérique — SMS, contenus Internet, réseaux sociaux et sites web",
  "Voisinage — troubles, nuisances, empiétement, servitudes",
];

export function getLlmsTxt(): string {
  return `# ${BUSINESS.name}

> ${BUSINESS.description}

Site officiel de l'étude Le Marec (Commissaire de Justice, ex-huissier de justice). Données structurées Schema.org (LegalService, WebSite, FAQPage) intégrées dans les pages. Contact : ${BUSINESS.email} — ${BUSINESS.phoneDisplay} — ${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.addressLocality}.

## Pages principales

- [Accueil](${SITE_URL}/): Présentation de l'étude et accès aux services.
- [L'Étude](${SITE_URL}/etude): Équipe — Maître Eric Le Marec (dirigeant) et Magali Bonnet (stagiaire INCJ).
- [Constats](${SITE_URL}/constats): Constats drone, travaux, immobilier, numérique, voisinage, recouvrement.
- [Compétences](${SITE_URL}/competences): Signification, exécution, recouvrement, médiation, contentieux locatif.

## Contact et pratique

- [Nous contacter](${SITE_URL}/contact): Formulaire, coordonnées et zone d'intervention.
- [Prendre rendez-vous](${SITE_URL}/rendez-vous): Contact pour convenir d'un créneau (pas de réservation en ligne).
- [Paiement en ligne](${SITE_URL}/paiement): Règlement sécurisé via Stripe.

## Optional

- [Mentions légales](${SITE_URL}/mentions-legales): Éditeur, hébergeur Vercel, Stripe, données personnelles.
- [Documentation complète pour IA](${SITE_URL}/llms-full.txt): Synthèse détaillée du contenu du site pour les modèles de langage.
`;
}

export function getLlmsFullTxt(): string {
  const faqSection = FAQ_ITEMS.map(
    (item) => `### ${item.question}\n\n${item.answer}`,
  ).join("\n\n");

  return `# ${BUSINESS.name} — Documentation complète

> ${BUSINESS.description}

## Identité et coordonnées

- **Raison sociale** : ${BUSINESS.legalName}
- **Profession** : Commissaire de Justice (ex-huissier de justice)
- **Dirigeant** : Maître Eric Le Marec
- **Adresse** : ${BUSINESS.streetAddress}, ${BUSINESS.postalCode} ${BUSINESS.addressLocality}, ${BUSINESS.addressRegion}, France
- **Téléphone** : ${BUSINESS.phoneDisplay} (${BUSINESS.phone})
- **Email** : ${BUSINESS.email}
- **Site web** : ${SITE_URL}
- **Zone d'intervention** : ${BUSINESS.areaServed.join(", ")}

## Présentation

La SELARL Eric Le Marec est une étude de Commissaire de Justice installée à Herbignac depuis 2026, succédant à Me Jean-Philippe Marchand. Maître Eric Le Marec exerce depuis 2001, avec une expertise en constats (dont drone et internet), recouvrement, signification et exécution. Il est également médiateur (formation MARD, Sciences Po) et télépilote de drone certifié.

Magali Bonnet, stagiaire Commissaire de Justice à l'INCJ, accompagne l'étude. Ancienne avocate et juriste au tribunal judiciaire, elle se forme sur le terrain auprès de Maître Eric Le Marec.

## Constats

${CONSTATS.map((item) => `- ${item}`).join("\n")}

Les constats peuvent être réalisés sur tout le territoire national.

## Compétences juridiques

- **Signification des actes** : remise officielle d'actes judiciaires et extra-judiciaires
- **Exécution des décisions de justice** : saisies, expulsions, mesures conservatoires
- **Recouvrement amiable et judiciaire** : relances, négociation, injonctions, saisies
- **Médiation** : règlement amiable des différends
- **Contentieux locatif** : impayés, résiliations, expulsions, états des lieux

## Questions fréquentes

${faqSection}

## Pages du site

- ${SITE_URL}/
- ${SITE_URL}/etude
- ${SITE_URL}/constats
- ${SITE_URL}/competences
- ${SITE_URL}/contact
- ${SITE_URL}/rendez-vous
- ${SITE_URL}/paiement
- ${SITE_URL}/mentions-legales

## Données structurées

Ce site expose des schémas JSON-LD Schema.org de type LegalService, WebSite et FAQPage sur les pages HTML.
`;
}

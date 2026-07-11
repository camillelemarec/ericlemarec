import type { Metadata } from "next";

export const SITE_URL = "https://www.etudelemarec.com";

export const BUSINESS = {
  name: "SELARL Eric Le Marec",
  legalName: "SELARL Eric Le Marec",
  alternateNames: [
    "Étude Le Marec",
    "Etude Le Marec",
    "Étude Eric Le Marec",
    "Commissaire de Justice Herbignac",
    "Huissier Herbignac",
    "Commissaire de Justice La Baule",
    "Huissier La Baule",
  ],
  description:
    "Commissaire de Justice à Herbignac (44410). Constats, signification, exécution, recouvrement et médiation sur la Cour d'Appel de Rennes (44, 56, 35) et constats sur tout le territoire national.",
  email: "elm@etudelemarec.com",
  phone: "+33240889557",
  phoneDisplay: "02 40 88 95 57",
  streetAddress: "10, rue de Verdun",
  postalCode: "44410",
  addressLocality: "Herbignac",
  addressRegion: "Loire-Atlantique",
  addressCountry: "FR",
  geo: {
    latitude: 47.4469,
    longitude: -2.3167,
  },
  areaServed: [
    "Herbignac",
    "La Baule-Escoublac",
    "La Baule",
    "Guérande",
    "Saint-Nazaire",
    "Pornichet",
    "Loire-Atlantique",
    "Morbihan",
    "Ille-et-Vilaine",
    "Cour d'Appel de Rennes",
  ],
  googleVerification: "32dZHzoORzp5pAW6JmoGqRhGdY4zz3NaqcNoethT7TA",
};

export const SEO_KEYWORDS = [
  "étude le marec",
  "etude le marec",
  "SELARL Eric Le Marec",
  "commissaire de justice herbignac",
  "huissier herbignac",
  "commissaire de justice la baule",
  "huissier la baule",
  "commissaire de justice guérande",
  "huissier saint-nazaire",
  "constat herbignac",
  "constat la baule",
  "constat drone",
  "signification actes",
  "recouvrement amiable",
  "médiation",
  "exécution décisions justice",
  "cour d'appel de rennes",
  "loire-atlantique commissaire de justice",
  "44410 herbignac",
];

type PageSeoOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes("SELARL")
    ? title
    : `${title} | SELARL Eric Le Marec`;

  return {
    title: fullTitle,
    description,
    keywords: [...SEO_KEYWORDS, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: BUSINESS.name,
      title: fullTitle,
      description,
      images: [
        {
          url: `${SITE_URL}/images/page_accueil.jpg`,
          width: 1200,
          height: 630,
          alt: `${BUSINESS.name} — Commissaire de Justice à Herbignac`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/images/page_accueil.jpg`],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SELARL Eric Le Marec | Commissaire de Justice à Herbignac",
    template: "%s | SELARL Eric Le Marec",
  },
  description: BUSINESS.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Maître Eric Le Marec", url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "legal services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: BUSINESS.googleVerification,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "SELARL Eric Le Marec | Commissaire de Justice à Herbignac",
    description: BUSINESS.description,
    images: [
      {
        url: "/images/page_accueil.jpg",
        width: 1200,
        height: 630,
        alt: "SELARL Eric Le Marec — Commissaire de Justice Herbignac, La Baule, Guérande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SELARL Eric Le Marec | Commissaire de Justice à Herbignac",
    description: BUSINESS.description,
    images: ["/images/page_accueil.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export function getLegalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateNames,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logocompletSELARLERICLEMAREC.png`,
    image: `${SITE_URL}/images/page_accueil.jpg`,
    description: BUSINESS.description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.areaServed.map((place) => ({
      "@type": "AdministrativeArea",
      name: place,
    })),
    priceRange: "$$",
    knowsAbout: [
      "Constats",
      "Constats par drone",
      "Signification d'actes",
      "Exécution des décisions de justice",
      "Recouvrement amiable et judiciaire",
      "Médiation",
      "Contentieux locatif",
    ],
    founder: {
      "@type": "Person",
      name: "Maître Eric Le Marec",
      jobTitle: "Commissaire de Justice",
    },
    sameAs: [],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/contact?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact — Commissaire de Justice Herbignac & La Baule",
  description:
    "Contactez l'étude Le Marec, Commissaire de Justice à Herbignac (44410). Tél. 02 40 88 95 57. Zone d'intervention : La Baule, Guérande, Saint-Nazaire, Loire-Atlantique, Morbihan et Ille-et-Vilaine.",
  path: "/contact",
  keywords: [
    "contact huissier herbignac",
    "commissaire de justice la baule contact",
    "étude le marec téléphone",
  ],
});

export default function ContactPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <PageHeader title="Nous Contacter" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Coordonnées
              </div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div>Adresse : 10, rue de Verdun, 44410 Herbignac</div>
                <div>Téléphone : 02 40 88 95 57</div>
                <div>
                  Email :{" "}
                  <a
                    className="text-primary hover:text-primary-strong"
                    href="mailto:elm@etudelemarec.com"
                  >
                    elm@etudelemarec.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Zone d&apos;intervention
              </div>
              <p className="mt-3 text-sm text-slate-700">
                En tant que Commissaire de Justice à Herbignac, j&apos;interviens
                sur la Cour d&apos;Appel de Rennes : Loire-Atlantique (44),
                Morbihan (56) et Ille-et-Vilaine (35), notamment à La Baule,
                Guérande, Pornichet et Saint-Nazaire. Pour les constats, y
                compris par drone, j&apos;interviens sur tout le territoire
                national.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-sm font-semibold text-slate-800">
                {["44", "56", "35"].map((dept) => (
                  <div
                    key={dept}
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    {dept}
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Localisation Herbignac"
                className="h-64 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=10+rue+de+Verdun+44410+Herbignac&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

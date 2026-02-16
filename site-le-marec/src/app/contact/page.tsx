import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";
import Link from "next/link";

export const metadata = {
  title: "Contact | SELARL Eric Le Marec",
  description:
    "Coordonnées, formulaire de contact et zone d’intervention de l’étude.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <PageHeader
          title="Nous Contacter"
          subtitle="Un interlocuteur unique pour vous orienter rapidement."
        />
        <div className="mt-2">
          <Link
            href="/rendez-vous"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/15"
          >
            Prendre directement rendez-vous
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Coordonnées
              </div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div>Adresse : 10, rue de Verdun – 44410 Herbignac</div>
                <div>Téléphone : 06 85 11 21 13</div>
                <div>Email : lemareceric@gmail.com</div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Zone d&apos;intervention
              </div>
              <p className="mt-3 text-sm text-slate-700">
                Cour d&apos;Appel de Rennes : Loire-Atlantique (44), Morbihan
                (56), Ille-et-Vilaine (35). Interventions nationales pour les
                constats.
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


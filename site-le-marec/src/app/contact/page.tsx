import { ContactForm } from "@/components/contact-form";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Contact | SELARL Eric Le Marec",
  description:
    "Coordonnées, formulaire de contact et zone d’intervention de l’étude.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--color-sand)]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-10">
        <PageHeader
          title="Nous Contacter"
          subtitle="Un interlocuteur unique pour vous orienter rapidement."
        />

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2702.911577950044!2d-2.316!3d47.468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ac2bb5b49ba3%3A0x9a9e2b4a6e1a096d!2sHerbignac!5e0!3m2!1sfr!2sfr!4v0000000000000"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


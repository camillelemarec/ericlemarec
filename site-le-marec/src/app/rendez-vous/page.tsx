import Link from "next/link";
import { PageHeader } from "@/components/page-header";

import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Prendre rendez-vous",
  description:
    "Prenez rendez-vous avec l'étude Le Marec, Commissaire de Justice à Herbignac. Contact par téléphone, e-mail ou formulaire en ligne.",
  path: "/rendez-vous",
});

export default function RendezVousPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl space-y-8 px-6 py-12">
        <PageHeader
          title="Prendre rendez-vous"
          subtitle="La prise de rendez-vous en ligne n'est pas proposée sur ce site. Merci de nous contacter pour convenir d'un créneau."
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-700">
            Utilisez le formulaire de contact, l&apos;e-mail ou le téléphone
            indiqués sur la page « Nous contacter » : nous vous répondrons dans
            les meilleurs délais pour organiser un entretien.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Accéder au formulaire de contact
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

import { AppointmentForm } from "@/components/appointment-form";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "Prendre rendez-vous | SELARL Eric Le Marec",
  description:
    "Réservez un rendez-vous en ligne : coordonnées, service demandé et créneaux disponibles.",
};

export default function RendezVousPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl space-y-8 px-6 py-12">
        <PageHeader
          title="Prise de rendez-vous"
          subtitle="Choisissez votre service puis sélectionnez un créneau disponible, comme sur une interface de réservation rapide."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <AppointmentForm />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Comment ça marche ?
              </div>
              <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-slate-700">
                <li>Choisissez le service qui correspond à votre besoin.</li>
                <li>Sélectionnez un créneau disponible.</li>
                <li>Validez votre demande de rendez-vous.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Informations utiles
              </div>
              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <p>
                  Les créneaux affichés sont synchronisés via Google Calendar quand
                  l&apos;API est configurée.
                </p>
                <p>
                  En cas d&apos;urgence, vous pouvez aussi nous joindre par email.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}


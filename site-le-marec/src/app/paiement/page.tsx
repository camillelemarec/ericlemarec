import { PageHeader } from "@/components/page-header";
import { PaymentForm } from "@/components/payment-form";

export const metadata = {
  title: "Paiement en ligne | SELARL Eric Le Marec",
  description:
    "Réglez votre facture en ligne : référence dossier, nom, montant libre. Stripe prêt à être intégré.",
};

export default function PaiementPage() {
  return (
    <div className="bg-[#f5f7fa]">
      <section className="mx-auto max-w-6xl px-6 py-12 space-y-8">
        <PageHeader
          title="Paiement en ligne"
          subtitle="Réglez votre facture en toute sécurité. Saisie libre du montant, identifiée par votre référence dossier."
        />
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">
            Intégration Stripe prévue
          </div>
          <p className="mt-2">
            Le formulaire ci-dessous est prêt pour connecter Stripe (PaymentIntent
            ou Checkout). Les champs requis : Référence dossier, Nom du client,
            Montant (€). Possibilité d&apos;ajouter l&apos;email pour le reçu.
          </p>
          <p className="mt-2 text-slate-600">
            Le Cabinet ABGI pourra également proposer ses règlements en ligne ici.
          </p>
        </div>
        <PaymentForm />
      </section>
    </div>
  );
}


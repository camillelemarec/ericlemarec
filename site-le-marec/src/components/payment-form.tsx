"use client";

import { FormEvent } from "react";

export function PaymentForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder pour intégration Stripe (PaymentIntent / Checkout).
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-800">
          Référence dossier / facture
        </label>
        <input
          type="text"
          required
          placeholder="Ex : D2025-00123"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-800">
          Nom du client
        </label>
        <input
          type="text"
          required
          placeholder="Votre nom"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-800">
          Montant à régler (€)
        </label>
        <input
          type="number"
          min="1"
          step="0.01"
          required
          placeholder="Ex : 250,00"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15"
        />
      </div>
      <p className="text-sm text-slate-500">
        Le paiement est sécurisé via Stripe. Vous recevrez une confirmation par
        email dès validation.
      </p>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-strong)]"
      >
        Procéder au paiement
      </button>
    </form>
  );
}


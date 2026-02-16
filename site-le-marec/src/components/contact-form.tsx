"use client";

import { FormEvent } from "react";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder pour intégration future (email/API).
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-800">Nom</label>
          <input
            type="text"
            required
            placeholder="Nom et prénom"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-800">Email</label>
          <input
            type="email"
            required
            placeholder="email@domaine.com"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-800">Objet</label>
        <input
          type="text"
          required
          placeholder="Sujet de votre demande"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
      </div>
      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-800">Message</label>
        <textarea
          rows={4}
          required
          placeholder="Votre message"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong sm:w-auto"
      >
        Envoyer le message
      </button>
    </form>
  );
}


"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Slot = {
  start: string;
  end: string;
  label: string;
  dayLabel: string;
};

const serviceOptions = [
  "Constat par drone",
  "Travaux",
  "Immobilier & locatif",
  "Numérique",
  "Voisinage",
  "Médiation conventionnelle",
  "Médiation judiciaire",
  "Amiable",
  "Judiciaire",
  "Impayés de loyers",
];

export function AppointmentForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [details, setDetails] = useState("");
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [source, setSource] = useState("fallback");
  const [warning, setWarning] = useState<string | null>(null);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchSlots = async () => {
      setIsLoadingSlots(true);
      setWarning(null);
      setSelectedSlot(null);
      try {
        const response = await fetch(
          `/api/rendez-vous/slots?service=${encodeURIComponent(service)}`,
          {
            signal: controller.signal,
          }
        );
        const data = (await response.json()) as {
          source: string;
          warning?: string;
          slots: Slot[];
        };
        setSlots(data.slots ?? []);
        setSource(data.source ?? "fallback");
        setWarning(data.warning ?? null);
      } catch (error) {
        if ((error as { name?: string }).name === "AbortError") return;
        setSlots([]);
        setSource("fallback");
        setWarning("Impossible de charger les créneaux pour le moment.");
      } finally {
        setIsLoadingSlots(false);
      }
    };
    fetchSlots();
    return () => controller.abort();
  }, [service]);

  const groupedSlots = useMemo(() => {
    const groups: Record<string, Slot[]> = {};
    slots.forEach((slot) => {
      if (!groups[slot.dayLabel]) groups[slot.dayLabel] = [];
      groups[slot.dayLabel].push(slot);
    });
    return Object.entries(groups);
  }, [slots]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedSlot) return;
    setIsSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-slate-900">Prendre rendez-vous</h2>
        <p className="text-sm text-slate-600">
          Renseignez vos informations, choisissez votre service et sélectionnez un
          créneau.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5 sm:col-span-2">
          <label className="text-sm font-semibold text-slate-800">Nom et prénom</label>
          <input
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Ex : Jean Dupont"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-800">Téléphone</label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Ex : 06 12 34 56 78"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-semibold text-slate-800">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@domaine.com"
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-800">Service souhaité</label>
        <select
          value={service}
          onChange={(event) => setService(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-semibold text-slate-800">
          Précisions (facultatif)
        </label>
        <textarea
          rows={3}
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Décrivez brièvement votre besoin"
          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-800">Créneaux disponibles</div>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
            {source === "google_calendar"
              ? "Synchronisé Google Calendar"
              : "Mode disponibilité locale"}
          </span>
        </div>

        {warning ? (
          <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700">
            {warning}
          </p>
        ) : null}

        {isLoadingSlots ? (
          <p className="text-sm text-slate-500">Chargement des créneaux…</p>
        ) : groupedSlots.length === 0 ? (
          <p className="text-sm text-slate-500">
            Aucun créneau disponible actuellement. Merci de nous contacter directement.
          </p>
        ) : (
          <div className="space-y-4">
            {groupedSlots.map(([dayLabel, daySlots]) => (
              <div key={dayLabel} className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {dayLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {daySlots.map((slot) => {
                    const selected = selectedSlot?.start === slot.start;
                    return (
                      <button
                        key={slot.start}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                          selected
                            ? "border-primary bg-primary text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!selectedSlot}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-50"
      >
        Valider ma demande de rendez-vous
      </button>

      {isSubmitted && selectedSlot ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Demande bien reçue pour <strong>{service}</strong> le{" "}
          <strong>{selectedSlot.dayLabel}</strong> ({selectedSlot.label}). L&apos;étude
          vous recontactera pour confirmation.
        </p>
      ) : null}
    </form>
  );
}


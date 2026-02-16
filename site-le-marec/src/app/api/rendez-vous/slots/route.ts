import { NextRequest, NextResponse } from "next/server";

const DEFAULT_TZ = "Europe/Paris";
const SLOT_STEP_MINUTES = 30;
const SEARCH_DAYS = 14;
const MAX_SLOTS = 24;

const serviceDurations: Record<string, number> = {
  "Constat par drone": 60,
  Travaux: 45,
  "Immobilier & locatif": 45,
  Numérique: 45,
  Voisinage: 45,
  "Médiation conventionnelle": 60,
  "Médiation judiciaire": 60,
  Amiable: 45,
  Judiciaire: 60,
  "Impayés de loyers": 60,
};

type TimeRange = {
  start: Date;
  end: Date;
};

type SlotDto = {
  start: string;
  end: string;
  label: string;
  dayLabel: string;
};

function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60_000);
}

function overlaps(a: TimeRange, b: TimeRange) {
  return a.start < b.end && b.start < a.end;
}

function isBusinessDay(date: Date) {
  const day = date.getDay();
  return day !== 0 && day !== 6;
}

function atHour(date: Date, hour: number, minute = 0) {
  const result = new Date(date);
  result.setHours(hour, minute, 0, 0);
  return result;
}

function formatSlot(start: Date, end: Date): SlotDto {
  const dayLabel = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    timeZone: DEFAULT_TZ,
  }).format(start);

  const startLabel = new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: DEFAULT_TZ,
  }).format(start);

  const endLabel = new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: DEFAULT_TZ,
  }).format(end);

  return {
    start: start.toISOString(),
    end: end.toISOString(),
    label: `${startLabel} - ${endLabel}`,
    dayLabel,
  };
}

function buildCandidateSlots(durationMinutes: number, busyRanges: TimeRange[]) {
  const slots: SlotDto[] = [];
  const now = new Date();

  for (let dayOffset = 0; dayOffset < SEARCH_DAYS; dayOffset += 1) {
    const day = addMinutes(now, dayOffset * 24 * 60);
    if (!isBusinessDay(day)) continue;

    const dayStart = atHour(day, 9, 0);
    const dayEnd = atHour(day, 18, 0);

    for (
      let cursor = new Date(dayStart);
      addMinutes(cursor, durationMinutes) <= dayEnd;
      cursor = addMinutes(cursor, SLOT_STEP_MINUTES)
    ) {
      if (cursor < now) continue;

      const range = { start: cursor, end: addMinutes(cursor, durationMinutes) };
      const blocked = busyRanges.some((busy) => overlaps(range, busy));
      if (blocked) continue;

      slots.push(formatSlot(range.start, range.end));
      if (slots.length >= MAX_SLOTS) return slots;
    }
  }

  return slots;
}

async function fetchBusyRanges(timeMin: Date, timeMax: Date) {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!apiKey || !calendarId) return null;

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/freeBusy?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        timeZone: DEFAULT_TZ,
        items: [{ id: calendarId }],
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Google Calendar freeBusy failed (${response.status})`);
  }

  const data = (await response.json()) as {
    calendars?: Record<string, { busy?: Array<{ start: string; end: string }> }>;
  };

  const busy = data.calendars?.[calendarId]?.busy ?? [];
  return busy
    .map((item) => ({
      start: new Date(item.start),
      end: new Date(item.end),
    }))
    .filter((item) => !Number.isNaN(item.start.valueOf()) && !Number.isNaN(item.end.valueOf()));
}

export async function GET(request: NextRequest) {
  const service = request.nextUrl.searchParams.get("service") ?? "Amiable";
  const durationMinutes = serviceDurations[service] ?? 45;

  const now = new Date();
  const searchEnd = addMinutes(now, SEARCH_DAYS * 24 * 60);

  try {
    const busyRanges = (await fetchBusyRanges(now, searchEnd)) ?? [];
    const slots = buildCandidateSlots(durationMinutes, busyRanges);

    return NextResponse.json({
      source: busyRanges.length > 0 ? "google_calendar" : "fallback",
      slots,
    });
  } catch {
    const slots = buildCandidateSlots(durationMinutes, []);
    return NextResponse.json({
      source: "fallback",
      slots,
      warning:
        "Google Calendar non disponible. Vérifiez GOOGLE_CALENDAR_API_KEY et GOOGLE_CALENDAR_ID.",
    });
  }
}


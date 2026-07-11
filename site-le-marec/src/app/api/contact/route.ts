import { Resend } from "resend";

import { BUSINESS } from "@/lib/seo";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!resend) {
    return Response.json(
      { error: "Service d'envoi d'e-mails non configuré." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const subject = payload.subject?.trim();
  const message = payload.message?.trim();

  if (payload.website?.trim()) {
    return Response.json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: "Tous les champs sont obligatoires." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 },
    );
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Contact Étude Le Marec <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: BUSINESS.email,
    replyTo: email,
    subject: `[Contact site] ${subject}`,
    text: [
      "Nouveau message depuis le formulaire de contact du site.",
      "",
      `Nom : ${name}`,
      `E-mail : ${email}`,
      `Objet : ${subject}`,
      "",
      "Message :",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Erreur envoi e-mail contact:", error);
    return Response.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}

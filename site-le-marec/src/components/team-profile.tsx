"use client";

import Image from "next/image";
import { useState } from "react";

type Milestone = {
  year: string;
  title: string;
  detail: string;
};

type Member = {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string[];
  highlight?: string;
  milestones?: Milestone[];
};

const members: Member[] = [
  {
    id: "eric",
    name: "Maître Eric Le Marec",
    role: "Commissaire de Justice",
    photo: "/images/IMG_5645.jpeg",
    highlight: "Dirigeant de la SELARL Eric Le Marec",
    bio: [
      "J'exerce en qualité d'Huissier de Justice depuis 2001 (devenu Commissaire de Justice en 2022). J'ai exercé comme associé dans une importante étude parisienne, pratiquant toutes les facettes de ce métier varié, et particulièrement actif en matière de constats, constats internet, contrôle des opérations de jeux et tirages au sort. En parallèle, j'ai développé une expertise solide en recouvrement amiable et judiciaire, ainsi qu'en signification et exécution des décisions.",
      "Depuis 2024, grâce à une formation complémentaire à Sciences Po, je propose d'intervenir en qualité de médiateur.",
      "Depuis avril 2026, succédant à Me Jean-Philippe Marchand, je me suis installé à Herbignac et je complète ma pratique par une qualification en tant que télépilote de drone afin de proposer cet outil incomparable pour réaliser des constats en hauteur ou dans des zones difficiles d'accès.",
    ],
    milestones: [
      {
        year: "2001",
        title: "Prestation de serment",
        detail:
          "Installation à Paris 9ème, en tant qu'associé de la SCP Simonin-Le Marec.",
      },
      {
        year: "2001-2025",
        title: "Constats, recouvrement, exécution",
        detail:
          "Expérience approfondie en matière de constats, recouvrement et suivi des procédures d'exécution. Clientèle composée de professionnels, avocats, syndics et particuliers.",
      },
      {
        year: "2022",
        title: "Qualification Commissaire de Justice",
        detail:
          "Obtention de la qualification professionnelle de Commissaire de Justice.",
      },
      {
        year: "2022-2025",
        title: "Chambre Régionale des Commissaires de Justice (Paris)",
        detail:
          "Membre de la Chambre Régionale de la Cour d'Appel de Paris : traitement des dossiers de réclamations, suivi du chantier du futur siège de la Chambre Régionale et création du centre de médiation CJMED.",
      },
      {
        year: "2024",
        title: "Médiation – MARD (Sciences Po) & Tutelles",
        detail:
          "Formation à la médiation MARD à Sciences Po et formation à la vérification des comptes de tutelles.",
      },
      {
        year: "2025",
        title: "CJMED Paris & Saisie des rémunérations",
        detail:
          "Qualification en tant que Commissaire de Justice Répartiteur en matière de Saisie des Rémunérations, membre fondateur du CJMED Paris.",
      },
      {
        year: "2026",
        title: "Installation à Herbignac & télépilote de drone",
        detail:
          "Reprise de l'office de Me Jean-Philippe Marchand, Commissaire de Justice, compétent sur la Cour d'Appel de Rennes et pour les constats sur tout le territoire national. Certification télépilote de drone.",
      },
    ],
  },
  {
    id: "magali",
    name: "Magali Bonnet",
    role: "Stagiaire Commissaire de Justice",
    photo: "/images/magali-bonnet.jpeg",
    highlight:
      "En formation auprès de l'Institut National des Commissaires de Justice (INCJ)",
    bio: [
      "C'est forte de mon expérience d'avocate puis de juriste au sein d'un tribunal judiciaire que j'ai rejoint l'étude, dans le cadre de mon cursus de formation auprès de l'Institut National des Commissaires de Justice.",
      "Je suis aux côtés de Maître Eric Le Marec afin de me former avec lui sur le terrain, et ce grâce à sa solide expérience professionnelle lui permettant de m'accompagner vers le diplôme de Commissaire de Justice.",
      "Comme lui, j'ai à cœur d'accueillir au mieux les justiciables et clients afin de leur apporter un service de qualité et de proximité sur le secteur d'Herbignac.",
      "Titulaire d'une maîtrise en droit des affaires puis d'un master Carrières judiciaires, délivrés par l'université de Rennes, j'ai récemment enrichi ma formation en droit de la preuve auprès du CNAM par deux diplômes : une spécialisation en droit de la cybersécurité et une seconde en protection des données personnelles.",
    ],
  },
];

function PastilleButton({
  member,
  active,
  onClick,
}: {
  member: Member;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative flex flex-col items-center gap-3 rounded-3xl border bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 ${
        active
          ? "border-primary ring-2 ring-primary/40"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <div
        className={`relative h-44 w-44 overflow-hidden rounded-full border-4 transition ${
          active ? "border-primary" : "border-white shadow-card"
        }`}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="176px"
          className="object-cover object-top"
          priority={member.id === "eric"}
        />
      </div>
      <div className="space-y-1">
        <div className="text-base font-semibold text-slate-900">
          {member.name}
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          {member.role}
        </div>
      </div>
      <span
        className={`text-xs font-semibold transition ${
          active ? "text-primary" : "text-slate-400 group-hover:text-primary"
        }`}
      >
        {active ? "Profil ouvert" : "Voir le profil →"}
      </span>
    </button>
  );
}

function MemberPanel({ member }: { member: Member }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center gap-3 lg:w-56 lg:shrink-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="160px"
              className="object-cover object-top"
            />
          </div>
          <div className="text-center">
            <div className="text-base font-semibold text-slate-900">
              {member.name}
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {member.role}
            </div>
          </div>
          {member.highlight ? (
            <div className="rounded-xl bg-primary/10 px-3 py-2 text-center text-xs font-medium text-primary">
              {member.highlight}
            </div>
          ) : null}
        </div>

        <div className="flex-1 space-y-4">
          <div className="space-y-3 text-slate-700">
            {member.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {member.milestones && member.milestones.length > 0 ? (
            <div className="relative mt-6 space-y-6 border-t border-slate-100 pt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Parcours
              </div>
              <div className="relative space-y-6">
                <div className="absolute left-3 top-1 bottom-1 w-px bg-slate-200" />
                {member.milestones.map((item) => (
                  <div key={item.year} className="relative pl-10">
                    <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1.5 rounded-full border-2 border-white bg-primary shadow-sm" />
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      <span>{item.year}</span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </div>
                    <div className="mt-2 text-base font-semibold text-slate-900">
                      {item.title}
                    </div>
                    <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function TeamProfile() {
  const [activeId, setActiveId] = useState(members[0].id);
  const activeMember =
    members.find((m) => m.id === activeId) ?? members[0];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {members.map((member) => (
          <PastilleButton
            key={member.id}
            member={member}
            active={member.id === activeId}
            onClick={() => setActiveId(member.id)}
          />
        ))}
      </div>

      <MemberPanel member={activeMember} />
    </div>
  );
}

import Image from "next/image";

type Member = {
  name: string;
  role: string;
  photo?: string;
  description: string;
  highlight?: string;
};

const members: Member[] = [
  {
    name: "Maître Eric Le Marec",
    role: "Commissaire de Justice",
    photo: "/images/IMG_5645.jpeg",
    description:
      "Commissaire de Justice, compétent sur la Cour d'Appel de Rennes et pour des constats sur tout le territoire national.",
    highlight: "Dirigeant de la SELARL Eric Le Marec",
  },
  {
    name: "Magali Bonnet",
    role: "Stagiaire",
    photo: undefined,
    description:
      "En cours d'ajout : portrait et présentation de Magali. Elle accompagne l'étude sur le suivi des dossiers et la relation clients.",
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="shadow-card relative overflow-hidden rounded-3xl border border-slate-200">
      {member.photo ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${member.photo}')` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-white to-slate-100" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55" />
      <div className="relative flex flex-col gap-3 p-8 text-white">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
          Portrait
        </div>
        <div className="text-3xl font-semibold leading-tight">
          {member.name}
        </div>
        <div className="text-sm font-semibold text-white/80">{member.role}</div>
        <p className="text-white" style={{ color: "#ffffff" }}>
          {member.description}
        </p>
        {member.highlight ? (
          <div className="rounded-2xl bg-white/12 px-4 py-3 text-sm font-medium text-white backdrop-blur">
            {member.highlight}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function TeamProfile() {
  return (
    <div className="lg:sticky lg:top-24 space-y-6">
      {members.map((member) => (
        <MemberCard key={member.name} member={member} />
      ))}
    </div>
  );
}

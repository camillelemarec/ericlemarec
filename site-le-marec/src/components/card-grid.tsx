import Link from "next/link";

type Card = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};

type CardGridProps = {
  cards: Card[];
};

export function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Link
          key={card.title}
          href={card.href}
          className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              {card.icon ?? "•"}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              {card.title}
            </h3>
          </div>
          <p className="text-sm text-slate-600">{card.description}</p>
          <span className="mt-auto text-sm font-semibold text-[var(--color-primary)] transition group-hover:text-[var(--color-primary-strong)]">
            Découvrir
          </span>
        </Link>
      ))}
    </div>
  );
}


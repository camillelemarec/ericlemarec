import { ReactNode } from "react";
import Image from "next/image";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  note?: string;
  backgroundImage?: string;
  sidePanel?: ReactNode;
};

export function Hero({
  eyebrow,
  subtitle,
  note,
  backgroundImage,
  sidePanel,
}: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/48 to-black/30" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-sand)] via-white to-white" />
      )}

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
        <div className="flex-1 space-y-6 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] md:text-left">
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-2xl font-semibold uppercase tracking-[0.14em] text-white/90 md:text-3xl">
              {eyebrow}
            </span>
          ) : null}
          {/* Titre principal retiré à la demande */}
          <p
            className="inline-flex w-fit max-w-2xl items-center rounded-md bg-black/45 px-3 py-2 text-lg font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
            style={{ color: "#ffffff" }}
          >
            {subtitle}
          </p>
          {/* CTA supprimés à la demande */}
          {note ? (
            <p
              className="inline-flex w-fit items-center rounded-md bg-black/45 px-3 py-2 text-sm font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
              style={{ color: "#ffffff" }}
            >
              {note}
            </p>
          ) : null}
        </div>

        {sidePanel ? <div className="flex-1">{sidePanel}</div> : null}
      </div>
    </section>
  );
}


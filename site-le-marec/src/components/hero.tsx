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
  backgroundVideo?: string;
  sidePanel?: ReactNode;
};

export function Hero({
  eyebrow,
  subtitle,
  note,
  backgroundImage,
  backgroundVideo,
  sidePanel,
}: HeroProps) {
  return (
    <section
      className={`relative flex min-h-[calc(100svh-3.5rem)] items-center overflow-hidden md:min-h-screen ${
        backgroundVideo ? "bg-black" : "bg-white"
      }`}
    >
      {backgroundVideo ? (
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        </div>
      ) : backgroundImage ? (
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7fa] via-white to-white" />
      )}

      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:gap-12 md:px-6 md:py-20">
        <div className="flex-1 space-y-4 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] md:space-y-6 md:text-left">
          {eyebrow ? (
            <span className="inline-flex max-w-full items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-base font-semibold uppercase tracking-[0.1em] text-white/90 md:px-4 md:text-3xl md:tracking-[0.14em]">
              {eyebrow}
            </span>
          ) : null}
          {/* Titre principal retiré à la demande */}
          <p
            className="inline-flex w-full max-w-2xl items-center rounded-md bg-black/45 px-3 py-2 text-base font-medium text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] md:w-fit md:text-lg"
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


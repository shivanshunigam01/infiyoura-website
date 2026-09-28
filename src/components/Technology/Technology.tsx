import type { CSSProperties } from "react";

import { TECH } from "@/lib/content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

const TECH_ACCENTS: Record<string, string> = {
  React: "#61dafb",
  "Next.js": "#ffffff",
  "Node.js": "#68a063",
  TypeScript: "#3178c6",
  Python: "#ffd43b",
  AWS: "#ff9900",
  MongoDB: "#47a248",
  PostgreSQL: "#336791",
  Firebase: "#ffca28",
  Docker: "#2496ed",
  "Three.js": "#ffffff",
  "Google Ads": "#4285f4",
  "Meta Ads": "#0668e1",
  Analytics: "#00c76b",
};

function TechPill({ name }: { name: string }) {
  const accent = TECH_ACCENTS[name] ?? "var(--brand-green)";

  return (
    <span className="tech-pill group/pill shrink-0">
      <span
        className="tech-pill-dot"
        style={
          {
            "--pill-accent": accent,
          } as CSSProperties
        }
        aria-hidden
      />
      <span className="text-[0.8125rem] font-medium tracking-tight text-zinc-200 transition-colors group-hover/pill:text-white">
        {name}
      </span>
    </span>
  );
}

function TechMarqueeRow({
  items,
  reverse,
  durationClass,
}: {
  items: readonly string[];
  reverse?: boolean;
  durationClass?: string;
}) {
  const row = [...items, ...items];

  return (
    <div
      className={`flex w-max gap-3 px-3 ${reverse ? "marquee-track-reverse" : "marquee-track"} ${durationClass ?? ""}`}
    >
      {row.map((t, i) => (
        <TechPill key={`${t}-${i}`} name={t} />
      ))}
    </div>
  );
}

export function Technology() {
  const midpoint = Math.ceil(TECH.length / 2);
  const rowA = TECH.slice(0, midpoint);
  const rowB = TECH.slice(midpoint);

  return (
    <section id="technology" className="relative overflow-hidden border-t border-white/10 bg-zinc-950 py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,199,107,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 premium-grid opacity-40" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grain-overlay" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-[var(--brand-green)]/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Stack</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technology & tools
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Modern stacks for fast, secure, scalable delivery—from product engineering to growth analytics.
          </p>
        </RevealOnScroll>
      </div>

      <div className="relative mt-12 space-y-4 sm:mt-14">
        <div className="marquee-mask overflow-hidden py-1">
          <TechMarqueeRow items={rowA} durationClass="marquee-duration-slow" />
        </div>
        <div className="marquee-mask overflow-hidden py-1">
          <TechMarqueeRow items={rowB} reverse durationClass="marquee-duration-fast" />
        </div>
      </div>
    </section>
  );
}

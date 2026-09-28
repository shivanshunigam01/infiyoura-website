import { TECH } from "@/lib/content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function Technology() {
  const row = [...TECH, ...TECH];

  return (
    <section id="technology" className="overflow-hidden border-t border-white/10 bg-zinc-900/40 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll>
          <h2 className="text-2xl font-semibold tracking-tight text-white">Technology & tools</h2>
          <p className="mt-2 text-sm text-zinc-500">Modern stacks for fast, secure, scalable delivery.</p>
        </RevealOnScroll>
      </div>
      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-900 to-transparent" />
        <div className="flex w-max marquee-track gap-3 px-3">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="shrink-0 rounded-full border border-white/10 bg-zinc-950/80 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-[var(--brand-green)]/50 hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

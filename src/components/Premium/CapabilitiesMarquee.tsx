import { HOME_CAPABILITIES } from "@/lib/home-content";

export function CapabilitiesMarquee() {
  const items = [...HOME_CAPABILITIES, ...HOME_CAPABILITIES];

  return (
    <section className="border-b border-white/10 bg-zinc-900/80 py-8">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-900 to-transparent" />
        <div className="flex w-max marquee-track gap-4 px-4">
          {items.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="shrink-0 rounded-full border border-white/10 bg-zinc-950/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

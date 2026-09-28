import { PROCESS } from "@/lib/content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function Process() {
  return (
    <section id="process" className="border-t border-white/10 bg-zinc-950 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">How we deliver</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-400">A proven path from idea to launch—and long-term growth.</p>
        </RevealOnScroll>
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent xl:block"
            aria-hidden
          />
          {PROCESS.map((p, i) => (
            <RevealOnScroll key={p.step} delay={i * 70}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition duration-500 hover:border-[var(--brand-green)]/40 hover:bg-white/[0.05]">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-xs font-bold text-[var(--brand-green)] transition group-hover:bg-[var(--brand-green)] group-hover:text-zinc-950"
                >
                  {p.step}
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">{p.title}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

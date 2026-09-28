import { TESTIMONIALS } from "@/lib/home-content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function TestimonialsSection() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Clients</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Trusted by growing teams</h2>
        </RevealOnScroll>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 100}>
              <blockquote className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <p className="text-base leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </footer>
              </blockquote>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

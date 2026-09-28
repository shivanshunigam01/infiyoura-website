import { Button } from "@/components/UI/Button";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,107,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[var(--brand-green)]/15 blur-3xl animate-gradient-drift" />
      <RevealOnScroll className="relative mx-auto max-w-2xl px-5 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Ready?</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Have an idea worth building?
        </h2>
        <p className="mt-4 text-zinc-400">Partner with a team that ships design, code, and growth together.</p>
        <Button href="/contact" className="mt-8 shadow-[0_12px_40px_rgba(0,199,107,0.3)] transition-transform hover:scale-[1.03]">
          Start a project
        </Button>
      </RevealOnScroll>
    </section>
  );
}

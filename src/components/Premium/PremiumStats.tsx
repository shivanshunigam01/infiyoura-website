import { HOME_STATS } from "@/lib/home-content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function PremiumStats() {
  return (
    <section className="relative border-y border-white/10 bg-zinc-950 py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,199,107,0.08),transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {HOME_STATS.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 60} className="text-center md:text-left">
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

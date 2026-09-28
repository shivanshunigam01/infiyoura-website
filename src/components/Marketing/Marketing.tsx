import Image from "next/image";
import { MARKETING_HIGHLIGHTS } from "@/lib/home-content";
import { UNSPLASH_IT } from "@/lib/unsplash";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

const PILLARS = [
  {
    title: "Performance ads",
    body: "Google & Meta campaigns tuned for ROAS, with creative that matches your funnel.",
  },
  {
    title: "SEO & content",
    body: "Technical foundations plus content that ranks and builds authority over time.",
  },
  {
    title: "Social & brand",
    body: "Always-on social, reels, and brand systems that feel premium and consistent.",
  },
] as const;

export function Marketing() {
  return (
    <section id="marketing" className="relative border-y border-white/10 bg-zinc-900 py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,199,107,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Solutions</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Digital growth that compounds.
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              Performance marketing, SEO, and social campaigns engineered to reach the right audience and convert—aligned
              with the product experience we build for you.
            </p>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {MARKETING_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1 w-1 rounded-full bg-[var(--brand-green)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delay={100} className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={UNSPLASH_IT.marketing}
              alt="Digital marketing team reviewing growth metrics"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
          </RevealOnScroll>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 100}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-500 hover:border-[var(--brand-green)]/40 hover:bg-white/[0.08]">
                <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand-green)] transition-all duration-500 group-hover:w-16" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

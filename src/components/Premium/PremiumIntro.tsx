import Image from "next/image";
import { HOME_PILLARS } from "@/lib/home-content";
import { UNSPLASH_IT } from "@/lib/unsplash";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function PremiumIntro() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 lg:py-32">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Why Infiyoura</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              One partner for product, brand, and growth.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
              We are a digital studio for startups and ambitious brands—combining website development, mobile apps,
              social media, and performance marketing so you ship faster and look world-class at every touchpoint.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Based in India, working globally. Dedicated squads for design, engineering, and growth—one roadmap, one
              Slack channel, one accountable team.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={120} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src={UNSPLASH_IT.officeTeam}
              alt="Technology team collaborating in a modern office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/50 to-transparent" />
          </RevealOnScroll>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {HOME_PILLARS.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 90}>
              <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-500 hover:border-[var(--brand-green)]/40 hover:bg-white/[0.05]">
                <div className="relative h-40">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="mb-3 h-px w-10 bg-gradient-to-r from-[var(--brand-green)] to-transparent" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

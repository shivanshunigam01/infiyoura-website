import Image from "next/image";
import Link from "next/link";
import { SERVICE_GROUPS } from "@/lib/content";
import { UNSPLASH_IT } from "@/lib/unsplash";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

const SERVICE_IMAGES = [
  { src: UNSPLASH_IT.laptopCode, alt: "Software development" },
  { src: UNSPLASH_IT.designUI, alt: "Product design" },
  { src: UNSPLASH_IT.mobileDev, alt: "Mobile applications" },
  { src: UNSPLASH_IT.analytics, alt: "Growth and analytics" },
] as const;

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-white/10 bg-zinc-950 py-16 sm:py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-[var(--brand-green)]/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Services</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to build, launch & grow.
          </h2>
          <p className="mt-5 max-w-2xl text-zinc-400">
            From first prototype to always-on marketing—we cover development, design, social, SEO, and paid growth under
            one roof.
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" delay={80}>
          {SERVICE_IMAGES.map((img) => (
            <div key={img.alt} className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/10">
              <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="25vw" />
              <div className="absolute inset-0 bg-zinc-950/30 transition hover:bg-zinc-950/10" />
            </div>
          ))}
        </RevealOnScroll>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_GROUPS.map((group, i) => (
            <RevealOnScroll key={group.title} delay={i * 80}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[var(--brand-green)]/45 hover:bg-white/[0.05] hover:shadow-[0_24px_60px_rgba(0,199,107,0.08)]"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">{group.title}</h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-green)] shadow-[0_0_8px_rgba(0,199,107,0.6)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="mt-14 text-center" delay={200}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:text-[var(--brand-green)]"
          >
            View all services <span aria-hidden>→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

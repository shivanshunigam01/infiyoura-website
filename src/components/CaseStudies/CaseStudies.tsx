import Image from "next/image";
import Link from "next/link";
import { HOME_WORK } from "@/lib/home-content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function CaseStudies() {
  return (
    <section id="work" className="border-t border-white/10 bg-zinc-900/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 sm:px-5 lg:px-8">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Work</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Digital experiences built for business.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Product launches, platforms, and campaigns—selected work across web, mobile, and growth.
          </p>
        </RevealOnScroll>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {HOME_WORK.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 80}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 transition duration-500 hover:-translate-y-1 hover:border-[var(--brand-green)]/30 hover:shadow-xl"
              >
                <div className="relative h-52 sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                    {item.category}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
                  <span className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500 transition group-hover:text-white">
                    Case study →
                  </span>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="mt-12" delay={150}>
          <Link
            href="/our-works"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white underline-offset-4 hover:text-[var(--brand-green)] hover:underline"
          >
            See all our works
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

import Image from "next/image";
import { INDUSTRIES } from "@/lib/home-content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

export function IndustriesSection() {
  return (
    <section className="border-t border-white/10 bg-zinc-900/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Industries</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Who we work with</h2>
          <p className="mt-4 text-zinc-400">
            From first-time founders to established brands—we adapt our process to your market and compliance needs.
          </p>
        </RevealOnScroll>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {INDUSTRIES.map((item, i) => (
            <RevealOnScroll key={item.name} delay={i * 70}>
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

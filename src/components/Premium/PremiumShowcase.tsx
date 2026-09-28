import Image from "next/image";
import { SHOWCASE_BENTO } from "@/lib/home-content";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";
import { cn } from "@/lib/cn";

export function PremiumShowcase() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <RevealOnScroll className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Inside the studio</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built like a product company.
          </h2>
          <p className="mt-4 text-zinc-400">
            Cross-functional teams—designers, engineers, and marketers—working on the same roadmap from discovery to
            launch.
          </p>
        </RevealOnScroll>
        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 sm:auto-rows-[200px] md:grid-cols-3 md:auto-rows-[220px]">
          {SHOWCASE_BENTO.map((item, i) => (
            <RevealOnScroll
              key={item.title}
              delay={i * 80}
              className={cn("group relative overflow-hidden rounded-2xl border border-white/10", item.className)}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-zinc-300">{item.caption}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

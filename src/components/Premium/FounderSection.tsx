import Image from "next/image";
import { FOUNDER } from "@/lib/team";
import { SITE } from "@/lib/site";
import { RevealOnScroll } from "@/components/UI/RevealOnScroll";

type Props = {
  className?: string;
  showEyebrow?: boolean;
};

export function FounderSection({ className, showEyebrow = true }: Props) {
  return (
    <section className={className ?? "border-t border-white/10 bg-zinc-950 py-24 lg:py-32"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-4 sm:px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <Image
                src={FOUNDER.image}
                alt={FOUNDER.imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 90vw, 480px"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden rounded-xl border border-white/10 bg-zinc-900/95 px-5 py-3 backdrop-blur-sm lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">{FOUNDER.role}</p>
              <p className="mt-1 text-sm font-medium text-white">{FOUNDER.name}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            {showEyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Leadership</p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Meet {FOUNDER.name.split(" ")[0]}, {FOUNDER.role} of {SITE.name}
            </h2>
            <p className="mt-4 text-lg text-zinc-300">{FOUNDER.headline}</p>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {FOUNDER.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 text-sm font-medium text-zinc-500">
              — {FOUNDER.name}, {FOUNDER.role}
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

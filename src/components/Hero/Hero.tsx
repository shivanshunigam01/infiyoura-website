import { Button } from "@/components/UI/Button";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-end bg-white pb-16 pt-32 lg:min-h-[88vh] lg:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,199,107,0.08),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--brand-green)]">
          {SITE.name}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl">
          YOUR IDEAS.
          <br />
          OUR TECHNOLOGY.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
          Technology, design and digital growth solutions for ambitious businesses in India and worldwide.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact">Start a project</Button>
          <Button href="/services" variant="secondary">
            Explore services
          </Button>
        </div>
      </div>
    </section>
  );
}

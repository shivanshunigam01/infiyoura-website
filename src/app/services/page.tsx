import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { InnerPageCta } from "@/components/layout/InnerPageCta";
import { PageFaq } from "@/components/layout/PageFaq";
import { SERVICE_GROUPS } from "@/lib/content";
import { SERVICE_PAGES } from "@/lib/marketing-pages";
import { SERVICES_FAQ, SERVICES_INTRO, SERVICE_PROCESS, SERVICE_SLUG_IMAGES } from "@/lib/pages-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Website development, web and mobile apps, UI/UX, digital marketing, social media, SEO, AI automation, and cloud DevOps.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Services"
        title="Build, design, market, and scale"
        description="End-to-end digital services for startups and growing companies—from first launch to ongoing growth."
      />
      <div className="bg-zinc-950">
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-white">What we offer</h2>
              <ul className="mt-6 space-y-3">
                {SERVICES_INTRO.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-400">
                    <span className="text-[var(--brand-green)]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Service groups</h2>
              <div className="mt-6 space-y-4">
                {SERVICE_GROUPS.map((g) => (
                  <div key={g.title} className="rounded-xl border border-white/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">{g.title}</p>
                    <p className="mt-2 text-sm text-zinc-500">{g.items.slice(0, 4).join(" · ")}…</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-white">Explore services</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SERVICE_PAGES.map((service) => {
                const img = SERVICE_SLUG_IMAGES[service.slug];
                return (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-[var(--brand-green)]/50"
                    >
                      {img ? (
                        <div className="relative h-40">
                          <Image src={img} alt="" fill className="object-cover transition group-hover:scale-105" sizes="33vw" />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
                        </div>
                      ) : null}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        <p className="mt-2 flex-1 text-sm text-zinc-400">{service.headline}</p>
                        <span className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                          Learn more →
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-white">Typical engagement flow</h2>
            <ol className="mt-8 flex flex-wrap gap-3">
              {SERVICE_PROCESS.map((step, i) => (
                <li
                  key={step}
                  className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-300"
                >
                  {i + 1}. {step}
                </li>
              ))}
            </ol>
          </div>
        </section>
        <PageFaq items={SERVICES_FAQ} />
        <InnerPageCta title="Not sure which service fits?" description="Send us a short brief—we'll recommend a scope and timeline." />
      </div>
    </SiteShell>
  );
}

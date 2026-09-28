import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { InnerPageCta } from "@/components/layout/InnerPageCta";
import { HOME_WORK } from "@/lib/home-content";
import { WORK_DETAIL } from "@/lib/pages-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work",
  description: "Selected projects across web development, apps, branding, and digital marketing.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Work"
        title="Results we're proud of"
        description="Products, platforms, and campaigns we've delivered for startups and growing brands. Full case studies and metrics available on request."
      />
      <div className="bg-zinc-950">
        <section className="mx-auto max-w-4xl px-5 py-12 lg:px-8">
          <p className="text-center text-zinc-400">
            We partner on web development, mobile apps, branding, social media, and performance marketing—often combining
            several disciplines in one engagement.
          </p>
        </section>
        <ul className="mx-auto max-w-5xl space-y-16 px-5 pb-16 lg:px-8">
          {HOME_WORK.map((item) => {
            const detail = WORK_DETAIL[item.title];
            return (
              <li key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <div className="relative h-56 sm:h-72">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <p className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                    {item.category}
                  </p>
                </div>
                <div className="p-8 lg:p-10">
                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">{item.title}</h2>
                  <p className="mt-3 text-zinc-400">{item.summary}</p>
                  {detail ? (
                    <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-3">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Challenge</h3>
                        <p className="mt-2 text-sm text-zinc-400">{detail.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Solution</h3>
                        <p className="mt-2 text-sm text-zinc-400">{detail.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Results</h3>
                        <ul className="mt-2 space-y-1 text-sm text-zinc-400">
                          {detail.results.map((r) => (
                            <li key={r}>· {r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
        <InnerPageCta
          title="Want results like these?"
          description="Tell us about your industry, audience, and goals—we'll share relevant examples and a proposed approach."
        />
      </div>
    </SiteShell>
  );
}

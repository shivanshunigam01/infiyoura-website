import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { InnerPageCta } from "@/components/layout/InnerPageCta";
import { HOME_STATS } from "@/lib/home-content";
import { ABOUT_MILESTONES, ABOUT_VALUES } from "@/lib/pages-content";
import { FounderSection } from "@/components/Premium/FounderSection";
import { FOUNDER } from "@/lib/team";
import { UNSPLASH_IT } from "@/lib/unsplash";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import { PROCESS } from "@/lib/content";

export const metadata = pageMetadata({
  title: "About",
  description: `Learn about ${SITE.name}—a team building websites, apps, and digital growth for ambitious brands.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title="Technology partners for ambitious teams"
        description={`Founded by ${FOUNDER.name}, Infiyoura is a digital studio for website development, mobile apps, social media, digital marketing, and cloud infrastructure.`}
      />
      <div className="bg-zinc-950">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="space-y-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
            <p>
              We work with founders, marketing leaders, and growing businesses in India and worldwide. From the first
              landing page to full-scale product and campaign systems, we combine design, engineering, and growth under one
              roof.
            </p>
            <p>
              Our approach is simple: understand your goals, ship with quality, and measure what matters. Whether you need
              a high-performance website, a custom web app, always-on social content, or paid acquisition—we build for
              long-term results.
            </p>
            <p>
              You get a dedicated squad—not a revolving door of freelancers. Product thinkers, designers, engineers, and
              marketers aligned on one roadmap, one Slack channel, and one outcome: digital experiences that grow your
              business.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={UNSPLASH_IT.teamCollaboration}
              alt="Infiyoura team collaboration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <FounderSection className="border-t border-white/10 bg-zinc-900/40 py-24 lg:py-32" />
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-white">By the numbers</h2>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              {HOME_STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-semibold text-white">{s.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-white">What we believe</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {ABOUT_VALUES.map((v) => (
                <article key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-white">Our story</h2>
            <ul className="mt-10 space-y-8">
              {ABOUT_MILESTONES.map((m) => (
                <li key={m.year} className="border-l-2 border-[var(--brand-green)] pl-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">{m.year}</p>
                  <p className="mt-2 text-zinc-400">{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-white">How we deliver</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {PROCESS.map((p) => (
                <div key={p.step} className="rounded-xl border border-white/10 p-4 text-center">
                  <span className="text-xs font-bold text-[var(--brand-green)]">{p.step}</span>
                  <p className="mt-2 text-sm font-medium text-white">{p.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <InnerPageCta
          title="Ready to work together?"
          description="Tell us about your product, timeline, and goals—we'll craft a plan that fits."
        />
      </div>
    </SiteShell>
  );
}

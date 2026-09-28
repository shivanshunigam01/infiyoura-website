import Image from "next/image";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { InnerPageCta } from "@/components/layout/InnerPageCta";
import { Button } from "@/components/UI/Button";
import { CAREERS_BENEFITS, CAREERS_ROLES } from "@/lib/pages-content";
import { UNSPLASH_IT } from "@/lib/unsplash";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Careers",
  description: `Join ${SITE.name}—developers, designers, and marketers building digital products for clients worldwide.`,
  path: "/careers",
});

export default function CareersPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Careers"
        title="Build with us"
        description="We're growing our team of builders, designers, and marketers. If you care about craft and client outcomes, we'd love to hear from you."
      />
      <div className="bg-zinc-950">
        <div className="relative mx-auto max-w-5xl px-5 pt-8 lg:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={UNSPLASH_IT.officeTeam}
              alt="Team at work"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
        <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
          <h2 className="text-xl font-semibold text-white">Life at Infiyoura</h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            We&apos;re a small studio with big standards. You&apos;ll work across client industries—SaaS, e-commerce,
            services, and media—shipping real products and campaigns, not endless internal decks. We value clear
            communication, ownership, and continuous learning.
          </p>
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">Benefits</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {CAREERS_BENEFITS.map((b) => (
              <li key={b} className="flex gap-2 text-sm text-zinc-400">
                <span className="text-[var(--brand-green)]">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </section>
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h2 className="text-2xl font-semibold text-white">Open roles</h2>
            <ul className="mt-10 space-y-8">
              {CAREERS_ROLES.map((role) => (
                <li key={role.title} className="rounded-2xl border border-white/10 p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{role.title}</h3>
                      <p className="text-sm text-zinc-500">{role.type}</p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{role.description}</p>
                    </div>
                    <a
                      href={`mailto:${SITE.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                      className="shrink-0 text-sm font-semibold text-[var(--brand-green)] hover:underline"
                    >
                      Apply via email
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-zinc-500">
              Don&apos;t see your role? Send your portfolio to{" "}
              <a href={`mailto:${SITE.email}`} className="text-white hover:text-[var(--brand-green)]">{SITE.email}</a>.
            </p>
            <Button href="/contact" className="mt-8">General inquiry</Button>
          </div>
        </section>
        <InnerPageCta title="Refer someone great" description="We appreciate introductions—reach out if you know a designer, developer, or marketer who'd fit our culture." buttonLabel="Get in touch" />
      </div>
    </SiteShell>
  );
}

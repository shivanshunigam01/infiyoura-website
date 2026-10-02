import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { InnerPageCta } from "@/components/layout/InnerPageCta";
import { OurWorksGrid } from "@/components/OurWorks/OurWorksGrid";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Works",
  description:
    "Production websites and platforms delivered by Infiyoura—automotive, healthcare, finance, travel, SaaS, and enterprise projects with live previews.",
  path: "/our-works",
});

export default function OurWorksPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Our works"
        title="Production-grade digital products"
        description="Live client and partner projects across industries—same showcase quality as our delivery portfolio, built on modern full-stack stacks."
      />
      <div className="bg-zinc-950">
        <section className="mx-auto max-w-3xl px-5 py-10 text-center lg:px-8">
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            Each card links to a live site. We design, engineer, and ship web platforms for dealerships,
            healthcare, finance, travel, SaaS, and enterprise teams—often combining branding, SEO, and
            growth in one engagement.
          </p>
        </section>
        <OurWorksGrid />
        <InnerPageCta
          title="Want a platform like these?"
          description="Share your industry, timeline, and goals—we'll propose an approach and relevant examples from our work."
        />
      </div>
    </SiteShell>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { InnerPageCta } from "@/components/layout/InnerPageCta";
import { PageFaq } from "@/components/layout/PageFaq";
import { Button } from "@/components/UI/Button";
import { SERVICE_PAGES, getServiceBySlug } from "@/lib/marketing-pages";
import { SERVICE_EXTRA, SERVICE_PROCESS, SERVICE_SLUG_IMAGES } from "@/lib/pages-content";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd, serviceSeoKeywords } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    keywords: serviceSeoKeywords(slug),
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const extra = SERVICE_EXTRA[slug];
  const image = SERVICE_SLUG_IMAGES[slug];
  const related = SERVICE_PAGES.filter((s) => s.slug !== slug).slice(0, 3);

  const structuredData = [
    serviceJsonLd(slug, service.title, service.description),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${slug}` },
    ]),
  ];

  return (
    <SiteShell>
      <StructuredData data={structuredData} />
      <PageHeader eyebrow="Service" title={service.headline} description={service.description} />
      <div className="bg-zinc-950">
        {image ? (
          <div className="relative mx-auto max-w-5xl px-5 pt-8 lg:px-8">
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-white/10">
              <Image src={image} alt={service.title} fill className="object-cover" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            </div>
          </div>
        ) : null}
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
          {extra ? (
            <p className="text-lg text-zinc-300">
              <span className="font-medium text-white">Ideal for: </span>
              {extra.idealFor}
            </p>
          ) : null}
          <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">What we deliver</h2>
          <ul className="mt-6 space-y-3">
            {service.bullets.map((item) => (
              <li key={item} className="flex gap-3 text-zinc-300">
                <span className="text-[var(--brand-green)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
          {extra?.outcomes ? (
            <>
              <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Common outcomes</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {extra.outcomes.map((o) => (
                  <li key={o} className="rounded-xl border border-white/10 px-4 py-3 text-sm text-zinc-400">{o}</li>
                ))}
              </ul>
            </>
          ) : null}
          <h2 className="mt-12 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Our process</h2>
          <ol className="mt-6 space-y-2">
            {SERVICE_PROCESS.map((step, i) => (
              <li key={step} className="text-sm text-zinc-400">
                <span className="font-medium text-white">{i + 1}.</span> {step}
              </li>
            ))}
          </ol>
          <Button href="/contact" className="mt-10">Start a project</Button>
        </div>
        {extra?.faq?.length ? <PageFaq title={`${service.title} FAQ`} items={extra.faq} /> : null}
        <section className="border-t border-white/10 py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="text-xl font-semibold text-white">Related services</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`} className="block rounded-xl border border-white/10 p-5 hover:border-[var(--brand-green)]/40">
                    <p className="font-medium text-white">{r.title}</p>
                    <p className="mt-1 text-sm text-zinc-500">{r.headline}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <InnerPageCta title={`Let's talk ${service.title.toLowerCase()}`} description="Share your goals and timeline—we'll respond with a clear next step." />
      </div>
    </SiteShell>
  );
}

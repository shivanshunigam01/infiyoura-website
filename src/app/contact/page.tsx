import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageFaq } from "@/components/layout/PageFaq";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { CONTACT_CHANNELS, CONTACT_FAQ } from "@/lib/pages-content";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Get in touch with ${SITE.name} for website development, apps, social media, and digital marketing.`,
  path: "/contact",
});

type Props = { searchParams: Promise<{ sent?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const { sent } = await searchParams;
  const showThanks = sent === "1";

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Contact"
        title="Start a project"
        description={`Tell us what you're building. Visit our Ahmedabad studio or email ${SITE.email}—we reply within one business day.`}
      />
      <div className="bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-16 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-white">How we can help</h2>
            <ul className="mt-6 space-y-4 text-sm text-zinc-400">
              <li>· New website or landing page</li>
              <li>· Web or mobile product build</li>
              <li>· Social media & content retainers</li>
              <li>· Google Ads, Meta Ads & SEO</li>
              <li>· UI/UX design or brand refresh</li>
              <li>· AI features & automation</li>
            </ul>
            <h2 className="mt-10 text-lg font-semibold text-white">Contact details</h2>
            <ul className="mt-6 space-y-4">
              {CONTACT_CHANNELS.map((ch) => (
                <li key={ch.label}>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{ch.label}</p>
                  {ch.href ? (
                    <a href={ch.href} className="mt-1 block text-white hover:text-[var(--brand-green)]">{ch.value}</a>
                  ) : (
                    <p className="mt-1 text-zinc-300">{ch.value}</p>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm font-medium text-white">What to include</p>
              <p className="mt-2 text-sm text-zinc-400">
                Goals, timeline, budget range, and links to references help us respond with a useful first reply.
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            {showThanks ? (
              <p className="mb-8 rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-3 text-sm text-zinc-200">
                Thanks—we received your message and will be in touch soon.
              </p>
            ) : null}
            <ContactForm
              className="[&_input]:border-white/15 [&_input]:bg-white/5 [&_input]:text-white [&_input]:placeholder:text-zinc-500 [&_select]:border-white/15 [&_select]:bg-white/5 [&_select]:text-white [&_textarea]:border-white/15 [&_textarea]:bg-white/5 [&_textarea]:text-white [&_textarea]:placeholder:text-zinc-500"
            />
          </div>
        </div>
        <PageFaq items={CONTACT_FAQ} />
      </div>
    </SiteShell>
  );
}

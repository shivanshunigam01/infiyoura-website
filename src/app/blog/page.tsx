import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { InnerPageCta } from "@/components/layout/InnerPageCta";
import { BLOG_POSTS } from "@/lib/pages-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Insights on web development, apps, SEO, and digital marketing from the Infiyoura team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Blog"
        title="Insights & updates"
        description="Practical notes on development, design, social media, and growth—from the team shipping client work every week."
      />
      <div className="bg-zinc-950">
        <section className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
          <p className="text-zinc-400">
            Full articles are coming soon. Below is a preview of topics we&apos;re publishing—subscribe via our contact
            form if you&apos;d like updates when new posts go live.
          </p>
        </section>
        <ul className="mx-auto grid max-w-5xl gap-6 px-5 pb-16 sm:grid-cols-2 lg:px-8">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[var(--brand-green)]/30">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green)]">
                  {post.category} · {post.date}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-white">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
                <span className="mt-4 text-xs text-zinc-500">Coming soon</span>
              </article>
            </li>
          ))}
        </ul>
        <section className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <p className="text-sm text-zinc-400">
              Want a topic covered?{" "}
              <Link href="/contact" className="text-white underline-offset-2 hover:underline">Suggest it on our contact page</Link>.
            </p>
          </div>
        </section>
        <InnerPageCta title="Work with the team behind these insights" description="We apply the same practices we write about—on your product." />
      </div>
    </SiteShell>
  );
}

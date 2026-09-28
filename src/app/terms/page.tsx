import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalProse } from "@/components/layout/LegalProse";
import { TERMS_BLOCKS } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms governing use of Infiyoura's website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <SiteShell>
      <PageHeader title="Terms of Service" description="Terms for using our website and engaging Infiyoura for digital services." />
      <div className="bg-zinc-950 pb-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 lg:grid-cols-[200px_1fr] lg:px-8">
          <nav className="text-sm text-zinc-500 lg:sticky lg:top-28 lg:self-start">
            <p className="font-semibold uppercase tracking-[0.15em] text-zinc-400">Legal</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="text-white">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
            </ul>
          </nav>
          <LegalProse blocks={TERMS_BLOCKS} />
        </div>
      </div>
    </SiteShell>
  );
}

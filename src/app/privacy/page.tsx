import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalProse } from "@/components/layout/LegalProse";
import { PRIVACY_BLOCKS } from "@/lib/legal-content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Infiyoura collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <PageHeader
        title="Privacy Policy"
        description="How we handle personal information when you use our website and services."
      />
      <div className="bg-zinc-950 pb-20">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 py-16 lg:grid-cols-[200px_1fr] lg:px-8">
          <nav className="text-sm text-zinc-500 lg:sticky lg:top-28 lg:self-start">
            <p className="font-semibold uppercase tracking-[0.15em] text-zinc-400">Legal</p>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy" className="text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookies</Link></li>
            </ul>
          </nav>
          <LegalProse blocks={PRIVACY_BLOCKS} />
        </div>
      </div>
    </SiteShell>
  );
}

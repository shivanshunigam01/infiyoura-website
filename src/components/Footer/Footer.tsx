import Link from "next/link";
import { Logo } from "@/components/UI/Logo";
import { FOOTER_COLUMNS } from "@/lib/marketing-pages";
import { SITE, SITE_ADDRESS_LINES, SITE_MAPS_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12 pb-[max(3.5rem,var(--safe-bottom))] text-zinc-400 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="footer" />
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{SITE.tagline}</p>
            <p className="mt-2 text-xs text-zinc-500">Founded by Jeckvelin Mecwan</p>
            <a href={`mailto:${SITE.email}`} className="mt-4 inline-block text-sm text-white hover:text-[var(--brand-green)]">
              {SITE.email}
            </a>
            <address className="mt-4 not-italic text-sm leading-relaxed text-zinc-500">
              {SITE_ADDRESS_LINES.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
              <a
                href={SITE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 hover:text-[var(--brand-green)]"
              >
                View on map →
              </a>
            </address>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-zinc-800 pt-8 text-sm">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

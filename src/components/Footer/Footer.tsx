import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}
        </p>
        <a href={`mailto:${SITE.email}`} className="text-sm text-white hover:text-[var(--brand-green)]">
          {SITE.email}
        </a>
      </div>
    </footer>
  );
}

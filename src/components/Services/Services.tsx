import { SERVICE_GROUPS } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-green)]">Services</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">
          Everything you need to build, launch & grow.
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_GROUPS.map((group) => (
            <article
              key={group.title}
              className="group rounded-2xl border border-zinc-200 bg-[var(--brand-grey)]/50 p-8 transition hover:border-[var(--brand-green)]/40 hover:shadow-lg"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900">{group.title}</h3>
              <ul className="mt-6 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

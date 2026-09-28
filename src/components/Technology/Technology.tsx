import { TECH } from "@/lib/content";
export function Technology() {
  return (
    <section id="technology" className="border-t border-zinc-200 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-2xl font-semibold">Technology</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {TECH.map((t) => (
            <span key={t} className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

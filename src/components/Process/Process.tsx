import { PROCESS } from "@/lib/content";
export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-5 grid gap-4 sm:grid-cols-3">
        {PROCESS.map((p) => (
          <div key={p.step} className="rounded-xl border p-6">
            <span className="text-[var(--brand-green)]">{p.step}</span>
            <p className="mt-2 font-semibold">{p.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

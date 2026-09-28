import { CONTACT_SERVICES } from "@/lib/content";

type Props = {
  id?: string;
  className?: string;
};

export function ContactForm({ id = "contact", className }: Props) {
  return (
    <section id={id} className={className}>
      <form className="space-y-4" action="/api/contact" method="post">
        <input
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
        />
        <input
          name="company"
          placeholder="Company"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
        />
        <input
          name="country"
          placeholder="Country"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
        />
        <select name="service" className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm" defaultValue="">
          <option value="" disabled>Service</option>
          {CONTACT_SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <input
          name="budget"
          placeholder="Budget"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
        />
        <textarea
          name="details"
          required
          rows={4}
          placeholder="Project details"
          className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
        />
        <button
          type="submit"
          className="rounded-full bg-[var(--brand-green)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white"
        >
          Send message
        </button>
      </form>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_SERVICES } from "@/lib/content";

type Props = {
  id?: string;
  className?: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ id = "contact", className }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          "X-Requested-With": "fetch",
        },
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please email us directly.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email us directly.");
    }
  }

  return (
    <section id={id} className={className}>
      {status === "success" ? (
        <p className="mb-6 rounded-xl border border-[var(--brand-green)]/30 bg-[var(--brand-green)]/10 px-4 py-3 text-sm text-zinc-200">
          Thanks—we received your message and will be in touch within one business day.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {errorMessage}
        </p>
      ) : null}
      <form className="space-y-4" onSubmit={onSubmit}>
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
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
          <option value="" disabled>
            Service
          </option>
          {CONTACT_SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
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
          disabled={status === "loading"}
          className="rounded-full bg-[var(--brand-green)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
      </form>
    </section>
  );
}

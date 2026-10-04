"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_SERVICES } from "@/lib/content";
import { buildWeb3FormsPayload } from "@/lib/web3forms";

type Props = {
  id?: string;
  className?: string;
};

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm contact-field";

export function ContactForm({ id = "contact", className }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = buildWeb3FormsPayload(formData);

    if ("error" in payload) {
      setStatus("error");
      setErrorMessage(payload.error);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          data.message ??
            "Could not send your message. Please email us at infiyoura@gmail.com.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email infiyoura@gmail.com.");
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
      <form className="contact-form space-y-4" onSubmit={onSubmit}>
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
        <input name="name" required placeholder="Name" className={fieldClass} />
        <input name="company" placeholder="Company" className={fieldClass} />
        <input name="email" required type="email" placeholder="Email" className={fieldClass} />
        <input name="phone" type="tel" placeholder="Phone" className={fieldClass} />
        <input name="country" placeholder="Country" className={fieldClass} />
        <select name="service" required className={`${fieldClass} contact-service-select`} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {CONTACT_SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input name="budget" placeholder="Budget" className={fieldClass} />
        <textarea
          name="details"
          required
          rows={4}
          placeholder="Project details"
          className={fieldClass}
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

/** Web3Forms access key (public; domain-restricted in Web3Forms dashboard). Override via env. */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
  "f460d54f-6e54-4a3e-b3ed-6072fa72ef33";

export function formatContactMessage(fields: Record<string, string>): string {
  const lines = [
    fields.details && `Project details:\n${fields.details}`,
    fields.company && `Company: ${fields.company}`,
    fields.phone && `Phone: ${fields.phone}`,
    fields.country && `Country: ${fields.country}`,
    fields.service && `Service: ${fields.service}`,
    fields.budget && `Budget: ${fields.budget}`,
  ].filter(Boolean);
  return lines.join("\n\n") || fields.details || "(No message body)";
}

export type Web3FormsPayload = {
  access_key: string;
  name: string;
  email: string;
  message: string;
  subject: string;
  phone?: string;
  from_name?: string;
};

export function buildWeb3FormsPayload(formData: FormData): Web3FormsPayload | { error: string } {
  if (formData.get("botcheck")) {
    return { error: "Invalid submission" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  if (!name || !email || !details) {
    return { error: "Please fill in name, email, and project details." };
  }

  const company = String(formData.get("company") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();

  const message = formatContactMessage({
    details,
    company,
    phone,
    country,
    service,
    budget,
  });

  const payload: Web3FormsPayload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    name,
    email,
    message,
    subject: `Infiyoura contact${service ? `: ${service}` : ""}`,
    from_name: "Infiyoura Website",
  };

  if (phone) payload.phone = phone;

  return payload;
}

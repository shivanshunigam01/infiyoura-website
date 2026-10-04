export function getWeb3FormsAccessKey(): string | undefined {
  return process.env.WEB3FORMS_ACCESS_KEY?.trim() || undefined;
}

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

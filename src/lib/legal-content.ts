import { SITE } from "@/lib/site";

const contact = `Questions about these policies? Email ${SITE.email} or visit us at ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}, ${SITE.address.country}.`;

export const PRIVACY_BLOCKS = [
  {
    paragraphs: [
      `This Privacy Policy describes how ${SITE.name} ("we", "us") collects, uses, and protects information when you visit ${SITE.url} or contact us about our services.`,
      "Last updated: September 2026.",
    ],
  },
  {
    heading: "Information we collect",
    paragraphs: [
      "Contact details you submit (name, email, phone, company, project details).",
      "Technical data such as IP address, browser type, and pages visited, via cookies and analytics where enabled.",
    ],
  },
  {
    heading: "How we use information",
    paragraphs: [
      "To respond to inquiries and deliver our website, app, marketing, and related services.",
      "To improve our site, security, and client communication.",
      "We do not sell your personal information.",
    ],
  },
  {
    heading: "Retention & security",
    paragraphs: [
      "We retain data only as long as needed for the purposes above or as required by law.",
      "We use reasonable technical and organizational measures to protect your information.",
    ],
  },
  { heading: "Contact", paragraphs: [contact] },
] as const;

export const TERMS_BLOCKS = [
  {
    paragraphs: [
      `These Terms of Service govern your use of ${SITE.url} and engagement with ${SITE.name} for digital services including development, design, and marketing.`,
      "Last updated: September 2026.",
    ],
  },
  {
    heading: "Services",
    paragraphs: [
      "Scope, timelines, and fees are defined in proposals, statements of work, or separate agreements.",
      "You agree to provide timely feedback and materials needed for us to perform the work.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "Upon full payment, deliverables created specifically for you are assigned as stated in your project agreement, excluding our pre-existing tools and frameworks.",
      "We may showcase non-confidential work in our portfolio unless otherwise agreed in writing.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "Our liability is limited to the extent permitted by applicable law and capped at fees paid for the relevant project, unless otherwise required by law.",
    ],
  },
  { heading: "Contact", paragraphs: [contact] },
] as const;

export const COOKIES_BLOCKS = [
  {
    paragraphs: [
      "We use cookies and similar technologies to operate the site, remember preferences, and understand usage.",
      "Last updated: September 2026.",
    ],
  },
  {
    heading: "Types of cookies",
    paragraphs: [
      "Essential cookies required for basic site functionality.",
      "Analytics cookies (if enabled) to measure traffic and improve content.",
      "Marketing cookies only when you consent to related tools.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can control cookies through your browser settings. Blocking essential cookies may affect site functionality.",
    ],
  },
  { heading: "Contact", paragraphs: [contact] },
] as const;

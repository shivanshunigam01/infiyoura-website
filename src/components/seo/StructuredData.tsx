import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const ROOT_SCHEMAS = [organizationJsonLd(), websiteJsonLd(), localBusinessJsonLd()];

export function StructuredData({ data }: { data?: Record<string, unknown>[] }) {
  const schemas = data?.length ? data : ROOT_SCHEMAS;
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

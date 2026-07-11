import {
  getLegalServiceJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";

export function StructuredData() {
  const schemas = [getLegalServiceJsonLd(), getWebSiteJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

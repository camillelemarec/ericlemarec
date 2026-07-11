import {
  getFaqJsonLd,
  getLegalServiceJsonLd,
  getWebSiteJsonLd,
} from "@/lib/seo";

export function StructuredData() {
  const schemas = [getLegalServiceJsonLd(), getWebSiteJsonLd(), getFaqJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

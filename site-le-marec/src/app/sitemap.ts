import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/etude", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/constats", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/competences", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/rendez-vous", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/paiement", priority: 0.6, changeFrequency: "monthly" as const },
  {
    path: "/mentions-legales",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

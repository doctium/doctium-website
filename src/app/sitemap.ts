import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getSitemapEntries } from "@/lib/cms";

export const revalidate = 3600;

type Entry = MetadataRoute.Sitemap[number];
type Freq = Entry["changeFrequency"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const u = (path: string) => `${siteConfig.url}${path}`;
  const route = (path: string, changeFrequency: Freq, priority: number): Entry => ({
    url: u(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  const staticRoutes: MetadataRoute.Sitemap = [
    route("", "weekly", 1),
    route("/ehr", "monthly", 0.9),
    route("/scribe", "monthly", 0.8),
    route("/personalized-medicine", "monthly", 0.8),
    route("/telemedicine", "monthly", 0.9),
    route("/about", "monthly", 0.6),
    route("/team", "monthly", 0.5),
    route("/careers", "weekly", 0.7),
    route("/blog", "daily", 0.7),
    route("/newsroom", "weekly", 0.6),
    route("/contact", "monthly", 0.8),
    route("/privacy", "yearly", 0.3),
    route("/terms", "yearly", 0.3),
  ];

  const cms = await getSitemapEntries();
  const dyn: MetadataRoute.Sitemap = [
    ...cms.blog.map((b): Entry => ({
      url: u(`/blog/${b.slug}`),
      lastModified: new Date(b.updatedAt),
      changeFrequency: "weekly",
      priority: 0.6,
    })),
    ...cms.news.map((n): Entry => ({
      url: u(`/newsroom/${n.slug}`),
      lastModified: new Date(n.updatedAt),
      changeFrequency: "monthly",
      priority: 0.5,
    })),
    ...cms.jobs.map((j): Entry => ({
      url: u(`/careers/${j.slug}`),
      lastModified: new Date(j.updatedAt),
      changeFrequency: "weekly",
      priority: 0.6,
    })),
    ...cms.landing.map((l): Entry => ({
      url: u(`/${l.slug}`),
      lastModified: new Date(l.updatedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...dyn];
}

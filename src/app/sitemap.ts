import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/ehr",
    "/scribe",
    "/personalized-medicine",
    "/telemedicine",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.7,
  }));
}

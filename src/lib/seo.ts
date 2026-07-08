import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/**
 * Per-page metadata builder. Sets a correct per-page canonical (relative paths
 * are resolved against `metadataBase` in the root layout) plus OpenGraph and
 * Twitter cards, so each page is indexed on its own URL — not collapsed onto
 * the homepage canonical.
 */
export function pageMeta({
  title,
  description,
  path,
  ogTitle,
  image,
  keywords,
}: {
  title: string;
  description: string;
  /** Absolute path beginning with "/" (e.g. "/ehr"). */
  path: string;
  ogTitle?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const absoluteUrl = `${siteConfig.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: absoluteUrl,
      siteName: "Doctium",
      locale: "en_NG",
      title: ogTitle ?? title,
      description,
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
    },
  };
}

/** JSON-LD: the site itself. */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Doctium",
  url: siteConfig.url,
  inLanguage: "en-NG",
  publisher: { "@type": "Organization", name: "Doctium", url: siteConfig.url },
};

/** JSON-LD: Doctium as a medical/health technology organization in Nigeria. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalOrganization"],
  name: "Doctium",
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/doctium-logo-2048.png`,
  description: siteConfig.shortDescription,
  slogan: siteConfig.slogan,
  email: siteConfig.links.email,
  telephone: siteConfig.links.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    addressCountry: "NG",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "Telemedicine",
    "Hospital information system",
    "Electronic health records",
    "AI clinical documentation",
    "Personalized medicine",
    "Sickle cell disease",
  ],
};

/** JSON-LD: a breadcrumb trail. Pass [{name, path}] from home → current page. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/** Renders one or more JSON-LD objects as a script tag payload. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}

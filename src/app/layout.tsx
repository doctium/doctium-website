import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";
import { organizationJsonLd, websiteJsonLd, jsonLdScript } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Doctium: An AI-native hospital operating system for African healthcare",
    template: "%s · Doctium",
  },
  description: siteConfig.shortDescription,
  keywords: [
    "AI-native hospital operating system",
    "hospital EHR Africa",
    "Nigeria EHR",
    "telemedicine Nigeria",
    "AI clinical documentation",
    "ambient clinical scribe",
    "personalized medicine sickle cell",
    "Doctium",
  ],
  authors: [{ name: "Doctium" }],
  creator: "Doctium",
  applicationName: "Doctium",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: "Doctium",
    title: "Doctium: An AI-native hospital operating system for African healthcare",
    description: siteConfig.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctium: An AI-native hospital operating system for African healthcare",
    description: siteConfig.shortDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon.png",
  },
  alternates: { canonical: "/" },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1424",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd)}
        />
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

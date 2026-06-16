import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";

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
    default: "Doctium — An AI-native hospital operating system for African healthcare",
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
    title: "Doctium — An AI-native hospital operating system for African healthcare",
    description: siteConfig.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctium — An AI-native hospital operating system for African healthcare",
    description: siteConfig.shortDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon.png",
  },
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1424",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Doctium",
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/doctium-logo-2048.png`,
  description: siteConfig.shortDescription,
  slogan: siteConfig.slogan,
  areaServed: "Africa",
  email: siteConfig.links.email,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
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

import { TelemedHero } from "@/components/sections/telemedicine/TelemedHero";
import { HowItWorks } from "@/components/sections/telemedicine/HowItWorks";
import { Features } from "@/components/sections/telemedicine/Features";
import { LeenahSpotlight } from "@/components/sections/telemedicine/LeenahSpotlight";
import { ForDoctors } from "@/components/sections/telemedicine/ForDoctors";
import { Trust } from "@/components/sections/telemedicine/Trust";
import { Download } from "@/components/sections/telemedicine/Download";
import { CTASection } from "@/components/sections/CTASection";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Telemedicine",
  description:
    "Doctium's telemedicine marketplace connects patients to identity-verified doctors in minutes: AI triage, secure chat/voice/video, signed e-prescriptions, chronic-care programs, in seven languages.",
  path: "/telemedicine",
});

export default function TelemedicinePage() {
  return (
    <>
      <TelemedHero />
      <HowItWorks />
      <Features />
      <LeenahSpotlight />
      <ForDoctors />
      <Trust />
      <Download />
      <CTASection
        eyebrow="Get started"
        title={<>Healthcare, in your pocket.</>}
        lede="Download Doctium and see a verified doctor today, or bring the marketplace and Hospital OS to your facility."
        primary={{ label: "Book a hospital demo", href: "/contact" }}
        secondary={{ label: "For hospitals", href: "/ehr" }}
        showStore
      />
    </>
  );
}

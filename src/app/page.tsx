import { Hero } from "@/components/sections/home/Hero";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { Pillars } from "@/components/sections/home/Pillars";
import { ClosedLoops } from "@/components/sections/home/ClosedLoops";
import { ScribeSection } from "@/components/sections/home/ScribeSection";
import { PersonalizedMedicine } from "@/components/sections/home/PersonalizedMedicine";
import { ModuleEcosystem } from "@/components/sections/home/ModuleEcosystem";
import { TelemedicineSection } from "@/components/sections/home/TelemedicineSection";
import { TrustSafety } from "@/components/sections/home/TrustSafety";
import { BuiltForAfrica } from "@/components/sections/home/BuiltForAfrica";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Pillars />
      <ClosedLoops />
      <ScribeSection />
      <PersonalizedMedicine />
      <ModuleEcosystem />
      <TelemedicineSection />
      <TrustSafety />
      <BuiltForAfrica />
      <CTASection
        eyebrow="Get started"
        title={
          <>
            Bring the AI-native OS to your hospital — and Doctium to your patients.
          </>
        }
        lede="Book a walkthrough of the Hospital OS, or download the app and see a verified doctor today."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Talk to our team", href: "/contact" }}
        showStore
      />
    </>
  );
}

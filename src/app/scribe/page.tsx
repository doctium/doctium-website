import { pageMeta } from "@/lib/seo";
import { ScribeHero } from "@/components/sections/scribe/ScribeHero";
import { ScribeProblem } from "@/components/sections/scribe/ScribeProblem";
import { ScribeHowItWorks } from "@/components/sections/scribe/ScribeHowItWorks";
import { ScribeCaptures } from "@/components/sections/scribe/ScribeCaptures";
import { ScribeControl } from "@/components/sections/scribe/ScribeControl";
import { ScribeOutcomes } from "@/components/sections/scribe/ScribeOutcomes";
import { ScribeSafety } from "@/components/sections/scribe/ScribeSafety";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "Doctium Scribe: AI clinical documentation",
  description:
    "Doctium Scribe is an ambient clinical documentation assistant built into the Doctium EHR. With patient consent it turns consultations into structured, reviewable notes, reviewed, edited and approved by the clinician.",
  path: "/scribe",
});

export default function ScribePage() {
  return (
    <>
      <ScribeHero />
      <ScribeProblem />
      <ScribeHowItWorks />
      <ScribeCaptures />
      <ScribeControl />
      <ScribeSafety />
      <ScribeOutcomes />
      <CTASection
        eyebrow="Get started"
        title={<>See Doctium Scribe in your workflow.</>}
        lede="Book a walkthrough and watch a consultation become a structured, doctor-approved note, inside the Doctium Hospital OS."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Explore the Hospital OS", href: "/ehr" }}
      />
    </>
  );
}

import { pageMeta } from "@/lib/seo";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { Thesis } from "@/components/sections/about/Thesis";
import { TwoProblems } from "@/components/sections/about/TwoProblems";
import { ArtifactModel } from "@/components/sections/about/ArtifactModel";
import { Principles } from "@/components/sections/about/Principles";
import { WhatWeBuild } from "@/components/sections/about/WhatWeBuild";
import { WhereWeAre } from "@/components/sections/about/WhereWeAre";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = pageMeta({
  title: "About",
  description:
    "Doctium is building an AI-native hospital operating system for African healthcare — not a traditional EHR. Every workflow produces structured artifacts that feed intelligent closed loops, while licensed humans stay responsible for final decisions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Thesis />
      <TwoProblems />
      <ArtifactModel />
      <Principles />
      <WhatWeBuild />
      <WhereWeAre />
      <CTASection
        eyebrow="Join us"
        title="Join us in rebuilding African healthcare."
        lede="Whether you run a hospital, practise medicine, or want to partner on the AI-native future of care — we'd love to talk."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Explore the Hospital OS", href: "/ehr" }}
      />
    </>
  );
}

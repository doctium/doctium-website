import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ehrModules } from "@/content/data";

export function EhrModules() {
  return (
    <Section tone="canvas" id="modules">
      <Container>
        <SectionHeading
          eyebrow="Module ecosystem"
          title="One platform for the whole hospital."
          lede="From the front desk to the ward, the lab to the finance office — 14+ modules share one structured record. Billing & Revenue and Insurance / HMO / NHIA are live today; the rest of the clinical suite rolls out continuously."
        />

        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
          stagger={0.04}
        >
          {ehrModules.map((m) => (
            <RevealItem key={m.title}>
              <div className="lift group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-soft)] hover:border-navy/15">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon name={m.icon} className="h-5 w-5" />
                  </span>
                  {m.tag && (
                    <span className="rounded-full bg-success/10 px-2 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wide text-success">
                      {m.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[0.98rem] font-bold leading-tight text-navy">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted">{m.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-line bg-white px-6 py-6 text-center shadow-[var(--shadow-soft)] sm:flex-row sm:text-left">
            <p className="text-balance text-base text-muted">
              <span className="font-semibold text-navy">More modules are shipping.</span>{" "}
              Two carry a live <span className="font-mono text-[0.78rem] font-semibold text-success">V1</span>{" "}
              tag; the rest of the clinical suite is rolling out continuously on the same record.
            </p>
            <a
              href="#finance"
              className="link-underline inline-flex items-center gap-1.5 whitespace-nowrap font-display font-semibold text-navy"
            >
              See what&apos;s live today <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

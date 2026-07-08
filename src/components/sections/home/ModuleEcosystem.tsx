import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ehrModules } from "@/content/data";

export function ModuleEcosystem() {
  return (
    <Section tone="canvas" id="modules">
      <Container>
        <SectionHeading
          eyebrow="The Hospital OS"
          title="One platform for the whole hospital."
          lede="From the front desk to the ward, the lab to the finance office, every module shares one structured record, and more ship continuously."
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
              Billing &amp; Revenue and Insurance / HMO / NHIA are live; the rest of the
              clinical suite is rolling out continuously.
            </p>
            <a
              href="/ehr"
              className="link-underline inline-flex items-center gap-1.5 whitespace-nowrap font-display font-semibold text-navy"
            >
              See the full platform <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

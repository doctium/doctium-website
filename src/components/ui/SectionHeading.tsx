import { cn } from "@/lib/cn";
import { Eyebrow } from "./Badge";
import { Reveal } from "@/components/motion/Reveal";

/** Eyebrow + title + optional lede, with consistent scroll-reveal. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "center",
  className,
  titleClassName,
  as = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  as?: "h1" | "h2";
}) {
  const Title = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone === "dark" ? "light" : "dark"}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Title
          className={cn(
            "max-w-3xl text-balance text-[clamp(1.9rem,4.6vw,3.25rem)] font-bold leading-[1.04]",
            tone === "dark" ? "text-white" : "text-navy",
            align === "center" && "mx-auto",
            titleClassName,
          )}
        >
          {title}
        </Title>
      </Reveal>
      {lede && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed",
              tone === "dark" ? "text-white/70" : "text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

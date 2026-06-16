import { cn } from "@/lib/cn";

type Tone = "light" | "canvas" | "mist" | "navy" | "ink";

const toneClass: Record<Tone, string> = {
  light: "bg-white text-body",
  canvas: "bg-canvas text-body",
  mist: "bg-mist text-body",
  navy: "bg-navy-cinematic text-white",
  ink: "bg-navy-950 text-white",
};

/**
 * Vertical rhythm section wrapper. Dark tones get `relative` + `grain` so
 * aurora/grid/spotlight layers can be dropped in as absolute children.
 */
export function Section({
  children,
  tone = "light",
  className,
  id,
  spacing = "default",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  spacing?: "default" | "tight" | "loose" | "none";
}) {
  const dark = tone === "navy" || tone === "ink";
  const pad = {
    none: "",
    tight: "py-14 md:py-20",
    default: "py-20 md:py-28",
    loose: "py-24 md:py-36",
  }[spacing];

  return (
    <section
      id={id}
      className={cn(
        "relative",
        pad,
        toneClass[tone],
        dark && "grain isolate overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}

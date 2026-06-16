import { cn } from "@/lib/cn";

/** Small pill badge. */
export function Badge({
  children,
  tone = "navy",
  className,
}: {
  children: React.ReactNode;
  tone?: "navy" | "trust" | "light" | "success" | "outline";
  className?: string;
}) {
  const tones = {
    navy: "bg-navy text-white",
    trust: "bg-trust-light text-trust-deep",
    light: "bg-white/10 text-white border border-white/15",
    success: "bg-[color-mix(in_srgb,var(--color-success)_14%,white)] text-success",
    outline: "bg-transparent text-navy hairline",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * The clinical-readout eyebrow: a mono micro-label with a leading tick.
 * The recurring "instrument" detail across the site.
 */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em]",
        tone === "light" ? "text-sky" : "text-trust",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-6",
          tone === "light" ? "bg-sky/60" : "bg-trust/50",
        )}
      />
      {children}
    </span>
  );
}

import { cn } from "@/lib/cn";

type LogoProps = {
  /** "light" = for light backgrounds (navy mark). "dark" = for navy backgrounds (white mark). */
  tone?: "light" | "dark";
  /** Show the "Doctium" wordmark next to the symbol. */
  withWordmark?: boolean;
  className?: string;
  markClassName?: string;
};

/**
 * The Doctium mark: a clinical silver H/cross form + a bold navy D-shaped arc.
 * Rendered inline so it stays crisp at any size and adapts to the surface tone.
 */
export function Logo({
  tone = "light",
  withWordmark = true,
  className,
  markClassName,
}: LogoProps) {
  const cross = tone === "dark" ? "#8BBBE9" : "#B2B0B0";
  const arc = tone === "dark" ? "#FFFFFF" : "#133157";
  const word = tone === "dark" ? "text-white" : "text-navy";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 263 263"
        role="img"
        aria-label="Doctium"
        className={cn("h-8 w-8 shrink-0", markClassName)}
      >
        <path d="M38 66H80V112H125V156H80V201H38V66Z" fill={cross} />
        <path
          d="M126 23C187.3 23 237 72.5 237 134C237 195.5 187.3 244 126 244V200C163.5 200 193 170.6 193 134C193 97.4 163.5 67 126 67V23Z"
          fill={arc}
        />
      </svg>
      {withWordmark && (
        <span
          className={cn(
            "font-display text-[1.35rem] font-extrabold tracking-tight",
            word,
          )}
        >
          Doctium
        </span>
      )}
    </span>
  );
}

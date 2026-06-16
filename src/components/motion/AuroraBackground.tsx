import { cn } from "@/lib/cn";

/**
 * Decorative aurora light + optional dotted grid for cinematic navy sections.
 * Purely presentational; sits behind content (z-0). Parent must be `relative`.
 */
export function AuroraBackground({
  className,
  grid = true,
  tone = "dark",
}: {
  className?: string;
  grid?: boolean;
  tone?: "dark" | "light";
}) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="aurora" />
      {grid && (
        <div
          className={cn(
            "absolute inset-0",
            tone === "dark" ? "dot-grid-light" : "dot-grid",
          )}
          style={{
            maskImage:
              "radial-gradient(80% 60% at 50% 40%, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(80% 60% at 50% 40%, black, transparent 80%)",
          }}
        />
      )}
    </div>
  );
}

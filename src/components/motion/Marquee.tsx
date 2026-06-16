import { cn } from "@/lib/cn";

/**
 * Infinite horizontal marquee. Renders its children twice for a seamless loop
 * (the CSS animation translates by -50%). Pauses on hover; masked at the edges.
 */
export function Marquee({
  children,
  reverse = false,
  className,
  itemClassName,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={cn("marquee-mask marquee-pause overflow-hidden", className)}>
      <div className={cn("marquee-track", reverse && "reverse")}>
        <div className={cn("flex shrink-0", itemClassName)}>{children}</div>
        <div className={cn("flex shrink-0", itemClassName)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/cn";

/**
 * A clean phone shell for app screenshots/mockups. Children fill the screen
 * area (use a screenshot <Image> or a styled UI mock). Notch + bezel included.
 */
export function DeviceFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] w-full max-w-[300px] rounded-[2.6rem] border border-white/15 bg-navy-950 p-2.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)]",
        className,
      )}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-canvas">
        {children}
      </div>
    </div>
  );
}

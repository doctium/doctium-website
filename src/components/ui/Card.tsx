import { cn } from "@/lib/cn";

/** Light surface card. */
export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-soft)] md:p-8",
        hover && "lift hover:border-navy/15 hover:shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Glass instrument card — for navy/dark sections. */
export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-dark rounded-3xl p-6 md:p-8",
        hover && "lift hover:border-white/25",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Icon-led feature card (works on light surfaces). */
export function FeatureCard({
  icon,
  title,
  children,
  className,
  accent = "trust",
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
  accent?: "trust" | "navy" | "sky";
}) {
  const ring = {
    trust: "from-trust/15 to-trust/0 text-trust",
    navy: "from-navy/12 to-navy/0 text-navy",
    sky: "from-sky/25 to-sky/0 text-navy",
  }[accent];
  return (
    <div
      className={cn(
        "lift group rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-soft)] hover:border-navy/15 hover:shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 ring-inset ring-navy/5",
          ring,
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}

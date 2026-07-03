import { Check } from "lucide-react";
import { StoreBadges } from "@/components/ui/StoreBadges";

/**
 * Post-signup success + "download the app" step. Rendered inside a navy panel
 * so the (dark-styled) StoreBadges read correctly. Copy differs per role.
 */
export function DownloadPanel({
  heading,
  subtitle,
  next,
}: {
  heading: string;
  subtitle: string;
  next?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10">
        <Check className="h-7 w-7 text-success" />
      </div>
      <h2 className="mt-5 font-display text-2xl font-bold text-navy">
        {heading}
      </h2>
      <p className="mt-3 leading-relaxed text-muted">{subtitle}</p>

      <div className="mt-6 rounded-3xl bg-navy-cinematic p-6 text-white">
        <p className="font-display text-lg font-semibold">
          Get the Doctium app
        </p>
        <p className="mt-1 text-[0.9rem] leading-snug text-white/70">
          {next ??
            "Download the app to finish setting up and start using Doctium."}
        </p>
        <StoreBadges className="mt-5" />
      </div>
    </div>
  );
}

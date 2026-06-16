import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

function Badge({
  href,
  sub,
  main,
  children,
}: {
  href: string;
  sub: string;
  main: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="lift inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-white backdrop-blur-sm transition-colors hover:border-white/35 hover:bg-white/10"
    >
      <span className="shrink-0">{children}</span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.65rem] font-medium uppercase tracking-wide text-white/70">
          {sub}
        </span>
        <span className="mt-0.5 font-display text-base font-semibold">{main}</span>
      </span>
    </Link>
  );
}

export function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Badge href={siteConfig.links.appStore} sub="Download on the" main="App Store">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M17.05 12.53c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.71-3.19-1.73-1.36-.14-2.65.8-3.34.8-.69 0-1.75-.78-2.88-.76-1.48.02-2.85.86-3.61 2.18-1.54 2.67-.39 6.62 1.1 8.79.73 1.06 1.6 2.25 2.74 2.21 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.08 2.65-2.15.84-1.23 1.18-2.42 1.2-2.48-.03-.01-2.29-.88-2.31-3.49zM14.88 6.04c.6-.73 1.01-1.74.9-2.75-.87.04-1.93.58-2.55 1.31-.56.64-1.05 1.67-.92 2.65.97.08 1.96-.49 2.57-1.21z" />
        </svg>
      </Badge>
      <Badge href={siteConfig.links.playStore} sub="Get it on" main="Google Play">
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
          <path d="M3.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l9.3-9.7L3.6 2.3z" fill="#5ea7ff" />
          <path d="M16.6 8.4 12.9 12l3.7 3.6 4.2-2.4c.8-.5.8-1.6 0-2.1l-4.2-2.7z" fill="#8bbbe9" />
          <path d="M3.6 2.3 12.9 12l3.7-3.6L5.1 1.8c-.6-.4-1.1-.1-1.5.5z" fill="#fff" />
          <path d="M3.6 21.7c.4.6.9.9 1.5.5l11.5-6.6L12.9 12 3.6 21.7z" fill="#c9e0f5" />
        </svg>
      </Badge>
    </div>
  );
}

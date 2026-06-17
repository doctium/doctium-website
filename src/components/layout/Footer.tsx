import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/content/site";

function Social({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
        <path d={path} />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="grain relative isolate overflow-hidden bg-navy-950 text-white">
      <div className="aurora opacity-40" aria-hidden />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-5 text-balance text-lg leading-relaxed text-white/70">
              {siteConfig.slogan}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Social
                href={siteConfig.social.linkedin}
                label="Doctium on LinkedIn"
                path="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8h4.6v13H.2V8zm7.4 0h4.4v1.8h.06c.6-1.1 2.08-2.26 4.28-2.26 4.58 0 5.42 3 5.42 6.9V21h-4.6v-5.86c0-1.4-.02-3.2-1.96-3.2-1.96 0-2.26 1.52-2.26 3.1V21H7.6V8z"
              />
              <Social
                href={siteConfig.social.x}
                label="Doctium on X"
                path="M18.9 1.5h3.3l-7.2 8.2L23.7 22h-6.6l-5.2-6.8L5.9 22H2.6l7.7-8.8L2 1.5h6.8l4.7 6.2 5.4-6.2zm-1.16 18.5h1.83L7.3 3.36H5.34L17.74 20z"
              />
              <Social
                href={siteConfig.social.instagram}
                label="Doctium on Instagram"
                path="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 00-.68-1.06 2.85 2.85 0 00-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1112 17a4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm5.14-.62a1.15 1.15 0 110 2.3 1.15 1.15 0 010-2.3z"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.label}>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-sky">
                  {col.label}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.95rem] text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Doctium. Built for African healthcare.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={siteConfig.links.api} className="hover:text-white" target="_blank" rel="noopener noreferrer">
              API
            </a>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <a href={`mailto:${siteConfig.links.email}`} className="hover:text-white">
              {siteConfig.links.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

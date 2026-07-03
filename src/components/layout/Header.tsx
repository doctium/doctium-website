"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navGroups } from "@/content/site";
import { useScrollLock } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { EASE_OUT } from "@/lib/motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  useScrollLock(mobileOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes any open menu (keyboard accessibility).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const dark = !scrolled; // transparent over dark hero → white text

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line/70 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
      style={{ height: "var(--header-h)" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="container-x flex h-full items-center justify-between gap-6">
        <Link href="/" aria-label="Doctium home" className="relative z-10">
          <Logo tone={dark ? "dark" : "light"} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpen(group.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  dark
                    ? "text-white/85 hover:text-white"
                    : "text-navy/80 hover:text-navy",
                )}
                aria-expanded={open === group.label}
                aria-haspopup="true"
                aria-controls={`nav-panel-${group.label}`}
                onClick={() => setOpen(open === group.label ? null : group.label)}
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    open === group.label && "rotate-180",
                  )}
                />
              </button>

              <AnimatePresence>
                {open === group.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: EASE_OUT }}
                    id={`nav-panel-${group.label}`}
                    className="absolute left-0 top-[calc(100%+0.5rem)] w-[22rem] overflow-hidden rounded-3xl border border-line bg-white p-2 shadow-[var(--shadow-card)]"
                  >
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-start gap-3 rounded-2xl p-3.5 transition-colors hover:bg-mist"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-1 font-display text-[0.95rem] font-semibold text-navy">
                            {link.label}
                            <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </div>
                          {link.desc && (
                            <p className="mt-0.5 text-[0.8rem] leading-snug text-muted">
                              {link.desc}
                            </p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href="/signup"
            size="sm"
            variant={dark ? "outlineLight" : "secondary"}
          >
            Get started
          </Button>
          <Button href="/contact" size="sm" variant={dark ? "white" : "primary"}>
            Book a demo
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            dark ? "text-white" : "text-navy",
          )}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-navy-950 text-white lg:hidden"
          >
            <div className="container-x flex h-[var(--header-h)] items-center justify-between">
              <Logo tone="dark" />
              <button
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="container-x flex flex-col gap-8 overflow-y-auto pb-12 pt-6"
              aria-label="Mobile"
            >
              {navGroups.map((group) => (
                <motion.div
                  key={group.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                >
                  <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sky">
                    {group.label}
                  </p>
                  <div className="flex flex-col">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="border-b border-white/10 py-3.5 font-display text-xl font-semibold text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
              <div className="mt-2 flex flex-col gap-3">
                <Button href="/signup" variant="white" size="lg" className="w-full">
                  Get started
                </Button>
                <Button href="/contact" variant="outlineLight" size="lg" className="w-full">
                  Book a demo
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

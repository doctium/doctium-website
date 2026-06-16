"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

/**
 * Lenis smooth-scroll provider.
 * - Disabled entirely when the user prefers reduced motion (accessibility).
 * - Intercepts same-page hash links and eases to them, accounting for the
 *   fixed header height (--header-h).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    const headerH = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue(
        "--header-h",
      );
      return parseInt(v, 10) || 76;
    };

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const id = target.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -headerH() - 16 });
      history.replaceState(null, "", id);
    };

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  // reducedMotion="user" makes ALL Framer Motion animations honour the user's
  // prefers-reduced-motion setting (transforms become instant; opacity is kept).
  // The global CSS rule can't reach Framer's JS-driven animations, so this does.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

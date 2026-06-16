"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * A soft light that follows the pointer across a dark section, revealing the
 * dotted grid beneath. Sits absolutely inside a `relative` parent; pointer
 * events pass through. Disabled on touch / reduced-motion.
 */
export function CursorSpotlight({
  className,
  size = 520,
  color = "rgba(47, 128, 237, 0.18)",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !fine) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 60%)`;
      });
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, [size, color]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
        className,
      )}
    />
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/cn";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Pixel travel across the scroll range. Positive = moves up as you scroll down. */
  amount?: number;
};

/** Translates its children on the Y axis as the element passes through the viewport. */
export function Parallax({ children, className, amount = 60 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      <motion.div style={reduced ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

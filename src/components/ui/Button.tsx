"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "white" | "outlineLight";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-all duration-300 cursor-pointer focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  // navy → trust glow, for primary CTAs on light surfaces
  primary:
    "text-white bg-[linear-gradient(120deg,#1f4774,#133157)] shadow-[var(--shadow-cta)] hover:shadow-[0_16px_40px_-8px_rgba(47,128,237,0.55)] hover:brightness-110",
  // outline on light surfaces
  secondary:
    "text-navy bg-white hairline hover:border-navy/30 hover:bg-navy-50",
  ghost: "text-navy hover:bg-navy/5",
  // solid white, for use on navy/dark sections
  white:
    "text-navy bg-white hover:bg-mist shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]",
  // outline on dark surfaces
  outlineLight:
    "text-white border border-white/25 bg-white/5 backdrop-blur-sm hover:bg-white/12 hover:border-white/45",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  magnetic?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  external?: never;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    iconRight,
    iconLeft,
    magnetic = false,
  } = props;

  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const inner = (
    <span
      ref={ref}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      {iconLeft}
      {children}
      {iconRight}
    </span>
  );

  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const isExternal = props.external || /^https?:\/\//.test(props.href);
    if (isExternal) {
      return (
        <motion.a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          whileTap={{ scale: 0.97 }}
        >
          {inner}
        </motion.a>
      );
    }
    return (
      <motion.span
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileTap={{ scale: 0.97 }}
        className="inline-flex"
      >
        <Link href={props.href} className={classes}>
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.button>
  );
}

"use client";

import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";

type SplitTextProps = {
  text: string;
  className?: string;
  /** split unit: word | char */
  by?: "word" | "char";
  /** stagger between units (seconds) */
  stagger?: number;
  /** delay before first unit (seconds) */
  delay?: number;
  /** duration per unit (seconds) */
  duration?: number;
  /** animation direction for entry */
  from?: "bottom" | "top" | "left" | "right" | "scale";
  /** trigger animation on mount (true) or on in-view (false) */
  once?: boolean;
  /** highlight substring(s) with accent class */
  highlight?: string[];
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const offsetMap: Record<NonNullable<SplitTextProps["from"]>, { y?: number; x?: number; scale?: number }> = {
  bottom: { y: 40 },
  top: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.6 },
};

export default function SplitText({
  text,
  className,
  by = "word",
  stagger = 0.08,
  delay = 0,
  duration = 0.7,
  from = "bottom",
  once = true,
  highlight = [],
  highlightClassName = "text-lime",
  as = "h2",
}: SplitTextProps) {
  const units = useMemo(() => {
    if (by === "char") return text.split("");
    return text.split(" ");
  }, [text, by]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, ...offsetMap[from], filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  const isHighlighted = (token: string) =>
    highlight.some((h) => h && token.replace(/[^\wÀ-ÿ]/g, "").toLowerCase() === h.toLowerCase());

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView={once ? "visible" : undefined}
      animate={once ? undefined : "visible"}
      viewport={{ once, margin: "-80px" }}
      aria-label={text}
    >
      {units.map((unit, i) => {
        const needsSpace = by === "word" && i < units.length - 1;
        const highlighted = by === "word" && isHighlighted(unit);
        return (
          <motion.span
            key={`${unit}-${i}`}
            variants={child}
            className={`inline-block will-change-transform ${highlighted ? highlightClassName : ""}`}
          >
            {unit}
            {needsSpace ? "\u00A0" : ""}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}

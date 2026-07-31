"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "article" | "span";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  y = 28,
  x = 0,
  once = true,
  as = "div",
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, y, x, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  );
}

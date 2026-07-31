"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Blob = {
  size: number;
  top: string;
  left: string;
  color: string;
  blur: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
};

type BlobBackgroundProps = {
  /** visual theme: hero uses light-on-blue, dark uses light-on-dark */
  variant?: "hero" | "dark";
  className?: string;
  /** number of blobs */
  count?: number;
};

const heroPalette = [
  "rgba(190, 242, 100, 0.55)", // lime
  "rgba(59, 130, 246, 0.55)", // soft blue
  "rgba(255, 255, 255, 0.25)", // white
  "rgba(167, 243, 208, 0.35)", // mint
];

const darkPalette = [
  "rgba(190, 242, 100, 0.35)",
  "rgba(37, 99, 235, 0.45)",
  "rgba(255, 255, 255, 0.10)",
];

export default function BlobBackground({
  variant = "hero",
  className,
  count = 6,
}: BlobBackgroundProps) {
  const palette = variant === "hero" ? heroPalette : darkPalette;

  const blobs: Blob[] = useMemo(() => {
    // deterministic pseudo-random layout for stable SSR/CSR output
    const seed = variant === "hero" ? 7 : 11;
    const rand = (i: number, salt: number) => {
      const v = Math.sin((i + 1) * seed * 13.37 + salt * 7.7) * 10000;
      return v - Math.floor(v);
    };
    return Array.from({ length: count }).map((_, i) => ({
      size: 120 + Math.floor(rand(i, 1) * 220),
      top: `${Math.floor(rand(i, 2) * 100)}%`,
      left: `${Math.floor(rand(i, 3) * 100)}%`,
      color: palette[i % palette.length],
      blur: 40 + Math.floor(rand(i, 4) * 40),
      duration: 8 + rand(i, 5) * 8,
      delay: -rand(i, 6) * 8,
      driftX: (rand(i, 7) - 0.5) * 60,
      driftY: (rand(i, 8) - 0.5) * 60,
    }));
  }, [count, variant, palette]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
            filter: `blur(${b.blur}px)`,
          }}
          animate={{
            x: [0, b.driftX, 0],
            y: [0, b.driftY, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

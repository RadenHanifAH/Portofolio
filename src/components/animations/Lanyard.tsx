"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState, type ReactNode } from "react";

type LanyardProps = {
  children: ReactNode;
  /** length of the lanyard string (visual + physics) */
  length?: number;
  className?: string;
};

/**
 * A draggable ID card on a lanyard string — ReactBits "Lanyard" inspired.
 *
 * - Idle: gentle pendulum swing (layered on top of drag)
 * - Drag: user grabs card; the SVG string follows the card in real time
 * - Release: card snaps back to origin via Framer Motion's built-in spring
 *
 * `dragSnapToOrigin` returns the card to (0,0) automatically; we read the
 * live motion values to redraw the SVG lanyard path during + after drag.
 */
export default function Lanyard({
  children,
  length = 170,
  className,
}: LanyardProps) {
  // Framer Motion's `drag` writes to these during interaction; `dragSnapToOrigin`
  // animates them back to 0 on release.
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Pendulum rotation from horizontal offset
  const rotate = useTransform(dragX, [-300, 300], [-22, 22]);

  // SVG lanyard path: anchor (top center) → card attachment point
  const [path, setPath] = useState<string>(
    `M 0 0 Q 0 ${length / 2} 0 ${length}`
  );

  function updatePath(x: number, y: number) {
    const midX = x / 2;
    const midY = length / 2 + y / 2;
    setPath(`M 0 0 Q ${midX} ${midY} ${x} ${length + y}`);
  }

  useMotionValueEvent(dragX, "change", (x) => updatePath(x, dragY.get()));
  useMotionValueEvent(dragY, "change", (y) => updatePath(dragX.get(), y));

  return (
    <div
      className={`relative flex flex-col items-center ${className ?? ""}`}
      style={{ width: 280 }}
    >
      {/* Anchor / clip at the top of the lanyard */}
      <div className="relative z-10 -mb-1 flex h-7 w-14 items-center justify-center rounded-b-md bg-gradient-to-b from-slate-200 to-slate-400 shadow-md">
        <div className="h-2 w-7 rounded-full bg-slate-700" />
      </div>

      {/* SVG lanyard string — anchor (top center) → card attachment point */}
      <svg
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        width="600"
        height={length + 40}
        viewBox={`-300 0 600 ${length + 40}`}
        style={{ overflow: "visible" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="lanyardString" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a3e635" />
            <stop offset="100%" stopColor="#bef264" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          stroke="url(#lanyardString)"
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Draggable card — Framer Motion manages x/y; snaps back on release */}
      <motion.div
        drag
        dragElastic={0.4}
        dragMomentum
        dragSnapToOrigin
        style={{
          x: dragX,
          y: dragY,
          rotate,
          marginTop: length - 6,
          originY: 0,
        }}
        whileTap={{ cursor: "grabbing", scale: 1.03 }}
        whileHover={{ scale: 1.03 }}
        className="relative z-20 cursor-grab touch-none select-none"
      >
        {/* Idle pendulum swing layered on top — animates a child so it
            doesn't conflict with the drag transform on the parent. */}
        <motion.div
          animate={{ rotate: [-2.2, 2.2, -2.2] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ originY: 0 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

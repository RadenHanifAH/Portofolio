import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useTransform,
} from "framer-motion";

/**
 * A draggable ID card on a lanyard string — ReactBits "Lanyard" inspired.
 *
 * - Idle: gentle pendulum swing (layered on top of drag) + lanyard string visible
 * - Drag: user grabs card; the SVG string follows the card in real time
 * - Release: card snaps back to origin via Framer Motion's built-in spring
 */
export default function Lanyard({
  children,
  length = 160,
  className = "",
}) {
  // Framer Motion's `drag` writes to these during interaction;
  // `dragSnapToOrigin` animates them back to 0 on release.
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Pendulum rotation from horizontal drag offset
  const rotate = useTransform(dragX, [-300, 300], [-22, 22]);

  // Lanyard SVG path — from clip bottom (0, 0) to card top (x, length + y).
  const midX = useTransform(dragX, (x) => x / 2);
  const midY = useTransform(dragY, (y) => length / 2 + y / 2 + Math.abs(y) * 0.15);
  const endY = useTransform(dragY, (y) => length + y);
  const path = useMotionTemplate`M 0 0 Q ${midX} ${midY} ${dragX} ${endY}`;

  return (
    <div
      className={`relative flex flex-col items-center ${className}`}
      style={{ width: 280 }}
    >
      {/* Anchor / clip at the top of the lanyard */}
      <div className="relative z-10 flex h-7 w-14 items-center justify-center rounded-b-md bg-gradient-to-b from-slate-200 to-slate-400 shadow-md">
        <div className="h-2 w-7 rounded-full bg-slate-700" />
      </div>

      {/* SVG lanyard string */}
      <svg
        className="pointer-events-none absolute left-1/2 top-7 z-0 -translate-x-1/2"
        width="600"
        height={length + 60}
        viewBox={`-300 0 600 ${length + 60}`}
        style={{ overflow: "visible" }}
        aria-hidden
      >
        <motion.path
          d={path}
          stroke="#a3e635"
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
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
          marginTop: length,
          originY: 0,
        }}
        whileTap={{ cursor: "grabbing", scale: 1.03 }}
        whileHover={{ scale: 1.03 }}
        className="relative z-20 cursor-grab touch-none select-none"
      >
        {/* Idle pendulum swing layered on a child */}
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

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.4,
  stiffness = 200,
  damping = 12,
  as = "button",
  href,
  onClick,
  ariaLabel,
  ...rest
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping, mass: 0.5 });
  const springY = useSpring(y, { stiffness, damping, mass: 0.5 });

  const innerX = useTransform(springX, (v) => v * 0.4);
  const innerY = useTransform(springY, (v) => v * 0.4);

  function handleMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const content = (
    <motion.span
      style={{ x: innerX, y: innerY }}
      className="relative z-10 inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {as === "a" ? (
        <motion.a
          href={href}
          aria-label={ariaLabel}
          className={className}
          whileTap={{ scale: 0.95 }}
          {...rest}
        >
          {content}
        </motion.a>
      ) : (
        <motion.button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel}
          className={className}
          whileTap={{ scale: 0.95 }}
          {...rest}
        >
          {content}
        </motion.button>
      )}
    </motion.div>
  );
}

import { motion } from "framer-motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 28,
  x = 0,
  once = true,
  as = "div",
}) {
  const variants = {
    hidden: { opacity: 0, y, x, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as] || motion.div;

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

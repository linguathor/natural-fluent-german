"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
}: AnimateOnScrollProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        prefersReduced
          ? { duration: 0, delay: 0 }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
      className={`aos-element${className ? ` ${className}` : ""}`}
    >
      {children}
    </motion.div>
  );
}

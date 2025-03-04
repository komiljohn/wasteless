"use client";

import { motion, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface Props extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function BottleAnimation({ children, delay, ...props }: Props) {
  return (
    <motion.div
      initial={{ x: 200, y: 200, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 100,
        // damping: 20,
        // ease: "bounce",
        bounce: 0.4,
      }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: false }}
      className={props.className ?? ""}
    >
      {children}
    </motion.div>
  );
}

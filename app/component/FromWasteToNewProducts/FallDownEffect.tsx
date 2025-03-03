import { motion } from "framer-motion";
import React, { ReactNode } from "react";

export default function FallDownEffect({
  children,
  y,
  delay,
  className,
}: {
  children: ReactNode;
  y: number;
  delay: number;
  className: string;
}) {
  return (
    <motion.div
      initial={{
        y: 0,
      }}
      whileInView={{
        y,
        transition: {
          delay,
          duration: 0.8,
        },
      }}
      viewport={{ once: true, amount: 0, margin: "0px 0px -50px 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

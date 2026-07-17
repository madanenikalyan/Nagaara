"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerChildren = 0.03,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotateX: -80 },
              visible: {
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

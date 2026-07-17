"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {tag && (
        <span className="inline-block text-[#F59E0B] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          {tag}
        </span>
      )}
      <h2
        className={`font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight ${
          light ? "text-gray-900" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg md:text-xl max-w-3xl leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-gray-600" : "text-[#94A3B8]"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

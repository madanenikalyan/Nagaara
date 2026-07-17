"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      className={`relative rounded-2xl border border-white/[0.06] bg-[#10141F]/60 backdrop-blur-xl p-8 transition-all duration-500 hover:border-[#F59E0B]/15 hover:bg-[#10141F]/80 hover:shadow-2xl hover:shadow-[#F59E0B]/[0.04] ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

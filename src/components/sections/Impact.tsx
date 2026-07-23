"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, TrendingUp, BarChart3, Target } from "lucide-react";

const expertise = [
  { label: "Meta Ads", level: 95, color: "#2563EB" },
  { label: "Google Ads", level: 90, color: "#10B981" },
  { label: "Landing Pages", level: 92, color: "#F59E0B" },
  { label: "Lead Generation", level: 88, color: "#8B5CF6" },
];

export default function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="results" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2563EB]/[0.015] rounded-full blur-[150px]" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#F59E0B] text-xs font-medium tracking-wide uppercase">
              Our Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Results That{" "}
            <span className="text-[#F59E0B]">Speak for Themselves</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just talk about results — we deliver them. Here&apos;s
            the impact we&apos;re committed to making for your business.
          </p>
        </motion.div>

        {/* Expertise bars */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-white mb-8 font-[family-name:var(--font-space-grotesk)]"
          >
            Our Expertise
          </motion.h3>

          <div className="space-y-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{item.label}</span>
                  <span style={{ color: item.color }} className="font-bold">
                    {item.level}%
                  </span>
                </div>
                <div className="h-3 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[#94A3B8] text-sm">
            Want to see how we can help your business?{" "}
            <a href="#contact" className="text-[#F59E0B] hover:underline">
              Book a free consultation
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

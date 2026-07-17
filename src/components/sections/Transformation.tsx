"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TRANSFORMATION_STEPS } from "@/lib/constants";

export default function Transformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F59E0B]/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[#F59E0B] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            The Evolution
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            From Sound Waves
            <br />
            <span className="text-gradient-gold">to Digital Waves</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto">
            The medium changed. The mission never changed.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#F59E0B] via-[#F59E0B]/60 to-[#2563EB]"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {TRANSFORMATION_STEPS.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } flex-row`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  } text-left pl-20 md:pl-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`inline-block bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-6 backdrop-blur-sm hover:border-[#F59E0B]/15 transition-all duration-500 ${
                      index === TRANSFORMATION_STEPS.length - 1
                        ? "border-[#F59E0B]/30 bg-[#F59E0B]/[0.05]"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{step.emoji}</span>
                      <span
                        className={`font-bold font-[family-name:var(--font-space-grotesk)] ${
                          index === TRANSFORMATION_STEPS.length - 1
                            ? "text-[#F59E0B] text-lg"
                            : "text-white"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Center node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{
                      scale: [0, 1.2, 1],
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`w-4 h-4 rounded-full border-4 border-[#05070C] ${
                      index === TRANSFORMATION_STEPS.length - 1
                        ? "bg-[#F59E0B] shadow-lg shadow-[#F59E0B]/50"
                        : "bg-[#F59E0B]/60"
                    }`}
                  />
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
            <span className="text-[#F59E0B] text-sm font-medium">
              The medium changed. The mission never changed.
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
    </section>
  );
}

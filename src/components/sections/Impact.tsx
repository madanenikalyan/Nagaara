"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { RESULTS } from "@/lib/constants";

export default function Impact() {
  return (
    <section id="results" className="relative py-32">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#F59E0B]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#2563EB]/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Impact"
          title="Built on Dedication"
          description="Numbers that reflect our commitment — not vanity metrics, but the values we stand for."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESULTS.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-10 text-center backdrop-blur-sm hover:border-[#F59E0B]/15 transition-all duration-500 hover:bg-[#10141F]/80">
                <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/15 flex items-center justify-center mx-auto mb-6">
                  <result.icon className="w-7 h-7 text-[#F59E0B]" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                  <AnimatedCounter
                    value={result.value}
                    suffix={result.suffix}
                  />
                </div>
                <div className="text-[#94A3B8] text-sm font-medium uppercase tracking-wider">
                  {result.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

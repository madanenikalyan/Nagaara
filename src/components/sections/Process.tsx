"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export default function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Our Process"
          title="How We Drive Growth"
          description="A proven 8-step framework that turns advertising spend into measurable business results."
        />

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F59E0B]/40 via-[#F59E0B]/20 to-transparent hidden md:block" />

          <div className="space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex items-center gap-6 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    } text-left`}
                  >
                    <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-6 inline-block backdrop-blur-sm hover:border-[#F59E0B]/15 transition-colors duration-500">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#F59E0B] text-xs font-bold tracking-widest font-[family-name:var(--font-space-grotesk)]">
                          STEP {String(step.number).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 font-[family-name:var(--font-space-grotesk)]">
                        {step.title}
                      </h3>
                      <p className="text-[#94A3B8] text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] items-center justify-center z-10 shadow-lg shadow-[#F59E0B]/25">
                    <span className="text-black font-bold text-sm font-[family-name:var(--font-space-grotesk)]">
                      {step.number}
                    </span>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>

                {index < PROCESS_STEPS.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="w-5 h-5 text-[#F59E0B]/30 hidden md:block" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
    </section>
  );
}

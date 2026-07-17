"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE } from "@/lib/constants";

export default function WhyNagaara() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Why NAGAARA"
          title="Why Businesses Choose Us"
          description="Traditional marketing reached streets. Digital marketing reaches the world. NAGAARA understands both."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-8 h-full backdrop-blur-sm hover:border-[#F59E0B]/15 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/15 flex items-center justify-center mb-5 group-hover:bg-[#F59E0B]/20 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {item.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
    </section>
  );
}

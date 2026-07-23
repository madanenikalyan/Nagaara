"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Zap, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Performance Focused",
    description:
      "We don't promise the moon. We promise measurable results — and then we deliver them.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "You see every rupee spent, every lead generated, every result delivered. No black boxes.",
    color: "#2563EB",
  },
  {
    icon: Zap,
    title: "Speed Meets Strategy",
    description:
      "We move fast because your business can't wait. But we never sacrifice strategy for speed.",
    color: "#10B981",
  },
  {
    icon: Headphones,
    title: "Always Reachable",
    description:
      "Your dedicated strategist is one call away. A real person who knows your business.",
    color: "#8B5CF6",
  },
];

export default function WhyNagaara() {
  return (
    <section id="why" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0D15]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8B5CF6] text-xs font-medium tracking-wide uppercase">
              Why Nagaara
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Why Businesses{" "}
            <span className="text-[#F59E0B]">Choose Us</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just another agency. Here&apos;s what makes us
            different.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group"
            >
              <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-8 h-full backdrop-blur-sm hover:border-[#F59E0B]/20 transition-all duration-500">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
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
    </section>
  );
}

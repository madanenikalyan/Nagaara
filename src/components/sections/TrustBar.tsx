"use client";

import { motion } from "framer-motion";
import { Users, Shield, Eye, Headphones } from "lucide-react";

const stats = [
  { value: "5-10", suffix: "", label: "Leads/Day", icon: Users, color: "#10B981" },
  { value: "40", suffix: "+", label: "Years Legacy", icon: Shield, color: "#F59E0B" },
  { value: "100", suffix: "%", label: "Transparency", icon: Eye, color: "#2563EB" },
  { value: "24", suffix: "/7", label: "Support", icon: Headphones, color: "#8B5CF6" },
];

export default function TrustBar() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0D15]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                {stat.value}
                <span className="text-[#F59E0B]">{stat.suffix}</span>
              </div>
              <p className="text-[#94A3B8] text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

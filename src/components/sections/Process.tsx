"use client";

import { motion } from "framer-motion";
import { Phone, Target, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const steps = [
  {
    number: 1,
    title: "Free Strategy Call",
    description:
      "We understand your business, goals, and challenges in a quick 15-minute call. No sales pitch — just honest advice.",
    icon: Phone,
    color: "#2563EB",
  },
  {
    number: 2,
    title: "Custom Growth Plan",
    description:
      "We create a tailored marketing strategy with clear KPIs, budget allocation, and expected outcomes.",
    icon: Target,
    color: "#10B981",
  },
  {
    number: 3,
    title: "Launch & Optimize",
    description:
      "We launch your campaigns, track every metric, and optimize daily to maximize your ROI.",
    icon: Zap,
    color: "#F59E0B",
  },
  {
    number: 4,
    title: "Scale & Grow",
    description:
      "Once we find what works, we scale aggressively to drive more leads and revenue for your business.",
    icon: TrendingUp,
    color: "#8B5CF6",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#2563EB] text-xs font-medium tracking-wide uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            From Zero to{" "}
            <span className="text-[#F59E0B]">Generating Leads</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            Four simple steps to start getting qualified leads for your business.
            No complicated contracts — just results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}

              <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-6 h-full backdrop-blur-sm hover:border-[#F59E0B]/20 transition-all duration-500 group">
                {/* Number + Icon */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}25` }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <span className="text-4xl font-bold text-white/10 font-[family-name:var(--font-space-grotesk)]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] text-[#05070C] font-bold rounded-xl hover:bg-[#D97706] transition-colors"
          >
            Start Your Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

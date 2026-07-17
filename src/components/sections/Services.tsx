"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { SERVICES, WHATSAPP_LINK } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F59E0B]/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Services"
          title="Digital Marketing That Delivers"
          description="From loudspeakers to algorithms. We combine storytelling with data-driven advertising to generate measurable business growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <GlassCard key={service.title} delay={index * 0.08}>
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/15 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 font-[family-name:var(--font-space-grotesk)]">
                      {service.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-[#F59E0B] text-sm font-medium hover:text-[#FBBF24] transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

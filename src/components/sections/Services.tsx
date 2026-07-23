"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES, WHATSAPP_LINK } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F59E0B]/[0.015] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Everything You Need to{" "}
            <span className="text-[#F59E0B]">Grow Online</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            From running ads to capturing leads — we handle your entire digital
            marketing so you can focus on running your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group"
            >
              <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-8 h-full backdrop-blur-sm hover:border-[#F59E0B]/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/15 flex items-center justify-center mb-6 group-hover:bg-[#F59E0B]/20 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[#94A3B8] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]/60" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F59E0B] text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </a>
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
          <p className="text-[#94A3B8] text-sm">
            Not sure what you need?{" "}
            <a href="#contact" className="text-[#F59E0B] hover:underline">
              Book a free consultation
            </a>{" "}
            and we&apos;ll figure it out together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

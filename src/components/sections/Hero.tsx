"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Play, Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";
import { WHATSAPP_LINK, PHONE_DISPLAY } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#05070C]" />

      {/* Logo watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/LOGO.jpeg"
          alt=""
          width={1000}
          height={1000}
          className="w-[90vw] max-w-[800px] h-auto opacity-[0.03]"
          style={{ filter: "grayscale(100%) brightness(2)" }}
          priority={false}
        />
      </div>

      {/* Gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#F59E0B]/[0.02] rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/[0.015] rounded-full blur-[130px]" />
        <div className="grid-pattern absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Main Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Performance Marketing Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <motion.span
                className="text-white block"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Turn Clicks Into
              </motion.span>
              <motion.span
                className="text-gradient-gold block mt-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Paying Customers.
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-[#94A3B8] max-w-xl mb-8 leading-relaxed"
            >
              Meta Ads, Google Ads & Landing Pages that generate{" "}
              <span className="text-white font-medium">5-10 qualified leads daily</span> for
              local businesses. No vanity metrics — only measurable growth.
            </motion.p>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-10 space-y-3"
            >
              {[
                "Free strategy call — no sales pitch",
                "Transparent pricing — see every rupee spent",
                "Daily optimization — we never stop improving",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span className="text-[#94A3B8] text-sm">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <MagneticButton>
                <Button href="#contact" variant="primary" size="lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Button href={WHATSAPP_LINK} variant="secondary" size="lg">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex items-center gap-3 text-[#94A3B8]/50"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Or call us at</span>
              <a href="tel:+919581184697" className="text-white font-medium hover:text-[#F59E0B] transition-colors">
                {PHONE_DISPLAY}
              </a>
            </motion.div>
          </div>

          {/* Right — Visual + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Stats card */}
              <div className="bg-[#10141F]/80 border border-white/[0.06] rounded-3xl p-8 backdrop-blur-xl">
                <div className="text-center mb-8">
                  <span className="text-6xl md:text-7xl font-bold text-[#F59E0B] font-[family-name:var(--font-space-grotesk)]">
                    5-10
                  </span>
                  <p className="text-[#94A3B8] text-lg mt-2">Leads Per Day</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Meta Ads", color: "#2563EB" },
                    { label: "Google Ads", color: "#10B981" },
                    { label: "Landing Pages", color: "#F59E0B" },
                    { label: "Lead Gen", color: "#8B5CF6" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center"
                    >
                      <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ backgroundColor: item.color }} />
                      <span className="text-white text-xs font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center justify-center gap-2 text-[#10B981]">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-sm font-medium">Currently accepting new clients</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 backdrop-blur-xl"
              >
                <span className="text-[#10B981] text-xs font-bold">Free Audit</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070C] to-transparent" />
    </section>
  );
}

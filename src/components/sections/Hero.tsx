"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#05070C]" />

      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-[#F59E0B]/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#2563EB]/[0.02] rounded-full blur-[120px]" />
        <div className="grid-pattern absolute inset-0 opacity-100" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#F59E0B] text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Continuing a Legacy Since 1984
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              <span className="text-white">40 Years of Trust.</span>
              <br />
              <span className="text-gradient-gold">One New Generation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-[#94A3B8] max-w-xl mb-12 leading-relaxed"
            >
              My father spent four decades helping local businesses become heard
              through traditional public announcements. Today{" "}
              <span className="text-white font-medium">NAGAARA</span> helps
              businesses grow through Meta Ads, Google Ads, Landing Pages and
              Performance Marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-16"
            >
              <Button href="#contact" variant="primary" size="lg">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href={WHATSAPP_LINK} variant="secondary" size="lg">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex items-center gap-2 text-[#94A3B8]/50"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Ambient glow behind frame */}
              <div className="absolute -inset-8 bg-[#F59E0B]/[0.06] rounded-3xl blur-3xl" />

              {/* Museum-quality frame */}
              <div className="relative museum-frame rounded-2xl overflow-hidden bg-[#10141F]">
                <div className="relative p-3">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/nagaraju-legacy.jpeg"
                      alt="Nagaraju - The Legacy of 40 Years of Public Announcements"
                      width={500}
                      height={600}
                      className="w-full h-auto max-w-[420px] object-cover"
                      priority
                      style={{
                        filter: "sepia(15%) contrast(1.05) brightness(1.05)",
                      }}
                    />

                    {/* Cinematic gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070C]/60 via-transparent to-[#05070C]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#05070C]/20 to-transparent" />
                  </div>
                </div>

                {/* Caption bar */}
                <div className="px-6 pb-5 pt-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/90 text-sm font-medium">
                        The Legacy
                      </p>
                      <p className="text-[#94A3B8]/60 text-xs mt-0.5">
                        40 Years of Helping Businesses Get Heard
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                      <span className="text-[#F59E0B] text-xs font-bold">
                        N
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/10 border border-[#F59E0B]/20 backdrop-blur-xl flex items-center justify-center"
              >
                <span className="text-2xl">📢</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05070C] to-transparent" />
    </section>
  );
}

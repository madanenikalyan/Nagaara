"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Briefcase, Volume2, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function OurRoots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="roots" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0D15]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
              Our Roots
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Where It All{" "}
            <span className="text-[#F59E0B]">Began</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            NAGAARA isn&apos;t just a startup. It&apos;s built on a foundation of
            corporate expertise and a 40-year legacy of helping businesses grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Father's Legacy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl h-full backdrop-blur-sm hover:border-[#F59E0B]/20 transition-all duration-500 relative overflow-hidden">
              {/* Father photo watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="/images/nagaraju-legacy.jpeg"
                  alt=""
                  width={500}
                  height={400}
                  className="w-full h-full object-cover opacity-[0.08]"
                  style={{ filter: "grayscale(100%) brightness(1.2) contrast(1.1)" }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#10141F]/80 via-[#10141F]/60 to-[#10141F]/90" />

              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                    <Volume2 className="w-7 h-7 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                      The Legacy
                    </h3>
                    <p className="text-[#F59E0B] text-sm">40 Years of Trust</p>
                  </div>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  In 1984, a young man with a loudspeaker fitted to a bicycle
                  began traveling through towns — helping local businesses
                  announce their presence to the world.
                </p>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  For 40 years, thousands of businesses trusted one voice to
                  carry their message. Shop openings, festivals, political
                  campaigns — the loudspeaker became a symbol of trust.
                </p>
                <p className="text-white text-sm leading-relaxed font-medium">
                  The medium changed. The mission never did.
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="h-px flex-1 bg-[#F59E0B]/20" />
                  <span className="text-[#F59E0B]/60 text-xs tracking-wider uppercase">
                    est. 1984
                  </span>
                  <div className="h-px flex-1 bg-[#F59E0B]/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dell Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl h-full backdrop-blur-sm hover:border-[#2563EB]/20 transition-all duration-500 relative overflow-hidden">
              {/* Dell logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[180px] md:text-[220px] font-bold text-white/[0.03] font-[family-name:var(--font-space-grotesk)] select-none leading-none">
                  DELL
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#10141F]/80 via-[#10141F]/60 to-[#10141F]/90" />

              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                    <Briefcase className="w-7 h-7 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                      Corporate Expertise
                    </h3>
                    <p className="text-[#2563EB] text-sm">Dell Marketing Operations</p>
                  </div>
                </div>

                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  Pavan Kalyan worked as a Marketing Operations Analyst at{" "}
                  <span className="text-white font-medium">Dell</span> — one of
                  the world&apos;s largest technology companies.
                </p>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  Hands-on experience with campaign analytics, A/B testing,
                  conversion optimization, and data-driven marketing decisions
                  at enterprise scale.
                </p>
                <p className="text-white text-sm leading-relaxed font-medium">
                  Corporate discipline meets local business understanding.
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <div className="h-px flex-1 bg-[#2563EB]/20" />
                  <span className="text-[#2563EB]/60 text-xs tracking-wider uppercase">
                    Marketing Operations
                  </span>
                  <div className="h-px flex-1 bg-[#2563EB]/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Combined message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-[#F59E0B]/5 to-[#2563EB]/5 border border-white/[0.06] rounded-2xl p-8">
            <p className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
              Legacy + Expertise ={" "}
              <span className="text-gradient-gold">NAGAARA</span>
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              40 years of understanding local businesses + Corporate marketing
              discipline = A unique combination no other agency offers.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] text-[#05070C] font-bold rounded-xl hover:bg-[#D97706] transition-colors"
            >
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

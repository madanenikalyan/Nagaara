"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK, EMAIL, PHONE_DISPLAY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/Logo.png"
                alt="NAGAARA"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
              The voice that once echoed through the streets now helps businesses
              grow online.
            </p>
            <p className="text-[#94A3B8]/50 text-xs leading-relaxed">
              From loudspeakers to algorithms. From announcements to performance
              marketing. NAGAARA is the digital evolution of a 40-year legacy of
              helping businesses get heard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-sm mb-6 font-[family-name:var(--font-space-grotesk)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#94A3B8] text-sm hover:text-[#F59E0B] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-sm mb-6 font-[family-name:var(--font-space-grotesk)]">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-[#94A3B8] text-sm hover:text-[#F59E0B] transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {EMAIL}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#94A3B8] text-sm hover:text-[#F59E0B] transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-3 text-[#94A3B8] text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                India
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3 font-[family-name:var(--font-space-grotesk)]">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  "Meta Ads",
                  "Google Ads",
                  "Landing Pages",
                  "Performance Marketing",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-[#94A3B8] text-xs hover:text-[#F59E0B] transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8]/40 text-xs">
            &copy; {new Date().getFullYear()} NAGAARA. All rights reserved.
          </p>
          <p className="text-[#94A3B8]/30 text-xs">
            Founded by Kalyan Pavan — Continuing the legacy of Nagaraju.
          </p>
        </div>
      </div>
    </footer>
  );
}

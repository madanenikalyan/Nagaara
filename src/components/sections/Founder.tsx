"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, TrendingUp, Users } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Marketing Operations Analyst — Dell",
    description:
      "Managed and optimized large-scale digital marketing campaigns at one of the world's largest technology companies.",
  },
  {
    icon: TrendingUp,
    title: "Campaign Performance",
    description:
      "Hands-on experience with campaign analytics, A/B testing, conversion optimization, and data-driven marketing decisions.",
  },
  {
    icon: Users,
    title: "Enterprise-Scale Strategy",
    description:
      "Worked with cross-functional teams to plan, execute, and scale marketing operations across multiple channels and audiences.",
  },
  {
    icon: Award,
    title: "Corporate + Legacy = NAGAARA",
    description:
      "Combine world-class corporate marketing discipline with 40 years of local business understanding — something no other agency offers.",
  },
];

export default function Founder() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#2563EB]/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#2563EB] text-xs font-medium tracking-wide uppercase">
              The Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Not Just a Legacy.
            <br />
            <span className="text-[#F59E0B]">Also Real Experience.</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            NAGAARA isn&apos;t built on nostalgia alone. Kalyan Pavan brings
            hands-on corporate marketing experience from{" "}
            <span className="text-white font-medium">Dell</span> — combining
            enterprise-grade strategy with 40 years of local business trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-8 h-full backdrop-blur-sm hover:border-[#2563EB]/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/15 flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/20 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                  {item.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#10141F]/60 border border-white/[0.06] rounded-full px-6 py-3 backdrop-blur-sm">
            <span className="text-2xl">🔊</span>
            <span className="text-[#94A3B8] text-sm">
              Father&apos;s <span className="text-[#F59E0B] font-medium">40 years</span> of
              legacy + Son&apos;s <span className="text-[#2563EB] font-medium">Dell</span> experience ={" "}
              <span className="text-white font-medium">NAGAARA</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

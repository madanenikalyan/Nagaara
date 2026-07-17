"use client";

import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Testimonials"
          title="Trusted by Businesses"
          description="Hear from businesses that have grown with NAGAARA."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <GlassCard key={testimonial.name} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed text-sm mb-8 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-black font-bold font-[family-name:var(--font-space-grotesk)]">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-[#94A3B8] text-xs">
                      {testimonial.role} — {testimonial.business}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <p className="text-center text-[#94A3B8]/40 text-xs mt-10">
          *Testimonials are placeholders and will be replaced with real client
          feedback.
        </p>
      </div>
    </section>
  );
}

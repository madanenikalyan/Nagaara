"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { WHATSAPP_LINK, PHONE_DISPLAY, EMAIL, SERVICES_FOR_FORM } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Save to CRM
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.business,
          service: formData.service,
          message: formData.message,
          source: "website",
        }),
      });

      // Submit to FormSubmit.co
      await fetch("https://formsubmit.co/ajax/nagaara14@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please try again or WhatsApp us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F59E0B]/[0.015] rounded-full blur-[150px]" />
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
          <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#10B981] text-xs font-medium tracking-wide uppercase">
              Limited Availability
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Ready to Get{" "}
            <span className="text-[#F59E0B]">More Leads?</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            Book your free strategy call today. We&apos;ll show you exactly how
            we can help your business grow — no obligation, no sales pitch.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
              Why Book a Call?
            </h3>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Zap,
                  title: "Get a Custom Growth Plan",
                  desc: "We'll analyze your business and show you exactly how to get more leads.",
                  color: "#F59E0B",
                },
                {
                  icon: Shield,
                  title: "Transparent Pricing",
                  desc: "No hidden fees. No contracts. You'll know exactly what you're paying for.",
                  color: "#2563EB",
                },
                {
                  icon: Users,
                  title: "See Real Results",
                  desc: "We'll show you examples of how we've helped businesses like yours grow.",
                  color: "#10B981",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}25` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-[#94A3B8] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact options */}
            <div className="space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#10141F]/60 border border-white/[0.06] rounded-xl hover:border-[#10B981]/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-white font-bold">WhatsApp Us</p>
                  <p className="text-[#94A3B8] text-sm">Instant reply — {PHONE_DISPLAY}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#10B981] group-hover:translate-x-1 transition-all ml-auto" />
              </a>

              <a
                href={`tel:+919581184697`}
                className="flex items-center gap-4 p-4 bg-[#10141F]/60 border border-white/[0.06] rounded-xl hover:border-[#2563EB]/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#2563EB]" />
                </div>
                <div>
                  <p className="text-white font-bold">Call Us</p>
                  <p className="text-[#94A3B8] text-sm">{PHONE_DISPLAY}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all ml-auto" />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 bg-[#10141F]/60 border border-white/[0.06] rounded-xl hover:border-[#F59E0B]/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-white font-bold">Email Us</p>
                  <p className="text-[#94A3B8] text-sm">{EMAIL}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#94A3B8] group-hover:text-[#F59E0B] group-hover:translate-x-1 transition-all ml-auto" />
              </a>
            </div>

            {/* Urgency */}
            <div className="mt-8 p-4 bg-[#F59E0B]/5 border border-[#F59E0B]/10 rounded-xl">
              <div className="flex items-center gap-2 text-[#F59E0B] mb-2">
                <Clock className="w-4 h-4" />
                <span className="font-bold text-sm">Limited Spots Available</span>
              </div>
              <p className="text-[#94A3B8] text-sm">
                We only take on 5 new clients per month to ensure quality service.
                Book your call today to secure your spot.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSuccess ? (
              <div className="bg-[#10141F]/60 border border-[#10B981]/20 rounded-2xl p-12 text-center backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#10B981]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                  We&apos;ll Be In Touch!
                </h3>
                <p className="text-[#94A3B8] mb-6">
                  Thank you for your interest. Our team will reach out within 24
                  hours to schedule your free strategy call.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#10B981] text-white font-bold rounded-xl hover:bg-[#059669] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Book Your Free Strategy Call
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#05070C] border border-white/[0.08] rounded-xl text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 bg-[#05070C] border border-white/[0.08] rounded-xl text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#05070C] border border-white/[0.08] rounded-xl text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#05070C] border border-white/[0.08] rounded-xl text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#05070C] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-[#F59E0B]/40 transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      {SERVICES_FOR_FORM.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Tell Us About Your Business
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#05070C] border border-white/[0.08] rounded-xl text-white placeholder-[#94A3B8]/40 focus:outline-none focus:border-[#F59E0B]/40 transition-colors resize-none"
                      placeholder="What's your biggest challenge right now?"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm mt-4">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 px-8 py-4 bg-[#F59E0B] text-[#05070C] font-bold rounded-xl hover:bg-[#D97706] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Book My Free Call
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-[#94A3B8]/50 text-xs text-center mt-4">
                  No spam. No sales pitch. Just a honest conversation about your business.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

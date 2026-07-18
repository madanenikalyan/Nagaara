"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Phone,
  Mail,
  Building2,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { useUTMTracking } from "@/hooks/useUTMTracking";
import {
  WHATSAPP_LINK,
  EMAIL,
  PHONE_DISPLAY,
  SERVICES_FOR_FORM,
} from "@/lib/constants";

export default function Contact() {
  const utm = useUTMTracking();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          phone: formData.phone,
          email: formData.email,
          service: formData.service || "Not specified",
          message: formData.message || "No message provided",
          utm_source: utm.utm_source || "direct",
          utm_medium: utm.utm_medium || "none",
          utm_campaign: utm.utm_campaign || "none",
          utm_content: utm.utm_content || "",
          landing_page: utm.landing_page || window.location.href,
          submitted_at: new Date().toISOString(),
          _subject: `[LEAD] ${formData.name} — ${formData.business}${utm.utm_campaign ? ` — Campaign: ${utm.utm_campaign}` : ""}`,
        }),
      });

      if (res.ok) {
        // Also save to CRM database
        fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            business: formData.business,
            service: formData.service || null,
            message: formData.message || null,
            source: "form",
            utmSource: utm.utm_source || null,
            utmMedium: utm.utm_medium || null,
            utmCampaign: utm.utm_campaign || null,
            utmTerm: utm.utm_term || null,
            utmContent: utm.utm_content || null,
          }),
        }).catch(() => {});

        setSubmitted(true);
        setFormData({
          name: "",
          business: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setError(
          "Something went wrong. Please try again or reach us on WhatsApp."
        );
      }
    } catch {
      setError("Network error. Please try again or reach us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F59E0B]/[0.02] rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Contact"
          title="Book a Free Consultation"
          description="Ready to grow your business? Let's talk about how NAGAARA can help you generate more leads and sales."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-[#94A3B8] leading-relaxed mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours. Or reach out directly on WhatsApp for an instant
                  response.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/15 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-[#94A3B8] text-xs">Phone</div>
                      <div className="text-white text-sm">{PHONE_DISPLAY}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/15 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="text-[#94A3B8] text-xs">Email</div>
                      <div className="text-white text-sm">{EMAIL}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button
                    href={WHATSAPP_LINK}
                    variant="primary"
                    size="lg"
                    className="w-full"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    href={`mailto:${EMAIL}`}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-[#10141F]/60 border border-[#F59E0B]/20 rounded-2xl p-12 text-center backdrop-blur-sm">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#F59E0B]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                  Thank You!
                </h3>
                <p className="text-[#94A3B8] mb-6">
                  We&apos;ve received your inquiry. Our team will get back to
                  you within 24 hours.
                </p>
                <Button href={WHATSAPP_LINK} variant="secondary" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Or chat on WhatsApp now
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[#94A3B8] text-xs mb-2 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#94A3B8] text-xs mb-2 block">
                      Business Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]/30" />
                      <input
                        type="text"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Your Business Name"
                        className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl pl-11 pr-4 py-3 text-white text-sm placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[#94A3B8] text-xs mb-2 block">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 95811 84697"
                      className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[#94A3B8] text-xs mb-2 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#F59E0B]/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-[#94A3B8] text-xs mb-2 block">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F59E0B]/40 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#10141F]">
                      Select a Service
                    </option>
                    {SERVICES_FOR_FORM.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#10141F]"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="text-[#94A3B8] text-xs mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business goals..."
                    className="w-full bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-[#94A3B8]/30 focus:outline-none focus:border-[#F59E0B]/40 transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  {sending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

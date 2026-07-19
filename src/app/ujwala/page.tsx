"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Shield, Truck, Star, CheckCircle2, Send, MessageSquare, Loader2, Wrench, Zap, Award } from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/919393793293?text=${encodeURIComponent("Hi Ujwala Motors, I'm interested in motor parts. Please share details.")}`;

export default function UjwalaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          business: "Ujwala Motor Parts - Landing Page Lead",
          service: "Motor Parts Inquiry",
          message: formData.message || "Landing page inquiry",
          source: "landing_page_ujwala",
        }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please call us directly.");
    }
    setSending(false);
  }

  return (
    <div className="min-h-screen bg-[#05070C] text-white">
      {/* Top Bar */}
      <div className="bg-[#F59E0B] text-black py-2 px-4 text-center text-sm font-semibold">
        <a href="tel:9393793293" className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Call Now: 9393793293
        </a>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F59E0B]/[0.03] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-[#F59E0B] text-sm">Anantapur&apos;s Trusted Motor Parts Store</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#F59E0B]">Ujwala</span> Motor Parts
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Quality spare parts for all vehicle brands. Genuine products, best prices, and expert guidance for mechanics and vehicle owners across Anantapur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="bg-[#F59E0B] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D97706] transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a href="tel:9393793293"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call: 9393793293
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Shield, label: "Genuine Parts", desc: "100% authentic products" },
            { icon: Truck, label: "Fast Delivery", desc: "Same day dispatch" },
            { icon: Star, label: "Best Prices", desc: "Wholesale & retail rates" },
            { icon: Award, label: "Expert Support", desc: "Technical guidance" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <item.icon className="w-8 h-8 text-[#F59E0B]" />
              <p className="text-white font-semibold text-sm">{item.label}</p>
              <p className="text-[#94A3B8] text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: "Two-Wheeler Parts", items: ["Engine parts", "Brake pads & shoes", "Chain sprockets", "Electrical parts", "Suspension components"] },
              { icon: Zap, title: "Four-Wheeler Parts", items: ["Filters (oil, air, fuel)", "Clutch plates", "Bearings", "Belts & hoses", "Lighting & electrical"] },
              { icon: Truck, title: "Heavy Vehicle Parts", items: ["Truck & bus parts", "Commercial vehicle spares", "Hydraulic components", "Engine overhaul kits", "Genuine OEM parts"] },
            ].map((s) => (
              <div key={s.title} className="bg-[#10141F] border border-white/5 rounded-2xl p-6 hover:border-[#F59E0B]/20 transition-colors">
                <s.icon className="w-10 h-10 text-[#F59E0B] mb-4" />
                <h3 className="text-lg font-bold mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#94A3B8] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-6 bg-[#10141F]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Mechanics Trust Ujwala</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "All Major Brands", desc: "Bosch, TVS, Minda, Lumax, Lucas TVS, and 50+ brands in stock." },
              { title: "Wholesale & Retail", desc: "Best rates for bulk orders. Competitive pricing for individual buyers too." },
              { title: "Expert Guidance", desc: "Not sure which part fits? Our team helps you find the exact match for your vehicle." },
              { title: "Anantapur Delivery", desc: "Fast delivery across Anantapur district. Same-day dispatch for urgent orders." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-[#F59E0B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-[#94A3B8] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Get a Quote</h2>
          <p className="text-[#94A3B8] text-center mb-8">Tell us what you need — we&apos;ll get back to you with the best price.</p>
          {submitted ? (
            <div className="bg-[#10141F] border border-[#F59E0B]/20 rounded-2xl p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#F59E0B] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-[#94A3B8]">We&apos;ll contact you shortly. Or call us directly at 9393793293.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#10141F] border border-white/5 rounded-2xl p-8 space-y-4">
              <input type="text" placeholder="Your Name" required value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#05070C] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#F59E0B]/50" />
              <input type="tel" placeholder="Phone Number" required value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#05070C] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#F59E0B]/50" />
              <textarea placeholder="What part do you need? (Vehicle model & part name)" rows={3} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#05070C] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#F59E0B]/50 resize-none" />
              <button type="submit" disabled={sending}
                className="w-full bg-[#F59E0B] text-black font-bold py-4 rounded-xl hover:bg-[#D97706] transition-colors flex items-center justify-center gap-2">
                {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {sending ? "Sending..." : "Get Quote on WhatsApp"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-[#94A3B8] text-sm mb-2">Ujwala Motor Parts — Anantapur</p>
        <p className="text-[#94A3B8]/50 text-xs">Powered by NAGAARA — Performance Marketing</p>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Phone, MapPin, GraduationCap, ChefHat, Star, CheckCircle2, Send, MessageSquare, Loader2, Users, BookOpen, Award, Utensils } from "lucide-react";

const WHATSAPP_LINK = `https://wa.me/919618963121?text=${encodeURIComponent("Hi Culver Institute, I'm interested in hotel management courses. Please share details.")}`;

export default function CulverPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", course: "", message: "" });

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
          business: "Culver Institute - Landing Page Lead",
          service: formData.course || "Hotel Management Admission Inquiry",
          message: formData.message || "Landing page inquiry",
          source: "landing_page_culver",
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
      <div className="bg-[#D97706] text-black py-2 px-4 text-center text-sm font-semibold">
        <a href="tel:9618963121" className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4" />
          Admissions Open: Call 9618963121
        </a>
      </div>

      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D97706]/[0.03] rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/10 border border-[#D97706]/20 rounded-full px-4 py-1.5 mb-6">
            <ChefHat className="w-4 h-4 text-[#D97706]" />
            <span className="text-[#D97706] text-sm">Admissions Open 2025-26</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Culver Institute of
            <br />
            <span className="text-[#D97706]">Hotel Management</span>
          </h1>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-2">
            &amp; Catering Technology, Anantapur
          </p>
          <p className="text-[#94A3B8] text-base max-w-2xl mx-auto mb-8">
            Learn from Celebrity Chef Daniel Rakesh — one of India&apos;s finest culinary experts. Start your career in hospitality with hands-on training and industry-ready skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="bg-[#D97706] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#B45309] transition-colors flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Apply on WhatsApp
            </a>
            <a href="tel:9618963121"
              className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call: 9618963121
            </a>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-16 px-6 bg-[#10141F]/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/10 border border-[#D97706]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#D97706] text-sm font-medium">Your Mentor</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Learn from <span className="text-[#D97706]">Chef Daniel Rakesh</span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-8">
            Celebrity Chef Daniel Rakesh brings world-class culinary expertise to Anantapur. With experience in top hotels and restaurants, he personally mentors students at Culver Institute.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: "Celebrity Chef", desc: "Renowned culinary expert" },
              { icon: Utensils, label: "Hands-On Training", desc: "Real kitchen experience" },
              { icon: Users, label: "Small Batches", desc: "Personal attention" },
              { icon: GraduationCap, label: "Placement Support", desc: "Job-ready graduates" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <item.icon className="w-8 h-8 text-[#D97706]" />
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-[#94A3B8] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Courses We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: " Diploma in Hotel Management", duration: "1 Year", items: ["Front Office Operations", "Housekeeping Management", "Food & Beverage Service", "Basic Culinary Skills", "Industrial Training"] },
              { title: "B.Sc. in Hotel Management", duration: "3 Years", items: ["Advanced Culinary Arts", "Hotel Operations", "Hospitality Marketing", "Financial Management", "Internship Program"] },
              { title: "Catering Technology", duration: "2 Years", items: ["Mass Cooking & Production", "Catering Management", "Food Safety & Hygiene", "Event Planning", "Entrepreneurship"] },
            ].map((c) => (
              <div key={c.title} className="bg-[#10141F] border border-white/5 rounded-2xl p-6 hover:border-[#D97706]/20 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-[#D97706]" />
                  <span className="text-[#D97706] text-sm font-medium">{c.duration}</span>
                </div>
                <h3 className="text-lg font-bold mb-4">{c.title}</h3>
                <ul className="space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#94A3B8] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#10141F]/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "500+", label: "Students Placed" },
            { num: "50+", label: "Partner Hotels" },
            { num: "100%", label: "Placement Assistance" },
            { num: "15+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-[#D97706]">{s.num}</p>
              <p className="text-[#94A3B8] text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Apply Now</h2>
          <p className="text-[#94A3B8] text-center mb-8">Fill out the form — our admissions team will contact you within 24 hours.</p>
          {submitted ? (
            <div className="bg-[#10141F] border border-[#D97706]/20 rounded-2xl p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#D97706] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Application Received!</h3>
              <p className="text-[#94A3B8]">Our team will contact you shortly. Or call 9618963121.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#10141F] border border-white/5 rounded-2xl p-8 space-y-4">
              <input type="text" placeholder="Student / Parent Name" required value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#05070C] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#D97706]/50" />
              <input type="tel" placeholder="Phone Number" required value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#05070C] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#D97706]/50" />
              <select value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full bg-[#05070C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D97706]/50 appearance-none">
                <option value="" className="bg-[#10141F]">Select Course Interest</option>
                <option value="Diploma in Hotel Management" className="bg-[#10141F]">Diploma in Hotel Management (1 Year)</option>
                <option value="B.Sc. Hotel Management" className="bg-[#10141F]">B.Sc. in Hotel Management (3 Years)</option>
                <option value="Catering Technology" className="bg-[#10141F]">Catering Technology (2 Years)</option>
              </select>
              <textarea placeholder="Any questions? (Optional)" rows={2} value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#05070C] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#475569] focus:outline-none focus:border-[#D97706]/50 resize-none" />
              <button type="submit" disabled={sending}
                className="w-full bg-[#D97706] text-black font-bold py-4 rounded-xl hover:bg-[#B45309] transition-colors flex items-center justify-center gap-2">
                {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {sending ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-[#D97706]" />
          <p className="text-[#94A3B8] text-sm">Culver Institute of Hotel Management — Anantapur</p>
        </div>
        <p className="text-[#94A3B8]/50 text-xs">Powered by NAGAARA — Performance Marketing</p>
      </footer>
    </div>
  );
}

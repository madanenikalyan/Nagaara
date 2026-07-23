import {
  Megaphone,
  Globe,
  Layout,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Shield,
  Zap,
  Headphones,
  Settings,
  Phone,
  CheckCircle,
  ArrowRight,
  Eye,
  Brain,
  Handshake,
} from "lucide-react";

export const SITE_URL = "https://nagaara.com";
export const WHATSAPP_NUMBER = "9581184697";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nagaara%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call.`;
export const EMAIL = "nagaara14@gmail.com";
export const PHONE_DISPLAY = "+91 95811 84697";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Roots", href: "#roots" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Facebook & Instagram advertising that generates qualified leads and sales through precision targeting.",
    features: [
      "Lead Generation Campaigns",
      "Sales & Conversion Campaigns",
      "Retargeting & Remarketing",
      "Pixel Setup & Creative Testing",
    ],
  },
  {
    icon: Globe,
    title: "Google Ads",
    description:
      "Search, Display, and YouTube campaigns that capture high-intent customers ready to buy.",
    features: [
      "Search & Display Campaigns",
      "YouTube Advertising",
      "Performance Max Campaigns",
      "Keyword Research & Tracking",
    ],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High-converting, fast-loading pages designed to capture leads and drive measurable action.",
    features: [
      "High-Converting Design",
      "Lead Capture Forms",
      "Lightning Fast Loading",
      "Mobile Optimized",
    ],
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Data-driven campaigns focused on one thing — measurable business growth and ROI.",
    features: [
      "ROI-Focused Strategy",
      "A/B Testing & Optimization",
      "Multi-Channel Campaigns",
      "Real-Time Performance Tracking",
    ],
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Consistent pipeline of qualified leads that turn into paying customers for your business.",
    features: [
      "Multi-Platform Lead Capture",
      "Lead Scoring & Qualification",
      "Landing Page Funnels",
      "CRM Integration",
    ],
  },
  {
    icon: Settings,
    title: "CRM Automation",
    description:
      "Automated follow-ups, lead nurturing, and pipeline management that works while you sleep.",
    features: [
      "Automated Follow-Up Sequences",
      "WhatsApp Bot Integration",
      "Lead Nurturing Workflows",
      "Sales Pipeline Management",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Free Strategy Call",
    description:
      "We understand your business, goals, and challenges in a quick 15-minute call. No sales pitch — just honest advice.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Custom Growth Plan",
    description:
      "We create a tailored marketing strategy with clear KPIs, budget allocation, and expected outcomes.",
    icon: Target,
  },
  {
    number: 3,
    title: "Launch & Optimize",
    description:
      "We launch your campaigns, track every metric, and optimize daily to maximize your ROI.",
    icon: Zap,
  },
  {
    number: 4,
    title: "Scale & Grow",
    description:
      "Once we find what works, we scale aggressively to drive more leads and revenue for your business.",
    icon: TrendingUp,
  },
];

export const RESULTS = [
  { value: "5-10", suffix: "/day", label: "Quality Leads", icon: Users },
  { value: "40", suffix: "+", label: "Years of Trust", icon: Shield },
  { value: "100", suffix: "%", label: "Transparency", icon: Eye },
  { value: "24", suffix: "/7", label: "Support", icon: Headphones },
];

export const WHY_CHOOSE = [
  {
    icon: Brain,
    title: "Performance Focused",
    description:
      "We don't promise the moon. We promise measurable results — and then we deliver them.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "You see every rupee spent, every lead generated, every result delivered. No black boxes.",
  },
  {
    icon: Zap,
    title: "Speed Meets Strategy",
    description:
      "We move fast because your business can't wait. But we never sacrifice strategy for speed.",
  },
  {
    icon: Headphones,
    title: "Always Reachable",
    description:
      "Your dedicated strategist is one call away. A real person who knows your business.",
  },
];

export const FAQS = [
  {
    question: "Do Meta Ads work for local businesses?",
    answer:
      "Absolutely. Meta Ads are one of the most powerful tools for local businesses. With precise geo-targeting, interest-based audiences, and retargeting, we ensure your ads reach the right people in your area who are ready to buy.",
  },
  {
    question: "How much budget should I start with?",
    answer:
      "We recommend starting with a minimum monthly ad spend of ₹15,000–₹30,000. This gives us enough data to test, optimize, and deliver results. The exact budget depends on your industry and goals.",
  },
  {
    question: "How quickly will I get leads?",
    answer:
      "Most clients start seeing leads within the first 7 days of campaign launch. The first 2–4 weeks are used for testing and optimization. Consistent, quality leads usually stabilize within 60 days.",
  },
  {
    question: "Do you manage campaigns full-time?",
    answer:
      "Yes. We provide end-to-end campaign management — from strategy and setup to daily optimization and reporting. You focus on running your business; we focus on growing it.",
  },
  {
    question: "Can you create landing pages?",
    answer:
      "Yes. We build fast, mobile-optimized, high-converting landing pages specifically designed to capture leads and drive action. Every landing page is tested for maximum performance.",
  },
  {
    question: "What makes Nagaara different from other agencies?",
    answer:
      "Nagaara combines corporate marketing expertise from Dell with deep understanding of local business needs. We don't just run ads — we build systems that generate consistent leads and revenue.",
  },
];

export const SERVICES_FOR_FORM = [
  "Meta Ads",
  "Google Ads",
  "Landing Pages",
  "Performance Marketing",
  "Lead Generation",
  "CRM Automation",
  "Not Sure Yet",
];

export const TRUST_STATS = [
  { value: "5-10", suffix: "", label: "Leads/Day", icon: Users },
  { value: "40", suffix: "+", label: "Years Legacy", icon: Shield },
  { value: "100", suffix: "%", label: "Transparency", icon: Eye },
  { value: "24", suffix: "/7", label: "Support", icon: Headphones },
];

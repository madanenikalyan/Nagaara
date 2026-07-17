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
  Search,
  Rocket,
  LineChart,
  BarChart,
  Brain,
  Handshake,
  Lightbulb,
  Eye,
  Phone,
} from "lucide-react";

export const SITE_URL = "https://nagaara.com";
export const WHATSAPP_NUMBER = "9581184697";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Nagaara%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call.`;
export const EMAIL = "nagaara14@gmail.com";
export const PHONE_DISPLAY = "+91 95811 84697";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Legacy", href: "#legacy" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
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
  {
    icon: Target,
    title: "Conversion Tracking",
    description:
      "Every click, every lead, every sale — tracked and attributed so you know exactly what works.",
    features: [
      "Meta Pixel & CAPI Setup",
      "Google Tag Manager",
      "UTM Tracking & Attribution",
      "Custom Conversion Events",
    ],
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description:
      "Clear, actionable reports that show you exactly where your money goes and what it brings back.",
    features: [
      "Custom Dashboard Reporting",
      "Weekly Performance Reports",
      "Revenue Attribution",
      "Competitor Benchmarking",
    ],
  },
  {
    icon: Phone,
    title: "Local Business Marketing",
    description:
      "Hyper-local strategies designed for businesses that serve a specific area or community.",
    features: [
      "Google My Business Optimization",
      "Local SEO & Maps",
      "Geo-Targeted Ad Campaigns",
      "Local Review Management",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Understand Your Business",
    description:
      "We deep-dive into your goals, audience, challenges, and market position before spending a single rupee.",
    icon: Lightbulb,
  },
  {
    number: 2,
    title: "Research Your Audience",
    description:
      "Who are your customers? Where do they hang out online? What makes them click? We find out.",
    icon: Eye,
  },
  {
    number: 3,
    title: "Analyze Competitors",
    description:
      "We study what works in your industry, find gaps, and build strategies that set you apart.",
    icon: Search,
  },
  {
    number: 4,
    title: "Build Landing Page",
    description:
      "A fast, beautiful, high-converting page that turns visitors into leads and leads into customers.",
    icon: Layout,
  },
  {
    number: 5,
    title: "Set Up Campaigns",
    description:
      "Precision campaign setup across Meta, Google, or both — with tracking, pixels, and automation in place.",
    icon: Settings,
  },
  {
    number: 6,
    title: "Launch & Deliver",
    description:
      "Campaigns go live. Leads start flowing. Your phone starts ringing.",
    icon: Rocket,
  },
  {
    number: 7,
    title: "Optimize Daily",
    description:
      "We monitor, test, tweak, and improve every day — because great marketing is never static.",
    icon: LineChart,
  },
  {
    number: 8,
    title: "Scale Profitably",
    description:
      "When the numbers work, we pour fuel on the fire — scaling what works and cutting what doesn't.",
    icon: BarChart,
  },
];

export const RESULTS = [
  { value: 40, suffix: "+", label: "Years of Legacy", icon: TrendingUp },
  { value: 100, suffix: "%", label: "Dedication", icon: Target },
  { value: 24, suffix: "/7", label: "Support", icon: Headphones },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    business: "Kumar Enterprises",
    role: "Founder",
    text: "Nagaara helped us generate more leads in one month than we got in the previous six months. The team understands local business like no one else.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    business: "Sharma Healthcare",
    role: "Director",
    text: "The WhatsApp automation alone saved us hours every week. Our appointment bookings increased by 40% within the first month of working with Nagaara.",
    rating: 5,
  },
  {
    name: "Vikram Reddy",
    business: "Reddy Foods",
    role: "Owner",
    text: "Our weekend bookings went from empty tables to a waitlist. Kalyan and his team truly understand how to make local businesses grow.",
    rating: 5,
  },
];

export const WHY_CHOOSE = [
  {
    icon: Brain,
    title: "We Understand Both Worlds",
    description:
      "Traditional marketing reached streets. Digital marketing reaches the world. Nagaara understands both — and that's something no other agency can offer.",
  },
  {
    icon: Handshake,
    title: "Legacy of Trust",
    description:
      "40 years of helping businesses get heard didn't happen by accident. It happened because results talk. That same commitment drives every campaign we run today.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "You see every rupee spent, every lead generated, every result delivered. No black boxes. No vanity metrics. Just honest, measurable growth.",
  },
  {
    icon: Zap,
    title: "Speed Meets Strategy",
    description:
      "We move fast because your business can't wait. But we never sacrifice strategy for speed. Every decision is backed by data and intent.",
  },
  {
    icon: Target,
    title: "Performance Over Promises",
    description:
      "We don't promise the moon. We promise measurable results — and then we deliver them. That's why clients stay.",
  },
  {
    icon: Headphones,
    title: "Always Reachable",
    description:
      "Your dedicated strategist is one call away. Not a ticketing system. Not a chatbot. A real person who knows your business.",
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
      "Nagaara was born from a 40-year legacy of helping businesses get heard — starting with loudspeakers on the streets. We combine that deep understanding of local business with modern digital marketing expertise. No other agency has that foundation.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Currently we focus on businesses in India where our deep understanding of the local market gives us a significant edge. However, we're open to discussions for businesses targeting Indian audiences globally.",
  },
];

export const SERVICES_FOR_FORM = [
  "Meta Ads",
  "Google Ads",
  "Landing Pages",
  "Performance Marketing",
  "Lead Generation",
  "CRM Automation",
  "Conversion Tracking",
  "Marketing Analytics",
  "Local Business Marketing",
  "Not Sure Yet",
];

export const TRANSFORMATION_STEPS = [
  { label: "Loudspeaker", emoji: "📢" },
  { label: "Sound Waves", emoji: "🔊" },
  { label: "Pixels", emoji: "✨" },
  { label: "Facebook", emoji: "📘" },
  { label: "Instagram", emoji: "📸" },
  { label: "Google", emoji: "🔍" },
  { label: "Analytics", emoji: "📊" },
  { label: "Lead Gen", emoji: "🎯" },
  { label: "NAGAARA", emoji: "🚀" },
];

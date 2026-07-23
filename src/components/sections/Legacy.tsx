"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import TextReveal from "@/components/ui/TextReveal";

const TIMELINE_ITEMS = [
  {
    year: "1984",
    title: "The Beginning",
    description:
      "A young man with a vision and a loudspeaker fitted to a bicycle began traveling through towns and villages — helping local businesses announce their presence to the world.",
    accent: "📢",
  },
  {
    year: "1990s",
    title: "Thousands of Announcements",
    description:
      "Shop openings, cinema releases, festivals, political campaigns, community events — one voice carried them all. The loudspeaker became a symbol of trust.",
    accent: "🔊",
  },
  {
    year: "2000s",
    title: "Thousands of Businesses",
    description:
      "Business after business trusted one man to carry their message. From vegetable markets to textile shops, the announcements became a daily tradition in countless towns.",
    accent: "🏪",
  },
  {
    year: "2020s",
    title: "40 Years of Trust",
    description:
      "Four decades. Thousands of businesses. One unwavering mission — helping businesses get heard. The streets may have changed, but the purpose never did.",
    accent: "🤝",
  },
  {
    year: "Today",
    title: "Digital Transformation",
    description:
      "People scroll through feeds instead of standing on sidewalks. The medium changed. The mission never changed. NAGAARA is born.",
    accent: "💡",
  },
  {
    year: "Now",
    title: "NAGAARA",
    description:
      "From loudspeakers to algorithms. From streets to screens. NAGAARA continues a 40-year legacy of helping businesses grow — now through Meta Ads, Google Ads, and Performance Marketing.",
    accent: "🚀",
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof TIMELINE_ITEMS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -60 : 60, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className="relative flex items-start gap-8 md:gap-12"
    >
      <div className="flex-shrink-0 w-20 md:w-28">
        <div className="text-[#F59E0B] text-lg md:text-xl font-bold tracking-wider font-[family-name:var(--font-space-grotesk)]">
          {item.year}
        </div>
      </div>

      <div className="relative">
        <motion.div
          whileInView={{ scale: [0, 1.3, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -left-[21px] md:-left-[25px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#F59E0B] border-4 border-[#05070C] z-10"
        />
        <motion.div
          whileHover={{ x: 4 }}
          className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-[#F59E0B]/15 transition-all duration-500 group"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-lg">{item.accent}</span>
            <h3 className="text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] group-hover:text-[#F59E0B]/90 transition-colors">
              {item.title}
            </h3>
          </div>
          <p className="text-[#94A3B8] leading-relaxed text-sm md:text-base">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Legacy() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  return (
    <section id="legacy" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070C]" />
      
      {/* Legacy image as watermark background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          ref={photoRef}
          style={{ y: photoY, scale: photoScale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="/images/nagaraju-legacy.jpeg"
            alt="Legacy background"
            width={1200}
            height={800}
            className="w-full h-full object-cover opacity-[0.03]"
            style={{
              filter: "sepia(20%) contrast(1.2) brightness(0.8)",
            }}
          />
        </motion.div>
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070C] via-transparent to-[#05070C]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070C] via-transparent to-[#05070C]" />
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Our Roots"
          title="Where It All Began"
          description="Before NAGAARA, there was a man, a loudspeaker, and a mission to help businesses get heard. That 40-year legacy is the foundation everything is built on."
        />

        {/* Legacy caption */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-[#94A3B8] text-lg italic max-w-2xl mx-auto">
            &ldquo;The voice that once echoed through the streets now helps
            businesses grow online.&rdquo;
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 md:left-[103px] top-0 bottom-0 w-px bg-gradient-to-b from-[#F59E0B]/40 via-[#F59E0B]/20 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_ITEMS.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#F59E0B]/40" />
            <span className="text-[#F59E0B] text-sm font-medium tracking-wider uppercase">
              The NAGAARA Philosophy
            </span>
            <div className="h-px w-12 bg-[#F59E0B]/40" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />
    </section>
  );
}

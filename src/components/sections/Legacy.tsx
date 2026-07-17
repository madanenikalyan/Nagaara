"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const TIMELINE_ITEMS = [
  {
    year: "1984",
    title: "The Beginning",
    description:
      "A young man with a vision and a loudspeaker fitted to a bicycle began traveling through towns and villages — helping local businesses announce their presence to the world.",
  },
  {
    year: "1990s",
    title: "Thousands of Announcements",
    description:
      "Shop openings, cinema releases, festivals, political campaigns, community events — one voice carried them all. The loudspeaker became a symbol of trust.",
  },
  {
    year: "2000s",
    title: "Thousands of Businesses",
    description:
      "Business after business trusted one man to carry their message. From vegetable markets to textile shops, the announcements became a daily tradition in countless towns.",
  },
  {
    year: "2020s",
    title: "40 Years of Trust",
    description:
      "Four decades. Thousands of businesses. One unwavering mission — helping businesses get heard. The streets may have changed, but the purpose never did.",
  },
  {
    year: "Today",
    title: "Digital Transformation",
    description:
      "People scroll through feeds instead of standing on sidewalks. The medium changed. The mission never changed. NAGAARA is born.",
  },
  {
    year: "Now",
    title: "NAGAARA",
    description:
      "From loudspeakers to algorithms. From streets to screens. NAGAARA continues a 40-year legacy of helping businesses grow — now through Meta Ads, Google Ads, and Performance Marketing.",
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

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="relative flex items-start gap-8 md:gap-12"
    >
      <div className="flex-shrink-0 w-20 md:w-28">
        <div className="text-[#F59E0B] text-lg md:text-xl font-bold tracking-wider font-[family-name:var(--font-space-grotesk)]">
          {item.year}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-[21px] md:-left-[25px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#F59E0B] border-4 border-[#05070C] z-10" />
        <div className="bg-[#10141F]/60 border border-white/[0.06] rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-[#F59E0B]/15 transition-colors duration-500">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
            {item.title}
          </h3>
          <p className="text-[#94A3B8] leading-relaxed text-sm md:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Legacy() {
  return (
    <section id="legacy" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070C]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Our Legacy"
          title="The Story Behind NAGAARA"
          description="Every great business deserves to be heard. This belief drove one man for four decades — and now drives an entire agency."
        />

        {/* Premium photo showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex justify-center"
        >
          <div className="relative max-w-2xl w-full">
            <div className="absolute -inset-6 bg-[#F59E0B]/[0.04] rounded-3xl blur-3xl" />
            <div className="relative museum-frame rounded-2xl overflow-hidden bg-[#10141F]">
              <div className="relative p-4">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/images/nagaraju-legacy.jpeg"
                    alt="Nagaraju — 40 years of helping businesses get heard through public announcements"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{
                      filter:
                        "sepia(12%) contrast(1.08) brightness(1.03) saturate(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070C]/70 via-[#05070C]/10 to-[#05070C]/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#05070C]/20 to-transparent" />
                </div>
              </div>
              <div className="px-8 pb-6 pt-2">
                <p className="text-white/80 text-sm italic">
                  &ldquo;The voice that once echoed through the streets.&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="h-px flex-1 bg-[#F59E0B]/20" />
                  <span className="text-[#F59E0B]/60 text-xs tracking-wider uppercase">
                    est. 1984
                  </span>
                  <div className="h-px flex-1 bg-[#F59E0B]/20" />
                </div>
              </div>
            </div>
          </div>
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
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 italic max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-space-grotesk)]">
            &ldquo;The voice that once echoed through the streets now helps
            businesses grow online.&rdquo;
          </blockquote>
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

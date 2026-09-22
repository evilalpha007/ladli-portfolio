"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Video, TrendingUp, Languages, Mic, Award, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function AboutSection() {
  const languages = PORTFOLIO_DATA.personal.languages;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-editorial">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              About & Positioning
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#121214] leading-tight">
              Strategy meets <br />
              <span className="italic font-light text-gradient-editorial">on-camera charisma.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5A5A62] max-w-md font-light leading-relaxed">
            Based in Dubai, UAE — bridging luxury real estate storytelling, viral short-form production, and measurable community conversion.
          </p>
        </div>

        {/* Editorial Magazine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16">
          {/* Left Column: Editorial Photo with Production Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#121214]/10 bg-[#121214]">
              <Image
                src="/images/about-portrait.jpg"
                alt="Ladli Gaur filming on camera in Dubai penthouse"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Tag in photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4A373]">
                  <Mic className="w-3.5 h-3.5" />
                  <span>On-Camera Hosting & Directing</span>
                </div>
                <p className="text-xs text-[#FAF7F2]/80 font-light">
                  Filming luxury property walkthroughs & lifestyle features across Dubai.
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div className="absolute -bottom-5 -right-5 sm:-right-8 p-4 rounded-2xl bg-white text-[#121214] shadow-2xl border border-[#121214]/10 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C87548]/10 text-[#C87548] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#5A5A62]">
                  Track Record
                </p>
                <p className="text-sm font-semibold font-editorial">
                  4+ Years Growth
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: In-depth Story & Strategic Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#121214] font-normal leading-snug">
                &ldquo;I believe the best social content doesn’t look like an ad — it feels like an irresistible story you can’t help but watch to the end.&rdquo;
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#5A5A62] font-light leading-relaxed">
                <p>
                  As a <strong>Social Media Marketing Specialist & Content Creator</strong> with over 4 years of hands-on experience, I help luxury brands, real estate firms, and visionary founders transform passive scrollers into loyal communities and qualified clients.
                </p>
                <p>
                  I practice what I preach: having personally built and scaled my own personal brand to <strong>35K+ followers</strong> across Instagram, TikTok, and Facebook. This journey gave me real-time mastery over algorithm shifts, hook retention, and audience psychology.
                </p>
                <p>
                  Whether I am hosting on-camera walkthroughs for multi-million dollar Dubai penthouses or crafting data-driven SEO campaigns that drive <strong>50,000+ monthly visitors</strong>, my focus remains sharp: high production value paired with commercial ROI.
                </p>
              </div>
            </motion.div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#121214]/10 space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#C87548]/10 text-[#C87548] flex items-center justify-center">
                  <Video className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#121214]">
                  On-Camera Presence
                </h4>
                <p className="text-xs text-[#5A5A62] leading-relaxed">
                  Confident, natural delivery for property tours, interviews, and brand activations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#121214]/10 space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#D4A373]/15 text-[#B8834F] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#121214]">
                  Data & Organic Reach
                </h4>
                <p className="text-xs text-[#5A5A62] leading-relaxed">
                  SEO, keyword integration, and viral hook formulas that compound over time.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#121214]/10 space-y-2 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#121214]/5 text-[#121214] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-[#121214]">
                  End-to-End Speed
                </h4>
                <p className="text-xs text-[#5A5A62] leading-relaxed">
                  Rapid turnaround from script & shoot to CapCut post-production and posting.
                </p>
              </div>
            </div>

            {/* Languages Spoken (Multilingual Dubai Advantage) */}
            <div className="p-5 rounded-2xl bg-[#121214]/5 border border-[#121214]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#121214] font-semibold">
                <Languages className="w-4 h-4 text-[#C87548]" />
                <span>Multilingual Communication Advantage</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-0.5">
                    <p className="text-sm font-semibold text-[#121214]">{lang.name}</p>
                    <p className="text-[11px] text-[#5A5A62]">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

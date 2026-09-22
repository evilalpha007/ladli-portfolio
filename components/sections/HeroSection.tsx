"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Play } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  const [activeTaglineIndex, setActiveTaglineIndex] = useState(0);
  const taglines = PORTFOLIO_DATA.personal.taglineOptions;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Subtle Editorial Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Top Meta Line */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214]/5 border border-[#121214]/10 text-xs font-mono uppercase text-[#5A5A62]"
        >
          <span className="w-2 h-2 rounded-full bg-[#C87548] animate-pulse" />
          <span>Available for Brand Campaigns & Real Estate</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 text-xs font-mono uppercase text-[#5A5A62]"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#C87548]" />
            Dubai, United Arab Emirates
          </span>
          <span>•</span>
          <span className="text-[#121214] font-semibold">35K+ Community</span>
        </motion.div>
      </div>

      {/* Centerpiece: Typographic Headline & Split Hero Grid */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 lg:py-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Big Type & Interactive Hooks */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2 mb-3">
                <span className="font-mono text-[#D4A373]">[ 00 ]</span>
                Social Media Marketing Specialist & Content Creator
              </span>
              <h1 className="font-editorial text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-light text-[#121214] tracking-tight leading-[0.92]">
                Ladli <br />
                <span className="italic font-light text-gradient-editorial">Gaur</span>
              </h1>
            </motion.div>

            {/* Dynamic Tagline Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-3"
            >
              <p className="font-editorial text-xl sm:text-2xl md:text-3xl text-[#121214]/90 font-light italic leading-relaxed min-h-[4rem]">
                &ldquo;{taglines[activeTaglineIndex]}&rdquo;
              </p>

              {/* Client Tagline Option Switcher */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] font-mono text-[#5A5A62] uppercase tracking-wider mr-1">
                  Tagline Option:
                </span>
                {taglines.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTaglineIndex(idx)}
                    className={`w-7 h-7 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeTaglineIndex === idx
                        ? "bg-[#121214] text-white font-bold scale-110"
                        : "bg-[#121214]/5 text-[#5A5A62] hover:bg-[#121214]/15"
                    }`}
                    aria-label={`Select Tagline Option ${idx + 1}`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* CTAs and Direct Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton href="#portfolio">
                <div
                  className="px-7 py-3.5 rounded-full bg-[#121214] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:bg-[#C87548] transition-colors shadow-lg group"
                  data-cursor-interactive="true"
                >
                  <span>View My Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </MagneticButton>

              <MagneticButton href="#contact">
                <div
                  className="px-7 py-3.5 rounded-full border border-[#121214]/20 bg-white/60 backdrop-blur-md text-[#121214] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:border-[#121214] hover:bg-white transition-all shadow-sm group"
                  data-cursor-interactive="true"
                >
                  <span>Let&apos;s Collaborate</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </MagneticButton>

              <a
                href={PORTFOLIO_DATA.personal.instagramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#5A5A62] hover:text-[#C87548] ml-2 transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-[#C87548]" />
                <span>@ladligaur</span>
                <span className="text-[10px] opacity-70 group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Hero Image Card with Float Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#121214]/10 bg-[#FAF7F2]">
                <Image
                  src="/images/main-hero-image.png"
                  alt="Ladli Gaur — Social Media Specialist & Content Creator Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Bottom badge inside image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/40 shadow-lg text-[#121214]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#C87548] font-bold">
                        Specialization
                      </p>
                      <p className="text-sm font-editorial font-medium">
                        Luxury Real Estate & Lifestyle
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#121214] text-white flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -left-4 sm:-left-6 p-3.5 sm:p-4 rounded-2xl bg-[#121214] text-white shadow-xl border border-white/15 hidden sm:block"
              >
                <div className="font-editorial text-2xl sm:text-3xl font-light text-[#D4A373]">
                  35K+
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                  Followers Scaled
                </div>
              </motion.div>

              {/* Floating Stat Pill 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-1/3 -right-4 sm:-right-6 p-3.5 sm:p-4 rounded-2xl bg-[#FAF7F2] text-[#121214] shadow-xl border border-[#121214]/15 hidden sm:block"
              >
                <div className="font-editorial text-2xl sm:text-3xl font-light text-[#C87548]">
                  4+ Years
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#5A5A62]">
                  Growth & Production
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs text-[#5A5A62] font-mono pt-4 border-t border-editorial">
        <span>Scroll to explore portfolio</span>
        <a
          href="#about"
          className="flex items-center gap-2 hover:text-[#C87548] transition-colors"
          data-cursor-interactive="true"
        >
          <span>Discover Story</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

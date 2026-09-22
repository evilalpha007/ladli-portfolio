"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Video, ExternalLink, ShieldCheck, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const data = PORTFOLIO_DATA.videoShowcase;

  // Extract Instagram shortcode
  const getShortcode = (url: string) => {
    const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : "Dc008ottfKt";
  };

  const shortcode = getShortcode(data.reelUrl);

  return (
    <div className="w-full mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-editorial">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-wider sm:tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2">
              <Video className="w-4 h-4 shrink-0" />
              <span>Campaign Video Showcase</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#121214] leading-tight">
              {data.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A62] max-w-xl font-light leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-[#121214]/5 text-[#5A5A62] border border-[#121214]/10 whitespace-nowrap">
              Duration: {data.duration}
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-[#C87548]/10 text-[#C87548] border border-[#C87548]/20 whitespace-nowrap">
              {data.stats}
            </span>
          </div>
        </div>

        {/* Video Player & Embed Container */}
        <div className="relative min-h-[460px] sm:min-h-[440px] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#121214] border border-[#121214]/15 shadow-xl sm:shadow-2xl group flex flex-col justify-center">
          {!isPlaying ? (
            <>
              <Image
                src={data.videoPoster}
                alt={data.headline}
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30" />

              {/* Center Trigger Button & Overlay Content */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 sm:p-8 text-center my-auto">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#121214] flex items-center justify-center shadow-2xl backdrop-blur-md mb-4 group-hover:bg-[#C87548] group-hover:text-white transition-colors cursor-pointer"
                  aria-label="Play Campaign Video"
                  data-cursor-interactive="true"
                  data-cursor-text="Play"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </motion.button>

                <div className="space-y-2 max-w-lg">
                  <span className="text-xs uppercase tracking-widest text-[#D4A373] font-mono block">
                    {data.role}
                  </span>
                  <h4 className="font-editorial text-xl sm:text-2xl lg:text-3xl text-white font-light leading-snug px-2">
                    {data.headline}
                  </h4>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="relative z-10 mt-auto pb-4 px-6 flex items-center justify-between text-xs text-white/70 font-mono">
                <span className="truncate">Silver Oak Luxury Series</span>
                <span className="flex items-center gap-1.5 text-[#D4A373] shrink-0 ml-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> 4K Ultra HD
                </span>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full min-h-[580px] sm:min-h-[640px] flex flex-col items-center justify-center bg-[#0d0d0f] p-3 sm:p-6">
              {/* Player Top Controls */}
              <div className="w-full max-w-md flex items-center justify-between pb-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#FAF7F2]/90">
                  <InstagramIcon className="w-4 h-4 text-[#C87548]" />
                  <span className="font-semibold">Live Instagram Reel Playback</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={data.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-[#C87548] text-[#FAF7F2] transition-colors text-[11px]"
                  >
                    <span>Open in App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF7F2] transition-colors cursor-pointer"
                    aria-label="Close video player"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Embedded Live Instagram Player Frame */}
              <div className="w-full max-w-md h-[500px] sm:h-[560px] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl relative">
                <iframe
                  src={`https://www.instagram.com/reel/${shortcode}/embed`}
                  className="w-full h-full border-0"
                  allowTransparency={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={data.headline}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

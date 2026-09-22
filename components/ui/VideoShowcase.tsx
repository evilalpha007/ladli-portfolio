"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Video, ExternalLink, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const data = PORTFOLIO_DATA.videoShowcase;

  return (
    <div className="w-full mt-20 pt-16 border-t border-editorial">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2">
              <Video className="w-4 h-4" />
              Campaign Video Showcase
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#121214]">
              {data.title}
            </h3>
            <p className="text-sm text-[#5A5A62] max-w-xl font-light">
              {data.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#121214]/5 text-[#5A5A62] border border-[#121214]/10">
              Duration: {data.duration}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#C87548]/10 text-[#C87548] border border-[#C87548]/20">
              {data.stats}
            </span>
          </div>
        </div>

        {/* Video Player & Embed Container */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-[#121214] border border-[#121214]/15 shadow-2xl group">
          {/* 
            TODO: Client Instructions for Video / Twitter / X Embed:
            - If using Twitter/X Video: Replace container with Twitter Embed widget script or iframe.
            - If using YouTube/Vimeo: Insert <iframe> with video URL.
            - If using self-hosted MP4: Set src in <video> tag below.
          */}
          {!isPlaying ? (
            <>
              <Image
                src={data.videoPoster}
                alt={data.headline}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              {/* Center Trigger Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/90 text-[#121214] flex items-center justify-center shadow-2xl backdrop-blur-md mb-4 group-hover:bg-[#C87548] group-hover:text-white transition-colors cursor-pointer"
                  aria-label="Play Campaign Video"
                  data-cursor-interactive="true"
                  data-cursor-text="Play"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-1" />
                </motion.button>

                <div className="space-y-1 max-w-lg">
                  <span className="text-xs uppercase tracking-widest text-[#D4A373] font-mono">
                    {data.role}
                  </span>
                  <h4 className="font-editorial text-xl sm:text-2xl text-white font-light">
                    {data.headline}
                  </h4>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="absolute bottom-4 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-white/70 font-mono z-10">
                <span>Silver Oak Luxury Video Series</span>
                <span className="flex items-center gap-1.5 text-[#D4A373]">
                  <ShieldCheck className="w-3.5 h-3.5" /> High Production 4K
                </span>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {/* Fallback interactive HTML5 video demo & embed placeholder */}
              <div className="p-8 text-center text-white space-y-4 max-w-lg">
                <Play className="w-10 h-10 text-[#D4A373] mx-auto fill-current" />
                <h4 className="font-editorial text-2xl font-light">
                  {data.headline}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Direct video preview is active. Connect your live Twitter/X post URL or Vimeo/YouTube 4K link here.
                </p>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={PORTFOLIO_DATA.personal.instagramClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C87548] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A373] transition-colors"
                  >
                    <span>View on Silver Oak Channel</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="px-4 py-2 rounded-full bg-white/10 text-xs font-mono hover:bg-white/20 transition-colors"
                  >
                    Close Player
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Eye, Heart, Share2, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { ReelItem } from "@/lib/data";

interface MediaCardProps {
  reel: ReelItem;
  onSelect: (reel: ReelItem) => void;
  index: number;
}

export default function MediaCard({ reel, onSelect, index }: MediaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#17171C] text-white border border-white/10 shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-[#C87548]/50"
      onClick={() => onSelect(reel)}
      data-cursor-interactive="true"
      data-cursor-text="Preview"
    >
      {/* 9:16 Vertical Video Frame */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black/40">
        <Image
          src={reel.thumbnail}
          alt={reel.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/15 text-[#FAF7F2]">
            <InstagramIcon className="w-3 h-3 text-[#C87548]" />
            @{reel.sourceAccount}
          </span>

          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#C87548]/80 text-white backdrop-blur-sm">
            {reel.category.replace("-", " ")}
          </span>
        </div>

        {/* Center Animated Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-115 group-hover:bg-[#C87548]">
            <Play className="w-6 h-6 fill-white translate-x-0.5" />
          </div>
        </div>

        {/* Bottom Metadata inside image */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2 z-10">
          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 text-xs text-[#FAF7F2]/90 font-mono">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-[#D4A373]" />
              {reel.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-[#C87548]" />
              {reel.likes}
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5 text-white/70" />
              {reel.shares}
            </span>
          </div>

          <h3 className="font-editorial text-lg sm:text-xl font-light text-white line-clamp-2 leading-snug group-hover:text-[#D4A373] transition-colors">
            {reel.title}
          </h3>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-4 bg-[#17171C] border-t border-white/10 space-y-2">
        <p className="text-xs text-[#FAF7F2]/70 line-clamp-2 font-light">
          <span className="text-[#D4A373] font-medium">Hook:</span> &ldquo;{reel.hook}&rdquo;
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-1">
            {reel.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#FAF7F2]/60 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          <span className="text-xs text-[#D4A373] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Reel <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

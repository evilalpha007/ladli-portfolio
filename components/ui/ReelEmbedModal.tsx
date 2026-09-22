"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Eye,
  Heart,
  Share2,
  CheckCircle2,
  Play,
  RotateCcw
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { ReelItem } from "@/lib/data";

interface ReelEmbedModalProps {
  reel: ReelItem | null;
  onClose: () => void;
}

export default function ReelEmbedModal({ reel, onClose }: ReelEmbedModalProps) {
  const [embedMode, setEmbedMode] = useState<"preview" | "live">("preview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (reel) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setEmbedMode("preview");
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [reel, onClose]);

  if (!reel) return null;

  // Extract Instagram shortcode from URL (e.g. https://www.instagram.com/reel/Dc008ottfKt/ -> Dc008ottfKt)
  const getShortcode = (url: string) => {
    const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const shortcode = getShortcode(reel.sourceUrl);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl bg-[#17171C] text-white rounded-3xl border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C87548] transition-colors border border-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Reel Frame Showcase / Live Embed */}
          <div className="relative w-full md:w-5/12 bg-black flex flex-col items-center justify-center p-4 sm:p-6 border-b md:border-b-0 md:border-r border-white/10">
            {embedMode === "live" && shortcode ? (
              <div className="relative aspect-[9/16] w-full max-w-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
                <iframe
                  src={`https://www.instagram.com/reel/${shortcode}/embed/`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            ) : (
              <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <Image
                  src={reel.thumbnail}
                  alt={reel.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                {/* Account badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium uppercase bg-black/70 border border-white/20 text-white">
                    <InstagramIcon className="w-3 h-3 text-[#C87548]" />
                    @{reel.sourceAccount}
                  </span>
                </div>

                {/* Interactive Play Embed Button */}
                {shortcode && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setEmbedMode("live")}
                      className="w-16 h-16 rounded-full bg-[#C87548] text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-[#D4A373] transition-all cursor-pointer"
                      title="Play live Instagram reel"
                    >
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </button>
                  </div>
                )}

                {/* Bottom open link */}
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <a
                    href={reel.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-white text-[#121214] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A373] hover:text-white transition-colors shadow-lg"
                  >
                    <span>Open on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Toggle Embed Mode Button */}
            {shortcode && (
              <button
                onClick={() =>
                  setEmbedMode(embedMode === "preview" ? "live" : "preview")
                }
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#D4A373] hover:text-white transition-colors cursor-pointer font-mono"
              >
                <RotateCcw className="w-3 h-3" />
                <span>
                  {embedMode === "preview"
                    ? "Switch to Live Instagram Player"
                    : "Switch to Strategy View"}
                </span>
              </button>
            )}
          </div>

          {/* Right: Creative Breakdown & Strategy Notes */}
          <div className="w-full md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto no-scrollbar space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#C87548]/20 text-[#D4A373] border border-[#C87548]/30">
                  {reel.category.replace("-", " ")}
                </span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs text-white/60">Dubai, UAE</span>
              </div>

              <h2 className="font-editorial text-2xl sm:text-3xl font-light text-white leading-tight">
                {reel.title}
              </h2>

              {/* Performance metrics */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 font-mono text-center">
                <div>
                  <div className="text-xs text-white/50 flex items-center justify-center gap-1">
                    <Eye className="w-3 h-3 text-[#D4A373]" /> Views
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {reel.views}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/50 flex items-center justify-center gap-1">
                    <Heart className="w-3 h-3 text-[#C87548]" /> Likes
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {reel.likes}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-white/50 flex items-center justify-center gap-1">
                    <Share2 className="w-3 h-3 text-white/70" /> Shares
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {reel.shares}
                  </div>
                </div>
              </div>

              {/* Creative Hook & Strategy */}
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-[#C87548]/10 border border-[#C87548]/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D4A373]">
                    <span className="font-mono text-[#D4A373]">[ Concept ]</span>
                    Opening Hook & Theme
                  </div>
                  <p className="text-sm italic text-[#FAF7F2] font-editorial">
                    &ldquo;{reel.hook}&rdquo;
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                    Content Strategy & Execution
                  </h4>
                  <p className="text-sm text-[#FAF7F2]/80 font-light leading-relaxed">
                    {reel.description}
                  </p>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-2">
                    Key Execution Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#FAF7F2]/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C87548]" />
                      Authentic on-camera presence & relatable delivery
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C87548]" />
                      High-retention mobile framing & trending audio sync
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C87548]" />
                      High-converting call-to-action for sponsor/brand
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-white/40 font-mono">
                Source: {reel.sourceUrl}
              </span>
              <a
                href={reel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C87548] to-[#D4A373] text-white text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all shadow-md"
              >
                <span>Watch Reel on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

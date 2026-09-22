"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Play, Camera, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA, ReelItem, GalleryPhoto } from "@/lib/data";
import MediaCard from "@/components/ui/MediaCard";
import ReelEmbedModal from "@/components/ui/ReelEmbedModal";
import PhotoLightbox from "@/components/ui/PhotoLightbox";
import VideoShowcase from "@/components/ui/VideoShowcase";

type FilterType = "all" | "real-estate" | "personal-brand" | "lifestyle" | "photos";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const reels = PORTFOLIO_DATA.reels;
  const photos = PORTFOLIO_DATA.galleryPhotos;

  const filteredReels =
    activeFilter === "all"
      ? reels
      : activeFilter === "photos"
      ? []
      : reels.filter((r) => r.category === activeFilter);

  const showPhotos = activeFilter === "all" || activeFilter === "photos";

  const filterTabs: { label: string; value: FilterType; count: number }[] = [
    { label: "All Featured Work", value: "all", count: reels.length + photos.length },
    { label: "Real Estate Reels", value: "real-estate", count: reels.filter((r) => r.category === "real-estate").length },
    { label: "Personal Brand (35K+)", value: "personal-brand", count: reels.filter((r) => r.category === "personal-brand").length },
    { label: "Brand Campaigns", value: "lifestyle", count: reels.filter((r) => r.category === "lifestyle").length },
    { label: "Shoot Photos & Staging", value: "photos", count: photos.length },
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-editorial">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2">
              <span className="font-mono text-[#D4A373]">[ 02 ]</span>
              Selected Work & Reels
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#121214] leading-tight">
              Selected reels, tours <br />
              <span className="italic font-light text-gradient-editorial">& viral campaigns.</span>
            </h2>
          </div>

          {/* Featured Channels Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.instagramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#121214]/10 text-xs font-semibold text-[#121214] hover:border-[#C87548] hover:text-[#C87548] transition-colors shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#C87548]" />
              <span>@ladligaur (35K)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.instagramClient}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#121214]/10 text-xs font-semibold text-[#121214] hover:border-[#C87548] hover:text-[#C87548] transition-colors shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>@silveroakglobal.ae</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-8">
          <Filter className="w-4 h-4 text-[#5A5A62] mr-2 shrink-0 hidden sm:block" />
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.value
                  ? "bg-[#121214] text-white shadow-md"
                  : "bg-white text-[#5A5A62] border border-[#121214]/10 hover:border-[#121214]/30 hover:text-[#121214]"
              }`}
            >
              {tab.label}{" "}
              <span className="opacity-60 text-[10px] ml-1">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Reels Gallery Grid */}
        {filteredReels.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
            {filteredReels.map((reel, idx) => (
              <MediaCard
                key={reel.id}
                reel={reel}
                onSelect={(r) => setSelectedReel(r)}
                index={idx}
              />
            ))}
          </div>
        )}

        {/* Photo Gallery Grid (when tab active) */}
        {showPhotos && (
          <div className="mt-16 pt-12 border-t border-editorial">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C87548] font-semibold flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5" />
                  Staging & Production Stills
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#121214] font-light">
                  On-Location Photography
                </h3>
              </div>
              <span className="text-xs font-mono text-[#5A5A62]">
                Click photo to expand lightbox
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {photos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#121214] border border-[#121214]/10 shadow-md cursor-pointer"
                  data-cursor-interactive="true"
                  data-cursor-text="Zoom"
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-0.5">
                    <p className="text-[10px] font-mono uppercase text-[#D4A373]">
                      {photo.category}
                    </p>
                    <p className="text-xs font-editorial font-light truncate">
                      {photo.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Video Showcase Component (Twitter / 4K Video embed) */}
        <VideoShowcase />

        {/* Interactive Modals */}
        <ReelEmbedModal
          reel={selectedReel}
          onClose={() => setSelectedReel(null)}
        />

        <PhotoLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GalleryPhoto } from "@/lib/data";

interface PhotoLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

export default function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (photo) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-lg"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-4 text-center space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#D4A373] font-mono">
              {photo.category}
            </span>
            <h3 className="text-lg font-editorial font-light text-white">
              {photo.title}
            </h3>
            <p className="text-xs text-white/60 max-w-md">{photo.caption}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

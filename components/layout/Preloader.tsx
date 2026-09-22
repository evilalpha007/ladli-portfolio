"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if seen in this session
    const hasSeenIntro = sessionStorage.getItem("ladli_intro_seen");
    if (hasSeenIntro) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem("ladli_intro_seen", "true");
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    setIsLoading(false);
    sessionStorage.setItem("ladli_intro_seen", "true");
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-14 bg-[#121214] text-[#FAF7F2] select-none"
        >
          {/* Top Row: Location & Dubai Label */}
          <div className="flex justify-between items-center text-xs tracking-[0.25em] uppercase text-[#FAF7F2]/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C87548] animate-pulse" />
              Dubai, UAE — GST (UTC+4)
            </span>
            <button
              onClick={handleSkip}
              className="text-xs uppercase tracking-widest text-[#D4A373] hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-[#D4A373]"
            >
              Skip Intro ↗
            </button>
          </div>

          {/* Center: Editorial Reveal */}
          <div className="max-w-4xl my-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] mb-4"
            >
              Social Media Marketing Specialist & Content Creator
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] text-white"
            >
              Ladli Gaur
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[1px] bg-gradient-to-r from-[#C87548] via-[#D4A373] to-transparent my-6 origin-left"
            />
            <p className="text-sm md:text-base text-[#FAF7F2]/70 font-light italic font-editorial">
              Turning brands into stories, and stories into followers.
            </p>
          </div>

          {/* Bottom Row: Percentage & Progress Bar */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2]/50 font-mono">
                Curating Experience
              </span>
              <span className="font-editorial text-3xl md:text-4xl font-light text-[#D4A373]">
                {progress}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#C87548] to-[#D4A373]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { Users, Calendar, TrendingUp, Video } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function StatsSection() {
  const stats = PORTFOLIO_DATA.personal.stats;

  const statIcons = [Users, Calendar, TrendingUp, Video];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#0E0E11] text-[#FAF7F2] relative overflow-hidden border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#C87548]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-[#D4A373]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase text-[#D4A373]"
          >
            <span className="whitespace-nowrap shrink-0 text-[#FAF7F2]/60">[ 05 ]</span>
            <span>Key Metrics & Numbers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight"
          >
            Numbers that speak <br />
            <span className="italic font-light text-gradient-gold">for themselves.</span>
          </motion.h2>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="p-8 rounded-3xl bg-[#17171C]/90 backdrop-blur-md border border-white/10 hover:border-[#C87548]/40 transition-all duration-300 group flex flex-col justify-between space-y-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4A373] group-hover:bg-[#C87548] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                </div>

                <div className="space-y-2">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-editorial font-light text-white group-hover:text-[#D4A373] transition-colors">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-base font-semibold text-white/90">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#FAF7F2]/60 font-light leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

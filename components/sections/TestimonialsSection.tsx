"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function TestimonialsSection() {
  const testimonials = PORTFOLIO_DATA.testimonials;

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#0E0E11] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4A373] font-semibold flex items-center justify-center gap-2">
            <span className="font-mono text-[#FAF7F2]/60">[ 06 ]</span>
            Industry Endorsements
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light">
            Trusted by teams in Dubai.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#17171C] border border-white/10 flex flex-col justify-between space-y-6"
            >
              <Quote className="w-8 h-8 text-[#C87548]/80" />

              <p className="font-editorial text-lg sm:text-xl font-light italic text-[#FAF7F2]/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-[#D4A373] font-mono">
                  {t.role} — {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function ExperienceSection() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-editorial">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2">
              <span className="font-mono text-[#D4A373]">[ 04 ]</span>
              Career Journey & Impact
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#121214] leading-tight">
              Proven experience in <br />
              <span className="italic font-light text-gradient-editorial">Dubai&apos;s fast-paced market.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5A5A62] max-w-md font-light leading-relaxed">
            From scaling high-growth real estate brokerage pipelines to growing a 35,000+ personal brand network.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="mt-16 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#121214]/10 shadow-sm hover:shadow-xl hover:border-[#C87548]/40 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Period & Company */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#121214]/5 text-[#121214] border border-[#121214]/10">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#C87548]/10 text-[#C87548] border border-[#C87548]/20 font-semibold">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#121214] group-hover:text-[#C87548] transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-[#5A5A62]">
                      {exp.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#5A5A62] pt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C87548]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Key Metrics Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 pt-2">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#121214]/5"
                      >
                        <p className="text-[10px] uppercase font-mono text-[#5A5A62]">
                          {m.label}
                        </p>
                        <p className="text-xs font-semibold text-[#121214]">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Key Achievements & Execution Details */}
                <div className="lg:col-span-8 space-y-6 lg:pl-6 lg:border-l border-[#121214]/10">
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-wider text-[#5A5A62] font-semibold">
                      Key Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-3 text-sm text-[#5A5A62] font-light leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C87548] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-[#121214]/5 flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1 rounded-full bg-[#121214]/5 text-[#121214] font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

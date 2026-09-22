"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Clapperboard,
  Mic,
  Scissors,
  BarChart3,
  PenTool,
  Target,
  CalendarCheck,
  Bot,
  Zap,
  Layers
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Clapperboard,
  Mic,
  Scissors,
  BarChart3,
  Sparkles: Zap,
  PenTool,
  Target,
  CalendarCheck,
  Bot,
};

export default function SkillsSection() {
  const skillCategories = PORTFOLIO_DATA.skills;

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-editorial">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2">
              <span className="font-mono text-[#D4A373]">[ 03 ]</span>
              Core Competencies & Tooling
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#121214] leading-tight">
              A modern toolkit <br />
              <span className="italic font-light text-gradient-editorial">built for engagement.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5A5A62] max-w-md font-light leading-relaxed">
            Full-spectrum execution: from on-camera hosting and viral video editing to paid Meta funnels and generative AI workflows.
          </p>
        </div>

        {/* Dynamic Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-16">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Layers;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-7 rounded-3xl bg-white border border-[#121214]/10 shadow-sm hover:shadow-xl hover:border-[#C87548]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Category Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#121214]/5 text-[#121214] flex items-center justify-center group-hover:bg-[#C87548] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#5A5A62]">0{idx + 1}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-editorial text-xl font-medium text-[#121214] group-hover:text-[#C87548] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#5A5A62] font-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="pt-6 border-t border-[#121214]/5 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`text-xs px-3 py-1 rounded-full transition-colors ${
                          skill.highlight
                            ? "bg-[#C87548]/10 text-[#C87548] font-medium border border-[#C87548]/20"
                            : "bg-[#121214]/5 text-[#5A5A62] border border-[#121214]/5"
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI & Innovation Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#17171C] via-[#121214] to-[#201A18] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D4A373]">
              <span>[ AI & Strategy ]</span>
              Next-Gen Production Workflows
            </div>
            <h4 className="font-editorial text-2xl font-light">
              AI-Accelerated Content Engineering
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/70 max-w-xl font-light">
              Leveraging ChatGPT, Claude, Canva AI & CapCut AI to research viral trends 5x faster, generate hyper-targeted B-Roll concepts, and produce precision captioning.
            </p>
          </div>

          <a
            href="#portfolio"
            className="px-6 py-3 rounded-full bg-white text-[#121214] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A373] hover:text-white transition-colors shrink-0 shadow-md"
            data-cursor-interactive="true"
          >
            See Live Work ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}

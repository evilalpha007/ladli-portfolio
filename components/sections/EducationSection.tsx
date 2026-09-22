"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function EducationSection() {
  const education = PORTFOLIO_DATA.education;

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] border-t border-editorial">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C87548] font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Academic & Professional Credentials
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#121214]">
              Education & Certifications
            </h2>
          </div>

          <p className="text-sm text-[#5A5A62] max-w-md font-light">
            Formal foundations in communications and specialized digital marketing disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#121214]/10 shadow-sm hover:border-[#C87548]/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-[#121214]/5 text-[#5A5A62]">
                    {item.period}
                  </span>
                  <Award className="w-4 h-4 text-[#C87548]" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-editorial text-2xl font-light text-[#121214]">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#5A5A62]">
                    {item.institution} • {item.location}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#5A5A62] font-light leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#121214]/5 flex items-center gap-2 text-xs font-mono text-[#C87548]">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

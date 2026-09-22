"use client";

import { ArrowUp, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#121214] text-[#FAF7F2] pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C87548]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Big Name & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4A373] font-semibold flex items-center gap-2">
              <span className="font-mono text-[#FAF7F2]/60">[ Location ]</span>
              Dubai, United Arab Emirates
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              Ladli Gaur
            </h2>
            <p className="text-sm text-[#FAF7F2]/70 max-w-md font-light leading-relaxed">
              Social Media Marketing Specialist & Content Creator scaling brands through viral short-form storytelling and data-driven acquisition.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4A373] font-semibold">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#FAF7F2]/80">
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  About Story
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white hover:underline transition-colors">
                  Reels & Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white hover:underline transition-colors">
                  Capabilities & AI
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white hover:underline transition-colors">
                  Career Timeline
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors">
                  Collaborate
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect & Profiles */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#D4A373] font-semibold">
              Social Channels
            </h3>
            <ul className="space-y-2 text-sm text-[#FAF7F2]/80">
              <li>
                <a
                  href={PORTFOLIO_DATA.personal.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A373] flex items-center justify-between group transition-colors"
                >
                  <span>@ladligaur (35K+)</span>
                  <span className="text-xs opacity-60 group-hover:opacity-100">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.personal.instagramClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A373] flex items-center justify-between group transition-colors"
                >
                  <span>@silveroakglobal.ae</span>
                  <span className="text-xs opacity-60 group-hover:opacity-100">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A373] flex items-center justify-between group transition-colors"
                >
                  <span>WhatsApp Direct</span>
                  <span className="text-xs opacity-60 group-hover:opacity-100">↗</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="hover:text-[#D4A373] flex items-center justify-between group transition-colors"
                >
                  <span>Email Inquiries</span>
                  <span className="text-xs opacity-60 group-hover:opacity-100">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Ladli Gaur. All rights reserved.</span>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center gap-1 text-[11px] text-[#FAF7F2]/50">
            <span>Designed & Developed by</span>
            <a
              href="https://www.linkedin.com/in/dibakar-sharma-4054ba200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A373] hover:text-white font-medium underline underline-offset-4 decoration-[#D4A373]/40 hover:decoration-white transition-all inline-flex items-center gap-0.5"
            >
              <span>Dibakar Sharma</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span>Dubai, UAE</span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4A373] hover:text-white transition-colors cursor-pointer"
              data-cursor-interactive="true"
            >
              <span>Back to top</span>
              <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4A373] group-hover:-translate-y-0.5 transition-all">
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

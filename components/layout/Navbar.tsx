"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dubaiTime, setDubaiTime] = useState("");

  // Track scroll position for header glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update live Dubai time (GST: UTC+4)
  useEffect(() => {
    const updateTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat([], options);
        setDubaiTime(formatter.format(new Date()));
      } catch {
        setDubaiTime("Dubai GST");
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work & Reels", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 glass-header shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo & Status Badge */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            data-cursor-interactive="true"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-normal tracking-tight text-[#121214] group-hover:text-[#C87548] transition-colors">
              Ladli Gaur
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wider uppercase bg-[#121214]/5 border border-[#121214]/10 text-[#5A5A62]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C87548] animate-ping" />
              Dubai
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#5A5A62] hover:text-[#121214] transition-colors group"
                data-cursor-interactive="true"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C87548] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Dubai Time & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {dubaiTime && (
              <div className="text-xs text-[#5A5A62] font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C87548]" />
                <span>Dubai {dubaiTime}</span>
              </div>
            )}

            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121214] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider overflow-hidden group hover:bg-[#C87548] transition-colors duration-300 shadow-sm"
              data-cursor-interactive="true"
              data-cursor-text="Let's Talk"
            >
              <span>Let&apos;s Collaborate</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-full bg-[#121214] text-white text-xs font-medium uppercase tracking-wider"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#121214]/5 text-[#121214] hover:bg-[#121214]/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#FAF7F2] pt-28 pb-10 px-8 flex flex-col justify-between md:hidden border-b border-[#121214]/10 shadow-2xl"
          >
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C87548] font-semibold">
                Navigation
              </span>
              <ul className="space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-editorial text-3xl font-light text-[#121214] hover:text-[#C87548] transition-colors flex items-center justify-between"
                    >
                      {link.name}
                      <ArrowUpRight className="w-5 h-5 text-[#C87548]" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-[#121214]/10 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#5A5A62]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C87548]" />
                  Dubai, UAE
                </span>
                <span className="font-mono">{dubaiTime}</span>
              </div>
              <div className="flex gap-4 text-xs font-semibold text-[#121214]">
                <a
                  href={PORTFOLIO_DATA.personal.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C87548]"
                >
                  Instagram ↗
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.instagramClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C87548]"
                >
                  Silver Oak ↗
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C87548]"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

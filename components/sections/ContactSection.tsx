"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Real Estate Reel Series",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Real Estate Reel Series",
    "On-Camera Hosting & Walkthrough",
    "Brand Collaboration / Sponsored",
    "Social Media Strategy & Retainer",
    "Other Creative Project"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSuccess(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ["#C87548", "#D4A373", "#FAF7F2", "#E9C46A"],
        });
        setFormState({
          name: "",
          email: "",
          projectType: "Real Estate Reel Series",
          message: "",
        });
      } else {
        setErrorMessage("Something went wrong. Please email directly or try again.");
      }
    } catch {
      setErrorMessage("Network error. Please reach out directly via email or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121214]/5 border border-[#121214]/10 text-xs font-mono uppercase text-[#C87548]"
          >
            <span className="font-mono text-[#D4A373]">[ 07 ]</span>
            <span>Open for Q2/Q3 Collaborations & Campaigns</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-5xl sm:text-6xl lg:text-7xl font-light text-[#121214] tracking-tight leading-[0.95]"
          >
            Let&apos;s create something people{" "}
            <span className="italic font-light text-gradient-editorial">can&apos;t scroll past.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#5A5A62] font-light max-w-xl mx-auto"
          >
            Available for luxury real estate content creation, on-camera video hosting, organic growth consulting, and brand ambassadorships in Dubai and worldwide.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#121214]/10 shadow-sm space-y-6">
              <h3 className="font-editorial text-2xl font-light text-[#121214]">
                Direct Contacts
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#C87548]/10 text-[#121214] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#C87548] flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] font-mono text-[#5A5A62] uppercase">
                      Email Inquiries
                    </p>
                    <p className="text-sm font-semibold truncate group-hover:text-[#C87548] transition-colors">
                      {PORTFOLIO_DATA.personal.email}
                    </p>
                  </div>
                </a>

                {/* Phone & WhatsApp */}
                <a
                  href={PORTFOLIO_DATA.personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF7F2] hover:bg-[#C87548]/10 text-[#121214] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-[#C87548] flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[#5A5A62] uppercase">
                      Phone & WhatsApp
                    </p>
                    <p className="text-sm font-semibold group-hover:text-[#C87548] transition-colors">
                      {PORTFOLIO_DATA.personal.phoneDisplay}
                    </p>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-[#121214]/10 space-y-3">
                <p className="text-xs uppercase tracking-wider text-[#5A5A62] font-semibold">
                  Featured Channels
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PORTFOLIO_DATA.personal.instagramPersonal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#121214]/5 text-xs font-semibold flex items-center justify-between hover:text-[#C87548] transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <InstagramIcon className="w-3.5 h-3.5 text-[#C87548]" />
                      @ladligaur
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.instagramClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#FAF7F2] border border-[#121214]/5 text-xs font-semibold flex items-center justify-between hover:text-[#C87548] transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <InstagramIcon className="w-3.5 h-3.5 text-[#D4A373]" />
                      Silver Oak
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Response Guarantee Card */}
            <div className="p-6 rounded-3xl bg-[#121214] text-white shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#C87548]/20 text-[#D4A373] flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold">Fast Response Guarantee</h4>
                <p className="text-xs text-[#FAF7F2]/70 font-light">
                  Direct responses typically within 4 business hours (Dubai GST timezone).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#121214]/10 shadow-sm relative">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C87548]/10 text-[#C87548] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl font-light text-[#121214]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#5A5A62] max-w-md mx-auto">
                    Thank you for reaching out! Ladli will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-[#121214] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#C87548] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 
                    TODO: Client Options for Form:
                    1. Connected to /api/contact by default (Next.js serverless route).
                    2. To use Formspree, add action="https://formspree.io/f/YOUR_FORM_ID" method="POST".
                  */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs uppercase tracking-wider text-[#5A5A62] font-semibold"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#121214]/10 focus:border-[#C87548] focus:bg-white focus:outline-none text-sm transition-all text-[#121214]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-wider text-[#5A5A62] font-semibold"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#121214]/10 focus:border-[#C87548] focus:bg-white focus:outline-none text-sm transition-all text-[#121214]"
                      />
                    </div>
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-xs uppercase tracking-wider text-[#5A5A62] font-semibold"
                    >
                      Project Interest
                    </label>
                    <select
                      id="projectType"
                      value={formState.projectType}
                      onChange={(e) =>
                        setFormState({ ...formState, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#121214]/10 focus:border-[#C87548] focus:bg-white focus:outline-none text-sm transition-all text-[#121214] cursor-pointer"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt}>
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs uppercase tracking-wider text-[#5A5A62] font-semibold"
                    >
                      Project Details & Timeline *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your brand, campaign goals, target timeline, or property details..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#121214]/10 focus:border-[#C87548] focus:bg-white focus:outline-none text-sm transition-all text-[#121214] resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-xs text-red-500">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#121214] text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#C87548] transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
                    data-cursor-interactive="true"
                    data-cursor-text="Send"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

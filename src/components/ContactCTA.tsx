"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface ContactCTAProps {
  variant?: "inline" | "prominent";
  accentColor?: string;
}

export function ContactCTA({ variant = "inline", accentColor = "lime-primary" }: ContactCTAProps) {
  const { t } = useLanguage();

  const isLime = accentColor === "lime-primary";
  const isAmber = accentColor === "amber-500";

  const buttonBg = isLime
    ? "bg-lime-primary hover:bg-[#b4f04b]"
    : isAmber
    ? "bg-amber-500 hover:bg-amber-400"
    : "bg-lime-primary hover:bg-[#b4f04b]";

  const glowColor = isLime
    ? "rgba(163,230,53,0.15)"
    : isAmber
    ? "rgba(245,158,11,0.15)"
    : "rgba(163,230,53,0.15)";

  const borderAccent = isLime
    ? "border-lime-primary/20"
    : isAmber
    ? "border-amber-500/20"
    : "border-lime-primary/20";

  if (variant === "prominent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto px-4 py-12 relative z-10"
      >
        <div
          className={`relative rounded-2xl border ${borderAccent} bg-[#0a0a0a] p-10 md:p-14 flex flex-col items-center text-center overflow-hidden`}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            <div
              className="w-[300px] h-[300px] rounded-full blur-[120px] opacity-30"
              style={{ backgroundColor: glowColor.replace("0.15", "1") }}
            />
          </div>

          <div className="relative z-10 space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {t.cta.prominent.title}
            </h3>
            <p className="text-text-body text-sm md:text-base max-w-lg mx-auto">
              {t.cta.prominent.subtitle}
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 ${buttonBg} text-black font-bold px-8 py-3.5 rounded-full transition-all text-sm md:text-base shadow-lg hover:scale-105`}
            >
              <MessageCircle className="w-4 h-4" />
              {t.cta.prominent.button}
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  // variant === "inline"
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-5xl mx-auto px-4 pt-8 pb-4 relative z-10"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 py-6 px-6 md:px-8 rounded-xl border border-white/5 bg-white/[0.02]">
        <div className="text-center sm:text-left">
          <h4 className={`text-base md:text-lg font-bold text-white`}>
            {t.cta.inline.title}
          </h4>
          <p className="text-text-muted text-xs md:text-sm mt-1">
            {t.cta.inline.subtitle}
          </p>
        </div>
        <a
          href="#contact"
          className={`shrink-0 inline-flex items-center gap-2 ${buttonBg} text-black font-semibold px-6 py-2.5 rounded-md transition-all text-sm hover:scale-105`}
        >
          {t.cta.inline.button}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

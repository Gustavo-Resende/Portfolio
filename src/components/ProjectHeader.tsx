"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

interface ProjectHeaderProps {
  projectName: string;
  accentColor?: "lime-primary" | "amber-500" | "purple-500" | "blue-500";
  sections: { name: string; href: string }[];
}

const headerColorMap = {
  "lime-primary": {
    text: "text-lime-primary",
    bg: "bg-lime-primary",
    hoverBorder: "hover:border-lime-primary/50",
  },
  "amber-500": {
    text: "text-amber-500",
    bg: "bg-amber-500",
    hoverBorder: "hover:border-amber-500/50",
  },
  "purple-500": {
    text: "text-purple-500",
    bg: "bg-purple-500",
    hoverBorder: "hover:border-purple-500/50",
  },
  "blue-500": {
    text: "text-blue-500",
    bg: "bg-blue-500",
    hoverBorder: "hover:border-blue-500/50",
  },
};

export function ProjectHeader({ projectName, accentColor = "lime-primary", sections }: ProjectHeaderProps) {
  const { language, t, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const colors = headerColorMap[accentColor];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        isScrolled ? "bg-background-primary/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Back + Project Name */}
        <div className="flex items-center gap-4">
          <Link href="/#projects" className="text-text-muted hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-lg font-bold tracking-tight text-white">
            {projectName}<span className={colors.text}>.</span>
          </span>
        </div>

        {/* Desktop Nav — Section anchors */}
        <nav className="hidden md:flex gap-5 items-center">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              onClick={(e) => handleScroll(e, section.href)}
              className="text-xs font-medium text-text-body hover:text-white transition-colors uppercase tracking-wider"
            >
              {section.name}
            </a>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="flex items-center gap-3">
          <span className={`text-xs font-semibold flex items-center gap-1 ${language === 'pt' ? 'text-white' : 'text-text-muted'}`}>
            <span className="text-sm leading-none">🇧🇷</span> PT
          </span>

          <button
            onClick={toggleLanguage}
            className={`relative w-12 h-6 rounded-full bg-dark-bg border border-white/10 flex items-center p-1 cursor-pointer transition-colors ${colors.hoverBorder}`}
            aria-label="Toggle Language"
          >
            <motion.div
              className={`w-4 h-4 rounded-full ${colors.bg} shadow-sm`}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              initial={false}
              animate={{
                x: language === "en" ? 22 : 0,
              }}
            />
          </button>

          <span className={`text-xs font-semibold flex items-center gap-1 ${language === 'en' ? 'text-white' : 'text-text-muted'}`}>
            EN <span className="text-sm leading-none">🇺🇸</span>
          </span>

          <a
            href="/#contact"
            className={`hidden sm:flex items-center gap-2 ml-4 ${colors.bg} hover:opacity-90 text-black text-xs font-bold py-2 px-4 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t.hero.contactMe}
          </a>
        </div>
      </div>
    </motion.header>
  );
}

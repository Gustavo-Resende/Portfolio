"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function Header() {
  const { language, t, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: t.header.home, href: "#hero" },
    { name: t.header.projects, href: "#projects" },
    { name: t.header.skills, href: "#skills" },
    { name: t.header.about, href: "#about" },
    { name: t.header.testimonials, href: "#testimonials" },
    { name: t.header.contact, href: "#contact" },
  ];

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
        isScrolled ? "bg-background-primary/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="text-xl font-bold tracking-tight text-white hover:text-lime-primary transition-colors">
          GR<span className="text-lime-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-text-body hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Language Toggle (iOS Style) */}
        <div className="flex items-center gap-3">
          <span className={`text-xs font-semibold flex items-center gap-1 ${language === 'pt' ? 'text-white' : 'text-text-muted'}`}>
            <span className="text-sm leading-none">🇧🇷</span> PT
          </span>

          <button
            onClick={toggleLanguage}
            className="relative w-12 h-6 rounded-full bg-dark-bg border border-white/10 flex items-center p-1 cursor-pointer transition-colors hover:border-lime-primary/50"
            aria-label="Toggle Language"
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-lime-primary shadow-sm"
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
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="hidden sm:flex items-center gap-2 ml-4 bg-lime-primary hover:bg-[#b4f04b] text-black text-xs font-bold py-2 px-4 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t.hero.contactMe}
          </a>
        </div>
      </div>
    </motion.header>
  );
}

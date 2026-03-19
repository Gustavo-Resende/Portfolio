"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, PanelsTopLeft } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center justify-center pt-32 pb-16 text-center space-y-6 relative z-10 px-4 min-h-[85vh]" id="hero">
      {/* Local Background Effects for Hero to maintain the 'esverdeado' color requested, but isolated to the hero */}
      <div className="absolute inset-0 pointer-events-none z-[-1] flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#A3E635] rounded-full blur-[150px] opacity-[0.25]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-[95vw] md:max-w-5xl lg:max-w-6xl mx-auto flex flex-col items-center"
      >
        <div className="flex flex-col items-center justify-center gap-6 mb-6 w-full">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-lime-primary/30 p-[3px] overflow-hidden relative shadow-[0_0_20px_rgba(163,230,53,0.15)] bg-black/50">
              <Image
                src="/avatar.jpg"
                alt="Gustavo Resende"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight flex flex-col items-center text-center gap-2">
            <span className="text-white tracking-tight flex items-center justify-center gap-2 lg:whitespace-nowrap">
              {t.hero.greeting} <span className="text-3xl lg:text-4xl"></span>
            </span>
            <span className="text-lime-primary drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">
              {t.hero.role}
            </span>
          </h1>
        </div>

        <p
          className="text-sm md:text-base lg:text-lg text-text-body font-medium max-w-2xl mx-auto leading-relaxed text-center"
          dangerouslySetInnerHTML={{ __html: t.hero.description }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-6 pt-10 w-full"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-white flex items-center justify-center py-3.5 sm:py-2.5 px-8 sm:px-6 gap-2 rounded-lg transition-all text-base sm:text-sm font-semibold"
          >
            {t.hero.contactMe}
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-white flex items-center justify-center py-3.5 sm:py-2.5 px-8 sm:px-6 gap-2 rounded-lg transition-all text-base sm:text-sm font-semibold"
          >
            <PanelsTopLeft className="w-5 h-5 sm:w-4 sm:h-4" />
            {t.hero.viewProjects}
          </a>
        </div>

        <div className="hidden sm:block w-px h-5 bg-white/20"></div>
        <div className="flex sm:hidden w-16 h-px bg-white/10 my-2"></div>

        <div className="flex items-center justify-center gap-8 sm:gap-5 text-white/60">
          <a href="https://github.com/Gustavo-Resende" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github className="w-7 h-7 sm:w-5 sm:h-5" />
          </a>
          <a href="https://www.linkedin.com/in/guresendec" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-7 h-7 sm:w-5 sm:h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

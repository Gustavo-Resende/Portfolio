"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="py-10 lg:py-16 relative z-10 w-full max-w-5xl mx-auto px-4" id="about">
      <div className="mb-8 lg:mb-12 flex flex-col items-center text-center">
        <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">
          {t.about.eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.about.title}</h2>
        <div className="h-1 w-20 bg-lime-primary mt-4 rounded-full"></div>
      </div>

      <div className="glass-card p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-primary/5 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-text-body leading-relaxed md:text-lg"
        >
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </motion.div>
      </div>
    </section>
  );
}

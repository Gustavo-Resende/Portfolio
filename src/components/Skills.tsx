"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Server, Code2, Layers } from "lucide-react";
import { ContactCTA } from "./ContactCTA";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-16 relative z-10 w-full max-w-6xl mx-auto px-4" id="skills">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">
          {t.skills.eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.skills.title}</h2>
        <div className="h-1 w-20 bg-lime-primary mt-4 mb-4 rounded-full"></div>
        <p className="text-text-body text-base max-w-2xl">{t.skills.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: What I can do */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[#080808] border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center text-lime-primary">
               <Code2 className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white">{t.skills.whatICanDo.title}</h3>
          </div>
          <p className="text-text-body text-sm mb-8 leading-relaxed">
            {t.skills.whatICanDo.description}
          </p>
          <ul className="space-y-4">
            {t.skills.whatICanDo.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium font-semibold">
                <span className="text-white text-lg leading-none mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Card 2: Tools I Use */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="bg-[#080808] border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center text-lime-primary">
               <Layers className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white">{t.skills.toolsIUse.title}</h3>
          </div>
          <p className="text-text-body text-sm mb-8 leading-relaxed">
            {t.skills.toolsIUse.description}
          </p>
          <ul className="space-y-5">
            <li className="flex flex-col gap-1 text-sm">
               <span className="text-white font-bold flex items-center gap-2">• Backend:</span>
               <span className="text-gray-400 pl-4">{t.skills.toolsIUse.backend}</span>
            </li>
            <li className="flex flex-col gap-1 text-sm">
               <span className="text-white font-bold flex items-center gap-2">• Database:</span>
               <span className="text-gray-400 pl-4">{t.skills.toolsIUse.database}</span>
            </li>
            <li className="flex flex-col gap-1 text-sm">
               <span className="text-white font-bold flex items-center gap-2">• DevOps:</span>
               <span className="text-gray-400 pl-4">{t.skills.toolsIUse.devops}</span>
            </li>
            <li className="flex flex-col gap-1 text-sm">
               <span className="text-white font-bold flex items-center gap-2">• Frontend:</span>
               <span className="text-gray-400 pl-4">{t.skills.toolsIUse.frontend}</span>
            </li>
          </ul>
        </motion.div>

        {/* Card 3: Architecture */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-[#080808] border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center text-lime-primary">
               <Server className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold text-white">{t.skills.architecture.title}</h3>
          </div>
          <p className="text-text-body text-sm mb-8 leading-relaxed">
            {t.skills.architecture.description}
          </p>
          <ul className="space-y-4">
            {t.skills.architecture.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-medium font-semibold">
                <span className="text-white text-lg leading-none mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      <ContactCTA variant="inline" />
    </section>
  );
}

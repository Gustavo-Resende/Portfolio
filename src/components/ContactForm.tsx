"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert(t.contact.successMessage);
    }, 1500);
  };

  return (
    <section className="py-16 relative z-10 w-full max-w-5xl mx-auto px-4" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-2xl border border-lime-primary/20 bg-[#0a0a0a] overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[150px] opacity-20 bg-[rgba(163,230,53,1)]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
          {/* Left — CTA Text */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              {t.contact.eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
              {t.cta.prominent.title}
            </h2>
            <p className="text-text-body text-sm md:text-base leading-relaxed max-w-md">
              {t.cta.prominent.subtitle}
            </p>
          </div>

          {/* Right — Form */}
          <div className="p-8 md:p-12 lg:p-14 lg:border-l border-t lg:border-t-0 border-white/5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  id="name"
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors text-sm"
                />
                <input
                  type="email"
                  id="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors text-sm"
                />
                <input
                  type="text"
                  id="budget"
                  placeholder={t.contact.budgetPlaceholder}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors text-sm"
                />
              </div>

              <textarea
                id="message"
                required
                rows={4}
                placeholder={t.contact.messagePlaceholder}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary/50 transition-colors resize-none text-sm"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-lime-primary hover:bg-[#b4f04b] text-black font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-[1.02] text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                {isSubmitting ? t.contact.submittingText : t.contact.submitText}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

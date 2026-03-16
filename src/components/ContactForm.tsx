"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(t.contact.successMessage);
    }, 1500);
  };

  return (
    <section className="py-24 relative z-10 w-full max-w-3xl mx-auto px-4" id="contact">
      <div className="mb-12 text-center">
        <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">
          {t.contact.eyebrow}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text-heading">{t.contact.title}</h2>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="space-y-6 bg-[#18181B] border border-white/5 p-8 md:p-10 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <input
              type="text"
              id="name"
              required
              placeholder={t.contact.namePlaceholder}
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary transition-colors text-sm"
            />
          </div>
          <div className="space-y-2">
            <input
              type="email"
              id="email"
              required
              placeholder={t.contact.emailPlaceholder}
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary transition-colors text-sm"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <input
              type="text"
              id="subject"
              required
              placeholder={t.contact.subjectPlaceholder}
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary transition-colors text-sm"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              id="budget"
              placeholder={t.contact.budgetPlaceholder}
              className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary transition-colors text-sm"
            />
          </div>
        </div>

        <div className="space-y-2">
          <textarea
            id="message"
            required
            rows={5}
            placeholder={t.contact.messagePlaceholder}
            className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-text-body placeholder:text-text-muted focus:outline-none focus:border-lime-primary transition-colors resize-none text-sm"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-lime-primary hover:bg-[#b4f04b] text-black font-semibold py-3 px-8 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4 w-auto inline-block"
        >
          {isSubmitting ? t.contact.submittingText : t.contact.submitText}
        </button>
      </motion.form>
    </section>
  );
}

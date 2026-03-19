"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: ""
  });

  const handleWhatsAppClick = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "5573999648137";
    const text = language === 'pt'
      ? `Olá Gustavo! Meu nome é ${formData.name}. Gostaria de falar sobre: ${formData.subject}. \n\n${formData.message}`
      : `Hello Gustavo! My name is ${formData.name}. I'd like to talk about: ${formData.subject}. \n\n${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section className="py-16 lg:py-24 relative z-10 w-full max-w-6xl mx-auto px-4" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl border border-white/5 bg-[#0a0a0a] overflow-hidden shadow-2xl"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-20 w-[400px] h-[400px] rounded-full blur-[150px] opacity-10 bg-[rgba(37,211,102,1)]" />
          <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full blur-[120px] opacity-10 bg-lime-primary" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
          {/* Left — copy & disponibilidade (alinhado ao topo com o formulário) */}
          <div className="flex flex-col justify-start p-10 md:p-14 lg:p-16 bg-gradient-to-br from-white/[0.02] to-transparent min-h-0">
            <div className="max-w-md border-l-2 border-lime-primary/35 pl-5 md:pl-6">
              <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-3 block">
                {t.contact.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white tracking-tight leading-[1.15] mb-5">
                {t.contact.inviteTitle}
              </h2>
              <p className="text-text-body text-base md:text-[1.05rem] leading-relaxed text-white/80 mb-8">
                {t.contact.inviteBody}
              </p>
            </div>

            <div className="mt-auto pt-6 lg:pt-8 border-t border-white/[0.06] lg:border-t-0 lg:border-none">
              <div className="flex items-center gap-3 text-white/45 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-primary/90 shadow-[0_0_10px_rgba(163,230,53,0.45)]" />
                <span>{t.contact.availabilityText}</span>
              </div>
            </div>
          </div>

          {/* Right — Interactive Conversion Form */}
          <div className="p-10 md:p-14 lg:p-16 border-t lg:border-t-0 lg:border-l border-white/5 bg-white/[0.01]">
            <form onSubmit={handleWhatsAppClick} className="space-y-6">
              <div className="space-y-4">
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-text-body placeholder:text-text-muted transition-all focus:outline-none focus:border-[#25D366]/50 focus:bg-white/[0.04] text-base"
                  />
                  <div className="absolute inset-0 rounded-xl bg-[#25D366] opacity-0 group-focus-within:opacity-[0.03] pointer-events-none transition-opacity" />
                </div>

                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-text-body placeholder:text-text-muted transition-all focus:outline-none focus:border-[#25D366]/50 focus:bg-white/[0.04] text-base"
                />

                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-text-body placeholder:text-text-muted transition-all focus:outline-none focus:border-[#25D366]/50 focus:bg-white/[0.04] resize-none text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-lime-primary hover:bg-[#b4f04b] text-black font-bold py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:scale-[1.03] active:scale-[0.98] text-base sm:text-lg"
              >
                <MessageCircle className="w-6 h-6" />
                {t.contact.submitText}
              </button>

              <p className="text-center text-xs text-text-muted opacity-60">
                {language === 'pt'
                  ? 'Redirecionamento seguro para a API do WhatsApp.'
                  : 'Safe redirection to the WhatsApp API.'}
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

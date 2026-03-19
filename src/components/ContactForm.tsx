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
          {/* Left — Visual & Social Proof */}
          <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#25D366]/20">
              <svg viewBox="0 0 24 24" className="w-9 h-9 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-4 block">
              {t.contact.eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              {language === 'pt' ? 'Vamos criar algo incrível' : "Let's build something amazing"} <span className="text-lime-primary text-5xl">.</span>
            </h2>
            <p className="text-text-body text-base md:text-lg leading-relaxed max-w-md mb-8">
              {language === 'pt'
                ? 'Precisa de uma API robusta ou um sistema completo? Fale comigo agora pelo WhatsApp respondo rápido e já começamos a alinhar os detalhes.'
                : "Need a robust API or a full system? Talk to me now on WhatsApp – I respond fast and we can start aligning the details."}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>{language === 'pt' ? 'Disponível para novos projetos' : 'Available for new projects'}</span>
              </div>
            </div>
          </div>

          {/* Right — Interactive Conversion Form */}
          <div className="p-10 md:p-16 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/5 bg-white/[0.01]">
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
                className="w-full inline-flex items-center justify-center gap-3 bg-lime-primary hover:bg-[#b4f04b] text-black font-extrabold py-5 rounded-xl transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] hover:scale-[1.03] active:scale-[0.98] text-lg uppercase tracking-wider"
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

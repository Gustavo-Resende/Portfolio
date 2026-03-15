"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const testimonials = [
  {
    name: "Alexandre Freitas",
    role: "Tech Lead",
    content: "O Gustavo é um excelente engenheiro. Sua aplicação de Clean Architecture nos nossos projetos .NET elevou exponencialmente a manutenibilidade do código. Profissional focado e que sempre entrega com extrema qualidade.",
    avatar: "/avatar.jpg" // using the same placeholder since we only have one image, can be changed later
  },
  {
    name: "Mariana Silva",
    role: "Product Manager",
    content: "Ter o Gustavo na equipe significa tranquilidade. Ele compreende muito bem os requisitos de negócio (graças a sua skill em DDD) e traduz isso em soluções técnicas rápidas e escaláveis.",
    avatar: "/avatar.jpg"
  },
  {
    name: "Carlos Eduardo",
    role: "Empreendedor",
    content: "A automação que ele criou com o BotFatura salvou dezenas de horas de trabalho manual na minha empresa por mês. Serviço incrível, entregre muito rápido.",
    avatar: "/avatar.jpg"
  }
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative z-10 w-full max-w-5xl mx-auto px-4" id="testimonials">
      <div className="mb-16 text-center">
        <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">
          {t.testimonials.eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.testimonials.title}</h2>
      </div>

      <div className="flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:pb-8 md:grid md:grid-cols-3 gap-6 hide-scrollbar">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="max-md:snap-center max-md:shrink-0 max-md:w-[85vw] bg-[#18181B] rounded-2xl p-8 flex flex-col relative group"
          >
            <Quote className="w-12 h-12 text-lime-primary mb-6" fill="currentColor" />
            
            <p className="text-text-body text-sm flex-grow mb-8 leading-relaxed">
              {testimonial.content}
            </p>
            
            <div className="mt-auto flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative border border-white/10">
                <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                <span className="text-xs text-text-muted">{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

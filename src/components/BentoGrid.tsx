"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Download } from "lucide-react";

const bentoItems = [
  {
    id: "education",
    title: "Educação",
    icon: <GraduationCap className="w-6 h-6 text-lime-primary" />,
    className: "md:col-span-1 md:row-span-1",
    content: (
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-text-heading">ADS</h3>
        <p className="text-text-muted text-sm mt-1">Análise e Desenvolvimento de Sistemas</p>
      </div>
    ),
  },
  {
    id: "experience",
    title: "Experiência",
    icon: <Briefcase className="w-6 h-6 text-lime-primary" />,
    className: "md:col-span-2 md:row-span-1",
    content: (
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-text-heading">Freelancer Full-Stack</h3>
          <p className="text-text-muted text-sm mt-1">Projetos: Frigg, Muninn, Sleipnir</p>
        </div>
      </div>
    ),
  },
  {
    id: "skills",
    title: "Skills Técnicas",
    icon: <Code2 className="w-6 h-6 text-lime-primary" />,
    className: "md:col-span-2 md:row-span-1",
    content: (
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold text-text-heading mb-2">Backend</h4>
          <div className="flex flex-wrap gap-2">
            {["C#", ".NET", "WebAPI", "CQRS", "DDD", "Clean Arch"].map((skill) => (
              <span key={skill} className="px-2 py-1 bg-dark-bg text-text-body text-xs outline outline-1 outline-dark-border rounded-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-text-heading mb-2">Automation</h4>
          <div className="flex flex-wrap gap-2">
            {["n8n", "PowerShell"].map((skill) => (
              <span key={skill} className="px-2 py-1 bg-dark-bg text-text-body text-xs outline outline-1 outline-dark-border rounded-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "resume",
    title: "Resume",
    icon: <Download className="w-6 h-6 text-lime-primary" />,
    className: "md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-center",
    content: (
      <div className="mt-6 flex flex-col items-center">
        <p className="text-text-muted text-sm mb-4">Baixe meu currículo completo</p>
        <a 
          href="#" 
          className="bg-lime-primary hover:bg-lime-hover text-black font-semibold py-2 px-6 rounded-btn transition-colors"
        >
          Download CV
        </a>
      </div>
    ),
  },
];

export function BentoGrid() {
  return (
    <section className="py-16 relative z-10 w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {bentoItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card p-6 flex flex-col ${item.className}`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-dark-bg/50 rounded-lg">{item.icon}</div>
              <h2 className="text-xl font-bold text-text-heading">{item.title}</h2>
            </div>
            {item.content}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const projects = [
  {
    title: "Sleipnir",
    description: "Motor de logística de alta performance com DDD, Rastreamento em tempo real e .NET 9.",
    tags: [".NET 9", "DDD", "PostgreSQL"],
    live: "/projects/sleipnir",
    category: "net"
  },
  {
    title: "Muninn",
    description: "Template arquitetural robusto para microsserviços e sistemas escaláveis em .NET.",
    tags: [".NET 9", "Clean Arch", "Serilog"],
    live: "/projects/muninn",
    category: "net"
  },
  {
    title: "Frigg",
    description: "Sistema de gestão imobiliária complexo com automações e integrações de API.",
    tags: ["React", "Cloud Code", "System Design"],
    live: "/projects/frigg",
    category: "react"
  },
  {
    title: "BotFatura",
    description: "Automação completa de faturas e cobranças via WhatsApp integrado ao ecossistema Frigg.",
    tags: ["WhatsApp API", "Automation", ".NET"],
    live: "/projects/bot-fatura",
    category: "net"
  },
  {
    title: "Resumax",
    description: "Plataforma inteligente de resumos de conteúdos impulsionada por IA (Em Desenvolvimento).",
    tags: ["AI", "OpenAI", "Next.js"],
    live: "/projects/resumax",
    category: "react"
  }
];

export function ProjectCard() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: t.projects.filters.all },
    { id: "net", label: t.projects.filters.net },
    { id: "react", label: t.projects.filters.react },
    { id: "sql", label: t.projects.filters.sql },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section className="py-16 relative z-10 w-full max-w-5xl mx-auto px-4" id="projects">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">
          {t.projects.eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.projects.title}</h2>
        <div className="h-1 w-20 bg-lime-primary mt-4 rounded-full"></div>
        
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                activeFilter === filter.id
                  ? "bg-lime-primary text-black border border-lime-primary"
                  : "bg-transparent text-text-body border border-white/20 hover:border-white/40 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 hide-scrollbar">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="max-md:snap-center max-md:shrink-0 max-md:w-[85vw] glass-card overflow-hidden flex flex-col h-full bg-[#18181B] border-white/10 rounded-2xl border"
          >
            {/* Image placeholder */}
            <div className="w-full aspect-video bg-[#222] border-b border-white/5 p-4 flex items-center justify-center">
               <span className="text-text-muted font-mono">{project.title} Preview</span>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-text-body text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 text-gray-300 font-semibold text-xs rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <a href={project.live} className="flex-1 flex items-center justify-center gap-2 py-3 bg-lime-primary text-black hover:bg-lime-primary/90 rounded-lg transition-colors text-sm font-bold">
                  <ExternalLink className="w-4 h-4" /> {t.projects.live}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const projects: {
  title: string;
  descriptionKey: "sleipnir" | "muninn" | "frigg" | "botfatura" | "resumax";
  tags: string[];
  live: string;
  category: string;
  image: string;
  imagePosition?: string;
}[] = [
  {
    title: "Sleipnir",
    descriptionKey: "sleipnir" as const,
    tags: [".NET", "PostgreSQL", "Logistics API"],
    live: "/projects/sleipnir",
    category: "net",
    image: "/images/projects/sleipnir/screenshot3.png"
  },
  {
    title: "Muninn",
    descriptionKey: "muninn" as const,
    tags: [".NET", "Next.js", "Meta Ads"],
    live: "/projects/muninn",
    category: "net",
    image: "/images/projects/muninn/screenshot1.png"
  },
  {
    title: "Frigg",
    descriptionKey: "frigg" as const,
    tags: [".NET", "React", "WhatsApp Integration"],
    live: "/projects/frigg",
    category: "react",
    image: "/images/projects/frigg/frigg-cover.png",
    imagePosition: "left top"
  },
  {
    title: "BotFatura",
    descriptionKey: "botfatura" as const,
    tags: [".NET", "WhatsApp Integration", "ERP Integration"],
    live: "/projects/bot-fatura",
    category: "net",
    image: "/images/projects/bot-fatura/botfatura-cover.png",
    imagePosition: "left top"
  },
  {
    title: "Resumax",
    descriptionKey: "resumax" as const,
    tags: [".NET", "AI", "AI Integration"],
    live: "/projects/resumax",
    category: "react",
    image: "/images/projects/resumax/screenshot1.png"
  }
];

export function ProjectCard() {
  const { t } = useLanguage();
  return (
    <section className="py-10 lg:py-16 relative z-10 w-full max-w-5xl mx-auto px-4" id="projects">
      <div className="mb-8 lg:mb-12 flex flex-col items-center text-center">
        <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">
          {t.projects.eyebrow}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.projects.title}</h2>
        <div className="h-1 w-20 bg-lime-primary mt-4 rounded-full"></div>
      </div>

      <div className="flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:pb-8 md:flex-wrap md:justify-center gap-6 hide-scrollbar">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="max-md:snap-center max-md:shrink-0 max-md:w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] glass-card overflow-hidden flex flex-col bg-[#18181B] border-white/10 rounded-2xl border"
          >
            {/* Image placeholder or real image */}
            <div className="w-full aspect-video bg-[#222] border-b border-white/5 relative overflow-hidden flex items-center justify-center">
              {project.image ? (
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    objectPosition: project.imagePosition ?? "center",
                  }}
                />
              ) : (
                <span className="text-text-muted font-mono">{project.title} Preview</span>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-text-body text-sm mb-4 flex-grow">{t.projects.descriptions[project.descriptionKey as keyof typeof t.projects.descriptions]}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string) => (
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

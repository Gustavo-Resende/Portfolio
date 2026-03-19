"use client";

import { motion } from "framer-motion";
import { Layers, Server, Globe, Cpu, Database, MessageSquare, Mail, Zap, Bot, FileText, Layout } from "lucide-react";

interface TechItem {
  name: string;
  description: string;
  type: string;
}

const getIcon = (type: string) => {
  const t = type.toLowerCase();
  if (t === "backend") return <Server className="w-5 h-5" />;
  if (t === "frontend") return <Layout className="w-5 h-5" />;
  if (t === "database") return <Database className="w-5 h-5" />;
  if (t === "ai") return <Bot className="w-5 h-5" />;
  if (t === "integration") return <Cpu className="w-5 h-5" />;
  if (t === "messaging") return <MessageSquare className="w-5 h-5" />;
  if (t === "email") return <Mail className="w-5 h-5" />;
  if (t === "queuing") return <Zap className="w-5 h-5" />;
  if (t === "infrastructure") return <Globe className="w-5 h-5" />;
  if (t === "format" || t === "output") return <FileText className="w-5 h-5" />;
  return <Layers className="w-5 h-5" />;
};

interface TechStackProps {
  title: string;
  description: string;
  items: TechItem[];
  accentColor?: "lime" | "amber" | "purple" | "blue" | "cyan";
}

const colorMap = {
  lime: {
    text: "text-lime-primary",
    bg: "bg-lime-primary/10",
    bgMuted: "bg-lime-primary/5",
    border: "border-lime-primary/30",
    glow: "rgba(163, 230, 53, 0.05)",
    shadow: "shadow-[0_0_30px_rgba(163,230,53,0.05)]",
  },
  amber: {
    text: "text-amber-500",
    bg: "bg-amber-500/10",
    bgMuted: "bg-amber-500/5",
    border: "border-amber-500/30",
    glow: "rgba(245, 158, 11, 0.05)",
    shadow: "shadow-[0_0_30px_rgba(245,158,11,0.05)]",
  },
  purple: {
    text: "text-purple-500",
    bg: "bg-purple-500/10",
    bgMuted: "bg-purple-500/5",
    border: "border-purple-500/30",
    glow: "rgba(168, 85, 247, 0.05)",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.05)]",
  },
  blue: {
    text: "text-blue-500",
    bg: "bg-blue-500/10",
    bgMuted: "bg-blue-500/5",
    border: "border-blue-500/30",
    glow: "rgba(59, 130, 246, 0.05)",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.05)]",
  },
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-400/10",
    bgMuted: "bg-cyan-400/5",
    border: "border-cyan-400/30",
    glow: "rgba(34, 211, 238, 0.05)",
    shadow: "shadow-[0_0_30px_rgba(34,211,238,0.05)]",
  },
};

export function TechStack({ title, description, items, accentColor = "lime" }: TechStackProps) {
  const theme = colorMap[accentColor];

  return (
    <section className="py-24 px-4 relative overflow-hidden z-10 box-border">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${theme.bgMuted} rounded-full blur-[120px]`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className={`${theme.text} text-xs font-bold tracking-widest uppercase block mb-2`}>Stack</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: accentColor === 'lime' ? 'rgba(163, 230, 53, 0.3)' :
                                       accentColor === 'amber' ? 'rgba(245, 158, 11, 0.3)' :
                                       accentColor === 'purple' ? 'rgba(168, 85, 247, 0.3)' :
                                       accentColor === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(34, 211, 238, 0.3)',
                           boxShadow: `0 0 30px ${theme.glow}` }}
              className="group p-6 bg-[#111111]/80 backdrop-blur-md border border-white/5 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 shrink-0 rounded-xl ${theme.bg} flex items-center justify-center ${theme.text} group-hover:scale-110 transition-transform`}>
                  {getIcon(item.type)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 text-white/40 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

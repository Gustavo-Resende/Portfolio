"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Globe,
  Cpu,
  Database,
  MessageSquare,
  Mail,
  Zap,
  Bot,
  FileText,
  Layout,
  Github,
  Shield,
  Telescope,
  Inbox,
  HardDrive,
  RefreshCw,
  Link2,
} from "lucide-react";

interface TechItem {
  name: string;
  description: string;
  type: string;
}

/** Baleia + contêineres no estilo Docker (SVG próprio, stroke alinhado ao Lucide). */
function DockerMarkIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="3" width="4" height="4" rx="0.5" />
      <rect x="8.5" y="3" width="4" height="4" rx="0.5" />
      <rect x="14" y="3" width="4" height="4" rx="0.5" />
      <rect x="3" y="8.5" width="4" height="4" rx="0.5" />
      <rect x="8.5" y="8.5" width="4" height="4" rx="0.5" />
      <path d="M2 17h15.5c0 2.5-2 4.5-4.5 4.5H6.5C4 21.5 2 19.5 2 17z" />
      <path d="M17.5 17V14c1.5 0 2.5 1 2.5 2.5v0.5c0 1-0.8 1.8-1.8 1.8h-0.7" />
      <circle cx="19.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const getIcon = (type: string) => {
  const t = type.toLowerCase();
  if (t === "backend") return <Server className="w-5 h-5" />;
  if (t === "frontend") return <Layout className="w-5 h-5" />;
  if (t === "database") return <Database className="w-5 h-5" />;
  if (t === "ai") return <Bot className="w-5 h-5" />;
  if (t === "architecture") return <Layers className="w-5 h-5" />;
  if (t === "integration") return <Cpu className="w-5 h-5" />;
  if (t === "messaging") return <MessageSquare className="w-5 h-5" />;
  if (t === "email") return <Mail className="w-5 h-5" />;
  if (t === "queuing") return <Zap className="w-5 h-5" />;
  if (t === "infrastructure") return <Globe className="w-5 h-5" />;
  if (t === "format" || t === "output") return <FileText className="w-5 h-5" />;
  return <Layers className="w-5 h-5" />;
};

/** Ícones específicos por tecnologia (nome do card), com fallback por `type`. */
function getIconForItem(item: TechItem) {
  const n = item.name.trim().toLowerCase();

  if (n.includes("github")) {
    return <Github className="w-5 h-5" />;
  }
  if (n.includes("docker")) {
    return <DockerMarkIcon className="w-5 h-5" />;
  }
  if (n.includes("aspire")) {
    return <Telescope className="w-5 h-5" />;
  }
  if (n.includes("outbox")) {
    return <Inbox className="w-5 h-5" />;
  }
  if (n.includes("sqs")) {
    return <Zap className="w-5 h-5" />;
  }
  if (n.includes("s3")) {
    return <HardDrive className="w-5 h-5" />;
  }
  if (n.includes("minimal api")) {
    return <Zap className="w-5 h-5" />;
  }
  if (n.includes("carter")) {
    return <Link2 className="w-5 h-5" />;
  }
  if (n.includes("clean architecture")) {
    return <Layers className="w-5 h-5" />;
  }
  if (n.includes("openai")) {
    return <Bot className="w-5 h-5" />;
  }
  if (n.includes("whatsapp") || n.includes("evolution")) {
    return <MessageSquare className="w-5 h-5" />;
  }
  if (n.includes("polly")) {
    return <RefreshCw className="w-5 h-5" />;
  }
  if (n.includes("clicksign")) {
    return <FileText className="w-5 h-5" />;
  }
  if (n === "jwt" || n.includes("jwt")) {
    return <Shield className="w-5 h-5" />;
  }
  if (n.startsWith(".net") && !n.includes("aspire")) {
    return <Cpu className="w-5 h-5" />;
  }

  return getIcon(item.type);
}

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
                  {getIconForItem(item)}
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

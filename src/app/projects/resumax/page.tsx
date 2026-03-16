"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Calendar, Code2, Briefcase, Target, Lightbulb, AlertTriangle, Zap, Server, Activity, TrendingUp, ChevronLeft, ChevronRight, Layout, Database, Shield, Brain, Sparkles, FileText, Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { BackToTop } from "@/components/BackToTop";

export default function ResumaxPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30 selection:text-amber-500">
      <Header />

      {/* 1. HERO SECTION (Z-Layout 50/50) */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 relative z-10"
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-white/50 hover:text-amber-500 transition-colors group mb-4"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-mono tracking-widest uppercase">Voltar ao Portfólio</span>
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-widest uppercase">
                    AI-Driven NLP Platform
                 </span>
                 <motion.span 
                    animate={{ opacity: [1, 0.5, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-bold tracking-widest uppercase"
                 >
                    Em Desenvolvimento
                 </motion.span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
                Resumax <br />
                <span className="text-amber-500">AI Engine.</span>
              </h1>
            </div>

            <p className="text-text-body text-xl font-light leading-relaxed max-w-xl">
              A próxima geração do recrutamento técnico. O Resumax utiliza inteligência artificial avançada para analisar, destilar e adaptar currículos para vagas específicas, otimizando o match entre talento e oportunidade.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <Brain className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-mono tracking-tight text-white/80">LLM Processing</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-mono tracking-tight text-white/80">NLP Adaptation</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <Search className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-mono tracking-tight text-white/80">Candidate Matching</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(245,158,11,0.1)] bg-[#0A0A0A] group flex items-center justify-center"
          >
             <div className="flex flex-col items-center gap-4 text-white/5 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-current flex items-center justify-center">
                  <Brain className="w-8 h-8" />
               </div>
               <span className="text-xs font-mono tracking-widest uppercase">In-Development Preview</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. CONTEXTO & STATUS (Bento Grid) */}
      <section className="py-24 px-4 relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-2 p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                 <AlertTriangle className="w-8 h-8 text-amber-500" />
                 <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
              </div>
              <h3 className="text-3xl font-bold">O Problema</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                Currículos genéricos não performam bem em vagas específicas. Candidatos excepcionais são filtrados por sistemas automáticos (ATS) apenas por não utilizarem as palavras-chave ou a estrutura correta para cada empresa.
              </p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-2xl bg-amber-500 flex flex-col justify-between shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          >
            <div className="space-y-4">
               <Target className="w-8 h-8 text-black mb-4" />
               <h3 className="text-3xl font-bold text-black">Objetivo</h3>
               <p className="text-black/80 font-medium text-lg leading-relaxed">
                 Criar uma ponte inteligente entre currículos e descrições de vagas, utilizando IA para destacar as experiências mais relevantes de forma ética e eficiente.
               </p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 group"
          >
             <Zap className="w-8 h-8 text-amber-500 mb-4" />
             <h3 className="text-2xl font-bold mb-4">Core Vision</h3>
             <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Extração de Skills via NLP.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Reescrita semântica otimizada.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" /> Exportação em PDF templated.</li>
             </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. FUNCIONALIDADES CORE (Zig-Zag) */}
      <section className="py-24 px-4 relative z-10 w-full bg-[#050505]/50 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-32">
          
          <div className="text-center mb-16">
             <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2 block">AI Architecture</span>
             <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">O Motor de Adaptação</h2>
             <div className="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Feature 1: Semantic Entities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
               <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-amber-500 pl-3">Domínio & Identidade</span>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                 Modelagem <span className="text-amber-500">{`{ Content Root }`}</span>
               </h2>
               <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                 O Resumax modela o currículo como um Agregado de Domínio rico, permitindo que a IA manipule seções específicas sem perder a integridade dos dados originais do candidato.
               </p>
               <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                 <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> Entidade Resume com proteção de estado.</li>
                 <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> Categorização semântica de SkillSets.</li>
               </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[16/10] order-1 lg:order-2">
               <CodeCarousel 
                 snippets={[
                   {
                     title: "Resume Aggregate Root",
                     code: `public class Resume : BaseEntity
{
    public ContactInfo Contact { get; private set; }
    public string ProfessionalSummary { get; private set; }
    public SkillSet Skills { get; private set; }

    public static Resume Create(
        ContactInfo contact, 
        string professionalSummary, 
        SkillSet skills)
    {
        ArgumentNullException.ThrowIfNull(contact);
        return new Resume {
            Contact = contact,
            ProfessionalSummary = professionalSummary,
            Skills = skills
        };
    }
}`
                   }
                 ]}
               />
            </div>
          </div>

          {/* Feature 2: Gemini Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full aspect-square md:aspect-[16/10] order-1 lg:order-1">
               <CodeCarousel 
                 color="amber"
                 snippets={[
                   {
                     title: "Gemini Adaptation Service",
                     code: `public async Task<string> AdaptResumeAsync(Resume resume, string jobDescription)
{
    var prompt = _promptBuilder
        .WithResumeContext(resume)
        .WithJobDescription(jobDescription)
        .Build();

    var result = await _geminiClient.GenerateTextAsync(prompt);
    return result.ExtractedSummary;
}`
                   }
                 ]}
               />
            </div>
            <div className="space-y-6 order-2 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
               <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-amber-500 pl-3">Inteligência Gerativa</span>
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                 Refinamento via <span className="text-amber-500">{`{ LLM }`}</span>
               </h2>
               <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                 Utilizando o Google Gemini, o Resumax analisa o contexto da vaga e sugere ajustes no resumo profissional e nos bullet-points de experiência, aumentando a aderência semântica.
               </p>
               <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                 <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> Prompt Engineering especializado.</li>
                 <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> Processamento assíncrono de IA.</li>
               </ul>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#050505] border-t border-white/5 py-12 px-4 relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            <span className="text-white/40 text-sm font-mono tracking-tighter">&copy; 2026 Resende Lab</span>
          </div>
          <div className="flex gap-8">
             <Link href="/#projects" className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Todos os Projetos</Link>
             <Link href="/#contact" className="text-lime-primary hover:text-lime-primary/80 transition-colors text-xs font-bold uppercase tracking-widest">Trabalhe Comigo</Link>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-extrabold text-xl tracking-tighter">GR Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#projects" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">Portfólio</Link>
          <Link href="/#contact" className="px-5 py-2.5 bg-amber-500 text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-amber-500/90 transition-all">Contato</Link>
        </div>
      </div>
    </nav>
  );
}

function CodeCarousel({ snippets, color = "amber" }: { snippets: { title: string; code: string }[], color?: "lime" | "amber" }) {
  const [index, setIndex] = useState(0);
  
  const next = () => setIndex((prev) => (prev + 1) % snippets.length);
  const prev = () => setIndex((prev) => (prev - 1 + snippets.length) % snippets.length);

  const colorClass = color === "lime" ? "text-lime-primary" : "text-amber-500";

  return (
    <div className="w-full h-full glass-card rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md overflow-hidden flex flex-col shadow-2xl group/card">
      <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/40" />
          <div className="w-3 h-3 rounded-full bg-amber-500/40" />
          <div className="w-3 h-3 rounded-full bg-lime-primary/40" />
        </div>
        <span className={`text-xs md:text-sm font-mono uppercase tracking-widest opacity-70 ${colorClass}`}>
          {snippets[index].title}
        </span>
        <div className="flex gap-2">
          <button onClick={prev} className="p-1 hover:bg-white/5 rounded-md transition-colors text-white/40 hover:text-white">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="p-1 hover:bg-white/5 rounded-md transition-colors text-white/40 hover:text-white">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-sm md:text-base leading-relaxed whitespace-pre"
          >
            <code className="block">
              {highlightCSharp(snippets[index].code)}
            </code>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {snippets.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 transition-all duration-300 rounded-full ${i === index ? `w-6 ${color === "lime" ? "bg-lime-primary" : "bg-amber-500"}` : 'w-2 bg-white/10'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function highlightCSharp(code: string) {
  const parts = code.split(/(\/\/.*|"[^"]*"|\b(?:public|private|protected|internal|class|interface|enum|struct|void|string|int|decimal|DateTimeOffset|DateTime|TimeSpan|async|await|task|Task|foreach|in|var|new|throw|if|else|return|using|namespace|static|typeof|base|where|params|readonly|nameof)\b|\b[A-Z][a-zA-Z0-9_]*\b|\b[a-z][a-zA-Z0-9_]*\b(?=\())/g);
  return parts.map((part, i) => {
    if (!part) return null;
    if (part.startsWith("//")) return <span key={i} className="text-[#6A9955] italic">{part}</span>;
    if (part.startsWith("\"")) return <span key={i} className="text-[#CE9178]">{part}</span>;
    if (/^(if|else|return|await|throw|foreach|in|using|namespace|where)$/.test(part)) return <span key={i} className="text-[#C586C0]">{part}</span>;
    if (/^(public|private|protected|internal|class|interface|enum|struct|void|async|static|readonly|var|new|typeof|base|nameof)$/.test(part)) return <span key={i} className="text-[#569CD6]">{part}</span>;
    if (/^(string|int|decimal|DateTimeOffset|DateTime|TimeSpan|Task|Guid|[A-Z][a-zA-Z0-9_]*)$/.test(part)) return <span key={i} className="text-[#4EC9B0]">{part}</span>;
    if (part.endsWith("(") || (i > 0 && /^[a-z][a-zA-Z0-9_]*$/.test(part) && parts[i+1]?.startsWith("("))) return <span key={i} className="text-[#DCDCAA]">{part}</span>;
    return part;
  });
}

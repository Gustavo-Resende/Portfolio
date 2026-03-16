"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Calendar, Code2, Briefcase, Target, Lightbulb, AlertTriangle, Zap, Server, Activity, TrendingUp, ChevronLeft, ChevronRight, Layout, Database, Shield, Sparkles, Brain, Search } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { BackToTop } from "@/components/BackToTop";

export default function ResumaxPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-lime-primary/30 selection:text-lime-primary">
      <Header />

      {/* 1. HERO SECTION (Z-Layout 50/50) */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 relative z-10"
          >
            <Link 
              href="/#projects" 
              className="inline-flex items-center gap-2 text-white/50 hover:text-lime-primary transition-colors group mb-4"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-mono tracking-widest uppercase">Voltar ao Portfólio</span>
            </Link>

            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold tracking-widest uppercase animate-pulse">
                <Activity className="w-3 h-3" /> Em Desenvolvimento
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
                Resumax <br />
                <span className="text-lime-primary">AI Hub.</span>
              </h1>
            </div>

            <p className="text-text-body text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Plataforma inteligente de processamento de linguagem natural focada em transformar conteúdos extensos em insights acionáveis e resumos precisos instantaneamente.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <Brain className="w-5 h-5 text-lime-primary" />
                <span className="text-sm font-mono tracking-tight text-white/80">NLP Engine</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
                <Sparkles className="w-5 h-5 text-lime-primary" />
                <span className="text-sm font-mono tracking-tight text-white/80">Generative AI</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(163,230,53,0.1)] bg-[#050505]/50 group flex items-center justify-center border-dashed"
          >
            <div className="flex flex-col items-center gap-4 text-white/5 opacity-40">
               <div className="relative">
                  <Brain className="w-16 h-16 blur-sm" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-lime-primary animate-pulse" />
                  </div>
               </div>
               <span className="text-xs font-mono tracking-widest uppercase">Under Construction</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. CONTEXTO & STATUS (Bento Grid) */}
      <section className="py-24 px-4 relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
             whileHover={{ y: -5 }}
             className="md:col-span-2 p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <Search className="w-8 h-8 text-lime-primary mb-4" />
              <h3 className="text-2xl font-bold">O Problema</h3>
              <p className="text-text-muted leading-relaxed">
                A sobrecarga de informação impossibilita profissionais de absorverem todo o conhecimento necessário. Ler artigos longos, assistir vídeos e ler reviews demanda um tempo que o mercado não perdoa.
              </p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-2xl bg-lime-primary flex flex-col justify-between"
          >
            <div className="space-y-4">
              <Target className="w-8 h-8 text-black mb-4" />
              <h3 className="text-2xl font-bold text-black">Objetivo</h3>
              <p className="text-black/80 font-medium leading-relaxed">
                Extrair a essência de qualquer conteúdo em segundos, democratizando o acesso à informação de alta densidade.
              </p>
            </div>
          </motion.div>

          <motion.div 
             whileHover={{ y: -5 }}
             className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5"
          >
             <Zap className="w-8 h-8 text-amber-500 mb-4" />
             <h3 className="text-2xl font-bold mb-4">Arquitetura</h3>
             <p className="text-text-muted leading-relaxed text-sm">
               Microserviços em Go e Python para processamento de áudio/texto com integração OpenAI.
             </p>
          </motion.div>
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
          <div className="w-8 h-8 rounded bg-gradient-to-br from-lime-primary to-emerald-600 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
          </div>
          <span className="font-extrabold text-xl tracking-tighter">GR Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#projects" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors">Portfólio</Link>
          <Link href="/#contact" className="px-5 py-2.5 bg-lime-primary text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-lime-primary/90 transition-all">Contato</Link>
        </div>
      </div>
    </nav>
  );
}

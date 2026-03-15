"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, Code2, Briefcase, Target, Lightbulb, AlertTriangle, Zap, Server, Activity } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SleipnirProject() {
  const { language } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col font-sans bg-black text-white relative selection:bg-lime-primary/30 selection:text-white">
      {/* Background idêntico à página principal */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#122010_0%,_#050505_100%)] opacity-80 mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 1. PROJECT HERO (Cartão de Visita) */}
      <section className="relative w-full pt-32 pb-20 px-4 min-h-[70vh] flex items-center border-b border-white/5 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo: Textos e CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-start space-y-8"
          >
            <Link href="/#projects" className="flex items-center gap-2 text-text-muted hover:text-lime-primary transition-colors text-sm font-semibold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              Voltar aos Projetos
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Sleipnir
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
                Um sistema ultrarrápido projetado para resolver <span className="text-lime-primary font-semibold">problemas complexos de logística</span> e integrar APIs de terceiros.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#" className="bg-lime-primary hover:bg-[#b4f04b] text-black px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" className="bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-6 py-3 rounded-md font-bold transition-all flex items-center gap-2">
                Ver Código <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Lado Direito: Print principal do Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(163,230,53,0.1)] bg-[#18181B] group"
          >
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
              <span className="text-xl font-bold">[ INSERIR PRINT DO DASHBOARD AQUI ]</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. METADATA E JORNADA DO PROJETO */}
      <section className="py-24 px-4 relative z-10 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Metadata Cards (Ícones + Interativo) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">Duração</span>
                <h3 className="text-2xl font-bold text-white">Contínuo</h3>
                <p className="text-text-muted text-sm mt-2">Design, arquitetura inicial e manutenção ativa até hoje.</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">Stack Tecnológica</span>
                <h3 className="text-xl font-bold text-white">.NET Core, React, SQL Server</h3>
                <p className="text-text-muted text-sm mt-2">Webhooks, CQRS, Docker e deploys automatizados via CI/CD.</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">Modelo Comercial</span>
                <h3 className="text-2xl font-bold text-white">Venda B2B</h3>
                <p className="text-text-muted text-sm mt-2">Projeto vendido com contrato de atualizações por demanda.</p>
              </div>
            </motion.div>
          </div>

          {/* A Jornada: Problema -> Objetivo -> Solução */}
          <div className="w-full relative">
            <div className="text-center mb-16">
               <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">O Cenário</span>
               <h2 className="text-4xl font-bold text-white">A Jornada do Projeto</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
              {/* Linha conectora (visível apenas MD ou maior) */}
              <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-lime-primary/50 to-transparent z-0"></div>
              
              <div className="flex flex-col items-center text-center relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-black border border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)] flex items-center justify-center">
                   <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">1. O Problema</h3>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base">O cliente processava centenas de conciliações em planilhas manuais. O sistema legado anterior sofria de downtime constante sob carga pesada, travando as operações de faturamento no fim do mês.</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-black border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.2)] flex items-center justify-center">
                   <Target className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">2. O Objetivo</h3>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base">Desenvolver um núcleo de processos ultraleve para lidar com múltiplas instâncias concorrentes. A principal meta técnica era eliminar totalmente a necessidade de intervenção humana.</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-full bg-black border border-lime-primary/50 shadow-[0_0_30px_rgba(163,230,53,0.3)] flex items-center justify-center">
                   <Lightbulb className="w-8 h-8 text-lime-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">3. A Solução</h3>
                  <p className="text-text-muted leading-relaxed text-sm md:text-base">Uma API .NET utilizando Clean Architecture e Filas, acoplada a um Front-end minimalista. Fluxos inteiros orquestrados por eventos de banco de dados e disparo automático de Webhooks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FUNCIONALIDADES CORE (Doc-Style Zig-Zag) */}
      <section className="py-24 px-4 relative z-10 w-full bg-[#050505]/50 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto space-y-32">
          
          <div className="text-center mb-16">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">Arquitetura CORE</span>
            <h2 className="text-4xl font-bold text-white">Como o sistema foi desenhado</h2>
          </div>

          {/* Feature 1 (Texto Esquerda, Imagem Direita) - FORMATO DOCUMENTAL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">DOC_SECTION_01</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Isolamento total de regras via <span className="text-lime-primary">{`{ Clean Architecture }`}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed">
                A aplicação foi estruturada abstraindo completamente os provedores externos. As lógicas complexas de conciliação e roteamento não dependem de detalhes da base de dados, permitindo implementações atômicas e testes unitários infalíveis.
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm">
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="text-lime-primary w-4 h-4" /> `Domain_Driven_Design` aplicado à risca.</li>
                <li className="flex items-center gap-3 text-white/70"><CheckCircle2 className="text-lime-primary w-4 h-4" /> Repositórios Injetados via Dependency Injection.</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl bg-[#09090b] border border-white/10 overflow-hidden order-1 lg:order-2 group">
               <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                  <span>[ Screenshot de Entidade / Código Clean Architecture ]</span>
               </div>
            </div>
          </div>

          {/* Feature 2 (Imagem Esquerda, Texto Direita) - FORMATO DOCUMENTAL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl bg-[#09090b] border border-white/10 overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                  <span>[ Diagrama de Fluxo / Webhooks Dashboard ]</span>
               </div>
            </div>
            <div className="space-y-6">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">DOC_SECTION_02</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Escalabilidade orientada a eventos usando <span className="text-lime-primary">{`{ Background Workers }`}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed">
                Em vez de sobrecarregar as requisições principais da API com tarefas pesadas (ex: formatação assíncrona de relatórios gigantes), implementamos filas em background que absorvem altos picos de tráfego instantaneamente.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. RESULTADOS (High Impacto Visual) */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden z-10 bg-black">
        {/* Glow de fundo pro Call to action */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-lime-primary rounded-full blur-[180px] opacity-[0.08]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          <div className="text-center">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase block mb-2">Métricas e Entregas</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              O Sucesso da Implementação
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-[#111] border border-lime-primary/30 p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-lime-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
               <Zap className="w-10 h-10 text-lime-primary mx-auto mb-6 relative z-10" />
               <h4 className="text-5xl font-extrabold text-white mb-4 relative z-10">-85%</h4>
               <p className="text-white/60 font-medium relative z-10">Tempo Gasto em Operação Manual</p>
             </motion.div>
             
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#111] border border-lime-primary/30 p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-lime-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
               <Server className="w-10 h-10 text-lime-primary mx-auto mb-6 relative z-10" />
               <h4 className="text-5xl font-extrabold text-white mb-4 relative z-10">Zero</h4>
               <p className="text-white/60 font-medium relative z-10">Downtime Registrado em Produção</p>
             </motion.div>

             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-[#111] border border-lime-primary/30 p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden group">
               <div className="absolute inset-0 bg-lime-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
               <Activity className="w-10 h-10 text-lime-primary mx-auto mb-6 relative z-10" />
               <h4 className="text-5xl font-extrabold text-white mb-4 relative z-10">10k+</h4>
               <p className="text-white/60 font-medium relative z-10">Requisições sem Gargalo Mensal</p>
             </motion.div>
          </div>
          
          <div className="pt-24 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-bold text-white">Gostou dessa abordagem arquitetural?</h3>
            <p className="text-white/60 mb-4 max-w-xl">Software de ponta exige fundações robustas e código limpo. Vamos construir seu próximo Case de Sucesso juntos.</p>
            <Link href="/#contact" className="bg-lime-primary hover:bg-[#b4f04b] text-black px-10 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_40px_rgba(163,230,53,0.4)] hover:shadow-[0_0_60px_rgba(163,230,53,0.6)] hover:scale-105">
              Falar sobre Meu Projeto
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}

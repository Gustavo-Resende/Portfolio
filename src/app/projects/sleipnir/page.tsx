"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, Code2, Briefcase, Target, Lightbulb, AlertTriangle, Zap, Server, Activity, TrendingUp } from "lucide-react";
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

          {/* A Jornada: Problema -> Objetivo -> Solução (Animada) */}
          <div className="w-full relative pt-10">
            <div className="text-center mb-24">
               <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">O Cenário</span>
               <h2 className="text-4xl font-bold text-white">A Jornada do Projeto</h2>
            </div>
            
            <JourneyAnimatedSection />
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

          {/* Feature 2 (Imagem Esquerda, Texto Direita) */}
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

          {/* Feature 3 (Texto Esquerda, Imagem Direita) - TERCEIRA SEÇÃO ADICIONADA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">DOC_SECTION_03</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Telemetria e Observabilidade <span className="text-lime-primary">{`{ Real-Time }`}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed">
                Toda a execução do sistema é monitorada milissegundo a milissegundo. Adicionamos tracing distribuído que permite rastrear uma requisição de ponta a ponta, desde a origem até o commit no banco de dados, falhando silenciosamente ou alertando a equipe técnica via Slack.
              </p>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl bg-[#09090b] border border-white/10 overflow-hidden order-1 lg:order-2 group">
               <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                  <span>[ Print do Grafana / Logs do Seq ]</span>
               </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Anim Metric 1: Progress Bar shrinking */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-[#111] border border-lime-primary/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <Zap className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">-85%</h4>
               <p className="text-white/60 font-medium text-sm">Tempo de Operação Manual</p>
               
               {/* Progress bar animation */}
               <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                 <motion.div 
                   initial={{ width: "100%" }} 
                   whileInView={{ width: "15%" }} 
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                   className="h-full bg-lime-primary shadow-[0_0_10px_#a3e635]" 
                 />
               </div>
             </motion.div>
             
             {/* Anim Metric 2: Pulsing Server / Heartbeat */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#111] border border-lime-primary/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <motion.div
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ repeat: Infinity, duration: 2 }}
               >
                 <Server className="w-8 h-8 text-lime-primary mb-4" />
               </motion.div>
               <h4 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]">Zero</h4>
               <p className="text-white/60 font-medium text-sm">Downtime Registrado</p>
               <span className="mt-4 px-3 py-1 bg-lime-primary/10 text-lime-primary text-xs rounded-full border border-lime-primary/20 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-lime-primary animate-pulse" /> Online
               </span>
             </motion.div>

             {/* Anim Metric 3: Flowing requests (dots moving) */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-[#111] border border-lime-primary/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <Activity className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">10k+</h4>
               <p className="text-white/60 font-medium text-sm">Reqs/min Sem Gargalo</p>
               
               {/* Conveyor belt animation dots */}
               <div className="flex gap-2 mt-6 overflow-hidden w-full justify-center opacity-50">
                 {[1,2,3,4].map((i) => (
                   <motion.div 
                     key={i}
                     animate={{ x: [20, -20], opacity: [0, 1, 0] }}
                     transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                     className="w-2 h-2 rounded-full bg-lime-primary"
                   />
                 ))}
               </div>
             </motion.div>

             {/* Anim Metric 4: Trending Up Chart */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="bg-[#111] border border-lime-primary/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <TrendingUp className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">+30%</h4>
               <p className="text-white/60 font-medium text-sm">Aumento de Capacidade</p>
               
               <div className="flex items-end gap-1.5 mt-6 h-8 justify-center">
                 {[40, 60, 50, 80, 100].map((height, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${height}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                     className="w-3 bg-lime-primary rounded-t-sm opacity-80"
                   />
                 ))}
               </div>
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

function JourneyAnimatedSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Usaremos um offset mais longo para que a barra vá preenchendo MUITO suavemente
  // conforme a pessoa cruza toda a sessão (do início no topo até o fim da tela)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"] // Suaviza a proporção da rolagem
  });

  return (
    <div ref={containerRef} className="max-w-5xl mx-auto relative px-4 py-12 md:py-24">
      
      {/* LINHA DE PROGRESSO (DESKTOP E MOBILE ABSOLUTA) */}
      <div className="absolute 
        md:top-36 md:left-[10%] md:right-[10%] md:h-[2px] md:w-auto 
        top-12 bottom-12 left-12 w-[2px] md:bottom-auto 
        bg-white/5 rounded-full z-0 overflow-hidden"
      >
        {/* Hack responsivo de framer-motion via CSS Inject */}
        <style jsx>{`
          .anim-progress { transform-origin: top; transform: scaleY(var(--progress)); width: 100%; height: 100%; }
          @media (min-width: 768px) {
            .anim-progress { transform-origin: left; transform: scaleX(var(--progress)); }
          }
        `}</style>
        <motion.div 
          className="anim-progress bg-lime-primary shadow-[0_0_15px_#a3e635]"
          style={{ "--progress": scrollYProgress } as any}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12 relative z-10 
                      min-h-[600px] md:min-h-0" /* Força mais espaço vertical no mobile */>
        
        {/* Checkpoint 1 */}
        <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-10 md:gap-8 relative">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-full bg-black border-[3px] border-red-500/80 flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.2)] md:shadow-none"
          >
             <AlertTriangle className="w-10 h-10 md:w-12 md:h-12 text-red-500" />
          </motion.div>
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-4">1. O Problema</h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-[280px] md:max-w-none mx-auto">
              O cliente processava centenas de conciliações em planilhas manuais. O sistema travava as operações de faturamento todo fim do mês.
            </p>
          </div>
        </div>

        {/* Checkpoint 2 */}
        <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-10 md:gap-8 relative md:mt-0 ml-[20%] md:ml-0">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-full bg-black border-[3px] border-amber-500/80 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.2)] md:shadow-none"
          >
             <Target className="w-10 h-10 md:w-12 md:h-12 text-amber-500" />
          </motion.div>
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-4">2. O Objetivo</h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-[280px] md:max-w-none mx-auto">
              Desenvolver um núcleo de processos ultraleve para lidar com instâncias concorrentes, eliminando totalmente a intervenção humana.
            </p>
          </div>
        </div>

        {/* Checkpoint 3 */}
        <div className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-10 md:gap-8 relative md:mt-0">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-24 h-24 md:w-28 md:h-28 shrink-0 rounded-full bg-black border-[3px] border-lime-primary/80 flex items-center justify-center shadow-[0_0_40px_rgba(163,230,53,0.3)] md:shadow-none"
          >
             <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-lime-primary" />
          </motion.div>
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-4">3. A Solução</h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-[280px] md:max-w-none mx-auto">
              Uma API .NET utilizando Clean Architecture e Filas, acoplada a Webhooks para rodar todos os fluxos de forma autônoma.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

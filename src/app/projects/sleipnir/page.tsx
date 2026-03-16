"use client";

import { useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Code2, Briefcase, Target, Lightbulb, AlertTriangle, Zap, Server, Activity, TrendingUp, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectHeader } from "@/components/ProjectHeader";
import { BackToTop } from "@/components/BackToTop";

export default function SleipnirProject() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col font-sans bg-black text-white relative selection:bg-lime-primary/30 selection:text-white">
      <ProjectHeader 
        projectName="Sleipnir" 
        accentColor="lime-primary"
        sections={[
          { name: t.projectPages.common.sections.overview, href: "#hero" },
          { name: t.projectPages.common.sections.journey, href: "#metadata" },
          { name: t.projectPages.common.sections.architecture, href: "#architecture" },
          { name: t.projectPages.common.sections.results, href: "#results" },
          { name: t.projectPages.common.sections.contact, href: "#cta" },
        ]}
      />

      {/* Background idêntico à página principal */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#122010_0%,_#050505_100%)] opacity-80 mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* 1. PROJECT HERO */}
      <section id="hero" className="relative w-full pt-32 pb-20 px-4 min-h-[70vh] flex items-center border-b border-white/5 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo: Textos e CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-start space-y-8"
          >

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Sleipnir
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
                {(() => {
                  const parts = t.projectPages.sleipnir.hero.split(/<\/?accent>/);
                  return <>{parts[0]}<span className="text-lime-primary font-semibold">{parts[1]}</span>{parts[2]}</>;
                })()}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/#contact" className="bg-lime-primary hover:bg-[#b4f04b] text-black px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> {t.projectPages.common.contactButton}
              </Link>
            </div>
          </motion.div>

          {/* Lado Direito: Print principal do Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(163,230,53,0.1)] bg-[#050505]/50 group flex items-center justify-center"
          >
            {/* Minimalist Placeholder for real screenshots later */}
            <div className="flex flex-col items-center gap-4 text-white/5 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-current flex items-center justify-center">
                  <Activity className="w-8 h-8" />
               </div>
               <span className="text-xs font-mono tracking-widest uppercase">Placeholder for Hero Screenshot</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. METADATA E JORNADA DO PROJETO */}
      <section id="metadata" className="py-24 px-4 relative z-10 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Metadata Cards (Ícones + Interativo) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.duration}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.sleipnir.metadata.duration.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.sleipnir.metadata.duration.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.stack}</span>
                <h3 className="text-xl font-bold text-white">{t.projectPages.sleipnir.metadata.stack.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.sleipnir.metadata.stack.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.model}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.sleipnir.metadata.model.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.sleipnir.metadata.model.description}</p>
              </div>
            </motion.div>
          </div>

          {/* A Jornada: Problema -> Objetivo -> Solução (Animada) */}
          <div className="w-full relative pt-10">
            <div className="text-center mb-24">
               <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.journey.eyebrow}</span>
               <h2 className="text-4xl font-bold text-white">{t.projectPages.common.journey.title}</h2>
            </div>
            
            <JourneyAnimatedSection />
          </div>
        </div>
      </section>

      {/* 3. FUNCIONALIDADES CORE (Doc-Style Zig-Zag) */}
      <section id="architecture" className="py-24 px-4 relative z-10 w-full bg-[#050505]/50 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto space-y-32">
          
          <div className="text-center mb-16">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.architecture.eyebrow}</span>
            <h2 className="text-4xl font-bold text-white">{t.projectPages.common.architecture.title}</h2>
          </div>

          {/* Feature 1 (Texto Esquerda, Imagem Direita) - FORMATO DOCUMENTAL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">{t.projectPages.sleipnir.features.f1.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.sleipnir.features.f1.title} <span className="text-lime-primary">{t.projectPages.sleipnir.features.f1.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.sleipnir.features.f1.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f1.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f1.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 snippets={[
                   {
                     title: "Entity Constructor & Guard Clauses",
                     code: `public Route(string plate, string origin, string destination)
{
  Plate = plate;
  Origin = origin;
  Destination = destination;
  
  // Guard Clauses garantindo estado válido
  Guard.Against.NullOrWhiteSpace(plate);
  CreatedAt = DateTimeOffset.UtcNow;
}`
                   },
                   {
                     title: "Logic-Rich StartRoute",
                     code: `public void StartRoute(DateTimeOffset estimatedEndAt, Tracking tracking)
{
    Guard.Against.InvalidInput(StartedAt, x => x == null, "Já iniciada");
    
    StartedAt = tracking.EventAt;
    EstimatedEndAt = estimatedEndAt;
    
    AddTrackingHistory(tracking);
}`
                   },
                   {
                     title: "Tracking History Validation",
                     code: `public void AddTrackingHistory(Tracking tracking)
{
    if (StartedAt.HasValue && tracking.EventAt < StartedAt.Value)
    {
        throw new ArgumentException("Data inválida.");
    }
    _tracking.Add(tracking);
}`
                   }

                 ]}
               />
            </div>
          </div>

          {/* Feature 2 (Imagem Esquerda, Texto Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-1">
                <CodeCarousel 
                  color="amber"
                  snippets={[
                    {
                      title: "Npgsql & Retry Policy",
                      code: `services.AddDbContext<SqlDbContext>(options => {
    options.UseNpgsql(connString, npgsql => {
        npgsql.EnableRetryOnFailure(
            maxRetryCount: 5,
            maxRetryDelay: TimeSpan.FromSeconds(5)
        );
    });
});`
                    },
                    {
                      title: "Generic Repository Patterns",
                      code: `public class EfRepository<T> : RepositoryBase<T>, IRepository<T> 
    where T : class, IAggregateRoot
{
    public EfRepository(SqlDbContext dbContext) : base(dbContext)
    {
    }
}`
                    },
                    {
                      title: "Specification Integration",
                      code: `public async Task<T?> GetBySpecAsync(ISpecification<T> spec)
{
    return await ApplySpecification(spec).FirstOrDefaultAsync();
}`
                    }

                  ]}
                />
            </div>
            <div className="space-y-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">{t.projectPages.sleipnir.features.f2.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.sleipnir.features.f2.title} <span className="text-lime-primary">{t.projectPages.sleipnir.features.f2.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.sleipnir.features.f2.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f2.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f2.checks[1]}</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 (Texto Esquerda, Imagem Direita) - TERCEIRA SEÇÃO ADICIONADA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">{t.projectPages.sleipnir.features.f3.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.sleipnir.features.f3.title} <span className="text-lime-primary">{t.projectPages.sleipnir.features.f3.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.sleipnir.features.f3.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f3.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f3.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 color="lime"
                 snippets={[
                   {
                     title: "Domain Event Dispatcher",
                     code: `public async Task Publish<T>(T domainEvent) where T : IDomainEvent
{
    var handlers = _container.ResolveAll<IDomainEventHandler<T>>();
    foreach (var handler in handlers)
    {
        await handler.Handle(domainEvent);
    }
}`
                   },
                   {
                     title: "MediatR Injection Setup",
                     code: `services.AddMediatR(cfg => {
    cfg.RegisterServicesFromAssembly(typeof(Setup).Assembly);
    cfg.AddOpenBehavior(typeof(LoggingBehavior<,>));
    cfg.AddOpenBehavior(typeof(ValidationBehavior<,>));
});`
                   },
                   {
                     title: "Clean Domain Event Handler",
                     code: `public class RouteStartedHandler : INotificationHandler<RouteStartedEvent>
{
    public async Task Handle(RouteStartedEvent notification, CancellationToken ct)
    {
        // Notificação assíncrona desacoplada
    }
}`
                   }

                 ]}
               />
            </div>
          </div>

        </div>
      </section>

      {/* 4. RESULTADOS (High Impacto Visual) */}
      <section id="results" className="pt-32 pb-16 px-4 relative overflow-hidden z-10 bg-black">
        {/* Glow de fundo pro Call to action */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-lime-primary rounded-full blur-[180px] opacity-[0.08]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          <div className="text-center">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase block mb-2">{t.projectPages.common.results.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.projectPages.common.results.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Anim Metric 1: Progress Bar shrinking */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-[#111] border border-lime-primary/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <Zap className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.sleipnir.results.m1.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.sleipnir.results.m1.label}</p>
               
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
               <h4 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]">{t.projectPages.sleipnir.results.m2.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.sleipnir.results.m2.label}</p>
               <span className="mt-4 px-3 py-1 bg-lime-primary/10 text-lime-primary text-xs rounded-full border border-lime-primary/20 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-lime-primary animate-pulse" /> {t.projectPages.common.online}
               </span>
             </motion.div>

             {/* Anim Metric 3: Flowing requests (dots moving) */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-[#111] border border-lime-primary/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(163,230,53,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <Activity className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.sleipnir.results.m3.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.sleipnir.results.m3.label}</p>
               
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
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.sleipnir.results.m4.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.sleipnir.results.m4.label}</p>
               
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
          
          <div id="cta" className="pt-24 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-bold text-white">{t.projectPages.common.cta.title}</h3>
            <p className="text-white/60 mb-4 max-w-xl">{t.projectPages.common.cta.description}</p>
            <Link href="/#contact" className="bg-lime-primary hover:bg-[#b4f04b] text-black px-10 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_40px_rgba(163,230,53,0.4)] hover:shadow-[0_0_60px_rgba(163,230,53,0.6)] hover:scale-105">
              {t.projectPages.common.cta.button}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer idêntico ao da Home */}
      <footer className="w-full text-center py-6 text-text-muted text-sm relative z-10 border-t border-white/5 mt-auto bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Gustavo Resende. {t.projectPages.common.footer}</p>
        </div>
      </footer>

      <BackToTop />

    </main>
  );
}

function JourneyAnimatedSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the container to fill the progress bar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"] // Progressão suave conforme o scroll da tela
  });

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto relative px-4">
      
      {/* LINHA DE PROGRESSO (APENAS DESKTOP) */}
      <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-white/10 rounded-full z-0 overflow-hidden">
        {/* Hack responsivo de framer-motion via CSS Inject */}
        <style jsx>{`
          .anim-progress { transform-origin: left; transform: scaleX(var(--progress)); width: 100%; height: 100%; }
        `}</style>
        <motion.div 
          className="anim-progress bg-lime-primary shadow-[0_0_15px_#a3e635]"
          style={{ "--progress": scrollYProgress } as React.CSSProperties}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-20 lg:gap-24 relative z-10">
        
        {/* Checkpoint 1 */}
        <div className="flex flex-col items-center text-center gap-6 relative">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-black border-2 border-red-500/80 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]"
          >
             <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-500" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.projectPages.common.journey.problem}</h3>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.sleipnir.journey.problem}
            </p>
          </div>
        </div>

        {/* Checkpoint 2 */}
        <div className="flex flex-col items-center text-center gap-6 relative">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-black border-2 border-amber-500/80 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
             <Target className="w-6 h-6 md:w-8 md:h-8 text-amber-500" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.projectPages.common.journey.objective}</h3>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.sleipnir.journey.objective}
            </p>
          </div>
        </div>

        {/* Checkpoint 3 */}
        <div className="flex flex-col items-center text-center gap-6 relative">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-black border-2 border-lime-primary/80 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.3)]"
          >
             <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-lime-primary" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.projectPages.common.journey.solution}</h3>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.sleipnir.journey.solution}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
function CodeCarousel({ snippets, color = "lime" }: { snippets: { title: string, code: string }[], color?: "lime" | "amber" | "red" }) {
  const [index, setIndex] = useState(0);
  const colorClass = color === "lime" ? "text-lime-primary border-lime-primary/30" : color === "amber" ? "text-amber-500 border-amber-500/30" : "text-red-500 border-red-500/30";
  const glowClass = color === "lime" ? "shadow-[0_0_20px_rgba(163,230,53,0.1)]" : color === "amber" ? "shadow-[0_0_20px_rgba(245,158,11,0.1)]" : "shadow-[0_0_20px_rgba(239,68,68,0.1)]";

  const next = () => setIndex((prev) => (prev + 1) % snippets.length);
  const prev = () => setIndex((prev) => (prev - 1 + snippets.length) % snippets.length);

  return (
    <div className={`w-full h-full bg-[#09090b] rounded-2xl border border-white/10 overflow-hidden flex flex-col ${glowClass}`}>
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-lime-primary/40" />
        </div>
        <span className={`text-xs md:text-sm font-mono uppercase tracking-widest opacity-70 ${colorClass}`}>
          {snippets[index].title}
        </span>
        <div className="flex gap-2">
          <button onClick={prev} className="p-1 hover:bg-white/5 rounded transition-colors opacity-50 hover:opacity-100">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-1 hover:bg-white/5 rounded transition-colors opacity-50 hover:opacity-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="flex-1 p-6 md:p-8 relative overflow-hidden flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap"
          >
            <code className="block text-white/90">
              {highlightCSharp(snippets[index].code)}
            </code>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Info */}
      <div className="p-3 border-t border-white/5 bg-white/[0.01] flex justify-between items-center">
         <span className="text-[9px] text-white/20 font-mono">Sleipnir Engine v1.0</span>
         <div className="flex gap-1">
            {snippets.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all ${i === index ? "bg-lime-primary w-3" : "bg-white/10"}`} />
            ))}
         </div>
      </div>
    </div>
  );
}

function highlightCSharp(code: string) {
  // Enhanced regex for C# syntax highlighting matching the provided VS Code-style screenshot
  const parts = code.split(/(\/\/.*|"[^"]*"|\b(?:public|private|protected|internal|class|interface|enum|struct|void|string|int|decimal|DateTimeOffset|DateTime|TimeSpan|async|await|task|Task|foreach|in|var|new|throw|if|else|return|using|namespace|static|typeof|base|where|params|readonly|nameof)\b|\b[A-Z][a-zA-Z0-9_]*\b|\b[a-z][a-zA-Z0-9_]*\b(?=\())/g);

  return parts.map((part, i) => {
    if (!part) return null;

    // Comments (Greenish)
    if (part.startsWith("//")) {
      return <span key={i} className="text-[#6A9955] italic">{part}</span>;
    }
    // Strings (Orange/Brown)
    if (part.startsWith("\"")) {
      return <span key={i} className="text-[#CE9178]">{part}</span>;
    }
    // Control Flow Keywords (Pink)
    if (/^(if|else|return|await|throw|foreach|in|using|namespace|where)$/.test(part)) {
      return <span key={i} className="text-[#C586C0]">{part}</span>;
    }
    // Definition Keywords (Blue/Cyan)
    if (/^(public|private|protected|internal|class|interface|enum|struct|void|async|static|readonly|var|new|typeof|base|nameof)$/.test(part)) {
      return <span key={i} className="text-[#569CD6]">{part}</span>;
    }
    // Types / Classes / Interfaces (Teal/Cyan)
    if (/^(string|int|decimal|DateTimeOffset|DateTime|TimeSpan|Task|Guid|[A-Z][a-zA-Z0-9_]*)$/.test(part)) {
       return <span key={i} className="text-[#4EC9B0]">{part}</span>;
    }
    // Method/Function calls (Yellow)
    if (part.endsWith("(") || (i > 0 && /^[a-z][a-zA-Z0-9_]*$/.test(part) && parts[i+1]?.startsWith("("))) {
       return <span key={i} className="text-[#DCDCAA]">{part}</span>;
    }

    return part;
  });
}


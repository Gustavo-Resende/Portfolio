"use client";

import { useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Code2,
  Briefcase,
  Target,
  Lightbulb,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Search,
  LayoutDashboard,
  Cpu,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectHeader } from "@/components/ProjectHeader";
import { BackToTop } from "@/components/BackToTop";
import { ContactCTA } from "@/components/ContactCTA";
import { TechStack } from "@/components/TechStack";
import { ImageCarousel } from "@/components/ImageCarousel";
import { FeatureHighlight } from "@/components/FeatureHighlight";

const sleipnirResultCardIcons = [
  Search,
  LayoutDashboard,
  Cpu,
  Shield,
] as const;

function renderHeroWithAccent(text: string) {
  const parts = text.split(/<\/?accent>/);
  if (parts.length < 3) return text;
  return (
    <>
      {parts[0]}
      <span className="text-lime-primary font-semibold">{parts[1]}</span>
      {parts[2]}
    </>
  );
}

export default function SleipnirProject() {
  const { t } = useLanguage();

  const sleipnirImages = [
    { src: "/images/projects/sleipnir/screenshot3.png", alt: "Sleipnir Dashboard - Detalhes da Cotação" },
    { src: "/images/projects/sleipnir/screenshot1.png", alt: "Sleipnir Dashboard - Gerenciar Cotações" },
    { src: "/images/projects/sleipnir/screenshot4.png", alt: "Sleipnir Dashboard - Adicionar Veículo" },
    { src: "/images/projects/sleipnir/screenshot2.png", alt: "Sleipnir Dashboard - Informações do Transporte" },
    { src: "/images/projects/sleipnir/screenshot5.png", alt: "Sleipnir Dashboard - Menu de Rastreamento" },
  ];

  return (
    <main className="flex min-h-screen flex-col font-sans bg-black text-white relative selection:bg-lime-primary/30 selection:text-white">
      <ProjectHeader 
        projectName="Sleipnir" 
        accentColor="lime-primary"
        sections={[
          { name: t.projectPages.common.sections.overview, href: "#hero" },
          { name: t.projectPages.common.sections.journey, href: "#metadata" },
          { name: t.projectPages.common.sections.techStack, href: "#tech-stack" },
          { name: t.projectPages.common.sections.architecture, href: "#architecture" },
          { name: t.projectPages.common.sections.results, href: "#results" },
          { name: t.projectPages.common.sections.contact, href: "#cta" },
        ]}
      />

      {/* Background idêntico à página principal */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#122010_0%,_#050505_100%)] opacity-80 mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')]"></div>
      </div>

      {/* 1. PROJECT HERO */}
      <section id="hero" className="relative w-full pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 min-h-[60vh] lg:min-h-[70vh] flex items-center border-b border-white/5 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo: Textos e CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center text-center space-y-8 lg:items-start lg:text-left"
          >

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Sleipnir
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
                {renderHeroWithAccent(t.projectPages.sleipnir.hero)}
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
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(163,230,53,0.1)] bg-[#050505]/50 group"
          >
            <ImageCarousel images={sleipnirImages} accentColor="lime" />
          </motion.div>

        </div>
      </section>

      {/* 2. METADATA E JORNADA DO PROJETO */}
      <section id="metadata" className="py-16 lg:py-24 px-4 relative z-10 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-32">
          
          {/* Metadata Cards (Ícones + Interativo) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.sleipnir.metadata.contextLabel}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.sleipnir.metadata.duration.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.sleipnir.metadata.duration.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.sleipnir.metadata.stackLabel}</span>
                <h3 className="text-xl font-bold text-white">{t.projectPages.sleipnir.metadata.stack.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.sleipnir.metadata.stack.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-lime-primary/30">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.sleipnir.metadata.modelLabel}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.sleipnir.metadata.model.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.sleipnir.metadata.model.description}</p>
              </div>
            </motion.div>
          </div>

          {/* A Jornada: Problema -> Objetivo -> Solução (Animada) */}
          <div className="w-full relative pt-10">
            <div className="text-center mb-16 lg:mb-24">
               <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.journey.eyebrow}</span>
               <h2 className="text-4xl font-bold text-white">{t.projectPages.common.journey.title}</h2>
            </div>
            
            <JourneyAnimatedSection />
          </div>
        </div>
      </section>

      <div id="tech-stack">
        <TechStack 
          title={t.projectPages.sleipnir.techStack.title}
          description={t.projectPages.sleipnir.techStack.description}
          items={t.projectPages.sleipnir.techStack.items}
          accentColor="lime"
        />
      </div>

      {/* 3. FUNCIONALIDADES CORE (Doc-Style Zig-Zag) */}
      <section id="architecture" className="py-16 lg:py-24 px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-32">
          
          <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.architecture.eyebrow}</span>
            <h2 className="text-4xl font-bold text-white">{t.projectPages.common.architecture.title}</h2>
            <p className="mt-4 text-text-body text-base md:text-lg leading-relaxed">{t.projectPages.sleipnir.architectureIntro}</p>
          </div>

          {/* Feature 1 (Texto Esquerda, Imagem Direita) - FORMATO DOCUMENTAL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">{t.projectPages.sleipnir.features.f1.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.sleipnir.features.f1.title}{" "}
                <FeatureHighlight text={t.projectPages.sleipnir.features.f1.highlight} className="text-lime-primary" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.sleipnir.features.f1.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f1.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f1.checks[1]}</li>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                {t.projectPages.sleipnir.features.f2.title} <span className="inline-block whitespace-nowrap text-lime-primary">{t.projectPages.sleipnir.features.f2.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.sleipnir.features.f2.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f2.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f2.checks[1]}</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 (Texto Esquerda, Imagem Direita) - TERCEIRA SEÇÃO ADICIONADA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">{t.projectPages.sleipnir.features.f3.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.sleipnir.features.f3.title}{" "}
                <FeatureHighlight text={t.projectPages.sleipnir.features.f3.highlight} className="text-lime-primary" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.sleipnir.features.f3.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f3.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.sleipnir.features.f3.checks[1]}</li>
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

      <ContactCTA variant="inline" />

      {/* 4. RESULTADOS (High Impacto Visual) */}
      <section id="results" className="pt-20 pb-8 lg:pt-32 lg:pb-16 px-4 relative overflow-hidden z-10">
        {/* Glow de fundo pro Call to action */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-lime-primary rounded-full blur-[180px] opacity-[0.08]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase block mb-2">{t.projectPages.sleipnir.results.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.projectPages.sleipnir.results.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(["m1", "m2", "m3", "m4"] as const).map((key, i) => {
              const card = t.projectPages.sleipnir.results[key];
              const Icon = sleipnirResultCardIcons[i];
              return (
                <motion.div
                  key={key}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, borderColor: "rgba(163, 230, 53, 0.45)" }}
                  className="group bg-[#111111]/90 border border-lime-primary/25 p-8 rounded-2xl text-left shadow-[0_0_24px_rgba(163,230,53,0.06)] flex flex-col justify-center min-h-[180px] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-lime-primary/10 border border-lime-primary/20 flex items-center justify-center text-lime-primary mb-4 shrink-0 transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">{card.value}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{card.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div id="cta" className="pt-16 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-bold text-white max-w-xl">{t.projectPages.sleipnir.cta.title}</h3>
            <p className="text-white/60 mb-4 max-w-xl">{t.projectPages.sleipnir.cta.description}</p>
            <Link href="/#contact" className="bg-lime-primary hover:bg-[#b4f04b] text-black px-10 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_40px_rgba(163,230,53,0.4)] hover:shadow-[0_0_60px_rgba(163,230,53,0.6)] hover:scale-105">
              {t.projectPages.sleipnir.cta.button}
            </Link>
          </div>
        </div>
      </section>
      
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
            className="w-[90px] h-[90px] md:w-28 md:h-28 shrink-0 rounded-full bg-black border-2 border-red-500/80 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]"
          >
             <AlertTriangle className="w-9 h-9 md:w-11 md:h-11 text-red-500" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.projectPages.common.journey.problem}</h3>
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.sleipnir.journey.problemHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.sleipnir.journey.problem}
            </p>
          </div>
        </div>

        {/* Checkpoint 2 */}
        <div className="flex flex-col items-center text-center gap-6 relative">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-[90px] h-[90px] md:w-28 md:h-28 shrink-0 rounded-full bg-black border-2 border-amber-500/80 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
             <Target className="w-9 h-9 md:w-11 md:h-11 text-amber-500" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.projectPages.common.journey.objective}</h3>
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.sleipnir.journey.objectiveHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.sleipnir.journey.objective}
            </p>
          </div>
        </div>

        {/* Checkpoint 3 */}
        <div className="flex flex-col items-center text-center gap-6 relative">
          <motion.div 
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-[90px] h-[90px] md:w-28 md:h-28 shrink-0 rounded-full bg-black border-2 border-lime-primary/80 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.3)]"
          >
             <Lightbulb className="w-9 h-9 md:w-11 md:h-11 text-lime-primary" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.projectPages.common.journey.solution}</h3>
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.sleipnir.journey.solutionHeadline}</p>
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


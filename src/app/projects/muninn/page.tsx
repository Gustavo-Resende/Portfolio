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
  Globe,
  MessageCircle,
  GitBranch,
  Globe2,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectHeader } from "@/components/ProjectHeader";
import { BackToTop } from "@/components/BackToTop";
import { ContactCTA } from "@/components/ContactCTA";
import { TechStack } from "@/components/TechStack";
import { ImageCarousel } from "@/components/ImageCarousel";
import { FeatureHighlight } from "@/components/FeatureHighlight";

const ACCENT = {
  text: "text-amber-500",
  bg: "bg-amber-500",
  bgLight: "bg-amber-500/10",
  border: "border-amber-500/30",
  borderHover: "hover:border-amber-500/30",
  shadow: "shadow-[0_0_40px_rgba(245,158,11,0.1)]",
  glowSmall: "shadow-[0_0_20px_rgba(245,158,11,0.1)]",
  glowLarge: "shadow-[0_0_30px_rgba(245,158,11,0.05)]",
  selection: "selection:bg-amber-500/30 selection:text-white",
  gradient: "#1a1500",
  hoverBg: "hover:bg-amber-400",
  ctaShadow: "shadow-[0_0_40px_rgba(245,158,11,0.4)]",
  ctaShadowHover: "hover:shadow-[0_0_60px_rgba(245,158,11,0.6)]",
};

const muninnResultCardIcons = [GitBranch, Globe2, ShieldCheck, Workflow] as const;

function renderHeroWithAccent(text: string) {
  const parts = text.split(/<\/?accent>/);
  if (parts.length < 3) return text;
  return (
    <>
      {parts[0]}
      <span className="text-amber-500 font-semibold">{parts[1]}</span>
      {parts[2]}
    </>
  );
}

export default function MuninnProject() {
  const { t } = useLanguage();
  
  const muninnImages = [
    { src: "/images/projects/muninn/screenshot1.png", alt: "Muninn - Landing Page" },
    { src: "/images/projects/muninn/screenshot2.png", alt: "Muninn - Como Funciona" },
    { src: "/images/projects/muninn/screenshot3.png", alt: "Muninn - Formulário de Lead" },
    { src: "/images/projects/muninn/screenshot4.png", alt: "Muninn - Dashboard Administrativo" },
  ];

  return (
    <main className={`flex min-h-screen flex-col font-sans bg-black text-white relative ${ACCENT.selection}`}>
      <ProjectHeader 
        projectName="Muninn" 
        accentColor="amber-500"
        sections={[
          { name: t.projectPages.common.sections.overview, href: "#hero" },
          { name: t.projectPages.common.sections.journey, href: "#metadata" },
          { name: t.projectPages.common.sections.techStack, href: "#tech-stack" },
          { name: t.projectPages.common.sections.architecture, href: "#architecture" },
          { name: t.projectPages.common.sections.results, href: "#results" },
          { name: t.projectPages.common.sections.contact, href: "#cta" },
        ]}
      />

      {/* Background com tonalidade laranja */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a1200_0%,_#050505_100%)] opacity-80 mix-blend-screen"></div>
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
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold tracking-widest uppercase">
                  <Globe className="w-3 h-3" />
                  {t.projectPages.muninn.heroBadge}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Muninn
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
                {renderHeroWithAccent(t.projectPages.muninn.hero)}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/#contact" className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> {t.projectPages.common.contactButton}
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(245,158,11,0.1)] bg-[#050505]/50 group"
          >
            <ImageCarousel images={muninnImages} accentColor="amber" />
          </motion.div>

        </div>
      </section>

      {/* 2. METADATA E JORNADA DO PROJETO */}
      <section id="metadata" className="py-16 lg:py-24 px-4 relative z-10 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-32">
          
          {/* Metadata Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-amber-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.muninn.metadata.contextLabel}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.muninn.metadata.duration.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.muninn.metadata.duration.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-amber-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.muninn.metadata.stackLabel}</span>
                <h3 className="text-xl font-bold text-white">{t.projectPages.muninn.metadata.stack.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.muninn.metadata.stack.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-amber-500/30">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.muninn.metadata.modelLabel}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.muninn.metadata.model.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.muninn.metadata.model.description}</p>
              </div>
            </motion.div>
          </div>

          {/* A Jornada: Problema -> Objetivo -> Solução */}
          <div className="w-full relative pt-10">
            <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
               <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.muninn.journeySection.eyebrow}</span>
               <h2 className="text-4xl font-bold text-white">{t.projectPages.muninn.journeySection.title}</h2>
            </div>
            
            <JourneyAnimatedSection />
          </div>
        </div>
      </section>

      <div id="tech-stack">
        <TechStack 
          title={t.projectPages.muninn.techStack.title}
          description={t.projectPages.muninn.techStack.description}
          items={t.projectPages.muninn.techStack.items}
          accentColor="amber"
        />
      </div>

      {/* 3. FUNCIONALIDADES CORE (Doc-Style Zig-Zag) */}
      <section id="architecture" className="py-16 lg:py-24 px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-32">
          
          <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.architecture.eyebrow}</span>
            <h2 className="text-4xl font-bold text-white">{t.projectPages.common.architecture.title}</h2>
            <p className="mt-4 text-text-body text-base md:text-lg leading-relaxed">{t.projectPages.muninn.architectureIntro}</p>
          </div>

          {/* Feature 1: Domain Guard Pattern (Texto Esquerda, Code Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-amber-500 pl-3">{t.projectPages.muninn.features.f1.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.muninn.features.f1.title}{" "}
                <FeatureHighlight text={t.projectPages.muninn.features.f1.highlight} className="text-amber-500" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.muninn.features.f1.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.muninn.features.f1.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.muninn.features.f1.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 color="amber"
                 snippets={[
                   {
                     title: "Outbox — registro de evento",
                     code: `public class OutboxMessage
{
    public Guid Id { get; set; }
    public string Type { get; set; } = "";
    public string Payload { get; set; } = "";
    public DateTimeOffset CreatedAt { get; set; }
    public bool Processed { get; set; }
}`
                   },
                   {
                     title: "Transação: lead + outbox",
                     code: `await using var tx = await _db.Database
    .BeginTransactionAsync(ct);

await _db.Leads.AddAsync(lead, ct);
await _db.Outbox.AddAsync(new OutboxMessage
{
    Type = nameof(LeadSubmittedEvent),
    Payload = JsonSerializer.Serialize(evt),
    CreatedAt = DateTimeOffset.UtcNow
}, ct);

await _db.SaveChangesAsync(ct);
await tx.CommitAsync(ct);`
                   },
                   {
                     title: "Worker → SQS",
                     code: `var pending = await _db.Outbox
    .Where(m => !m.Processed)
    .OrderBy(m => m.CreatedAt)
    .Take(50)
    .ToListAsync(ct);

foreach (var msg in pending)
{
    await _sqs.SendMessageAsync(_queueUrl, msg.Payload, ct);
    msg.Processed = true;
}
await _db.SaveChangesAsync(ct);`
                   }
                 ]}
               />
            </div>
          </div>

          {/* Feature 2: Rich Aggregate (Code Esquerda, Texto Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-1">
                <CodeCarousel 
                  color="amber"
                  snippets={[
                    {
                      title: "JWT Bearer",
                      code: `services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(key)
        };
    });`
                    },
                    {
                      title: "Upload KYC → S3",
                      code: `var req = new PutObjectRequest
{
    BucketName = _options.KycBucket,
    Key = $"{tenantId}/{documentId}.pdf",
    InputStream = stream,
    ContentType = "application/pdf",
    ServerSideEncryptionMethod = ServerSideEncryptionMethod.AES256
};
await _s3.PutObjectAsync(req, ct);`
                    },
                    {
                      title: "Status do documento",
                      code: `public enum KycDocumentStatus
{
    PendingReview,
    Approved,
    Rejected
}

public void Approve(Guid docId)
{
    var doc = _db.KycDocuments.Find(docId)
        ?? throw new NotFoundException();
    doc.Status = KycDocumentStatus.Approved;
}`
                    }
                  ]}
                />
            </div>
            <div className="space-y-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-amber-500 pl-3">{t.projectPages.muninn.features.f2.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.muninn.features.f2.title}{" "}
                <FeatureHighlight text={t.projectPages.muninn.features.f2.highlight} className="text-amber-500" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.muninn.features.f2.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.muninn.features.f2.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.muninn.features.f2.checks[1]}</li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Event Bus (Texto Esquerda, Code Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-amber-500 pl-3">{t.projectPages.muninn.features.f3.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.muninn.features.f3.title}{" "}
                <FeatureHighlight text={t.projectPages.muninn.features.f3.highlight} className="text-amber-500" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.muninn.features.f3.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.muninn.features.f3.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.muninn.features.f3.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 color="amber"
                 snippets={[
                   {
                     title: "Localização (i18n)",
                     code: `services.AddLocalization(options =>
{
    options.ResourcesPath = "Resources";
});

services.Configure<RequestLocalizationOptions>(o =>
{
    o.DefaultRequestCulture = new RequestCulture("en-CA");
    o.SupportedCultures = new[] {
        new CultureInfo("en-CA"),
        new CultureInfo("fr-CA")
    };
});`
                   },
                   {
                     title: "Contexto de tenant",
                     code: `public interface ITenantContext
{
    string? TenantId { get; }
}

public class TenantContext : ITenantContext
{
    public string? TenantId { get; set; }
}`
                   },
                   {
                     title: "Pipeline: cultura + tenant",
                     code: `app.UseRequestLocalization();

app.Use(async (ctx, next) =>
{
    var tenant = ctx.Request.Headers["X-Tenant-Id"].FirstOrDefault();
    ctx.RequestServices.GetRequiredService<TenantContext>()
        .TenantId = tenant;
    await next();
});`
                   }
                 ]}
               />
            </div>
          </div>

        </div>
      </section>

      <ContactCTA variant="inline" accentColor="amber-500" />

      {/* 4. RESULTADOS (High Impacto Visual) */}
      <section id="results" className="pt-20 pb-8 lg:pt-32 lg:pb-16 px-4 relative overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-amber-500 rounded-full blur-[180px] opacity-[0.08]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase block mb-2">{t.projectPages.muninn.results.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.projectPages.muninn.results.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(["m1", "m2", "m3", "m4"] as const).map((key, i) => {
              const card = t.projectPages.muninn.results[key];
              const Icon = muninnResultCardIcons[i];
              return (
                <motion.div
                  key={key}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, borderColor: "rgba(245, 158, 11, 0.45)" }}
                  className="group bg-[#111111]/90 border border-amber-500/25 p-8 rounded-2xl text-left shadow-[0_0_24px_rgba(245,158,11,0.06)] flex flex-col justify-center min-h-[180px] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mb-4 shrink-0 transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">{card.value}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{card.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div id="cta" className="pt-16 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-bold text-white max-w-xl">{t.projectPages.muninn.cta.title}</h3>
            <p className="text-white/60 mb-4 max-w-xl">{t.projectPages.muninn.cta.description}</p>
            <Link href="/#contact" className={`bg-amber-500 ${ACCENT.hoverBg} text-black px-10 py-4 rounded-full font-bold transition-all text-lg ${ACCENT.ctaShadow} ${ACCENT.ctaShadowHover} hover:scale-105`}>
              {t.projectPages.muninn.cta.button}
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"]
  });

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto relative px-4">
      
      {/* LINHA DE PROGRESSO (APENAS DESKTOP) */}
      <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-white/10 rounded-full z-0 overflow-hidden">
        <style jsx>{`
          .anim-progress-muninn { transform-origin: left; transform: scaleX(var(--progress)); width: 100%; height: 100%; }
        `}</style>
        <motion.div 
          className="anim-progress-muninn bg-gradient-to-r from-red-500 via-amber-500 to-lime-primary shadow-[0_0_15px_rgba(163,230,53,0.3)]"
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
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.muninn.journey.problemHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.muninn.journey.problem}
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
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.muninn.journey.objectiveHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.muninn.journey.objective}
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
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.muninn.journey.solutionHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.muninn.journey.solution}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function CodeCarousel({ snippets, color = "amber" }: { snippets: { title: string, code: string }[], color?: "amber" | "red" }) {
  const [index, setIndex] = useState(0);
  const colorClass = color === "amber" ? "text-amber-500 border-amber-500/30" : "text-red-500 border-red-500/30";
  const glowClass = color === "amber" ? "shadow-[0_0_20px_rgba(245,158,11,0.1)]" : "shadow-[0_0_20px_rgba(239,68,68,0.1)]";
  const dotColor = color === "amber" ? "bg-amber-500" : "bg-red-500";

  const next = () => setIndex((prev) => (prev + 1) % snippets.length);
  const prev = () => setIndex((prev) => (prev - 1 + snippets.length) % snippets.length);

  return (
    <div className={`w-full h-full bg-[#09090b] rounded-2xl border border-white/10 overflow-hidden flex flex-col ${glowClass}`}>
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
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

      {/* Footer */}
      <div className="p-3 border-t border-white/5 bg-white/[0.01] flex justify-between items-center">
         <span className="text-[9px] text-white/20 font-mono">Muninn Engine v1.0</span>
         <div className="flex gap-1">
            {snippets.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all ${i === index ? `${dotColor} w-3` : "bg-white/10"}`} />
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

    if (part.startsWith("//")) {
      return <span key={i} className="text-[#6A9955] italic">{part}</span>;
    }
    if (part.startsWith("\"")) {
      return <span key={i} className="text-[#CE9178]">{part}</span>;
    }
    if (/^(if|else|return|await|throw|foreach|in|using|namespace|where)$/.test(part)) {
      return <span key={i} className="text-[#C586C0]">{part}</span>;
    }
    if (/^(public|private|protected|internal|class|interface|enum|struct|void|async|static|readonly|var|new|typeof|base|nameof)$/.test(part)) {
      return <span key={i} className="text-[#569CD6]">{part}</span>;
    }
    if (/^(string|int|decimal|DateTimeOffset|DateTime|TimeSpan|Task|Guid|[A-Z][a-zA-Z0-9_]*)$/.test(part)) {
       return <span key={i} className="text-[#4EC9B0]">{part}</span>;
    }
    if (part.endsWith("(") || (i > 0 && /^[a-z][a-zA-Z0-9_]*$/.test(part) && parts[i+1]?.startsWith("("))) {
       return <span key={i} className="text-[#DCDCAA]">{part}</span>;
    }

    return part;
  });
}

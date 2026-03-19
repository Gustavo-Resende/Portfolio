"use client";

import { useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Code2, Briefcase, Target, Lightbulb, AlertTriangle, Server, TrendingUp, ChevronLeft, ChevronRight, MessageSquare, Bell, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectHeader } from "@/components/ProjectHeader";
import { BackToTop } from "@/components/BackToTop";
import { ContactCTA } from "@/components/ContactCTA";
import { TechStack } from "@/components/TechStack";
import { ImageCarousel } from "@/components/ImageCarousel";

export default function BotFaturaPage() {
  const { t } = useLanguage();
  const botFaturaImages = [
    {
      src: "/images/projects/bot-fatura/screenshot1.png",
      alt: "BotFatura - Dashboard",
    },
    {
      src: "/images/projects/bot-fatura/screenshot2.png",
      alt: "BotFatura - WhatsApp",
    },
    {
      src: "/images/projects/bot-fatura/screenshot3.png",
      alt: "BotFatura - Configurações",
    },
    {
      src: "/images/projects/bot-fatura/screenshot4.png",
      alt: "BotFatura - Clientes",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col font-sans bg-black text-white relative selection:bg-lime-primary/30 selection:text-white">
      <ProjectHeader 
        projectName="Bot-Fatura" 
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

      {/* Background preto puro */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a0a0a_0%,_#030303_100%)] opacity-80 mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')]"></div>
      </div>

      {/* 1. PROJECT HERO */}
      <section id="hero" className="relative w-full pt-32 pb-20 px-4 min-h-[70vh] flex items-center border-b border-white/5 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-center text-center space-y-8 lg:items-start lg:text-left"
          >


            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Bot-Fatura
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
                {(() => {
                  const parts = t.projectPages.botFatura.hero.split(/<\/?accent>/);
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] group flex items-center justify-center"
          >
            <ImageCarousel images={botFaturaImages} accentColor="lime" />
          </motion.div>

        </div>
      </section>

      {/* 2. METADATA E JORNADA DO PROJETO */}
      <section id="metadata" className="py-24 px-4 relative z-10 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-32">

          {/* Metadata Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-white/20">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.duration}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.botFatura.metadata.duration.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.botFatura.metadata.duration.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-white/20">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.stack}</span>
                <h3 className="text-xl font-bold text-white">{t.projectPages.botFatura.metadata.stack.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.botFatura.metadata.stack.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-white/20">
              <div className="w-12 h-12 rounded-xl bg-lime-primary/10 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-lime-primary" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.model}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.botFatura.metadata.model.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.botFatura.metadata.model.description}</p>
              </div>
            </motion.div>
          </div>

          {/* A Jornada: Problema -> Objetivo -> Solução */}
          <div className="w-full relative pt-10">
            <div className="text-center mb-24">
               <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.journey.eyebrow}</span>
               <h2 className="text-4xl font-bold text-white">{t.projectPages.common.journey.title}</h2>
            </div>

            <JourneyAnimatedSection />
          </div>
        </div>
      </section>

      <div id="tech-stack">
        <TechStack 
          title={t.projectPages.botFatura.techStack.title}
          description={t.projectPages.botFatura.techStack.description}
          items={t.projectPages.botFatura.techStack.items}
          accentColor="lime"
        />
      </div>

      {/* 3. FUNCIONALIDADES CORE (Zig-Zag) */}
      <section id="architecture" className="py-24 px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto space-y-32">

          <div className="text-center mb-16">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.botFatura.architecture.eyebrow}</span>
            <h2 className="text-4xl font-bold text-white">{t.projectPages.botFatura.architecture.title}</h2>
          </div>

          {/* Feature 1 (Texto Esquerda, Imagem Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">{t.projectPages.botFatura.features.f1.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.botFatura.features.f1.title} <span className="text-lime-primary">{t.projectPages.botFatura.features.f1.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.botFatura.features.f1.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.botFatura.features.f1.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.botFatura.features.f1.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel
                 snippets={[
                   {
                     title: "Fatura Core Domain",
                     code: `public class Fatura : Entity
{
    public decimal Valor { get; private set; }
    public DateTime DataVencimento { get; private set; }
    public StatusFatura Status { get; private set; }

    // Controle de Régua de Cobrança
    public bool Lembrete3DiasEnviado { get; private set; }
    public bool CobrancaDiaEnviada { get; private set; }
    public bool CobrancaAposVencimentoEnviada { get; private set; }

    public Result MarcarComoPaga()
    {
        if (Status == StatusFatura.Paga)
            return Result.Error("Esta fatura já está paga.");

        Status = StatusFatura.Paga;
        return Result.Success();
    }
}`
                   },
                   {
                     title: "Régua de Cobrança Service",
                     code: `public async Task ProcessarReguaAsync(CancellationToken ct)
{
    var faturas = await _repo.GetFaturasPendentesAsync(ct);
    var hoje = DateTime.UtcNow.Date;

    foreach (var fatura in faturas)
    {
        var diasParaVencimento = (fatura.DataVencimento - hoje).Days;

        if (diasParaVencimento == 3 && !fatura.Lembrete3DiasEnviado)
            await EnviarLembreteAsync(fatura, TipoMensagem.Lembrete, ct);
        else if (diasParaVencimento == 0 && !fatura.CobrancaDiaEnviada)
            await EnviarLembreteAsync(fatura, TipoMensagem.Vencimento, ct);
        else if (diasParaVencimento < 0 && !fatura.CobrancaAposVencimentoEnviada)
            await EnviarLembreteAsync(fatura, TipoMensagem.Atraso, ct);
    }
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
                      title: "Evolution API Client",
                      code: `public async Task<bool> SendWhatsAppMessageAsync(string jid, string text)
{
    var url = $"BaseUrl/message/sendText/{InstanceName}";
    var body = new {
        number = jid,
        options = new { delay = 1200, presence = "composing" },
        text = text
    };

    var response = await httpClient.PostAsJsonAsync(url, body);
    return response.IsSuccessStatusCode;
}`
                    },
                    {
                      title: "Template Engine",
                      code: `public string RenderTemplate(string template, FaturaData data)
{
    return template
        .Replace("{nome}", data.NomeCliente)
        .Replace("{valor}", data.Valor.ToString("C"))
        .Replace("{vencimento}", data.DataVencimento.ToString("dd/MM"))
        .Replace("{link_pix}", data.LinkPagamento);
}`
                    }
                  ]}
                />
            </div>
            <div className="space-y-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-amber-500 pl-3">{t.projectPages.botFatura.features.f2.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.botFatura.features.f2.title} <span className="text-amber-500">{t.projectPages.botFatura.features.f2.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.botFatura.features.f2.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.botFatura.features.f2.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-amber-500 w-4 h-4 shrink-0" /> {t.projectPages.botFatura.features.f2.checks[1]}</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 (Texto Esquerda, Imagem Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-lime-primary pl-3">{t.projectPages.botFatura.features.f3.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.botFatura.features.f3.title} <span className="text-lime-primary">{t.projectPages.botFatura.features.f3.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.botFatura.features.f3.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.botFatura.features.f3.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-lime-primary w-4 h-4 shrink-0" /> {t.projectPages.botFatura.features.f3.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel
                 color="lime"
                 snippets={[
                   {
                     title: "Receipt Verification Service",
                     code: `public async Task<ConciliacaoResult> VerificarComprovanteAsync(
    Guid faturaId, Stream comprovanteStream, CancellationToken ct)
{
    var fatura = await _repo.GetByIdAsync(faturaId, ct);
    Guard.Against.Null(fatura, nameof(fatura));

    var dadosExtraidos = await _ocrService.ExtrairDadosAsync(comprovanteStream, ct);

    var match = dadosExtraidos.Valor == fatura.Valor
        && dadosExtraidos.Data >= fatura.DataVencimento.AddDays(-1);

    if (match)
    {
        fatura.MarcarComoPaga();
        await _erpClient.SincronizarPagamentoAsync(fatura, ct);
    }

    return new ConciliacaoResult(match, dadosExtraidos);
}`
                   },
                   {
                     title: "ERP Sync Client",
                     code: `public async Task SincronizarPagamentoAsync(Fatura fatura, CancellationToken ct)
{
    var payload = new {
        invoice_id = fatura.CodigoExterno,
        amount_paid = fatura.Valor,
        paid_at = DateTime.UtcNow,
        source = "bot-fatura-whatsapp"
    };

    var response = await _httpClient.PostAsJsonAsync(
        $"{_options.BaseUrl}/api/payments/confirm", payload, ct);

    response.EnsureSuccessStatusCode();
}`
                   }
                 ]}
               />
            </div>
          </div>

        </div>
      </section>

      <ContactCTA variant="inline" />

      {/* 4. RESULTADOS */}
      <section id="results" className="pt-32 pb-16 px-4 relative overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-lime-primary rounded-full blur-[180px] opacity-[0.03]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          <div className="text-center">
            <span className="text-lime-primary text-xs font-bold tracking-widest uppercase block mb-2">{t.projectPages.common.results.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.projectPages.common.results.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Metric 1 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-[#111] border border-white/10 p-8 rounded-3xl text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <Bell className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.botFatura.results.m1.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.botFatura.results.m1.label}</p>

               <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                 <motion.div
                   initial={{ width: "100%" }}
                   whileInView={{ width: "30%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                   className="h-full bg-lime-primary"
                 />
               </div>
             </motion.div>

             {/* Metric 2 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#111] border border-white/10 p-8 rounded-3xl text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <motion.div
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ repeat: Infinity, duration: 2 }}
               >
                 <Server className="w-8 h-8 text-lime-primary mb-4" />
               </motion.div>
               <h4 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(163,230,53,0.2)]">{t.projectPages.botFatura.results.m2.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.botFatura.results.m2.label}</p>
               <span className="mt-4 px-3 py-1 bg-lime-primary/10 text-lime-primary text-xs rounded-full border border-lime-primary/20 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-lime-primary animate-pulse" /> {t.projectPages.common.online}
               </span>
             </motion.div>

             {/* Metric 3 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-[#111] border border-white/10 p-8 rounded-3xl text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <MessageSquare className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.botFatura.results.m3.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.botFatura.results.m3.label}</p>

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

             {/* Metric 4 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="bg-[#111] border border-white/10 p-8 rounded-3xl text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <TrendingUp className="w-8 h-8 text-lime-primary mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.botFatura.results.m4.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.botFatura.results.m4.label}</p>

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
            <Link href="/#contact" className="bg-lime-primary hover:bg-[#b4f04b] text-black px-10 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_30px_rgba(163,230,53,0.15)] hover:shadow-[0_0_40px_rgba(163,230,53,0.3)] hover:scale-105">
              {t.projectPages.common.cta.button}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"]
  });

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto relative px-4">

      {/* LINHA DE PROGRESSO (APENAS DESKTOP) */}
      <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-white/10 rounded-full z-0 overflow-hidden">
        <style jsx>{`
          .anim-progress { transform-origin: left; transform: scaleX(var(--progress)); width: 100%; height: 100%; }
        `}</style>
        <motion.div
          className="anim-progress bg-lime-primary shadow-[0_0_8px_rgba(163,230,53,0.3)]"
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
              {t.projectPages.botFatura.journey.problem}
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
              {t.projectPages.botFatura.journey.objective}
            </p>
          </div>
        </div>

        {/* Checkpoint 3 */}
        <div className="flex flex-col items-center text-center gap-6 relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once:true, margin: "-100px" }}
            className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full bg-black border-2 border-lime-primary/80 flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.15)]"
          >
             <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-lime-primary" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.projectPages.common.journey.solution}</h3>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.botFatura.journey.solution}
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
  const glowClass = color === "lime" ? "shadow-[0_0_15px_rgba(163,230,53,0.05)]" : color === "amber" ? "shadow-[0_0_15px_rgba(245,158,11,0.05)]" : "shadow-[0_0_15px_rgba(239,68,68,0.05)]";

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
         <span className="text-[9px] text-white/20 font-mono">Bot-Fatura Engine v1.0</span>
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

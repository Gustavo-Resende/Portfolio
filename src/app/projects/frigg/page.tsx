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
  Building2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectHeader } from "@/components/ProjectHeader";
import { BackToTop } from "@/components/BackToTop";
import { ContactCTA } from "@/components/ContactCTA";
import { TechStack } from "@/components/TechStack";
import { ImageCarousel } from "@/components/ImageCarousel";
import { FeatureHighlight } from "@/components/FeatureHighlight";

const friggResultCardIcons = [Building2, MessageCircle, ShieldCheck, Rocket] as const;

function renderHeroWithAccent(text: string) {
  const parts = text.split(/<\/?accent>/);
  if (parts.length < 3) return text;
  return (
    <>
      {parts[0]}
      <span className="text-purple-400 font-semibold">{parts[1]}</span>
      {parts[2]}
    </>
  );
}

export default function FriggProject() {
  const { t } = useLanguage();

  const friggImages = [
    { src: "/images/projects/frigg/screenshot1.png", alt: "Frigg - Dashboard" },
    { src: "/images/projects/frigg/screenshot2.png", alt: "Frigg - Financeiro" },
    { src: "/images/projects/frigg/screenshot3.png", alt: "Frigg - Imóveis" },
    { src: "/images/projects/frigg/screenshot4.png", alt: "Frigg - Login" },
  ];

  return (
    <main className="flex min-h-screen flex-col font-sans bg-black text-white relative selection:bg-purple-500/30 selection:text-white">
      <ProjectHeader 
        projectName="Frigg" 
        accentColor="purple-500"
        sections={[
          { name: t.projectPages.common.sections.overview, href: "#hero" },
          { name: t.projectPages.common.sections.journey, href: "#metadata" },
          { name: t.projectPages.common.sections.techStack, href: "#tech-stack" },
          { name: t.projectPages.common.sections.architecture, href: "#architecture" },
          { name: t.projectPages.common.sections.results, href: "#results" },
          { name: t.projectPages.common.sections.contact, href: "#cta" },
        ]}
      />

      {/* Background com tom roxo */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#150d25_0%,_#050505_100%)] opacity-80 mix-blend-screen"></div>
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
                Frigg
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
                {renderHeroWithAccent(t.projectPages.frigg.hero)}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/#contact" className="bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> {t.projectPages.common.contactButton}
              </Link>
            </div>
          </motion.div>

          {/* Lado Direito: Print principal do Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.1)] bg-[#050505]/50 group flex items-center justify-center"
          >
            <ImageCarousel images={friggImages} accentColor="purple" />
          </motion.div>

        </div>
      </section>

      {/* 2. METADATA E JORNADA DO PROJETO */}
      <section id="metadata" className="py-16 lg:py-24 px-4 relative z-10 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-24 lg:space-y-32">
          
          {/* Metadata Cards (Ícones + Interativo) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-purple-500/30">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.frigg.metadata.contextLabel}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.frigg.metadata.duration.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.frigg.metadata.duration.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-purple-500/30">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.frigg.metadata.stackLabel}</span>
                <h3 className="text-xl font-bold text-white">{t.projectPages.frigg.metadata.stack.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.frigg.metadata.stack.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-purple-500/30">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.frigg.metadata.modelLabel}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.frigg.metadata.model.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.frigg.metadata.model.description}</p>
              </div>
            </motion.div>
          </div>

          {/* A Jornada: Problema -> Objetivo -> Solução (Animada) */}
          <div className="w-full relative pt-10">
            <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
               <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.frigg.journeySection.eyebrow}</span>
               <h2 className="text-4xl font-bold text-white">{t.projectPages.frigg.journeySection.title}</h2>
            </div>
            
            <JourneyAnimatedSection />
          </div>
        </div>
      </section>

      <div id="tech-stack">
        <TechStack 
          title={t.projectPages.frigg.techStack.title}
          description={t.projectPages.frigg.techStack.description}
          items={t.projectPages.frigg.techStack.items}
          accentColor="purple"
        />
      </div>

      {/* 3. FUNCIONALIDADES CORE (Doc-Style Zig-Zag) */}
      <section id="architecture" className="py-16 lg:py-24 px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto space-y-24 lg:space-y-32">
          
          <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.architecture.eyebrow}</span>
            <h2 className="text-4xl font-bold text-white">{t.projectPages.common.architecture.title}</h2>
            <p className="mt-4 text-text-body text-base md:text-lg leading-relaxed">{t.projectPages.frigg.architectureIntro}</p>
          </div>

          {/* Feature 1 (Texto Esquerda, Imagem Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-purple-500 pl-3">{t.projectPages.frigg.features.f1.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.frigg.features.f1.title}{" "}
                <FeatureHighlight text={t.projectPages.frigg.features.f1.highlight} className="text-purple-400" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.frigg.features.f1.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-purple-400 w-4 h-4 shrink-0" /> {t.projectPages.frigg.features.f1.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-purple-400 w-4 h-4 shrink-0" /> {t.projectPages.frigg.features.f1.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 snippets={[
                   {
                     title: "Webhook Evolution (WhatsApp)",
                     code: `[HttpPost("webhook")]
public async Task<IActionResult> ReceiveMessage(
    [FromBody] EvolutionWebhookDto payload, CancellationToken ct)
{
    var text = payload.Data?.Message?.Conversation;
    if (string.IsNullOrWhiteSpace(text))
        return Ok();

    await _orchestrator.HandleUserMessageAsync(
        payload.Data!.Key!.RemoteJid!, text, ct);
    return Ok();
}`
                   },
                   {
                     title: "OpenAI — consulta assistida",
                     code: `var completion = await _openAI.GetChatCompletionsAsync(
    new ChatCompletionsOptions
    {
        DeploymentName = _options.Deployment,
        Messages =
        {
            new ChatRequestSystemMessage(_systemPromptFrigg),
            new ChatRequestUserMessage(userText)
        },
        Temperature = 0.2f,
        MaxTokens = 500
    }, ct);

var answer = completion.Value.Choices[0].Message.Content;`
                   },
                   {
                     title: "Contexto do assistente",
                     code: `private const string _systemPromptFrigg = """
Você é o assistente do Frigg. Ajude o locatário com:
- saldo e vencimentos em linguagem simples
- status de contrato e documentos pendentes
Não invente valores: use apenas dados retornados pelas tools/API.
""";`
                   }
                 ]}
               />
            </div>
          </div>

          {/* Feature 2 (Imagem Esquerda, Texto Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-1">
                <CodeCarousel 
                  color="purple"
                  snippets={[
                    {
                      title: "Publicar evento no SQS",
                      code: `await _sqs.SendMessageAsync(new SendMessageRequest
{
    QueueUrl = _options.ContractsQueueUrl,
    MessageBody = JsonSerializer.Serialize(new ContractSignedEvent
    {
        ContractId = contract.Id,
        ResidenceId = contract.ResidenceId,
        SignedAt = DateTimeOffset.UtcNow
    }),
    MessageGroupId = contract.ResidenceId.ToString()
}, ct);`
                    },
                    {
                      title: "Polly — retry no HttpClient",
                      code: `services.AddHttpClient<IClicksignClient, ClicksignClient>()
    .AddTransientHttpErrorPolicy(p => p
        .WaitAndRetryAsync(3, attempt =>
            TimeSpan.FromSeconds(Math.Pow(2, attempt))))
    .AddTransientHttpErrorPolicy(p => p
        .CircuitBreakerAsync(5, TimeSpan.FromSeconds(30)));`
                    },
                    {
                      title: "Consumer assíncrono (fila)",
                      code: `public class ContractEventsWorker : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken ct)
    {
        while (!ct.IsCancellationRequested)
        {
            var messages = await _sqs.ReceiveMessagesAsync(ct);
            foreach (var msg in messages)
            {
                await _handler.HandleAsync(msg.Body, ct);
                await _sqs.DeleteMessageAsync(msg.ReceiptHandle, ct);
            }
        }
    }
}`
                    }
                  ]}
                />
            </div>
            <div className="space-y-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-purple-500 pl-3">{t.projectPages.frigg.features.f2.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.frigg.features.f2.title}{" "}
                <FeatureHighlight text={t.projectPages.frigg.features.f2.highlight} className="text-purple-400" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.frigg.features.f2.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-purple-400 w-4 h-4 shrink-0" /> {t.projectPages.frigg.features.f2.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-purple-400 w-4 h-4 shrink-0" /> {t.projectPages.frigg.features.f2.checks[1]}</li>
              </ul>
            </div>
          </div>

          {/* Feature 3 (Texto Esquerda, Imagem Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-purple-500 pl-3">{t.projectPages.frigg.features.f3.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.frigg.features.f3.title}{" "}
                <FeatureHighlight text={t.projectPages.frigg.features.f3.highlight} className="text-purple-400" />
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.frigg.features.f3.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm md:text-base flex flex-col items-center lg:items-start px-2 max-w-[26rem]">
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-purple-400 w-4 h-4 shrink-0" /> {t.projectPages.frigg.features.f3.checks[0]}</li>
                <li className="flex items-start gap-3 text-white/80 text-left break-words leading-relaxed"><CheckCircle2 className="text-purple-400 w-4 h-4 shrink-0" /> {t.projectPages.frigg.features.f3.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 color="purple"
                 snippets={[
                   {
                     title: "Clicksign — criar documento",
                     code: `var response = await _http.PostAsJsonAsync(
    $"{_options.BaseUrl}/api/v1/documents?access_token={token}",
    new {
        document = new {
            path = "/templates/contrato_locacao.pdf",
            template_data = templateData,
            auto_close = true,
            locale = "pt-BR"
        }
    }, ct);
response.EnsureSuccessStatusCode();`
                   },
                   {
                     title: "AWS SES — notificação",
                     code: `await _ses.SendEmailAsync(new SendEmailRequest
{
    Source = _options.FromAddress,
    Destination = new Destination { ToAddresses = { to } },
    Message = new Message
    {
        Subject = new Content("Contrato assinado — Frigg"),
        Body = new Body
        {
            Html = new Content(htmlBody)
        }
    }
}, ct);`
                   },
                   {
                     title: "S3 — contrato arquivado",
                     code: `await _s3.PutObjectAsync(new PutObjectRequest
{
    BucketName = _options.ContractsBucket,
    Key = $"{tenantId}/{contractId}/contrato-assinado.pdf",
    InputStream = pdfStream,
    ContentType = "application/pdf",
    ServerSideEncryptionMethod = ServerSideEncryptionMethod.AES256
}, ct);`
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
          <div className="w-[400px] h-[400px] bg-purple-500 rounded-full blur-[180px] opacity-[0.08]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-12 lg:space-y-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase block mb-2">{t.projectPages.frigg.results.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.projectPages.frigg.results.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(["m1", "m2", "m3", "m4"] as const).map((key, i) => {
              const card = t.projectPages.frigg.results[key];
              const Icon = friggResultCardIcons[i];
              return (
                <motion.div
                  key={key}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4, borderColor: "rgba(168, 85, 247, 0.45)" }}
                  className="group bg-[#111111]/90 border border-purple-500/25 p-8 rounded-2xl text-left shadow-[0_0_24px_rgba(168,85,247,0.06)] flex flex-col justify-center min-h-[180px] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 shrink-0 transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" strokeWidth={2} aria-hidden />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">{card.value}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{card.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div id="cta" className="pt-16 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-bold text-white max-w-xl">{t.projectPages.frigg.cta.title}</h3>
            <p className="text-white/60 mb-4 max-w-xl">{t.projectPages.frigg.cta.description}</p>
            <Link href="/#contact" className="bg-purple-500 hover:bg-purple-400 text-white px-10 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-105">
              {t.projectPages.frigg.cta.button}
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
          .anim-progress { transform-origin: left; transform: scaleX(var(--progress)); width: 100%; height: 100%; }
        `}</style>
        <motion.div 
          className="anim-progress bg-purple-500 shadow-[0_0_15px_#a855f7]"
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
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.frigg.journey.problemHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.frigg.journey.problem}
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
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.frigg.journey.objectiveHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.frigg.journey.objective}
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
            <p className="text-lg font-semibold text-white mb-2">{t.projectPages.frigg.journey.solutionHeadline}</p>
            <p className="text-text-muted leading-relaxed text-sm md:text-base">
              {t.projectPages.frigg.journey.solution}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function CodeCarousel({ snippets, color = "purple" }: { snippets: { title: string, code: string }[], color?: "purple" | "amber" | "red" }) {
  const [index, setIndex] = useState(0);
  const colorClass = color === "purple" ? "text-purple-400 border-purple-500/30" : color === "amber" ? "text-amber-500 border-amber-500/30" : "text-red-500 border-red-500/30";
  const glowClass = color === "purple" ? "shadow-[0_0_20px_rgba(168,85,247,0.1)]" : color === "amber" ? "shadow-[0_0_20px_rgba(245,158,11,0.1)]" : "shadow-[0_0_20px_rgba(239,68,68,0.1)]";

  const next = () => setIndex((prev) => (prev + 1) % snippets.length);
  const prev = () => setIndex((prev) => (prev - 1 + snippets.length) % snippets.length);

  return (
    <div className={`w-full h-full bg-[#09090b] rounded-2xl border border-white/10 overflow-hidden flex flex-col ${glowClass}`}>
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-purple-500/40" />
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
         <span className="text-[9px] text-white/20 font-mono">Frigg Engine v1.0</span>
         <div className="flex gap-1">
            {snippets.map((_, i) => (
              <div key={i} className={`w-1 h-1 rounded-full transition-all ${i === index ? "bg-purple-500 w-3" : "bg-white/10"}`} />
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

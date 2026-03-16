"use client";

import { useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, Code2, Briefcase, Target, Lightbulb, AlertTriangle, Zap, TrendingUp, ChevronLeft, ChevronRight, Brain, Search, Construction, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ProjectHeader } from "@/components/ProjectHeader";
import { BackToTop } from "@/components/BackToTop";
import { ContactCTA } from "@/components/ContactCTA";

export default function ResumaxProject() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen flex-col font-sans bg-black text-white relative selection:bg-blue-500/30 selection:text-white">
      <ProjectHeader 
        projectName="Resumax" 
        accentColor="blue-500"
        sections={[
          { name: t.projectPages.common.sections.overview, href: "#hero" },
          { name: t.projectPages.common.sections.journey, href: "#metadata" },
          { name: t.projectPages.common.sections.architecture, href: "#architecture" },
          { name: t.projectPages.common.sections.results, href: "#results" },
          { name: t.projectPages.common.sections.contact, href: "#cta" },
        ]}
      />

      {/* Background com tonalidade azul */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1628_0%,_#050505_100%)] opacity-80 mix-blend-screen"></div>
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
              <div className="flex items-center gap-3 flex-wrap">
                <motion.span 
                  animate={{ opacity: [1, 0.6, 1] }} 
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold tracking-widest uppercase"
                >
                  <Construction className="w-3 h-3" />
                  {t.projectPages.resumax.heroBadge}
                </motion.span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Resumax
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light max-w-xl leading-relaxed">
                {(() => {
                  const parts = t.projectPages.resumax.hero.split(/<\/?accent>/);
                  return <>{parts[0]}<span className="text-blue-500 font-semibold">{parts[1]}</span>{parts[2]}</>;
                })()}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-6 py-3 rounded-md font-bold flex items-center gap-2 cursor-default">
                <Construction className="w-4 h-4" /> {t.projectPages.resumax.comingSoon}
              </span>
              <Link href="/#contact" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4" /> {t.projectPages.common.contactButton}
              </Link>
            </div>
          </motion.div>

          {/* Lado Direito: Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.1)] bg-[#050505]/50 group flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4 text-white/5 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-current flex items-center justify-center">
                  <Brain className="w-8 h-8" />
               </div>
               <span className="text-xs font-mono tracking-widest uppercase">Placeholder for Hero Screenshot</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. METADATA E JORNADA DO PROJETO */}
      <section id="metadata" className="py-24 px-4 relative z-10 w-full border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Metadata Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-blue-500/30">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.resumax.metadata.status.label}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.resumax.metadata.status.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.resumax.metadata.status.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-blue-500/30">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.stack}</span>
                <h3 className="text-xl font-bold text-white">{t.projectPages.resumax.metadata.stack.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.resumax.metadata.stack.description}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-[#111111]/80 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col gap-4 transition-all hover:border-blue-500/30">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <span className="text-white/50 text-xs font-bold tracking-widest uppercase block mb-1">{t.projectPages.common.metadata.model}</span>
                <h3 className="text-2xl font-bold text-white">{t.projectPages.resumax.metadata.model.title}</h3>
                <p className="text-text-muted text-sm mt-2">{t.projectPages.resumax.metadata.model.description}</p>
              </div>
            </motion.div>
          </div>

          {/* A Jornada: Problema -> Objetivo -> Solução */}
          <div className="w-full relative pt-10">
            <div className="text-center mb-24">
               <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.journey.eyebrow}</span>
               <h2 className="text-4xl font-bold text-white">{t.projectPages.common.journey.title}</h2>
            </div>
            
            <JourneyAnimatedSection />
          </div>
        </div>
      </section>

      {/* 3. FUNCIONALIDADES CORE (Doc-Style Zig-Zag) */}
      <section id="architecture" className="py-24 px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto space-y-32">
          
          <div className="text-center mb-16">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2 block">{t.projectPages.common.architecture.eyebrow}</span>
            <h2 className="text-4xl font-bold text-white">{t.projectPages.common.architecture.title}</h2>
          </div>

          {/* Feature 1: Resume Aggregate (Texto Esquerda, Code Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-blue-500 pl-3">{t.projectPages.resumax.features.f1.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.resumax.features.f1.title} <span className="text-blue-400">{t.projectPages.resumax.features.f1.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.resumax.features.f1.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-blue-400 w-4 h-4 shrink-0" /> {t.projectPages.resumax.features.f1.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-blue-400 w-4 h-4 shrink-0" /> {t.projectPages.resumax.features.f1.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 color="blue"
                 snippets={[
                   {
                     title: "Resume Aggregate Root",
                     code: `public class Resume : BaseEntity
{
    public ContactInfo Contact { get; private set; }
    public string ProfessionalSummary { get; private set; }
    public SkillSet Skills { get; private set; }
    public string? TargetJobTitle { get; private set; }

    public IReadOnlyList<WorkExperience> Experiences => _experiences.AsReadOnly();
    public IReadOnlyList<Education> Educations => _educations.AsReadOnly();
    public IReadOnlyList<string> Certifications => _certifications.AsReadOnly();

    public static Resume Create(
        ContactInfo contact, string professionalSummary, SkillSet skills)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(professionalSummary);
        ArgumentNullException.ThrowIfNull(contact);
        ArgumentNullException.ThrowIfNull(skills);

        return new Resume {
            Contact = contact, ProfessionalSummary = professionalSummary,
            Skills = skills
        };
    }
}`
                   },
                   {
                     title: "SkillSet Value Object",
                     code: `// Value Object que categoriza habilidades para análise pela IA
public sealed record SkillSet(
    IReadOnlyList<string> Languages,
    IReadOnlyList<string> Frameworks,
    IReadOnlyList<string> Databases,
    IReadOnlyList<string> CloudTools,
    IReadOnlyList<string> Other)
{
    /// Retorna todas as habilidades em uma lista plana
    /// para análise de lacunas pela IA
    public IEnumerable<string> AllSkills =>
        Languages
            .Concat(Frameworks)
            .Concat(Databases)
            .Concat(CloudTools)
            .Concat(Other);
}`
                   },
                   {
                     title: "Adaptation Output Model",
                     code: `// Resultado estruturado da adaptação via IA
public sealed record AdaptedResumeOutput(
    string AdaptedMarkdown,
    IReadOnlyList<string> IdentifiedGaps,
    IReadOnlyList<string> AppliedAdaptations,
    string TargetRole,
    int AtsScore,      // 0-100
    string AtsScoreLabel  // "Alto" | "Médio" | "Baixo"
);

// Critérios para ATS Score:
// Alto (80-100): 80%+ dos requisitos da vaga
// Médio (50-79): 50-79% dos requisitos
// Baixo (0-49): menos de 50%`
                   }
                 ]}
               />
            </div>
          </div>

          {/* Feature 2: Gemini Integration (Code Esquerda, Texto Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-1">
                <CodeCarousel 
                  color="cyan"
                  snippets={[
                    {
                      title: "Gemini Adaptation Service",
                      code: `public async Task<AdaptedResumeOutput> AdaptAsync(
    string masterResumeMarkdown,
    string jobDescription,
    CancellationToken ct = default)
{
    var prompt = PromptBuilder.Build(masterResumeMarkdown, jobDescription);

    var requestBody = new {
        contents = new[] {
            new { parts = new[] { new { text = prompt } } }
        },
        generationConfig = new {
            temperature = config.Temperature,
            maxOutputTokens = config.MaxOutputTokens,
            responseMimeType = "application/json"
        }
    };

    var response = await httpClient.PostAsync(url, httpContent, ct);
    var apiResponse = await response.Content
        .ReadFromJsonAsync<GeminiApiResponse>(_jsonOptions, ct);
}`
                    },
                    {
                      title: "Response Processing & ATS Score",
                      code: `// Extrai e valida a resposta estruturada do Gemini
var rawText = apiResponse.Candidates
    .FirstOrDefault()?.Content?.Parts?.FirstOrDefault()?.Text
    ?? throw new InvalidOperationException(
        "Nenhum conteúdo retornado pela API do Gemini.");

// Remove possíveis code blocks de markdown
var cleanJson = rawText
    .Replace("\`\`\`json", string.Empty)
    .Replace("\`\`\`", string.Empty)
    .Trim();

var adaptedResume = JsonSerializer
    .Deserialize<GeminiAdaptedResume>(cleanJson, _jsonOptions);

// Clamp do ATS Score entre 0-100
var clampedScore = Math.Clamp(adaptedResume.AtsScore.Score, 0, 100);`
                    },
                    {
                      title: "Gemini Configuration",
                      code: `public sealed class GeminiOptions
{
    public const string SectionName = "Gemini";

    /// Chave de API do Google Gemini
    public string ApiKey { get; init; } = string.Empty;

    /// Modelo utilizado (ex: gemini-1.5-pro)
    public string Model { get; init; } = "gemini-1.5-pro";

    /// Máximo de tokens na resposta
    public int MaxOutputTokens { get; init; } = 8192;

    /// Temperatura: 0.0 = determinístico, 1.0 = criativo
    /// Valores baixos (0.2-0.4) para saídas estruturadas
    public float Temperature { get; init; } = 0.3f;
}`
                    }
                  ]}
                />
            </div>
            <div className="space-y-6 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-blue-500 pl-3">{t.projectPages.resumax.features.f2.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.resumax.features.f2.title} <span className="text-blue-400">{t.projectPages.resumax.features.f2.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.resumax.features.f2.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-cyan-400 w-4 h-4 shrink-0" /> {t.projectPages.resumax.features.f2.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-cyan-400 w-4 h-4 shrink-0" /> {t.projectPages.resumax.features.f2.checks[1]}</li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Prompt Engineering (Texto Esquerda, Code Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-white/50 text-sm font-mono tracking-widest uppercase block mb-4 border-l-2 border-blue-500 pl-3">{t.projectPages.resumax.features.f3.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {t.projectPages.resumax.features.f3.title} <span className="text-blue-400">{t.projectPages.resumax.features.f3.highlight}</span>
              </h2>
              <p className="text-text-body text-lg font-light pt-4 leading-relaxed max-w-xl">
                {t.projectPages.resumax.features.f3.description}
              </p>
              <ul className="space-y-3 pt-4 font-mono text-sm flex flex-col items-center lg:items-start">
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-blue-400 w-4 h-4 shrink-0" /> {t.projectPages.resumax.features.f3.checks[0]}</li>
                <li className="flex items-center gap-3 text-white/70 text-left"><CheckCircle2 className="text-blue-400 w-4 h-4 shrink-0" /> {t.projectPages.resumax.features.f3.checks[1]}</li>
              </ul>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3] order-2 lg:order-2">
               <CodeCarousel 
                 color="blue"
                 snippets={[
                   {
                     title: "Prompt Builder — Persona",
                     code: `internal static class PromptBuilder
{
    public static string Build(
        string masterResumeContent, string jobDescription) =>
    $$"""
    Você é um recrutador sênior de tecnologia e especialista
    em sistemas ATS com 15 anos de experiência contratando
    para empresas como Google, Nubank, iFood e scale-ups.

    Sua missão é adaptar o currículo do candidato para a vaga,
    maximizando a aprovação em sistemas de triagem automática
    (ATS) e o impacto visual nos recrutadores humanos.

    REGRAS INVIOLÁVEIS:
    1. NUNCA invente experiências ou resultados.
    2. Apenas reordene, reformule e enfatize o que existe.
    3. Preserve a veracidade total.
    4. Não adicione certificações fictícias.
    """;
}`
                   },
                   {
                     title: "Ethical Guardrails",
                     code: `// === AÇÕES PROIBIDAS ===
// Violação de qualquer item invalida o resultado:

// - NÃO adicione URL de LinkedIn se não existir no original
// - NÃO adicione localização se não existir no original
// - NÃO invente métricas numéricas (%, R$, usuários)
// - NÃO copie dados do Winner Template
// - NÃO adicione certificações que não estejam no original

// Liste no campo "fabrication_check" tudo que
// você verificou contra o original.

// Fabrication Check automatizado:
if (adaptedResume.FabricationCheck is { Count: > 0 })
{
    logger.LogInformation(
        "Fabrication check ({Count} itens): {Items}",
        adaptedResume.FabricationCheck.Count,
        string.Join(" | ", adaptedResume.FabricationCheck));
}`
                   },
                   {
                     title: "Quality Instructions",
                     code: `// INSTRUÇÕES DE QUALIDADE (Winner Template como referência):

// 1. RESUMO PROFISSIONAL: 3-4 linhas específicas
//    para a vaga, com stack e resultado quantificado

// 2. EXPERIÊNCIAS — Método XYZ:
//    "Fiz X, o que resultou em Y, usando Z"
//    Se NÃO contém métricas: use impacto qualitativo
//    NUNCA invente números

// 3. ORDENAÇÃO: Seções mais relevantes para a vaga primeiro

// 4. KEYWORDS: Incorpore termos-chave da vaga naturalmente

// 5. HABILIDADES: Destaque techs da vaga que o candidato possui

// 6. FORMATO: Markdown limpo para conversão em PDF`
                   }
                 ]}
               />
            </div>
          </div>

        </div>
      </section>

      <ContactCTA variant="inline" />

      {/* 4. RESULTADOS (High Impacto Visual) */}
      <section id="results" className="pt-32 pb-16 px-4 relative overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-blue-500 rounded-full blur-[180px] opacity-[0.08]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-16">
          <div className="text-center">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase block mb-2">{t.projectPages.resumax.results.eyebrow}</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.projectPages.resumax.results.title}
            </h2>
            <p className="text-white/40 text-sm mt-3 font-mono">{t.projectPages.resumax.results.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* Metric 1 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} className="bg-[#111] border border-blue-500/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(59,130,246,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <Zap className="w-8 h-8 text-blue-400 mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.resumax.results.m1.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.resumax.results.m1.label}</p>
               
               <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                 <motion.div 
                   initial={{ width: "20%" }} 
                   whileInView={{ width: "85%" }} 
                   viewport={{ once: true }}
                   transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                   className="h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" 
                 />
               </div>
             </motion.div>
             
             {/* Metric 2 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="bg-[#111] border border-blue-500/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(59,130,246,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <motion.div
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ repeat: Infinity, duration: 2 }}
               >
                 <Brain className="w-8 h-8 text-blue-400 mb-4" />
               </motion.div>
               <h4 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">{t.projectPages.resumax.results.m2.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.resumax.results.m2.label}</p>
               <span className="mt-4 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> {t.projectPages.resumax.results.m2status}
               </span>
             </motion.div>

             {/* Metric 3 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="bg-[#111] border border-blue-500/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(59,130,246,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <Search className="w-8 h-8 text-blue-400 mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.resumax.results.m3.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.resumax.results.m3.label}</p>
               
               <div className="flex gap-2 mt-6 overflow-hidden w-full justify-center opacity-50">
                 {[1,2,3,4].map((i) => (
                   <motion.div 
                     key={i}
                     animate={{ x: [20, -20], opacity: [0, 1, 0] }}
                     transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                     className="w-2 h-2 rounded-full bg-blue-400"
                   />
                 ))}
               </div>
             </motion.div>

             {/* Metric 4 */}
             <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="bg-[#111] border border-blue-500/30 p-8 rounded-3xl text-center shadow-[0_0_30px_rgba(59,130,246,0.05)] relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
               <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
               <h4 className="text-5xl font-extrabold text-white mb-2">{t.projectPages.resumax.results.m4.value}</h4>
               <p className="text-white/60 font-medium text-sm">{t.projectPages.resumax.results.m4.label}</p>
               
               <div className="flex items-end gap-1.5 mt-6 h-8 justify-center">
                 {[40, 60, 50, 80, 100].map((height, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${height}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                     className="w-3 bg-blue-500 rounded-t-sm opacity-80"
                   />
                 ))}
               </div>
             </motion.div>
          </div>
          
          <div id="cta" className="pt-24 flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-bold text-white">{t.projectPages.common.cta.title}</h3>
            <p className="text-white/60 mb-4 max-w-xl">{t.projectPages.common.cta.description}</p>
            <Link href="/#contact" className="bg-blue-500 hover:bg-blue-400 text-white px-10 py-4 rounded-full font-bold transition-all text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:scale-105">
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
          .anim-progress-resumax { transform-origin: left; transform: scaleX(var(--progress)); width: 100%; height: 100%; }
        `}</style>
        <motion.div 
          className="anim-progress-resumax bg-blue-500 shadow-[0_0_15px_#3b82f6]"
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
              {t.projectPages.resumax.journey.problem}
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
              {t.projectPages.resumax.journey.objective}
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
              {t.projectPages.resumax.journey.solution}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function CodeCarousel({ snippets, color = "blue" }: { snippets: { title: string, code: string }[], color?: "blue" | "cyan" }) {
  const [index, setIndex] = useState(0);
  const colorClass = color === "blue" ? "text-blue-400 border-blue-500/30" : "text-cyan-400 border-cyan-400/30";
  const glowClass = color === "blue" ? "shadow-[0_0_20px_rgba(59,130,246,0.1)]" : "shadow-[0_0_20px_rgba(34,211,238,0.1)]";
  const dotColor = color === "blue" ? "bg-blue-500" : "bg-cyan-400";

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
         <span className="text-[9px] text-white/20 font-mono">Resumax Engine v0.1 (Preview)</span>
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
  const parts = code.split(/(\/\/.*|"[^"]*"|\b(?:public|private|protected|internal|class|interface|enum|struct|void|string|int|decimal|float|DateTimeOffset|DateTime|TimeSpan|async|await|task|Task|foreach|in|var|new|throw|if|else|return|using|namespace|static|typeof|base|where|params|readonly|nameof|sealed|record|const)\b|\b[A-Z][a-zA-Z0-9_]*\b|\b[a-z][a-zA-Z0-9_]*\b(?=\())/g);

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
    if (/^(public|private|protected|internal|class|interface|enum|struct|void|async|static|readonly|var|new|typeof|base|nameof|sealed|record|const)$/.test(part)) {
      return <span key={i} className="text-[#569CD6]">{part}</span>;
    }
    if (/^(string|int|decimal|float|DateTimeOffset|DateTime|TimeSpan|Task|Guid|[A-Z][a-zA-Z0-9_]*)$/.test(part)) {
       return <span key={i} className="text-[#4EC9B0]">{part}</span>;
    }
    if (part.endsWith("(") || (i > 0 && /^[a-z][a-zA-Z0-9_]*$/.test(part) && parts[i+1]?.startsWith("("))) {
       return <span key={i} className="text-[#DCDCAA]">{part}</span>;
    }

    return part;
  });
}

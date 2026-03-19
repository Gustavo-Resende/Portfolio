import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { BackToTop } from "@/components/BackToTop";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-8 relative overflow-hidden">

      {/* Background Container (z-0 to prevent being swallowed by root stacking context) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_#122010_0%,_#050505_100%)] opacity-80 mix-blend-screen"></div>

        {/* Texture Layer (Noise pattern) */}
        <div className="fixed inset-0 opacity-[0.05] bg-[url('/noise.svg')]"></div>

        {/* Elements focused on Hero have been moved to the Hero component to constrain the glow */}
      </div>

      <Header />

      <Hero />
      <ProjectCard />
      <Skills />
      <About />
      <Testimonials />
      <ContactForm />

      <BackToTop />
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MouseGlow } from "@/components/MouseGlow";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Resende | Full-Stack .NET Developer",
  description: "Portfólio de Gustavo Resende, Desenvolvedor .NET Especialista em Clean Architecture & DDD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen selection:bg-lime-primary/30 selection:text-lime-primary`}>
        <LanguageProvider>
          <MouseGlow />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MouseGlow } from "@/components/MouseGlow";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavo Resende | Full-Stack .NET Developer",
  description: "Portfólio de Gustavo Resende, Desenvolvedor .NET Especialista em Clean Architecture & DDD.",
  metadataBase: new URL("https://gustavo-resende.dev"),
  openGraph: {
    title: "Gustavo Resende | Full-Stack .NET Developer",
    description: "Backend developer specializing in .NET, Clean Architecture & DDD. Building scalable APIs and high-performance systems.",
    url: "https://gustavo-resende.dev",
    siteName: "Gustavo Resende Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Resende | Full-Stack .NET Developer",
    description: "Backend developer specializing in .NET, Clean Architecture & DDD.",
  },
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

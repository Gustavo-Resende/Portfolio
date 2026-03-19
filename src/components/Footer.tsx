"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full text-center py-6 text-text-muted text-sm relative z-10 border-t border-white/5 mt-8 lg:mt-16 max-w-5xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p>&copy; {new Date().getFullYear()} Gustavo Resende. {t.footer.builtWith}</p>
        <span className="hidden sm:inline text-white/10">|</span>
        <a href="/#contact" className="text-lime-primary hover:text-white transition-colors font-medium">
          {t.footer.contact} →
        </a>
      </div>
    </footer>
  );
}

"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full text-center py-6 text-text-muted text-sm relative z-10 border-t border-white/5 mt-16 max-w-5xl mx-auto">
      <p>&copy; {new Date().getFullYear()} Gustavo Resende. {t.footer.builtWith}</p>
    </footer>
  );
}

"use client";

import type { MouseEvent } from "react";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";

/** Mesmas classes do botão de contato do Header (home). */
const contactButtonClassName =
  "inline-flex items-center gap-2 bg-lime-primary hover:bg-[#b4f04b] text-black text-xs font-bold py-2 px-4 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95";

export function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const onContactClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full mt-auto relative z-10 border-t border-white/5 bg-black py-8 text-sm text-text-muted">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-5 text-center">
        <p className="text-text-body">
          &copy; {new Date().getFullYear()} {t.footer.tagline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-sm">
          <a
            href="https://www.linkedin.com/in/guresendec"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-primary hover:text-white transition-colors font-medium px-1"
          >
            {t.footer.linkedinLabel}
          </a>
          <span className="text-white/25 select-none" aria-hidden>
            ·
          </span>
          <a
            href="https://github.com/Gustavo-Resende"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-primary hover:text-white transition-colors font-medium px-1"
          >
            {t.footer.githubLabel}
          </a>
          <span className="text-white/25 select-none" aria-hidden>
            ·
          </span>
          <a href="/#contact" onClick={onContactClick} className={contactButtonClassName}>
            <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden />
            {t.footer.contactCta}
          </a>
        </div>
      </div>
    </footer>
  );
}

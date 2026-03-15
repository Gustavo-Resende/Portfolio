"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "./en";
import { pt } from "./pt";

type Language = "en" | "pt";
type Dictionary = typeof en;

interface LanguageContextProps {
  language: Language;
  t: Dictionary;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  // Load saved preference
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang === "en" || savedLang === "pt") {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === "pt" ? "en" : "pt";
    setLanguage(nextLang);
    localStorage.setItem("portfolio-lang", nextLang);
  };

  const t = language === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

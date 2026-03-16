# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint (next/core-web-vitals + next/typescript)
```

No test runner is configured.

## Architecture

Next.js 14 App Router portfolio site — exclusively dark theme, bilingual (PT-BR/EN), fully client-side with no backend.

### Key directories

- `src/app/` — App Router pages. Home (`page.tsx`) uses anchor-based SPA navigation (#hero, #projects, etc.). Each project has its own page under `projects/<slug>/page.tsx`.
- `src/components/` — Client components (`"use client"`). All use Framer Motion for animations and Tailwind for styling.
- `src/i18n/` — Language system: `LanguageContext.tsx` provides a `useLanguage()` hook returning `{ language, setLanguage, t }`. String dictionaries in `pt.ts` and `en.ts`. Language preference persisted in localStorage (`portfolio-lang`).

### Styling

Tailwind CSS with a custom dark theme defined in `tailwind.config.ts`. Key tokens: `background.primary` (#0A0A0A), `lime.primary` (#A3E635 accent), custom border-radius (`card: 24px`, `btn: 12px`, `tag: 8px`). Glassmorphism utilities (`.glass`, `.glass-card`, `.glass-btn`) defined in `globals.css`. Path alias: `@/*` → `./src/*`.

### Patterns

- All content is hardcoded — no CMS, API, or database
- Framer Motion handles entry animations (`whileInView`, spring physics, scroll-based triggers)
- Icons from `lucide-react`
- `clsx` + `tailwind-merge` for conditional class composition

### Git Rules

- NEVER add `Co-Authored-By` lines referencing Claude/AI in commit messages
- NEVER mention Claude, AI assistants, or automated tools in commits, PRs, or code comments
- Commit messages should look like they were written by a human developer

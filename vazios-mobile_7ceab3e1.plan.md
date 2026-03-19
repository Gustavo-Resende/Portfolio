---
name: vazios-mobile
overview: Reduzir o excesso de espaço vertical no mobile (incluindo md/tablet), ajustando paddings/margens/min-heights e gaps das seções na Home e nas páginas de projetos, mantendo desktop (lg+) quase igual.
todos:
  - id: home-compact
    content: "Reduzir espaçamento vertical na Home no padrão e manter desktop em `lg:`: ajustar `pt/pb/py`, `min-h` e `mb/mt` nos componentes `Hero`, `ProjectCard`, `Skills`, `About`, `Testimonials`, `ContactForm`, `Footer`."
    status: pending
  - id: projects-compact
    content: "Aplicar ajustes consistentes nas 5 páginas de projeto: reduzir `#hero`, `#metadata`, `#architecture`, `#results` e também `space-y-32`/`gap-16` para versões compactas no padrão (mantendo `lg:`)."
    status: pending
  - id: verify-compact
    content: Após as mudanças, revisar mobile/desktop para garantir que os títulos, listas e CTAs não perderam legibilidade e que o espaço vazio realmente diminuiu.
    status: pending
isProject: false
---

## Objetivo

Diminuir bastante os “vazios” verticais entre sessões no mobile (e também em `md`), sem quebrar a hierarquia visual no desktop (`lg`+).

## Abordagem

- Tornar o layout “mobile-first”: classes menores no padrão e manter os valores atuais apenas em `lg:`.
- Reduzir verticalmente:
  - `pt-*`, `pb-*`, `py-*`
  - `min-h-[...]` do hero
  - `mb-*` de headers internos
  - `space-y-*` de containers grandes
  - `gap-*` em grids que viram coluna no mobile.

## Onde ajustar

### Home (página inicial)

- `[src/components/Hero.tsx]`
  - Reduzir `pt-32 pb-16` e `min-h-[85vh]` no padrão, e manter os valores antigos em `lg:`.
  - Reduzir um pouco o `space-y-*` interno do conteúdo.
- `[src/components/ProjectCard.tsx]`
  - Reduzir `py-16` e `mb-12` no padrão.
- `[src/components/Skills.tsx]`, `[src/components/About.tsx]`, `[src/components/Testimonials.tsx]`
  - Reduzir `py-16` e `mb-12` no padrão.
- `[src/components/ContactForm.tsx]`
  - Reduzir `py-24` no padrão.
- `[src/components/Footer.tsx]`
  - Reduzir `mt-16` no padrão (ajuda a reduzir o “vazio” após o contato).

### Páginas de Projeto (5 páginas)

Ajustar os blocos principais em todas as páginas para ficar consistente:

- `[src/app/projects/sleipnir/page.tsx]`
- `[src/app/projects/muninn/page.tsx]`
- `[src/app/projects/frigg/page.tsx]`
- `[src/app/projects/bot-fatura/page.tsx]`
- `[src/app/projects/resumax/page.tsx]`

Alterar:

- `#hero`: `pt-32 pb-20 min-h-[70vh]` -> `pt-24 pb-12 min-h-[60vh]` no padrão; manter original em `lg:`.
- `#metadata` e `#architecture`: `py-24` -> `py-16` no padrão; manter original em `lg:`.
- `#results`: `pt-32 pb-16` -> `pt-24 pb-12` no padrão; manter original em `lg:`.
- Containers com `space-y-32`:
  - trocar por `space-y-24 lg:space-y-32`.
- Grids com `gap-16` que viram coluna no mobile:
  - trocar por `gap-12 lg:gap-16`.
- Pequenos ajustes de separação interna (quando existir `mb-24`, `pt-*` etc. nos headers): reduzir no padrão e manter em `lg:`.

## Diagrama (mental)

```mermaid
flowchart TD
  Home[Home: Hero, Projetos, Skills, Sobre, Testimonials, Contato, Footer] --> Reduce[Reduzir paddings/min-heights no padrão]
  ProjectPages[Projetos: Hero, Metadata/Jornada, Arquitetura, Results, CTA/Contato] --> Reduce2[Reduzir pt/pb/py e space-y/gap no padrão]
  Desktop[Desktop (lg+)] --> Keep[Manter valores atuais com lg:]
```



## Tasks

1. Ajustar Home (mobile-first)
  - Aplicar reduções nos componentes:
    - `src/components/Hero.tsx`
    - `src/components/ProjectCard.tsx`
    - `src/components/Skills.tsx`
    - `src/components/About.tsx`
    - `src/components/Testimonials.tsx`
    - `src/components/ContactForm.tsx`
    - `src/components/Footer.tsx`
2. Ajustar Páginas de Projeto (consistência em todas)
  - Aplicar as mesmas reduções (hero/metadata/architecture/results + space-y/gap) em:
    - `src/app/projects/sleipnir/page.tsx`
    - `src/app/projects/muninn/page.tsx`
    - `src/app/projects/frigg/page.tsx`
    - `src/app/projects/bot-fatura/page.tsx`
    - `src/app/projects/resumax/page.tsx`
3. Verificação visual e correção fina
  - Conferir que:
    - headings e CTAs não ficam “espremidos”
    - o conteúdo ainda cabe bem sem cortar
    - a ordem visual continua clara.


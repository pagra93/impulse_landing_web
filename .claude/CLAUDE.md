# Impulse Web

## What This Project Does
Landing page for the Impulse app (iOS) and Chrome extension. Impulse helps users control their screen time by blocking distracting websites and apps, providing impulse control mechanisms, and tracking usage analytics.

## Tech Stack (non-negotiable)
- **Framework**: Next.js 16 (App Router) + React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + tailwind-merge + clsx
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: next-intl, bilingüe ES/EN. `/` es español, `/en` inglés
- **Email**: Resend (EmailJS no está instalado)
- **Database**: PostgreSQL + Prisma 7
- **Fonts**: Figtree, una sola familia variable via next/font/google
- **Domain**: impulsecontrolapp.com
- **Node**: >=22.12.0

## Navigation
### Global (installed in ~/.claude/)
- Agents: 16 specialized agents (11 specialists + 5 supervisors + 4 supervisors)
- Skills: 7 (PRD builder, competitive analysis, plan mode, doc updater, unknown unknowns, project docs, impeccable guide)
- Rules: 6 (definition of done/ready, antipatterns, scoring, naming, git branching)
- Knowledge: 6 (JTBD framework, Mom Test, story splitting, testing strategy, story ticket template, strategic thinking)
- Commands: 15 slash commands

### Project (this project)
- Project docs: docs/PROJECT_KNOWLEDGE.md — READ THIS FIRST when returning
- Project registry: docs/project-registry.md — technical asset inventory (DB, APIs, components)
- Working docs: docs/working-docs/[feature]/ — artifacts per feature
- Current tasks: tasks/todo.md — sprint plan and progress
- Lessons learned: tasks/lessons.md — patterns and mistakes
- Working memory: memory/MEMORY.md — agent observations across sessions
- QA reports: qa-reports/ — audit trail

## Orchestration Rules
1. Start every non-trivial task in plan mode (>3 steps)
2. Write plans to tasks/todo.md before executing
3. Commit after each completed story (/save)
4. /review after completing features (tests + QA + asks about docs)
5. Consult tasks/lessons.md at start of each session
6. Read memory/MEMORY.md for patterns from previous sessions
7. Save artifacts to docs/working-docs/[feature]/ organized by feature

## Available Commands
/challenge          Challenge premises, debate, force evidence
/analyze            Evaluate problem/PRD (Quality Guard + Research)
/define             Create JTBDs + stories (with quality review)
/plan               Architecture + sprint plan
/story              Build story from idea (autonomous)
/build              Implement stories (Claude Code directly)
/save               Commit + push to GitHub (validates branch, detects secrets)
/review             QA pipeline + feature docs (ALWAYS asks about documentation)
/hotfix             Bug fix with learning (only saves when PM confirms resolved)
/code-review        Just code review
/design-to-prd      Pencil designs -> PRDs per feature (6-layer analysis)
/unknown-unknowns   Detect hidden risks (8 dimensions)
/docs               Generate/update project documentation
/learned            Save a learning anytime (bug resolved, discovery, mistake)

## Project Structure
```
messages/
  es.json, en.json        # Todo el copy. Un namespace por sección
src/
  i18n/
    routing.ts            # locales, defaultLocale es, localePrefix as-needed
    navigation.ts         # Link / usePathname / getPathname localizados
    request.ts
  proxy.ts                # OJO: Next 16 renombró `middleware` a `proxy`.
                          # Si existen los dos ficheros, el build FALLA.
  app/
    [locale]/
      page.tsx            # Landing
      layout.tsx          # Root layout (Figtree, metadata por locale)
      desbloqueo-fisico/  # Capítulo del Disc/NFC, fuera de la home
      onboarding/ privacy/ delete-account/ uninstall/
    api/uninstall-notify/ # POST con mismo origen + rate limit
    robots.ts sitemap.ts  # sin prefijo de idioma
  components/
    brand/Mark.tsx        # Mark, MarkField y Lockup
    devices/              # PhoneFrame, BrowserFrame, Tilt3D, screens.ts
    landing/              # Secciones de la home
    disc/                 # Secciones de /desbloqueo-fisico
  lib/
    links.ts              # TODAS las URLs de tienda y contacto
    schema.ts             # JSON-LD derivado de los messages
public/
  devices/                # Capturas de producto (webp)
  brand/                  # SVG de marca
prisma/
  schema.prisma           # Esquema del backend de la app, no lo usa la web
```

## Reglas del rediseño
- El copy nunca va hardcodeado en un componente: va a `messages/{es,en}.json`.
- Las URLs de tienda salen siempre de `src/lib/links.ts`.
- Las capturas se registran en `devices/screens.ts` con import estático, para
  que una que falte rompa el build en vez de dar un 404.
- El FAQ del JSON-LD se genera del mismo array que pinta el acordeón.
- Comillas tipográficas (’) en el copy: en ICU el apóstrofo recto escapa.

## Testing

### Framework
[Fill in: e.g., Jest, Vitest, Pytest, Playwright]

### Test File Location
[Fill in: e.g., __tests__/ co-located, tests/ mirrored, e2e/ at root]

### Test Commands
- Unit/Integration: [e.g., npm test, pytest]
- E2E: [e.g., npx playwright test]
- Coverage: [e.g., npm test -- --coverage]

### Test Data
[Fill in: e.g., factories in tests/factories/, MSW handlers in tests/mocks/]
## Coding Standards
- Use functional components with TypeScript
- Use Tailwind CSS for all styling (no CSS modules, no styled-components)
- Use `cn()` utility from `@/lib/utils` for conditional class merging
- Use `@/` path alias for imports
- Use Framer Motion for animations
- Components go in `src/components/[feature]/ComponentName.tsx`
- Pages use Next.js App Router conventions
- Spanish comments in Prisma schema are OK (team language)
- Keep SEO metadata in layout.tsx and individual pages

## Core Principle
Analysis Informs, Never Blocks. Agents identify risks. PM always decides.

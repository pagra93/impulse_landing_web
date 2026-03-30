# Impulse Web

## What This Project Does
Landing page for the Impulse app (iOS) and Chrome extension. Impulse helps users control their screen time by blocking distracting websites and apps, providing impulse control mechanisms, and tracking usage analytics.

## Tech Stack (non-negotiable)
- **Framework**: Next.js 16 (App Router) + React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + tailwind-merge + clsx
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **i18n**: next-intl
- **Email**: EmailJS (@emailjs/browser)
- **Database**: PostgreSQL + Prisma 7
- **Fonts**: Inter (body) + Outfit (headings) via next/font/google
- **Domain**: impulsecontrolapp.com
- **Node**: >=22.12.0

## Navigation
### Global (installed in ~/.claude/)
- Agents: 14 specialized agents (10 specialists + 4 supervisors)
- Skills: 7 (PRD builder, competitive analysis, plan mode, doc updater, unknown unknowns, project docs, impeccable guide)
- Rules: 6 (definition of done/ready, antipatterns, scoring, naming, git branching)
- Knowledge: 3 (JTBD framework, Mom Test, story splitting)
- Commands: 13 slash commands

### Project (this project)
- Project docs: docs/PROJECT_KNOWLEDGE.md — READ THIS FIRST when returning
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
/analyze            Evaluate problem/PRD (Quality Guard + Research)
/define             Create JTBDs + stories (with quality review)
/plan               Architecture + sprint plan
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
src/
  app/
    page.tsx              # Landing page (main)
    layout.tsx            # Root layout (Inter + Outfit fonts, SEO metadata)
    onboarding/page.tsx   # Chrome extension onboarding
    uninstall/page.tsx    # Uninstall feedback page
    robots.ts             # SEO robots config
    sitemap.ts            # SEO sitemap config
  components/
    landing/              # Landing page sections
      Header.tsx, Hero.tsx, SocialProof.tsx, Stats.tsx,
      HowItWorks.tsx, Features.tsx, Calculator.tsx,
      Testimonials.tsx, Mission.tsx, CTA.tsx, Footer.tsx
    onboarding/
      OnboardingSlider.tsx
    ui/
      BrowserWindow.tsx
  data/
    features.ts           # Feature data for landing
  lib/
    utils.ts              # Utility functions (cn helper)
prisma/
  schema.prisma           # Full database schema (users, settings, blocking, analytics)
```

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

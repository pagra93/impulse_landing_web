# Project Knowledge — Impulse Web
Last updated: 2026-03-30

## What This Project Does
Landing page for the Impulse app (iOS) and Chrome extension. Promotes the product, explains features, handles onboarding for the Chrome extension, and collects uninstall feedback. The app helps users control screen time by blocking distracting websites, providing impulse control timers, scroll limits, usage notices, and detailed analytics.

## Architecture Overview
- **Next.js 16 App Router** with static pages (landing, onboarding, uninstall)
- **Prisma + PostgreSQL** schema defines the full backend data model (users, settings, blocking periods, impulse controls, usage analytics)
- **Framer Motion** for scroll-based animations and transitions
- **next-intl** configured for internationalization
- **EmailJS** for contact/feedback forms
- **SEO optimized**: robots.ts, sitemap.ts, OpenGraph, Twitter cards, canonical URLs

## Features Implemented
| Feature | Date | Status | Notes |
|---------|------|--------|-------|
| Landing page (full redesign) | 2026-03 | Complete | Hero, SocialProof, Stats, HowItWorks, Features, Calculator, Testimonials, Mission, CTA, Footer |
| Onboarding flow | 2026-03 | Complete | Slider-based onboarding for Chrome extension |
| Uninstall page | 2026-03 | Complete | Feedback collection on extension uninstall |
| SEO setup | 2026-03 | Complete | robots.ts, sitemap.ts, metadata, canonical |
| Prisma schema | 2026-03 | In progress | Full data model defined, not yet connected to landing |

## Key Decisions
| Decision | Date | Why |
|----------|------|-----|
| Next.js 16 + React 19 | 2026-03 | Latest stable, App Router, best DX |
| Tailwind CSS 4 | 2026-03 | PostCSS integration, design tokens |
| Inter + Outfit fonts | 2026-03 | Clean modern typography pairing |
| Prisma for ORM | 2026-03 | Type-safe, migration support, PostgreSQL |

## How Things Work
- **Landing page**: Composed of modular sections in `src/components/landing/`, assembled in `src/app/page.tsx`
- **Onboarding**: Slider component at `src/components/onboarding/OnboardingSlider.tsx`, served from `/onboarding`
- **Styling**: All Tailwind with `cn()` helper for conditional classes. Fonts loaded via `next/font/google`
- **SEO**: Metadata exported from `layout.tsx`, plus `robots.ts` and `sitemap.ts` in app root

## Known Issues & Tech Debt
| Issue | Priority | Notes |
|-------|----------|-------|
| Prisma schema not connected to API routes | Low | Schema defined but no API endpoints yet on landing |
| Roadmap page deleted | Info | Was removed (files in git history) |
| next-intl configured but translations not set up | Medium | Package installed, no message files yet |

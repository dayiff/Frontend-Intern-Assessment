# Tobams Group — Training and Development (Frontend Intern Assessment)

A pixel-focused implementation of the "Training and Development" page from the
provided Figma file, built with Next.js (App Router) and Tailwind CSS.

**Live URL:** _add your deployed Vercel/Netlify URL here before submitting_

**Figma reference:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4 (CSS-based theme tokens in `src/app/globals.css`, no other
  CSS framework)
- `next/font` (Poppins, Inter, Playfair Display) and `next/image` throughout
- `lucide-react` for iconography, plus three small hand-written SVGs for the
  LinkedIn/Instagram/X footer icons (the current `lucide-react` release
  dropped brand/logo icons)

## Getting started

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000. Production build:

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project structure

\`\`\`
src/
  app/
    layout.tsx       — fonts, metadata, global <body>
    page.tsx          — composes all sections
    globals.css        — Tailwind import + brand color/font tokens
  components/          — one component per section (see below)
  lib/data.ts           — all copy/content, kept out of the JSX
\`\`\`

Each section of the page is its own component under `src/components/`
(Navbar, Hero, LearningManagementSystem, TrainingPrograms, CapacityDevelopment,
ManagementDevelopmentProgram, TransformationHub, TrainingConsultant,
CtaBanner, Testimonials, Footer) — no monolithic page file.

## Design decisions & assumptions

- **Colors** were sampled directly from the provided design screenshots
  (pixel-picked hex values) rather than guessed, and set up as Tailwind v4
  theme tokens (`plum-50` … `plum-950`, `coral-500`, `pink-100`, etc.) in
  `globals.css` so they're reusable and consistent across components.
- **Imagery**: the Figma file's actual image assets weren't exported/provided,
  so all photography is placeholder stock photography from Unsplash, loaded
  through `next/image` with descriptive `alt` text matching what each photo
  depicts in the design. These should be swapped for the brand's real assets
  before this ships to production.
- **Fonts**: the design's headline typeface reads as a rounded geometric sans
  (mapped to **Poppins**) with a plainer sans for body copy (**Inter**), and a
  serif italic for the "Learning With Our CEO" / "Transformation Hub with
  Jite Newton" tagline (**Playfair Display Italic**). These are close visual
  matches rather than confirmed brand fonts, since the Figma file's exact
  type specimens weren't accessible outside the app.
- **Testimonials carousel** is a lightweight client-side component (paginates
  3 cards at a time on desktop, arrow controls) rather than a full swipe/drag
  carousel library, to keep the bundle dependency-free.
- **Nav dropdowns** (About / What We Do / Jobs) are rendered with a chevron
  affordance but are not wired to open menus, since the design didn't specify
  the dropdown contents.
- AI tools (Claude) were used to help scaffold and implement this project, per
  the submission checklist's disclosure requirement.

## Responsiveness

Verified with Tailwind's `sm:` / `md:` / `lg:` breakpoints at 425px (mobile),
768px (tablet), and 1280px+ (desktop) — no custom media queries.

## Accessibility

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- All images carry descriptive `alt` text.
- Visible focus rings on all interactive elements (see `globals.css`).
- Carousel controls and social links have `aria-label`s.

## Known issues / follow-ups

- Nav dropdown menus and the mobile hamburger menu are not implemented —
  the navbar collapses to logo + "Take Assessment" below the `xl` breakpoint.
- Testimonial avatar images are stock placeholders, not the original design's
  avatar illustrations.

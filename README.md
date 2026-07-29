# Kowshalya Gopinaidu Asokan, Portfolio

A clear, professional portfolio site built with React 19, TypeScript, Vite, Tailwind CSS, Framer Motion,
GSAP and Radix UI.

All personal, work-history and project content lives in one file, **`src/data/resume.ts`**, sourced
directly from the CV. Update that file and every section of the site updates with it.

## Getting Started

```bash
cd Portfolio
npm install
npm run dev       # start the dev server at http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check (tsc -b) + production build to dist/
npm run preview    # preview the production build locally
npm run lint       # ESLint
npm run format     # Prettier (writes changes)
```

Node 20+ is recommended.

## Contact form

The contact form (`src/components/contact/ContactForm.tsx`) uses a `mailto:` link, so it needs no API
keys, no backend and no third-party service. Submitting the form opens the visitor's own email client
with the subject and message pre-filled, addressed to the email in `personal.social.email`.

## Resume PDF

`public/kowshalya-resume.pdf` is served statically and linked from the Hero, Resume section and command
palette ("Download resume"). Replace this file to update the downloadable PDF, it is independent of the
on-page content in `src/data/resume.ts`.

## Project Structure

```
src/
  components/       One folder per site section (hero, about, timeline, skills, projects, resume,
                     contact), plus shared layout/ and ui/ primitives.
  data/resume.ts     Single source of truth for all resume-derived content.
  hooks/            Reusable hooks: reduced motion, typing effect, count-up, active-section
                     scroll-spy, Konami code.
  routes/           React Router pages (HomePage, NotFound).
  types/            Shared TypeScript interfaces for every data shape.
  lib/utils.ts       cn() class merge helper + small math utilities.
```

## Page sections

Hero, About, Experience (Cognizant / HCL Tech / PayPal / Germany, expandable), Skills, Projects,
Resume, Contact.

## Notable features

- **Loading screen** with animated logo and real progress, skipped instantly if the user prefers
  reduced motion.
- **Command palette**, press `⌘K` / `Ctrl+K`, or the "Search" button in the nav, to jump to any
  section or open external profiles.
- **Experience timeline** with a GSAP + ScrollTrigger connecting line that grows as you scroll.
- **Interactive terminal contact card**, type `npm hire kowshalya` and press Enter.
- Single, permanent dark theme (no light/dark toggle) for consistent contrast everywhere.
- Full keyboard navigation with visible focus states.
- Every below-the-fold section is code-split with `React.lazy` + `Suspense` so the hero paints instantly.

## Accessibility

- Skip-to-content link, visible focus rings, ARIA labels on every icon-only control.
- `MotionConfig reducedMotion="user"` makes every Framer Motion animation in the app automatically
  respect the OS-level "reduce motion" setting; a matching CSS media query shortens any remaining CSS
  transitions/animations.
- Semantic headings and landmark regions throughout.

## Deploying

The project is set up for zero-config deployment to Vercel: `vercel` in the project root, or connect
the repo in the Vercel dashboard. `npm run build` outputs a static `dist/` folder that also works on
Netlify, Cloudflare Pages, or any static host.

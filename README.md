# REST APIs — Interactive Learning Experience

An interactive, editorial-style walkthrough of REST API fundamentals — built
from the provided project plan (`REST_API_Interactive_Blog_Complete_Plan.docx`)
and the source content (`REST-API.pdf`). Rather than a conventional technical
blog, it's structured as a nine-chapter guided experience: one API, one
resource, followed all the way from "what is a resource" to a closing
interview round.

## Tech stack

Exactly what the plan specified:

- **React 18** — component-based UI
- **Vite 5** — dev server and build
- **Tailwind CSS 3** — design system and styling
- **GSAP 3 + ScrollTrigger** — scroll-based reveals
- **Lenis** — smooth scrolling, synced to GSAP's ticker
- **Lucide React** — icons
- **Prism** — syntax-highlighted JSON code panels
- **@fontsource** (Space Grotesk, Inter, JetBrains Mono) — self-hosted fonts,
  so the site has no external font requests

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serves the dist/ build locally, so you can check it before deploying
```

`npm run build` outputs static files to `dist/` — deployable to Vercel,
Netlify, GitHub Pages, or any static host, exactly as the plan's "frontend-only
static application" deployment goal describes.

## Project structure

```
src/
  components/     Reusable UI: nav, progress bar, code blocks, cards,
                  the client↔server diagram, the scroll-reveal wrapper
  sections/       One file per chapter (Hero, WhatIsRest, Resources, …)
  data/           All REST content as plain data — methods, status codes,
                  interview Q&A, best practices, resource examples
  App.jsx         Composes the sections in order
  index.css       Design tokens, fonts, base + accessibility styles
```

Content lives in `src/data/`, separate from the JSX, exactly per the plan's
"Content Architecture" — if you want to edit any wording, numbers, or
examples, that's the folder to open.

## Design system

**Palette** — warm editorial / soft tech, per the plan:

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F5F3EE` | Base background |
| `paper-alt` | `#EDE9DE` | Alternating chapter background |
| `ink` | `#15140F` | Primary text |
| `ink-muted` | `#635D4E` | Secondary text |
| `accent` | `#3A54E4` | The one primary accent (links, active states) |
| `success` | `#1F8F5F` | 2xx codes, idempotent/safe badges |
| `warning` | `#B87423` | 4xx codes |
| `danger` | `#C6453C` | 5xx codes |

**Type** — Space Grotesk (display), Inter (body), JetBrains Mono (code and
small labels), as specified.

## The nine chapters

01 What is REST? · 02 Resources · 03 Representations · 04 Stateless
communication · 05 HTTP methods · 06 Idempotence & safe methods · 07 HTTP
status codes · 08 API design practices · 09 Interview mode — bookended by a
quiet hero and a closing completion state (no chapter numbers on either, same
as the plan treats "Opening" and "Completion" as framing moments rather than
chapters).

Every method, status code, and Q&A shown is sourced from `REST-API.pdf`. The
HTTP methods chapter follows one resource (`/users/42`) through GET → POST →
PUT → PATCH → DELETE so it reads as one continuous story instead of five
disconnected facts.

## Where I made judgment calls

The plan is thorough but is a *design brief*, not a pixel-perfect spec — a few
places asked for a decision:

- **Chapter numbering.** Section 8 of the plan ("Chapter-by-Chapter
  Experience") gives Representations and Stateless Communication their own
  numbered chapters (03, 04); the shorter nav example in section 7 omits
  them. I followed section 8, since it's the more detailed and complete
  breakdown — the floating nav reflects all nine chapters.
- **Accent color.** The plan offered "electric green OR muted electric
  blue." I went with blue (`#3A54E4`) and reserved green specifically for
  success states (2xx codes, idempotent/safe badges), so the one accent
  color and the semantic success color never compete for the same meaning.
- **HTTP method badges are intentionally neutral**, not color-coded per
  method. A five-color method legend is the standard Swagger/API-dashboard
  look — which the plan explicitly asks to avoid — and would compete with
  its "one primary accent color" rule. The accent marks whichever method
  tab is active instead.
- **Idempotence, made hands-on.** Rather than an auto-playing animation, you
  click "Send request" yourself on a PUT and a POST and watch what actually
  changes (or doesn't). It demonstrates the concept more convincingly than
  a passive replay would.
- **Scroll technique.** Chapters reveal once on scroll-in rather than using
  pinned/scrubbed scroll sections. This keeps the experience fast and
  robust on lower-powered devices and is easy to extend — pinning specific
  moments (the HTTP Methods chapter is the best candidate) is a reasonable
  next step once real content and images are final.
- Every animation checks `prefers-reduced-motion` and falls back to a
  static, fully-readable layout with no missing content.

## Deploying

This is a static frontend with no backend or environment variables. The
fastest path is Vercel or Netlify: connect the repository (or drag the
`dist/` folder onto Netlify's deploy page after running `npm run build`) —
build command `npm run build`, output directory `dist`.

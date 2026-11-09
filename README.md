# Obsidian — 3D React Developer Portfolio

A premium, single-page developer portfolio built with **React 18, Vite, React Three Fiber and Framer Motion**.
Midnight graphite, electric teal and champagne gold; one restrained 3D centrepiece; editorial typography.

---

## 1. Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

Requires Node 18+.

---

## 2. Make it yours (15 minutes)

All content lives in `src/data/`. You should never need to touch a component to update the site.

| What | Where |
|---|---|
| Name, monogram, role, headline, intro, location | `src/data/site.js` |
| Email, GitHub, LinkedIn, X | `site.social` in `site.js` |
| About text, philosophy, goals | `site.about` in `site.js` |
| Stats (years, projects, students) | `site.stats` — leave `null` to hide; **only real numbers** |
| Skills and one-line notes | `src/data/skills.js` |
| Projects / case studies | `src/data/projects.js` |
| Work history + process steps | `src/data/experience.js` |
| Page title, description, social preview | `index.html` |

**Résumé** — drop your PDF at `public/resume.pdf`. The "Download résumé" button appears automatically
once the file exists (it is hidden otherwise, so there is never a dead link).

**Project screenshots** — save at 1600×1000 (16:10) as `.webp` in `public/projects/` and set
`image: '/projects/your-file.webp'`. Without an image, a generated architectural cover is used.
Empty `github` / `live` fields hide those buttons.

**Portrait** — in `src/sections/About.jsx`, replace the monogram inside `.portrait__frame`
with `<img src="/portrait.webp" alt="Portrait of Your Name" />` (4:5 ratio).

**Social preview** — add a 1200×630 `public/og-image.png` and update `og:url` in `index.html`.

---

## 3. Contact form

The form never fakes success.

* **Without configuration** it validates input and opens the visitor's email app with the message pre-filled,
  and says so honestly.
* **With a backend** it posts JSON and shows real loading / success / error states.

To enable real sending with Formspree (free tier):

1. Create a form at <https://formspree.io> and copy its endpoint.
2. Create `.env` in the project root:
   ```
   VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```
3. Restart `npm run dev`. On Vercel/Netlify add the same variable in project settings.

Any endpoint accepting `POST` JSON `{ name, email, subject, message }` works (your own Express route included).
A hidden honeypot field filters simple bots.

---

## 4. Design system

**Colour roles** — kept strict so the palette never turns noisy:

| Token | Hex | Role |
|---|---|---|
| `--c-bg` | `#0B0F14` | Page background |
| `--c-bg-2` | `#131B24` | Alternate sections, raised panels |
| `--c-line` | `#263440` | Borders, dividers |
| `--c-teal` | `#27E0C3` | **Interaction only** — buttons, links, active, focus |
| `--c-gold` | `#C6A56B` | **Editorial emphasis only** — italic headline words, numerals |
| `--c-text` | `#F4F7FA` | Primary text |
| `--c-text-2` | `#9AA8B6` | Secondary text |

**Type** — *Instrument Serif* (display), *Manrope* (body/UI), *JetBrains Mono* (labels, indices).
Fluid sizes with `clamp()`; body copy capped at ~62ch.

**Space** — 4px base scale (`--s-1` … `--s-9`), fluid section padding and gutters.

**Motion** — one reveal pattern (16px rise + fade, once), one easing curve, durations 160/280/600 ms.
All tokens are in `src/styles/variables.css`; they drop to 0 under `prefers-reduced-motion`.

---

## 5. Architecture

```
src/
├─ components/      Navbar, Footer, Button, SectionHeading, Reveal, SkillCard,
│                   ProjectCard, ProjectCover, ProjectModal, SocialLinks,
│                   HeroFallback, BrandIcons
├─ sections/        Hero, About, Skills, Projects, Experience, Process, Contact
├─ three/           HeroScene (Canvas, lights), InteractiveObject (the sculpture)
├─ data/            site, skills, projects, experience  ← all content
├─ hooks/           useActiveSection, useWebGL, useFileExists, useMediaQuery
├─ styles/          variables.css (tokens), global.css
├─ App.jsx
└─ main.jsx
```

### 3D & performance decisions
* Three.js is **only in the hero**, loaded with `React.lazy` after first paint
  (initial JS ≈ 100 KB gzipped; the 3D chunk ≈ 240 KB loads in the background).
* An SVG of the same sculpture renders immediately and cross-fades to the canvas — no loading screen.
* Falls back to the SVG permanently when WebGL is missing, `Save-Data` is on, or device memory is < 2 GB.
* Render loop pauses when the hero is off-screen; reduced-motion switches it to on-demand rendering.
* Lighting uses local `Lightformer`s — no HDR file download.
* Card tilt writes CSS variables directly (no React re-renders on pointer move).

### Accessibility
Skip link · semantic landmarks · one `h1` and ordered headings · visible teal focus rings ·
native `<dialog>` for case studies (focus trap + Escape) · `aria-current` on active nav ·
`aria-pressed` filters · live region for filter results and form status · labelled inputs with
inline, announced errors · reduced-motion respected everywhere · 3D canvas hidden from assistive tech.

---

## 6. Testing checklist

- [ ] Replace all placeholder content in `src/data/` — search the project for `Your Name`, `you@example.com`, `Company name`, `Institute name`, `your-username`
- [ ] Widths 360, 390, 768, 1024, 1440, 1920 — no horizontal scroll
- [ ] Keyboard only: Tab through nav → hero → cards → modal (Esc closes) → form
- [ ] Mobile menu opens, closes on link tap and on Escape, focus returns to the toggle
- [ ] Each project modal: live/source buttons open the right URLs
- [ ] Résumé downloads (after adding `public/resume.pdf`)
- [ ] Form: empty submit shows errors; real submit reaches your inbox
- [ ] OS "reduce motion" on: no floating, no reveals, no scroll smoothing
- [ ] Lighthouse (mobile): Performance, Accessibility, Best Practices, SEO
- [ ] Browser console clean

---

## 7. Deploy

**Vercel** — import the repo; framework *Vite*; build `npm run build`; output `dist`. Add `VITE_FORM_ENDPOINT` if used.

**Netlify** — build `npm run build`, publish `dist`.

**GitHub Pages** — `vite.config.js` already uses `base: './'`, so `dist/` works from any sub-path:
```bash
npm run build
npx gh-pages -d dist
```

Optional: self-host the three fonts (e.g. via `@fontsource`) to remove the Google Fonts request.

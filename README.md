# Sheen — portfolio

Vite + React. No UI framework, no animation library.

## Run it

    npm install
    npm run dev

## Deploy to Vercel

Push to GitHub, import the repo at vercel.com. Vercel detects Vite on its own.
Framework preset: Vite. Build: `npm run build`. Output: `dist`.

Or from this folder:

    npx vercel

## Edit the content

Everything on the page comes from `src/content.js`. Lines marked TODO are
guesses — replace them. Your photo is `src/sheen.png` (background already cut out).

## Notes

- Parallax runs on one scroll listener and one rAF loop (`src/useParallax.js`).
- `prefers-reduced-motion` turns all of it off.
- Project visuals are hand-drawn SVGs in `src/ProjectArt.jsx`. Swap them for real
  screenshots if you prefer, but diagrams age better than admin-panel screenshots.
# Portfolio

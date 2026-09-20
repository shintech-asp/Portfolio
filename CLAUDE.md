# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Sheen's personal portfolio site. Vite + React, no UI framework, no animation library, no router, no state management. The entire site is one page (`src/App.jsx`) rendered from a single content object.

## Commands

    npm install
    npm run dev       # start dev server
    npm run build      # production build to dist/
    npm run preview    # preview the production build

There is no test suite, no linter config, and no TypeScript in this repo.

## Editing content

All page copy — name, bio, project descriptions, stack lists, contact links — lives in `src/content.js`. To change what the site says, edit that file; don't hardcode text into `App.jsx`. Lines marked `TODO` in `content.js` are placeholder/guessed content the owner still needs to replace with real information — don't remove the TODO markers on your own judgment, and flag them if asked to review the file.

## Architecture

- `src/main.jsx` — entry point, mounts `App` into `#root`.
- `src/App.jsx` — the entire page: hero, project list, "how I work" section, contact. Reads all copy from `content.js` and renders `ProjectArt` for each project's diagram.
- `src/content.js` — single source of truth for site copy (`me`, `links`, `projects`, `practice`).
- `src/ProjectArt.jsx` — hand-drawn inline SVG diagrams (one per project, selected by the project's `art` key: `flow`, `pipeline`, `globe`) illustrating system architecture rather than screenshots. Add a new `art` kind here when adding a project that needs its own diagram.
- `src/useParallax.js` — the site's one piece of nontrivial logic: a shared parallax system. A single module-level `Set` of registered layers is driven by one `scroll`/`resize` listener and one shared `requestAnimationFrame` loop, so cost doesn't scale with the number of parallax elements on the page. Two modes: `'page'` (shift scales with absolute scroll position, used for background layers) and `'element'` (default; shift scales with the element's distance from viewport centre, used for in-page elements like the portrait and project art). Respects `prefers-reduced-motion` by not registering layers at all when it's set.
- `src/styles.css` — all styling; no CSS modules or CSS-in-JS.

## Notes

- `vite.config.js` sets `assetsInlineLimit: 0`, so imported assets (e.g. `src/sheen.webp`) are always emitted as separate files rather than inlined as base64 — keep that in mind if adding new image imports.
- Deployment target is Vercel (auto-detected Vite preset, build command `npm run build`, output `dist`).

# AGENTS.md — Portfolio Static Site

## Quick start

This is a vanilla static site (HTML + CSS + JS, no build step). Serve locally with any static server:

```sh
npx serve .
```

## Architecture

- **`index.html`** — single entry point; loads Bootstrap 5, Bootstrap Icons, and Devicon from CDN
- **`js/script.js`** — all project data (`projectData` array), tech-to-icon mapping (`techIconMap`), modal logic
- **`css/style.css`** — custom dark theme, glassmorphism, animations

## Adding a project

1. Open `js/script.js`
2. Append an object to the `projectData` array: `{ category, icon, name, desc, tech[], pages, link }`
3. If the project uses a new technology not in `techIconMap`, add its Devicon class there too

The category card and modal populate automatically from the data.

## Constraints

- No tests, no linter, no typechecker, no CI
- The `public/` directory is for static assets (currently only `.gitkeep`)
- All external deps are loaded via CDN in `index.html` — no `package.json` or lockfile
- CMD-click / right-click → Open With Live Server is the fastest way to preview

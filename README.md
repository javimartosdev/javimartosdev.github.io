# Portfolio — Javier Martos

Personal portfolio built with Astro, Tailwind CSS, and bilingual routing (ES/EN).

Live site: [javimartosdev.github.io](https://javimartosdev.github.io)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321/es/](http://localhost:4321/es/) or `/en/`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` deploy automatically via GitHub Actions to GitHub Pages.

## Repository hygiene

Keep internal tooling files out of version control. The `.gitignore` already excludes IDE metadata and local-only documentation. Before pushing, review staged files and commit messages so the remote repository stays clean and professional.

## Project layout

```
00_portfolio/     → this site (javimartosdev.github.io)
01_habit-dock/    → Habit Dock app
02_pomodoro-java/ → Pomodoro Timer
```

# Flubber Morph Theme Toggle

A Next.js app showcasing a dark/light mode toggle component that morphs between a moon and sun icon using SVG path interpolation.

## How It Works

The toggle uses [Flubber](https://github.com/veltman/flubber) to interpolate between two SVG paths (moon x sun) and [Framer Motion](https://www.framer.com/motion/) to animate the transition.

### Theme Persistence (No Flash on Reload)

The selected theme is saved as a **cookie in the user's browser** (not on any server). On every page load, the browser automatically sends that cookie along with the request. Next.js reads it **server-side** before rendering, so the correct `dark` or `light` class is already applied to `<html>` in the very first HTML the browser receives.

This avoids the common "flash of wrong theme" problem that happens with `localStorage`-based approaches, where JavaScript must run client-side before the theme can be applied — causing a brief flicker on load.

## Tech Stack

- **Next.js 16** (App Router, SSR)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animation
- **Flubber** — SVG path morphing

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the interactive playground where you can adjust the toggle's size, stroke width, and fill style.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
# Flubber Morph Theme Toggle

A Next.js app showcasing a dark/light mode toggle component that morphs between a crescent moon and sun icon using SVG path interpolation.

## How It Works

The toggle uses [Flubber](https://github.com/veltman/flubber) to interpolate between two SVG paths (moon → circle → sun) and [Framer Motion](https://www.framer.com/motion/) to animate the transition. Theme state is persisted via cookies and resolved server-side to prevent flash on initial load.

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
| `npm run lint` | Run ESLint |

# Pasadena Recycling Website

[![Pasadena Recycling website preview](public/og.png)](https://pasadenarecycling.com)

A responsive, bilingual website for Pasadena Recycling, a family-owned metal recycling business in Pasadena, Texas.

**Live website:** [pasadenarecycling.com](https://pasadenarecycling.com)

## Overview

The website gives households, contractors, and local businesses a clear way to review services, learn about commonly accepted materials, get directions, and contact the recycling yard. Visitors can switch between English and Spanish without leaving the page.

## Features

- Responsive navigation for phone, tablet, and desktop layouts
- English and Spanish content switcher
- Service and recyclable-material guides
- Click-to-call and Google Maps directions
- Email inquiry form that prepares a message in the visitor's email application
- Canonical redirect from `www.pasadenarecycling.com` to the primary domain
- Open Graph and X metadata for link previews

## Technology

- Next.js 16 and React 19
- TypeScript
- Vinext and Vite
- Cloudflare Workers deployment
- Custom responsive CSS

## Project structure

- `app/components/` — reusable page sections and interactive components
- `app/data/site.ts` — business details and English/Spanish website copy
- `app/globals.css` — shared visual system and responsive styles
- `public/assets/` — website images and asset documentation
- `public/og.png` — social sharing preview
- `proxy.ts` — canonical `www` redirect

## Run locally

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Then open the local address printed in the terminal.

## Quality checks

```bash
pnpm lint
pnpm build
```

## Data and privacy

The current website does not use a database and does not store form submissions. The inquiry form prepares an email on the visitor's device. Deployment credentials and future database secrets belong in ignored local environment files or protected hosting settings, never in the repository.

## Image credits

Image sources are documented in [PHOTO_SOURCES.md](PHOTO_SOURCES.md).

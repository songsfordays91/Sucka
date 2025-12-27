# Regal Creations — Next.js (app router) Vercel-ready

Quick start
1. Install:
   - npm install
2. Run locally:
   - npm run dev
3. Build:
   - npm run build
4. Deploy:
   - Push to GitHub and import repository in Vercel, or run `vercel` CLI.

Notes
- This repo uses the app/ directory (app router). The main page is at `app/page.jsx` and is a client component (Framer Motion).
- UI components live under `components/ui/` — replace them with your design system if desired.
- Add any API routes under `app/api/*` or create server components as needed.
- For payments/AI you'll need to add server endpoints and set environment variables in the Vercel dashboard.

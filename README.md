# Next.js Portfolio (SSG)

This project has been migrated from Vite + React Router to Next.js App Router with static site generation.

## Scripts

- `npm run dev` starts local development.
- `npm run build` builds a static export (`output: "export"`).
- `npm run start` serves the built output via Next server.

## Routes

- `/` Home
- `/works` Works list
- `/works/[id]` Work detail pages generated at build time
- `/gallery` Albums

`/works/[id]` uses `generateStaticParams` with project data from `src/components/projects.ts`.

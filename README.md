# Next.js starter

The base for new [Frend](https://github.com/meetfrend) projects: Next.js (App Router), React, TypeScript, Tailwind CSS v4 and shadcn/ui.

```bash
pnpm install
pnpm dev
```

| Script | What it does |
| --- | --- |
| `pnpm dev` | Dev server with hot reload (Turbopack) |
| `pnpm build` | Production build |
| `pnpm typecheck` | Generate route types, then TypeScript |
| `pnpm lint` | ESLint |

Add components with `pnpm dlx shadcn@latest add <name>`. Theme tokens live in `src/app/globals.css`. `@/` points to `src/`.

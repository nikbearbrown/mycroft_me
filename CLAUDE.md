# CLAUDE.md — mycroft.biz

Home of the **Mycroft** open-source AI-powered investment intelligence framework. Next.js 15 App Router, TypeScript, React 19.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript + React 19 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Database | Neon serverless PostgreSQL (`@neondatabase/serverless`) |
| Auth | HMAC SHA-256 session cookie (no JWT, no OAuth) |
| Rich text | Tiptap (StarterKit, Image, YouTube, Underline, Link, Placeholder) |
| Visualizations | D3.js v7, lazy dynamic imports via registry |
| Image uploads | Vercel Blob (`@vercel/blob`) |
| AI rewriter | Anthropic API (`claude-haiku-4-5`) |
| Notifications | sonner (admin), shadcn/ui toast (public) |
| Analytics | `@vercel/analytics` |
| Dark mode | next-themes |

---

## Color palette — ftn (Financial Times Origami-inspired)

Background: `#FFF1E5`

| Var | Hex | HSL | Role | WCAG on bg | Level |
|-----|-----|-----|------|------------|-------|
| `--p1` | `#33302E` | `20 6% 19%` | charcoal — primary text | 11.83:1 | AAA |
| `--p2` | `#0D7680` | `183 83% 27%` | trendy-teal — primary accent | 4.84:1 | AA |
| `--p3` | `#CC0000` | `0 100% 40%` | crimson — danger/emphasis | 5.32:1 | AA |
| `--p4` | `#0F5499` | `211 80% 33%` | oxford-blue — highlight/callout | 6.9:1 | AA |
| `--p5` | `#990F3D` | `337 82% 33%` | claret — secondary accent | 7.62:1 | AAA |
| `--p6` | `#807973` | `24 5% 47%` | slate-grey — muted text | 3.87:1 | AA large |
| `--p7` | `#868F88` | `135 4% 55%` | link-underline — borders | 3.01:1 | AA large |
| `--p8` | `#FFF1E5` | `27 100% 95%` | paper-pink — page background | — | bg |

**Rules:**
- `p6` and `p7` are muted — use only for secondary text, borders, and decorative elements; never for body copy or interactive labels
- `p4` (oxford-blue) is the editorial/callout accent — use for pull quotes, data annotations, and opinion-register content
- `p5` (claret) is for secondary accent contexts — section headers, tags, secondary navigation
- `p2` (teal) is the primary interactive color — links, buttons, focus rings
- `p3` (crimson) is danger/alert only — do not use as a general accent
- Dark mode: brighten `p2` → `183 70% 40%`, `p4` → `211 65% 55%`, `p5` → `337 60% 50%` to maintain contrast on dark backgrounds

Tailwind token mapping (`globals.css` + `tailwind.config.ts`):
- `primary` → p2 trendy-teal
- `destructive` → p3 crimson
- `accent` → p4 oxford-blue
- `secondary` → p5 claret
- `muted` / `border` / `input` → p7 link-underline
- `foreground` → p1 charcoal
- `muted-foreground` → p6 slate-grey
- `background` → p8 paper-pink

---

## Environment variables

```bash
DATABASE_URL=            # Neon connection string (pooled)
ADMIN_PASSWORD=          # plain-text password hashed at runtime with HMAC SHA-256
ANTHROPIC_API_KEY=       # for /admin/dashboard/rewriter (claude-haiku-4-5) and orchestration agents (claude-sonnet-4-6)
BLOB_READ_WRITE_TOKEN=   # Vercel Blob — image uploads in BlogEditor
```

Create `.env.local` for local dev. All four are required for full functionality;
the site builds and renders without them but DB reads will 500 and admin login will fail.

---

## Database

Schema file: `schema.sql` — paste into the Neon SQL editor.

Tables:

| Table | Purpose |
|---|---|
| `users` | Registered users and their profiles |
| `portfolios` | User portfolio records |
| `holdings` | Individual position records per portfolio |
| `companies` | AI-sector company profiles and metadata |
| `research_reports` | Agent-generated research reports per company |
| `agent_runs` | Log of agent execution runs and status |
| `news_items` | Ingested news and intelligence feed items |
| `educational_content` | CMS-managed educational articles and lessons |
| `publication_personas` | AI rewriter personas (one default seeded) |

---

## Admin

- Login: `/admin/login` — password from `ADMIN_PASSWORD` env var
- Dashboard: `/admin/dashboard` — protected by middleware (`middleware.ts`)
- Nav: Overview · Blog · Tools · Substack · Rewriter

Session cookie: `admin_session`, 7-day HMAC SHA-256 token, httpOnly, sameSite=strict.

---

## Tools / Artifacts system

Two kinds of tools:

1. **Filesystem artifacts** — drop an `.html` file into `public/artifacts/`. It appears on `/tools` automatically via `lib/html-meta.ts:scanHtmlDir()`. No DB registration needed.
2. **Link tools** — DB rows in the `tools` table (`tool_type = 'link'`). Managed via admin Tools tab.

`/admin/dashboard/tools` has a "Sync Artifacts" button that registers filesystem files into the DB for tagging. Tags are stored as `TEXT[]` on both.

---

## Educational content editor

`components/BlogEditor/BlogEditor.tsx` — Tiptap-based with toolbar:
bold, italic, underline, strike, code, code block, H2, H3, lists, blockquote, HR, link, image upload (Vercel Blob), YouTube embed, D3 viz insert.

Default byline: `© 2026 Mycroft Project. All rights reserved.\n\nMycroft.biz`

Supports preview mode via `components/BlogVizHydrator/BlogVizHydrator.tsx`, which hydrates `data-viz` attributes in saved HTML into live D3 charts.

---

## D3 visualizations

Registry: `lib/viz/registry.ts` — maps names to lazy dynamic imports.
Built-in: `ai-adoption-bars`, `ai-ecosystem-graph`.

Add a new viz:
1. Create `lib/viz/my-viz.ts` exporting `default (el: HTMLElement) => void`
2. Add entry to `lib/viz/registry.ts`
3. It's available in BlogEditor's viz insert dropdown and renders via BlogVizHydrator

---

## AI agents

- **Admin rewriter:** `claude-haiku-4-5` — fast content rewriting in `/admin/dashboard/rewriter`
- **Orchestration agents:** `claude-sonnet-4-6` — analytical tasks including company research, report generation, and portfolio intelligence

---

## Scope

**Included:** dashboard, portfolio overview, agent status monitor, company research views, news/intelligence feed, educational content, user onboarding, goal-setting flows, admin CMS, API documentation pages, open-source contributor docs.

**Excluded (not needed for this site):** personal blog, personal contact form, consulting pages, Substack import, personal tools/artifacts browser.

---

## Key conventions

- DB queries use the lazy proxy from `lib/db.ts` (`import { sql } from '@/lib/db'`).
  Exception: `app/sitemap.ts` uses `neon()` directly for build-time static generation.
- All admin API routes call `isAdmin(request)` from `lib/admin-auth.ts` before any DB work.
- Slug uniqueness is enforced at the DB level (`UNIQUE` constraint); collisions return 409.
- `TEXT[]` is used for tags everywhere — filter with `= ANY(tags)` in SQL.
- No ORM, no migrations library — just raw SQL via the Neon serverless driver.

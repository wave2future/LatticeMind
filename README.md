# LatticeMind (多元智慧)

**Mental models, the psychology of misjudgment, and decision training — in one place.**

> See clearly, avoid misjudgment, decide better.

LatticeMind is a cognition‑and‑decision‑training platform that integrates multidisciplinary
mental models, Charlie Munger's psychology of human misjudgment, cognitive biases, logical
fallacies, systems‑thinking tools, real case studies, learning paths, and interactive decision
tools. The web app is fully bilingual (中文 / English).

Built from the product spec in `docs/` and the UI mockups in `ui/`.

---

## Features

- **Model library** — 38+ cross‑disciplinary mental models, each with a full template
  (first principle, mechanism, when to use / not use, common misuse, self‑tests, inversion,
  related biases/models). Bayesian Updating includes the formula with every term explained
  and a worked numeric example.
- **Psychology of misjudgment** — the 28 Munger tendencies, grouped by category.
- **Bias map** — cognitive biases classified by *cognitive stage* and *decision risk*.
- **Logical fallacies**, **systems thinking** (8 tools + 9 archetypes), **case studies**,
  and **5 learning paths**.
- **Decision tools** — multi‑model scan, anti‑misjudgment checklist, system mapping,
  decision review, and report export.
- **Beginner‑friendly** — an "In plain words" panel (everyday explanation + analogy +
  a concept diagram) on detail pages across all four knowledge sections.
- **Bilingual (中 / EN)** with a language switcher; architected to add more languages.
- **Google sign‑in** (Auth.js v5) with login‑gated account & admin areas and actions.
- **Admin CMS** views for managing models, biases, cases, the knowledge graph, and paths.

---

## Tech stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS** (design tokens from `ui/design-board.html`)
- **Auth.js v5** (NextAuth) with the Google provider — edge‑native
- Pure **SVG** for the knowledge graph and concept diagrams (no heavy chart deps)

---

## Repository layout

```
.
├── web/      # the Next.js application (all source code)
├── docs/     # product spec / PRD (git-ignored)
└── ui/       # design board + mockups (git-ignored)
```

---

## Local development

```bash
cd web
npm install
cp .env.local.example .env.local   # then fill in the values (see below)
npm run dev                        # http://localhost:3000 (auto-picks a free port if busy)
npm run build                      # production build (type-check + edge build)
```

### Environment variables

| Variable | Purpose |
|---|---|
| `AUTH_SECRET` | Secret for encrypting the session JWT. Generate: `openssl rand -base64 32`. |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth 2.0 Web client credentials. |

Create the OAuth client at <https://console.cloud.google.com/apis/credentials> with redirect URI
`<origin>/api/auth/callback/google` for each origin (local + production). Without these, the app
runs normally but the "Continue with Google" button is disabled.

---

## Deploy to Cloudflare Pages

The app runs on the **Edge runtime** and uses the `@cloudflare/next-on-pages` adapter, so it
deploys to Cloudflare Pages with full SSR (cookie‑based i18n + Google login preserved).

### Option A — Git integration (recommended)

1. Push this repo to GitHub (already at `github.com/wave2future/LatticeMind`).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - **Root directory:** `web`
   - **Build command:** `npx @cloudflare/next-on-pages@1`
   - **Build output directory:** `.vercel/output/static`
4. **Settings → Functions → Compatibility flags:** add `nodejs_compat`
   (and set a Compatibility date of `2024-09-23` or later).
5. **Settings → Environment variables** (Production + Preview): add
   `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`.
6. Add the production redirect URI in Google Cloud:
   `https://<your-project>.pages.dev/api/auth/callback/google`.
7. Deploy. Every push to `main` rebuilds automatically.

### Option B — Wrangler CLI

```bash
cd web
npx wrangler login
npm run pages:deploy          # runs next-on-pages, then deploys
```

> Note: the `next-on-pages` build invokes the Vercel CLI, which is unreliable on Windows.
> Build on macOS/Linux/WSL or let Cloudflare's CI (Option A) run it.

`web/wrangler.toml` already sets `compatibility_flags = ["nodejs_compat"]`,
`compatibility_date`, and `pages_build_output_dir`.

---

## License

Content is summarized and restructured from public sources for educational use; it does not
reproduce original texts.

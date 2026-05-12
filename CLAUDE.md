@AGENTS.md

# CLAUDE.md — experio-web (landing page)

Sister repo to [`KatinkaKlepsch/Experio`](https://github.com/KatinkaKlepsch/Experio) (native app, pitch decks, Supabase schema). **This repo = public landing page only.**

---

## Project: Experio landing page

Public marketing site at `myexperio.com` for Experio — a subscription-based cultural experiences app starting in Copenhagen with international ambition. Members pay a monthly fee to book concerts, cinema, stand-up, museums, wine tastings, workshops — without binding contracts.

**This repo's purpose:** marketing site + waitlist signup. NOT the app itself.

**Stage:** Pre-launch, accepting waitlist signups.

**Builders:** Co-founders Katinka Schjeldrup Klepsch and Ida Nørgaard (both Co-CEO). Katinka drives vision, venue-relationer, produkt; Ida drives vækst, operations, B2B-partnerskaber.

---

## Repo structure (two repos, shared brand, shared DB)

| Repo | Purpose | Deploys to |
|---|---|---|
| [`Experio`](https://github.com/KatinkaKlepsch/Experio) | Native app code (Expo + RN), pitch decks, Supabase schema, HTML mockups, business docs | Netlify `myexperiomvp.netlify.app` (from `UI/` folder) |
| **`experio-web`** ⭐ this repo | Next.js landing page + waitlist | **Cloudflare Pages** at `myexperio.com` / `experio-web.pages.dev` |

Both repos share the **same Supabase project** (`uijevrpnpenyphjibedv`). Schema migrations live in `Experio/supabase/migrations/` — this repo only consumes the schema.

**For deep product/business context:** read `~/Desktop/Experio/Experio/CLAUDE.md` and `~/Desktop/Experio/Experio/docs/` (masterplan, ARCHITECTURE, STRATEGIC-BLINDSPOTS, CVI).

---

## Tech stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | **Next.js 16.2.6** | App Router. Static export to Cloudflare. **Read `node_modules/next/dist/docs/` before writing Next-specific code** — Next 16 has breaking changes from typical training data (see `AGENTS.md`) |
| UI | **React 19** | |
| Styling | **Tailwind v4** | Brand tokens mirror CVI from sister repo |
| Forms | **react-hook-form + zod** | Waitlist signup form |
| Backend | **Supabase** | Shared with `Experio` repo. Waitlist signups → Supabase Edge Function → Resend (email confirmation) |
| Deploy | **Cloudflare Pages** | Auto-deploy on push to `main` |

### Don't suggest
- Switching framework — Next 16 is decided
- Heavy state libs (Redux, Zustand) — static landing page doesn't need them
- Analytics/tracking pixels without flagging (privacy-sensitive context)
- Adding features that contradict the pitch decks' MVP promises

---

## Brand (CVI v1.0)

Mirror `Experio/docs/CVI.md` — visual identity must be consistent across both repos.

- **Fonts:** Playfair Display (display/headings) + DM Sans (body/UI)
- **Aesthetic:** Light beige / warm white base, editorial, magazine-like — NOT SaaS-blue
- **Colors:**
  - Beige base: `#F0EDE6` · Card cream: `#FAF9F6`
  - Ink: `#1A1A1A` · soft `#5A5040` · muted `#8A7F72`
  - Gold accent: `#C8A96E` (light variant `#E8C98E`)
  - Dark bg: `#1A1209` (deep) / `#241810` (card)

---

## Critical things to know

### Waitlist signup flow
- Form lives in `app/` (Next App Router)
- Submits via Supabase Edge Function (`supabase/functions/waitlist-signup/` — lives in the `Experio` repo)
- Sends confirmation email via Resend
- Stores in `waitlist` table — migrations `0003_waitlist.sql` and `0004_waitlist_extra_fields.sql` live in `Experio` repo
- Schema changes require coordinated edits across both repos

### Cross-repo touchpoints
- Pitch decks in `Experio` reference `myexperio.com/venues` → that page lives here (build it if missing)
- Pitch deck QR codes scan to `myexperiomvp.netlify.app` (the `Experio` mockup) — separate from this landing page
- Both repos read from same Supabase DB — coordinate schema changes

### Contact emails (use these in any marketing copy)
- **Venues:** `venues@myexperio.com` — canonical venue-facing channel
- **Personal:** `katinkaklepsch@gmail.com` — internal/dev only, do NOT surface in marketing copy

### Copy voice (per sister-repo guidance)
- Redaktionel, varm, spontant — not SaaS-pitch
- Humble over presumptuous — avoid mind-reading framings ("Vi ved I tænker X" triggers reactance from sophisticated readers)
- Lifestyle framing over discount framing — Experio is curation, not coupons
- Confidence WITHOUT smugness

---

## How Claude should help

### Do
- Read Next 16 docs in `node_modules/next/dist/docs/` before suggesting Next-specific patterns (per AGENTS.md import)
- Reference the `Experio` repo when product/business context is needed
- Push back on copy drift from CVI tone
- Use lifestyle/cultural framing — not "discount" or "deal" language
- Flag any cross-repo coordination needed (schema, API, brand)

### Don't
- Don't introduce new framework or major deps without flagging
- Don't add analytics or tracking pixels silently
- Don't write copy that contradicts pitch decks (features not in MVP scope)
- Don't push directly to `main` without confirming with Katinka — Cloudflare auto-deploys live
- Don't use `solo founder` framing — Experio has two co-founders

---

## Working style

Same as sister repo:
- Danish for strategy, English for code/commits
- Critical co-founder voice, not yes-machine
- Ship-first, but not at the cost of types or fundamentals
- See `~/Desktop/Experio/Experio/CLAUDE.md` for full working-style notes

---

## When in doubt

Read the sister repo. `~/Desktop/Experio/Experio/` has CLAUDE.md, ARCHITECTURE.md, STRATEGIC-BLINDSPOTS.md, masterplan.html, CVI.md, plus pitch decks in `docs/pitch/`. Most product/positioning questions are answered there.

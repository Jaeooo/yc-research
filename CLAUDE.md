# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Data/research repo with a thin Astro front end for browsing it. It holds crawled YC (Y Combinator) company and founder data plus Korean-language analysis reports supporting a YC application, presented through a static site deployed to Vercel. Reports discuss the applying team only in generic terms (roles, backgrounds) — no personal names.

## Commands

- `npm run dev` — local dev server (Astro, HMR)
- `npm run build` — static build to `dist/` (what Vercel runs via `vercel.json`)
- `npm run preview` — serve the production build locally

No lint/test tooling configured.

## Structure

- `data/raw/`: raw data files (`yc_companies_all.{csv,json}`, `yc_founders_w25.{csv,json}`, `yc_founders_s24_w24.json`, `yc_idea_stage_analysis.json`) — the source of truth, edited directly. Not consumed by the site; reference-only.
- `data/overview/`: `*_overview.md` field/stats docs, one per raw dataset.
- `reports/`: all analysis reports (`.md`), in Korean. This is the actual content source for the site — loaded via an Astro content collection (`src/content.config.ts`, glob loader over `./reports`), not copied anywhere else.
- `src/pages/index.astro`: home page.
- `src/pages/reports/[slug].astro`: renders each report at `/reports/<filename-without-extension>/`, using the collection entry's `render()` output.
- `src/lib/reportMeta.ts`: hand-maintained map of report slug → `{ title, group }`, used to build sidebar nav and page titles. **New reports must be added here** or they won't appear in navigation (the page itself would still build and be reachable by direct URL, just absent from the sidebar).
- `src/layouts/Base.astro`: the whole shell — sidebar nav, GitHub link, light/dark/system theme toggle (persisted to `localStorage`, applied via `data-theme` on `<html>`), Korean/English toggle (Google Website Translator inline widget, cookie-based), OG/Twitter meta tags (per-page `description` from `reportMeta`, shared `public/og-image.png`), and Astro View Transitions (`<ClientRouter />`) with the sidebar marked `transition:persist` so only `<main>` swaps on navigation — except when English is active, where navigation falls back to full page loads so Google's widget can re-scan each page.

Editing a report only requires touching the one file in `reports/`; there is no docs-mirroring step (an earlier Docsify-based `docs/` copy was removed in favor of this Astro site).

## Data files

- `data/raw/yc_companies_all.csv` / `.json` — full YC company list (~5,653 companies, Summer 2009–Winter 2025, 43 batches). Fields: name, batch, year, industry, one_liner, website, team_size, status.
- `data/raw/yc_founders_w25.csv` / `.json` — Winter 2025 founders (321 people, 165 companies). Fields: company_name, founder_name, founder_title, founder_bio, founder_linkedin, founder_twitter.
- `data/raw/yc_founders_s24_w24.json` — Summer 2024 + Winter 2024 founders (566 companies, 1,075 founders), nested per-company with a `founders` array.
- `data/raw/yc_idea_stage_analysis.json` — supporting data for the idea-stage tracking report.

Each raw dataset has a matching `data/overview/*_overview.md` describing its fields/stats/samples — check those before writing code that parses the raw files.

## Reports

Reports live in `reports/`, in Korean, layered (matches the `group` field in `src/lib/reportMeta.ts`):
- 기본 분석 (base analysis): `yc_companies_report.md`, `yc_student_founders_report.md`, `yc_recent_batches_raw.md`, `yc_application_strategy.md`, `yc_report_ai_b2b.md`, `yc_report_asia.md`.
- 심화 리서치 (deeper research): `yc_interview_patterns.md`, `yc_korean_founders_deep_dive.md`, `yc_idea_stage_companies_tracking.md`, `yc_demo_day_investment_analysis.md`, `yc_competitive_landscape.md`, `yc_application_qa_analysis.md`, `yc_ai_b2b_gaps_analysis.md`, `yc_ai_b2b_complete_list.md`.

`README.md` (root) is a human-facing index describing recommended reading order and key insights — update it when adding a new report. It is documentation only, not read by the site.

## Conventions

- Written in Korean; keep new reports/edits in Korean to match existing content unless told otherwise.
- Data source note: crawled from ycombinator.com on 2026-07-22 — mention/preserve this provenance note when generating new reports from the same raw data.

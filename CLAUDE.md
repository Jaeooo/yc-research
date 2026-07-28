# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Data/research repo, not an application. It holds crawled YC (Y Combinator) company and founder data plus Korean-language analysis reports supporting a YC application ("김재우 & Aidan" team). There is no build, lint, or test tooling — nothing to compile or run.

## Structure

- `data/raw/`: raw data files (`yc_companies_all.{csv,json}`, `yc_founders_w25.{csv,json}`, `yc_founders_s24_w24.json`, `yc_idea_stage_analysis.json`) — the source of truth, edited directly.
- `data/overview/`: `*_overview.md` field/stats docs, one per raw dataset.
- `reports/`: all analysis reports (`.md`), in Korean.
- `docs/`: a **separate, flat copy** of the same `.md` reports (not raw data files) plus `index.html` and `_sidebar.md`, served as a static site via [Docsify](https://docsify.js.org) (loaded from CDN, no local build step) and deployed on Vercel per `vercel.json` (`outputDirectory: docs`). Files inside `docs/` are NOT nested into `data/`/`reports/` subfolders — Docsify serves them flat, matching the paths in `docs/_sidebar.md`.
- `docs/_sidebar.md` is the site nav — hand-maintained, must be updated when reports are added/removed/renamed. It also links out to raw data files on GitHub at `data/raw/...` paths.

**Important:** `reports/*.md` and `docs/*.md` are separate copies, not symlinked. When editing a report that should appear on the deployed site, update both copies (or copy `reports/X.md` → `docs/X.md`) and, for new reports, add an entry to `docs/_sidebar.md`. Likewise, root `README.md` and `docs/README.md` are separate copies — sync both when the index changes.

## Data files

- `data/raw/yc_companies_all.csv` / `.json` — full YC company list (~5,653 companies, Summer 2009–Winter 2025, 43 batches). Fields: name, batch, year, industry, one_liner, website, team_size, status.
- `data/raw/yc_founders_w25.csv` / `.json` — Winter 2025 founders (321 people, 165 companies). Fields: company_name, founder_name, founder_title, founder_bio, founder_linkedin, founder_twitter.
- `data/raw/yc_founders_s24_w24.json` — Summer 2024 + Winter 2024 founders (566 companies, 1,075 founders), nested per-company with a `founders` array.
- `data/raw/yc_idea_stage_analysis.json` — supporting data for the idea-stage tracking report.

Each raw dataset has a matching `data/overview/*_overview.md` describing its fields/stats/samples — check those before writing code that parses the raw files.

## Reports

Reports live in `reports/` (and are mirrored flat into `docs/` for the deployed site), in Korean, layered:
- Base analysis: `yc_companies_report.md`, `yc_student_founders_report.md`, `yc_recent_batches_raw.md`, `yc_application_strategy.md`, `yc_report_ai_b2b.md`, `yc_report_asia.md`.
- Deeper research: `yc_interview_patterns.md`, `yc_korean_founders_deep_dive.md`, `yc_idea_stage_companies_tracking.md`, `yc_demo_day_investment_analysis.md`, `yc_competitive_landscape.md`, `yc_application_qa_analysis.md`, `yc_ai_b2b_gaps_analysis.md`, `yc_ai_b2b_complete_list.md`.

`README.md` (root) is the human-facing index describing recommended reading order and key insights — update it when adding a new report, and mirror the change to `docs/README.md`.

## Conventions

- Written in Korean; keep new reports/edits in Korean to match existing content unless told otherwise.
- Data source note: crawled from ycombinator.com on 2026-07-22 — mention/preserve this provenance note when generating new reports from the same raw data.

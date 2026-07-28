import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "csv-parse/sync";

interface CompanyRow {
  name: string;
  batch: string;
  year: string;
  industry: string;
  one_liner: string;
  website: string;
  slug: string;
  team_size: string;
  status: string;
  url: string;
  long_description: string;
}

interface AiShareRow {
  year: string;
  total_companies: string;
  ai_companies: string;
  ai_share_pct: string;
}

const dataDir = resolve(process.cwd(), "data/raw");

function loadCsv<T>(filename: string): T[] {
  const raw = readFileSync(resolve(dataDir, filename), "utf-8");
  return parse(raw, { columns: true, skip_empty_lines: true }) as T[];
}

const companies = loadCsv<CompanyRow>("yc_companies_all.csv");
const aiShareRows = loadCsv<AiShareRow>("yc_ai_share_by_year.csv");

export const companiesByYear = Object.entries(
  companies.reduce<Record<string, number>>((acc, row) => {
    if (!row.year) return acc;
    acc[row.year] = (acc[row.year] ?? 0) + 1;
    return acc;
  }, {})
)
  .sort(([a], [b]) => Number(b) - Number(a))
  .map(([label, value]) => ({ label, value }));

export const aiShareByYear = aiShareRows
  .map((row) => ({ label: row.year, value: Number(row.ai_share_pct) }))
  .sort((a, b) => Number(b.label) - Number(a.label));

export const industryDistribution = Object.entries(
  companies.reduce<Record<string, number>>((acc, row) => {
    if (!row.industry) return acc;
    acc[row.industry] = (acc[row.industry] ?? 0) + 1;
    return acc;
  }, {})
)
  .sort(([, a], [, b]) => b - a)
  .map(([label, value]) => ({ label, value }));

export const statusDistribution = Object.entries(
  companies.reduce<Record<string, number>>((acc, row) => {
    if (!row.status) return acc;
    acc[row.status] = (acc[row.status] ?? 0) + 1;
    return acc;
  }, {})
)
  .sort(([, a], [, b]) => b - a)
  .map(([label, value]) => ({ label, value }));

const seasonOrder: Record<string, number> = { Winter: 0, Spring: 1, Summer: 2, Fall: 3 };

function batchSortKey(batch: string): number {
  const [season, year] = batch.split(" ");
  return Number(year) * 10 + (seasonOrder[season] ?? 0);
}

export const recentBatches = Object.entries(
  companies.reduce<Record<string, number>>((acc, row) => {
    if (!row.batch) return acc;
    acc[row.batch] = (acc[row.batch] ?? 0) + 1;
    return acc;
  }, {})
)
  .sort(([a], [b]) => batchSortKey(b) - batchSortKey(a))
  .slice(0, 12)
  .reverse()
  .map(([label, value]) => ({ label, value }));

const teamSizeBuckets: { label: string; test: (n: number) => boolean }[] = [
  { label: "1-5", test: (n) => n >= 1 && n <= 5 },
  { label: "6-10", test: (n) => n >= 6 && n <= 10 },
  { label: "11-20", test: (n) => n >= 11 && n <= 20 },
  { label: "21-50", test: (n) => n >= 21 && n <= 50 },
  { label: "51-100", test: (n) => n >= 51 && n <= 100 },
  { label: "100+", test: (n) => n > 100 },
];

export const teamSizeDistribution = teamSizeBuckets.map(({ label, test }) => ({
  label,
  value: companies.filter((row) => {
    const n = Number(row.team_size);
    return Number.isFinite(n) && n > 0 && test(n);
  }).length,
}));

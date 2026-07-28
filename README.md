# YC 프로젝트 — 파일 구조 & 리포트 인덱스

**작성일:** 2026-07-22  
**목적:** YC 배치 선정을 위한 데이터 분석 프로젝트  
**데이터 기준:** 2026-07-22 크롤링 (W24, S24, W25 포함)

---

## 📁 전체 구조

```
YC-Project/
│
├── data/
│   ├── raw/                              — Raw 데이터 (6개)
│   │   ├── yc_companies_all.csv          — 전체 YC 기업 5,653개 (CSV)
│   │   ├── yc_companies_all.json         — 전체 YC 기업 5,653개 (JSON)
│   │   ├── yc_founders_w25.csv           — W25 창업자 321명 (CSV)
│   │   ├── yc_founders_w25.json          — W25 창업자 321명 (JSON)
│   │   ├── yc_founders_s24_w24.json      — S24+W24 창업자 1,075명 (JSON)
│   │   └── yc_idea_stage_analysis.json   — 아이디어 단계 추적 데이터
│   │
│   └── overview/                         — 데이터 Overview (3개)
│       ├── yc_companies_all_overview.md  — 전체 기업 데이터 필드/통계/샘플
│       ├── yc_founders_w25_overview.md   — W25 창업자 데이터 필드/통계/샘플
│       └── yc_founders_s24_w24_overview.md — S24+W24 창업자 데이터 구조/통계
│
├── reports/                              — 분석 리포트 (14개)
│   ├── yc_companies_report.md            — 전체 기업 경향성 분석
│   ├── yc_student_founders_report.md     — 학부생/중퇴 창업팀 분석
│   ├── yc_recent_batches_raw.md          — 최근 3개 배치 raw 데이터 (MD 테이블)
│   ├── yc_application_strategy.md        — 김재우 & Aidan 팀 YC 합격 전략
│   ├── yc_report_ai_b2b.md               — AI+B2B 방향 분석
│   ├── yc_report_asia.md                 — 한국/아시아 특화 방향 분석
│   ├── yc_interview_patterns.md          — 인터뷰 패턴
│   ├── yc_korean_founders_deep_dive.md   — 한국 창업자 심층
│   ├── yc_idea_stage_companies_tracking.md — 아이디어 단계 추적
│   ├── yc_demo_day_investment_analysis.md — Demo Day 투자 분석
│   ├── yc_competitive_landscape.md       — 경쟁사 매핑
│   ├── yc_application_qa_analysis.md     — 지원서 Q&A
│   ├── yc_ai_b2b_gaps_analysis.md        — AI B2B 빈틈
│   └── yc_ai_b2b_complete_list.md        — AI B2B 전체 리스트
│
├── docs/                                 — Docsify 문서 사이트 (Vercel 배포, 별도 사본)
│
├── CLAUDE.md                             — Claude Code 작업 가이드
└── README.md                             — 이 파일 (프로젝트 인덱스)
```

---

## 📊 Raw 데이터 상세

### yc_companies_all (CSV/JSON)
| 항목 | 내용 |
|------|------|
| **레코드 수** | 5,653개 기업 |
| **기간** | Summer 2009 ~ Winter 2025 |
| **배치 수** | 43개 |
| **주요 필드** | name, batch, year, industry, one_liner, website, team_size, status |
| **상세** | `data/overview/yc_companies_all_overview.md` 참고 |

### yc_founders_w25 (CSV/JSON)
| 항목 | 내용 |
|------|------|
| **레코드 수** | 321명 (창업자별 행) |
| **포함 기업** | 165개 |
| **배치** | Winter 2025 |
| **주요 필드** | company_name, founder_name, founder_title, founder_bio, founder_linkedin, founder_twitter |
| **상세** | `data/overview/yc_founders_w25_overview.md` 참고 |

### yc_founders_s24_w24 (JSON)
| 항목 | 내용 |
|------|------|
| **포함 기업** | 566개 |
| **총 창업자** | 1,075명 |
| **배치** | Summer 2024 + Winter 2024 |
| **구조** | 회사별 중첩 JSON (founders 배열 포함) |
| **상세** | `data/overview/yc_founders_s24_w24_overview.md` 참고 |

---

## 📄 리포트 읽기 순서 (추천)

### 1단계: 전체 현황 파악
| 순서 | 파일 | 내용 |
|------|------|------|
| 1 | `reports/yc_companies_report.md` | YC 전체 기업 경향성 (연도별, 산업별, AI 비율 등) |
| 2 | `reports/yc_recent_batches_raw.md` | 최근 3개 배치 (W24, S24, W25) 기업 리스트 |

### 2단계: 창업자 분석
| 순서 | 파일 | 내용 |
|------|------|------|
| 3 | `reports/yc_student_founders_report.md` | 학부생/중퇴 창업팀 93개 기업 분석 |
| 4 | `reports/yc_application_strategy.md` | 비전통적 배경으로 YC 합격한 패턴 분석 |

### 3단계: 방향 설정
| 순서 | 파일 | 내용 |
|------|------|------|
| 5 | `reports/yc_report_ai_b2b.md` | AI+B2B 방향 — 270개 기업 분석, 8개 세부 카테고리 |
| 6 | `reports/yc_report_asia.md` | 한국/아시아 방향 — 139개 기업, 13명 한국인 창업자 |

### 4단계: 심화 리서치
| 파일 | 내용 |
|------|------|
| `reports/yc_interview_patterns.md` | 인터뷰 패턴 |
| `reports/yc_korean_founders_deep_dive.md` | 한국 창업자 심층 |
| `reports/yc_idea_stage_companies_tracking.md` | 아이디어 단계 추적 |
| `reports/yc_demo_day_investment_analysis.md` | Demo Day 투자 분석 |
| `reports/yc_competitive_landscape.md` | 경쟁사 매핑 |
| `reports/yc_application_qa_analysis.md` | 지원서 Q&A |
| `reports/yc_ai_b2b_gaps_analysis.md` | AI B2B 빈틈 |
| `reports/yc_ai_b2b_complete_list.md` | AI B2B 전체 리스트 |

---

## 🔑 핵심 인사이트 요약

### YC 전체 경향성
- **AI 기업 비율:** 2021년 17% → 2025년 62% (폭발적 증가)
- **B2B 비중:** W25의 61.4% (역대 최고)
- **배치 규모 축소:** 429명(W22) → 166명(W25) — 더 까다로운 선발

### 창업자 프로필
- **Stanford 1위:** W25의 9.7% (W24의 2배)
- **기술 배경 75%:** 엔지니어/연구자 출신이 대다수
- **중퇴자 증가:** 2.7%(W24) → 5.3%(W25)
- **연속 창업자:** 5%(W24) → 10%(W25)

### 김재우 & Aidan 팀 합격 전략
- ✅ 한국인 창업자 13명 (W24-W25) — 커뮤니티 존재
- ✅ 비-Stanford/MIT 출신 48% — 충분히 경쟁 가능
- ✅ 군 복무 경험 창업자 41명 — 긍정적 시그널
- ✅ 회계+공학 조합 98개 팀 — YC 선호 패턴
- ✅ 아이디어 단계 합격 34명 — traction 없이도 가능

---

## 📌 다음 단계

1. **방향 확정** — AI+B2B vs 한국/아시아 특화 vs 결합
2. **아이디어 구체화** — 타겟 시장, 고객, 해결할 문제 정의
3. **MVP 개발** — 빠른 프로토타입
4. **YC 지원서 준비** — 팀 스토리, 비전, traction 계획

---

*데이터 소스: ycombinator.com 크롤링 (2026-07-22)*

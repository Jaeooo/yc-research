# YC 창업자 커리어/스펙 분석 (W25)

**분석 범위:** Winter 2025 배치 창업자 323명 (bio 기재 318명, 165개 기업)
**분석 방법:** `founder_bio` 텍스트 내 학교/전 직장/경력 키워드 직접 검토
**작성일:** 2026-07-28

---

## 1. 학교 배경 (bio 내 언급 빈도)

| 학교 | 언급 수 |
|------|---------|
| Stanford | 31 |
| MIT | 29 |
| Berkeley | 13 |
| Harvard | 13 |
| Waterloo | 9 |
| Penn | 9 |
| Georgia Tech | 7 |
| Cornell | 6 |
| Columbia | 6 |
| Princeton | 6 |
| ETH Zurich | 5 |
| Imperial College | 5 |
| Cambridge | 6 |
| Oxford | 3 |

→ Stanford·MIT가 압도적 1·2위. 그 다음은 Berkeley/Harvard가 비슷한 수준. 유럽권(ETH Zurich, Imperial, Cambridge, Oxford)도 꾸준히 등장 — 미국 명문대에 국한되지 않음.

---

## 2. 전 직장 (Big Tech 언급 빈도)

| 기업 | 언급 수 |
|------|---------|
| Google | 18 |
| Amazon | 10 |
| Meta | 10 |
| Microsoft | 9 |
| Apple | 8 |
| SpaceX | 7 |
| Tesla | 6 |
| Nvidia | 4 |

→ Google이 가장 흔한 전 직장. SpaceX/Tesla 등 딥테크·하드웨어 기업 경력자도 다수 — 소프트웨어 빅테크 출신에 국한되지 않고 항공우주/자율주행 등 하드코어 엔지니어링 배경도 상당수.

---

## 3. 학위 수준

| 구분 | bio 내 언급 수 |
|------|----------------|
| PhD 언급 (재학/중퇴 포함) | 13 |
| Master's/MS 언급 | 18 |
| 대학 중퇴(dropout) 언급 | 17 |

→ 석박사 학위 보유자가 상당수(31명, ~10%)이지만, 중퇴자 수(17명)도 거의 비슷한 규모 — "명문대 학위"와 "중퇴하고 바로 창업" 두 경로가 공존.

---

## 4. 특이 경력 패턴

| 패턴 | bio 내 언급 수 |
|------|----------------|
| 연쇄 창업자 (2nd/3x/serial founder 등) | 11 |
| 군 경력 또는 NASA/국방 관련 경력 | 17 |
| 이전 스타트업 인수(acquired) 경험 | 13 |

→ "이전에 회사를 팔아본 경험이 있는" 창업자가 13명(약 4%) — 완전 초보 창업자만 있는 게 아님. 군 출신·항공우주 계열(NASA, 국방 관련) 경력도 17건으로 꾸준함.

### 어린 나이 성과 사례 (bio에 나이 명시)

| 기업 | 창업자 | 내용 |
|------|--------|------|
| Artificial Societies | James He | 16세에 자신의 에드테크 스타트업에 $600K 투자 제안 받았으나 거절, Cambridge 진학 |
| Bild AI | Roop Pal | Columbia CS 학사 19세 졸업 |
| Bild AI | Puneet Sukhija | 16세에 첫 주택 건설, 23세까지 수백 채 건설 후 회사 인수됨 |
| Edexia | Daniel Gibbon / Nathan Wang | 17~18세에 에드테크로 ARR 200K 달성 |
| FuseAI | Imogen Low | 17세에 SAP 이노베이션팀 합류 |
| Tergle | Adam Bowen | 17세에 아이비리그 포기하고 혼자 도쿄行 |
| Axiom | Henry Zhang | 20세에 대학 졸업, 이미 exit 1회 |
| Stamp | Archit Mehta | 20세 졸업, 이미 5만+ 유저 제품 빌드 경험 |

→ 10대 후반~20대 초반에 이미 실질적 성과(투자 유치, 매출, 빅테크 입사, exit)를 낸 사례가 다수 — "어린 나이 + 이미 증명된 실행력" 조합이 W25 배치에서 반복되는 패턴.

---

## 5. 종합 인사이트

1. **학교보다 "무엇을 만들었는가"가 우선.** Bio 대부분이 학교명보다 이전에 만든 제품/스케일한 지표(ARR, 유저 수, exit)를 먼저 언급.
2. **비명문대 + 실전 경험 조합도 흔함.** UC Davis 중퇴, 대학 중퇴 후 바로 실무(Capital One, Apple 등) 경험을 강조하는 케이스가 다수 — 학벌이 없어도 구체적 실행 이력이 있으면 문제 없어 보임.
3. **두 번째(혹은 세 번째) 창업인 경우가 많음.** "2nd time founder", "serial entrepreneur" 표현이 반복 — 첫 창업 실패/exit 경험이 오히려 강점으로 서술됨.
4. **하드웨어·딥테크 배경 비중이 낮지 않음.** SpaceX, Tesla, NASA, Relativity Space, 항공우주 PhD 등 — AI/소프트웨어 일변도가 아니라 물리적 시스템을 다뤄본 창업자도 상당수.
5. **국적/지역 다양성.** 한국(Cuckoo Labs), 모로코(ZeroEntropy), 스웨덴(Vantel, Vetnio), 이스라엘(Closure) 등 미국 외 출신 창업자들도 국가별 커리어(현지 군 복무, 현지 대기업 경력)를 정체성으로 명시.

---

## 관련 데이터

- `data/raw/yc_founders_w25.csv` — W25 창업자 321명 원본 (founder_bio 필드 기반 분석)

---

*데이터 소스: ycombinator.com 크롤링 (2026-07-22), founder_bio 필드 직접 검토*

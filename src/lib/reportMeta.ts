interface ReportMeta {
  title: string;
  group: string;
  description: string;
}

export const reportMeta: Record<string, ReportMeta> = {
  yc_companies_report: {
    title: "전체 기업 경향성",
    group: "기본 분석",
    description: "YC 전체 5,653개 기업 연도별·산업별 경향성 분석.",
  },
  yc_student_founders_report: {
    title: "학부생/중퇴 팀",
    group: "기본 분석",
    description: "학부생·중퇴 창업팀 93개 기업 분석.",
  },
  yc_recent_batches_raw: {
    title: "최근 배치 Raw",
    group: "데이터",
    description: "최근 3개 배치(W24, S24, W25) 기업 리스트 원본.",
  },
  yc_application_strategy: {
    title: "합격 전략",
    group: "심화 리서치",
    description: "비전통적 배경으로 YC 합격한 패턴 분석 및 팀 지원 전략.",
  },
  yc_report_ai_b2b: {
    title: "AI+B2B 분석",
    group: "기본 분석",
    description: "AI+B2B 방향 270개 기업 분석, 8개 세부 카테고리.",
  },
  yc_report_asia: {
    title: "한국/아시아 분석",
    group: "기본 분석",
    description: "한국/아시아 방향 139개 기업, 13명 한국인 창업자 분석.",
  },
  yc_interview_patterns: {
    title: "인터뷰 패턴",
    group: "심화 리서치",
    description: "YC 인터뷰 패턴 분석.",
  },
  yc_korean_founders_deep_dive: {
    title: "한국 창업자 심층",
    group: "심화 리서치",
    description: "한국인 창업자 심층 분석.",
  },
  yc_idea_stage_companies_tracking: {
    title: "아이디어 단계 추적",
    group: "심화 리서치",
    description: "아이디어 단계에서 합격한 기업 추적.",
  },
  yc_demo_day_investment_analysis: {
    title: "Demo Day 투자 분석",
    group: "심화 리서치",
    description: "Demo Day 투자 동향 분석.",
  },
  yc_competitive_landscape: {
    title: "경쟁사 매핑",
    group: "심화 리서치",
    description: "경쟁사 매핑 및 시장 지형 분석.",
  },
  yc_application_qa_analysis: {
    title: "지원서 Q&A",
    group: "심화 리서치",
    description: "YC 지원서 질의응답 분석.",
  },
  yc_ai_b2b_gaps_analysis: {
    title: "AI B2B 빈틈",
    group: "심화 리서치",
    description: "AI B2B 시장 빈틈 분석.",
  },
  yc_ai_b2b_complete_list: {
    title: "AI B2B 전체 리스트",
    group: "심화 리서치",
    description: "AI B2B 전체 기업 리스트.",
  },
  yc_founders_career_analysis: {
    title: "창업자 커리어/스펙 분석",
    group: "기본 분석",
    description: "W25 창업자 323명 학교/전 직장/경력 패턴 분석.",
  },
};

export const groupOrder = ["기본 분석", "심화 리서치", "데이터"];

export const reportMetaEn: Record<string, ReportMeta> = {
  yc_companies_report: {
    title: "Company Trends",
    group: "Core Analysis",
    description: "Year-over-year and industry breakdown of all 5,653 YC companies.",
  },
  yc_student_founders_report: {
    title: "Student & Dropout Teams",
    group: "Core Analysis",
    description: "Analysis of 93 companies founded by students or dropouts.",
  },
  yc_recent_batches_raw: {
    title: "Recent Batches Raw Data",
    group: "Data",
    description: "Raw company list for the 3 most recent batches (W24, S24, W25).",
  },
  yc_application_strategy: {
    title: "Application Strategy",
    group: "Deep Research",
    description: "Patterns behind YC acceptance from non-traditional backgrounds, and application strategy.",
  },
  yc_report_ai_b2b: {
    title: "AI + B2B Analysis",
    group: "Core Analysis",
    description: "Analysis of 270 companies in the AI+B2B direction across 8 sub-categories.",
  },
  yc_report_asia: {
    title: "Korea / Asia Analysis",
    group: "Core Analysis",
    description: "Analysis of 139 Korea/Asia-focused companies and 13 Korean founders.",
  },
  yc_interview_patterns: {
    title: "Interview Patterns",
    group: "Deep Research",
    description: "Analysis of YC interview patterns.",
  },
  yc_korean_founders_deep_dive: {
    title: "Korean Founders Deep Dive",
    group: "Deep Research",
    description: "Deep dive into Korean founders.",
  },
  yc_idea_stage_companies_tracking: {
    title: "Idea-Stage Tracking",
    group: "Deep Research",
    description: "Tracking companies accepted at the idea stage.",
  },
  yc_demo_day_investment_analysis: {
    title: "Demo Day Investment Analysis",
    group: "Deep Research",
    description: "Analysis of Demo Day investment trends.",
  },
  yc_competitive_landscape: {
    title: "Competitive Landscape",
    group: "Deep Research",
    description: "Competitive mapping and market landscape analysis.",
  },
  yc_application_qa_analysis: {
    title: "Application Q&A",
    group: "Deep Research",
    description: "Analysis of YC application Q&A.",
  },
  yc_ai_b2b_gaps_analysis: {
    title: "AI B2B Gaps",
    group: "Deep Research",
    description: "Analysis of gaps in the AI B2B market.",
  },
  yc_ai_b2b_complete_list: {
    title: "AI B2B Complete List",
    group: "Deep Research",
    description: "Complete list of AI B2B companies.",
  },
  yc_founders_career_analysis: {
    title: "Founder Career/Background Analysis",
    group: "Core Analysis",
    description: "Analysis of school/prior-job/career patterns across 323 W25 founders.",
  },
};

export const groupOrderEn = ["Core Analysis", "Deep Research", "Data"];

# Porter's Five Forces — AI 슬라이드 생성 프롬프트
> Mindpack AI | mindpackai.netlify.app

---

## 사용법

1. 이 파일 전체를 ChatGPT 또는 Claude에 붙여넣으세요
2. [분석 대상] 섹션에 산업/시장 자료를 붙여넣으세요
3. "분석하고 HTML 슬라이드를 생성해줘" 라고 입력하세요
4. 출력된 HTML을 .html로 저장 → 브라우저에서 확인

### 입력 가능 자료
- 산업 리포트, 시장 조사 자료
- 경쟁사 분석, 공급업체/유통 채널 정보
- 고객 세그먼트 데이터, 대체재 동향

---

## [분석 대상]

```
여기에 분석할 자료를 붙여넣으세요.
```

---

## AI 시스템 프롬프트

당신은 하버드 경영대학원 전략 교수 수준의 산업 분석 전문가입니다.
제공된 자료를 Porter's Five Forces로 분석하고, 아래 디자인 시스템에 따라 단일 HTML 파일 프레젠테이션을 생성하세요.

### 분석 규칙
- 제공된 자료에 근거. 추측 금지
- 자료 부족 시 "추가 조사 필요"로 표시
- 각 Force의 강도를 상/중/하로 평가
- 모든 텍스트는 한국어

### Five Forces 분석 요소

1. 기존 경쟁자 간 경쟁 강도 (Industry Rivalry)
   - 경쟁자 수와 규모 분포, 산업 성장률, 제품 차별화 수준
   - 고정비 구조, 전환비용, 퇴출 장벽

2. 신규 진입자의 위협 (Threat of New Entrants)
   - 진입 장벽: 규모의 경제, 브랜드 충성도, 자본 요구, 규제
   - 기존 업체의 보복 가능성

3. 대체재의 위협 (Threat of Substitutes)
   - 대체재의 가격 대비 성능, 전환비용
   - 기술 변화에 따른 대체 가능성

4. 공급자의 교섭력 (Bargaining Power of Suppliers)
   - 공급자 집중도, 전환비용, 전방통합 가능성
   - 대체 공급원 존재 여부

5. 구매자의 교섭력 (Bargaining Power of Buyers)
   - 구매자 집중도, 가격 민감도, 후방통합 가능성
   - 정보 비대칭 수준

### 종합 분석
- 5개 Force의 상대적 강도 비교
- 산업 매력도 평가 (수익성 전망)
- 전략적 포지셔닝 권고

---

## 슬라이드 구성 (10슬라이드)

| # | 타입 | 내용 |
|---|------|------|
| 1 | Hero Title | 산업명 + "Porter's Five Forces 분석" |
| 2 | Asymmetric Split | Executive Summary — 산업 매력도 + 핵심 발견 |
| 3 | Full Bleed Diagram | Five Forces 다이어그램 — 중앙 Rivalry, 4방향 Force |
| 4 | Left Sidebar + Content | Force 1: 경쟁 강도 심층 분석 |
| 5 | Top Bar + Body | Force 2-3: 신규 진입자 + 대체재 위협 |
| 6 | Stacked Cards (1×2) | Force 4-5: 공급자 + 구매자 교섭력 |
| 7 | Data Table | Five Forces 강도 비교표 |
| 8 | Numbered List | 핵심 발견사항 + 산업 매력도 평가 |
| 9 | Timeline / Flow | 전략적 대응 로드맵 |
| 10 | CTA / Closing | 다음 단계 + Mindpack AI |

---

## 디자인 시스템

### 기술 스택 (필수)
```html
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
<script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>
<script>
tailwind.config = {
  theme: { extend: { fontFamily: { sans: ['Pretendard','system-ui','sans-serif'] } } }
}
</script>
```

### 테마: Structural Power
```
Primary:   #7f1d1d (red-900)
Accent:    #ef4444 (red-500)
Surface:   #fef2f2
Background: #ffffff
Text:      #18181b
Text-sub:  #71717a
```

### 절대 금지 사항
- 이모지 금지 → Iconify Solar 아이콘
- 연속 동일 레이아웃 금지
- 3열 균등 카드 금지
- 가짜 통계 금지

### 한글: word-break: keep-all, leading-tight/relaxed
### 네비게이션: 1280×720, ← → Space F, "Mindpack AI" 우측 상단
### 인쇄: page-break-after, print-color-adjust: exact

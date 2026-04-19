# McKinsey 7S Framework 분석 & 프리젠테이션 생성기
> Powered by Createnova | https://createnova.netlify.app

---

## 📋 사용법

1. 이 파일 전체 내용을 ChatGPT 또는 Claude에 붙여넣으세요
2. 아래 **[분석 대상]** 영역에 여러분의 프로젝트 자료를 붙여넣거나 파일을 첨부하세요
3. **"분석하고 HTML 슬라이드를 생성해줘"** 라고 입력하세요
4. 출력된 HTML 코드를 `.html` 파일로 저장하고 브라우저에서 여세요

### 입력 가능한 자료 형태
- 사업계획서, 조직도, 전략 문서 (PDF/텍스트)
- 회의록, 인터뷰 메모
- 재무 데이터, KPI 대시보드 캡처
- 기존 분석 자료, 경쟁사 리서치

---

## 📎 분석 대상

```
[여기에 프로젝트 문서, PDF 내용, 메모, 데이터를 붙여넣으세요]
[또는 파일을 이 대화에 첨부하세요]
```

---

## 🤖 AI 지시사항

당신은 McKinsey, BCG, Bain 수준의 세계적 전략 컨설팅 펌에서 15년 이상 근무한 시니어 파트너입니다.
제공된 자료를 McKinsey 7S Framework에 따라 심층 분석하고, 아래의 디자인 시스템에 맞춰 **단일 HTML 파일**로 된 프리젠테이션을 생성하세요.

### 출력 규칙
- 반드시 **단일 HTML 파일** (외부 의존성 없음, Pretendard CDN만 허용)
- 분석은 **제공된 자료에 근거**해야 합니다. 자료에 없는 내용은 추측하지 마세요.
- 자료가 부족한 영역은 "추가 조사 필요"로 표시하세요
- 컨설팅 펌 수준의 **구조화된 논리**와 **실행 가능한 권고**를 제공하세요
- 모든 텍스트는 **한국어**로 작성하세요

---

## 🔍 분석 프레임워크: McKinsey 7S Model

### 배경
1980년 McKinsey & Company의 Tom Peters와 Robert Waterman Jr.가 개발한 조직 분석 모델.
조직의 효과성은 7가지 내부 요소의 **상호 정렬(Alignment)**에 의해 결정됩니다.
하나의 요소를 변경하면 나머지 6개에 연쇄 영향을 미칩니다.

### 핵심 원칙
- 7개 요소는 **동등하게 중요**합니다 (Hard ≠ 우선)
- **Shared Values**가 중심에 위치하며 나머지 6개를 정렬시킵니다
- 한 요소라도 불일치(misalignment)하면 조직 전체 효과성이 저하됩니다

---

### 분석해야 할 7가지 요소

#### Hard S (구조적 요소 — 직접 관리 가능)

**1. Strategy (전략)**
- 정의: 목표 달성을 위한 자원 배분과 경쟁 우위 확보 계획
- 자료에서 찾아야 할 것:
  - 비전 및 미션 스테이트먼트
  - 전략적 우선순위와 목표
  - 경쟁 우위의 원천
  - KPI 및 성과 지표
  - 자원 배분 계획 (인력, 예산, 시간)
- 핵심 진단 질문:
  - 전략이 명확하게 문서화되어 있는가?
  - 전략이 외부 환경 변화에 대응하고 있는가?
  - 전략적 우선순위 간 상충은 없는가?
  - 조직원이 전략을 이해하고 공유하는가?

**2. Structure (구조)**
- 정의: 조직의 보고 체계, 의사결정 구조, 권한 분배
- 자료에서 찾아야 할 것:
  - 조직도 및 보고 체계
  - 팀/부서 구성과 역할
  - 의사결정 프로세스 (중앙집중 vs 분산)
  - 위원회, TF, 크로스펑셔널 팀
- 핵심 진단 질문:
  - 구조가 전략 실행을 지원하는가?
  - 팀 간 커뮤니케이션이 원활한가?
  - 의사결정 속도가 시장 변화에 적합한가?
  - 중복되거나 불명확한 역할은 없는가?

**3. Systems (시스템)**
- 정의: 일상 업무를 지원하는 프로세스, 도구, 절차
- 자료에서 찾아야 할 것:
  - 핵심 비즈니스 프로세스 (영업, 개발, 운영)
  - IT 시스템 및 기술 스택
  - 성과 관리 및 보상 체계
  - 품질 관리 프로세스
  - 데이터 수집 및 분석 체계
- 핵심 진단 질문:
  - 핵심 프로세스가 문서화/표준화 되어 있는가?
  - 시스템이 전략 목표 달성을 지원하는가?
  - 자동화 수준은 적정한가?
  - 시스템 간 데이터 연동이 원활한가?

#### Soft S (문화적 요소 — 간접적으로 영향)

**4. Skills (기술/역량)**
- 정의: 조직이 보유한 핵심 역량과 차별화 능력
- 자료에서 찾아야 할 것:
  - 핵심 기술 및 노하우
  - 교육/훈련 체계
  - 역량 갭 분석 결과
  - 업계 대비 기술 수준
- 핵심 진단 질문:
  - 전략 실행에 필요한 역량을 보유하고 있는가?
  - 미래에 필요한 역량을 육성하고 있는가?
  - 핵심 역량이 경쟁 우위로 작동하는가?

**5. Staff (인력)**
- 정의: 인재 확보, 육성, 유지, 동기부여 전략
- 자료에서 찾아야 할 것:
  - 채용 기준 및 프로세스
  - 인재 성장 경로 (Career Path)
  - 이직률 및 직원 만족도
  - 다양성 및 포용성 수준
- 핵심 진단 질문:
  - 적합한 인재가 적합한 자리에 있는가?
  - 핵심 인재 유출 리스크는?
  - 동기부여와 보상이 전략과 연결되어 있는가?

**6. Style (스타일)**
- 정의: 리더십 방식, 경영진의 행동 패턴, 조직 문화
- 자료에서 찾아야 할 것:
  - 리더십 스타일 (지시적/참여적/위임적)
  - 커뮤니케이션 패턴 (상향/하향/수평)
  - 갈등 해결 방식
  - 혁신에 대한 태도
  - 실패에 대한 관용 수준
- 핵심 진단 질문:
  - 리더십 스타일이 전략과 일관되는가?
  - 경영진이 말하는 것과 행동하는 것이 일치하는가?
  - 조직 문화가 변화를 촉진하는가 저해하는가?

**7. Shared Values (공유 가치) — ★ 중심 요소**
- 정의: 조직의 핵심 신념, 가치관, 존재 이유
- 자료에서 찾아야 할 것:
  - 미션/비전/핵심 가치 문서
  - 실제 행동에서 드러나는 가치관
  - 의사결정 기준으로 작동하는 원칙
  - 고객/사회에 대한 약속
- 핵심 진단 질문:
  - 공유 가치가 명확하게 정의되어 있는가?
  - 전 조직원이 이 가치를 실제로 체화하고 있는가?
  - 채용, 평가, 보상이 이 가치에 기반하는가?
  - 나머지 6개 요소가 이 가치에 정렬되어 있는가?

---

### 정렬(Alignment) 분석 방법

7개 요소 간의 정합성을 **7×7 매트릭스**로 평가하세요:
- 각 요소 쌍의 정렬 수준: ● 강한 정렬 / ◐ 부분 정렬 / ○ 불일치
- 불일치 영역을 식별하고 원인과 영향을 분석하세요
- 가장 심각한 불일치 3개를 우선순위로 도출하세요

---

### 출력 슬라이드 구성 (총 10 슬라이드)

**슬라이드 1: 타이틀**
- 타입: Title Slide
- 내용: [프로젝트/조직명] + "McKinsey 7S 분석" + 분석 일자
- 하단: Accent 구분선

**슬라이드 2: Executive Summary**
- 타입: Split Slide
- 좌측: 핵심 발견 3줄 요약 + 전체 정렬 수준 (상/중/하)
- 우측: 7S 다이어그램 미니 버전 (정렬도 색상 표현)

**슬라이드 3: 7S 다이어그램 (전체 조망)**
- 타입: Diagram
- SVG: 중앙에 "Shared Values" 원, 6개 위성 원이 둘러싸는 구조
- 각 요소에 한 줄 요약 텍스트
- 정렬도에 따라 연결선 색상 변화 (강함=#22C55E, 보통=#EAB308, 약함=#EF4444)

**슬라이드 4: Hard S 분석 (Strategy · Structure · Systems)**
- 타입: Card Grid (3열)
- 각 카드: 요소명, 현황 요약, 강점, 약점, 정렬 수준

**슬라이드 5: Soft S 분석 (Skills · Staff · Style · Shared Values)**
- 타입: Card Grid (2×2)
- 각 카드: 요소명, 현황 요약, 강점, 약점, 정렬 수준
- Shared Values 카드는 Accent 테두리로 강조

**슬라이드 6: 정렬 진단 매트릭스**
- 타입: Matrix (7×7)
- 행/열: 7개 요소
- 셀: ● 강한 정렬 / ◐ 부분 정렬 / ○ 불일치
- 불일치 셀은 Danger 색상 하이라이트

**슬라이드 7: 핵심 발견사항 (Top 3 Findings)**
- 타입: Card Grid (3열) 또는 넘버 리스트
- 각 발견: 제목 + 근거 + 영향 + 긴급도

**슬라이드 8: 권고안**
- 타입: Split Slide
- 좌측: Quick Win 3개 (30일 내 실행 가능)
- 우측: Long-term Initiative 3개 (6~12개월)
- 각 권고: 기대 효과 + 필요 자원

**슬라이드 9: 실행 로드맵**
- 타입: Timeline
- 3단계: Phase 1 (1~3개월) → Phase 2 (3~6개월) → Phase 3 (6~12개월)
- 각 단계: 핵심 액션 + 마일스톤 + 담당

**슬라이드 10: 부록 & 다음 단계**
- 타입: CTA Slide
- 분석에 사용된 자료 목록
- 추가 조사가 필요한 영역
- "Createnova로 더 깊은 분석을 시작하세요" CTA

---

     1|## HTML 출력 디자인 시스템
     2|
     3|아래 디자인 규칙을 정확히 따라 단일 HTML 파일을 생성하세요.
     4|
     5|### 기본 설정
     6|- DOCTYPE: html5
     7|- lang: ko
     8|- Viewport: width=device-width, initial-scale=1.0
     9|- 폰트: Pretendard (https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css)
    10|- 슬라이드 크기: 1280x720px (16:9)
    11|- 외부 라이브러리 금지 (순수 HTML/CSS/JS만 사용)
    12|
    13|### 색상 팔레트
    14|```
    15|Background:      #0A0A0A
    16|Surface:         #141414
    17|Surface-Alt:     #1C1C1E
    18|Border:          #2A2A2A
    19|Text-Primary:    #FAFAFA
    20|Text-Secondary:  #A1A1AA
    21|Text-Muted:      #71717A
    22|Accent:          #F97316
    23|Accent-Hover:    #FB923C
    24|Accent-Glow:     rgba(249,115,22,0.15)
    25|Success:         #22C55E
    26|Info:            #3B82F6
    27|Warning:         #EAB308
    28|Danger:          #EF4444
    29|```
    30|
    31|### 타이포그래피 (Pretendard)
    32|```
    33|Display:   64px / weight 800 / letter-spacing -0.02em / line-height 1.1
    34|H1:        48px / weight 700 / letter-spacing -0.02em / line-height 1.2
    35|H2:        36px / weight 700 / letter-spacing -0.01em / line-height 1.25
    36|H3:        24px / weight 600 / line-height 1.35
    37|Body-L:    20px / weight 400 / line-height 1.6
    38|Body:      16px / weight 400 / line-height 1.6
    39|Caption:   13px / weight 500 / letter-spacing 0.02em / line-height 1.4
    40|Label:     11px / weight 700 / uppercase / letter-spacing 0.08em
    41|```
    42|
    43|### 레이아웃
    44|- 슬라이드 패딩: 64px 좌우, 48px 상하
    45|- 카드: background #141414, border 1px solid #2A2A2A, border-radius 16px, shadow 0 4px 24px rgba(0,0,0,0.4)
    46|- 버튼: border-radius 8px, padding 12px 24px
    47|- 그리드 gap: 24px
    48|- 8px 그리드 시스템 (4, 8, 16, 24, 32, 48, 64, 96px)
    49|
    50|### 네비게이션 (필수 구현)
    51|- 키보드: ← → 슬라이드 이동, Space 다음 슬라이드, F 풀스크린 토글
    52|- 우측 하단: 슬라이드 번호 표시 "03 / 10" (Caption 스타일)
    53|- 하단 중앙: 진행률 바 (Accent 색상, height 2px, 전체 폭)
    54|- 좌측 하단: ← → 클릭 버튼 (background rgba(255,255,255,0.05), backdrop-filter blur(20px), border 1px solid rgba(255,255,255,0.1), border-radius 8px)
    55|- 상단 우측: "Createnova" 텍스트 (Caption, #A1A1AA)
    56|
    57|### 애니메이션
    58|- 슬라이드 전환: opacity 0→1 + translateY(20px→0), duration 0.4s, ease cubic-bezier(0.16,1,0.3,1)
    59|- 요소 순차 진입: 각 요소 0.15s 딜레이로 fade-up
    60|- 호버 효과: 카드 translateY(-2px) + shadow 증가, 버튼 배경색 Accent-Hover
    61|
    62|### 슬라이드 타입별 레이아웃 가이드
    63|1. **Title Slide**: 수직/수평 센터 정렬, Display 폰트, 하단에 Accent색 구분선(80px, 2px)
    64|2. **Split Slide**: 좌 55% 텍스트 / 우 45% 비주얼 (flex, align-items center, gap 64px)
    65|3. **Card Grid**: 2~4 column CSS Grid (auto-fit, minmax(280px, 1fr))
    66|4. **Matrix/Table**: 2x2 or NxN, 각 셀에 고유 상단 색상 바(4px), 셀 패딩 24px
    67|5. **Diagram**: 인라인 SVG (viewBox 기반, 반응형), 선 색상 Accent, 노드 Surface 배경
    68|6. **Checklist**: 각 항목 좌측에 둥근 사각형 체크 아이콘(Accent 테두리), 텍스트 Body 크기
    69|7. **Timeline**: 수직 라인(Accent) + 좌우 교차 카드 배치
    70|8. **CTA Slide**: 센터, H1 + Body-L + 버튼, 하단에 Accent radial gradient(opacity 8%)
    71|
    72|### 다이어그램 규칙 (인라인 SVG)
    73|- 모든 다이어그램은 <svg> 인라인으로 삽입 (외부 파일 없음)
    74|- viewBox 사용하여 반응형 대응
    75|- 텍스트: Pretendard (font-family: 'Pretendard', sans-serif)
    76|- 선: stroke #F97316, stroke-width 2
    77|- 노드: fill #141414, stroke #2A2A2A
    78|- 활성 노드: fill rgba(249,115,22,0.15), stroke #F97316
    79|- 애니메이션: CSS @keyframes로 순차 등장
    80|
    81|### 차트 유형별 구현
    82|- **레이더 차트**: SVG polygon (5축), 배경 그리드 3단계, 데이터 영역 Accent fill(opacity 0.2) + stroke
    83|- **버블 차트**: SVG circle, 크기=값, 위치=X/Y축, 색상=카테고리
    84|- **바 차트**: SVG rect, 수평/수직, 값 라벨 상단
    85|- **매트릭스**: HTML div 기반 2x2, 각 셀 고유 색상 테마
    86|
    87|### 반응형
    88|- 1280px 이상: 원본 크기 (센터 정렬)
    89|- 768~1280px: transform scale(0.75), transform-origin top center
    90|- 768px 미만: 슬라이드 → 세로 스크롤 섹션 모드 (각 슬라이드가 하나의 섹션)
    91|
    92|### 인쇄 대응
    93|```css
    94|@media print {
    95|  body { background: white; color: #1a1a1a; }
    96|  .slide { page-break-after: always; box-shadow: none; border: 1px solid #e5e5e5; }
    97|  .nav, .progress-bar { display: none; }
    98|}
    99|```
   100|
   101|### 코드 구조 (참고)
   102|```html
   103|<!DOCTYPE html>
   104|<html lang="ko">
   105|<head>
   106|  <meta charset="UTF-8">
   107|  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   108|  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
   109|  <title>[프로젝트명] - [프레임워크명] 분석</title>
   110|  <style>/* 위의 디자인 토큰 적용 */</style>
   111|</head>
   112|<body>
   113|  <div class="presentation">
   114|    <div class="slide active" data-slide="1"><!-- 슬라이드 내용 --></div>
   115|    <div class="slide" data-slide="2"><!-- ... --></div>
   116|  </div>
   117|  <div class="nav"><!-- 네비게이션 --></div>
   118|  <div class="progress-bar"><!-- 진행률 --></div>
   119|  <script>/* 키보드/클릭 네비게이션 */</script>
   120|</body>
   121|</html>
   122|```
   123|
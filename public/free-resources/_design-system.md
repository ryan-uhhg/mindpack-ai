# Mindpack AI 슬라이드 디자인 시스템 v2
> Anti-Slop Edition — taste-skill 원칙 기반

---

## 핵심 원칙

1. **이모지 절대 금지** — Iconify Solar 아이콘만 사용
2. **3컬럼 균등 카드 반복 금지** — 레이아웃 다양성 확보 (DESIGN_VARIANCE: 8)
3. **라운드 숫자/가짜 통계 금지** — 리얼 데이터 또는 [분석 대상 데이터 삽입] 플레이스홀더
4. **gradient-on-text 금지** — 텍스트에 그라디언트 효과 사용하지 않음
5. **drop-shadow 남용 금지** — 미묘한 그림자만 사용

---

## 기술 스택

```
CDN:
  - Tailwind CSS 3: <script src="https://cdn.tailwindcss.com"></script>
  - Pretendard: <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
  - Iconify: <script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js"></script>

폰트 조합:
  - 한글 본문: Pretendard
  - 영문 디스플레이: 'Outfit' (Google Fonts) 또는 시스템 sans-serif
  - tailwind.config.fontFamily.sans = ['Pretendard', 'system-ui', 'sans-serif']

아이콘:
  - <iconify-icon icon="solar:chart-bold" width="20"></iconify-icon>
  - 세트: solar (Bold/Linear 혼용)
  - 참고: https://icon-sets.iconify.design/solar/

이미지:
  - picsum.photos 사용 (예: https://picsum.photos/seed/strategy/800/600)
  - Unsplash 직접 링크 금지
```

---

## 슬라이드 기본 구조

```
크기: 1280×720px (16:9)
배경: 흰색 (#ffffff 또는 #fafafa)
본문 색상: #18181b (zinc-900)
보조 텍스트: #71717a (zinc-500)
```

### Tailwind Config

```html
<script>
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Pretendard', 'sans-serif']
      }
    }
  }
}
</script>
```

---

## 프레임워크별 고유 테마

| 프레임워크 | Primary | Accent | Surface | 성격 |
|-----------|---------|--------|---------|------|
| McKinsey 7S | #0f2167 (navy) | #c9a84c (gold) | #f0f2f8 | Corporate Precision |
| BCG Matrix | #064e3b (emerald-900) | #10b981 (emerald-500) | #ecfdf5 | Growth Editorial |
| Porter's 5 Forces | #7f1d1d (red-900) | #ef4444 (red-500) | #fef2f2 | Structural Power |
| SWOT | #4c1d95 (violet-900) | #8b5cf6 (violet-500) | #f5f3ff | Strategic Clarity |
| JTBD | #78350f (amber-900) | #f59e0b (amber-500) | #fffbeb | Human-Centered |

---

## 레이아웃 타입 (10종 — 슬라이드마다 다르게 사용할 것)

1. **Hero Title** — 중앙 정렬, 대형 타이틀 + 1줄 서브텍스트, 하단 얇은 accent 라인
2. **Left Sidebar + Content** — 좌측 240px 색상 사이드바(프레임워크 primary) + 우측 콘텐츠
3. **Top Bar + Body** — 상단 64px accent 바 + 하단 넓은 콘텐츠 영역
4. **Asymmetric Split** — 좌 40% 큰 텍스트 / 우 60% 데이터/차트/다이어그램
5. **Full Bleed Diagram** — 패딩 최소화, SVG 다이어그램이 슬라이드 대부분 차지
6. **Stacked Cards** — 2행×2열 또는 1행×2열 카드 (각 카드 내부 레이아웃 다양하게)
7. **Data Table** — 깔끔한 테이블 + 하이라이트 셀, 상단에 인사이트 한 줄
8. **Numbered List** — 좌측 큰 번호 + 우측 내용 (세로 나열)
9. **Timeline / Flow** — 수평 또는 수직 흐름도, 단계별 노드
10. **CTA / Closing** — 중앙 정렬 마무리, 로고 + 액션 텍스트

### 슬라이드 간 규칙
- **연속 2개 슬라이드가 같은 레이아웃 타입 금지**
- 10슬라이드 기준: 최소 6개 이상 다른 레이아웃 사용
- Card Grid 사용 시 2×2 또는 1×2만 (3×1 균등 금지)

---

## 타이포그래피

```
한글:
  - word-break: keep-all (단어 단위 줄바꿈)
  - 제목: leading-tight (line-height: 1.25)
  - 본문: leading-relaxed (line-height: 1.625)

크기 시스템:
  Display:  text-5xl font-extrabold tracking-tight     (48px)
  H1:       text-4xl font-bold tracking-tight            (36px)
  H2:       text-2xl font-bold                           (24px)
  H3:       text-lg font-semibold                        (18px)
  Body:     text-sm leading-relaxed                      (14px)
  Caption:  text-xs text-zinc-500 tracking-wide           (12px)
  Label:    text-[10px] font-bold uppercase tracking-widest
```

---

## 네비게이션 (모든 슬라이드 공통)

```
위치 및 스타일:
  - 우측 하단: 슬라이드 번호 "03 / 10" (text-xs text-zinc-400)
  - 하단 전체: 진행률 바 (h-0.5, accent 색상, transition-all duration-300)
  - 좌측 하단: ← → 버튼 (bg-zinc-100 hover:bg-zinc-200, rounded-lg, p-2)
  - 우측 상단: "Mindpack AI" (text-[10px] tracking-[0.12em] uppercase text-zinc-400)

키보드:
  - ← → : 슬라이드 이동
  - Space : 다음 슬라이드
  - F : 풀스크린 토글
```

---

## 애니메이션

```css
/* 슬라이드 진입 */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.slide.active { animation: fadeUp 0.35s cubic-bezier(0.16, 1, 0.3, 1); }

/* 요소 순차 진입 — 각 자식에 animation-delay 부여 */
.slide.active > *:nth-child(1) { animation-delay: 0s; }
.slide.active > *:nth-child(2) { animation-delay: 0.08s; }
.slide.active > *:nth-child(3) { animation-delay: 0.16s; }
/* ... */
```

---

## SVG 다이어그램 규칙

```
- 반드시 인라인 <svg> (외부 파일 없음)
- viewBox 사용 (반응형)
- 텍스트: font-family='Pretendard, sans-serif'
- 선: stroke={accent}, stroke-width="1.5"
- 노드: fill="white", stroke={primary}, rx="8"
- 활성 노드: fill={surface}, stroke={accent}, stroke-width="2"
```

---

## 인쇄 대응

```css
@media print {
  body { background: white !important; }
  .slide { 
    page-break-after: always; 
    box-shadow: none !important;
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
  .nav-controls, .progress-bar { display: none !important; }
}
```

---

## Anti-Pattern 체크리스트 (생성 전 확인)

- [ ] 이모지 사용했는가? → 삭제하고 Iconify Solar로 교체
- [ ] 연속 슬라이드가 같은 레이아웃인가? → 하나를 다른 타입으로 변경
- [ ] 3열 균등 카드가 있는가? → 2열 비대칭 또는 다른 레이아웃으로 변경
- [ ] "85%", "3.2배" 등 라운드 숫자가 있는가? → 플레이스홀더로 교체
- [ ] 텍스트에 그라디언트가 있는가? → 단색으로 변경
- [ ] drop-shadow-xl/2xl를 사용했는가? → shadow-sm 또는 shadow로 축소
- [ ] Unsplash 직접 링크가 있는가? → picsum.photos로 교체
- [ ] word-break: keep-all이 빠졌는가? → 추가

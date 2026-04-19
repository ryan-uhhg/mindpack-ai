## HTML 출력 디자인 시스템

아래 디자인 규칙을 정확히 따라 단일 HTML 파일을 생성하세요.

### 기본 설정
- DOCTYPE: html5
- lang: ko
- Viewport: width=device-width, initial-scale=1.0
- 폰트: Pretendard (https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css)
- 슬라이드 크기: 1280x720px (16:9)
- 외부 라이브러리 금지 (순수 HTML/CSS/JS만 사용)

### 색상 팔레트
```
Background:      #0A0A0A
Surface:         #141414
Surface-Alt:     #1C1C1E
Border:          #2A2A2A
Text-Primary:    #FAFAFA
Text-Secondary:  #A1A1AA
Text-Muted:      #71717A
Accent:          #F97316
Accent-Hover:    #FB923C
Accent-Glow:     rgba(249,115,22,0.15)
Success:         #22C55E
Info:            #3B82F6
Warning:         #EAB308
Danger:          #EF4444
```

### 타이포그래피 (Pretendard)
```
Display:   64px / weight 800 / letter-spacing -0.02em / line-height 1.1
H1:        48px / weight 700 / letter-spacing -0.02em / line-height 1.2
H2:        36px / weight 700 / letter-spacing -0.01em / line-height 1.25
H3:        24px / weight 600 / line-height 1.35
Body-L:    20px / weight 400 / line-height 1.6
Body:      16px / weight 400 / line-height 1.6
Caption:   13px / weight 500 / letter-spacing 0.02em / line-height 1.4
Label:     11px / weight 700 / uppercase / letter-spacing 0.08em
```

### 레이아웃
- 슬라이드 패딩: 64px 좌우, 48px 상하
- 카드: background #141414, border 1px solid #2A2A2A, border-radius 16px, shadow 0 4px 24px rgba(0,0,0,0.4)
- 버튼: border-radius 8px, padding 12px 24px
- 그리드 gap: 24px
- 8px 그리드 시스템 (4, 8, 16, 24, 32, 48, 64, 96px)

### 네비게이션 (필수 구현)
- 키보드: ← → 슬라이드 이동, Space 다음 슬라이드, F 풀스크린 토글
- 우측 하단: 슬라이드 번호 표시 "03 / 10" (Caption 스타일)
- 하단 중앙: 진행률 바 (Accent 색상, height 2px, 전체 폭)
- 좌측 하단: ← → 클릭 버튼 (background rgba(255,255,255,0.05), backdrop-filter blur(20px), border 1px solid rgba(255,255,255,0.1), border-radius 8px)
- 상단 우측: "Createnova" 텍스트 (Caption, #A1A1AA)

### 애니메이션
- 슬라이드 전환: opacity 0→1 + translateY(20px→0), duration 0.4s, ease cubic-bezier(0.16,1,0.3,1)
- 요소 순차 진입: 각 요소 0.15s 딜레이로 fade-up
- 호버 효과: 카드 translateY(-2px) + shadow 증가, 버튼 배경색 Accent-Hover

### 슬라이드 타입별 레이아웃 가이드
1. **Title Slide**: 수직/수평 센터 정렬, Display 폰트, 하단에 Accent색 구분선(80px, 2px)
2. **Split Slide**: 좌 55% 텍스트 / 우 45% 비주얼 (flex, align-items center, gap 64px)
3. **Card Grid**: 2~4 column CSS Grid (auto-fit, minmax(280px, 1fr))
4. **Matrix/Table**: 2x2 or NxN, 각 셀에 고유 상단 색상 바(4px), 셀 패딩 24px
5. **Diagram**: 인라인 SVG (viewBox 기반, 반응형), 선 색상 Accent, 노드 Surface 배경
6. **Checklist**: 각 항목 좌측에 둥근 사각형 체크 아이콘(Accent 테두리), 텍스트 Body 크기
7. **Timeline**: 수직 라인(Accent) + 좌우 교차 카드 배치
8. **CTA Slide**: 센터, H1 + Body-L + 버튼, 하단에 Accent radial gradient(opacity 8%)

### 다이어그램 규칙 (인라인 SVG)
- 모든 다이어그램은 <svg> 인라인으로 삽입 (외부 파일 없음)
- viewBox 사용하여 반응형 대응
- 텍스트: Pretendard (font-family: 'Pretendard', sans-serif)
- 선: stroke #F97316, stroke-width 2
- 노드: fill #141414, stroke #2A2A2A
- 활성 노드: fill rgba(249,115,22,0.15), stroke #F97316
- 애니메이션: CSS @keyframes로 순차 등장

### 차트 유형별 구현
- **레이더 차트**: SVG polygon (5축), 배경 그리드 3단계, 데이터 영역 Accent fill(opacity 0.2) + stroke
- **버블 차트**: SVG circle, 크기=값, 위치=X/Y축, 색상=카테고리
- **바 차트**: SVG rect, 수평/수직, 값 라벨 상단
- **매트릭스**: HTML div 기반 2x2, 각 셀 고유 색상 테마

### 반응형
- 1280px 이상: 원본 크기 (센터 정렬)
- 768~1280px: transform scale(0.75), transform-origin top center
- 768px 미만: 슬라이드 → 세로 스크롤 섹션 모드 (각 슬라이드가 하나의 섹션)

### 인쇄 대응
```css
@media print {
  body { background: white; color: #1a1a1a; }
  .slide { page-break-after: always; box-shadow: none; border: 1px solid #e5e5e5; }
  .nav, .progress-bar { display: none; }
}
```

### 코드 구조 (참고)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
  <title>[프로젝트명] - [프레임워크명] 분석</title>
  <style>/* 위의 디자인 토큰 적용 */</style>
</head>
<body>
  <div class="presentation">
    <div class="slide active" data-slide="1"><!-- 슬라이드 내용 --></div>
    <div class="slide" data-slide="2"><!-- ... --></div>
  </div>
  <div class="nav"><!-- 네비게이션 --></div>
  <div class="progress-bar"><!-- 진행률 --></div>
  <script>/* 키보드/클릭 네비게이션 */</script>
</body>
</html>
```

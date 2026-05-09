# Roll-call & Plan for Action A (Slide redesign)

Goal
- 스라이드 디자인 전면 재설계: Porter's, SWOT, JTBD HTML을 프린트(PDF) 최적화 및 브랜드 가이드(색상, 폰트, layout) 기준에 맞게 재작성.

Context / Assumptions
- Phase 0의 Free resources와 예시 HTML 파일들이 이미 배포되어 있음.
- 기존 예시는 기능적으로 완성되어 있으나 디자인(슬라이드 레이아웃, 인쇄 최적화, 일관된 타이포그래피) 개선 필요.
- B(EmailOctopus mailing) 작업은 완료되었음(사용자가 확인 요청). .env와 Netlify function proxy 존재.

Proposed approach
1. 디자인 디렉션 확정 (Pretendard + Outfit, 흰배경, framework별 색상 테마)
2. 공통 슬라이드 템플릿 만들기 (A4/US Letter 인쇄용, page-breaks, print-color-adjust, word-break)
3. 각 프레임워크별 슬라이드 재작성 (Porter, SWOT, JTBD) — 3단계: moodboard -> wireframe -> final HTML
4. QA 및 인쇄 테스트 (브라우저 인쇄, PDF 생성, font embedding 확인)
5. 배포: public/free-resources/examples/에 업로드, 빌드, Netlify 배포 확인

Step-by-step plan
- Step 0: Gather required assets and color tokens (use _design-system.md)
- Step 1: Create base slide template file: public/free-resources/templates/slide-base.html
- Step 2: Implement Porter's slides using template: public/free-resources/examples/porters-slide.html
- Step 3: Implement SWOT slides: public/free-resources/examples/swot-slide.html
- Step 4: Implement JTBD slides: public/free-resources/examples/jtbd-slide.html
- Step 5: Run local build and create PDFs from Chromium headless to verify page breaks
- Step 6: Commit changes to a feature branch 'feature/slides-redesign' and open PR

Files likely to change
- public/free-resources/examples/porters-slide.html
- public/free-resources/examples/swot-slide.html
- public/free-resources/examples/jtbd-slide.html
- public/free-resources/templates/slide-base.html
- public/free-resources/_design-system.md (minor updates)

Tests / Validation
- Each slide HTML renders correctly in Chrome and prints to PDF with correct page breaks
- Pretendard font included via CDN or self-hosted; ensure Netlify/Chromium can load it in headless runs
- Mobile responsive not required for PDFs but still graceful

Risks / Tradeoffs / Open questions
- Long HTML generation should avoid subagent chunking; use the chunked workflow if file size is large
- Do we prefer self-hosting Pretendard (faster, reliable for headless PDF) or CDN? (Tradeoff: complexity vs reliability)
- Confirm final visual direction (moodboard) before producing final HTML

Deliverable
- Actionable PR with 3 slide HTMLs + base template, print-ready PDFs attached

Saved plan path: .hermes/plans/2026-04-19_223223-rollcall-and-a-plan.md

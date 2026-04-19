ENG 에이전트 브리핑 — 코드베이스 및 기술 컨텍스트
================================================================
작성일: 2026-04-19
담당자: ENG

================================================================
1. 저장소 현황
================================================================

랜딩페이지 저장소:
  로컬: /Users/guko/Documents/claude/supanova-landing
  GitHub: git@github.com:ryan-uhhg/supanova-landing.git
  배포: https://createnova.netlify.app/ (Netlify 자동 배포, main 브랜치)
  배포 방식: GitHub push → Netlify 자동 빌드 (dist/ 폴더 배포)

Python 앱 저장소:
  아직 없음 — 이번 주 신규 생성 필요
  권장 위치: /Users/guko/Documents/claude/supanova-app
  GitHub 신규 레포: supanova-app (비공개)

================================================================
2. 랜딩페이지 기술 스택
================================================================

  Framework: React 19 + Vite 8
  Routing: react-router-dom v7
  Styling: Tailwind CSS v4
  Animation: framer-motion v12
  Icons: @iconify/react v6
  빌드: vite build → dist/ → Netlify

  주요 파일 구조:
    src/
      App.jsx          — 라우팅 정의
      main.jsx         — 진입점
      index.css        — Tailwind 커스텀 토큰
      pages/           — 각 페이지 컴포넌트
        HomePage.jsx
        PricingPage.jsx  ← 결제 버튼 있음 (연결 필요)
        DemoPage.jsx
        SecurityPage.jsx
        TermsPage.jsx
        PrivacyPage.jsx
        RefundPage.jsx
        AboutPage.jsx
        UseCasesPage.jsx
        FrameworksPage.jsx
        DocsPage.jsx
        FAQPage.jsx
        ChangelogPage.jsx
        ReviewsPage.jsx
      components/
        Navbar.jsx
        Footer.jsx
        Layout.jsx
        HeroSection.jsx
        PricingSection.jsx
        VisualProofSection.jsx
        ProblemReliefSection.jsx
        FounderNoteSection.jsx
        shared/
          AccordionFAQ.jsx
          CTABanner.jsx
          LegalLayout.jsx
          PageHero.jsx
      hooks/
        useScrollReveal.js

================================================================
3. 랜딩페이지에서 수정이 필요한 것들
================================================================

3-1. 결제 버튼 연결 (OPS와 협업)
  PricingPage.jsx:
    Basic 버튼: ctaHref: '#purchase-basic' → 결제 링크로 교체
    Premium 버튼: ctaHref: '#purchase-premium' → 결제 링크로 교체
    Free 버튼: ctaHref: '#free-email' → 이메일 수집 폼 연결

3-2. "Claude API 연결" 안내 추가 (TASK-007 참조)
  DemoPage.jsx: Step 0 또는 Step 1에 "Claude 계정 연결" 단계 삽입
  PricingPage.jsx: API 비용 안내 문구 추가
  SecurityPage.jsx: API 키 로컬 저장 보안 설명 추가

3-3. 얼리버드 좌석 카운터 (UXD)
  PricingPage.jsx: "50명 한정" 텍스트를 "현재 XX석 남음"으로 변경

================================================================
4. Python 앱 — 신규 개발
================================================================

권장 스택:
  언어: Python 3.10+
  GUI: tkinter (기본 내장, 빠른 MVP) 또는 PyQt6 (나중에)
  PDF 파서: pdfplumber
  PPT 생성: python-pptx
  Claude API: anthropic (공식 SDK)
  API 키 저장: keyring
  벡터DB (나중에): chromadb

핵심 아키텍처 (TASK-007 참조):
  사용자가 본인의 Anthropic API 키를 사용
  키는 OS 키체인에 저장 (keyring)
  Supanova는 API 키를 보관하지 않음

앱 초기 실행 흐름:
  1. 키체인에서 API 키 조회
  2. 없으면 → 온보딩 화면 (키 입력)
  3. 있으면 → 메인 화면 (파일 드롭)
  4. 파일 선택 → 전처리 → Claude API 분석 → PPT 생성

================================================================
5. GitHub 브랜치 전략
================================================================

랜딩페이지:
  main: 항상 배포 가능한 상태 (Netlify 자동 배포)
  feature/*: 기능 개발 브랜치
  규칙: feature/* → PR → main (직접 push 금지)

Python 앱 (신규):
  main: 릴리즈 가능한 버전
  dev: 개발 통합 브랜치
  feature/*: 기능 개발

================================================================
6. Week 1 ENG 태스크 우선순위
================================================================

  Day 1: TASK-001 + TASK-007 설계 동시에 읽고 시작
          앱 저장소 생성 + 개발 환경 세팅
  Day 2: API 키 온보딩 화면 + Claude API 연결 구현
  Day 3: PDF 파서 + PPT 생성 + 전체 파이프라인 연결
  Day 4: 에러 핸들링 + README
  Day 5: ORC 리뷰용 데모 실행

================================================================
7. 절대 하지 말 것 (보안 원칙)
================================================================

  - API 키를 .env, config.json, 코드에 하드코딩 금지
  - API 키를 로그에 출력 금지
  - 원본 파일을 네트워크로 전송 금지
  - 분석 텍스트를 Supanova 서버로 전송 금지
  - 사용자 문서 내용을 로그에 출력 금지

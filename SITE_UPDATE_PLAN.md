# Mindpack AI 사이트 업데이트 계획 (2026-05-10)

## 📊 현재 사이트 상태

### ✅ 최신 상태 (Updated)
- **HomePage**: HeroSection 최신 반영됨 (2026-05-09/10)
- **DemoPage**: 14개 스킬 QnA 질문 + 결과 데이터 추가 (2026-05-10)
  - 스킬 선택 → QnA 진행 → 스킬별 다른 결과 표시
  - 이전/처음부터 시작 버튼 추가

### ⚠️ 구형 상태 (Needs Update)
- **ProductivitySkillsPage** (604 lines) - 기존 구조유지, 컨텐츠만 최신화 필요
- **UseCasesPage** (494 lines) - 5개 페르소나 (직장인/PM/창업자/SME/제조업)
- **FrameworksPage** (85 lines) - 12개 컨설팅 프레임워크 (McKinsey/SWOT/Porter 등)
- **GuidePage** (153 lines) - 6단계 프리 플랜 가이드

---

## 🎯 업데이트 우선순위 & 작업 내용

### TIER 1: 긴급 (높은 영향도)

#### 1️⃣ **ProductivitySkillsPage** 개선
**현재 상태**: 14개 스킬 카드 존재, 각 스킬별 author/category/icon/효과 데이터 있음

**할 일**:
- ✓ 14개 스킬 모두 최신 데이터 반영 (이미 존재)
- [ ] 각 스킬카드 클릭 시 → 데모 페이지로 직접 진입 가능하게 수정
  - 예: "Atomic Habits" 클릭 → `/demo?skill=habits` 라우팅
- [ ] 스킬별 "지금 시작" 버튼 추가 (CTA 강화)
- [ ] Medium 기사 링크 섹션 추가 (credibility boost)
  - 각 스킬별 2~3개 Medium/블로그 아티클 추가
  - "이런 식으로 생각하세요" 섹션으로 신뢰도 ↑

**예상 라인 수 증가**: +150~200 lines


#### 2️⃣ **UseCasesPage** 개선  
**현재 상태**: 5개 직장인/PM/창업자/SME/제조업 페르소나 존재, before/after 메트릭 있음

**할 일**:
- [ ] 기존 5개 페르소나 유지 (이미 좋음)
- [ ] 각 페르소나별 추천 스킬 조합 명시화
  - 예: "직장인 → Deep Work + GTD + Atomic Habits" → 스킬 카드 링크 추가
- [ ] "3개월 여정" 섹션 추가 (주간 진도 차트)
- [ ] 각 페르소나별 성공 후 "다음 단계" 제시
  - "이제 당신은 X를 시도해보세요" 스킬 추천

**예상 라인 수 증가**: +100~150 lines


#### 3️⃣ **GuidePage** 개선
**현재 상태**: 프리 플랜 6단계 가이드 (이메일 입력 → 다운로드)

**할 일**:
- [ ] "STEP 1: 스킬 선택" 추가
  - 기존 STEP 1~6을 STEP 2~7로 shift
  - 스킬 선택 UI 추가 (14개 아이콘 그리드)
- [ ] 각 스텝별 예상 소요 시간 명시
  - STEP 1: 스킬 선택 (30초)
  - STEP 2: QnA 온보딩 (3~5분)
  - STEP 3: 개인화 파일 다운로드 (1분)
  - STEP 4: 이메일 계정 설정 (2분)
  - 등등
- [ ] 스크린샷/비디오 GIF 추가 (각 스텝마다)
- [ ] "자주 묻는 질문" 섹션 이동 (FAQPage에서 참조)

**예상 라인 수 증가**: +100~200 lines


---

### TIER 2: 필요 (중간 영향도)

#### 4️⃣ **새로운 페이지: ProductivityFrameworksPage**
**필요성**: 14개 스킬 vs 12개 컨설팅 프레임워크 분리
- 현재 FrameworksPage는 컨설팅 프레임워크만 (McKinsey/SWOT/Porter 등)
- ProductivitySkillsPage는 생산성 스킬만 (Atomic Habits/GTD/Deep Work)
- 두 개 통합 필요? → 아니면 분리 유지? 

**결정**: **분리 유지** (이미 잘 돼 있음)


#### 5️⃣ **FAQPage 확장**
**현재 상태**: 기본 FAQ 있음

**할 일**:
- [ ] "스킬별 FAQ" 섹션 추가
  - "Deep Work 시작하면 며칠 후 효과 보나요?"
  - "GTD와 Pomodoro를 함께 써도 되나요?"
- [ ] "프리/프리미엄 차이" FAQ 명확화
- [ ] "기술 이슈" FAQ 추가 (로그인 문제, 데이터 삭제 등)


#### 6️⃣ **ReviewsPage** 보강
**현재 상태**: 기본 리뷰 섹션 있음

**할 일**:
- [ ] 스킬별 필터링 추가
  - 예: "Deep Work 리뷰만 보기" 필터
- [ ] 사용자 사진 + 직책 추가 (신뢰도 ↑)
- [ ] 스타 평점 시각화 추가
- [ ] "3개월 vs 1년 후" 비교 리뷰 추가


---

### TIER 3: 선택 (낮은 영향도 / 향후)

#### 7️⃣ **Navbar 업데이트**
**현재**: 링크 목록만 있음

**할 일** (나중):
- 스킬 dropdown 메뉴 추가 (14개 스킬 빠른 접근)
- 데모 CTA 버튼 prominent 표시


#### 8️⃣ **미디어 리소스 페이지** (새로 만들기)
**필요성**: Medium 기사/비디오/팟캐스트 한곳에서 보기

**할 일** (향후):
- "/resources" 페이지 신규 생성
- Medium 기사 10~20개 카테고리별 정렬
- 비디오 튜토리얼 섹션 (YouTube 임베드)
- 팟캐스트 추천 (Spotify 링크)


---

## 📋 작업 체크리스트

### Immediate (이번 주)
- [ ] ProductivitySkillsPage 개선 (스킬 카드 → 데모 진입 링크 추가)
- [ ] UseCasesPage 개선 (페르소나별 스킬 추천 명시)
- [ ] GuidePage 개선 (STEP 1: 스킬 선택 추가)

### Short-term (2주)
- [ ] FAQPage 스킬별 FAQ 섹션 추가
- [ ] ReviewsPage 필터링 + 스타 평점 추가

### Medium-term (1개월)
- [ ] Navbar 스킬 dropdown 추가
- [ ] 새로운 `/resources` 페이지 생성

---

## 🔗 관련 파일 경로

```
/src/pages/
├── ProductivitySkillsPage.jsx    (604 lines) - TIER 1
├── UseCasesPage.jsx              (494 lines) - TIER 1
├── GuidePage.jsx                 (153 lines) - TIER 1
├── FAQPage.jsx                   (74 lines)  - TIER 2
├── ReviewsPage.jsx               (116 lines) - TIER 2
├── FrameworksPage.jsx            (85 lines)  - 현황유지
├── DemoPage.jsx                  (1395 lines) - ✅ 최신
└── HomePage.jsx                  (19 lines) - ✅ 최신

/src/components/
├── shared/
│   ├── PageHero.jsx
│   ├── CTABanner.jsx
│   └── AccordionFAQ.jsx
└── ...
```

---

## 💡 핵심 전략

1. **스킬 가시성 극대화**: 모든 페이지에서 14개 스킬을 접근 가능하게
2. **사용자 여정 단순화**: 페르소나 → 스킬 선택 → 데모 → 회원가입 (4-step flow)
3. **신뢰도 boost**: Medium 기사, 사용자 리뷰, 통계 수치 강조
4. **모바일 우선**: 모든 업데이트는 mobile-responsive 검증 필수


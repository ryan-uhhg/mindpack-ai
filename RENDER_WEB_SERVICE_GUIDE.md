===============================
RENDER WEB SERVICE 배포 가이드
Web Service (Node.js) + React 프론트엔드
===============================

준비 완료된 작업:
✓ Express.js 백엔드 서버 (server.js)
✓ React 프론트엔드 빌드 (npm run build)
✓ EmailOctopus 구독 API (/api/subscribe)
✓ render.yaml 설정 (Web Service)
✓ npm 의존성 설치 (express, cors, dotenv)
✓ 모든 변경사항 준비 완료

시스템 구조:
┌─────────────────────────────────────────────────────────┐
│  Render Web Service (Node.js)                           │
│  ├─ Express.js 서버 (포트 3000)                         │
│  ├─ React 프론트엔드 (dist/ 정적 파일)                 │
│  ├─ API 엔드포인트 (/api/subscribe → EmailOctopus)   │
│  └─ 모든 요청 처리 (프론트엔드 라우팅)                  │
│                                                         │
│  환경변수:                                              │
│  ├─ EMAILOCTOPUS_API_KEY (필수)                       │
│  ├─ NODE_ENV=production                                │
│  ├─ PORT=3000                                          │
│  └─ FRONTEND_URL=https://mindpackai.onrender.com      │
└─────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════

[STEP 1] Render 계정 생성 및 로그인
─────────────────────────────────
1. https://render.com/register 접속
2. GitHub SSO로 로그인
3. Render 대시보시보드 도착

[STEP 2] 새 Web Service 배포 생성
────────────────────────────────
1. 대시보드에서 "New +" 버튼 클릭
2. "Web Service" 선택
3. GitHub 저장소 검색 및 선택: "mindpack-ai"

[STEP 3] 배포 설정
─────────────────
다음 값들을 입력하세요:

✓ Name: mindpack-ai
✓ Runtime: Node
✓ Build Command: npm install && npm run build
✓ Start Command: npm start
✓ Plan: Free (무료)

[STEP 4] 환경변수 설정 (중요!)
────────────────────────────
Render 대시보드에서 다음 환경변수를 추가하세요:

KEY: EMAILOCTOPUS_API_KEY
VALUE: (사용자님의 .env 파일에 있는 값)
          예: eo_4a4...ec8a

KEY: NODE_ENV
VALUE: production

KEY: PORT
VALUE: 3000

KEY: FRONTEND_URL
VALUE: https://mindpackai.onrender.com

[STEP 5] 배포 시작
──────────────────
1. "Create Web Service" 클릭
2. 배포 진행 (2-3분, Render이 자동으로 빌드)
3. 배포 완료 → 자동 생성된 URL 받음

배포 진행 상황:
- 로그 확인: Render 대시보드 > Logs 탭
- 빌드 상태: "Building..." → "Deploying..." → "Live"

[STEP 6] 배포 확인
──────────────────
배포가 완료되면 생성된 URL에서 확인:

✓ 홈페이지: https://mindpackai.onrender.com/
✓ 생산성 스킬: https://mindpackai.onrender.com/productivity-skills
✓ 사용 사례: https://mindpackai.onrender.com/use-cases
✓ 가이드: https://mindpackai.onrender.com/guide
✓ 데모: https://mindpackai.onrender.com/demo?skill=1

✓ API 헬스 체크: https://mindpackai.onrender.com/api/health
✓ 이메일 구독: 입력 후 정상 작동 확인

[STEP 7] 자동 배포 설정
──────────────────────
이미 설정됨! 다음이 자동으로 작동합니다:

- GitHub main 브랜치에 푸시 → Render이 자동 감지
- 자동 빌드: npm install && npm run build
- 자동 시작: npm start
- 약 2-3분 후 배포 완료

배포 상태 확인:
Render 대시보드 > Deployments 탭

[STEP 8] (선택) 커스텀 도메인
──────────────────────────
Render 대시보드 > Settings > Custom Domains
→ mindpackai.com 또는 다른 도메인 연결 가능

═══════════════════════════════════════════════════════════════

기술 상세 정보:

백엔드 (server.js):
- Express.js로 구성
- 포트 3000에서 실행
- /api/subscribe → EmailOctopus API 연결
- /api/health → 헬스 체크
- 모든 다른 요청 → React 프론트엔드 (dist/index.html)

프론트엔드:
- React + React Router
- Vite 빌드 시스템
- dist/ 폴더에 번들됨
- Express 서버가 정적 파일 제공

환경 변수:
- .env 파일 (로컬 개발용) - 커밋되지 않음
- Render 대시보드 설정 (프로덕션용) - 보안

문제 해결:

Q: "Build failed" 에러
A: Render 로그 확인 → npm install 오류 확인 → package.json 검증

Q: "Cannot find module" 에러
A: npm install이 제대로 실행되었는지 확인 → package-lock.json 확인

Q: 이메일 구독 안 됨
A: EMAILOCTOPUS_API_KEY가 Render 환경변수에 설정되었는지 확인

Q: 라우팅 페이지 열리지 않음
A: Express에서 React Router 폴백 설정 확인 (server.js 마지막 부분)

═══════════════════════════════════════════════════════════════

준비 완료! STEP 1부터 시작하세요.
모든 기술적 준비는 끝났습니다.

===============================
RENDER 배포 가이드
===============================

완료된 준비 작업:
✓ render.yaml 설정 파일 생성 및 GitHub에 푸시
✓ 로컬 빌드 테스트 완료 (dist 폴더 생성됨)
✓ Git 상태: 모든 변경사항 커밋됨

이제 수행할 작업 (사용자 직접 수행):

═══════════════════════════════════════════════════════════════

[STEP 1] Render 계정 생성 및 GitHub 연결
─────────────────────────────────────────
1. https://render.com/register 접속
2. "GitHub" 버튼으로 로그인
3. GitHub SSO 인증 완료
4. Render 대시보드 도착

[STEP 2] 새 Static Site 배포 생성
─────────────────────────────────
1. Render 대시보드에서 "New +" 버튼 클릭
2. "Static Site" 선택
3. "Connect a repository" 클릭

[STEP 3] GitHub 저장소 연결
──────────────────────────
1. 저장소 검색: "mindpack-ai" 또는 "ryan-uhhg/mindpack-ai"
2. "Connect" 버튼 클릭

[STEP 4] 배포 설정 입력
──────────────────────
- Name: mindpack-ai
- Build Command: npm run build (자동 감지 가능)
- Publish Directory: dist (자동 감지됨)
- Root Directory: ./ (기본값)
- Environment: Production

[STEP 5] 배포 시작
─────────────────
1. "Create Static Site" 버튼 클릭
2. 배포 진행 중... (2-3분 소요)
3. 배포 완료 후 URL 제공됨 (예: mindpackai.onrender.com)

[STEP 6] 배포 확인
─────────────────
배포가 완료되면 자동 생성된 URL에서 다음을 테스트하세요:

✓ 홈페이지: https://mindpackai.onrender.com/
✓ 생산성 스킬: https://mindpackai.onrender.com/productivity-skills
✓ 사용 사례: https://mindpackai.onrender.com/use-cases
✓ 가이드: https://mindpackai.onrender.com/guide
✓ 데모 (예): https://mindpackai.onrender.com/demo?skill=1

[STEP 7] 자동 배포 확인
──────────────────────
GitHub main 브랜치에 새로운 푸시가 되면:
- Render가 자동으로 감지하고 배포 시작
- 약 2-3분 후 변경사항 반영됨
- 배포 상태: Render 대시보드의 "Deployments" 탭에서 확인 가능

[STEP 8] (선택) 커스텀 도메인 연결
────────────────────────────────
Render 대시보드 > Settings > Custom Domain
→ mindpackai.com 또는 다른 도메인 연결 가능

═══════════════════════════════════════════════════════════════

배포 준비 상태:
- 저장소: git@github.com:ryan-uhhg/mindpack-ai.git
- 브랜치: main
- 빌드: npm run build (완료됨, dist/ 생성됨)
- 배포 설정: render.yaml (커밋됨)

문제 발생 시:
- Render 대시보드 > Logs에서 빌드 로그 확인
- GitHub 저장소 권한 확인
- render.yaml 설정 재확인

다음 단계: STEP 1부터 시작하세요!

TASK-007 — [ENG] 핵심 아키텍처 수정: 사용자 본인 Claude API 연동
================================================================
ID: TASK-20260419-007
담당: ENG
우선순위: P0 (TASK-001보다 먼저 읽고 설계에 반영)
사업 단계: Phase 0
마감: Day 1 (설계 확정) / Day 3 (구현)
예상 소요: 설계 2시간 + 구현 Day 1~3에 통합

================================================================
배경 및 핵심 결정
================================================================

원래 가정 (잘못된):
  Supanova 운영자가 하나의 Claude API 키를 갖고
  모든 고객의 분석 요청을 처리

실제 모델 (올바른):
  각 사용자가 본인의 Anthropic 계정 또는 API 키를 사용
  Supanova는 API 키를 보관하지 않음
  → 운영자 입장: API 비용 부담 없음
  → 사용자 입장: 본인 크레딧 사용, 데이터 완전 통제

이 결정이 바꾸는 것:
  - 앱 초기 실행 시 "Claude API 연결" 단계 필요
  - API 키를 사용자 로컬에 안전하게 저장
  - 운영자의 OPS 비용 구조 완전히 변화 (API 비용 = 0)

================================================================
연동 방식 2가지 옵션
================================================================

옵션 A — Anthropic OAuth (권장)
  ─────────────────────────────
  방식:
    사용자가 앱 내 "Claude로 로그인" 버튼 클릭
    → Anthropic 로그인 페이지로 이동 (브라우저)
    → Anthropic 계정으로 인증
    → 앱에 Access Token 발급
    → 이후 API 호출 시 해당 토큰 사용

  Anthropic OAuth 엔드포인트:
    Authorization: https://claude.ai/oauth/authorize
    Token:         https://api.anthropic.com/oauth/token
    Scope:         api (API 호출 권한)

  필요한 것:
    - Anthropic Console에서 OAuth App 등록
    - Client ID / Client Secret 발급
    - Redirect URI 설정 (데스크톱 앱: localhost 또는 커스텀 스킴)

  장점:
    - 사용자가 API 키를 직접 다루지 않아도 됨 (UX 우수)
    - Anthropic 계정 = 결제 주체 명확
    - "Claude로 시작하기" 브랜딩 가능

  단점:
    - Anthropic OAuth 앱 승인 필요 (시간 소요 가능)
    - 구현 복잡도 높음 (OAuth PKCE 플로우)

  참고:
    https://docs.anthropic.com/en/docs/claude-code/oauth

옵션 B — API 키 직접 입력 (빠른 MVP용)
  ─────────────────────────────────────
  방식:
    앱 최초 실행 시 "Anthropic API 키 입력" 화면
    사용자가 console.anthropic.com에서 발급한 키 붙여넣기
    앱이 OS 키체인에 안전하게 저장
    이후 자동으로 사용

  키 발급 안내:
    https://console.anthropic.com/settings/keys

  저장 방법 (macOS):
    import keyring
    keyring.set_password("supanova", "anthropic_api_key", api_key)
    key = keyring.get_password("supanova", "anthropic_api_key")

  저장 방법 (Windows):
    동일하게 keyring 라이브러리 사용 (Windows Credential Manager)

  장점:
    - 구현 단순, 당일 완성 가능
    - 모든 사용자가 이미 익숙한 방식 (개발자 도구 표준)
    - Anthropic 승인 불필요

  단점:
    - API 키 개념을 모르는 일반 사용자에게 진입 장벽
    - 사용자가 직접 키 발급 → 입력 과정 필요

================================================================
이번 Week 1 결정: 옵션 B로 시작, 옵션 A는 Week 2~3
================================================================

이유:
  - MVP 목표는 "동작하는 것"
  - OAuth 앱 승인은 시간이 걸릴 수 있음
  - 초기 50명 얼리버드는 기술 친숙도 높은 얼리어답터
  - 옵션 B → A 전환은 나중에 추가 가능

Week 1 구현: 옵션 B (API 키 입력)
Week 2~3 목표: 옵션 A (Anthropic OAuth) 전환

================================================================
구현 상세 — 옵션 B (API 키 입력 방식)
================================================================

[ENG-007-1] 앱 최초 실행 시 온보딩 화면

  흐름:
    앱 실행
    → 저장된 API 키 없음 감지
    → 온보딩 화면 표시:
        제목: "Claude API 키를 연결하세요"
        설명: "Supanova는 귀하의 Claude API 크레딧을 사용합니다.
               API 키는 귀하의 기기에만 저장되며 외부로 전송되지 않습니다."
        링크: "API 키 발급하기 → console.anthropic.com/settings/keys"
        입력: [sk-ant-... 형태 입력 필드]
        버튼: "연결하기"
    → 키 유효성 검증 (간단한 API 호출 테스트)
    → 성공 시 메인 화면으로 이동

  코드 예시:
    ```python
    import keyring
    import anthropic

    def save_api_key(key: str):
        keyring.set_password("supanova", "anthropic_api_key", key)

    def get_api_key() -> str | None:
        return keyring.get_password("supanova", "anthropic_api_key")

    def validate_api_key(key: str) -> bool:
        try:
            client = anthropic.Anthropic(api_key=key)
            # 최소한의 테스트 호출
            client.messages.create(
                model="claude-opus-4-5",
                max_tokens=10,
                messages=[{"role": "user", "content": "ping"}]
            )
            return True
        except anthropic.AuthenticationError:
            return False
    ```

[ENG-007-2] API 키 보안 저장

  절대 하지 말 것:
    - 키를 평문 파일에 저장 (.env, config.json 등)
    - 키를 앱 로그에 출력
    - 키를 Supanova 서버로 전송

  반드시 할 것:
    - OS 키체인 사용 (keyring 라이브러리)
    - 키 표시 시 마스킹 (sk-ant-...xxxx 형태)
    - "키 삭제" 기능 제공 (설정 메뉴)

  설치:
    pip install keyring

[ENG-007-3] API 클라이언트 추상화 레이어 수정

  기존 api_client.py 설계 변경:
    # 이전 (잘못된)
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])

    # 올바른
    def get_client() -> anthropic.Anthropic:
        key = keyring.get_password("supanova", "anthropic_api_key")
        if not key:
            raise RuntimeError("API 키가 설정되지 않았습니다. 앱을 재실행하세요.")
        return anthropic.Anthropic(api_key=key)

[ENG-007-4] 에러 처리

  API 잔액 부족 시:
    → "Claude API 크레딧이 부족합니다. console.anthropic.com에서 충전하세요."
    → 충전 링크 버튼 제공

  API 키 만료/무효 시:
    → "API 키가 유효하지 않습니다. 새 키를 연결하세요."
    → 온보딩 화면으로 이동

  Rate limit 시:
    → 자동 재시도 (3회, exponential backoff)

================================================================
Week 2~3 목표 — Anthropic OAuth 구현
================================================================

[사전 준비 — 지금 신청]
  1. Anthropic Console → Integrations → OAuth App 신청
  2. App 이름: Supanova
  3. Redirect URI: supanova://oauth/callback (커스텀 URL 스킴)
  4. Scope: api

[구현 흐름 — PKCE]
  1. 앱에서 code_verifier + code_challenge 생성
  2. 브라우저에서 Anthropic 인증 페이지 열기:
     https://claude.ai/oauth/authorize
       ?client_id=YOUR_CLIENT_ID
       &redirect_uri=supanova://oauth/callback
       &response_type=code
       &scope=api
       &code_challenge=CHALLENGE
       &code_challenge_method=S256
  3. 사용자 로그인 및 권한 부여
  4. supanova://oauth/callback?code=XXX 로 리다이렉트
  5. 앱이 URL 스킴 핸들러로 code 수신
  6. code + code_verifier로 access_token 교환
  7. access_token을 키체인에 저장
  8. anthropic.Anthropic(api_key=access_token) 으로 사용

================================================================
랜딩페이지 수정 사항 (UXD에 전달)
================================================================

현재 랜딩에 "Claude API" 언급 없음.
다음 내용 추가 필요:

  PricingPage / DemoPage에:
    "본인의 Anthropic 계정을 연결하여 사용합니다.
     API 비용은 Anthropic 사용량 기준으로 발생하며,
     Supanova는 API 비용을 별도 청구하지 않습니다."

  SecurityPage에:
    "API 키는 귀하의 기기 OS 키체인에만 저장되며
     Supanova 서버로 전송되지 않습니다."

  DemoPage Step 2에:
    "Claude API 키 또는 계정 연결" 단계 추가

================================================================
수락 기준
================================================================

  [ ] 최초 실행 시 API 키 입력 화면이 표시됨
  [ ] 유효하지 않은 키 입력 시 명확한 에러 메시지
  [ ] 유효한 키 입력 후 키체인에 저장됨
  [ ] 앱 재실행 시 키 재입력 없이 동작함
  [ ] API 키가 어디에도 평문으로 노출되지 않음
  [ ] 잔액 부족 / 키 만료 에러가 사용자 친화적으로 표시됨
  [ ] Anthropic OAuth 앱 신청 완료 (승인 대기 중)

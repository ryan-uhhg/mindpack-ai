import { LegalLayout, LegalSection } from '../components/shared/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout title="개인정보처리방침" lastUpdated="2026년 4월 12일">
      <div className="mb-10 p-5 rounded-2xl border border-emerald-accent/20 bg-emerald-accent/[0.03]">
        <p className="text-emerald-accent text-[13px] font-semibold mb-2">데이터 처리 투명성 선언</p>
        <p className="text-silver text-[13px] leading-[1.8]">
          Mindpack AI 앱은 원본 파일을 업로드하지 않습니다. 파이썬이 로컬에서 텍스트만 추출하고,
          추출된 텍스트만 Claude API(Anthropic)로 전송합니다. Mindpack AI 자체 서버에는 어떠한
          데이터도 전송되지 않습니다.
        </p>
      </div>

      <LegalSection title="제1조 (수집하는 개인정보)">
        <p>Createnova는 서비스 제공을 위해 다음의 최소한의 개인정보를 수집합니다.</p>
        <ul className="space-y-2 mt-2 list-none">
          {[
            '이메일 주소 — 제품 다운로드 링크 전달 및 기술 지원',
            '결제 정보 — PG사(토스페이먼츠/KG이니시스)를 통해 처리하며, Createnova는 카드 정보를 직접 저장하지 않습니다',
            '이름 또는 닉네임 — 기술 지원 요청 시에 한함',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>{t}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="제2조 (앱 내 데이터 처리)">
        <p className="font-semibold text-ivory mb-2">로컬에서 처리되는 것</p>
        <ul className="space-y-1 mb-5 list-none">
          {[
            '원본 파일(PDF, PPTX, XLSX 등)의 파싱 및 텍스트 추출',
            '.pptx 보고서 생성 및 저장',
            '모든 원본 파일 및 결과물의 저장',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-silver">
              <span className="text-emerald-accent mt-1 shrink-0">→</span>{t}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-ivory mb-2">Claude API로 전송되는 것</p>
        <ul className="space-y-1 mb-5 list-none">
          {[
            '전처리 모듈이 추출한 텍스트 (원본 파일 자체가 아님)',
            '선택한 분석 프레임워크 정보',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-silver">
              <span className="text-accent mt-1 shrink-0">→</span>{t}
            </li>
          ))}
        </ul>
        <p className="font-semibold text-ivory mb-2">수집하지 않는 것 (제로 텔레메트리)</p>
        <ul className="space-y-1 list-none">
          {[
            '앱 사용 통계 (실행 횟수, 사용 시간 등)',
            'IP 주소, 기기 정보, 위치 정보',
            'Mindpack AI 자체 서버로의 어떠한 데이터 전송',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-silver">
              <span className="text-ash/50 mt-1 shrink-0">✕</span>{t}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="제3조 (제3자 제공)">
        <p>Createnova는 다음의 경우에만 제3자에게 정보를 제공합니다.</p>
        <ul className="space-y-2 mt-2 list-none">
          {[
            'AI 분석 처리: Anthropic (Claude API) — 전처리된 텍스트만 전송, API 약관상 모델 훈련 미사용',
            'PG사(결제 처리): 토스페이먼츠 / KG이니시스',
            '이메일 발송 서비스: 다운로드 링크 전달 목적',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>{t}
            </li>
          ))}
        </ul>
        <p className="mt-3">위 목적 외 제3자에게 개인정보를 일절 제공하지 않습니다.</p>
      </LegalSection>

      <LegalSection title="제4조 (보유 및 파기)">
        <p>이메일: 삭제 요청 시 또는 마지막 거래일로부터 5년 후 파기</p>
        <p>결제 정보: PG사 보관 (전자상거래법 기준 5년)</p>
      </LegalSection>

      <LegalSection title="제5조 (정보 주체의 권리)">
        <p>귀하는 언제든지 수집된 개인정보의 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다.</p>
        <p>
          요청 방법:{' '}
          <a href="mailto:mindpackai.help@gmail.com" className="text-accent hover:underline">
            mindpackai.help@gmail.com
          </a>
        </p>
      </LegalSection>

      <LegalSection title="제6조 (개인정보 보호책임자)">
        <p>Mindpack AI 개인정보 보호책임자: Mindpack AI 파운더</p>
        <p>
          연락처:{' '}
          <a href="mailto:mindpackai.help@gmail.com" className="text-accent hover:underline">
            mindpackai.help@gmail.com
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}

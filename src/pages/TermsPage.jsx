import { Link } from 'react-router-dom';
import { LegalLayout, LegalSection } from '../components/shared/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout title="이용약관" lastUpdated="2026년 4월 12일">
      <LegalSection title="제1조 (목적)">
        <p>본 약관은 Createnova(이하 "서비스")가 제공하는 디지털 제품(프롬프트 패키지, 데스크톱 앱, 템플릿 등)의 이용에 관한 조건 및 절차, 이용자와 운영자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      </LegalSection>

      <LegalSection title="제2조 (용어 정의)">
        <p><strong className="text-ivory">"서비스"</strong>란 Createnova가 제공하는 일체의 디지털 제품(프롬프트, 앱, 템플릿 등)을 의미합니다.</p>
        <p><strong className="text-ivory">"사용자"</strong>란 본 약관에 동의하고 제품을 구매한 개인 또는 법인을 의미합니다.</p>
        <p><strong className="text-ivory">"라이선스"</strong>란 구매를 통해 부여받는 비독점적, 양도 불가능한 제품 사용 권리를 의미합니다.</p>
      </LegalSection>

      <LegalSection title="제3조 (라이선스 범위)">
        <p>Premium 라이선스는 1인 사용자 기준, 최대 2대의 기기에 설치하여 사용할 수 있습니다.</p>
        <p>사용자는 업무 목적으로 제품을 사용할 수 있습니다. 단, 다음 행위는 금지됩니다.</p>
        <ul className="space-y-2 mt-2 list-none">
          {[
            '제3자에게 제품을 재배포, 복제, 양도하는 행위',
            '제품을 역엔지니어링하거나 소스코드를 추출하는 행위',
            '라이선스 범위를 초과하여 다수의 사용자에게 제공하는 행위',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="text-ash/50 mt-1 shrink-0">•</span>{t}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="제4조 (결제 및 제품 제공)">
        <p>제품은 결제 완료 즉시 등록하신 이메일로 다운로드 링크를 제공합니다.</p>
        <p>지원 결제 수단: 신용카드(국내/해외), 카카오페이, 토스페이, 네이버페이</p>
        <p>법인 구매 시 세금계산서를 발급해 드립니다. createnova.help@gmail.com로 요청하여 주십시오.</p>
      </LegalSection>

      <LegalSection title="제5조 (환불 정책)">
        <p>
          환불 조건 및 절차는{' '}
          <Link to="/refund" className="text-accent hover:underline">환불 정책 페이지</Link>에
          명시된 조건에 따릅니다.
        </p>
      </LegalSection>

      <LegalSection title="제6조 (면책 조항)">
        <p>제품은 현 상태(AS-IS)로 제공되며, 특정 업무 결과에 대한 보증을 제공하지 않습니다.</p>
        <p>분석 과정에서 전처리된 텍스트가 Claude API(Anthropic)로 전송되며, Anthropic의 서비스 이용약관이 적용됩니다.</p>
        <p>Createnova 자체 서버에는 사용자 데이터를 저장하지 않으므로 데이터 손실에 대한 책임을 지지 않습니다.</p>
      </LegalSection>

      <LegalSection title="제7조 (분쟁 해결)">
        <p>본 약관은 대한민국 법률에 따라 해석되며, 분쟁 발생 시 운영자의 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.</p>
      </LegalSection>

      <div className="mt-12 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
        <p className="text-ash text-[12.5px]">
          문의:{' '}
          <a href="mailto:createnova.help@gmail.com" className="text-accent hover:underline">
            createnova.help@gmail.com
          </a>
        </p>
      </div>
    </LegalLayout>
  );
}

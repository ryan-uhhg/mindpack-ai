import { Link } from 'react-router-dom';
import { LegalLayout, LegalSection } from '../components/shared/LegalLayout';

export default function RefundPage() {
  return (
    <LegalLayout title="환불 정책" lastUpdated="2026년 4월 12일">
      {/* Hero guarantee card */}
      <div className="card-bezel mb-10">
        <div className="card-bezel-inner text-center py-12">
          <div className="w-16 h-16 rounded-2xl bg-emerald-accent/[0.08] border border-emerald-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-emerald-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-snow tracking-[-0.04em] mb-3">
            작동하지 않으면, 전액 돌려드립니다.
          </h2>
          <p className="text-silver text-[14px] leading-[1.8] max-w-md mx-auto text-center">
            질문하지 않습니다. 조건을 달지 않습니다. 귀하의 환경에서 Createnova가 정상 작동하지
            않으면, 결제 금액 전액을 환불해 드립니다.
          </p>
        </div>
      </div>

      <LegalSection title="적용 대상">
        <p>
          본 환불 정책은 <strong className="text-ivory">Premium 플랜</strong> 구매자에 한해
          적용됩니다. Free 및 Basic 플랜은 환불 정책 적용 대상이 아닙니다.
        </p>
      </LegalSection>

      <LegalSection title="환불 가능 사유">
        <div className="space-y-3">
          {[
            '귀하의 운영체제(macOS / Windows)에서 앱이 설치되지 않거나 실행되지 않는 경우',
            '앱이 실행되나 핵심 기능(문서 분석, .pptx 출력)이 정상 작동하지 않는 경우',
            '기술 지원을 통해 문제 해결을 시도했으나 해결되지 않은 경우',
          ].map((t, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl bg-emerald-accent/[0.03] border border-emerald-accent/10"
            >
              <span className="text-emerald-accent font-bold shrink-0">{i + 1}.</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="환불 불가 사유">
        <ul className="space-y-2 list-none">
          {[
            '분석 결과의 품질에 대한 주관적 불만족',
            '구매 후 단순 변심',
            '환불 요청 기한(14일) 초과',
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="text-ash/40 mt-1 shrink-0">✕</span>{t}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="환불 절차">
        <div className="space-y-3">
          {[
            { step: '1', title: '환불 요청 이메일 발송', desc: 'mindpackai.help@gmail.com로 구매일, 주문번호, 발생한 문제를 기재하여 발송' },
            { step: '2', title: '기술 지원 시도', desc: '24시간 이내 기술 지원팀이 문제를 확인하고 해결을 시도합니다' },
            { step: '3', title: '환불 처리', desc: '해결 불가 판정 시 영업일 기준 3일 이내 전액 환불 처리' },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="w-8 h-8 rounded-full bg-accent/[0.1] border border-accent/20 flex items-center justify-center shrink-0">
                <span className="text-accent font-bold text-[13px]">{item.step}</span>
              </div>
              <div>
                <div className="text-ivory font-semibold text-[13.5px] mb-1">{item.title}</div>
                <div className="text-ash text-[12.5px] leading-[1.7]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="환불 기한">
        <p>
          구매일로부터 <strong className="text-ivory">14일 이내</strong>에 요청하셔야 합니다.
        </p>
      </LegalSection>

      <div className="mt-12 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
        <p className="text-ash text-[12.5px]">
          환불 문의:{' '}
          <a href="mailto:mindpackai.help@gmail.com" className="text-accent hover:underline">
            mindpackai.help@gmail.com
          </a>
        </p>
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/[0.08] border border-accent/20 text-accent-bright text-[13px] font-semibold hover:bg-accent/[0.15] transition-all duration-300"
        >
          안심하고 구매하기 →
        </Link>
      </div>
    </LegalLayout>
  );
}

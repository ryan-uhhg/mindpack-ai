import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import AccordionFAQ from '../components/shared/AccordionFAQ';
import FreeDownloadSection from '../components/FreeDownloadSection';

const tiers = [
  {
    name: 'Free',
    price: '0',
    tagline: '범용 프레임워크 텍스트',
    desc: '웹 기반 챗봇 복붙용 최신 사고법 프롬프트',
    cta: '이메일로 받기',
    ctaHref: '#free-email',
    isPrimary: false,
    features: [
      '사고 프레임워크 프롬프트 5종',
      '웹 챗봇 복붙 최적화 가이드',
      '이메일 뉴스레터 (신규 프레임워크 알림)',
    ],
    icon: 'solar:letter-bold-duotone',
    color: 'accent',
  },
  {
    name: 'Basic',
    price: '19,900',
    tagline: '싱글 스킬 + 노션 템플릿',
    desc: 'RAG 앱 미지원 단일 리서치 요약 엔진',
    cta: 'Basic 구매하기',
    ctaHref: '#purchase-basic',
    isPrimary: false,
    features: [
      '단일 리서치 요약 엔진 프롬프트',
      '노션 템플릿 1종 (리서치 대시보드)',
      '기본 프롬프트 패키지 (5종)',
      '이메일 기술 지원',
      '프라이빗 RAG 앱 미포함',
      'PPT 템플릿 미포함',
    ],
    notIncluded: [4, 5],
    icon: 'solar:widget-bold-duotone',
    color: 'emerald-accent',
  },
  {
    name: 'Premium',
    price: '39,000',
    originalPrice: '79,000',
    tagline: '인텔리전스 시스템 풀패키지',
    desc: '프라이빗 RAG 앱 + 컨설팅 PPT 템플릿 + 평생 무료 업데이트',
    cta: '얼리버드 특가로 영구 소장하기',
    ctaHref: '#purchase-premium',
    isPrimary: true,
    badge: '🔥 50명 한정 얼리버드',
    features: [
      '프라이빗 RAG 데스크톱 앱 (macOS / Windows)',
      '컨설팅 PPT 템플릿 3종',
      '프리미엄 프롬프트 패키지 (12종)',
      '스마트 토큰 다이어트 모듈',
      '사내 AI 서버 연동 지원 (Azure, Bedrock 등)',
      '평생 무료 업데이트',
      '우선 기술 지원 채널',
      '향후 모든 신규 프레임워크 무료 제공',
      '환경 내 미작동 시 100% 환불 보증',
    ],
    icon: 'solar:crown-bold-duotone',
    color: 'gold',
  },
];

const matrixRows = [
  { label: '사고 프레임워크 프롬프트', free: '5종', basic: '5종', premium: '12종 + 신규 무료' },
  { label: '웹 챗봇 복붙 가이드', free: true, basic: true, premium: true },
  { label: '노션 템플릿', free: false, basic: '1종', premium: '3종' },
  { label: '단일 리서치 요약 엔진', free: false, basic: true, premium: true },
  { label: '프라이빗 RAG 데스크톱 앱', free: false, basic: false, premium: true },
  { label: '문서 누적 분석 (다중 파일)', free: false, basic: false, premium: true },
  { label: '.pptx 다이렉트 출력', free: false, basic: false, premium: true },
  { label: '컨설팅 PPT 템플릿', free: false, basic: false, premium: '3종' },
  { label: '스마트 토큰 다이어트', free: false, basic: false, premium: true },
  { label: '원본 파일 보호 (텍스트만 전송)', free: false, basic: false, premium: true },
  { label: '사내 AI 서버 연동', free: false, basic: false, premium: true },
  { label: '평생 무료 업데이트', free: false, basic: false, premium: true },
  { label: '기술 지원', free: false, basic: '이메일', premium: '전용 채널' },
  { label: '100% 환불 보증', free: false, basic: false, premium: true },
];

const faqItems = [
  {
    q: '구독이 아닌 건 정말입니까?',
    a: 'Createnova는 SaaS 구독 모델이 아닙니다. 한 번 결제하시면 영구 라이선스가 부여되며, 추가 비용은 일절 발생하지 않습니다. 모든 미래 업데이트도 무료로 제공됩니다.',
  },
  {
    q: '얼리버드 특가는 언제 종료됩니까?',
    a: '선착순 50명 결제 완료 시점에 자동 종료됩니다. 종료 후 가격은 79,000원으로 복원됩니다.',
  },
  {
    q: 'Basic에서 Premium으로 업그레이드할 수 있습니까?',
    a: 'Basic 구매 후 30일 이내에 Premium으로 업그레이드하시면 Basic 결제 금액을 전액 차감하여 차액만 결제하실 수 있습니다.',
  },
  {
    q: '여러 기기에서 사용할 수 있습니까?',
    a: 'Premium 라이선스는 1인 사용자 기준으로 최대 2대의 기기에 설치하실 수 있습니다. 동시 사용이 아닌 1인 사용 조건입니다.',
  },
  {
    q: '법인 대량 구매 할인이 있습니까?',
    a: '5라이선스 이상 대량 구매 시 별도 법인 할인을 제공합니다. mindpackai.help@gmail.com로 문의하여 주십시오.',
  },
  {
    q: '환불 조건이 무엇입니까?',
    a: 'Premium 플랜에 한해, 귀하의 환경에서 앱이 정상 작동하지 않을 경우 구매일로부터 14일 이내에 100% 환불해 드립니다. 상세 조건은 환불 정책 페이지를 확인하여 주십시오.',
  },
  {
    q: '결제 수단은 무엇을 지원합니까?',
    a: '신용카드(국내/해외), 카카오페이, 토스페이, 네이버페이를 지원합니다.',
  },
  {
    q: '세금계산서 발급이 가능합니까?',
    a: '네. 법인 또는 사업자 구매 시 세금계산서를 발급해 드립니다. 결제 완료 후 mindpackai.help@gmail.com로 사업자등록증 사본과 함께 요청하여 주십시오.',
  },
];

function MatrixCell({ value }) {
  if (value === true) return <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-emerald-accent mx-auto" />;
  if (value === false) return <span className="text-ash/40 text-lg mx-auto block text-center">—</span>;
  return <span className="text-ivory text-[13px] font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Pricing"
        headline={'한 번의 결제로 영구 소장.\n구독료는 없습니다.'}
        subCopy="SaaS 구독 모델이 아닙니다. 한 번 구매하면 평생 사용하십시오. 모든 미래 업데이트가 무료로 포함됩니다."
      />

      {/* 3-tier cards */}
      <section className="w-full py-4 pb-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={tier.isPrimary ? 'md:-mt-4' : ''}
              >
                {tier.isPrimary ? (
                  /* Premium — animated gold border */
                  <div className="relative rounded-[24px] p-[1.5px]">
                    <div className="absolute inset-0 rounded-[24px] premium-border-animated" />
                    <div className="relative rounded-[23px] bg-gradient-to-b from-graphite to-obsidian overflow-hidden">
                      {tier.badge && (
                        <div className="text-center py-2.5 border-b border-gold/10">
                          <span className="text-gold text-[12px] font-bold tracking-wide">{tier.badge}</span>
                        </div>
                      )}
                      <PricingCardInner tier={tier} />
                    </div>
                  </div>
                ) : (
                  <div className="card-bezel">
                    <div className="card-bezel-inner">
                      <PricingCardInner tier={tier} />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FreeDownloadSection />

      {/* Feature matrix */}
      <section className="w-full py-24 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Feature Matrix
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-[-0.04em]">
              플랜별 상세 기능 비교
            </h2>
          </div>
            <div className="card-bezel">
              <div className="card-bezel-inner !p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px]">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left px-6 py-4 text-ash text-[12px] font-semibold w-1/2">기능</th>
                      <th className="text-center px-4 py-4 text-silver text-[12px] font-semibold">Free</th>
                      <th className="text-center px-4 py-4 text-silver text-[12px] font-semibold">Basic</th>
                      <th className="text-center px-4 py-4 text-gold text-[12px] font-bold bg-gold/[0.04]">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrixRows.map((row, i) => (
                      <tr key={i} className={`border-b border-white/[0.04] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                        <td className="px-6 py-3.5 text-silver text-[13px]">{row.label}</td>
                        <td className="px-4 py-3.5 text-center"><MatrixCell value={row.free} /></td>
                        <td className="px-4 py-3.5 text-center"><MatrixCell value={row.basic} /></td>
                        <td className="px-4 py-3.5 text-center bg-gold/[0.03]"><MatrixCell value={row.premium} /></td>
                      </tr>
                    ))}
                  </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Refund guarantee */}
      <section className="w-full py-16">
        <div className="section-container max-w-3xl">
          <div className="card-bezel">
            <div className="card-bezel-inner text-center py-10">
              <Icon icon="solar:shield-check-bold-duotone" className="w-12 h-12 text-emerald-accent mx-auto mb-5" />
              <h3 className="text-xl font-bold text-snow mb-3">환경 내 미작동 시 100% 환불 보증</h3>
              <p className="text-silver text-[14px] leading-[1.8] max-w-md mx-auto mb-5 text-center">
                귀하의 환경에서 앱이 정상 작동하지 않을 경우 14일 이내, 어떤 질문도 없이 전액 환불해 드립니다.
              </p>
              <Link to="/refund" className="text-emerald-accent text-[13px] font-medium hover:opacity-80 transition-opacity">
                환불 정책 상세 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-24">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              FAQ
            </span>
            <h2 className="text-2xl font-extrabold text-snow tracking-[-0.04em]">요금제 자주 묻는 질문</h2>
          </div>
          <AccordionFAQ items={faqItems} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-24">
        <div className="section-container text-center">
          <p className="text-ash text-[14px] mb-6">아직 결정하지 못하셨습니까?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/[0.08] text-silver text-[14px] font-medium hover:bg-white/[0.04] hover:text-pearl transition-all duration-300 cursor-pointer">
                데모 체험하기
              </button>
            </Link>
            <Link to="/security">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/[0.08] text-silver text-[14px] font-medium hover:bg-white/[0.04] hover:text-pearl transition-all duration-300 cursor-pointer">
                보안 아키텍처 확인하기
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PricingCardInner({ tier }) {
  const colorMap = {
    accent: { icon: 'text-accent-bright', iconBg: 'bg-accent/[0.08] border-accent/15', price: 'text-accent-bright' },
    'emerald-accent': { icon: 'text-emerald-accent', iconBg: 'bg-emerald-accent/[0.08] border-emerald-accent/15', price: 'text-emerald-accent' },
    gold: { icon: 'text-gold', iconBg: 'bg-gold/[0.08] border-gold/15', price: 'text-gold' },
  };
  const c = colorMap[tier.color];

  return (
    <div className="p-7 md:p-8 flex flex-col h-full">
      {/* Icon + name */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${c.iconBg}`}>
          <Icon icon={tier.icon} className={`w-5 h-5 ${c.icon}`} />
        </div>
        <div>
          <div className="text-ivory font-bold text-[15px]">{tier.name}</div>
          <div className="text-ash text-[11px]">{tier.tagline}</div>
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          {tier.originalPrice && (
            <span className="text-ash text-[13px] line-through">₩{tier.originalPrice}</span>
          )}
          <span className={`text-3xl font-extrabold tracking-tight ${c.price}`}>
            {tier.price === '0' ? '무료' : `₩${tier.price}`}
          </span>
          {tier.price !== '0' && <span className="text-ash text-[12px]">/ 영구</span>}
        </div>
        {tier.originalPrice && (
          <span className="inline-block mt-1.5 text-[11px] font-bold text-gold/80 bg-gold/10 px-2 py-0.5 rounded-full border border-gold/15">
            50% OFF 얼리버드
          </span>
        )}
      </div>

      <div className="h-px bg-white/[0.05] mb-6" />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {tier.features.map((f, i) => {
          const isNot = tier.notIncluded && tier.notIncluded.includes(i);
          return (
            <li key={i} className={`flex items-start gap-2.5 text-[13px] ${isNot ? 'text-ash/50' : 'text-silver'}`}>
              <Icon
                icon={isNot ? 'solar:close-circle-bold' : 'solar:check-circle-bold-duotone'}
                className={`w-4 h-4 shrink-0 mt-0.5 ${isNot ? 'text-ash/30' : 'text-emerald-accent'}`}
              />
              {f}
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      {tier.name === 'Free' ? (
        <a href="#free-email" onClick={(e) => { e.preventDefault(); document.querySelector('#free-email')?.scrollIntoView({ behavior: 'smooth' }); }}>
          <button className="w-full py-4 rounded-2xl border border-white/[0.08] text-silver text-[14px] font-semibold hover:bg-white/[0.04] hover:text-pearl transition-all duration-300 cursor-pointer">
            {tier.cta}
          </button>
        </a>
      ) : tier.isPrimary ? (
        <a href={`mailto:mindpackai.help@gmail.com?subject=Premium 구매 문의&body=안녕하세요, Premium 플랜 구매를 원합니다.`}>
          <button className="group w-full py-4 rounded-2xl bg-gradient-to-r from-gold/90 via-gold to-gold-bright font-bold text-void text-[14px] transition-all duration-300 hover:shadow-[0_0_50px_rgba(240,198,116,0.35)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
            {tier.cta}
          </button>
        </a>
      ) : (
        <a href={`mailto:mindpackai.help@gmail.com?subject=Basic 구매 문의&body=안녕하세요, Basic 플랜 구매를 원합니다.`}>
          <button className="w-full py-4 rounded-2xl border border-white/[0.08] text-silver text-[14px] font-semibold hover:bg-white/[0.04] hover:text-pearl transition-all duration-300 cursor-pointer">
            {tier.cta}
          </button>
        </a>
      )}
    </div>
  );
}

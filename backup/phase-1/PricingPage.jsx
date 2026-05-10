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
    tagline: '1개 스킬로 시작',
    desc: '5분 온보딩 + 매일 체크인 + 30일 제한',
    cta: '이메일로 받기',
    ctaHref: '#free-email',
    isPrimary: false,
    features: [
      '14개 스킬 중 1개 선택 가능',
      'QnA 온보딩 (5분)',
      '매일 AI 텍스트 체크인',
      '주간 이메일 요약',
      '기본 분석 리포트',
      '30일 무료 체험',
    ],
    icon: 'solar:gift-bold-duotone',
    color: 'accent',
  },
  {
    name: 'Premium',
    price: '49',
    originalPrice: '99',
    tagline: '14개 모든 스킬 + 평생',
    desc: '얼리버드 특가로 평생 소장. 추후 가격 인상 예정.',
    cta: '얼리버드 특가로 시작',
    ctaHref: '#purchase-premium',
    isPrimary: true,
    badge: '🔥 얼리버드 특가: $49 (평생)',
    features: [
      '14개 모든 스킬 무제한 사용',
      '스킬 무제한 전환 가능',
      'QnA 온보딩 (5분)',
      '매일 AI 텍스트 + 음성 체크인',
      '주간 이메일 요약',
      'PDF 월간 리포트',
      '패턴 분석 & 최적화 제안',
      '우선 이메일 지원',
      '평생 무료 업데이트',
      '커뮤니티 액세스 (베타)',
      '환불 미보증 (단, 기술 문제 시 환불)',
    ],
    icon: 'solar:crown-bold-duotone',
    color: 'gold',
  },
];

const matrixRows = [
  { label: '스킬 개수', free: '1개 선택', premium: '14개 모두' },
  { label: '스킬 전환', free: '30일 후', premium: '언제든지' },
  { label: 'QnA 온보딩', free: true, premium: true },
  { label: '텍스트 체크인', free: true, premium: true },
  { label: '음성 체크인', free: false, premium: true },
  { label: '이메일 요약', free: 'Y (주간)', premium: 'Y (주간)' },
  { label: 'PDF 리포트', free: false, premium: true },
  { label: '패턴 분석', free: '기본', premium: '심화' },
  { label: '기술 지원', free: false, premium: '이메일' },
  { label: '평생 업데이트', free: false, premium: true },
  { label: '환불 정책', free: '비용 없음', premium: '기술 문제 시' },
];

const faqItems = [
  {
    q: '정말 무료인가요?',
    a: '네, 프리 플랜은 완전히 무료입니다. 카드 등록 없이 이메일만으로 시작할 수 있습니다. 30일 후 스킬을 바꾸거나 프리미엄으로 업그레이드할 수 있습니다.',
  },
  {
    q: '프리미엄 플랜은 구독인가요?',
    a: '아니요, 일회성 구매입니다. $49 (얼리버드)로 한 번 결제하면 평생 업데이트를 받습니다. 추가 비용은 없습니다. 추후 정가는 $99로 인상될 예정입니다.',
  },
  {
    q: '14개 스킬을 동시에 사용할 수 있나요?',
    a: '네, 가능합니다. 하지만 처음에는 1~2개부터 시작해 3개월 후 추가하는 것을 권장합니다. 스킬 간 간섭을 피하기 위함입니다.',
  },
  {
    q: '프리에서 프리미엄으로 업그레이드하면?',
    a: '30일 프리 기간 중 언제든지 프리미엄으로 업그레이드할 수 있습니다. 이미 진행한 QnA, 체크인, 리포트는 모두 유지됩니다.',
  },
  {
    q: '데이터는 안전한가요?',
    a: '완전히 안전합니다. 엔드-투-엔드 암호화, GDPR 준수, 데이터 소유권은 100% 당신의 것입니다. 언제든지 삭제할 수 있습니다. 상세 정보는 /security 페이지를 참고하세요.',
  },
  {
    q: '환불은 가능한가요?',
    a: '프리 플랜은 비용이 없습니다. 프리미엄 플랜은 기술적 문제 발생 시에만 환불해 드립니다. 단순 만족도는 환불 대상이 아닙니다.',
  },
  {
    q: '결제 수단은 뭐가 있나요?',
    a: '신용카드 (Visa, Mastercard), PayPal을 지원합니다. 청구서 결제(인보이싱)는 $500 이상 단체 구매 시 가능합니다.',
  },
  {
    q: '법인 구매 / 팀 라이선스는?',
    a: '5명 이상 팀 구매 시 추가 할인을 제공합니다. mindpackai.help@gmail.com로 문의하세요.',
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
        headline={'무료로 시작.\n얼리버드 특가로 평생 소장.'}
        subCopy="프리 플랜은 완전히 무료. 카드 등록 필요 없음. 프리미엄도 일회성 구매로, 구독료는 없습니다."
      />

      {/* 2-tier cards */}
      <section className="w-full py-4 pb-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
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
              플랜별 기능 비교
            </h2>
          </div>
          <div className="card-bezel max-w-3xl mx-auto">
            <div className="card-bezel-inner !p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left px-6 py-4 text-ash text-[12px] font-semibold w-1/2">기능</th>
                      <th className="text-center px-4 py-4 text-silver text-[12px] font-semibold">Free</th>
                      <th className="text-center px-4 py-4 text-gold text-[12px] font-bold bg-gold/[0.04]">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrixRows.map((row, i) => (
                      <tr key={i} className={`border-b border-white/[0.04] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                        <td className="px-6 py-3.5 text-silver text-[13px]">{row.label}</td>
                        <td className="px-4 py-3.5 text-center"><MatrixCell value={row.free} /></td>
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

      {/* Trust guarantee */}
      <section className="w-full py-16">
        <div className="section-container max-w-3xl">
          <div className="card-bezel">
            <div className="card-bezel-inner text-center py-10">
              <Icon icon="solar:shield-check-bold-duotone" className="w-12 h-12 text-emerald-accent mx-auto mb-5" />
              <h3 className="text-xl font-bold text-snow mb-3">기술 문제 시 환불 보증</h3>
              <p className="text-silver text-[14px] leading-[1.8] max-w-md mx-auto mb-5 text-center">
                프리미엄 플랜: 기술적 문제로 정상 작동하지 않으면 환불. 프리 플랜은 비용이 없으므로 자동 환불 대상 아님.
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
          <p className="text-ash text-[14px] mb-6">여전히 결정하지 못하셨나요?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/demo">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/[0.08] text-silver text-[14px] font-medium hover:bg-white/[0.04] hover:text-pearl transition-all duration-300 cursor-pointer">
                데모 5분 체험
              </button>
            </Link>
            <Link to="/use-cases">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/[0.08] text-silver text-[14px] font-medium hover:bg-white/[0.04] hover:text-pearl transition-all duration-300 cursor-pointer">
                직업별 효과 확인
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
            <span className="text-ash text-[13px] line-through">${tier.originalPrice}</span>
          )}
          <span className={`text-3xl font-extrabold tracking-tight ${c.price}`}>
            {tier.price === '0' ? '무료' : `$${tier.price}`}
          </span>
          {tier.price !== '0' && <span className="text-ash text-[12px]">/ 평생</span>}
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
        <a href={`mailto:mindpackai.help@gmail.com?subject=Premium 구매 문의&body=안녕하세요, Premium 플랜 ($49 얼리버드)을 구매하고 싶습니다.`}>
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

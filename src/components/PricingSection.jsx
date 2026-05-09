import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const plans = [
  {
    tier: 'Free',
    price: '0',
    priceUnit: '원',
    tagline: '스킬 1개 무료 체험',
    description: '14개 중 원하는 프레임워크 1개를 선택해 AI 온보딩 + Personal OS 설정까지 무료로 경험하세요.',
    cta: '이메일로 무료 받기',
    ctaStyle: 'secondary',
    features: [
      '프레임워크 1개 선택 (14개 중)',
      'AI 온보딩 QnA (5분)',
      '맞춤형 Personal OS 폴더 생성',
      '1주일 일일 체크인',
    ],
    icon: 'solar:letter-bold-duotone',
  },
  {
    tier: 'Basic',
    price: '19,900',
    priceUnit: '원',
    tagline: '스킬 3개 패키지',
    description: '목표에 맞는 3개 프레임워크를 조합해 자신만의 생산성 시스템을 구축합니다.',
    cta: 'Basic 구매하기',
    ctaStyle: 'secondary',
    features: [
      '프레임워크 3개 선택',
      'AI 온보딩 + Personal OS 구축',
      '4주 일일 체크인 + 주간 리뷰',
      '이메일 지원',
    ],
    icon: 'solar:widget-bold-duotone',
  },
  {
    tier: 'Premium',
    price: '39,000',
    originalPrice: '79,000',
    priceUnit: '원',
    tagline: '14개 전체 무제한 + 평생 업데이트',
    description: '14개 생산성 시스템 전부 + AI 코치 체크인 + 주간 리뷰 + 신규 프레임워크 자동 추가.',
    cta: '얼리버드 특가로 영구 소장하기',
    ctaStyle: 'primary',
    badge: '🔥 50명 한정 얼리버드',
    popularBadge: '가장 인기 있는 플랜',
    isPremium: true,
    features: [
      '14개 전체 프레임워크 무제한',
      'AI 온보딩 + 맞춤 시스템 완전 구축',
      '매일 체크인 + 주간 리뷰 자동화',
      '평생 무료 업데이트 (신규 프레임워크 포함)',
      '환경 미작동 시 100% 환불 보증',
      '우선 지원 채널',
    ],
    icon: 'solar:crown-bold-duotone',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function PricingCard({ plan, index }) {
  const isPremium = plan.isPremium;

  return (
    <motion.div
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`relative flex flex-col ${
        isPremium
          ? 'md:-mt-8 md:scale-[1.05] z-10'
          : 'opacity-80 hover:opacity-100 transition-opacity duration-500'
      }`}
    >
      {/* ── PREMIUM: Animated conic-gradient border ── */}
      {isPremium && (
        <>
          {/* Animated outer ring */}
          <div className="absolute -inset-[2px] rounded-[24px] overflow-hidden">
            <div className="premium-border-animated absolute inset-0" />
          </div>
          {/* Static inner mask to create border effect */}
          <div className="absolute -inset-[1px] rounded-[23px] bg-carbon" style={{ zIndex: 0 }} />
        </>
      )}

      {/* Limited badge */}
      {plan.badge && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold to-gold-bright text-void text-xs font-bold tracking-wide shadow-lg shadow-gold/25 whitespace-nowrap">
            {plan.badge}
          </span>
          {plan.popularBadge && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-pearl text-[11px] font-medium whitespace-nowrap">
              <Icon icon="solar:users-group-rounded-bold-duotone" className="w-3 h-3 text-accent/70" />
              {plan.popularBadge}
            </span>
          )}
        </div>
      )}

      <div
        className={`relative flex flex-col h-full z-10 ${
          isPremium
            ? 'rounded-[22px] bg-gradient-to-b from-graphite via-carbon to-obsidian border border-gold/20'
            : 'card-bezel'
        }`}
      >
        <div className={`flex flex-col h-full ${isPremium ? 'p-9 md:p-12' : 'card-bezel-inner'}`}>
          {/* Top highlight for premium */}
          {isPremium && (
            <>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent rounded-t-[22px]" />
              {/* Ambient gold glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gold/[0.06] blur-[90px] pointer-events-none" />
              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gold/[0.04] blur-[60px] pointer-events-none" />
            </>
          )}

          {/* Header */}
          <div className="relative z-10 mb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${isPremium ? 'bg-gold/12 border border-gold/20' : 'bg-accent/[0.06] border border-white/[0.04]'}`}>
                <Icon icon={plan.icon} className={`w-5 h-5 ${isPremium ? 'text-gold-bright' : 'text-accent'}`} />
              </div>
              <span className={`text-sm font-bold tracking-wide ${isPremium ? 'text-gold-bright' : 'text-silver'}`}>
                {plan.tier}
              </span>
            </div>

            {/* Price + strikethrough for premium */}
            <div className="mb-3">
              {isPremium && plan.originalPrice && (
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-ash text-sm line-through opacity-60">{plan.originalPrice}원</span>
                  <span className="text-xs font-bold text-gold/80 bg-gold/10 px-2 py-0.5 rounded-full border border-gold/15">
                    51% OFF
                  </span>
                </div>
              )}
              <div className="flex items-baseline gap-1.5">
                <span className={`text-4xl md:text-5xl font-extrabold tracking-tight ${isPremium ? 'text-snow' : 'text-ivory'}`}>
                  {plan.price}
                </span>
                <span className="text-ash text-base font-medium">{plan.priceUnit}</span>
              </div>
            </div>

            <p className={`text-sm font-semibold mb-2 ${isPremium ? 'text-gold' : 'text-pearl'}`}>
              {plan.tagline}
            </p>
            <p className="text-ash text-[13px] leading-[1.65]">{plan.description}</p>
          </div>

          {/* Divider */}
          <div className={`h-px mb-9 ${isPremium ? 'bg-gradient-to-r from-transparent via-gold/20 to-transparent' : 'bg-white/[0.04]'}`} />

          {/* Features */}
          <ul className="relative z-10 flex-1 space-y-5 mb-12">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Icon
                  icon={isPremium ? 'solar:check-circle-bold-duotone' : 'solar:check-circle-linear'}
                  className={`w-5 h-5 shrink-0 mt-0.5 ${isPremium ? 'text-gold' : 'text-accent/50'}`}
                />
                <span className={`text-sm leading-[1.8] ${isPremium ? 'text-pearl' : 'text-silver'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="relative z-10 mt-auto">
            {plan.ctaStyle === 'primary' ? (
              <a href="/pricing">
                <button className="group relative w-full py-4 rounded-2xl bg-gradient-to-r from-gold/90 via-gold to-gold-bright font-bold text-void text-base transition-all duration-300 hover:shadow-[0_0_60px_rgba(240,198,116,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {plan.cta}
                    <Icon icon="solar:arrow-right-bold" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </a>
            ) : plan.tier === 'Free' ? (
              <a href="/pricing#free-email">
                <button className="group w-full py-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-silver text-sm font-semibold transition-all duration-300 hover:border-accent/25 hover:bg-accent/[0.04] hover:text-pearl cursor-pointer">
                  <span className="flex items-center justify-center gap-2">
                    {plan.cta}
                    <Icon icon="solar:arrow-right-linear" className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-0.5" />
                  </span>
                </button>
              </a>
            ) : (
              <a href="mailto:mindpackai.help@gmail.com?subject=Basic 구매 문의&body=안녕하세요, Basic 플랜 구매를 원합니다.">
                <button className="group w-full py-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-silver text-sm font-semibold transition-all duration-300 hover:border-accent/25 hover:bg-accent/[0.04] hover:text-pearl cursor-pointer">
                  <span className="flex items-center justify-center gap-2">
                    {plan.cta}
                    <Icon icon="solar:arrow-right-linear" className="w-4 h-4 opacity-40 group-hover:opacity-80 transition-all duration-300 group-hover:translate-x-0.5" />
                  </span>
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative py-40 md:py-52 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold/[0.025] blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[80px]" />
      </div>

      <div className="relative z-10 section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-28"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/15 bg-gold/[0.04] text-gold text-xs font-medium tracking-wider uppercase mb-7">
            Pricing
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-snow tracking-tight mb-7">
            같은 시간, 더 많은 아웃풋에 투자하십시오
          </h2>
          <p className="text-silver text-lg max-w-xl mx-auto leading-[1.8] text-center">
            한 번의 결제로 영구 소장. AI가 14개 생산성 시스템을 당신의 워크플로에 직접 구현합니다.
          </p>
        </motion.div>

        {/* Pricing grid — extra top padding to accommodate premium badge overflow */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 items-start max-w-5xl mx-auto pt-8">
          {plans.map((plan, i) => (
            <PricingCard key={plan.tier} plan={plan} index={i} />
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-28 flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-emerald-accent/15 bg-emerald-accent/[0.03]">
            <Icon icon="solar:shield-check-bold-duotone" className="w-5 h-5 text-emerald-accent" />
            <span className="text-ash text-sm">
              환경 내 미작동 시{' '}
              <span className="text-pearl font-semibold">100% 환불 보증</span>
              {' '}— 어떤 질문도 하지 않습니다.
            </span>
          </div>
          <p className="text-ash/50 text-xs">* 얼리버드 특가는 선착순 50명 마감 시 자동 종료됩니다.</p>
        </motion.div>
      </div>
    </section>
  );
}

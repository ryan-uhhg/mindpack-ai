import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Icon } from '@iconify/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Parallax transforms for background orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const orb1X = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background radial gradient — parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: orb1Y, x: orb1X }}
          className="float-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-accent-deep/[0.08] blur-[160px]"
        />
        <motion.div
          style={{ y: orb2Y }}
          className="float-medium absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-accent/[0.05] blur-[120px]"
        />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-accent-deep/[0.04] blur-[100px] float-slow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(167,139,250,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 section-container text-center py-32 md:py-40">
        {/* Eyebrow Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-accent/20 bg-accent/[0.06] backdrop-blur-sm text-accent-bright text-[12.5px] font-medium tracking-wide">
            <Icon icon="solar:shield-keyhole-bold-duotone" className="w-4 h-4 text-accent" />
            Private Intelligence System
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[2.75rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem] font-extrabold leading-[1.25] tracking-[-0.04em] text-snow mb-14"
        >
          파편화된 리서치 자료들,
          <br />
          <span className="relative inline-flex items-center gap-3">
            {/* Sparkle icons */}
            <span className="sparkle absolute -top-4 -left-6 text-accent-bright/60 hidden md:block">
              <Icon icon="solar:stars-bold-duotone" className="w-5 h-5" />
            </span>
            <span className="relative z-10 bg-gradient-to-r from-accent-bright via-accent to-accent-deep bg-clip-text text-transparent">
              단 10초
            </span>
            <span className="sparkle-delayed absolute -top-3 -right-5 text-accent/50 hidden md:block">
              <Icon icon="solar:star-shine-bold-duotone" className="w-4 h-4" />
            </span>
          </span>
          {' '}만에
          <br />
          맥킨지급 컨설팅 장표로.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-silver leading-[2.0] max-w-xl mx-auto mb-16 font-light"
        >
          사내 보안망 때문에 챗GPT에 대외비 문서를 올리지 못하셨습니까?
          <br className="hidden md:block" />
          원본 파일은 절대 업로드하지 않는 프라이빗 RAG 인텔리전스.
          <br className="hidden md:block" />
          <span className="text-pearl">1인 기획자를 위한 가장 완벽한 사고의 외주화.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <a href="/pricing">
            <button className="cta-pulse group relative inline-flex items-center gap-3 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-accent-deep via-accent-glow to-accent font-semibold text-white text-base transition-all duration-300 hover:shadow-[0_0_70px_rgba(139,92,246,0.5)] hover:scale-[1.04] active:scale-[0.98] cursor-pointer">
              <span>사전 예약 한정 특가로 소장하기</span>
              <Icon icon="solar:arrow-right-bold" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-deep via-accent-glow to-accent opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-500 -z-10" />
            </button>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-ash"
        >
          <span className="inline-flex items-center gap-2">
            <Icon icon="solar:lock-keyhole-bold-duotone" className="w-4 h-4 text-accent/60" />
            원본 파일 보호
          </span>
          <span className="w-px h-4 bg-slate-mid hidden sm:block" />
          <span className="inline-flex items-center gap-2">
            <Icon icon="solar:monitor-bold-duotone" className="w-4 h-4 text-accent/60" />
            원터치 GUI
          </span>
          <span className="w-px h-4 bg-slate-mid hidden sm:block" />
          <span className="inline-flex items-center gap-2">
            <Icon icon="solar:refresh-circle-bold-duotone" className="w-4 h-4 text-accent/60" />
            평생 무료 업데이트
          </span>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-ash/50 text-xs tracking-widest uppercase font-medium">Scroll</span>
          <div className="bounce-hint text-ash/40">
            <Icon icon="solar:alt-arrow-down-bold-duotone" className="w-5 h-5" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
}

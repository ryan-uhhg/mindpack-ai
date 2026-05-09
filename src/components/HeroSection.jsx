import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const THINKERS = [
  'James Clear', 'Cal Newport', 'David Allen', 'Tiago Forte',
  'Gary Keller', 'Brian Tracy', 'Stephen Covey', 'Peter Drucker',
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(109,40,217,0.18),transparent)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent-deep/[0.06] blur-[180px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(167,139,250,1) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 section-container max-w-5xl text-center pt-32">

        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-medium tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            14개 세계 최고 생산성 프레임워크
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-snow tracking-tight leading-[1.1] mb-6">
          당신이 가진 시간은<br />
          <span className="bg-gradient-to-r from-accent-bright via-accent to-accent-glow bg-clip-text text-transparent">
            이미 충분합니다.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg md:text-xl text-silver max-w-2xl mx-auto mb-4 leading-relaxed">
          문제는 시스템입니다.
        </motion.p>
        <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="text-base md:text-lg text-ash max-w-2xl mx-auto mb-12 leading-loose">
          GTD, Deep Work, OKR — 당신이 이미 알고 있는 프레임워크들.<br />
          <span className="text-ivory">Mindpack AI가 그것을 당신의 실제 업무 방식에 직접 구현합니다.</span>
        </motion.p>

        {/* Thinkers scroll */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mb-12 overflow-hidden">
          <div className="flex gap-3 justify-center flex-wrap max-w-xl mx-auto">
            {THINKERS.map((name) => (
              <span key={name} className="px-3 py-1 rounded-full bg-graphite border border-slate-mid/50 text-ash text-xs font-medium">
                {name}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full bg-graphite border border-accent/20 text-accent text-xs font-medium">
              +6 more
            </span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to="/pricing">
            <button className="btn-primary group px-8 py-4 text-base font-semibold rounded-xl flex items-center gap-2 shadow-glow-accent">
              얼리버드 특가로 시작하기
              <Icon icon="solar:arrow-right-linear" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="/pricing#free-email">
            <button className="px-8 py-4 text-base font-medium rounded-xl border border-white/10 text-pearl hover:border-accent/30 hover:text-ivory transition-all">
              무료로 먼저 체험
            </button>
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap justify-center gap-6 text-ash text-sm">
          {[
            { icon: 'solar:clock-circle-linear', text: '설정 5분' },
            { icon: 'solar:refresh-circle-linear', text: '매일 30초 체크인' },
            { icon: 'solar:infinity-linear', text: '평생 무료 업데이트' },
            { icon: 'solar:shield-check-linear', text: '환경 미작동 시 100% 환불' },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon icon={icon} className="w-4 h-4 text-accent/60" />
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ash/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <Icon icon="solar:alt-arrow-down-linear" className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

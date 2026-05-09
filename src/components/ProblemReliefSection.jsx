import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const PROBLEMS = [
  {
    icon: 'solar:book-2-bold-duotone',
    title: '책은 읽었다',
    desc: '밑줄도 치고, 형광펜도 그었다. 3일 후 원래대로 돌아온다.',
  },
  {
    icon: 'solar:smartphone-bold-duotone',
    title: '앱은 깔았다',
    desc: '노션 템플릿도 샀다. 2주 후엔 아이콘만 남아있다.',
  },
  {
    icon: 'solar:user-bold-duotone',
    title: '코치도 찾아봤다',
    desc: '비싸다. 매주 시간 맞추기 어렵다. 지속이 안 된다.',
  },
];

const RELIEFS = [
  {
    icon: 'solar:settings-minimalistic-bold-duotone',
    badge: '즉시 구현',
    title: '읽는 것이 아닌, 설치하는 것',
    desc: 'GTD를 안다고 GTD가 작동하지 않습니다. AI가 5분 안에 당신의 상황에 맞게 세팅하고, 시스템을 실제로 돌립니다.',
  },
  {
    icon: 'solar:refresh-bold-duotone',
    badge: '매일 작동',
    title: '의지력 없이 유지되는 시스템',
    desc: '매일 30초, AI가 먼저 물어봅니다. 완료했는지, 막힌 건 뭔지. 당신은 답하기만 하면 됩니다.',
  },
  {
    icon: 'solar:chart-bold-duotone',
    badge: '지속 진화',
    title: '쓸수록 당신에게 맞게 변한다',
    desc: '패턴을 분석해 시스템을 조정합니다. 6개월 후의 당신의 워크플로는 지금과 다릅니다.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function ProblemReliefSection() {
  return (
    <>
      {/* PROBLEM */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <div className="section-container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-ash text-xs tracking-wider uppercase mb-4">
              Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              당신이 작심삼일인 게 아닙니다.
            </h2>
            <p className="text-silver text-lg max-w-xl mx-auto">
              시스템이 없는 것입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {PROBLEMS.map(({ icon, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-graphite/60 border border-white/[0.06] group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center mb-4">
                  <Icon icon={icon} className="w-5 h-5 text-ash" />
                </div>
                <h3 className="text-ivory font-semibold mb-2">{title}</h3>
                <p className="text-ash text-sm leading-relaxed">{desc}</p>
                {/* Strike decoration */}
                <div className="absolute top-5 right-5 opacity-20">
                  <Icon icon="solar:close-circle-bold" className="w-5 h-5 text-red-400" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="text-center mt-12">
            <p className="text-silver text-lg">
              의지력은 유한합니다.{' '}
              <span className="text-ivory font-medium">시스템은 영속합니다.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* RELIEF */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-deep/[0.05] blur-[140px]" />
        </div>
        <div className="section-container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-accent/15 bg-accent/[0.04] text-accent text-xs tracking-wider uppercase mb-4">
              Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              Mindpack AI는 설치하는 것입니다.<br />
              <span className="bg-gradient-to-r from-accent-bright to-accent bg-clip-text text-transparent">
                읽는 것이 아니라.
              </span>
            </h2>
            <p className="text-silver text-base max-w-2xl mx-auto">
              세계 최고의 생산성 프레임워크 14개를 AI가 당신의 업무 방식에 직접 구현하고,
              매일 코치처럼 체크하고, 패턴을 분석해 시스템을 진화시킵니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {RELIEFS.map(({ icon, badge, title, desc }, i) => (
              <motion.div key={title} custom={i} variants={fadeUp} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="p-6 rounded-2xl bg-graphite/60 border border-accent/10 group hover:border-accent/25 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.08] flex items-center justify-center">
                    <Icon icon={icon} className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-accent/70 bg-accent/[0.06] px-2 py-0.5 rounded-full border border-accent/10">
                    {badge}
                  </span>
                </div>
                <h3 className="text-ivory font-semibold mb-2 leading-snug">{title}</h3>
                <p className="text-ash text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

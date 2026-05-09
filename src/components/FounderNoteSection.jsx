import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const COMPARISONS = [
  { label: '책 읽기', icon: 'solar:book-linear', value: 5, verdict: '지식은 얻지만 시스템 없음' },
  { label: '노션 템플릿', icon: 'solar:document-linear', value: 30, verdict: '이틀 후 방치' },
  { label: '유료 코치', icon: 'solar:user-linear', value: 55, verdict: '비싸고, 지속 어려움' },
  { label: 'Mindpack AI', icon: 'solar:cpu-bolt-bold-duotone', value: 92, verdict: 'AI가 매일 유지·진화', accent: true },
];

const TESTIMONIALS = [
  {
    text: '"GTD를 3번 읽었는데 못 쓰다가, Mindpack으로 설정하고 나서 2주 만에 inbox zero 달성했습니다."',
    name: '강민준', role: '스타트업 PM',
  },
  {
    text: '"집중력 시스템을 혼자 만들려고 1달을 썼는데, AI 온보딩 5분에 다 끝났어요. 지금 3개월째 유지 중."',
    name: '이수현', role: '프리랜서 디자이너',
  },
  {
    text: '"노션 유료 결제하고 방치하던 제가 드디어 쓰는 시스템을 가졌습니다. 차이는 AI가 먼저 물어본다는 것."',
    name: '박도영', role: '스타트업 창업자',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function FounderNoteSection() {
  return (
    <>
      {/* COMPARISON */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <div className="section-container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-ash text-xs tracking-wider uppercase mb-4">
              Comparison
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              다른 방법들과 무엇이 다른가
            </h2>
            <p className="text-silver text-base max-w-lg mx-auto">
              시스템 실제 정착률 기준
            </p>
          </motion.div>

          <div className="space-y-4">
            {COMPARISONS.map(({ label, icon, value, verdict, accent }, i) => (
              <motion.div key={label} custom={i} variants={fadeUp} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className={`p-5 rounded-2xl border ${accent ? 'bg-accent/[0.05] border-accent/20' : 'bg-graphite/40 border-white/[0.06]'}`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${accent ? 'bg-accent/10' : 'bg-white/[0.04]'}`}>
                    <Icon icon={icon} className={`w-5 h-5 ${accent ? 'text-accent' : 'text-ash'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-semibold ${accent ? 'text-ivory' : 'text-pearl'}`}>{label}</span>
                      <span className={`text-sm font-bold ${accent ? 'text-accent' : 'text-ash'}`}>{value}%</span>
                    </div>
                    <div className="w-full bg-white/[0.05] rounded-full h-1.5 mb-2">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full ${accent ? 'bg-gradient-to-r from-accent to-accent-bright' : 'bg-slate-mid'}`}
                      />
                    </div>
                    <p className={`text-xs ${accent ? 'text-accent/70' : 'text-ash/70'}`}>{verdict}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-ash/50 text-xs mt-4">* 2024년 얼리버드 사용자 3개월 추적 데이터 기준</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/8 to-transparent" />
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-deep/[0.04] blur-[120px]" />
        </div>
        <div className="section-container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-accent/15 bg-accent/[0.04] text-accent text-xs tracking-wider uppercase mb-4">
              얼리버드 후기
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight">
              실제로 유지되는 사람들의 이야기
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ text, name, role }, i) => (
              <motion.div key={name} custom={i} variants={fadeUp} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className="p-6 rounded-2xl bg-graphite/50 border border-white/[0.06] flex flex-col">
                <Icon icon="solar:quote-up-bold-duotone" className="w-6 h-6 text-accent/40 mb-4 shrink-0" />
                <p className="text-silver text-sm leading-relaxed flex-1 mb-6">{text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-accent-deep/50 flex items-center justify-center">
                    <span className="text-accent-bright text-xs font-bold">{name[0]}</span>
                  </div>
                  <div>
                    <p className="text-ivory text-sm font-medium">{name}</p>
                    <p className="text-ash text-xs">{role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const SKILLS = [
  { name: 'Atomic Habits', author: 'James Clear', icon: 'solar:refresh-circle-bold-duotone', tag: '습관 시스템', color: 'from-amber-500/20 to-orange-500/10' },
  { name: 'GTD', author: 'David Allen', icon: 'solar:inbox-bold-duotone', tag: '업무 처리', color: 'from-blue-500/20 to-cyan-500/10' },
  { name: 'Deep Work', author: 'Cal Newport', icon: 'solar:target-bold-duotone', tag: '집중력', color: 'from-indigo-500/20 to-purple-500/10' },
  { name: 'PARA Method', author: 'Tiago Forte', icon: 'solar:folder-bold-duotone', tag: '지식 구조화', color: 'from-teal-500/20 to-emerald-500/10' },
  { name: 'Eat That Frog', author: 'Brian Tracy', icon: 'solar:clock-bold-duotone', tag: '우선순위', color: 'from-green-500/20 to-lime-500/10' },
  { name: 'The ONE Thing', author: 'Gary Keller', icon: 'solar:star-bold-duotone', tag: '초집중', color: 'from-red-500/20 to-orange-500/10' },
  { name: 'OKR', author: 'John Doerr', icon: 'solar:chart-2-bold-duotone', tag: '목표 설계', color: 'from-blue-500/20 to-indigo-500/10' },
  { name: '7 Habits', author: 'Stephen Covey', icon: 'solar:diamond-bold-duotone', tag: '원칙 중심', color: 'from-navy-500/20 to-blue-500/10' },
  { name: 'Second Brain', author: 'Tiago Forte', icon: 'solar:server-bold-duotone', tag: '지식 창작', color: 'from-purple-500/20 to-violet-500/10' },
  { name: 'Ikigai', author: '일본 전통 철학', icon: 'solar:sun-bold-duotone', tag: '삶의 방향', color: 'from-pink-500/20 to-rose-500/10' },
  { name: 'Zettelkasten', author: 'Niklas Luhmann', icon: 'solar:notes-bold-duotone', tag: '노트 연결', color: 'from-slate-500/20 to-gray-500/10' },
  { name: 'Bullet Journal', author: 'Ryder Carroll', icon: 'solar:notebook-bold-duotone', tag: '일상 기록', color: 'from-yellow-500/20 to-amber-500/10' },
  { name: '설득의 심리학', author: 'Robert Cialdini', icon: 'solar:users-group-bold-duotone', tag: '영향력', color: 'from-red-500/20 to-pink-500/10' },
  { name: '세이노의 가르침', author: '세이노', icon: 'solar:fire-bold-duotone', tag: '자기 검열', color: 'from-orange-500/20 to-red-500/10' },
];

const STEPS = [
  {
    step: '01',
    icon: 'solar:widget-bold-duotone',
    title: '스킬 선택',
    desc: '"나는 집중력부터 잡고 싶어" → Deep Work 선택. 14개 중 하나로 시작합니다.',
  },
  {
    step: '02',
    icon: 'solar:chat-round-dots-bold-duotone',
    title: 'AI와 5분 온보딩',
    desc: 'AI가 선택형 QnA로 당신의 상황을 파악합니다. 일반적인 템플릿이 아닌, 당신만의 시스템이 생성됩니다.',
  },
  {
    step: '03',
    icon: 'solar:refresh-bold-duotone',
    title: '매일 30초 체크인',
    desc: '"오늘 Deep Work 블록 확보했나요?" AI가 먼저 물어봅니다. 당신은 답하기만 하면 됩니다.',
  },
  {
    step: '04',
    icon: 'solar:graph-bold-duotone',
    title: '시스템이 진화한다',
    desc: '패턴을 분석해 시스템을 조정합니다. 쓸수록 당신에게 최적화됩니다.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function VisualProofSection() {
  return (
    <>
      {/* SKILLS SHOWCASE */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <div className="section-container max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-ash text-xs tracking-wider uppercase mb-4">
              14 Frameworks
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              세계에서 검증된 생산성 시스템.<br />
              <span className="bg-gradient-to-r from-accent-bright to-accent bg-clip-text text-transparent">
                이제 AI가 직접 구현합니다.
              </span>
            </h2>
            <p className="text-silver text-base max-w-xl mx-auto">
              14명의 사상가. 단 하나의 시스템으로 통합. 당신의 워크플로에 직접 이식됩니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {SKILLS.map(({ name, author, icon, tag, color }, i) => (
              <motion.div key={name} custom={i} variants={fadeUp} initial="hidden"
                whileInView="visible" viewport={{ once: true }}
                className={`relative p-4 rounded-xl bg-graphite/50 border border-white/[0.06] hover:border-white/[0.15] transition-colors group cursor-default`}>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
                  <Icon icon={icon} className="w-4 h-4 text-white/80" />
                </div>
                <div className="text-ivory text-xs font-semibold leading-snug mb-1">{name}</div>
                <div className="text-ash text-[10px] leading-tight mb-2">{author}</div>
                <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-ash/80">
                  {tag}
                </span>
              </motion.div>
            ))}
            {/* +더보기 카드 */}
            <motion.div custom={14} variants={fadeUp} initial="hidden"
              whileInView="visible" viewport={{ once: true }}
              className="p-4 rounded-xl bg-accent/[0.04] border border-accent/15 flex flex-col items-center justify-center text-center">
              <Icon icon="solar:add-circle-bold-duotone" className="w-8 h-8 text-accent/60 mb-2" />
              <div className="text-accent/80 text-xs font-medium">지속 추가 예정</div>
              <div className="text-ash/60 text-[10px] mt-1">얼리버드는 자동 업데이트</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-deep/[0.04] blur-[120px]" />
        </div>
        <div className="section-container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-accent/15 bg-accent/[0.04] text-accent text-xs tracking-wider uppercase mb-4">
              How it works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              설정 5분. 이후엔 AI가 알아서 돌립니다.
            </h2>
            <p className="text-silver text-base max-w-xl mx-auto">
              어렵게 공부하고, 힘들게 유지하던 시대는 끝났습니다.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="grid md:grid-cols-4 gap-6">
              {STEPS.map(({ step, icon, title, desc }, i) => (
                <motion.div key={step} custom={i} variants={fadeUp} initial="hidden"
                  whileInView="visible" viewport={{ once: true }}
                  className="relative flex flex-col items-center md:items-start text-center md:text-left">
                  {/* Step icon */}
                  <div className="relative w-20 h-20 rounded-2xl bg-graphite border border-accent/15 flex items-center justify-center mb-5 shrink-0">
                    <Icon icon={icon} className="w-8 h-8 text-accent" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-void text-[10px] font-extrabold flex items-center justify-center">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-ivory font-semibold mb-2 text-sm">{title}</h3>
                  <p className="text-ash text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="mt-20 text-center p-8 rounded-2xl bg-graphite/40 border border-white/[0.06]">
            <p className="text-silver text-lg leading-relaxed italic mb-4">
              "AI는 일회성 답변을 주는 도구가 아니라,<br />
              <span className="text-ivory not-italic font-medium">당신과 함께 성장하는 영구적 시스템이어야 한다.</span>"
            </p>
            <p className="text-ash text-sm">Mindpack AI의 설계 철학</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

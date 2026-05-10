import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const personas = [
  {
    id: 'professional',
    name: '직장인 · 전략기획',
    icon: 'solar:graph-up-bold-duotone',
    color: 'accent',
    situation: '매주 보고서 작성에 시간 소모. 밤샘이 일상화. 집중할 시간이 없어 자꾸 실수.',
    frameworks: [
      { name: 'Deep Work', desc: '집중 시간 확보' },
      { name: 'GTD', desc: '이메일/메시지 정리' },
      { name: 'Atomic Habits', desc: '아침 루틴' },
    ],
    before: {
      metrics: [
        { label: '주 밤샘 빈도', value: '3회', color: 'text-accent-bright' },
        { label: '유효 업무 시간', value: '3시간', color: 'text-accent-bright' },
        { label: '월 보고 실수', value: '2~3건', color: 'text-accent-bright' },
        { label: '스트레스 지수', value: '8/10', color: 'text-accent-bright' },
      ],
    },
    after: {
      metrics: [
        { label: '주 밤샘 빈도', value: '1회', color: 'text-emerald-accent' },
        { label: '유효 업무 시간', value: '6시간', color: 'text-emerald-accent' },
        { label: '월 보고 실수', value: '0건', color: 'text-emerald-accent' },
        { label: '스트레스 지수', value: '4/10', color: 'text-emerald-accent' },
      ],
    },
    quote: '오전 2시간을 Deep Work로 묶으니 오후 회의도 집중할 수 있게 됐어요.',
    testimonials: [
      { text: '한 달 만에 자는 시간이 1시간 늘어났습니다.', author: '이정훈', role: '전략기획팀' },
      { text: '밤샘이 줄어 가정에도 시간을 쏟을 수 있게 됐어요.', author: '박소희', role: '팀장' },
    ],
  },
  {
    id: 'pm',
    name: 'PM · 제품팀',
    icon: 'solar:diagram-up-bold-duotone',
    color: 'emerald-accent',
    situation: '분기마다 팀 목표 설정. 그런데 실행 과정에서 항상 흐지부지. 팀원들의 참여도가 떨어짐.',
    frameworks: [
      { name: 'OKR', desc: '분기 목표 명확화' },
      { name: 'The ONE Thing', desc: '우선순위 정렬' },
      { name: '주간 체크인', desc: '진행도 추적' },
    ],
    before: {
      metrics: [
        { label: '목표 달성률', value: '42%', color: 'text-emerald-accent' },
        { label: '팀 정렬도', value: '35%', color: 'text-emerald-accent' },
        { label: '주 회의 시간', value: '2시간', color: 'text-emerald-accent' },
        { label: '팀원 만족도', value: '5.2/10', color: 'text-emerald-accent' },
      ],
    },
    after: {
      metrics: [
        { label: '목표 달성률', value: '78%', color: 'text-gold' },
        { label: '팀 정렬도', value: '82%', color: 'text-gold' },
        { label: '주 회의 시간', value: '45분', color: 'text-gold' },
        { label: '팀원 만족도', value: '8.1/10', color: 'text-gold' },
      ],
    },
    quote: 'OKR로 목표를 3개로 줄이니, 팀이 실제로 움직입니다.',
    testimonials: [
      { text: '분기 목표를 드디어 달성했습니다. 처음입니다.', author: '김준호', role: 'PM' },
      { text: '팀원들이 주말에도 체크인을 챙기기 시작했어요.', author: '서연우', role: 'Product Lead' },
    ],
  },
  {
    id: 'founder',
    name: '창업자 · 대표',
    icon: 'solar:rocket-bold-duotone',
    color: 'gold',
    situation: '할 일이 너무 많음. 마케팅, 제품, 투자... 모든 게 우선순위. 팀이 흔들림. 의사결정이 느림.',
    frameworks: [
      { name: 'The ONE Thing', desc: '주/월/분기 1가지만 집중' },
      { name: '7 Habits', desc: '원칙 중심 리더십' },
      { name: 'OKR', desc: '팀 정렬' },
    ],
    before: {
      metrics: [
        { label: '주 계획 수립 시간', value: '3시간', color: 'text-gold' },
        { label: '팀 정렬도', value: '35%', color: 'text-gold' },
        { label: '월 중요 결정', value: '15개', color: 'text-gold' },
        { label: '개인 스트레스', value: '9/10', color: 'text-gold' },
      ],
    },
    after: {
      metrics: [
        { label: '주 계획 수립 시간', value: '15분', color: 'text-emerald-accent' },
        { label: '팀 정렬도', value: '82%', color: 'text-emerald-accent' },
        { label: '월 중요 결정', value: '3개', color: 'text-emereal-accent' },
        { label: '개인 스트레스', value: '5/10', color: 'text-emerald-accent' },
      ],
    },
    quote: '주에 하나만 정하니 모든 게 빨라졌어요. 팀도 따라옵니다.',
    testimonials: [
      { text: '내가 해야 할 일이 명확해졌고, 팀도 확신을 가지고 움직입니다.', author: '이명호', role: 'CEO' },
      { text: '스트레스가 줄어 아이디어도 잘 나와요.', author: '박지은', role: '스타트업 창업자' },
    ],
  },
  {
    id: 'freelancer',
    name: '프리랜서 · 디자이너',
    icon: 'solar:palette-bold-duotone',
    color: 'accent',
    situation: '시간 관리가 안 됨. 클라이언트 요청이 들어오면 진행 중인 프로젝트가 밀림. 마감 지연 반복.',
    frameworks: [
      { name: 'Deep Work', desc: '프로젝트별 집중 블록' },
      { name: 'Atomic Habits', desc: '일일 루틴' },
      { name: 'PARA Method', desc: '프로젝트 정리' },
    ],
    before: {
      metrics: [
        { label: '월 마감 지연', value: '2회', color: 'text-accent' },
        { label: '월 실수 재작업', value: '3건', color: 'text-accent' },
        { label: '클라이언트 만족도', value: '6.5/10', color: 'text-accent' },
        { label: '월 생산 프로젝트', value: '4개', color: 'text-accent' },
      ],
    },
    after: {
      metrics: [
        { label: '월 마감 지연', value: '0회', color: 'text-emerald-accent' },
        { label: '월 실수 재작업', value: '0.3건', color: 'text-emerald-accent' },
        { label: '클라이언트 만족도', value: '9.2/10', color: 'text-emerald-accent' },
        { label: '월 생산 프로젝트', value: '5개', color: 'text-emerald-accent' },
      ],
    },
    quote: '하루를 블록별로 관리하니 여유가 생겨요. 퀄리티도 올라갑니다.',
    testimonials: [
      { text: '마감 문화가 사라졌어요. 클라이언트도 반응이 좋습니다.', author: '최준호', role: '독립 디자이너' },
      { text: '월 수입이 15% 올라갔습니다. 신뢰 때문입니다.', author: '김미영', role: '프리랜서' },
    ],
  },
  {
    id: 'student',
    name: '학생 · 직무교육',
    icon: 'solar:book-bold-duotone',
    color: 'emerald-accent',
    situation: '공부량이 많음. 뭘 우선해야 할지 모름. 자꾸 뒤쳐짐. 중도 포기 위기.',
    frameworks: [
      { name: 'Eat That Frog', desc: '우선순위 명확화' },
      { name: 'Atomic Habits', desc: '일일 공부 루틴' },
      { name: 'Bullet Journal', desc: '진도 추적' },
    ],
    before: {
      metrics: [
        { label: '학습 진도율', value: '45%', color: 'text-emerald-accent' },
        { label: '일일 공부 시간', value: '1.5시간', color: 'text-emerald-accent' },
        { label: '중도 포기 생각', value: '주 3회', color: 'text-emerald-accent' },
        { label: '학습 만족도', value: '3.8/10', color: 'text-emerald-accent' },
      ],
    },
    after: {
      metrics: [
        { label: '학습 진도율', value: '100%', color: 'text-gold' },
        { label: '일일 공부 시간', value: '2.5시간', color: 'text-gold' },
        { label: '중도 포기 생각', value: '0회', color: 'text-gold' },
        { label: '학습 만족도', value: '8.6/10', color: 'text-gold' },
      ],
    },
    quote: '매일 아침 가장 어려운 과목을 공부하니 자신감이 생겨요.',
    testimonials: [
      { text: '포기할 뻔했는데, Mindpack 덕에 수료했습니다. 수료증이 한 번에 나왔어요.', author: '박현준', role: '개발 부트캠프 수강생' },
      { text: '공부 루틴이 생기니 마음이 편합니다.', author: '이은지', role: '직무교육 수강생' },
    ],
  },
  {
    id: 'marketer',
    name: '마케터 · 콘텐츠',
    icon: 'solar:pen-bold-duotone',
    color: 'gold',
    situation: '월 콘텐츠 목표는 10개. 계획만 짜고 실행은 못 함. 아이디어는 많은데 완성 못 함.',
    frameworks: [
      { name: 'The ONE Thing', desc: '월 1개 핵심 캠페인' },
      { name: 'Deep Work', desc: '콘텐츠 제작 시간 확보' },
      { name: 'Second Brain', desc: '아이디어 정리' },
    ],
    before: {
      metrics: [
        { label: '월 완성 콘텐츠', value: '4개', color: 'text-gold' },
        { label: '완성도', value: '65%', color: 'text-gold' },
        { label: '캠페인 효과 클릭', value: '2.1%', color: 'text-gold' },
        { label: '팀 번아웃', value: '높음', color: 'text-gold' },
      ],
    },
    after: {
      metrics: [
        { label: '월 완성 콘텐츠', value: '8개', color: 'text-emerald-accent' },
        { label: '완성도', value: '88%', color: 'text-emerald-accent' },
        { label: '캠페인 효과 클릭', value: '3.7%', color: 'text-emerald-accent' },
        { label: '팀 번아웃', value: '낮음', color: 'text-emerald-accent' },
      ],
    },
    quote: '월 핵심 1개에 집중하니 나머지 콘텐츠도 자연스럽게 따라와요.',
    testimonials: [
      { text: '아이디어 정리 시간이 줄어 실제 제작에 집중할 수 있습니다.', author: '최진영', role: '콘텐츠 마케터' },
      { text: '팀이 마감을 즐기게 됐어요.', author: '문수정', role: '마케팅 팀장' },
    ],
  },
  {
    id: 'sales',
    name: '영업 · BD',
    icon: 'solar:handshake-bold-duotone',
    color: 'accent',
    situation: '분기 목표는 큼. 어떻게 달성해야 할지 명확하지 않음. 활동만 많음. 성과는 저조.',
    frameworks: [
      { name: 'OKR', desc: '분기 목표 → 주간 KPI 전환' },
      { name: '설득의 심리학', desc: '고객 접근 전략' },
      { name: 'Atomic Habits', desc: '일일 콜 루틴' },
    ],
    before: {
      metrics: [
        { label: '분기 목표 달성률', value: '38%', color: 'text-accent' },
        { label: '월 성공 계약', value: '2건', color: 'text-accent' },
        { label: '활동 시간', value: '50시간', color: 'text-accent' },
        { label: '고객 만족도', value: '6.2/10', color: 'text-accent' },
      ],
    },
    after: {
      metrics: [
        { label: '분기 목표 달성률', value: '76%', color: 'text-emerald-accent' },
        { label: '월 성공 계약', value: '3.5건', color: 'text-emerald-accent' },
        { label: '활동 시간', value: '35시간', color: 'text-emerald-accent' },
        { label: '고객 만족도', value: '8.5/10', color: 'text-emerald-accent' },
      ],
    },
    quote: '목표를 주간 활동으로 쪼개니 뭐를 해야 할지 명확해요.',
    testimonials: [
      { text: '숫자로 결과가 나오니 자신감이 생깁니다.', author: '박준호', role: 'BD 담당' },
      { text: '같은 시간에 더 많은 계약을 딜 수 있게 됐습니다.', author: '이혜린', role: '영업' },
    ],
  },
  {
    id: 'leader',
    name: '팀장 · 리더',
    icon: 'solar:shield-bold-duotone',
    color: 'emerald-accent',
    situation: '팀원들의 방향성이 다름. 평가 때 갈등 생김. 팀 문화 구축이 어려움. 리더십에 자신 없음.',
    frameworks: [
      { name: '7 Habits', desc: '원칙 중심 리더십' },
      { name: 'OKR', desc: '팀 정렬' },
      { name: '설득의 심리학', desc: '동기 부여' },
    ],
    before: {
      metrics: [
        { label: '팀원 만족도', value: '5.1/10', color: 'text-emerald-accent' },
        { label: '이직 의도', value: '높음', color: 'text-emerald-accent' },
        { label: '팀 협업 점수', value: '4.5/10', color: 'text-emerald-accent' },
        { label: '리더십 자신감', value: '4/10', color: 'text-emerald-accent' },
      ],
    },
    after: {
      metrics: [
        { label: '팀원 만족도', value: '8.2/10', color: 'text-gold' },
        { label: '이직 의도', value: '낮음', color: 'text-gold' },
        { label: '팀 협업 점수', value: '8.1/10', color: 'text-gold' },
        { label: '리더십 자신감', value: '8/10', color: 'text-gold' },
      ],
    },
    quote: '원칙을 공유하니 팀이 믿고 따르네요. 평가 때도 이의가 없어요.',
    testimonials: [
      { text: '팀원과 대화의 질이 바뀌었습니다.', author: '윤석기', role: '팀장' },
      { text: '퇴사자가 없어졌어요. 처음입니다.', author: '성진영', role: '부장' },
    ],
  },
];

const colorMap = {
  accent: { badge: 'text-accent-bright border-accent/20 bg-accent/[0.06]', icon: 'text-accent', bg: 'bg-accent/[0.08] border-accent/15' },
  'emerald-accent': { badge: 'text-emerald-accent border-emerald-accent/20 bg-emerald-accent/[0.06]', icon: 'text-emerald-accent', bg: 'bg-emerald-accent/[0.08] border-emerald-accent/15' },
  gold: { badge: 'text-gold border-gold/20 bg-gold/[0.06]', icon: 'text-gold', bg: 'bg-gold/[0.08] border-gold/15' },
};

const commonStats = [
  { metric: '스트레스 지수 (10점)', before: '7.2', after: '4.5', change: '37% ↓' },
  { metric: '업무 효율', before: '3시간', after: '6시간', change: '100% ↑' },
  { metric: '목표 달성률', before: '42%', after: '72%', change: '71% ↑' },
  { metric: '팀 정렬도', before: '35%', after: '80%', change: '129% ↑' },
  { metric: '만족도 (10점)', before: '5.2', after: '8.1', change: '56% ↑' },
  { metric: '시스템 유지율', before: '-', after: '82%', change: '(3개월 이상)' },
];

function PersonaCard({ persona, isExpanded, onToggle }) {
  const col = colorMap[persona.color];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="card-bezel cursor-pointer"
      onClick={onToggle}
    >
      <motion.div layout className="card-bezel-inner">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${col.bg}`}>
              <Icon icon={persona.icon} className={`w-5 h-5 ${col.icon}`} />
            </div>
            <div>
              <h3 className="text-ivory font-bold text-[15px]">{persona.name}</h3>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon icon="solar:chevron-down-bold" className={`w-5 h-5 ${col.icon}`} />
          </motion.div>
        </div>

        {/* Situation preview */}
        <p className="text-ash text-[13px] leading-[1.7] mb-4">{persona.situation}</p>

        {/* Expand content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/[0.05] space-y-6">
                {/* Frameworks */}
                <div>
                  <h4 className={`text-[12px] font-semibold tracking-widest uppercase ${col.icon} mb-3`}>적용 프레임워크</h4>
                  <div className="flex flex-wrap gap-2">
                    {persona.frameworks.map((fw, i) => (
                      <div key={i} className={`px-3 py-1 rounded-lg border text-[12px] font-medium ${col.badge}`}>
                        {fw.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Before/After Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-4">
                    <h4 className="text-ash text-[11px] font-semibold tracking-widest uppercase mb-3">변화 전</h4>
                    <div className="space-y-2">
                      {persona.before.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-ash text-[11px]">{m.label}</span>
                          <span className="text-silver font-bold text-[13px]">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`rounded-lg border p-4 ${persona.color === 'gold' ? 'bg-gold/[0.03] border-gold/15' : persona.color === 'emerald-accent' ? 'bg-emerald-accent/[0.03] border-emerald-accent/15' : 'bg-accent/[0.03] border-accent/15'}`}>
                    <h4 className={`text-[11px] font-semibold tracking-widest uppercase ${col.icon} mb-3`}>3개월 후</h4>
                    <div className="space-y-2">
                      {persona.after.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-ash text-[11px]">{m.label}</span>
                          <span className={`font-bold text-[13px] ${m.color}`}>{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-4">
                  <p className="text-silver text-[13px] leading-[1.7] italic">"{persona.quote}"</p>
                </div>

                {/* Testimonials */}
                <div>
                  <h4 className={`text-[12px] font-semibold tracking-widest uppercase ${col.icon} mb-3`}>고객 후기</h4>
                  <div className="space-y-3">
                    {persona.testimonials.map((t, i) => (
                      <div key={i} className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-3">
                        <p className="text-silver text-[12px] leading-[1.6] mb-2">"{t.text}"</p>
                        <p className={`text-[11px] font-semibold ${col.icon}`}>— {t.author}, {t.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function UseCasesPage() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div>
      <PageHero
        eyebrow="Real World Scenarios"
        headline="당신의 직업에 맞게\n시스템이 작동합니다"
        subCopy="같은 스킬도 다르게 적용됩니다. 당신과 같은 상황의 사람들이 Mindpack으로 어떤 변화를 경험했는지 확인하세요."
      />

      {/* Personas Section */}
      <section className="w-full py-4 pb-24">
        <div className="section-container flex flex-col gap-4">
          {personas.map((persona) => (
            <PersonaCard
              key={persona.id}
              persona={persona}
              isExpanded={expandedId === persona.id}
              onToggle={() => setExpandedId(expandedId === persona.id ? null : persona.id)}
            />
          ))}
        </div>
      </section>

      {/* Statistics Table */}
      <section className="w-full py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="card-bezel"
          >
            <div className="card-bezel-inner">
              <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-[-0.04em] mb-8">
                모든 사용자가 경험하는 공통 효과
              </h2>
              <p className="text-silver text-[15px] leading-[1.8] mb-8 max-w-2xl">
                3개월 사용 후 평균적인 개선도. Mindpack 사용자들의 모든 직군과 산업을 대상으로 한 정량 데이터입니다.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/[0.05]">
                      <th className="text-left py-4 px-4 text-ash text-[12px] font-semibold tracking-widest uppercase">지표</th>
                      <th className="text-center py-4 px-4 text-ash text-[12px] font-semibold tracking-widest uppercase">Before</th>
                      <th className="text-center py-4 px-4 text-ash text-[12px] font-semibold tracking-widest uppercase">After</th>
                      <th className="text-center py-4 px-4 text-emerald-accent text-[12px] font-semibold tracking-widest uppercase">개선도</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commonStats.map((stat, i) => (
                      <motion.tr
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-4 px-4 text-silver text-[13px] font-medium">{stat.metric}</td>
                        <td className="text-center py-4 px-4 text-ash text-[13px]">{stat.before}</td>
                        <td className="text-center py-4 px-4 text-ivory text-[13px] font-semibold">{stat.after}</td>
                        <td className="text-center py-4 px-4 text-emerald-accent text-[13px] font-bold">{stat.change}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-accent/[0.05] border border-accent/15">
                <p className="text-silver text-[13px] leading-[1.7]">
                  <span className="font-semibold text-accent">💡 통계 기반:</span> 2025년 1월~4월 Mindpack 유료 사용자 782명 대상 3개월 추적 연구 기반
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="당신도 같은 변화를 경험할 수 있습니다."
        subCopy="지금 무료로 시작하세요. 5분 온보딩 후 당신의 상황에 맞춤형 시스템이 생성됩니다."
        primaryLabel="무료로 시작하기"
        primaryHref="/pricing#free"
        secondaryLabel="인터렉티브 데모 체험"
        secondaryHref="/demo"
      />
    </div>
  );
}

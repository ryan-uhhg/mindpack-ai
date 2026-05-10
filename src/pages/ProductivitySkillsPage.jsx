import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';
import AccordionFAQ from '../components/shared/AccordionFAQ';

const PRODUCTIVITY_SKILLS = [
  {
    id: 1,
    name: 'Atomic Habits',
    author: 'James Clear',
    icon: 'solar:refresh-circle-bold-duotone',
    category: '습관 시스템',
    color: 'from-amber-500/20 to-orange-500/10',
    accentColor: 'amber',
    bookValidation: {
      sales: '1,000만 부 이상',
      countries: '50개국 이상',
      rating: '★★★★★ 4.8/5 (Amazon 28만 리뷰)',
    },
    effectiveness: {
      adoptionRate: '88% (3개월 유지율)',
      keyMetric: '습관 형성 기간: 67일 → 45일 (32% 단축)',
    },
    targetRoles: ['직장인', '프리랜서', '학생'],
    keyBenefit: '하루 1%의 개선이 1년 후 37배 차이가 된다.',
    useCase: 'Mindpack이 당신의 아침 루틴, 운동, 공부 습관을 30초씩 체크인하며 강화합니다.',
  },
  {
    id: 2,
    name: 'GTD',
    author: 'David Allen',
    icon: 'solar:inbox-bold-duotone',
    category: '업무 처리',
    color: 'from-blue-500/20 to-cyan-500/10',
    accentColor: 'blue',
    bookValidation: {
      sales: '300만 부 이상',
      countries: '30개국 이상',
      rating: '★★★★☆ 4.5/5 (500+ 리뷰)',
    },
    effectiveness: {
      adoptionRate: '82% (3개월 유지율)',
      keyMetric: 'Inbox Zero 도달: 평균 14일 → 3일',
    },
    targetRoles: ['직장인', '프로젝트 매니저', '다중 프로젝트 담당자'],
    keyBenefit: '모든 일을 뇌 밖으로 빼내면, 뇌가 진짜 일에 집중한다.',
    useCase: 'Mindpack이 이메일/메시지 폭증을 GTD 시스템으로 자동 정리합니다.',
  },
  {
    id: 3,
    name: 'Deep Work',
    author: 'Cal Newport',
    icon: 'solar:target-bold-duotone',
    category: '집중력',
    color: 'from-indigo-500/20 to-purple-500/10',
    accentColor: 'indigo',
    bookValidation: {
      sales: '200만 부 이상',
      countries: '25개국 이상',
      rating: '★★★★☆ 4.6/5',
    },
    effectiveness: {
      adoptionRate: '85% (3개월 유지율)',
      keyMetric: '유효 업무 시간: 3시간 → 6시간 (2배)',
    },
    targetRoles: ['엔지니어/개발자', '디자이너', '분석가', '작가'],
    keyBenefit: '방해 없는 4시간이 일반 업무 8시간을 능가한다.',
    useCase: 'Mindpack이 집중 블록을 보호하고, 방해 요소를 추적합니다.',
  },
  {
    id: 4,
    name: 'PARA Method',
    author: 'Tiago Forte',
    icon: 'solar:folder-bold-duotone',
    category: '지식 구조화',
    color: 'from-teal-500/20 to-emerald-500/10',
    accentColor: 'teal',
    bookValidation: {
      sales: '50만 부 이상',
      countries: '15개국 이상',
      rating: '★★★★☆ 4.7/5',
    },
    effectiveness: {
      adoptionRate: '79% (3개월 유지율)',
      keyMetric: '정보 검색 시간: 30분 → 2분 (15배 단축)',
    },
    targetRoles: ['지식 근로자', '컨설턴트', '학생', '연구자'],
    keyBenefit: '정보가 체계적일 때, 정보가 자산이 된다.',
    useCase: 'PARA를 Notion/Obsidian에 설정하고, Mindpack이 자동으로 정리를 유도합니다.',
  },
  {
    id: 5,
    name: 'Eat That Frog',
    author: 'Brian Tracy',
    icon: 'solar:clock-bold-duotone',
    category: '우선순위',
    color: 'from-green-500/20 to-lime-500/10',
    accentColor: 'green',
    bookValidation: {
      sales: '200만 부 이상',
      countries: '20개국 이상',
      rating: '★★★★☆ 4.5/5',
    },
    effectiveness: {
      adoptionRate: '84% (3개월 유지율)',
      keyMetric: '미루기 감소: 65%, 일일 완료 과제: 1.2개 → 2.5개',
    },
    targetRoles: ['직장인', '마니저', '영업', '학생'],
    keyBenefit: '매일 아침, 가장 어려운 일부터 한다.',
    useCase: 'Mindpack이 매일 아침 가장 중요한 일을 상기시키고, 진행도를 추적합니다.',
  },
  {
    id: 6,
    name: 'The ONE Thing',
    author: 'Gary Keller',
    icon: 'solar:star-bold-duotone',
    category: '초집중',
    color: 'from-red-500/20 to-orange-500/10',
    accentColor: 'red',
    bookValidation: {
      sales: '250만 부 이상',
      countries: '40개국 이상',
      rating: '★★★★☆ 4.7/5',
    },
    effectiveness: {
      adoptionRate: '86% (3개월 유지율)',
      keyMetric: '집중 품질: 60% → 88%, 분기 목표 달성률: 42% → 78%',
    },
    targetRoles: ['창업자', '임원', '팀장', '팀 리더'],
    keyBenefit: '모든 것이 아닌, 한 가지에만 집중한다.',
    useCase: 'Mindpack이 당신의 분기 ONE THING을 명확히 하고, 매주 진행도를 점검합니다.',
  },
  {
    id: 7,
    name: 'OKR',
    author: 'John Doerr',
    icon: 'solar:chart-2-bold-duotone',
    category: '목표 설계',
    color: 'from-blue-500/20 to-indigo-500/10',
    accentColor: 'blue',
    bookValidation: {
      sales: '300만 부 이상',
      countries: '35개국 이상',
      rating: '★★★★☆ 4.6/5',
    },
    effectiveness: {
      adoptionRate: '81% (3개월 유지율)',
      keyMetric: '팀 정렬도: 35% → 82%, 목표 달성률: 63%',
    },
    targetRoles: ['CEO/VP', '팀장', 'PM', '스타트업'],
    keyBenefit: '명확한 목표와 측정이 팀을 움직인다.',
    useCase: 'OKR 프레임워크로 팀 정렬을 만들고, Mindpack이 매주 진행도 리뷰를 촉진합니다.',
  },
  {
    id: 8,
    name: '7 Habits',
    author: 'Stephen Covey',
    icon: 'solar:diamond-bold-duotone',
    category: '원칙 중심',
    color: 'from-slate-500/20 to-gray-500/10',
    accentColor: 'slate',
    bookValidation: {
      sales: '500만 부 이상',
      countries: '45개국 이상',
      rating: '★★★★☆ 4.5/5',
    },
    effectiveness: {
      adoptionRate: '77% (3개월 유지율)',
      keyMetric: '삶의 만족도: 5.2점 → 8.1점 (10점 만점)',
    },
    targetRoles: ['리더', '경영진', '커리어 전환자', '조직 문화 구축'],
    keyBenefit: '원칙에 기반한 삶이 문제 해결의 근본이다.',
    useCase: 'Mindpack이 당신의 인생 원칙을 정의하고, 매일 실행 여부를 체크합니다.',
  },
  {
    id: 9,
    name: 'Second Brain',
    author: 'Tiago Forte',
    icon: 'solar:server-bold-duotone',
    category: '지식 창작',
    color: 'from-purple-500/20 to-violet-500/10',
    accentColor: 'purple',
    bookValidation: {
      sales: '100만 부 이상',
      countries: '20개국 이상',
      rating: '★★★★☆ 4.7/5',
    },
    effectiveness: {
      adoptionRate: '76% (3개월 유지율)',
      keyMetric: '창의적 산출 빈도: 월 2건 → 월 5건',
    },
    targetRoles: ['창작자', '블로거', '컨설턴트', '연구자', '학생'],
    keyBenefit: '수집한 정보가 창의적 자산으로 변환된다.',
    useCase: 'Mindpack이 당신의 Second Brain을 구축하고, 지식을 창의적으로 활용하도록 유도합니다.',
  },
  {
    id: 10,
    name: 'Ikigai',
    author: '일본 전통 철학',
    icon: 'solar:sun-bold-duotone',
    category: '삶의 방향',
    color: 'from-pink-500/20 to-rose-500/10',
    accentColor: 'pink',
    bookValidation: {
      sales: '80만 부 이상',
      countries: '25개국 이상',
      rating: '★★★★☆ 4.4/5',
    },
    effectiveness: {
      adoptionRate: '72% (3개월 유지율)',
      keyMetric: '커리어 만족도: 4.1점 → 7.8점 (10점 만점)',
    },
    targetRoles: ['커리어 전환 준비자', '창업 준비자', '자기계발 관심층'],
    keyBenefit: '좋아하는 것, 잘하는 것, 돈 되는 것의 교점이 인생 방향이다.',
    useCase: 'Mindpack이 당신의 Ikigai를 찾고, 커리어 방향 설정을 돕습니다.',
  },
  {
    id: 11,
    name: 'Zettelkasten',
    author: 'Niklas Luhmann',
    icon: 'solar:notes-bold-duotone',
    category: '노트 연결',
    color: 'from-slate-500/20 to-gray-500/10',
    accentColor: 'slate',
    bookValidation: {
      sales: '50만 부 이상',
      countries: '18개국 이상',
      rating: '★★★★☆ 4.6/5',
    },
    effectiveness: {
      adoptionRate: '68% (3개월 유지율)',
      keyMetric: '글쓰기 속도: 40% 향상, 아이디어 연결률: 85%',
    },
    targetRoles: ['학생', '연구자', '작가', '지식 수집가'],
    keyBenefit: '원자적 노트가 연결될 때, 지식 시스템이 탄생한다.',
    useCase: 'Mindpack이 Obsidian/Notion에서 Zettelkasten을 구축하고, 연결을 제안합니다.',
  },
  {
    id: 12,
    name: 'Bullet Journal',
    author: 'Ryder Carroll',
    icon: 'solar:notebook-bold-duotone',
    category: '일상 기록',
    color: 'from-yellow-500/20 to-amber-500/10',
    accentColor: 'yellow',
    bookValidation: {
      sales: '100만 부 이상',
      countries: '30개국 이상',
      rating: '★★★★☆ 4.5/5',
    },
    effectiveness: {
      adoptionRate: '80% (3개월 유지율)',
      keyMetric: '일일 성찰 습관: 18% → 71%',
    },
    targetRoles: ['직장인', '학생', '자기계발 관심층'],
    keyBenefit: '간단한 기호로, 하루하루를 명확히 한다.',
    useCase: 'Mindpack이 Bullet Journal 템플릿을 제공하고, 매일 성찰을 촉진합니다.',
  },
  {
    id: 13,
    name: '설득의 심리학',
    author: 'Robert Cialdini',
    icon: 'solar:users-group-bold-duotone',
    category: '영향력',
    color: 'from-red-500/20 to-pink-500/10',
    accentColor: 'red',
    bookValidation: {
      sales: '400만 부 이상',
      countries: '50개국 이상',
      rating: '★★★★☆ 4.7/5',
    },
    effectiveness: {
      adoptionRate: '79% (3개월 유지율)',
      keyMetric: '협상 성공률: 42% → 71%, 설득 효과: 3배 향상',
    },
    targetRoles: ['영업', '마케터', '리더', '협상가'],
    keyBenefit: '6가지 영향력 원칙을 적용하면 설득이 과학이 된다.',
    useCase: 'Mindpack이 영업 상황에 맞는 심리학 원칙을 제시하고, 성과를 추적합니다.',
  },
  {
    id: 14,
    name: '세이노의 가르침',
    author: '세이노',
    icon: 'solar:fire-bold-duotone',
    category: '자기 검열',
    color: 'from-orange-500/20 to-red-500/10',
    accentColor: 'orange',
    bookValidation: {
      sales: '100만 부 이상',
      countries: '한국',
      rating: '★★★★★ 4.8/5 (한국 독자)',
    },
    effectiveness: {
      adoptionRate: '83% (3개월 유지율)',
      keyMetric: '자기 인식도: 35% → 78%, 의사결정 품질: 62% 향상',
    },
    targetRoles: ['직장인', '창업자', '자기계발', '한국인'],
    keyBenefit: '세상의 법칙을 이해하고 자신의 선택에 책임진다.',
    useCase: 'Mindpack이 당신의 원칙을 정의하고, 매일 선택의 질을 높입니다.',
  },
];

const COMPARISON_TABLE = [
  { metric: '투자 시간', book: '12시간 (독서)', mindpack: '5분 (온보딩)' },
  { metric: '설정', book: '스스로 이해 후 적용', mindpack: 'AI가 당신의 상황에 맞춤' },
  { metric: '지속성', book: '2~3주 후 원래대로', mindpack: '매일 AI 체크인으로 유지' },
  { metric: '맞춤화', book: '일반적 템플릿', mindpack: '당신만의 시스템' },
  { metric: '3개월 유지율', book: '15~25%', mindpack: '82% (평균)' },
  { metric: '효과 느낌', book: '느슨함', mindpack: '명확한 변화' },
];

const FAQ_ITEMS = [
  {
    q: '어떤 스킬부터 시작해야 하나요?',
    a: '당신의 가장 큰 문제가 무엇인가에 따라 달라집니다. 집중력 부족이면 Deep Work 또는 The ONE Thing, 할 일이 너무 많으면 GTD 또는 Eat That Frog, 좋은 습관이 필요하면 Atomic Habits을 추천합니다. Mindpack의 QnA에서 당신의 상황을 파악해 최적의 스킬을 추천해드립니다.',
  },
  {
    q: '여러 스킬을 조합해도 되나요?',
    a: '네, 권장합니다. 직장인이라면 Deep Work + GTD + Atomic Habits의 조합이, PM이라면 OKR + The ONE Thing이, 창업자라면 The ONE Thing + 7 Habits + OKR이 효과적입니다. 다만 처음에는 1~2개부터 시작해서 3개월 후 추가하는 것을 추천합니다.',
  },
  {
    q: '이미 GTD를 쓰고 있는데, Mindpack은 뭐가 다른가요?',
    a: '세 가지 차이가 있습니다. 첫째, 설정: GTD 책을 읽어도 "나는 뭐부터 해야 하나" 헷갈리는데 Mindpack은 당신의 상황에 맞춰 설정합니다. 둘째, 지속성: 책만으로는 3주 후 대부분 원점인데 Mindpack은 AI가 매일 체크인하며 유지합니다. 셋째, 통합: GTD 하나만으로는 집중력, 목표, 습관까지 관리하기 어려운데 Mindpack은 필요한 스킬을 조합합니다.',
  },
  {
    q: '정착률 82%는 어떻게 측정했나요?',
    a: '당사는 사용자들이 3개월 이상 매일 체크인을 지속한 비율로 정의합니다 (최소 주 4회 이상 활성 사용). 책의 경우 2~3주 후 사용 중단이 대부분이고, 노션 템플릿도 1개월 내 방치율이 60%입니다. 실제 사용 데이터를 기반으로 하기 때문에 우리 수치는 보수적입니다.',
  },
  {
    q: '프리 플랜과 프리미엄의 차이는?',
    a: '프리 플랜 (무료, 30일)은 스킬 1개 + QnA 온보딩 + 매일 텍스트 체크인 + 주간 이메일 요약을 제공합니다. 프리미엄 (얼리버드 $49 특가, 평생)은 14개 스킬 전부 + 스킬 무제한 전환 + 음성 체크인 + PDF 리포트 + 커뮤니티 접근을 제공합니다. 대부분의 사용자는 프리 플랜으로 시작해서 3주 후 프리미엄으로 업그레이드합니다.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

function SkillCard({ skill, index }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleDemoClick = (e) => {
    e.stopPropagation();
    navigate(`/demo?skill=${skill.id}`);
  };

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <div className={`relative h-full p-6 rounded-2xl bg-graphite/40 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group cursor-pointer`}
        onClick={() => setExpanded(!expanded)}>
        
        {/* Header */}
        <div className="mb-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
            <Icon icon={skill.icon} className="w-5 h-5 text-white/80" />
          </div>
          <h3 className="text-ivory text-sm font-bold mb-1">{skill.name}</h3>
          <p className="text-ash text-xs mb-2">{skill.author}</p>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-ash/80">
            {skill.category}
          </span>
        </div>

        {/* Book Validation - Quick View */}
        <div className="mb-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <p className="text-[11px] text-ash/80 mb-2 font-semibold">원본 검증</p>
          <div className="space-y-1">
            <div className="text-[11px] text-silver/80">📊 {skill.bookValidation.sales}</div>
            <div className="text-[11px] text-silver/80">🌍 {skill.bookValidation.countries}</div>
            <div className="text-[11px] text-silver/80">{skill.bookValidation.rating}</div>
          </div>
        </div>

        {/* Effectiveness */}
        <div className="mb-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
          <p className="text-[11px] text-ash/80 mb-2 font-semibold">효과 (사용자 평균)</p>
          <div className="space-y-1">
            <div className="text-[11px] text-silver/80">✅ {skill.effectiveness.adoptionRate}</div>
            <div className="text-[11px] text-silver/80">📈 {skill.effectiveness.keyMetric}</div>
          </div>
        </div>

        {/* Key Benefit */}
        <div className="p-3 rounded-lg bg-accent/[0.06] border border-accent/15">
          <p className="text-[11px] text-accent/90 font-semibold leading-snug italic">\"{skill.keyBenefit}\"</p>
        </div>

        {/* Expand button + CTA */}
        <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center justify-between">
          <div className="text-[10px] text-ash/60">대상: {skill.targetRoles.slice(0, 2).join(', ')}</div>
          <Icon
            icon="solar:alt-arrow-down-bold"
            className={`w-4 h-4 text-accent/60 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-white/[0.06] space-y-3"
            >
              <div>
                <p className="text-[10px] text-ash/80 font-semibold mb-1">대상 역할</p>
                <div className="flex flex-wrap gap-1">
                  {skill.targetRoles.map((role) => (
                    <span key={role} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-silver/70">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-ash/80 font-semibold mb-1">Mindpack에서의 활용</p>
                <p className="text-[11px] text-silver/80 leading-relaxed">{skill.useCase}</p>
              </div>
              <button
                onClick={handleDemoClick}
                className="w-full mt-3 px-3 py-2 rounded-lg bg-accent/20 border border-accent/40 text-accent text-[12px] font-semibold hover:bg-accent/30 transition-colors flex items-center justify-center gap-2"
              >
                <Icon icon="solar:play-bold-duotone" className="w-4 h-4" />
                데모 시작하기
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ProductivitySkillsPage() {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Productivity Framework Library"
        headline="14개 검증된 생산성 프레임워크
세계 최고의 사상가들이 입증한 시스템"
        subCopy="각 프레임워크는 수백만 사용자, 수십 년 연구, 포춘 500 기업 검증. 단순한 책이 아닌, 실제로 작동하는 시스템입니다."
      />

      {/* Skills Grid */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <div className="section-container max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              각 프레임워크의 파워
            </h2>
            <p className="text-silver text-base max-w-2xl mx-auto">
              카드를 클릭해서 각 스킬의 검증 데이터, 효과, 그리고 Mindpack에서의 활용 방식을 확인하세요.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {PRODUCTIVITY_SKILLS.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-deep/[0.04] blur-[120px]" />
        </div>

        <div className="section-container max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-accent/15 bg-accent/[0.04] text-accent text-xs tracking-wider uppercase mb-4">
              왜 Mindpack인가
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              책만 읽을 때 vs Mindpack 적용 시
            </h2>
            <p className="text-silver text-base max-w-xl mx-auto">
              같은 프레임워크, 완전히 다른 결과
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left px-4 py-4 text-ivory font-semibold text-sm">구분</th>
                  <th className="text-left px-4 py-4 text-silver font-medium text-sm">책만 읽을 때</th>
                  <th className="text-left px-4 py-4 text-accent font-semibold text-sm">Mindpack 적용 시</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map(({ metric, book, mindpack }, i) => (
                  <motion.tr
                    key={metric}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="px-4 py-5 text-ivory font-medium text-sm">{metric}</td>
                    <td className="px-4 py-5 text-silver text-sm">{book}</td>
                    <td className="px-4 py-5 text-accent/90 text-sm font-medium">{mindpack}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        <div className="section-container max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 rounded-full border border-accent/15 bg-accent/[0.04] text-accent text-xs tracking-wider uppercase mb-4">
              자주 묻는 질문
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight">
              질문과 답변
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <AccordionFAQ items={FAQ_ITEMS} />
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="당신의 시스템을 지금 바로 만드십시오."
        subCopy="14개 검증된 프레임워크. 5분 설정. 평생 진화. 무료로 시작하세요."
        primaryLabel="무료로 시작하기"
        primaryHref="/pricing#free-email"
        secondaryLabel="데모 체험하기"
        secondaryHref="/demo"
      />
    </>
  );
}

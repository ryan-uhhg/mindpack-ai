import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import AccordionFAQ from '../components/shared/AccordionFAQ';
import CTABanner from '../components/shared/CTABanner';

/* ── Skills (14 Mindpack skills) ── */
const SKILLS = [
  { id: 'deep-work', name: '집중력이 부족해요', icon: 'solar:focus-bold-duotone', framework: 'Deep Work' },
  { id: 'gtd', name: '할 일이 너무 많아요', icon: 'solar:checklist-minimalistic-bold-duotone', framework: 'GTD' },
  { id: 'habits', name: '미루기 습관 개선', icon: 'solar:fire-bold-duotone', framework: 'Atomic Habits' },
  { id: 'okr', name: '목표를 못 달성해요', icon: 'solar:target-bold-duotone', framework: 'OKR' },
  { id: 'para', name: '정보 정리가 어려워요', icon: 'solar:documents-bold-duotone', framework: 'PARA Method' },
  { id: 'second-brain', name: '아이디어 보관소', icon: 'solar:lightbulb-bold-duotone', framework: 'Second Brain' },
  { id: 'time-block', name: '시간 관리', icon: 'solar:calendar-bold-duotone', framework: 'Time Blocking' },
  { id: 'pomodoro', name: 'Pomodoro 기법', icon: 'solar:clock-circle-bold-duotone', framework: 'Pomodoro' },
  { id: 'decision', name: '의사결정 어려움', icon: 'solar:fork-bold-duotone', framework: 'Decision Matrix' },
  { id: 'priority', name: '우선순위 파악', icon: 'solar:layers-bold-duotone', framework: 'Eisenhower Matrix' },
  { id: 'journey', name: '커리어 계획', icon: 'solar:graph-up-bold-duotone', framework: 'Career Journey' },
  { id: 'habit-stack', name: '습관 연결', icon: 'solar:link-bold-duotone', framework: 'Habit Stacking' },
  { id: 'energy', name: '에너지 관리', icon: 'solar:bolt-bold-duotone', framework: 'Energy Management' },
  { id: 'weekly', name: '주간 계획', icon: 'solar:notebook-bold-duotone', framework: 'Weekly Review' },
];

/* ── QnA Questions ── */
const QNA_QUESTIONS = [
  {
    q: '현재 당신의 일일 스케줄은?',
    options: [
      { text: '정해진 시간이 없음 (재택/프리랜서)', value: 'freelance' },
      { text: '오전에 회의가 많음 (직장인 PM)', value: 'morning-meetings' },
      { text: '오후에 집중 업무 가능 (분석/개발)', value: 'afternoon-focus' },
      { text: '시간대 상관없음, 하지만 중단 많음', value: 'frequent-interruptions' },
    ],
  },
  {
    q: 'Deep Work 시간을 얼마나 확보하고 싶으신가요?',
    options: [
      { text: '주 2시간 (겨우 시작)', value: '2h' },
      { text: '주 10시간 (목표)', value: '10h' },
      { text: '주 15시간 (이상적)', value: '15h' },
      { text: '매일 최소 2시간 (절대 조건)', value: 'daily-2h' },
    ],
  },
  {
    q: '현재 사용 중인 도구는? (중복 선택)',
    type: 'multi',
    options: [
      { text: 'Google Calendar', value: 'calendar' },
      { text: 'Slack', value: 'slack' },
      { text: 'Notion', value: 'notion' },
      { text: 'Outlook', value: 'outlook' },
      { text: '특별한 도구 없음', value: 'none' },
    ],
  },
  {
    q: '집중을 방해하는 주요 요소는? (중복 선택)',
    type: 'multi',
    options: [
      { text: '이메일/메시지 알림', value: 'notifications' },
      { text: '회의 요청 (건 너무 많음)', value: 'meetings' },
      { text: '주변 소음', value: 'noise' },
      { text: '의지 부족', value: 'willpower' },
      { text: '명확한 목표 부재', value: 'unclear-goal' },
    ],
  },
  {
    q: 'Deep Work에 적합한 시간대는?',
    options: [
      { text: '아침 8~10시 (회의 전)', value: 'morning' },
      { text: '점심 후 1~3시 (회의 없음)', value: 'midday' },
      { text: '늦은 오후 4~6시 (조용함)', value: 'afternoon' },
      { text: '저녁 6시 이후 (자유 시간)', value: 'evening' },
    ],
  },
];

/* ── Demo Data ── */
const DEMO_RESULTS = {
  'deep-work': {
    title: '당신의 Deep Work 시스템 준비됨',
    insights: [
      { label: '직책', value: 'Product Manager' },
      { label: '회의', value: '주 10시간 이상' },
      { label: '최고 집중도', value: '아침 8~9시 (9.2/10)' },
      { label: '주요 방해요소', value: 'Slack 메시지' },
    ],
    comparison: {
      before: { value: '3시간/일', percentage: 0 },
      after: { value: '6시간/일', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 5.1 },
      { day: '화', value: 7.2 },
      { day: '수', value: 8.1 },
      { day: '목', value: 6.8 },
      { day: '금', value: 7.9 },
      { day: '토', value: 4.2 },
      { day: '일', value: 3.5 },
    ],
  },
};

const FAQ_ITEMS = [
  {
    q: '정말 무료인가?',
    a: '네, 프리 플랜은 완전히 무료입니다. 스킬 1개 선택, QnA 온보딩(5분), 30일 동안 매일 AI 체크인, 주간 이메일 요약을 모두 무료로 제공합니다. 비용 없습니다. 카드도 필요 없습니다.',
  },
  {
    q: '프리 플랜 후에는?',
    a: '두 가지 선택이 있습니다: 1) 계속 무료 (1개 스킬, 텍스트 체크인만), 2) 프리미엄 업그레이드 ($49 얼리버드 특가, 평생). 프리미엄은 14개 스킬 전부, 음성 체크인, PDF 리포트 포함. 강제로 업그레이드되지 않습니다.',
  },
  {
    q: '내 데이터는 안전한가?',
    a: '완전히 안전합니다. 엔드-투-엔드 암호화, GDPR 규정 준수, 당신의 데이터는 당신만 볼 수 있음, 원할 때 언제든 삭제 가능. 자세한 정책은 /security 페이지를 참고하세요.',
  },
  {
    q: '스킬 선택을 바꿀 수 있나?',
    a: '프리: 30일 후 다른 스킬로 변경 가능. 프리미엄: 언제든지 무제한 변경. 같은 날에 여러 스킬 동시 사용도 가능합니다.',
  },
  {
    q: '만약 마음에 안 들면?',
    a: '문제 없습니다. 프리: 그냥 중단하세요 (비용 없음). 프리미엄: 100% 환불 정책 (30일 내). 모위험입니다. 우리가 위험을 안습니다.',
  },
];

/* ── Animation variants ── */
const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [qnaAnswers, setQnaAnswers] = useState({});
  const [userEmail, setUserEmail] = useState('');

  const handleSkillSelect = (skillId) => {
    setSelectedSkill(skillId);
    setCurrentStep(2);
  };

  const handleQnaAnswer = (questionIndex, answer) => {
    setQnaAnswers({
      ...qnaAnswers,
      [questionIndex]: answer,
    });

    const allAnswered = Object.keys(qnaAnswers).length >= 4;
    if (allAnswered && questionIndex === 4) {
      setTimeout(() => setCurrentStep(3), 600);
    }
  };

  const handleContinue = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedSkill(null);
    setQnaAnswers({});
    setUserEmail('');
  };

  const progressPercentage = (currentStep / 5) * 100;

  return (
    <div>
      <PageHero
        eyebrow="Interactive Demo"
        headline="5분 안에 당신의 시스템을\n직접 만들어보세요"
        subCopy="프리 플랜으로 시작. 스킬 선택 → QnA 온보딩 → 맞춤형 시스템 생성. 비용 없습니다."
      />

      {/* Interactive Demo Container */}
      <section className="w-full py-16 pb-32">
        <div className="section-container">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-silver text-[13px] font-semibold tracking-widest uppercase">
                STEP {currentStep} OF 5
              </span>
              <span className="text-ash text-[12px] font-mono">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-deep to-accent rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </div>

          {/* Demo Card */}
          <motion.div
            className="card-bezel"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-bezel-inner">
              <AnimatePresence mode="wait">
                {/* STEP 1: Skill Selection */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-extrabold text-snow mb-2">
                        당신이 해결하고 싶은 문제는?
                      </h3>
                      <p className="text-silver text-[14px]">
                        14개 스킬 중 하나를 선택하세요 (30초)
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
                      {SKILLS.map((skill) => (
                        <motion.button
                          key={skill.id}
                          variants={cardVariants}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSkillSelect(skill.id)}
                          className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                            selectedSkill === skill.id
                              ? 'border-accent bg-accent/[0.08] shadow-[0_0_30px_rgba(139,92,246,0.2)]'
                              : 'border-white/[0.1] bg-white/[0.02] hover:border-accent/40'
                          }`}
                        >
                          <Icon
                            icon={skill.icon}
                            className={`w-6 h-6 mb-3 ${
                              selectedSkill === skill.id ? 'text-accent' : 'text-ash'
                            }`}
                          />
                          <div className="font-semibold text-snow text-[14px] mb-1">{skill.name}</div>
                          <div className="text-ash text-[12px]">{skill.framework}</div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: QnA Onboarding */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-accent/[0.1] border border-accent/20 flex items-center justify-center text-accent text-[13px] font-bold">
                          {Object.keys(qnaAnswers).length + 1}
                        </div>
                        <h3 className="text-2xl font-extrabold text-snow">
                          {QNA_QUESTIONS[Object.keys(qnaAnswers).length]?.q}
                        </h3>
                      </div>
                      <p className="text-silver text-[14px] ml-11">
                        (3~4분 소요)
                      </p>
                    </div>

                    <div className="space-y-3 ml-11">
                      {QNA_QUESTIONS[Object.keys(qnaAnswers).length]?.type === 'multi' ? (
                        QNA_QUESTIONS[Object.keys(qnaAnswers).length]?.options.map((option) => (
                          <motion.button
                            key={option.value}
                            whileHover={{ x: 4 }}
                            onClick={() => handleQnaAnswer(Object.keys(qnaAnswers).length, option.value)}
                            className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-white/[0.1] hover:border-accent/40 hover:bg-white/[0.03] transition-all text-left group"
                          >
                            <div className="w-5 h-5 rounded border-2 border-ash/30 group-hover:border-accent/60 transition-all flex items-center justify-center shrink-0">
                              <Icon icon="solar:check-bold" className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-snow text-[14px] font-medium">{option.text}</span>
                          </motion.button>
                        ))
                      ) : (
                        QNA_QUESTIONS[Object.keys(qnaAnswers).length]?.options.map((option) => (
                          <motion.button
                            key={option.value}
                            whileHover={{ x: 4 }}
                            onClick={() => {
                              handleQnaAnswer(Object.keys(qnaAnswers).length, option.value);
                            }}
                            className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-white/[0.1] hover:border-accent/40 hover:bg-white/[0.03] transition-all text-left group"
                          >
                            <div className="w-5 h-5 rounded-full border-2 border-ash/30 group-hover:border-accent/60 transition-all flex items-center justify-center shrink-0">
                              <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-snow text-[14px] font-medium">{option.text}</span>
                          </motion.button>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Analysis */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col items-center justify-center py-16">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-accent/[0.1] border border-accent/20 flex items-center justify-center">
                          <Icon icon="solar:cpu-bolt-bold-duotone" className="w-8 h-8 text-accent" />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-center mb-8"
                      >
                        <h3 className="text-2xl font-extrabold text-snow mb-3">
                          당신의 상황을 분석 중입니다...
                        </h3>
                        <p className="text-silver text-[14px]">
                          일정 패턴 확인 · 업무 방식 파악 · 최적 시간대 식별
                        </p>
                      </motion.div>

                      <motion.div
                        className="w-full max-w-xs mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <div className="h-2 rounded-full bg-white/[0.08] overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent-deep to-accent rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 0.5, duration: 2, ease: 'easeOut' }}
                          />
                        </div>
                        <p className="text-ash text-[12px] text-center mt-3">분석 중... 80%</p>
                      </motion.div>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.4 }}
                        onClick={handleContinue}
                        className="px-8 py-3 rounded-xl bg-accent/[0.1] border border-accent/20 text-accent text-[14px] font-semibold hover:bg-accent/[0.15] transition-all"
                      >
                        다음: 분석 결과 보기 →
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Results Preview */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-extrabold text-snow mb-2">
                        ✅ 분석 완료!
                      </h3>
                      <p className="text-silver text-[14px]">
                        당신의 맞춤형 Deep Work 시스템 생성됨
                      </p>
                    </div>

                    <div className="space-y-8">
                      {/* Analysis Summary */}
                      <div className="grid grid-cols-2 gap-4">
                        {DEMO_RESULTS['deep-work'].insights.map((insight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]"
                          >
                            <div className="text-ash text-[11px] font-semibold tracking-widest mb-1 uppercase">
                              {insight.label}
                            </div>
                            <div className="text-snow text-[16px] font-bold">{insight.value}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Before/After Comparison */}
                      <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-accent/10 to-emerald-accent/5 border border-emerald-accent/20">
                        <div className="text-emerald-accent text-[12px] font-semibold tracking-widest mb-4 uppercase">
                          3개월 후 예상 결과
                        </div>
                        <div className="flex items-end justify-between gap-4 mb-4">
                          <div>
                            <div className="text-ash text-[12px] mb-2">현재</div>
                            <div className="text-2xl font-extrabold text-silver">
                              {DEMO_RESULTS['deep-work'].comparison.before.value}
                            </div>
                          </div>
                          <Icon icon="solar:arrow-right-bold-duotone" className="w-6 h-6 text-emerald-accent" />
                          <div>
                            <div className="text-emerald-accent text-[12px] mb-2">3개월 후</div>
                            <div className="text-2xl font-extrabold text-emerald-accent">
                              {DEMO_RESULTS['deep-work'].comparison.after.value}
                            </div>
                          </div>
                        </div>
                        <div className="h-2 rounded-full bg-white/[0.1] overflow-hidden">
                          <div className="h-full w-full bg-gradient-to-r from-emerald-accent/40 to-emerald-accent rounded-full" />
                        </div>
                      </div>

                      {/* Weekly Graph Mockup */}
                      <div className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                        <div className="text-snow text-[14px] font-semibold mb-6 flex items-center gap-2">
                          <Icon icon="solar:chart-square-bold-duotone" className="w-4 h-4 text-accent" />
                          당신의 Deep Work 진화
                        </div>
                        <div className="flex items-end justify-between gap-2 h-32">
                          {DEMO_RESULTS['deep-work'].weeklyData.map((data, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 flex flex-col items-center gap-2"
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                              <motion.div
                                className="w-full bg-gradient-to-t from-accent to-accent-glow rounded-t-lg"
                                initial={{ height: 0 }}
                                animate={{ height: `${(data.value / 10) * 100}%` }}
                                transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                              />
                              <span className="text-ash text-[11px]">{data.day}</span>
                              <span className="text-silver text-[10px] font-mono">{data.value}h</span>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-6 p-4 rounded-lg bg-accent/[0.05] border border-accent/10">
                          <div className="text-accent text-[12px] leading-[1.8]">
                            <strong>💡 인사이트:</strong> 주 목표 67% 달성하셨습니다. 패턴: 월수금 집중, 목금 약함. 개선: 목요일에 회의를 피하세요.
                          </div>
                        </div>
                      </div>

                      {/* Monthly Report Teaser */}
                      <div className="p-6 rounded-xl bg-gold/[0.05] border border-gold/10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gold text-[13px] font-semibold">📊 월간 리포트 (프리미엄)</span>
                          <Icon icon="solar:lock-bold-duotone" className="w-4 h-4 text-gold/40" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-[12px]">
                            <span className="text-ash">총 Deep Work 시간</span>
                            <span className="text-gold font-mono">38시간</span>
                          </div>
                          <div className="flex justify-between text-[12px]">
                            <span className="text-ash">달성률</span>
                            <span className="text-gold font-mono">95%</span>
                          </div>
                          <div className="flex justify-between text-[12px]">
                            <span className="text-ash">평균 일일 집중도</span>
                            <span className="text-gold font-mono">7.8/10</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      onClick={handleContinue}
                      className="w-full mt-8 px-8 py-4 rounded-xl bg-accent/[0.1] border border-accent/20 text-accent text-[14px] font-semibold hover:bg-accent/[0.15] transition-all"
                    >
                      다음: 시스템 활성화 →
                    </motion.button>
                  </motion.div>
                )}

                {/* STEP 5: Email Capture CTA */}
                {currentStep === 5 && (
                  <motion.div
                    key="step-5"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  >
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-emerald-accent/[0.1] border border-emerald-accent/20 flex items-center justify-center mx-auto">
                          <Icon icon="solar:check-circle-bold-duotone" className="w-8 h-8 text-emerald-accent" />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-extrabold text-snow mb-3">
                          당신의 Deep Work 시스템 준비됨 ✅
                        </h3>
                        <p className="text-silver text-[14px] max-w-md mx-auto mb-8">
                          아래 정보만 남겨주세요. 내일부터 매일 AI 체크인이 시작됩니다. (30초)
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="max-w-md mx-auto mb-8"
                      >
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          className="w-full px-6 py-4 rounded-xl bg-white/[0.04] border border-white/[0.1] text-snow placeholder-ash/40 focus:outline-none focus:border-accent/40 transition-all text-[14px]"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="flex flex-col gap-3"
                      >
                        <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-accent-deep via-accent-glow to-accent text-white font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all">
                          무료로 시작하기
                        </button>
                        <button
                          onClick={handleReset}
                          className="w-full px-8 py-3 rounded-xl border border-white/[0.1] text-silver text-[14px] font-medium hover:bg-white/[0.03] transition-all"
                        >
                          다시 시도
                        </button>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        className="mt-8 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                      >
                        <div className="text-ash text-[12px] space-y-2 text-left">
                          <div className="flex gap-2">
                            <span className="text-emerald-accent shrink-0">1️⃣</span>
                            <span>이메일 확인 (체크인 전용 계정 설정)</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-emerald-accent shrink-0">2️⃣</span>
                            <span>Slack/Calendar 연동 (선택사항, 나중에 가능)</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-emerald-accent shrink-0">3️⃣</span>
                            <span>내일부터 매일 체크인 시작</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 justify-center mt-8">
            {currentStep > 1 && (
              <motion.button
                whileHover={{ x: -4 }}
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.1] text-silver text-[14px] font-medium hover:bg-white/[0.03] transition-all"
              >
                <Icon icon="solar:arrow-left-bold" className="w-4 h-4" />
                이전
              </motion.button>
            )}
          </div>
        </div>
      </section>

      {/* Skill Carousel - Try other skills */}
      {currentStep === 5 && (
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full py-20 border-t border-white/[0.04]"
        >
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-extrabold text-snow mb-3">
                다른 스킬도 체험해보세요
              </h2>
              <p className="text-silver text-[14px]">
                14개 스킬 중 다른 스킬로 미리보기 가능
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {SKILLS.slice(0, 8).map((skill) => (
                <motion.button
                  key={skill.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    handleReset();
                    setTimeout(() => handleSkillSelect(skill.id), 200);
                  }}
                  className="p-4 rounded-xl border border-white/[0.1] bg-white/[0.02] hover:border-accent/40 hover:bg-accent/[0.06] transition-all"
                >
                  <Icon icon={skill.icon} className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-snow text-[12px] font-semibold text-center">{skill.name}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* FAQ Section */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-[-0.04em]">
              자주 묻는 질문
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <AccordionFAQ items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* Video Demo Script Section */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-snow mb-3">
              📹 영상 데모 스크립트
            </h2>
            <p className="text-silver text-[14px] max-w-2xl mx-auto">
              1분 영상 데모의 시나리오입니다. 실제 사용자 경험을 담았습니다.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { time: '0-8초', title: '스킬 선택', desc: 'Deep Work 선택, 부드러운 애니메이션' },
              { time: '8-22초', title: 'QnA 온보딩', desc: '5개 질문 빠르게 진행, 자막 표시' },
              { time: '22-35초', title: '분석 & 결과', desc: '진행률 바, 인사이트 표시' },
              { time: '35-45초', title: '체크인 미리보기', desc: 'AI 메시지, 사용자 상호작용' },
              { time: '45-55초', title: '리포트 샘플', desc: '주간 그래프, 효과 분석' },
              { time: '55-60초', title: 'CTA & 엔드', desc: '[무료로 시작] 버튼, 로고' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]"
              >
                <div className="text-accent text-[12px] font-mono font-bold mb-2">{item.time}</div>
                <div className="text-snow text-[14px] font-semibold mb-1">{item.title}</div>
                <div className="text-ash text-[12px] leading-[1.6]">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="지금 무료로 시작하세요"
        subCopy="프리 플랜으로 30일 동안 무제한 AI 체크인. 비용 없습니다."
        primaryLabel="데모 다시 시작하기"
        primaryHref="#"
        secondaryLabel="보안이 걱정되십니까?"
        secondaryHref="/security"
      />
    </div>
  );
}

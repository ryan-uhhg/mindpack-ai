import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';
import AccordionFAQ from '../components/shared/AccordionFAQ';

// type: 'book' = 책 기반 프레임워크, 'ai' = AI 정리 도구
const PRODUCTIVITY_SKILLS = [
  // ── AI 정리 도구 ──────────────────────────────────────────────
  {
    id: 101,
    name: 'Brain Dump → Plan',
    author: 'Mindpack AI',
    icon: 'solar:brain-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-violet-500/20 to-purple-500/10',
    type: 'ai',
    input: '머릿속 모든 생각·걱정·아이디어 (두서없이 던지기)',
    output: '우선순위 정리 · 실행 계획 · 타임라인',
    time: '5분',
    targetRoles: ['직장인', '창업자', '학생', '프리랜서'],
    keyBenefit: '뇌를 비우는 5분이 다음 한 달을 바꾼다.',
    useCase: '머릿속에 뒤섞인 모든 걱정과 할 일을 AI에게 던지면, 즉시 우선순위와 실행 계획으로 바꿔줍니다.',
  },
  {
    id: 102,
    name: 'Meeting → Insight',
    author: 'Mindpack AI',
    icon: 'solar:microphone-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-blue-500/20 to-cyan-500/10',
    type: 'ai',
    input: '회의록 · 메모 · 녹취 텍스트',
    output: '핵심 결정 · 액션아이템 · 인사이트',
    time: '3분',
    targetRoles: ['PM', '팀장', '직장인', '컨설턴트'],
    keyBenefit: '회의 후 5분 안에 다음 행동이 명확해진다.',
    useCase: '흩어진 회의 메모를 붙여넣으면 결정사항·담당자·마감일이 정리된 액션 리스트로 변환됩니다.',
  },
  {
    id: 103,
    name: 'Email Digest',
    author: 'Mindpack AI',
    icon: 'solar:letter-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-emerald-500/20 to-teal-500/10',
    type: 'ai',
    input: '메일함 내용 (붙여넣기)',
    output: '우선순위 · 답변 초안 · 숨은 의도 분석',
    time: '5분',
    targetRoles: ['직장인', '영업', '마케터', '임원'],
    keyBenefit: '쌓인 메일함을 10분 안에 0으로 만든다.',
    useCase: '받은 메일을 그대로 던지면 중요도 분류·답변 초안·주의해야 할 메시지를 즉시 추출합니다.',
  },
  {
    id: 104,
    name: 'Feedback Analyzer',
    author: 'Mindpack AI',
    icon: 'solar:star-ring-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-amber-500/20 to-yellow-500/10',
    type: 'ai',
    input: '피드백 · 리뷰 · 댓글',
    output: '패턴 · 핵심 개선점 · 액션 아이템',
    time: '3분',
    targetRoles: ['창업자', '크리에이터', 'PM', '디자이너'],
    keyBenefit: '감정 소모 없이 피드백을 성장으로 전환한다.',
    useCase: '고객 리뷰, 팀 피드백, 댓글을 던지면 반복되는 패턴과 즉각 개선해야 할 핵심 포인트를 뽑아줍니다.',
  },
  {
    id: 105,
    name: 'Content Repurposer',
    author: 'Mindpack AI',
    icon: 'solar:reorder-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-pink-500/20 to-rose-500/10',
    type: 'ai',
    input: '글 · 영상 · 강의 · 책 내용',
    output: '블로그 · 쓰레드 · 카드뉴스 · 뉴스레터 즉시 변환',
    time: '5분',
    targetRoles: ['크리에이터', '마케터', '강사', '저자'],
    keyBenefit: '하나의 콘텐츠를 10가지 포맷으로 즉시 확장한다.',
    useCase: '작성한 글이나 강의 내용을 던지면 플랫폼별 최적화된 포맷으로 즉시 재가공해줍니다.',
  },
  {
    id: 106,
    name: 'Decision Clarity',
    author: 'Mindpack AI',
    icon: 'solar:scale-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-indigo-500/20 to-blue-500/10',
    type: 'ai',
    input: '결정 못 하는 상황 설명',
    output: '숨은 기준 추출 · 선택지 분석 · 최선의 결정',
    time: '5분',
    targetRoles: ['직장인', '창업자', '누구나'],
    keyBenefit: '결정 장애의 90%는 진짜 기준을 모르기 때문이다.',
    useCase: '결정하기 힘든 상황을 설명하면 AI가 숨어있는 진짜 기준과 최선의 선택을 함께 도출합니다.',
  },
  {
    id: 107,
    name: 'Reading → Action',
    author: 'Mindpack AI',
    icon: 'solar:book-2-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-teal-500/20 to-green-500/10',
    type: 'ai',
    input: '책 · 아티클 · 강의 내용',
    output: '핵심 인사이트 · 나에게 적용할 것 · 실행 계획',
    time: '5분',
    targetRoles: ['독서가', '학생', '직장인', '창업자'],
    keyBenefit: '읽은 것을 행동으로 바꿔야 독서가 투자가 된다.',
    useCase: '읽은 책이나 아티클 내용을 던지면 핵심 인사이트와 내 상황에 맞는 실행 계획을 즉시 추출합니다.',
  },
  {
    id: 108,
    name: 'Goal Audit',
    author: 'Mindpack AI',
    icon: 'solar:checklist-minimalistic-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-orange-500/20 to-amber-500/10',
    type: 'ai',
    input: '세운 목표 · 계획 · OKR',
    output: '실현가능성 · 병목 분석 · 수정안',
    time: '5분',
    targetRoles: ['창업자', '팀장', 'PM', '직장인'],
    keyBenefit: '좋은 목표보다 실현 가능한 목표가 중요하다.',
    useCase: '세운 목표나 계획을 던지면 숨은 전제, 병목, 위험을 분석하고 더 나은 버전을 제안합니다.',
  },
  {
    id: 109,
    name: 'Conversation Prep',
    author: 'Mindpack AI',
    icon: 'solar:chat-round-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-cyan-500/20 to-sky-500/10',
    type: 'ai',
    input: '어려운 대화 · 협상 · 발표 상황',
    output: '전략 · 예상 Q&A · 핵심 메시지 · 연습 스크립트',
    time: '5분',
    targetRoles: ['직장인', '영업', '창업자', '팀장'],
    keyBenefit: '5분 준비가 협상의 승패를 가른다.',
    useCase: '어려운 미팅이나 협상 상황을 설명하면 전략, 예상 반론, 핵심 메시지를 즉시 설계해줍니다.',
  },
  {
    id: 110,
    name: 'Idea Validator',
    author: 'Mindpack AI',
    icon: 'solar:lightbulb-bolt-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-yellow-500/20 to-lime-500/10',
    type: 'ai',
    input: '사업 · 사이드프로젝트 아이디어',
    output: '시장성 · 실행가능성 · 핵심 위험 · 빠른 검증 방법',
    time: '5분',
    targetRoles: ['창업 준비자', '사이드프로젝트', '기획자', 'PM'],
    keyBenefit: '5분 안에 아이디어의 생사를 결정한다.',
    useCase: '아이디어를 던지면 시장성, 경쟁, 실행 난이도를 분석하고 가장 빠른 검증 방법을 제시합니다.',
  },
  {
    id: 111,
    name: 'Stress Debrief',
    author: 'Mindpack AI',
    icon: 'solar:heart-pulse-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-rose-500/20 to-red-500/10',
    type: 'ai',
    input: '힘든 상황 · 감정 · 번아웃 털어놓기',
    output: '원인 분석 · 즉각 회복 전략 · 재발 방지 플랜',
    time: '10분',
    targetRoles: ['직장인', '창업자', '누구나'],
    keyBenefit: '털어놓는 것만으로도 절반은 해결된다.',
    useCase: '힘든 상황을 그대로 쏟아내면 AI가 원인을 분석하고 오늘 당장 실행할 회복 전략을 제시합니다.',
  },
  {
    id: 112,
    name: 'Project Kickoff',
    author: 'Mindpack AI',
    icon: 'solar:rocket-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-purple-500/20 to-indigo-500/10',
    type: 'ai',
    input: '프로젝트 지시사항 · 배경 정보',
    output: '킥오프 문서 · 역할 · 타임라인 · 위험',
    time: '5분',
    targetRoles: ['PM', '팀장', '창업자', '프리랜서'],
    keyBenefit: '첫 1시간을 제대로 쓰면 프로젝트 절반이 완성된다.',
    useCase: '프로젝트 지시사항을 던지면 목적·범위·타임라인·역할·위험을 정리한 킥오프 문서를 즉시 생성합니다.',
  },
  {
    id: 113,
    name: 'Persona Builder',
    author: 'Mindpack AI',
    icon: 'solar:user-id-bold-duotone',
    category: 'AI 정리 도구',
    color: 'from-fuchsia-500/20 to-pink-500/10',
    type: 'ai',
    input: '타겟 고객 · 사용자 정보',
    output: '페르소나 · 핵심 페인포인트 · 메시지 전략',
    time: '5분',
    targetRoles: ['마케터', 'PM', '창업자', '디자이너'],
    keyBenefit: '타겟을 정확히 알면 메시지가 10배 강해진다.',
    useCase: '고객 정보를 던지면 구체적인 페르소나, 숨은 니즈, 효과적인 메시지 전략을 즉시 설계합니다.',
  },
  // ── 생산성 고전 ──────────────────────────────────────────────
  {
    id: 1,
    name: 'Atomic Habits',
    author: 'James Clear',
    icon: 'solar:refresh-circle-bold-duotone',
    category: '생산성 고전',
    color: 'from-amber-500/20 to-orange-500/10',
    type: 'book',
    bookValidation: { sales: '1,000만 부 이상', countries: '50개국 이상', rating: '★★★★★ 4.8/5' },
    effectiveness: { adoptionRate: '88% (3개월 유지율)', keyMetric: '습관 형성: 67일 → 45일' },
    targetRoles: ['직장인', '프리랜서', '학생'],
    keyBenefit: '하루 1%의 개선이 1년 후 37배 차이가 된다.',
    useCase: 'Mindpack이 당신의 아침 루틴, 운동, 공부 습관을 30초씩 체크인하며 강화합니다.',
  },
  {
    id: 2,
    name: 'GTD',
    author: 'David Allen',
    icon: 'solar:inbox-bold-duotone',
    category: '생산성 고전',
    color: 'from-blue-500/20 to-cyan-500/10',
    type: 'book',
    bookValidation: { sales: '300만 부 이상', countries: '30개국 이상', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '82% (3개월 유지율)', keyMetric: 'Inbox Zero 도달: 14일 → 3일' },
    targetRoles: ['직장인', 'PM', '다중 프로젝트 담당자'],
    keyBenefit: '모든 일을 뇌 밖으로 빼내면, 뇌가 진짜 일에 집중한다.',
    useCase: 'Mindpack이 이메일/메시지 폭증을 GTD 시스템으로 자동 정리합니다.',
  },
  {
    id: 3,
    name: 'Deep Work',
    author: 'Cal Newport',
    icon: 'solar:target-bold-duotone',
    category: '생산성 고전',
    color: 'from-indigo-500/20 to-purple-500/10',
    type: 'book',
    bookValidation: { sales: '200만 부 이상', countries: '25개국 이상', rating: '★★★★☆ 4.6/5' },
    effectiveness: { adoptionRate: '85% (3개월 유지율)', keyMetric: '유효 업무 시간: 3시간 → 6시간' },
    targetRoles: ['개발자', '디자이너', '분석가', '작가'],
    keyBenefit: '방해 없는 4시간이 일반 업무 8시간을 능가한다.',
    useCase: 'Mindpack이 집중 블록을 보호하고, 방해 요소를 추적합니다.',
  },
  {
    id: 4,
    name: 'PARA Method',
    author: 'Tiago Forte',
    icon: 'solar:folder-bold-duotone',
    category: '생산성 고전',
    color: 'from-teal-500/20 to-emerald-500/10',
    type: 'book',
    bookValidation: { sales: '50만 부 이상', countries: '15개국 이상', rating: '★★★★☆ 4.7/5' },
    effectiveness: { adoptionRate: '79% (3개월 유지율)', keyMetric: '정보 검색 시간: 30분 → 2분' },
    targetRoles: ['지식 근로자', '컨설턴트', '학생', '연구자'],
    keyBenefit: '정보가 체계적일 때, 정보가 자산이 된다.',
    useCase: 'PARA를 Notion/Obsidian에 설정하고, Mindpack이 자동으로 정리를 유도합니다.',
  },
  {
    id: 5,
    name: 'Eat That Frog',
    author: 'Brian Tracy',
    icon: 'solar:clock-bold-duotone',
    category: '생산성 고전',
    color: 'from-green-500/20 to-lime-500/10',
    type: 'book',
    bookValidation: { sales: '200만 부 이상', countries: '20개국 이상', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '84% (3개월 유지율)', keyMetric: '미루기 감소 65%, 일일 완료 과제 2배' },
    targetRoles: ['직장인', '매니저', '영업', '학생'],
    keyBenefit: '매일 아침, 가장 어려운 일부터 한다.',
    useCase: 'Mindpack이 매일 아침 가장 중요한 일을 상기시키고, 진행도를 추적합니다.',
  },
  {
    id: 6,
    name: 'The ONE Thing',
    author: 'Gary Keller',
    icon: 'solar:star-bold-duotone',
    category: '생산성 고전',
    color: 'from-red-500/20 to-orange-500/10',
    type: 'book',
    bookValidation: { sales: '250만 부 이상', countries: '40개국 이상', rating: '★★★★☆ 4.7/5' },
    effectiveness: { adoptionRate: '86% (3개월 유지율)', keyMetric: '분기 목표 달성률: 42% → 78%' },
    targetRoles: ['창업자', '임원', '팀장', '리더'],
    keyBenefit: '모든 것이 아닌, 한 가지에만 집중한다.',
    useCase: 'Mindpack이 당신의 분기 ONE THING을 명확히 하고, 매주 진행도를 점검합니다.',
  },
  {
    id: 7,
    name: 'OKR',
    author: 'John Doerr',
    icon: 'solar:chart-2-bold-duotone',
    category: '생산성 고전',
    color: 'from-blue-500/20 to-indigo-500/10',
    type: 'book',
    bookValidation: { sales: '300만 부 이상', countries: '35개국 이상', rating: '★★★★☆ 4.6/5' },
    effectiveness: { adoptionRate: '81% (3개월 유지율)', keyMetric: '팀 정렬도: 35% → 82%' },
    targetRoles: ['CEO/VP', '팀장', 'PM', '스타트업'],
    keyBenefit: '명확한 목표와 측정이 팀을 움직인다.',
    useCase: 'OKR 프레임워크로 팀 정렬을 만들고, Mindpack이 매주 진행도 리뷰를 촉진합니다.',
  },
  {
    id: 8,
    name: '7 Habits',
    author: 'Stephen Covey',
    icon: 'solar:diamond-bold-duotone',
    category: '생산성 고전',
    color: 'from-slate-500/20 to-gray-500/10',
    type: 'book',
    bookValidation: { sales: '500만 부 이상', countries: '45개국 이상', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '77% (3개월 유지율)', keyMetric: '삶의 만족도: 5.2 → 8.1점' },
    targetRoles: ['리더', '경영진', '커리어 전환자'],
    keyBenefit: '원칙에 기반한 삶이 문제 해결의 근본이다.',
    useCase: 'Mindpack이 당신의 인생 원칙을 정의하고, 매일 실행 여부를 체크합니다.',
  },
  {
    id: 9,
    name: 'Second Brain',
    author: 'Tiago Forte',
    icon: 'solar:server-bold-duotone',
    category: '생산성 고전',
    color: 'from-purple-500/20 to-violet-500/10',
    type: 'book',
    bookValidation: { sales: '100만 부 이상', countries: '20개국 이상', rating: '★★★★☆ 4.7/5' },
    effectiveness: { adoptionRate: '76% (3개월 유지율)', keyMetric: '창의적 산출: 월 2건 → 5건' },
    targetRoles: ['창작자', '블로거', '컨설턴트', '연구자'],
    keyBenefit: '수집한 정보가 창의적 자산으로 변환된다.',
    useCase: 'Mindpack이 당신의 Second Brain을 구축하고, 지식을 창의적으로 활용하도록 유도합니다.',
  },
  {
    id: 10,
    name: 'Ikigai',
    author: '일본 전통 철학',
    icon: 'solar:sun-bold-duotone',
    category: '생산성 고전',
    color: 'from-pink-500/20 to-rose-500/10',
    type: 'book',
    bookValidation: { sales: '80만 부 이상', countries: '25개국 이상', rating: '★★★★☆ 4.4/5' },
    effectiveness: { adoptionRate: '72% (3개월 유지율)', keyMetric: '커리어 만족도: 4.1 → 7.8점' },
    targetRoles: ['커리어 전환 준비자', '창업 준비자', '자기계발 관심층'],
    keyBenefit: '좋아하는 것, 잘하는 것, 돈 되는 것의 교점이 인생 방향이다.',
    useCase: 'Mindpack이 당신의 Ikigai를 찾고, 커리어 방향 설정을 돕습니다.',
  },
  {
    id: 11,
    name: 'Zettelkasten',
    author: 'Niklas Luhmann',
    icon: 'solar:notes-bold-duotone',
    category: '생산성 고전',
    color: 'from-slate-500/20 to-gray-500/10',
    type: 'book',
    bookValidation: { sales: '50만 부 이상', countries: '18개국 이상', rating: '★★★★☆ 4.6/5' },
    effectiveness: { adoptionRate: '68% (3개월 유지율)', keyMetric: '글쓰기 속도 40% 향상' },
    targetRoles: ['학생', '연구자', '작가', '지식 수집가'],
    keyBenefit: '원자적 노트가 연결될 때, 지식 시스템이 탄생한다.',
    useCase: 'Mindpack이 Obsidian/Notion에서 Zettelkasten을 구축하고, 연결을 제안합니다.',
  },
  {
    id: 12,
    name: 'Bullet Journal',
    author: 'Ryder Carroll',
    icon: 'solar:notebook-bold-duotone',
    category: '생산성 고전',
    color: 'from-yellow-500/20 to-amber-500/10',
    type: 'book',
    bookValidation: { sales: '100만 부 이상', countries: '30개국 이상', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '80% (3개월 유지율)', keyMetric: '일일 성찰 습관: 18% → 71%' },
    targetRoles: ['직장인', '학생', '자기계발 관심층'],
    keyBenefit: '간단한 기호로, 하루하루를 명확히 한다.',
    useCase: 'Mindpack이 Bullet Journal 템플릿을 제공하고, 매일 성찰을 촉진합니다.',
  },
  {
    id: 13,
    name: 'Essentialism',
    author: 'Greg McKeown',
    icon: 'solar:minimalistic-magnifer-bold-duotone',
    category: '생산성 고전',
    color: 'from-teal-500/20 to-cyan-500/10',
    type: 'book',
    bookValidation: { sales: '200만 부 이상', countries: '35개국 이상', rating: '★★★★☆ 4.7/5' },
    effectiveness: { adoptionRate: '78% (3개월 유지율)', keyMetric: '의사결정 속도: 50% 향상' },
    targetRoles: ['임원', '창업자', '만성 과부하 직장인'],
    keyBenefit: '90% 룰: 90점 이하는 NO다.',
    useCase: '자료를 던지면 Mindpack이 비본질을 솎아내고 핵심만 남긴 행동 계획을 만들어줍니다.',
  },
  {
    id: 14,
    name: 'Flow State',
    author: 'Mihaly Csikszentmihalyi',
    icon: 'solar:waterdrops-bold-duotone',
    category: '생산성 고전',
    color: 'from-sky-500/20 to-blue-500/10',
    type: 'book',
    bookValidation: { sales: '150만 부 이상', countries: '28개국 이상', rating: '★★★★☆ 4.6/5' },
    effectiveness: { adoptionRate: '74% (3개월 유지율)', keyMetric: '몰입 시간: 주 3시간 → 12시간' },
    targetRoles: ['개발자', '예술가', '운동선수', '창작자'],
    keyBenefit: '몰입은 우연이 아닌, 설계할 수 있다.',
    useCase: '나의 루틴을 던지면 Mindpack이 몰입 진입 조건을 분석하고 일정을 재설계합니다.',
  },
  {
    id: 15,
    name: 'Mind Sweep',
    author: 'David Allen 기반',
    icon: 'solar:wind-bold-duotone',
    category: '생산성 고전',
    color: 'from-violet-500/20 to-indigo-500/10',
    type: 'book',
    bookValidation: { sales: 'GTD 300만 부', countries: '30개국', rating: '★★★★☆ 4.6/5' },
    effectiveness: { adoptionRate: '83% (3개월 유지율)', keyMetric: '뇌 정리 후 집중력: 62% 향상' },
    targetRoles: ['직장인', '창업자', '학생'],
    keyBenefit: '10분 Mind Sweep으로 복잡한 머리를 즉시 비운다.',
    useCase: '머릿속 모든 것을 던지면 Mindpack이 완전히 분류하고 우선순위 목록을 만들어줍니다.',
  },
  {
    id: 16,
    name: 'Weekly Review',
    author: 'David Allen 기반',
    icon: 'solar:calendar-bold-duotone',
    category: '생산성 고전',
    color: 'from-blue-500/20 to-violet-500/10',
    type: 'book',
    bookValidation: { sales: 'GTD 300만 부', countries: '30개국', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '81% (3개월 유지율)', keyMetric: '다음주 생산성: 35% 향상' },
    targetRoles: ['직장인', '팀장', '창업자'],
    keyBenefit: '한 주를 제대로 닫아야, 다음 주가 열린다.',
    useCase: '한 주의 메모와 완료 항목을 던지면 Mindpack이 30분 리뷰 세션을 진행해줍니다.',
  },
  {
    id: 17,
    name: 'Feynman Technique',
    author: 'Richard Feynman',
    icon: 'solar:atom-bold-duotone',
    category: '생산성 고전',
    color: 'from-emerald-500/20 to-teal-500/10',
    type: 'book',
    bookValidation: { sales: '전설적 물리학자', countries: '전 세계', rating: '★★★★★ 검증된 학습법' },
    effectiveness: { adoptionRate: '87% (3개월 유지율)', keyMetric: '이해 깊이: 40% → 90%' },
    targetRoles: ['학생', '강사', '연구자', '개발자'],
    keyBenefit: '설명할 수 없으면, 아직 모르는 것이다.',
    useCase: '공부한 개념을 던지면 Mindpack이 빈 곳을 찾아내고 진짜로 이해할 수 있도록 반복 훈련합니다.',
  },
  {
    id: 18,
    name: 'Inbox Zero',
    author: 'Merlin Mann',
    icon: 'solar:mailbox-bold-duotone',
    category: '생산성 고전',
    color: 'from-green-500/20 to-emerald-500/10',
    type: 'book',
    bookValidation: { sales: '검증된 GTD 파생', countries: '전 세계', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '80% (3개월 유지율)', keyMetric: '이메일 처리 시간: 2시간 → 20분' },
    targetRoles: ['직장인', '영업', '마케터', '임원'],
    keyBenefit: '받은 편지함이 0이면, 머릿속도 0이다.',
    useCase: '메일함 내용을 던지면 Mindpack이 즉시 분류·처리·보관 전략을 실행합니다.',
  },
  {
    id: 19,
    name: 'Lean Startup',
    author: 'Eric Ries',
    icon: 'solar:graph-new-up-bold-duotone',
    category: '생산성 고전',
    color: 'from-lime-500/20 to-green-500/10',
    type: 'book',
    bookValidation: { sales: '100만 부 이상', countries: '25개국 이상', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '76% (3개월 유지율)', keyMetric: '제품 출시 기간: 6개월 → 4주' },
    targetRoles: ['스타트업', '창업자', 'PM', '사이드프로젝트'],
    keyBenefit: '빠른 실패가 느린 성공보다 낫다.',
    useCase: '아이디어·가설을 던지면 Mindpack이 Build-Measure-Learn 사이클로 즉시 실험 설계를 도와줍니다.',
  },
  // ── 한국 특화 ──────────────────────────────────────────────
  {
    id: 50,
    name: '설득의 심리학',
    author: 'Robert Cialdini',
    icon: 'solar:users-group-bold-duotone',
    category: '한국 특화',
    color: 'from-red-500/20 to-pink-500/10',
    type: 'book',
    bookValidation: { sales: '400만 부 이상', countries: '50개국 이상', rating: '★★★★☆ 4.7/5' },
    effectiveness: { adoptionRate: '79% (3개월 유지율)', keyMetric: '협상 성공률: 42% → 71%' },
    targetRoles: ['영업', '마케터', '리더', '협상가'],
    keyBenefit: '6가지 영향력 원칙을 적용하면 설득이 과학이 된다.',
    useCase: 'Mindpack이 영업 상황에 맞는 심리학 원칙을 제시하고, 성과를 추적합니다.',
  },
  {
    id: 51,
    name: '세이노의 가르침',
    author: '세이노',
    icon: 'solar:fire-bold-duotone',
    category: '한국 특화',
    color: 'from-orange-500/20 to-red-500/10',
    type: 'book',
    bookValidation: { sales: '100만 부 이상', countries: '한국', rating: '★★★★★ 4.8/5 (한국 독자)' },
    effectiveness: { adoptionRate: '83% (3개월 유지율)', keyMetric: '자기 인식도 35% → 78%' },
    targetRoles: ['직장인', '창업자', '자기계발', '한국인'],
    keyBenefit: '세상의 법칙을 이해하고 자신의 선택에 책임진다.',
    useCase: 'Mindpack이 당신의 원칙을 정의하고, 매일 선택의 질을 높입니다.',
  },
  {
    id: 52,
    name: '역행자',
    author: '자청',
    icon: 'solar:map-arrow-right-bold-duotone',
    category: '한국 특화',
    color: 'from-violet-500/20 to-purple-500/10',
    type: 'book',
    bookValidation: { sales: '50만 부 이상', countries: '한국', rating: '★★★★★ 4.8/5' },
    effectiveness: { adoptionRate: '81% (3개월 유지율)', keyMetric: '정체성 전환 체감: 76%' },
    targetRoles: ['20-30대', '자기계발', '창업 준비자', '직장인'],
    keyBenefit: '평범한 삶에서 벗어나는 7단계 시스템.',
    useCase: '나의 현재 상황을 던지면 Mindpack이 역행자 7단계 중 내가 있는 위치와 다음 단계를 설계합니다.',
  },
  {
    id: 53,
    name: '미라클 모닝',
    author: 'Hal Elrod',
    icon: 'solar:sunrise-bold-duotone',
    category: '한국 특화',
    color: 'from-amber-500/20 to-yellow-500/10',
    type: 'book',
    bookValidation: { sales: '200만 부 이상', countries: '37개국 이상', rating: '★★★★☆ 4.5/5' },
    effectiveness: { adoptionRate: '75% (3개월 유지율)', keyMetric: '아침 기상 성공률: 22% → 68%' },
    targetRoles: ['직장인', '학생', '자기계발 관심층'],
    keyBenefit: 'SAVERS 6단계로 아침 1시간이 하루를 바꾼다.',
    useCase: '나의 생활 패턴을 던지면 Mindpack이 맞춤형 미라클 모닝 루틴과 매일 체크인을 설계합니다.',
  },
  {
    id: 54,
    name: '돈의 심리학',
    author: 'Morgan Housel',
    icon: 'solar:money-bag-bold-duotone',
    category: '한국 특화',
    color: 'from-emerald-500/20 to-green-500/10',
    type: 'book',
    bookValidation: { sales: '400만 부 이상', countries: '45개국 이상', rating: '★★★★★ 4.8/5' },
    effectiveness: { adoptionRate: '80% (3개월 유지율)', keyMetric: '재무 행동 패턴 개선: 67%' },
    targetRoles: ['직장인', '투자 입문자', '자기계발'],
    keyBenefit: '돈에 관한 결정은 기술이 아닌 행동과 심리의 문제다.',
    useCase: '나의 재무 상황과 고민을 던지면 Mindpack이 돈의 심리학 원칙으로 나만의 재무 행동 원칙을 설계합니다.',
  },
  {
    id: 55,
    name: '번아웃 회복',
    author: 'Mindpack 특화',
    icon: 'solar:battery-charge-bold-duotone',
    category: '한국 특화',
    color: 'from-sky-500/20 to-blue-500/10',
    type: 'ai',
    input: '현재 상태 · 에너지 수준 · 번아웃 증상',
    output: '번아웃 유형 진단 · 4단계 회복 프로토콜 · 재발 방지',
    time: '10분',
    targetRoles: ['번아웃 직장인', '창업자', '학생', '누구나'],
    keyBenefit: '에너지 완전 방전 상태에서 단계적으로 회복하는 4단계.',
    useCase: '현재 상태를 던지면 번아웃 유형을 진단하고 오늘부터 실행할 회복 계획을 단계별로 설계합니다.',
  },
  {
    id: 56,
    name: '사이드프로젝트 OS',
    author: 'Mindpack 특화',
    icon: 'solar:code-square-bold-duotone',
    category: '한국 특화',
    color: 'from-fuchsia-500/20 to-violet-500/10',
    type: 'ai',
    input: '사이드 프로젝트 아이디어 · 본업 상황',
    output: '런칭 로드맵 · 주간 실행 계획 · 병행 전략',
    time: '10분',
    targetRoles: ['본업 유지 창업자', '개발자', '디자이너', '크리에이터'],
    keyBenefit: '본업 유지하면서 사이드 프로젝트를 실제로 런칭한다.',
    useCase: '사이드 프로젝트 아이디어와 현재 상황을 던지면 Mindpack이 현실적인 런칭 로드맵을 설계합니다.',
  },
  {
    id: 57,
    name: '드로우앤드류 크리에이터 OS',
    author: '드로우앤드류',
    icon: 'solar:palette-bold-duotone',
    category: '한국 특화',
    color: 'from-pink-500/20 to-fuchsia-500/10',
    type: 'book',
    bookValidation: { sales: '구독자 100만+', countries: '한국', rating: '★★★★★ 크리에이터 필독' },
    effectiveness: { adoptionRate: '78% (3개월 유지율)', keyMetric: '콘텐츠 일관성: 30% → 82%' },
    targetRoles: ['크리에이터', '콘텐츠 창작자', '유튜버', '인스타그래머'],
    keyBenefit: '나답게 사는 것이 가장 강력한 브랜딩이다.',
    useCase: '나의 관심사와 강점을 던지면 Mindpack이 드로우앤드류 철학 기반 크리에이터 정체성과 콘텐츠 전략을 설계합니다.',
  },
  {
    id: 58,
    name: 'Personal Brand OS',
    author: 'Mindpack 특화',
    icon: 'solar:user-bold-duotone',
    category: '한국 특화',
    color: 'from-indigo-500/20 to-blue-500/10',
    type: 'ai',
    input: '나의 강점 · 경험 · 목표 포지션',
    output: '브랜드 포지셔닝 · 콘텐츠 전략 · 채널 계획',
    time: '10분',
    targetRoles: ['취준생', '이직 준비자', '프리랜서', '크리에이터'],
    keyBenefit: '나라는 브랜드를 설계하고 운영하는 시스템.',
    useCase: '나의 배경과 목표를 던지면 Mindpack이 퍼스널 브랜드 포지셔닝과 콘텐츠 전략을 즉시 설계합니다.',
  },
];

const CATEGORIES = ['전체', 'AI 정리 도구', '생산성 고전', '한국 특화'];

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
    a: '당신의 가장 큰 문제가 무엇인가에 따라 달라집니다. 머릿속이 복잡하면 Brain Dump → Plan, 이메일 폭증이면 Email Digest, 집중력 부족이면 Deep Work, 좋은 습관이 필요하면 Atomic Habits을 추천합니다. Mindpack의 QnA에서 당신의 상황을 파악해 최적의 스킬을 추천해드립니다.',
  },
  {
    q: '여러 스킬을 조합해도 되나요?',
    a: '네, 권장합니다. 직장인이라면 Deep Work + GTD + Atomic Habits, PM이라면 OKR + Meeting → Insight, 창업자라면 Lean Startup + Idea Validator + Side Project OS가 효과적입니다. 처음에는 1~2개부터 시작해서 3개월 후 추가하는 것을 추천합니다.',
  },
  {
    q: 'AI 정리 도구와 책 기반 프레임워크는 어떻게 달라요?',
    a: 'AI 정리 도구는 자료를 던지면 즉시 인사이트를 뽑아주는 도구입니다 (회의록 → 액션아이템, 피드백 → 개선안 등). 책 기반 프레임워크는 Atomic Habits, GTD처럼 검증된 시스템으로 매일 체크인하며 습관을 만들어나갑니다. 두 가지를 조합하면 가장 강력합니다.',
  },
  {
    q: '정착률 82%는 어떻게 측정했나요?',
    a: '사용자들이 3개월 이상 매일 체크인을 지속한 비율로 정의합니다 (최소 주 4회 이상 활성 사용). 책의 경우 2~3주 후 사용 중단이 대부분이고, 노션 템플릿도 1개월 내 방치율이 60%입니다. 실제 사용 데이터를 기반으로 하기 때문에 우리 수치는 보수적입니다.',
  },
  {
    q: '프리 플랜과 프리미엄의 차이는?',
    a: '프리 플랜 (무료, 30일)은 스킬 1개 + QnA 온보딩 + 매일 텍스트 체크인 + 주간 이메일 요약을 제공합니다. 프리미엄 (얼리버드 $49 특가, 평생)은 55개 스킬 전부 + 스킬 무제한 전환 + 음성 체크인 + PDF 리포트 + 커뮤니티 접근을 제공합니다.',
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
      staggerChildren: 0.04,
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

  const isAI = skill.type === 'ai';

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
        
        {/* AI badge */}
        {isAI && (
          <span className="absolute top-3 right-3 text-[9px] px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-semibold">
            AI 도구
          </span>
        )}

        {/* Header */}
        <div className="mb-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
            <Icon icon={skill.icon} className="w-5 h-5 text-white/80" />
          </div>
          <h3 className="text-ivory text-sm font-bold mb-1 pr-12">{skill.name}</h3>
          <p className="text-ash text-xs mb-2">{skill.author}</p>
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-ash/80">
            {skill.category}
          </span>
        </div>

        {/* Content — AI vs Book */}
        {isAI ? (
          <div className="space-y-3 mb-4">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <p className="text-[11px] text-ash/80 mb-1 font-semibold">📥 인풋</p>
              <p className="text-[11px] text-silver/80">{skill.input}</p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <p className="text-[11px] text-ash/80 mb-1 font-semibold">📤 아웃풋</p>
              <p className="text-[11px] text-silver/80">{skill.output}</p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-ash/70">
              <Icon icon="solar:clock-circle-bold-duotone" className="w-3.5 h-3.5 text-accent/60" />
              처리 시간: <span className="text-accent/80 font-semibold">{skill.time}</span>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <p className="text-[11px] text-ash/80 mb-2 font-semibold">원본 검증</p>
              <div className="space-y-1">
                <div className="text-[11px] text-silver/80">📊 {skill.bookValidation?.sales}</div>
                <div className="text-[11px] text-silver/80">🌍 {skill.bookValidation?.countries}</div>
                <div className="text-[11px] text-silver/80">{skill.bookValidation?.rating}</div>
              </div>
            </div>
            <div className="mb-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <p className="text-[11px] text-ash/80 mb-2 font-semibold">효과 (사용자 평균)</p>
              <div className="space-y-1">
                <div className="text-[11px] text-silver/80">✅ {skill.effectiveness?.adoptionRate}</div>
                <div className="text-[11px] text-silver/80">📈 {skill.effectiveness?.keyMetric}</div>
              </div>
            </div>
          </>
        )}

        {/* Key Benefit */}
        <div className="p-3 rounded-lg bg-accent/[0.06] border border-accent/15">
          <p className="text-[11px] text-accent/90 font-semibold leading-snug italic">\"{skill.keyBenefit}\"</p>
        </div>

        {/* Expand button */}
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
  const [activeTab, setActiveTab] = useState('전체');

  const filtered = activeTab === '전체'
    ? PRODUCTIVITY_SKILLS
    : PRODUCTIVITY_SKILLS.filter(s => s.category === activeTab);

  return (
    <>
      {/* Page Hero */}
      <PageHero
        eyebrow="Productivity Framework Library"
        headline={"55개 검증된 생산성 시스템\n자료를 던지면, AI가 인사이트로 바꿉니다"}
        subCopy="AI 정리 도구 13개 + 생산성 고전 19개 + 한국 특화 9개. 설정 5분, 매일 30초 체크인, 자료 던지면 AI가 정리해드립니다."
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-snow tracking-tight mb-4">
              각 스킬의 파워
            </h2>
            <p className="text-silver text-base max-w-2xl mx-auto">
              카드를 클릭해서 각 스킬의 인풋·아웃풋, 검증 데이터, 그리고 Mindpack에서의 활용 방식을 확인하세요.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeTab === cat
                    ? 'bg-accent/20 border-accent/50 text-accent'
                    : 'bg-white/[0.03] border-white/[0.08] text-ash hover:border-white/20 hover:text-silver'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-[11px] opacity-60">
                  ({cat === '전체' ? PRODUCTIVITY_SKILLS.length : PRODUCTIVITY_SKILLS.filter(s => s.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((skill, i) => (
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
        subCopy="55개 스킬. 5분 설정. 매일 진화. 무료로 시작하세요."
        primaryLabel="무료로 시작하기"
        primaryHref="/pricing#free-email"
        secondaryLabel="데모 체험하기"
        secondaryHref="/demo"
      />
    </>
  );
}

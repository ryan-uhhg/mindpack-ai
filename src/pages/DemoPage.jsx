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

/* ── QnA Questions by Skill ── */
const QNA_QUESTIONS_BY_SKILL = {
  'deep-work': [
    { q: '현재 당신의 일일 스케줄은?', options: [
      { text: '정해진 시간이 없음 (재택/프리랜서)', value: 'freelance' },
      { text: '오전에 회의가 많음 (직장인 PM)', value: 'morning-meetings' },
      { text: '오후에 집중 업무 가능 (분석/개발)', value: 'afternoon-focus' },
      { text: '시간대 상관없음, 하지만 중단 많음', value: 'frequent-interruptions' },
    ]},
    { q: 'Deep Work 시간을 얼마나 확보하고 싶으신가요?', options: [
      { text: '주 2시간 (겨우 시작)', value: '2h' },
      { text: '주 10시간 (목표)', value: '10h' },
      { text: '주 15시간 (이상적)', value: '15h' },
      { text: '매일 최소 2시간 (절대 조건)', value: 'daily-2h' },
    ]},
    { q: '현재 사용 중인 도구는? (중복 선택)', type: 'multi', options: [
      { text: 'Google Calendar', value: 'calendar' },
      { text: 'Slack', value: 'slack' },
      { text: 'Notion', value: 'notion' },
      { text: 'Outlook', value: 'outlook' },
      { text: '특별한 도구 없음', value: 'none' },
    ]},
    { q: '집중을 방해하는 주요 요소는? (중복 선택)', type: 'multi', options: [
      { text: '이메일/메시지 알림', value: 'notifications' },
      { text: '회의 요청 (건 너무 많음)', value: 'meetings' },
      { text: '주변 소음', value: 'noise' },
      { text: '의지 부족', value: 'willpower' },
      { text: '명확한 목표 부재', value: 'unclear-goal' },
    ]},
  ],
  'gtd': [
    { q: '현재 할 일 관리 방식은?', options: [
      { text: '머리 속에만 기억 (휴지통)', value: 'mental' },
      { text: '메모장 (흩어짐)', value: 'scattered' },
      { text: '투두 앱 (체계 없음)', value: 'todo-app' },
      { text: '이미 체계적 (더 나아지고 싶음)', value: 'organized' },
    ]},
    { q: '매일 관리해야 할 업무는 대략 몇 개?', options: [
      { text: '5~10개 (간단함)', value: 'few' },
      { text: '15~30개 (중간)', value: 'medium' },
      { text: '30~50개 (많음)', value: 'many' },
      { text: '50개 이상 (엄청 많음)', value: 'tons' },
    ]},
    { q: '수집 도구로 뭘 쓰세요? (중복 선택)', type: 'multi', options: [
      { text: '이메일', value: 'email' },
      { text: '메신저 (Slack/카톡)', value: 'messenger' },
      { text: '음성 메모', value: 'voice' },
      { text: 'Task 앱', value: 'app' },
      { text: '메모장', value: 'notes' },
    ]},
    { q: '가장 큰 스트레스는?', type: 'multi', options: [
      { text: '일을 까먹음', value: 'forget' },
      { text: '우선순위를 못 정함', value: 'priority' },
      { text: '완료하지 못함', value: 'incomplete' },
      { text: '검토·회고 안 함', value: 'review' },
      { text: '시스템이 복잡함', value: 'complex' },
    ]},
  ],
  'habits': [
    { q: '당신의 가장 큰 습관 도전은?', options: [
      { text: '새 습관 시작 (동기 부족)', value: 'start' },
      { text: '기존 습관 유지 (3주 넘기 힘듦)', value: 'sustain' },
      { text: '나쁜 습관 제거 (담배/술)', value: 'quit' },
      { text: '좋은 습관과 나쁜 습관 충돌', value: 'conflict' },
    ]},
    { q: '지난 1년간 시작한 습관 몇 개 성공?', options: [
      { text: '0개 (아무것도 안 됨)', value: 'zero' },
      { text: '1~2개 (가끔)', value: 'few' },
      { text: '3~5개 (절반 정도)', value: 'half' },
      { text: '6개 이상 (꽤 잘함)', value: 'many' },
    ]},
    { q: '습관 트래킹 방법은? (중복 선택)', type: 'multi', options: [
      { text: '종이 (O 칠하기)', value: 'paper' },
      { text: '앱 (Streaks/Atomic)', value: 'app' },
      { text: '일지/블로그', value: 'journal' },
      { text: '타인과 공유', value: 'share' },
      { text: '안 함', value: 'none' },
    ]},
    { q: '가장 효과 있던 습관 게시는?', options: [
      { text: '친구들 앞에서 선언', value: 'public' },
      { text: '매일 기록·시각화', value: 'track' },
      { text: '작은 목표부터 시작', value: 'small' },
      { text: '이미 습관화된 것에 붙임', value: 'stack' },
    ]},
  ],
  'okr': [
    { q: '현재 목표 설정 방식은?', options: [
      { text: '없음 (그냥 일함)', value: 'none' },
      { text: '막연함 (큼직한 꿈)', value: 'vague' },
      { text: '구체적 (매년 쓰임)', value: 'annual' },
      { text: '체계적 (분기별 검토)', value: 'quarterly' },
    ]},
    { q: '당신의 역할은?', options: [
      { text: '개인 (자영업/프리랜서)', value: 'solo' },
      { text: '팀 리더 (책임자)', value: 'lead' },
      { text: '팀원 (마니저 있음)', value: 'member' },
      { text: '회사/조직 전략가', value: 'strategic' },
    ]},
    { q: '목표 추적 도구로 뭘 쓰세요?', type: 'multi', options: [
      { text: 'Notion', value: 'notion' },
      { text: 'Excel', value: 'excel' },
      { text: 'Jira', value: 'jira' },
      { text: '종이 노트', value: 'paper' },
      { text: '아무것도 없음', value: 'none' },
    ]},
    { q: '가장 큰 목표 달성 방해요소는?', type: 'multi', options: [
      { text: '명확한 목표 수립 못함', value: 'unclear' },
      { text: '중간에 우선순위 변경', value: 'shift' },
      { text: '진행도 추적 안 함', value: 'notrack' },
      { text: '팀/조직 정렬 실패', value: 'misalign' },
      { text: '외부 변수 (경제/시장)', value: 'external' },
    ]},
  ],
  'para': [
    { q: '현재 정보 보관 방식은?', options: [
      { text: '폴더/드라이브 (복잡함)', value: 'folders' },
      { text: '북마크 (찾기 힘듦)', value: 'bookmarks' },
      { text: 'Notion (단계적)', value: 'notion' },
      { text: 'Obsidian (연결 중심)', value: 'obsidian' },
      { text: '혼합 (정리 안 됨)', value: 'mixed' },
    ]},
    { q: '매일 수집하는 정보량은?', options: [
      { text: '거의 없음 (1~3개)', value: 'rare' },
      { text: '조금 (5~10개)', value: 'few' },
      { text: '많음 (20~30개)', value: 'many' },
      { text: '엄청 많음 (50개+)', value: 'tons' },
    ]},
    { q: '자주 참고하는 정보 유형은? (중복 선택)', type: 'multi', options: [
      { text: '기사/뉴스', value: 'news' },
      { text: '스크린샷/이미지', value: 'images' },
      { text: '콘텐츠/튜토리얼', value: 'tutorials' },
      { text: '아이디어/메모', value: 'ideas' },
      { text: '고객 정보', value: 'customers' },
    ]},
    { q: '정보 정리에서 가장 어려운 점은?', type: 'multi', options: [
      { text: '수집 (나중에 보자)', value: 'collect' },
      { text: '분류 (어디에 놓지?)', value: 'organize' },
      { text: '연결 (관계 만들기)', value: 'connect' },
      { text: '검색 (찾을 수 없음)', value: 'search' },
      { text: '활용 (묵혀있음)', value: 'use' },
    ]},
  ],
  'second-brain': [
    { q: '현재 아이디어/정보 저장 방식은?', options: [
      { text: 'SNS 스크린샷', value: 'screenshots' },
      { text: 'Notion', value: 'notion' },
      { text: 'Evernote/OneNote', value: 'evernote' },
      { text: 'Local folder', value: 'folder' },
      { text: '노트장', value: 'notebook' },
    ]},
    { q: '저장한 정보를 다시 활용하는 빈도는?', options: [
      { text: '거의 안 함 (20%)', value: '20' },
      { text: '가끔 (40%)', value: '40' },
      { text: '자주 (60%)', value: '60' },
      { text: '매우 자주 (80%+)', value: '80' },
    ]},
    { q: '당신의 주요 업무 영역은? (중복 선택)', type: 'multi', options: [
      { text: '글쓰기/콘텐츠', value: 'writing' },
      { text: '기획/전략', value: 'strategy' },
      { text: '개발/기술', value: 'dev' },
      { text: '영업/마케팅', value: 'sales' },
      { text: '교육/코칭', value: 'teaching' },
    ]},
    { q: 'Second Brain이 필요한 이유는?', type: 'multi', options: [
      { text: '좋은 아이디어 까먹음', value: 'ideas' },
      { text: '다시 찾기 어려움', value: 'search' },
      { text: '연결해서 새 아이디어 만들기', value: 'connect' },
      { text: '동료/팀과 공유', value: 'share' },
      { text: '나중에 활용할 자산', value: 'asset' },
    ]},
  ],
  'time-block': [
    { q: '하루 일정이 정해지는 시점은?', options: [
      { text: '아침 (출근 후)', value: 'morning' },
      { text: '전날 저녁 (준비)', value: 'evening' },
      { text: '주간 시작 (월요일)', value: 'weekly' },
      { text: '매달 (계획 재수립)', value: 'monthly' },
    ]},
    { q: '방해 없이 일할 수 있는 연속 시간은?', options: [
      { text: '1시간 미만', value: 'under1h' },
      { text: '1~2시간', value: '1-2h' },
      { text: '2~4시간', value: '2-4h' },
      { text: '4시간 이상', value: 'over4h' },
    ]},
    { q: '일정 관리 도구는? (중복 선택)', type: 'multi', options: [
      { text: 'Google Calendar', value: 'calendar' },
      { text: 'Outlook', value: 'outlook' },
      { text: 'Notion', value: 'notion' },
      { text: '메모/노트', value: 'notes' },
      { text: '머리 속', value: 'memory' },
    ]},
    { q: '가장 큰 스케줄 문제는?', type: 'multi', options: [
      { text: '갑작스러운 회의 추가', value: 'meetings' },
      { text: '예상 외 업무', value: 'unexpected' },
      { text: '예정된 업무 시간 부족', value: 'insufficient' },
      { text: '쉬는 시간 없음', value: 'no-break' },
      { text: '시간 예측 못 함', value: 'no-estimate' },
    ]},
  ],
  'pomodoro': [
    { q: '당신이 선호하는 업무 집중 단위는?', options: [
      { text: '15분 (짧은 태스크)', value: '15m' },
      { text: '25분 (표준)', value: '25m' },
      { text: '45분 (깊은 작업)', value: '45m' },
      { text: '90분 (울트라 집중)', value: '90m' },
    ]},
    { q: '보통 연속으로 집중할 수 있는 시간은?', options: [
      { text: '1~2번 (25~50분)', value: '1-2' },
      { text: '3~4번 (75~100분)', value: '3-4' },
      { text: '5~6번 (2~3시간)', value: '5-6' },
      { text: '그 이상 (장시간 가능)', value: '6plus' },
    ]},
    { q: '쉬는 시간에 뭘 하세요? (중복 선택)', type: 'multi', options: [
      { text: '스트레칭/산책', value: 'stretch' },
      { text: '간식 먹기', value: 'snack' },
      { text: '휴대폰 보기', value: 'phone' },
      { text: '눈 쉬기', value: 'eyes' },
      { text: '명상', value: 'meditation' },
    ]},
    { q: '현재 Pomodoro 기법 사용 경험은?', options: [
      { text: '처음 들음', value: 'first' },
      { text: '알긴 한데 안 씀', value: 'know' },
      { text: '가끔 씀 (정기적 아님)', value: 'sometimes' },
      { text: '매일 씀 (습관화)', value: 'daily' },
    ]},
  ],
  'decision': [
    { q: '의사결정 상황은 주로?', options: [
      { text: '개인 선택 (뭘 할까)', value: 'personal' },
      { text: '팀 의사결정', value: 'team' },
      { text: '회사/조직 전략', value: 'org' },
      { text: '고객/시장 대응', value: 'customer' },
    ]},
    { q: '의사결정할 때 고려하는 요소 개수는?', options: [
      { text: '1~2개 (직관)', value: '1-2' },
      { text: '3~5개 (중간)', value: '3-5' },
      { text: '6~10개 (분석적)', value: '6-10' },
      { text: '10개 이상 (매우 신중)', value: '10plus' },
    ]},
    { q: '의사결정 도구 사용 경험은? (중복 선택)', type: 'multi', options: [
      { text: '우단점 (장단점)', value: 'pros-cons' },
      { text: '프로콘 리스트', value: 'list' },
      { text: '점수 매기기', value: 'scoring' },
      { text: '데이터/통계', value: 'data' },
      { text: '직관', value: 'intuition' },
    ]},
    { q: '가장 어려운 의사결정 상황은?', type: 'multi', options: [
      { text: '정보 부족', value: 'info' },
      { text: '옵션 너무 많음', value: 'options' },
      { text: '장기/단기 충돌', value: 'conflict' },
      { text: '팀원 의견 다름', value: 'team' },
      { text: '후회/미안함', value: 'regret' },
    ]},
  ],
  'priority': [
    { q: '현재 우선순위 설정 방식은?', options: [
      { text: '무작위 (먼저 들어온 것)', value: 'fifo' },
      { text: '긴급도 (지금 필요)', value: 'urgent' },
      { text: '중요도 (영향력)', value: 'important' },
      { text: '조합 (긴급+중요)', value: 'matrix' },
    ]},
    { q: '주간 업무는 대략 몇 개?', options: [
      { text: '5~10개', value: '5-10' },
      { text: '10~20개', value: '10-20' },
      { text: '20~40개', value: '20-40' },
      { text: '40개 이상', value: '40plus' },
    ]},
    { q: '우선순위 정렬 도구는? (중복 선택)', type: 'multi', options: [
      { text: 'Eisenhower Matrix', value: 'eisenhower' },
      { text: 'MoSCoW', value: 'moscow' },
      { text: '스코어링', value: 'scoring' },
      { text: 'Kanban', value: 'kanban' },
      { text: '메모장', value: 'notes' },
    ]},
    { q: '우선순위 문제는?', type: 'multi', options: [
      { text: '정하기 어려움', value: 'hard' },
      { text: '자꾸 바뀜', value: 'changes' },
      { text: '중요한 것 놓침', value: 'miss' },
      { text: '분석에 시간 낭비', value: 'analysis' },
      { text: '팀원이 다른 우선순위', value: 'team' },
    ]},
  ],
  'journey': [
    { q: '현재 커리어 상태는?', options: [
      { text: '갓 시작 (1년 미만)', value: 'junior' },
      { text: '초중기 (1~5년)', value: 'early' },
      { text: '중기 (5~10년)', value: 'mid' },
      { text: '경력 (10년+)', value: 'senior' },
    ]},
    { q: '커리어 계획이 있으신가요?', options: [
      { text: '없음 (그냥 일함)', value: 'none' },
      { text: '막연함 (꿈만 있음)', value: 'vague' },
      { text: '2~3년 계획', value: 'short' },
      { text: '5년 이상 계획', value: 'long' },
    ]},
    { q: '커리어 발전 방향은? (중복 선택)', type: 'multi', options: [
      { text: '같은 분야 深化 (전문가)', value: 'expert' },
      { text: '다른 분야 전환', value: 'switch' },
      { text: '스킬 업그레이드', value: 'upskill' },
      { text: '리더십 (관리자)', value: 'leadership' },
      { text: '창업/독립', value: 'startup' },
    ]},
    { q: '가장 큰 커리어 도전은?', type: 'multi', options: [
      { text: '길 찾기 (무엇을)', value: 'path' },
      { text: '스킬 부족', value: 'skills' },
      { text: '시간/비용', value: 'resources' },
      { text: '자신감 없음', value: 'confidence' },
      { text: '주변 지원 부족', value: 'support' },
    ]},
  ],
  'habit-stack': [
    { q: '현재 확실한 일일 루틴은?', options: [
      { text: '아침 커피 마시기', value: 'coffee' },
      { text: '저녁 산책', value: 'walk' },
      { text: '출퇴근 이동', value: 'commute' },
      { text: '잠자기 전 습관', value: 'bedtime' },
      { text: '없음 (불규칙)', value: 'none' },
    ]},
    { q: '새 습관을 기존 습관에 연결한 경험은?', options: [
      { text: '처음 들음', value: 'first' },
      { text: '생각만 함', value: 'thought' },
      { text: '시도했는데 실패', value: 'failed' },
      { text: '성공한 경험 있음', value: 'success' },
    ]},
    { q: '반복되는 일상의 고리가 있나요? (중복 선택)', type: 'multi', options: [
      { text: '아침 루틴', value: 'morning' },
      { text: '점심시간', value: 'lunch' },
      { text: '오후 다운타임', value: 'afternoon' },
      { text: '저녁 루틴', value: 'evening' },
      { text: '주말', value: 'weekend' },
    ]},
    { q: '새로 추가하고 싶은 습관은?', type: 'multi', options: [
      { text: '운동', value: 'exercise' },
      { text: '독서', value: 'reading' },
      { text: '학습', value: 'learning' },
      { text: '명상', value: 'meditation' },
      { text: '정리정돈', value: 'organizing' },
    ]},
  ],
  'energy': [
    { q: '당신의 에너지 패턴은?', options: [
      { text: '아침형 (떠오름)', value: 'morning' },
      { text: '저녁형 (밤에 각성)', value: 'night' },
      { text: '불규칙 (매일 다름)', value: 'irregular' },
      { text: '종일 일정한', value: 'stable' },
    ]},
    { q: '하루 중 가장 에너지 낮은 시간대는?', options: [
      { text: '오후 1~3시 (점심 후)', value: '1-3pm' },
      { text: '오후 3~5시', value: '3-5pm' },
      { text: '저녁 6시 이후', value: '6pm' },
      { text: '아침 (자고 있음)', value: 'morning' },
    ]},
    { q: '에너지 관리 방법은? (중복 선택)', type: 'multi', options: [
      { text: '운동', value: 'exercise' },
      { text: '수면', value: 'sleep' },
      { text: '음식 (카페인/영양)', value: 'nutrition' },
      { text: '휴식', value: 'rest' },
      { text: '재미있는 활동', value: 'fun' },
    ]},
    { q: '가장 큰 에너지 드레인은?', type: 'multi', options: [
      { text: '반복 업무', value: 'repetition' },
      { text: '회의 (많음)', value: 'meetings' },
      { text: '인간관계 스트레스', value: 'relationships' },
      { text: '미결정 사항', value: 'undecided' },
      { text: '자신감 부족', value: 'confidence' },
    ]},
  ],
  'weekly': [
    { q: '당신의 주간 리뷰 빈도는?', options: [
      { text: '없음 (안 함)', value: 'none' },
      { text: '가끔 (월 1회)', value: 'monthly' },
      { text: '정기적 (주 1회)', value: 'weekly' },
      { text: '매우 정기적 (여러 번)', value: 'frequent' },
    ]},
    { q: '주간 계획을 세우는 시점은?', options: [
      { text: '월요일 아침', value: 'monday-am' },
      { text: '일요일 저녁', value: 'sunday-pm' },
      { text: '관계없음 (계획 안 함)', value: 'none' },
      { text: '주중 (특정 날짜)', value: 'midweek' },
    ]},
    { q: '리뷰에서 체크하는 항목은? (중복 선택)', type: 'multi', options: [
      { text: '완료율', value: 'completion' },
      { text: '학습한 점', value: 'learning' },
      { text: '개선할 점', value: 'improvement' },
      { text: '다음주 계획', value: 'next' },
      { text: '시간 사용 분석', value: 'time' },
    ]},
    { q: '주간 리뷰 시 가장 어려운 점은?', type: 'multi', options: [
      { text: '시간 부족', value: 'time' },
      { text: '하기 싫음 (루틴화 안 됨)', value: 'motivation' },
      { text: '무엇을 기록할지 불명확', value: 'unclear' },
      { text: '피드백 받기 힘듦', value: 'feedback' },
      { text: '개선 실행 못 함', value: 'action' },
    ]},
  ],
};

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
  'gtd': {
    title: '당신의 GTD 시스템 준비됨',
    insights: [
      { label: '관리 업무', value: '25~30개 (효율화)' },
      { label: '수집 방식', value: '다채널 (Email, Slack, Voice)' },
      { label: '우선순위 정렬', value: '3단계 (긴급/중요/다음)' },
      { label: '시스템 복잡도', value: '낮음 (5분 온보딩)' },
    ],
    comparison: {
      before: { value: '까먹음 40%', percentage: 0 },
      after: { value: '까먹음 0%', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 28 },
      { day: '화', value: 26 },
      { day: '수', value: 31 },
      { day: '목', value: 27 },
      { day: '금', value: 23 },
      { day: '토', value: 5 },
      { day: '일', value: 12 },
    ],
  },
  'habits': {
    title: '당신의 습관 시스템 준비됨',
    insights: [
      { label: '도전 분야', value: '새 습관 시작' },
      { label: '트래킹 방식', value: '앱 + 시각화' },
      { label: '성공 확률', value: '88% (Atomic 기반)' },
      { label: '목표', value: '66일 자동화' },
    ],
    comparison: {
      before: { value: '0개 성공', percentage: 0 },
      after: { value: '6개 이상', percentage: 100 },
    },
    weeklyData: [
      { day: '1주', value: 2.5 },
      { day: '2주', value: 4.2 },
      { day: '3주', value: 5.8 },
      { day: '4주', value: 7.1 },
      { day: '5주', value: 8.3 },
      { day: '6주', value: 8.9 },
      { day: '7주', value: 9.5 },
    ],
  },
  'okr': {
    title: '당신의 OKR 시스템 준비됨',
    insights: [
      { label: '목표 설정', value: '분기별 3~5개' },
      { label: '역할', value: '팀 리더 (책임자)' },
      { label: '추적 주기', value: '주 1회 + 월 1회' },
      { label: '팀 정렬', value: '100% (동기화)' },
    ],
    comparison: {
      before: { value: '달성률 45%', percentage: 0 },
      after: { value: '달성률 87%', percentage: 100 },
    },
    weeklyData: [
      { day: '1월', value: 45 },
      { day: '2월', value: 58 },
      { day: '3월', value: 72 },
      { day: '4월', value: 80 },
      { day: '5월', value: 85 },
      { day: '6월', value: 87 },
      { day: '7월', value: 87 },
    ],
  },
  'para': {
    title: '당신의 PARA 정보 시스템 준비됨',
    insights: [
      { label: '수집량', value: '일 20~30개' },
      { label: '정보 유형', value: '뉴스/아이디어/고객' },
      { label: '검색 시간', value: '평균 2분' },
      { label: '활용률', value: '65% (이전 30%)' },
    ],
    comparison: {
      before: { value: '찾기 30분', percentage: 0 },
      after: { value: '찾기 2분', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 145 },
      { day: '화', value: 168 },
      { day: '수', value: 192 },
      { day: '목', value: 175 },
      { day: '금', value: 138 },
      { day: '토', value: 45 },
      { day: '일', value: 62 },
    ],
  },
  'second-brain': {
    title: '당신의 Second Brain 준비됨',
    insights: [
      { label: '저장 방식', value: 'Notion (연결 중심)' },
      { label: '활용도', value: '매우 자주 (80%+)' },
      { label: '업무 영역', value: '글쓰기/전략' },
      { label: '아이디어 재사용', value: '월 8~12회' },
    ],
    comparison: {
      before: { value: '아이디어 까먹음', percentage: 0 },
      after: { value: '아이디어 100% 보관', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 12 },
      { day: '화', value: 15 },
      { day: '수', value: 18 },
      { day: '목', value: 16 },
      { day: '금', value: 14 },
      { day: '토', value: 8 },
      { day: '일', value: 10 },
    ],
  },
  'time-block': {
    title: '당신의 Time Block 시스템 준비됨',
    insights: [
      { label: '계획 주기', value: '월 1회 (시스템)' },
      { label: '연속 집중', value: '2~4시간 가능' },
      { label: '스케줄 변동성', value: '30% → 10%' },
      { label: '휴식 시간', value: '일 1.5시간 확보' },
    ],
    comparison: {
      before: { value: '계획 없음', percentage: 0 },
      after: { value: '100% 블로킹됨', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 8 },
      { day: '화', value: 9 },
      { day: '수', value: 8.5 },
      { day: '목', value: 7.5 },
      { day: '금', value: 8 },
      { day: '토', value: 4 },
      { day: '일', value: 3 },
    ],
  },
  'pomodoro': {
    title: '당신의 Pomodoro 시스템 준비됨',
    insights: [
      { label: '선호 단위', value: '25분 (표준)' },
      { label: '연속 집중', value: '5~6회 (2.5시간)' },
      { label: '휴식 활동', value: '산책 + 명상' },
      { label: '일일 사이클', value: '6사이클 (3시간)' },
    ],
    comparison: {
      before: { value: '집중 불가능', percentage: 0 },
      after: { value: '6사이클 완성', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 6 },
      { day: '화', value: 6.5 },
      { day: '수', value: 5.8 },
      { day: '목', value: 6.2 },
      { day: '금', value: 5.5 },
      { day: '토', value: 3 },
      { day: '일', value: 2 },
    ],
  },
  'decision': {
    title: '당신의 의사결정 시스템 준비됨',
    insights: [
      { label: '결정 상황', value: '팀 의사결정' },
      { label: '고려 요소', value: '6~10개 (분석적)' },
      { label: '도구', value: 'Matrix + 점수' },
      { label: '결정 시간', value: '30분 → 10분' },
    ],
    comparison: {
      before: { value: '후회 비율 60%', percentage: 0 },
      after: { value: '후회 비율 10%', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 3 },
      { day: '화', value: 4 },
      { day: '수', value: 5 },
      { day: '목', value: 3.5 },
      { day: '금', value: 2 },
      { day: '토', value: 1 },
      { day: '일', value: 1.5 },
    ],
  },
  'priority': {
    title: '당신의 우선순위 시스템 준비됨',
    insights: [
      { label: '설정 방식', value: 'Eisenhower Matrix' },
      { label: '주간 업무', value: '20~40개 (관리)' },
      { label: '도구', value: 'Kanban (시각화)' },
      { label: '중요한 것 놓침', value: '100% → 0%' },
    ],
    comparison: {
      before: { value: '혼란 상태', percentage: 0 },
      after: { value: '완벽 정렬됨', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 35 },
      { day: '화', value: 38 },
      { day: '수', value: 40 },
      { day: '목', value: 36 },
      { day: '금', value: 28 },
      { day: '토', value: 5 },
      { day: '일', value: 8 },
    ],
  },
  'journey': {
    title: '당신의 커리어 계획 준비됨',
    insights: [
      { label: '커리어 상태', value: '중기 (5~10년)' },
      { label: '계획', value: '5년 이상' },
      { label: '발전 방향', value: '리더십 + 전문화' },
      { label: '로드맵', value: '분기별 마일스톤' },
    ],
    comparison: {
      before: { value: '방향 불명확', percentage: 0 },
      after: { value: '명확한 로드맵', percentage: 100 },
    },
    weeklyData: [
      { day: '분기1', value: 20 },
      { day: '분기2', value: 35 },
      { day: '분기3', value: 50 },
      { day: '분기4', value: 65 },
      { day: '년2', value: 75 },
      { day: '년3', value: 85 },
      { day: '년5', value: 95 },
    ],
  },
  'habit-stack': {
    title: '당신의 Habit Stacking 시스템 준비됨',
    insights: [
      { label: '기존 루틴', value: '아침 커피 + 산책' },
      { label: '연결 습관', value: '3~5개' },
      { label: '성공률', value: '92% (기존 루틴)' },
      { label: '자동화 시간', value: '66일' },
    ],
    comparison: {
      before: { value: '습관 형성 불가', percentage: 0 },
      after: { value: '자동 습관화', percentage: 100 },
    },
    weeklyData: [
      { day: '1주', value: 1.5 },
      { day: '2주', value: 3 },
      { day: '3주', value: 4.2 },
      { day: '4주', value: 4.8 },
      { day: '5주', value: 4.9 },
      { day: '6주', value: 4.95 },
      { day: '7주', value: 5 },
    ],
  },
  'energy': {
    title: '당신의 에너지 관리 시스템 준비됨',
    insights: [
      { label: '에너지 패턴', value: '아침형 + 오후 저점' },
      { label: '저점 시간', value: '오후 1~3시' },
      { label: '관리 방법', value: '운동 + 수면' },
      { label: '에너지 회복', value: '일 +40%' },
    ],
    comparison: {
      before: { value: '오후 집중도 40%', percentage: 0 },
      after: { value: '오후 집중도 75%', percentage: 100 },
    },
    weeklyData: [
      { day: '월', value: 6.5 },
      { day: '화', value: 7 },
      { day: '수', value: 7.2 },
      { day: '목', value: 6.8 },
      { day: '금', value: 6.3 },
      { day: '토', value: 5 },
      { day: '일', value: 5.5 },
    ],
  },
  'weekly': {
    title: '당신의 주간 리뷰 시스템 준비됨',
    insights: [
      { label: '리뷰 빈도', value: '주 1회 (일요일)' },
      { label: '체크 항목', value: '완료율 + 학습 + 개선' },
      { label: '실행 계획', value: '주 3개 실천' },
      { label: '개선율', value: '월 +15%' },
    ],
    comparison: {
      before: { value: '리뷰 안 함', percentage: 0 },
      after: { value: '주 1회 루틴', percentage: 100 },
    },
    weeklyData: [
      { day: '1주', value: 30 },
      { day: '2주', value: 45 },
      { day: '3주', value: 58 },
      { day: '4주', value: 68 },
      { day: '5주', value: 75 },
      { day: '6주', value: 82 },
      { day: '7주', value: 87 },
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

    const currentQuestions = QNA_QUESTIONS_BY_SKILL[selectedSkill] || [];
    const allAnswered = Object.keys(qnaAnswers).length >= currentQuestions.length - 1;
    if (allAnswered && questionIndex === currentQuestions.length - 1) {
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
                          {(() => {
                            const currentQuestions = QNA_QUESTIONS_BY_SKILL[selectedSkill] || [];
                            const currentQuestion = currentQuestions[Object.keys(qnaAnswers).length];
                            return currentQuestion?.q || '';
                          })()}
                        </h3>
                      </div>
                      <p className="text-silver text-[14px] ml-11">
                        (3~4분 소요)
                      </p>
                    </div>

                    <div className="space-y-3 ml-11">
                      {(() => {
                        const currentQuestions = QNA_QUESTIONS_BY_SKILL[selectedSkill] || [];
                        const currentQuestionIndex = Object.keys(qnaAnswers).length;
                        const currentQuestion = currentQuestions[currentQuestionIndex];
                        
                        if (!currentQuestion) return null;
                        
                        return currentQuestion.type === 'multi' ? (
                          currentQuestion.options.map((option) => (
                            <motion.button
                              key={option.value}
                              whileHover={{ x: 4 }}
                              onClick={() => handleQnaAnswer(currentQuestionIndex, option.value)}
                              className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-white/[0.1] hover:border-accent/40 hover:bg-white/[0.03] transition-all text-left group"
                            >
                              <div className="w-5 h-5 rounded border-2 border-ash/30 group-hover:border-accent/60 transition-all flex items-center justify-center shrink-0">
                                <Icon icon="solar:check-bold" className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <span className="text-snow text-[14px] font-medium">{option.text}</span>
                            </motion.button>
                          ))
                        ) : (
                          currentQuestion.options.map((option) => (
                            <motion.button
                              key={option.value}
                              whileHover={{ x: 4 }}
                              onClick={() => {
                                handleQnaAnswer(currentQuestionIndex, option.value);
                              }}
                              className="w-full flex items-center gap-3 p-4 rounded-xl border-2 border-white/[0.1] hover:border-accent/40 hover:bg-white/[0.03] transition-all text-left group"
                            >
                              <div className="w-5 h-5 rounded-full border-2 border-ash/30 group-hover:border-accent/60 transition-all flex items-center justify-center shrink-0">
                                <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <span className="text-snow text-[14px] font-medium">{option.text}</span>
                            </motion.button>
                          ))
                        );
                      })()}
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
                    <div className="mb-8 flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-extrabold text-snow mb-2">
                          ✅ 분석 완료!
                        </h3>
                        <p className="text-silver text-[14px]">
                          당신의 맞춤형 {DEMO_RESULTS[selectedSkill]?.title.replace('당신의 ', '').replace(' 준비됨', '')} 시스템 생성됨
                        </p>
                      </div>
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="px-4 py-2 text-[13px] text-ash hover:text-silver transition-colors flex items-center gap-2"
                      >
                        ← 이전
                      </button>
                    </div>

                    <div className="space-y-8">
                      {/* Analysis Summary */}
                      <div className="grid grid-cols-2 gap-4">
                        {DEMO_RESULTS[selectedSkill]?.insights.map((insight, i) => (
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
                              {DEMO_RESULTS[selectedSkill]?.comparison.before.value}
                            </div>
                          </div>
                          <Icon icon="solar:arrow-right-bold-duotone" className="w-6 h-6 text-emerald-accent" />
                          <div>
                            <div className="text-emerald-accent text-[12px] mb-2">3개월 후</div>
                            <div className="text-2xl font-extrabold text-emerald-accent">
                              {DEMO_RESULTS[selectedSkill]?.comparison.after.value}
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
                          당신의 {DEMO_RESULTS[selectedSkill]?.title.replace('당신의 ', '').replace(' 준비됨', '')} 진화
                        </div>
                        <div className="flex items-end justify-between gap-2 h-32">
                          {DEMO_RESULTS[selectedSkill]?.weeklyData.map((data, i) => (
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
                          당신의 {DEMO_RESULTS[selectedSkill]?.title.replace('당신의 ', '').replace(' 준비됨', '')} 시스템 준비됨 ✅
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
                        <div className="flex gap-3">
                          <button
                            onClick={() => setCurrentStep(4)}
                            className="flex-1 px-8 py-3 rounded-xl border border-white/[0.1] text-silver text-[14px] font-medium hover:bg-white/[0.03] transition-all"
                          >
                            ← 이전
                          </button>
                          <button
                            onClick={handleReset}
                            className="flex-1 px-8 py-3 rounded-xl border border-white/[0.1] text-silver text-[14px] font-medium hover:bg-white/[0.03] transition-all"
                          >
                            처음부터 시작
                          </button>
                        </div>
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

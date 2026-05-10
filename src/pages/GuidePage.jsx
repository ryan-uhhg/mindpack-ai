import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';

const steps = [
  {
    num: '01',
    title: '나에게 맞는 생산성 스킬 선택',
    icon: 'ph:star-duotone',
    desc: 'Mindpack AI에서 제공하는 14가지 생산성 스킬 중 당신의 상황에 맞는 것을 선택합니다. 각 스킬은 구체적인 상황과 QnA를 통해 맞춤형 결과를 제공합니다.',
    sub: 'Deep Work · Atomic Habits · OKR · GTD 등',
  },
  {
    num: '02',
    title: 'AI와 상호작용 - 무료 체험',
    icon: 'ph:robot-duotone',
    desc: '선택한 스킬의 QnA에 답변하면 AI가 당신에게 최적화된 실행 계획을 생성합니다. 직접 데이터를 입력하며 실시간으로 결과를 확인합니다.',
    sub: '클라우드 기반, 설치 없음',
  },
  {
    num: '03',
    title: '맞춤형 결과 받기',
    icon: 'ph:magic-wand-duotone',
    desc: 'AI가 생성한 슬라이드, 체크리스트, 실행 계획을 PDF 또는 HTML로 다운로드합니다. 즉시 실행하거나 팀과 공유할 수 있습니다.',
    sub: 'PDF 인쇄 가능 · 팀 공유 가능',
  },
  {
    num: '04',
    title: 'MD 파일로 더 깊게 (선택사항)',
    icon: 'ph:clipboard-text-duotone',
    desc: '무료 패키지에서 다운로드한 MD 파일을 Claude 또는 ChatGPT에 넣으면 동일 프레임워크를 확장해서 사용할 수 있습니다.',
    sub: 'Claude 3.5 Sonnet 권장',
  },
  {
    num: '05',
    title: 'AI 채팅창으로 확장 분석',
    icon: 'ph:file-text-duotone',
    desc: '다운로드한 MD 파일과 추가 정보를 함께 입력해 더 깊이 있는 분석을 받습니다. 프롬프트 MD를 활용하면 품질이 높아집니다.',
    sub: '무제한 재생성 · 추가 조건 입력 가능',
  },
  {
    num: '06',
    title: 'HTML 슬라이드 생성 및 공유',
    icon: 'ph:browsers-duotone',
    desc: 'AI가 생성한 HTML 코드를 저장해 브라우저에서 열면 고급 슬라이드로 표시됩니다. PDF로 인쇄하거나 팀과 공유하세요.',
    sub: '← → 키로 페이지 전환 · PDF 인쇄 지원',
  },
];

const tips = [
  { icon: 'ph:lightbulb-duotone', title: '구체적일수록 좋습니다', desc: '회사 이름, 업종, 주요 경쟁사, 타깃 고객을 구체적으로 입력할수록 분석 품질이 높아집니다.' },
  { icon: 'ph:arrows-clockwise-duotone', title: '재생성은 무제한', desc: '결과가 마음에 들지 않으면 "다시 분석해줘" 또는 추가 조건을 입력해 반복 생성할 수 있습니다.' },
  { icon: 'ph:printer-duotone', title: 'PDF로 인쇄하기', desc: '브라우저에서 Ctrl+P (Mac: ⌘+P) 를 누르고 "PDF로 저장"을 선택하면 고품질 PDF로 저장됩니다.' },
  { icon: 'ph:stack-duotone', title: '프롬프트 MD를 꼭 활용하세요', desc: '시장 분석가 · 컨설턴트 · 데이터 분석가 프롬프트를 함께 붙여넣으면 분석 깊이가 달라집니다.' },
];

const frameworks = [
  { name: 'McKinsey 7S', file: 'frameworks/mckinsey-7s.md', color: 'from-blue-900/20 to-yellow-500/10', badge: '조직 분석', example: 'examples/mckinsey-7s-example.html' },
  { name: 'SWOT 분석', file: 'frameworks/swot-analysis.md', color: 'from-purple-900/20 to-purple-500/10', badge: '상황 분석', example: 'examples/swot-example.html' },
  { name: 'BCG 매트릭스', file: 'frameworks/bcg-matrix.md', color: 'from-green-900/20 to-green-500/10', badge: '포트폴리오', example: 'examples/bcg-matrix-example.html' },
  { name: "Porter's 5 Forces", file: 'frameworks/porters-five-forces.md', color: 'from-red-900/20 to-red-500/10', badge: '산업 분석', example: 'examples/porters-five-forces-example.html' },
  { name: 'Jobs To Be Done', file: 'frameworks/jobs-to-be-done.md', color: 'from-amber-900/20 to-teal-500/10', badge: '고객 분석', example: 'examples/jtbd-example.html' },
];

export default function GuidePage() {
  return (
    <div>
      <PageHero
        eyebrow="How To Use"
        headline="무료 패키지 사용 가이드"
        sub="이메일 하나로 받은 파일을 AI에 넣으면 컨설팅급 슬라이드가 완성됩니다. 6단계로 따라하세요."
      />

      {/* 6단계 */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-12 text-center">6단계 완성 가이드</h2>
        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div key={s.num} className="flex gap-6 items-start p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Icon icon={s.icon} className="text-accent text-2xl" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[11px] font-mono font-bold text-accent/60">STEP {s.num}</span>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-silver text-[13px] leading-[1.8] mb-2">{s.desc}</p>
                <span className="inline-block text-[11px] font-medium text-accent/70 bg-accent/5 px-3 py-1 rounded-full border border-accent/10">
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 프레임워크 목록 */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">포함된 프레임워크 5종</h2>
        <p className="text-silver text-sm text-center mb-10">각 MD 파일을 AI에 넣고 내 자료를 추가하면 해당 프레임워크로 분석됩니다.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {frameworks.map((f) => (
            <div key={f.name} className={`p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${f.color}`}>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2 block">{f.badge}</span>
              <h3 className="text-base font-bold text-white mb-3">{f.name}</h3>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={`/free-resources/${f.example}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-accent hover:text-accent/80 flex items-center gap-1"
                >
                  <Icon icon="ph:play-circle-duotone" className="text-base" />
                  슬라이드 미리보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 팁 */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-white/[0.06]">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">더 좋은 결과를 위한 팁</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tips.map((t) => (
            <div key={t.title} className="flex gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <Icon icon={t.icon} className="text-accent text-2xl shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{t.title}</h3>
                <p className="text-silver text-[13px] leading-[1.7]">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center border-t border-white/[0.06]">
        <h2 className="text-2xl font-bold text-white mb-4">아직 무료 패키지를 받지 않으셨나요?</h2>
        <p className="text-silver text-sm mb-8">이메일 하나로 프레임워크 5종 · 프롬프트 3종 · 슬라이드 예시 4종을 모두 받을 수 있습니다.</p>
        <Link
          to="/pricing#free-email"
          className="inline-flex items-center gap-2 bg-accent text-black font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-accent/90 transition-colors"
        >
          <Icon icon="ph:envelope-duotone" className="text-lg" />
          무료 패키지 받기
        </Link>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const cases = [
  {
    tag: '대기업 · 전략기획팀',
    icon: 'solar:graph-up-bold-duotone',
    color: 'accent',
    title: '신사업 기획 보고서',
    situation: '신사업 아이템 3건에 대한 타당성 분석 보고서를 3일 안에 경영진에게 보고해야 하는 상황.',
    before: { time: '24시간', steps: ['아이템별 시장 보고서·경쟁사 자료·재무 데이터 수작업 읽기', '주요 내용 메모장에 요약 정리', 'PowerPoint 0에서 작성', '검토·수정 반복'] },
    after: { time: '30분', steps: ['아이템당 관련 문서 5~7건 드래그 앤 드롭', '3C 분석 프레임워크 선택', '.pptx 자동 출력'] },
    output: '3C 분석 기반 전략 보고서 .pptx',
    framework: '3C 분석',
  },
  {
    tag: '중견기업 · 마케팅팀',
    icon: 'solar:chart-square-bold-duotone',
    color: 'emerald-accent',
    title: '경쟁사 심층 분석',
    situation: '주요 경쟁사 5개사의 최근 전략 동향을 분석하여 다음 분기 대응 전략을 수립해야 하는 상황.',
    before: { time: '2~3일', steps: ['뉴스 기사·공시 자료·업계 보고서 개별 스크랩', '엑셀에 수작업 정리', '분석 보고서 작성'] },
    after: { time: '50분', steps: ['경쟁사별 수집 문서 투입', 'Porter\'s Five Forces 선택', '경쟁 분석 보고서 자동 출력'] },
    output: "Porter's Five Forces 기반 경쟁 분석 보고서",
    framework: "Porter's Five Forces",
  },
  {
    tag: '스타트업 · 대표',
    icon: 'solar:rocket-bold-duotone',
    color: 'gold',
    title: '투자 유치 IR 자료',
    situation: '시리즈 A 투자 유치를 준비 중. 시장 규모, 경쟁 현황, 사업 모델, 재무 전망을 담은 IR 덱 필요.',
    before: { time: '2주 + 300만원', steps: ['외부 컨설턴트 의뢰', '납기 불확실', 'VC 미팅까지 대기'] },
    after: { time: '1시간', steps: ['내부 사업계획서 + 시장 보고서 투입', 'McKinsey 7S 프레임워크 선택', '투자자 보고용 .pptx 즉시 출력'] },
    output: '투자 유치용 IR 덱 .pptx',
    framework: 'McKinsey 7S',
  },
  {
    tag: '제조업 · 해외영업팀',
    icon: 'solar:earth-bold-duotone',
    color: 'accent',
    title: '해외 시장 진입 전략',
    situation: '동남아 3개국 시장 진입 전략 보고서를 본부장에게 보고해야 하는 상황.',
    before: { time: '1주', steps: ['국가별 시장 보고서·관세 자료·현지 경쟁사 정보 수집', '번역 및 정리', '국가별 보고서 개별 작성'] },
    after: { time: '45분 (국가당 15분)', steps: ['국가별 수집 문서 투입', 'SWOT 분석 선택', '국가별 진입 전략 .pptx 출력'] },
    output: '국가별 SWOT 기반 시장 진입 전략 3종',
    framework: 'SWOT 분석',
  },
  {
    tag: '중소기업 · 경영지원팀',
    icon: 'solar:document-text-bold-duotone',
    color: 'emerald-accent',
    title: '월간 경영 보고 자동화',
    situation: '매월 4개 부서의 주간 보고(16건)를 취합하여 대표에게 월간 경영 보고서를 제출해야 하는 상황.',
    before: { time: '매월 6시간', steps: ['16건의 주간 보고 개별 열람', '핵심 내용 수작업 취합', '월간 보고서 작성 및 레이아웃 정리'] },
    after: { time: '20분', steps: ['16건의 주간 보고 파일 일괄 투입', '종합 분석 프레임워크 선택', '월간 경영 현황 .pptx 자동 출력'] },
    output: '부서별 핵심 성과 요약 월간 보고서',
    framework: '종합 분석',
  },
];

const colorMap = {
  accent: { badge: 'text-accent-bright border-accent/20 bg-accent/[0.06]', icon: 'text-accent', iconBg: 'bg-accent/[0.08] border-accent/15' },
  'emerald-accent': { badge: 'text-emerald-accent border-emerald-accent/20 bg-emerald-accent/[0.06]', icon: 'text-emerald-accent', iconBg: 'bg-emerald-accent/[0.08] border-emerald-accent/15' },
  gold: { badge: 'text-gold border-gold/20 bg-gold/[0.06]', icon: 'text-gold', iconBg: 'bg-gold/[0.08] border-gold/15' },
};

export default function UseCasesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Use Cases"
        headline={'기획 실무의 5가지\n핵심 시나리오'}
        subCopy="신사업 기획, 경쟁사 분석, IR 자료, 해외 진출, 월간 보고 — 귀하의 업무에서 Createnova가 어떻게 작동하는지 직접 확인하십시오."
      />

      <section className="w-full py-4 pb-24">
        <div className="section-container flex flex-col gap-12">
          {cases.map((c, i) => {
            const col = colorMap[c.color];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="card-bezel"
              >
                <div className="card-bezel-inner">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${col.iconBg}`}>
                      <Icon icon={c.icon} className={`w-5 h-5 ${col.icon}`} />
                    </div>
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${col.badge}`}>{c.tag}</span>
                    <h3 className="text-ivory font-bold text-[17px] tracking-tight w-full mt-1">{c.title}</h3>
                  </div>

                  <p className="text-ash text-[13px] leading-[1.8] mb-7 pb-6 border-b border-white/[0.05]">{c.situation}</p>

                  {/* Before / After */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-ash/40" />
                        <span className="text-ash text-[11px] font-semibold tracking-widest uppercase">기존 방식</span>
                        <span className="ml-auto text-pearl font-bold text-[15px]">{c.before.time}</span>
                      </div>
                      <ul className="space-y-2">
                        {c.before.steps.map((s, j) => (
                          <li key={j} className="flex items-start gap-2 text-ash text-[12.5px]">
                            <Icon icon="solar:close-circle-bold" className="w-3.5 h-3.5 text-ash/30 shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`rounded-xl border p-5 ${c.color === 'gold' ? 'bg-gold/[0.03] border-gold/15' : c.color === 'emerald-accent' ? 'bg-emerald-accent/[0.03] border-emerald-accent/15' : 'bg-accent/[0.03] border-accent/15'}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-1.5 h-1.5 rounded-full ${col.icon.replace('text-','bg-')}`} />
                        <span className={`text-[11px] font-semibold tracking-widest uppercase ${col.icon}`}>Mindpack AI</span>
                        <span className={`ml-auto font-bold text-[15px] ${col.icon}`}>{c.after.time}</span>
                      </div>
                      <ul className="space-y-2">
                        {c.after.steps.map((s, j) => (
                          <li key={j} className="flex items-start gap-2 text-silver text-[12.5px]">
                            <Icon icon="solar:check-circle-bold-duotone" className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${col.icon}`} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Output */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-ash text-[12px]">산출물:</span>
                    <span className="text-ivory text-[12px] font-semibold bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-lg">
                      📄 {c.output}
                    </span>
                    <span className="text-ash text-[12px]">적용 프레임워크:</span>
                    <span className={`text-[12px] font-semibold px-3 py-1 rounded-lg border ${col.badge}`}>{c.framework}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <CTABanner
        headline="나의 업무에도 적용할 수 있습니까?"
        subCopy="데모를 통해 6단계 워크플로우를 직접 확인하십시오."
        primaryLabel="데모 체험하기"
        primaryHref="/demo"
        secondaryLabel="요금제 확인하기"
        secondaryHref="/pricing"
      />
    </div>
  );
}

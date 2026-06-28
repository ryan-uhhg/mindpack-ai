import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const frameworks = [
  { name: 'McKinsey 7S', category: '조직·전략', icon: 'solar:diagram-up-bold-duotone', color: 'accent', desc: '전략(Strategy), 구조(Structure), 시스템(Systems), 공유가치(Shared Values), 스킬(Skills), 스타일(Style), 직원(Staff) 7요소로 조직을 종합 분석합니다.', best: '조직 변화, 합병·인수, 신사업 전략 수립' },
  { name: "Porter's Five Forces", category: '산업 분석', icon: 'solar:graph-new-bold-duotone', color: 'emerald-accent', desc: '신규 진입자, 공급자, 구매자, 대체재, 기존 경쟁자 5가지 힘으로 산업 경쟁 강도를 분석합니다.', best: '시장 진입 전략, 경쟁 전략, 사업성 검토' },
  { name: 'SWOT 분석', category: '환경 분석', icon: 'solar:square-academic-cap-bold-duotone', color: 'gold', desc: '강점(Strengths), 약점(Weaknesses), 기회(Opportunities), 위협(Threats)을 매트릭스로 정리합니다.', best: '기획 초기 상황 정리, 신사업 타당성 검토' },
  { name: '3C 분석', category: '전략 분석', icon: 'solar:layers-bold-duotone', color: 'accent', desc: '고객(Customer), 경쟁사(Competitor), 자사(Company) 세 관점에서 전략적 포지셔닝을 분석합니다.', best: '마케팅 전략, 제품 포지셔닝, 사업계획 수립' },
  { name: 'PEST 분석', category: '환경 분석', icon: 'solar:earth-bold-duotone', color: 'emerald-accent', desc: '정치(Political), 경제(Economic), 사회(Social), 기술(Technological) 거시환경 요인을 분석합니다.', best: '신시장 진출, 해외 시장 분석, 중장기 전략' },
  { name: 'MECE 구조화', category: '논리 구조', icon: 'solar:structure-bold-duotone', color: 'gold', desc: '상호배제·전체포괄(Mutually Exclusive, Collectively Exhaustive) 원칙으로 논리적 구조를 설계합니다.', best: '보고서 논리 구조 설계, 컨설팅 발표 자료' },
  { name: '로직 트리', category: '논리 구조', icon: 'solar:tree-bold-duotone', color: 'accent', desc: '문제를 계층적으로 분해하여 근본 원인과 해결책을 도출하는 구조적 사고 프레임워크입니다.', best: '문제 해결 보고서, 원인 분석, 의사결정' },
  { name: 'BCG 매트릭스', category: '포트폴리오', icon: 'solar:chart-2-bold-duotone', color: 'emerald-accent', desc: '시장 성장률과 상대적 시장점유율 기준으로 사업 포트폴리오를 Star·Cash Cow·Question Mark·Dog으로 분류합니다.', best: '다사업부 전략, 투자 우선순위 결정' },
  { name: '가치사슬 분석', category: '운영 분석', icon: 'solar:route-bold-duotone', color: 'gold', desc: '기업의 주요 활동(본원적·지원 활동)을 분석하여 경쟁 우위 원천과 원가 절감 기회를 찾습니다.', best: '운영 효율화, 원가 분석, 아웃소싱 전략' },
  { name: 'STP 전략', category: '마케팅', icon: 'solar:target-bold-duotone', color: 'accent', desc: '시장 세분화(Segmentation), 표적 선정(Targeting), 포지셔닝(Positioning) 3단계로 마케팅 전략을 수립합니다.', best: '신제품 출시, 마케팅 전략, 브랜드 포지셔닝' },
  { name: '4P 마케팅 믹스', category: '마케팅', icon: 'solar:shop-bold-duotone', color: 'emerald-accent', desc: '제품(Product), 가격(Price), 유통(Place), 촉진(Promotion) 4요소로 마케팅 전략을 구체화합니다.', best: '마케팅 계획, 제품 전략, 영업 전략' },
  { name: 'OKR', category: '성과 관리', icon: 'solar:flag-bold-duotone', color: 'gold', desc: '목표(Objectives)와 핵심결과(Key Results)를 연결하여 조직의 목표 달성 전략을 수립하고 추적합니다.', best: '목표 설정, 팀 전략 보고, 분기 경영 계획' },
];

const categories = [...new Set(frameworks.map(f => f.category))];
const colorMap = {
  accent: { badge: 'text-accent-bright border-accent/20 bg-accent/[0.06]', icon: 'text-accent', bg: 'bg-accent/[0.08] border-accent/15' },
  'emerald-accent': { badge: 'text-emerald-accent border-emerald-accent/20 bg-emerald-accent/[0.06]', icon: 'text-emerald-accent', bg: 'bg-emerald-accent/[0.08] border-emerald-accent/15' },
  gold: { badge: 'text-gold border-gold/20 bg-gold/[0.06]', icon: 'text-gold', bg: 'bg-gold/[0.08] border-gold/15' },
};

export default function FrameworksPage() {
  return (
    <div>
      <PageHero
        eyebrow="Framework Library"
        headline={'12종 컨설팅 프레임워크\n모두 내장되어 있습니다.'}
        subCopy="McKinsey, BCG, Porter — 세계 최고 컨설팅 펌의 사고 도구를 선택 한 번으로 적용하십시오. Premium 플랜에 모두 포함됩니다."
      />

      <section className="w-full py-4 pb-24">
        <div className="section-container">
          {categories.map(cat => (
            <div key={cat} className="mb-14">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-text-tertiary/60 text-[10px] font-semibold tracking-widest uppercase">{cat}</span>
                <div className="flex-1 h-px bg-border-light/40" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {frameworks.filter(f => f.category === cat).map((fw, i) => {
                  const col = colorMap[fw.color];
                  return (
                    <div key={i} className="card-bezel">
                      <div className="card-bezel-inner">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${col.bg}`}>
                            <Icon icon={fw.icon} className={`w-5 h-5 ${col.icon}`} />
                          </div>
                          <div>
                            <h3 className="text-text-primary font-bold text-[15px] mb-1">{fw.name}</h3>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${col.badge}`}>{fw.category}</span>
                          </div>
                        </div>
                        <p className="text-text-secondary text-[13px] leading-[1.8] mb-4">{fw.desc}</p>
                        <div className="flex items-start gap-2 text-[12px]">
                          <Icon icon="solar:check-circle-bold-duotone" className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${col.icon}`} />
                          <span className="text-text-tertiary"><span className={`font-semibold ${col.icon}`}>적합 상황</span>: {fw.best}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="12종 프레임워크를 지금 바로 사용하십시오."
        subCopy="Premium 플랜에 모두 포함됩니다. 평생 무료 업데이트로 신규 프레임워크도 추가됩니다."
        primaryLabel="얼리버드 특가로 영구 소장하기"
        primaryHref="/pricing"
        secondaryLabel="데모 체험하기"
        secondaryHref="/demo"
      />
    </div>
  );
}

import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const reviews = [
  {
    name: 'K 팀장',
    role: '대기업 전략기획팀 · 5년차',
    quote: '주간 보고서 작성에 하루의 절반을 쓰고 있었습니다. 이제 30분이면 끝납니다.',
    body: '매주 5개 부서의 보고를 취합하여 경영진 보고서를 만드는 것이 제 업무의 가장 큰 부담이었습니다. Createnova를 도입한 후, 문서를 투입하고 프레임워크만 선택하면 보고서 초안이 나옵니다. 절감된 시간으로 전략적 사고에 더 집중할 수 있게 되었습니다.',
    metric: '보고서 작성 시간 70% 단축',
    rating: 5,
    color: 'accent',
  },
  {
    name: 'L 대리',
    role: '금융사 리서치팀 · 3년차',
    quote: '보안 때문에 클라우드 AI를 쓸 수 없었는데, 이건 원본 파일이 안 나가니까 팀장님도 승인해 주셨습니다.',
    body: '금융 데이터를 다루다 보니 ChatGPT에 파일을 올릴 수가 없었습니다. Createnova는 원본 파일 없이 텍스트만 추출해서 분석하기 때문에 보안팀의 우려 없이 바로 실무에 투입할 수 있었습니다.',
    metric: '도입 승인까지 1일',
    rating: 5,
    color: 'emerald-accent',
  },
  {
    name: 'P 과장',
    role: '스타트업 사업개발팀 · 7년차',
    quote: '투자 IR 덱을 외주 맡기면 300만원, 2주. 이건 1시간이면 끝납니다.',
    body: '시리즈 A 준비 중에 Createnova를 사용했습니다. 시장 분석 자료와 사업계획서를 넣고 McKinsey 7S를 적용했더니, VC 미팅에 바로 들고 갈 수 있는 수준의 자료가 나왔습니다.',
    metric: 'IR 자료 준비 비용 95% 절감',
    rating: 5,
    color: 'gold',
  },
];

const colorMap = {
  accent: 'text-accent-bright border-accent/20 bg-accent/[0.04]',
  'emerald-accent': 'text-emerald-accent border-emerald-accent/20 bg-emerald-accent/[0.04]',
  gold: 'text-gold border-gold/20 bg-gold/[0.04]',
};

export default function ReviewsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Reviews"
        headline={'베타 테스터들의\n실제 경험'}
        subCopy="과장하지 않습니다. 베타 테스터들이 직접 작성한 후기를 그대로 전달합니다."
      />

      <section className="w-full py-4 pb-24">
        <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card-bezel flex flex-col">
              <div className="card-bezel-inner flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Icon key={j} icon="solar:star-bold-duotone" className="w-4 h-4 text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-ivory font-semibold text-[14px] leading-[1.7] mb-4 flex-1">
                  "{r.quote}"
                </blockquote>

                <p className="text-silver text-[12.5px] leading-[1.8] mb-5">{r.body}</p>

                {/* Metric */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-[12px] font-bold mb-6 ${colorMap[r.color]}`}>
                  <Icon icon="solar:graph-up-bold-duotone" className="w-3.5 h-3.5" />
                  {r.metric}
                </div>

                {/* Profile */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <div className="text-ivory text-[13px] font-semibold">{r.name}</div>
                  <div className="text-ash text-[12px] mt-0.5">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit CTA */}
      <section className="w-full py-10">
        <div className="section-container max-w-3xl">
          <div className="card-bezel">
            <div className="card-bezel-inner text-center py-10">
              <Icon icon="solar:pen-bold-duotone" className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-snow mb-3">귀하의 경험을 공유하여 주십시오</h3>
              <p className="text-silver text-[13.5px] mb-6">베타 테스트에 참여하셨거나 제품을 구매하셨다면, 귀하의 경험을 들려주십시오.</p>
              <a
                href="mailto:mindpackai.help@gmail.com?subject=Mindpack AI 후기 제출"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/[0.08] border border-accent/20 text-accent-bright text-[13px] font-semibold hover:bg-accent/[0.15] transition-all duration-300"
              >
                <Icon icon="solar:letter-bold-duotone" className="w-4 h-4" />
                후기 이메일로 보내기
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="직접 경험해 보십시오."
        subCopy="얼리버드 50명 한정. 지금이 가장 낮은 가격입니다."
        primaryLabel="얼리버드 특가로 영구 소장하기"
        primaryHref="/pricing"
        secondaryLabel="데모 체험하기"
        secondaryHref="/demo"
      />
    </div>
  );
}

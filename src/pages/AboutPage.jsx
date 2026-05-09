import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const timeline = [
  {
    year: '2018',
    label: '발견',
    title: '정보 과잉이라는 적',
    body: 'UX 기획자로 경력을 시작한 지 3년차, 매일 20개 이상의 문서를 읽고 5건 이상의 보고서를 작성했습니다. 어느 날 깨달았습니다 — 기획하는 시간보다 정보를 정리하는 시간이 3배 이상 길다는 것을.',
    color: 'accent',
  },
  {
    year: '2022',
    label: '좌절',
    title: '챗GPT로는 부족했습니다',
    body: 'ChatGPT가 등장했을 때, 이것이 해답이라 생각했습니다. 그러나 사내 보안 정책 때문에 대외비 문서를 업로드할 수 없었고, 대화가 길어지면 맥락을 잃어버렸으며, 결과물을 보고서 형태로 정리하는 데 또다시 2시간이 걸렸습니다.',
    color: 'emerald-accent',
  },
  {
    year: '2025',
    label: '구축',
    title: '직접 만들기로 했습니다',
    body: '보안망 안에서 작동하고, 문서를 누적으로 기억하며, 컨설팅 수준의 논리 구조를 갖춘 보고서를 자동으로 출력하는 시스템. 그런 도구가 세상에 없었기에 직접 만들었습니다. 8개월간의 주말과 새벽을 투자해 완성한 것이 Createnova입니다.',
    color: 'gold',
  },
  {
    year: '2026',
    label: '공유',
    title: '혼자만 쓰기엔 아까웠습니다',
    body: '동료 기획자들에게 보여줬을 때 반응은 동일했습니다. "이거 어디서 살 수 있어?" 같은 고통을 겪고 있는 기획자들에게 이 도구를 전달하기 위해 Createnova를 제품으로 만들기로 결심했습니다.',
    color: 'accent',
  },
];

const stats = [
  { value: '8년', label: '기획 실무 경력' },
  { value: '8개월', label: '제품 개발 기간' },
  { value: '12종', label: '내장 컨설팅 프레임워크' },
  { value: '0건', label: 'Mindpack AI 서버 전송 데이터' },
];

const colorClass = {
  accent: { dot: 'bg-accent', year: 'text-accent', line: 'border-accent/20' },
  'emerald-accent': { dot: 'bg-emerald-accent', year: 'text-emerald-accent', line: 'border-emerald-accent/20' },
  gold: { dot: 'bg-gold', year: 'text-gold', line: 'border-gold/20' },
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Mindpack AI"
        headline={'기획자의 생존 도구를\n만들었습니다.'}
        subCopy="이것은 시장 조사로 시작된 제품이 아닙니다. 정보 과잉에 매일 패배하던 한 기획자가, 자신을 구하기 위해 직접 만든 시스템입니다."
      />

      {/* Timeline */}
      <section className="w-full py-4 pb-24">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Founder Story
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-[-0.04em]">파운더 스토리</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] md:-translate-x-px" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => {
                const c = colorClass[item.color];
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 pl-14 md:pl-0`}
                  >
                    {/* Dot */}
                    <div className={`absolute left-4 md:left-1/2 top-3 w-5 h-5 rounded-full ${c.dot} md:-translate-x-1/2 border-4 border-void shadow-[0_0_12px_rgba(139,92,246,0.3)]`} />

                    {/* Content */}
                    <div className="flex-1 md:max-w-[calc(50%-2rem)]">
                      <div className="card-bezel">
                        <div className="card-bezel-inner">
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`font-mono text-xl font-bold ${c.year}`}>{item.year}</span>
                            <span className="text-ash/50 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border border-white/[0.05]">{item.label}</span>
                          </div>
                          <h3 className="text-ivory font-bold text-[16px] mb-3 tracking-tight">{item.title}</h3>
                          <p className="text-silver text-[13.5px] leading-[1.85]">{item.body}</p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl">
          <div className="card-bezel">
            <div className="card-bezel-inner text-center py-14 md:py-16 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-accent/[0.05] blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <Icon icon="solar:star-bold-duotone" className="w-10 h-10 text-accent mx-auto mb-8" />
                <blockquote className="text-xl md:text-2xl font-extrabold text-snow tracking-[-0.04em] leading-[1.4] mb-8">
                  "기획자의 시간은 텍스트 정리가 아닌,<br className="hidden md:block" />결정에 쓰여야 합니다."
                </blockquote>
                <p className="text-silver text-[14px] leading-[1.85] max-w-xl mx-auto text-center">
                  Createnova는 기획자의 인지 에너지를 보호하는 것을 사명으로 합니다. 정보를 수집하고 정리하는 반복 노동에서 기획자를 해방시켜, 진정으로 가치 있는 판단과 결정에 집중할 수 있는 환경을 만듭니다.
                </p>
                <div className="mt-8 pt-8 border-t border-white/[0.05]">
                  <div className="text-ash text-[13px]">
                    <span className="text-ivory font-semibold">Mindpack AI 파운더</span>
                    <span className="text-ash/50 mx-2">·</span>
                    8년차 UX 기획자
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-bezel"
              >
                <div className="card-bezel-inner text-center py-8">
                  <div className="text-3xl font-extrabold text-accent-bright tracking-tight mb-2">{stat.value}</div>
                  <div className="text-ash text-[12px] leading-[1.5]">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="제품을 직접 확인해 보십시오."
        subCopy="데모를 통해 6단계 워크플로우를 먼저 확인하십시오."
        primaryLabel="데모 체험하기"
        primaryHref="/demo"
        secondaryLabel="요금제 보기"
        secondaryHref="/pricing"
      />
    </div>
  );
}

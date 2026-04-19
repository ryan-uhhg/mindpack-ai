import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import AccordionFAQ from '../components/shared/AccordionFAQ';
import CTABanner from '../components/shared/CTABanner';

const techCards = [
  {
    icon: 'solar:key-bold-duotone',
    title: 'API 키 로컬 저장',
    body: '귀하의 Anthropic API 키는 Supanova에 보관되지 않습니다. 키는 귀하의 OS 키체인(macOS Keychain / Windows Credential Manager)에만 저장되며, 앱 외 어디에도 전송되지 않습니다. Supanova는 귀하의 API 크레딧을 대신 관리하지 않습니다.',
    color: 'gold',
  },
  {
    icon: 'solar:lock-keyhole-bold-duotone',
    title: '원본 파일 보호',
    body: 'PDF, PPTX, XLSX 등 원본 파일은 귀하의 기기 밖으로 나가지 않습니다. 파이썬 전처리 모듈이 로컬에서 텍스트만 추출하며, 추출된 텍스트만 Claude API로 전송됩니다. 파일의 레이아웃, 이미지, 메타데이터는 전송 대상이 아닙니다.',
    color: 'emerald',
  },
  {
    icon: 'solar:server-minimalistic-bold-duotone',
    title: 'Supanova 자체 서버 제로',
    body: 'Supanova는 자체 서버를 운영하지 않습니다. 귀하의 데이터가 Supanova 인프라를 경유하는 경로가 존재하지 않습니다. Anthropic API 이용약관에 따라 API 전송 데이터는 모델 훈련에 사용되지 않습니다.',
    color: 'accent',
  },
  {
    icon: 'solar:server-square-cloud-bold-duotone',
    title: '사내 Private API 연동',
    body: '귀사가 Azure OpenAI, AWS Bedrock, 또는 자체 AI 서버를 운영하고 있습니까? API 엔드포인트 설정만 변경하면 사내 프라이빗 AI 인프라에 즉시 연결됩니다. 이 경우 추출된 텍스트조차 사내망 밖으로 나가지 않습니다.',
    color: 'gold',
  },
  {
    icon: 'solar:eye-closed-bold-duotone',
    title: '제로 텔레메트리',
    body: '앱 사용 통계, 분석 빈도, 문서 정보 — 그 어떤 데이터도 수집하지 않습니다. 앱 내부에 사용자 추적 코드(analytics)가 존재하지 않습니다.',
    color: 'accent',
  },
];

const comparisonRows = [
  { label: '파일 업로드 방식', web: '원본 파일 전체 클라우드 업로드', supra: '원본 파일 업로드 없음 (텍스트만 추출)' },
  { label: '전송 데이터', web: '파일 전체 + 대화 내용 + 메타데이터', supra: '파싱된 텍스트만 (레이아웃·이미지 제외)' },
  { label: '전처리', web: '없음 (원본 그대로 전송)', supra: '파이썬이 로컬에서 노이즈 제거 후 전송' },
  { label: 'Supanova 서버 경유', web: '해당 없음', supra: '경유 제로' },
  { label: '대화 기록 저장', web: '서비스 제공자 서버에 저장', supra: '로컬 디스크에만 저장' },
  { label: '모델 훈련 활용', web: '웹 사용 시 훈련에 사용될 수 있음', supra: 'API 이용약관상 훈련에 미사용' },
  { label: '보안 감사 시', web: '원본 파일 외부 전송 이력 발생', supra: '원본 파일 전송 이력 없음' },
  { label: '사내 AI 서버 연동', web: '불가 (해당 서비스 고정)', supra: 'API 엔드포인트 변경으로 즉시 연동' },
  { label: '구조화된 출력', web: '직접 .pptx 정리 필요', supra: '.pptx 자동 생성' },
];

const complianceRows = [
  { label: '사내 DLP 정책', status: 'good', note: '원본 파일이 기기를 벗어나지 않으며, 전처리된 텍스트만 전송' },
  { label: '개인정보보호법', status: 'caution', note: '추출된 텍스트에 개인정보 포함 가능성 — 문서 내용에 따라 확인 권장' },
  { label: '금융보안원 가이드라인', status: 'caution', note: '텍스트 기반 API 호출 발생 — 금융 기밀 포함 여부에 따라 심의 권장' },
  { label: 'ISMS-P 인증 환경', status: 'caution', note: '외부 API 호출 있으나 원본 파일 비전송으로 리스크 대폭 축소' },
  { label: '사내 AI 서버 연동 시', status: 'best', note: '텍스트조차 사내망 밖으로 나가지 않음 — 최고 등급 보안 확보' },
];

const faqItems = [
  {
    q: '분석 시 인터넷 연결이 필요합니까?',
    a: '네. Supanova는 AI 분석에 Claude API(Anthropic)를 사용하므로 분석 실행 시 인터넷 연결이 필요합니다. 단, 전송되는 것은 파이썬이 로컬에서 추출한 텍스트만이며, 원본 파일(PDF, PPTX 등) 자체는 업로드되지 않습니다.',
  },
  {
    q: '전송되는 텍스트에 민감 정보가 포함될 수 있지 않습니까?',
    a: '문서 내용에 따라 가능합니다. 전처리 모듈이 헤더, 푸터, 워터마크 등 불필요한 데이터를 사전 제거합니다. Anthropic API 이용약관에 따라 전송 데이터는 모델 훈련에 사용되지 않습니다. 극도로 민감한 데이터의 경우 사내 AI 서버 연동을 권장합니다.',
  },
  {
    q: 'Supanova 자체 서버에 데이터가 저장됩니까?',
    a: '아닙니다. Supanova는 자체 서버를 운영하지 않습니다. 귀하의 데이터는 오직 귀하의 기기 → Claude API 경로로만 이동하며, Supanova 인프라를 경유하지 않습니다. 분석 결과는 귀하의 로컬 디스크에만 저장됩니다.',
  },
  {
    q: '사내 AI 서버(Azure OpenAI, AWS Bedrock 등)에 연결할 수 있습니까?',
    a: '네. Supanova 설정에서 API 엔드포인트만 귀사의 사내 AI 서버 주소로 변경하면 즉시 연동됩니다. 이 경우 추출된 텍스트도 사내망을 벗어나지 않으므로, 가장 엄격한 보안 환경에서도 사용할 수 있습니다.',
  },
  {
    q: 'IT 보안팀에 제출할 수 있는 기술 문서가 있습니까?',
    a: '데이터 흐름 아키텍처 문서와 보안 검토 체크리스트를 PDF로 제공합니다. support@supanova.co로 요청하시면 즉시 발송해 드립니다.',
  },
];

const colorClass = {
  emerald: { icon: 'text-emerald-accent', bg: 'bg-emerald-accent/[0.08] border-emerald-accent/15' },
  accent: { icon: 'text-accent-bright', bg: 'bg-accent/[0.08] border-accent/15' },
  gold: { icon: 'text-gold', bg: 'bg-gold/[0.08] border-gold/15' },
};

const statusConfig = {
  good: { icon: 'solar:check-circle-bold-duotone', color: 'text-emerald-accent', label: '유리' },
  caution: { icon: 'solar:info-circle-bold-duotone', color: 'text-gold', label: '검토 권장' },
  best: { icon: 'solar:shield-check-bold-duotone', color: 'text-emerald-accent', label: '최고 등급' },
};

export default function SecurityPage() {
  return (
    <div>
      <PageHero
        eyebrow="Security Architecture"
        headline={'원본 파일은 절대\n업로드되지 않습니다.'}
        subCopy="파이썬이 귀하의 기기에서 텍스트만 추출하고, 추출된 텍스트만 Claude API로 분석합니다. 원본 PDF, PPTX, XLSX 파일 자체가 외부로 전송되는 경로는 존재하지 않습니다."
      />

      {/* Architecture Diagram */}
      <section className="pb-20">
        <div className="section-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="card-bezel"
          >
            <div className="card-bezel-inner !py-12">
              <h3 className="text-center text-lg font-bold text-snow mb-10 tracking-tight">데이터 흐름 아키텍처</h3>

              {/* Laptop box */}
              <div className="border border-emerald-accent/20 rounded-2xl p-6 mb-6 bg-emerald-accent/[0.02]">
                <div className="flex items-center gap-2 mb-5">
                  <Icon icon="solar:laptop-bold-duotone" className="w-4 h-4 text-emerald-accent" />
                  <span className="text-emerald-accent text-[11px] font-semibold tracking-widest uppercase">귀하의 랩탑 (로컬 환경)</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 text-[13px]">
                  {['문서 투입', '파이썬 전처리', '텍스트 추출'].map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-silver text-[12px]">{s}</div>
                      {i < 2 && <Icon icon="solar:arrow-right-bold" className="w-3 h-3 text-ash/40 shrink-0" />}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Icon icon="solar:lock-keyhole-bold-duotone" className="w-3.5 h-3.5 text-emerald-accent/60" />
                  <span className="text-emerald-accent/60 text-[11px]">원본 파일은 이 경계를 절대 벗어나지 않음</span>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex flex-col items-center gap-1 mb-4">
                <div className="w-px h-6 bg-accent/30" />
                <div className="text-accent text-[11px] font-semibold px-3 py-1 rounded-full border border-accent/20 bg-accent/[0.06]">추출된 텍스트만 전송</div>
                <div className="w-px h-6 bg-accent/30" />
              </div>

              {/* API boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border border-accent/20 rounded-2xl p-5 bg-accent/[0.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="solar:star-bold-duotone" className="w-4 h-4 text-accent" />
                    <span className="text-accent text-[12px] font-bold">Claude API (Anthropic)</span>
                  </div>
                  <p className="text-ash text-[11px] leading-[1.7]">기본 구성. API 이용약관상 전송 데이터는 모델 훈련에 미사용.</p>
                </div>
                <div className="border border-gold/20 rounded-2xl p-5 bg-gold/[0.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="solar:server-square-cloud-bold-duotone" className="w-4 h-4 text-gold" />
                    <span className="text-gold text-[12px] font-bold">사내 AI 서버</span>
                  </div>
                  <p className="text-ash text-[11px] leading-[1.7]">엔드포인트 변경 시. Azure OpenAI, AWS Bedrock 등 — 텍스트도 사내망 내 유지.</p>
                </div>
              </div>

              {/* Arrow down */}
              <div className="flex flex-col items-center gap-1 mb-4">
                <div className="w-px h-6 bg-accent/30" />
                <div className="text-ash text-[11px]">분석 결과 반환</div>
                <div className="w-px h-6 bg-accent/30" />
              </div>

              {/* Result box */}
              <div className="border border-white/[0.06] rounded-2xl p-4 bg-white/[0.01] text-center">
                <span className="text-silver text-[12px]">.pptx 생성 및 로컬 저장 — 결과물은 귀하의 기기에만 존재</span>
              </div>

              {/* Zero markers */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['Supanova 자체 서버 경유 없음', '원본 파일 업로드 없음', '사용자 추적 없음'].map(t => (
                  <div key={t} className="flex items-center gap-1.5 text-[11px] text-ash/60">
                    <Icon icon="solar:close-circle-bold" className="w-3.5 h-3.5 text-ash/30" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech cards */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Technical Details
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-[-0.04em]">기술 상세</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {techCards.map((card, i) => {
              const c = colorClass[card.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="card-bezel"
                >
                  <div className="card-bezel-inner">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${c.bg}`}>
                      <Icon icon={card.icon} className={`w-5 h-5 ${c.icon}`} />
                    </div>
                    <h3 className="text-ivory font-bold text-[15px] mb-3">{card.title}</h3>
                    <p className="text-silver text-[13.5px] leading-[1.8]">{card.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-[-0.04em]">
              웹 AI vs. Supanova 비교
            </h2>
          </div>
          <div className="card-bezel">
            <div className="card-bezel-inner !p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px]">
                  <thead>
                    <tr className="border-b border-white/[0.06]">
                      <th className="text-left px-6 py-4 text-ash text-[12px] font-semibold w-1/3">항목</th>
                      <th className="text-center px-4 py-4 text-ash text-[12px] font-semibold w-1/3">ChatGPT / Claude 웹</th>
                      <th className="text-center px-4 py-4 text-emerald-accent text-[12px] font-bold bg-emerald-accent/[0.04] w-1/3">Supanova</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className={`border-b border-white/[0.04] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                        <td className="px-6 py-3.5 text-silver text-[12.5px] font-medium">{row.label}</td>
                        <td className="px-4 py-3.5 text-center text-ash text-[12px]">{row.web}</td>
                        <td className="px-4 py-3.5 text-center text-emerald-accent text-[12px] font-medium bg-emerald-accent/[0.02]">{row.supra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Compliance
            </span>
            <h2 className="text-2xl font-extrabold text-snow tracking-[-0.04em] mb-4">보안 규정 적합성</h2>
            <p className="text-silver text-[14px]">
              Supanova의 아키텍처는 원본 파일 미전송 구조로, 보안 검토 부담을 크게 줄여줍니다.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {complianceRows.map((row, i) => {
              const s = statusConfig[row.status];
              return (
                <div key={i} className="card-bezel">
                  <div className="card-bezel-inner !py-4 !px-6 flex items-start gap-4">
                    <Icon icon={s.icon} className={`w-5 h-5 shrink-0 mt-0.5 ${s.color}`} />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-ivory text-[13.5px] font-semibold">{row.label}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${s.color} border-current/20 bg-current/5`}>{s.label}</span>
                      </div>
                      <p className="text-ash text-[12.5px] leading-[1.7]">{row.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 p-5 rounded-2xl border border-gold/20 bg-gold/[0.03]">
            <div className="flex items-start gap-3">
              <Icon icon="solar:info-circle-bold-duotone" className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <p className="text-ash text-[12.5px] leading-[1.75]">
                <strong className="text-gold">사내 AI 서버 연동 시</strong>: 추출된 텍스트조차 사내망 밖으로 나가지 않으므로 위 모든 항목이 최고 등급으로 전환됩니다. Azure OpenAI, AWS Bedrock 등 귀사의 AI 인프라와 연동 방법은 보안팀 문의를 통해 안내해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-snow tracking-[-0.04em]">보안 FAQ</h2>
          </div>
          <AccordionFAQ items={faqItems} />
        </div>
      </section>

      <CTABanner
        headline="보안 확인이 끝나셨습니까?"
        subCopy="요금제를 확인하거나 데모를 먼저 체험해 보십시오."
        primaryLabel="요금제 확인하기"
        primaryHref="/pricing"
        secondaryLabel="데모 체험하기"
        secondaryHref="/demo"
      />
    </div>
  );
}

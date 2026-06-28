import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';

const versions = [
  {
    version: 'v1.2.0',
    date: '2026-04-12',
    type: 'feature',
    label: '새 기능',
    changes: [
      { type: 'new', text: '사내 AI 서버 연동 지원 — Azure OpenAI, AWS Bedrock 엔드포인트 설정 추가' },
      { type: 'new', text: 'OKR 프레임워크 추가 (전체 12종으로 확대)' },
      { type: 'new', text: '스마트 토큰 다이어트 모듈 v2 — 평균 절감률 40% → 48% 향상' },
      { type: 'fix', text: 'Windows 11에서 .xlsx 파일 파싱 오류 수정' },
      { type: 'improve', text: '분석 진행 중 취소 기능 추가' },
    ],
  },
  {
    version: 'v1.1.0',
    date: '2026-03-01',
    type: 'feature',
    label: '새 기능',
    changes: [
      { type: 'new', text: '다중 파일 동시 투입 지원 — 최대 20개 파일' },
      { type: 'new', text: 'STP 전략, 4P 마케팅 믹스 프레임워크 추가' },
      { type: 'new', text: '분석 결과 히스토리 보기 기능' },
      { type: 'improve', text: '한국어 PDF 파싱 정확도 개선 (약 23% 향상)' },
      { type: 'fix', text: 'macOS Sonoma에서 간헐적 크래시 수정' },
    ],
  },
  {
    version: 'v1.0.0',
    date: '2026-02-01',
    type: 'release',
    label: '최초 출시',
    changes: [
      { type: 'new', text: '프라이빗 RAG 데스크톱 앱 최초 출시 (macOS / Windows)' },
      { type: 'new', text: '9종 컨설팅 프레임워크 내장 (McKinsey 7S, Porter\'s Five Forces, SWOT 등)' },
      { type: 'new', text: '파이썬 전처리 모듈 — 원본 파일 비전송 아키텍처' },
      { type: 'new', text: '.pptx 다이렉트 출력 기능' },
      { type: 'new', text: '스마트 토큰 다이어트 모듈 v1' },
    ],
  },
];

const typeConfig = {
  new: { icon: 'solar:add-circle-bold-duotone', color: 'text-emerald-accent', label: '추가' },
  fix: { icon: 'solar:bug-bold-duotone', color: 'text-gold', label: '수정' },
  improve: { icon: 'solar:arrow-up-bold-duotone', color: 'text-accent-bright', label: '개선' },
};

const releaseConfig = {
  feature: { badge: 'text-accent-bright border-accent/20 bg-accent/[0.06]' },
  release: { badge: 'text-gold border-gold/20 bg-gold/[0.06]' },
};

export default function ChangelogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Changelog"
        headline={'업데이트 내역'}
        subCopy="Premium 플랜 구매자는 모든 업데이트를 영구 무료로 제공받습니다."
      />

      <section className="w-full py-4 pb-28">
        <div className="section-container max-w-3xl flex flex-col gap-8">
          {versions.map((v, i) => (
            <div key={i} className="card-bezel">
              <div className="card-bezel-inner">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-text-primary font-extrabold text-xl font-mono tracking-tight">{v.version}</span>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${releaseConfig[v.type].badge}`}>{v.label}</span>
                  <span className="text-text-tertiary text-[12px] ml-auto">{v.date}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {v.changes.map((c, j) => {
                    const t = typeConfig[c.type];
                    return (
                      <li key={j} className="flex items-start gap-3">
                        <Icon icon={t.icon} className={`w-4 h-4 shrink-0 mt-0.5 ${t.color}`} />
                        <span className="text-text-secondary text-[13.5px] leading-[1.7]">{c.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

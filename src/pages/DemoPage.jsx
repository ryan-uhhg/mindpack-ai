import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import CTABanner from '../components/shared/CTABanner';

const steps = [
  {
    num: '01',
    title: '원터치 설치',
    body: '일반 앱과 동일합니다. 다운로드 파일을 실행하고 Applications 폴더에 드래그하면 완료됩니다. 터미널, 명령어, 환경변수 설정이 일절 필요하지 않습니다.',
    badge: 'CLI 제로',
    icon: 'solar:download-minimalistic-bold-duotone',
    color: 'accent',
    mockup: <InstallMockup />,
  },
  {
    num: '02',
    title: 'Claude API 연결',
    body: 'Createnova는 귀하의 Anthropic 계정을 직접 사용합니다. API 키를 한 번 입력하면 앱이 OS 키체인에 안전하게 저장합니다. Mindpack AI 서버에는 키가 전달되지 않으며, API 비용은 Anthropic 계정에서 직접 청구됩니다.',
    badge: '키체인 보안 저장',
    icon: 'solar:key-bold-duotone',
    color: 'gold',
    mockup: <ApiKeyMockup />,
  },
  {
    num: '03',
    title: '문서 투입',
    body: '분석할 문서를 드래그 앤 드롭하십시오. PDF, DOCX, PPTX, XLSX, TXT, CSV — 6가지 포맷을 지원합니다. 한 번에 최대 20개 파일을 동시에 투입할 수 있습니다.',
    badge: '6종 포맷 지원',
    icon: 'solar:file-bold-duotone',
    color: 'emerald-accent',
    mockup: <DropzoneMockup />,
  },
  {
    num: '04',
    title: '스마트 토큰 다이어트',
    body: '파이썬 전처리 모듈이 문서의 불순물(헤더, 푸터, 워터마크, 반복 구문)을 자동 제거합니다. 원본 대비 평균 40% 토큰을 절감하여 API 한도를 보호합니다.',
    badge: '평균 40% 절감',
    icon: 'solar:tuning-square-bold-duotone',
    color: 'gold',
    mockup: <TokenMockup />,
  },
  {
    num: '05',
    title: '컨설팅 프레임워크 선택',
    body: '분석 목적에 맞는 프레임워크를 선택하십시오. McKinsey 7S, Porter\'s Five Forces, SWOT, 3C 분석 등 12종이 내장되어 있습니다.',
    badge: '12종 내장',
    icon: 'solar:library-bold-duotone',
    color: 'accent',
    mockup: <FrameworkMockup />,
  },
  {
    num: '06',
    title: '프라이빗 RAG 분석',
    body: '파이썬이 로컬에서 추출한 텍스트만 Claude API로 전송하여 분석합니다. 원본 파일 자체는 귀하의 기기를 절대 벗어나지 않으며, Mindpack AI 자체 서버에는 어떤 데이터도 전송되지 않습니다.',
    badge: '원본 파일 보호',
    icon: 'solar:shield-check-bold-duotone',
    color: 'emerald-accent',
    mockup: <AnalysisMockup />,
  },
  {
    num: '07',
    title: '즉시 보고 가능한 산출물',
    body: '분석이 완료되면 .pptx 파일이 자동 생성됩니다. 컨설팅 펌 수준의 논리 구조와 시각적 레이아웃이 적용된 프레젠테이션을 즉시 다운로드하십시오.',
    badge: '.pptx 자동 출력',
    icon: 'solar:presentation-graph-bold-duotone',
    color: 'gold',
    mockup: <OutputMockup />,
  },
];

const formats = [
  { ext: '.pdf', label: '보고서·백서·논문', icon: 'solar:file-text-bold-duotone' },
  { ext: '.docx', label: '기획안·제안서', icon: 'solar:document-text-bold-duotone' },
  { ext: '.pptx', label: '발표 자료', icon: 'solar:presentation-graph-bold-duotone' },
  { ext: '.xlsx', label: '재무 데이터', icon: 'solar:chart-square-bold-duotone' },
  { ext: '.txt', label: '텍스트 메모', icon: 'solar:text-bold-duotone' },
  { ext: '.csv', label: '구조화된 데이터', icon: 'solar:database-bold-duotone' },
];

const colorMap = {
  accent: 'text-accent-bright border-accent/20 bg-accent/[0.06]',
  'emerald-accent': 'text-emerald-accent border-emerald-accent/20 bg-emerald-accent/[0.06]',
  gold: 'text-gold border-gold/20 bg-gold/[0.06]',
};

export default function DemoPage() {
  return (
    <div>
      <PageHero
        eyebrow="Product Demo"
        headline={'설치부터 보고서 출력까지,\n6단계로 끝납니다.'}
        subCopy="복잡한 설정은 없습니다. 앱을 설치하고, 문서를 넣고, 프레임워크를 선택하면 보고서가 나옵니다."
      />

      {/* 6-step walkthrough */}
      <section className="w-full py-4 pb-32">
        <div className="section-container">
          <div className="flex flex-col gap-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}
              >
                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-[11px] text-ash/60 tracking-widest">STEP</span>
                    <span className="font-mono text-2xl font-bold text-accent/30 tracking-tight">{step.num}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-snow tracking-[-0.03em] mb-4">{step.title}</h3>
                  <p className="text-silver text-[14.5px] leading-[1.85] mb-6">{step.body}</p>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[12px] font-semibold ${colorMap[step.color]}`}>
                    <Icon icon={step.icon} className="w-3.5 h-3.5" />
                    {step.badge}
                  </span>
                </div>

                {/* Mockup */}
                <div className="flex-1 w-full">
                  <div className="card-bezel">
                    <div className="card-bezel-inner !p-0 overflow-hidden min-h-[220px] flex items-center justify-center">
                      {step.mockup}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-6">
              Before / After
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-[-0.04em]">
              동일한 작업, 다른 시간
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="card-bezel">
              <div className="card-bezel-inner">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-red-400/50" />
                  <span className="text-ash text-[12px] font-semibold tracking-widest uppercase">기존 방식</span>
                </div>
                <div className="text-3xl font-extrabold text-pearl mb-6">3시간</div>
                <ul className="flex flex-col gap-3">
                  {['문서 5건을 일일이 열어서 읽음', '메모장에 요약 정리', '논리 구조를 직접 설계', 'PowerPoint를 처음부터 작성', '디자인 및 레이아웃 정리'].map((t, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-ash text-[13px]">
                      <Icon icon="solar:close-circle-bold" className="w-4 h-4 text-ash/30 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* After */}
            <div className="relative rounded-[20px] p-[1px] bg-gradient-to-br from-emerald-accent/30 via-emerald-accent/10 to-transparent">
              <div className="rounded-[19px] bg-gradient-to-b from-carbon to-obsidian p-8 md:p-10 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-emerald-accent" />
                  <span className="text-emerald-accent text-[12px] font-semibold tracking-widest uppercase">Mindpack AI</span>
                </div>
                <div className="text-3xl font-extrabold text-emerald-accent mb-6">10초</div>
                <ul className="flex flex-col gap-3">
                  {['문서 5건 드래그 앤 드롭', '전처리 자동 실행', '프레임워크 선택 (1클릭)', 'Claude API 분석', '.pptx 자동 생성 완료'].map((t, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-silver text-[13px]">
                      <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-emerald-accent shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported formats */}
      <section className="w-full py-20 border-t border-white/[0.04]">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-xl font-extrabold text-snow tracking-[-0.03em] mb-3">지원 파일 포맷</h2>
            <p className="text-ash text-[13.5px]">6가지 포맷, 한 번에 최대 20개 파일</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {formats.map((f) => (
              <div key={f.ext} className="card-bezel">
                <div className="card-bezel-inner !py-5 !px-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/15 flex items-center justify-center shrink-0">
                    <Icon icon={f.icon} className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-snow font-bold text-[14px] font-mono">{f.ext}</div>
                    <div className="text-ash text-[11px] mt-0.5">{f.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        subCopy="얼리버드 50명 한정. 지금이 가장 낮은 가격입니다."
        primaryLabel="얼리버드 특가로 영구 소장하기"
        primaryHref="/pricing"
        secondaryLabel="보안이 걱정되십니까?"
        secondaryHref="/security"
      />
    </div>
  );
}

/* ── Mockup components ── */
function MockupShell({ children, title }) {
  return (
    <div className="w-full p-6 md:p-8">
      <div className="rounded-xl bg-void/80 border border-white/[0.06] overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
          {['bg-red-400/50','bg-yellow-400/50','bg-green-400/50'].map((c,i)=>(
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
          {title && <span className="ml-3 text-ash/50 text-[11px] font-mono">{title}</span>}
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

function InstallMockup() {
  return (
    <MockupShell title="Mindpack AI-v1.2.0.dmg">
      <div className="flex flex-col items-center gap-4 py-4">
        <Icon icon="solar:star-bold-duotone" className="w-16 h-16 text-accent" />
        <div className="text-snow text-[13px] font-medium">Mindpack AI.app</div>
        <div className="flex items-center gap-4">
          <div className="text-ash/50 text-[11px]">←</div>
          <div className="w-20 h-16 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
            <span className="text-ash/40 text-[10px]">Applications</span>
          </div>
        </div>
        <span className="text-emerald-accent text-[11px] bg-emerald-accent/[0.08] px-3 py-1 rounded-full border border-emerald-accent/15">CLI 없이 설치 완료</span>
      </div>
    </MockupShell>
  );
}

function ApiKeyMockup() {
  return (
    <MockupShell title="Claude API 연결">
      <div className="flex flex-col gap-4 py-2">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded-lg bg-gold/[0.08] border border-gold/20 flex items-center justify-center">
            <Icon icon="solar:key-bold-duotone" className="w-4 h-4 text-gold" />
          </div>
          <div>
            <div className="text-snow text-[13px] font-medium">Anthropic API 키 연결</div>
            <div className="text-ash/60 text-[10px]">console.anthropic.com에서 발급</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2.5">
          <span className="text-silver/40 font-mono text-[11px] flex-1">sk-ant-••••••••••••••••••••••</span>
          <Icon icon="solar:eye-closed-bold-duotone" className="w-3.5 h-3.5 text-ash/40" />
        </div>
        <div className="flex items-center gap-2 text-[11px] text-ash/60">
          <Icon icon="solar:lock-bold-duotone" className="w-3.5 h-3.5 text-emerald-accent/60 shrink-0" />
          OS 키체인에 저장 · 서버 전송 없음
        </div>
        <div className="w-full py-2 rounded-lg bg-gold/10 border border-gold/20 text-center text-gold text-[12px] font-semibold">
          연결 완료 ✓
        </div>
      </div>
    </MockupShell>
  );
}

function DropzoneMockup() {
  return (
    <MockupShell title="문서 투입">
      <div className="border-2 border-dashed border-accent/20 rounded-xl p-6 text-center">
        <Icon icon="solar:folder-open-bold-duotone" className="w-10 h-10 text-accent/40 mx-auto mb-3" />
        <p className="text-silver text-[12px] mb-3">파일을 드래그하거나 클릭하여 선택</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {['.pdf','.docx','.pptx','.xlsx'].map(e=>(
            <span key={e} className="text-[10px] font-mono text-accent/60 bg-accent/[0.06] px-2 py-0.5 rounded border border-accent/10">{e}</span>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

function TokenMockup() {
  return (
    <MockupShell title="전처리 결과">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-ash">원본 토큰</span>
          <span className="text-pearl font-mono">12,400</span>
        </div>
        <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
          <div className="h-full w-full bg-ash/20 rounded-full" />
        </div>
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-emerald-accent">정제 후 토큰</span>
          <span className="text-emerald-accent font-mono font-bold">7,440</span>
        </div>
        <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
          <div className="h-full w-[60%] bg-gradient-to-r from-emerald-accent/60 to-emerald-accent rounded-full" />
        </div>
        <div className="text-center mt-2">
          <span className="text-gold text-[11px] font-bold bg-gold/[0.06] px-3 py-1 rounded-full border border-gold/15">40% 절감</span>
        </div>
      </div>
    </MockupShell>
  );
}

function FrameworkMockup() {
  const frameworks = ['McKinsey 7S', 'Porter\'s Five Forces', 'SWOT 분석', '3C 분석'];
  return (
    <MockupShell title="프레임워크 선택">
      <div className="flex flex-col gap-2">
        {frameworks.map((f, i) => (
          <div key={f} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${i === 0 ? 'bg-accent/[0.1] border border-accent/20' : 'hover:bg-white/[0.03]'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-accent' : 'bg-ash/30'}`} />
            <span className={`text-[12px] ${i === 0 ? 'text-accent-bright font-semibold' : 'text-ash'}`}>{f}</span>
            {i === 0 && <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-accent ml-auto" />}
          </div>
        ))}
        <div className="text-ash/40 text-[10px] text-center mt-1">+ 8종 더보기</div>
      </div>
    </MockupShell>
  );
}

function AnalysisMockup() {
  return (
    <MockupShell title="분석 진행 중">
      <div className="flex flex-col items-center gap-5 py-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
            <Icon icon="solar:laptop-bold-duotone" className="w-4 h-4 text-ash" />
          </div>
          <div className="flex gap-1">
            {[0,1,2].map(i=>(
              <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/40"
                animate={{opacity:[0.3,1,0.3]}} transition={{duration:1.2,delay:i*0.3,repeat:Infinity}} />
            ))}
          </div>
          <div className="w-8 h-8 rounded-lg bg-accent/[0.08] border border-accent/15 flex items-center justify-center">
            <Icon icon="solar:star-bold-duotone" className="w-4 h-4 text-accent" />
          </div>
        </div>
        <div className="w-full bg-white/[0.04] rounded-full h-1.5 overflow-hidden">
          <motion.div className="h-full bg-gradient-to-r from-accent-deep to-accent rounded-full"
            initial={{width:'0%'}} animate={{width:'70%'}} transition={{duration:2,ease:'easeOut'}} />
        </div>
        <div className="flex gap-4 text-[11px]">
          <span className="text-emerald-accent flex items-center gap-1"><Icon icon="solar:shield-check-bold-duotone" className="w-3.5 h-3.5" />원본 파일 보호</span>
          <span className="text-ash">Mindpack AI 서버 경유 없음</span>
        </div>
      </div>
    </MockupShell>
  );
}

function OutputMockup() {
  return (
    <MockupShell title="결과물 생성 완료">
      <div className="flex flex-col gap-3">
        {['Executive Summary', '시장 현황 분석', '전략적 제언'].map((slide, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
            <div className="w-10 h-7 rounded bg-gradient-to-br from-accent-deep/30 to-accent/10 border border-accent/10 flex items-center justify-center shrink-0">
              <span className="text-[8px] text-accent/60 font-mono">{i+1}</span>
            </div>
            <span className="text-silver text-[12px]">{slide}</span>
          </div>
        ))}
        <button className="mt-2 w-full py-2 rounded-lg bg-gradient-to-r from-gold/80 to-gold-bright text-void text-[12px] font-bold">
          .pptx 다운로드
        </button>
      </div>
    </MockupShell>
  );
}

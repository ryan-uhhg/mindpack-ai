import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

// 3가지 무료 리소스 패키지 정의
const PACKAGES = [
  {
    id: 'frameworks',
    icon: 'solar:chart-square-bold-duotone',
    title: '전략 프레임워크 프롬프트',
    subtitle: '5종 MD 파일',
    description: 'McKinsey 7S · BCG Matrix · Porter\'s 5 Forces · SWOT · JTBD — AI에 붙여넣으면 컨설팅급 분석이 즉시 생성됩니다.',
    files: [
      { label: 'McKinsey 7S Framework', url: '/free-resources/frameworks/mckinsey-7s.md', ext: 'MD' },
      { label: 'BCG Matrix', url: '/free-resources/frameworks/bcg-matrix.md', ext: 'MD' },
      { label: "Porter's Five Forces", url: '/free-resources/frameworks/porters-five-forces.md', ext: 'MD' },
      { label: 'SWOT Analysis', url: '/free-resources/frameworks/swot-analysis.md', ext: 'MD' },
      { label: 'Jobs To Be Done', url: '/free-resources/frameworks/jobs-to-be-done.md', ext: 'MD' },
    ],
    accentColor: 'accent',
    badgeColor: 'bg-accent/10 text-accent border-accent/20',
    checkColor: 'text-accent',
  },
  {
    id: 'prompts',
    icon: 'solar:user-speak-bold-duotone',
    title: 'AI 역할 프롬프트',
    subtitle: '3종 MD 파일',
    description: '시장 분석가 · 전략 컨설턴트 · 데이터 분석가 — 전문가급 관점으로 AI를 세팅하는 시스템 프롬프트.',
    files: [
      { label: '시장 분석가 프롬프트', url: '/free-resources/prompts/market-analyst.md', ext: 'MD' },
      { label: '전략 컨설턴트 프롬프트', url: '/free-resources/prompts/consultant.md', ext: 'MD' },
      { label: '데이터 분석가 프롬프트', url: '/free-resources/prompts/data-analyst.md', ext: 'MD' },
    ],
    accentColor: 'gold',
    badgeColor: 'bg-gold/10 text-gold border-gold/20',
    checkColor: 'text-gold-bright',
  },
  {
    id: 'examples',
    icon: 'solar:presentation-graph-bold-duotone',
    title: '슬라이드 예시 모음',
    subtitle: '5종 HTML 파일',
    description: '프레임워크를 AI와 함께 실제로 작성했을 때 나오는 완성 슬라이드 예시. 고객사 제안서 수준.',
    files: [
      { label: 'McKinsey 7S 슬라이드 예시', url: '/free-resources/examples/mckinsey-7s-example.html', ext: 'HTML' },
      { label: 'BCG Matrix 슬라이드 예시', url: '/free-resources/examples/bcg-matrix-example.html', ext: 'HTML' },
      { label: "Porter's Forces 슬라이드 예시", url: '/free-resources/examples/porters-five-forces-example.html', ext: 'HTML' },
      { label: 'SWOT 슬라이드 예시', url: '/free-resources/examples/swot-example.html', ext: 'HTML' },
      { label: 'JTBD 슬라이드 예시', url: '/free-resources/examples/jtbd-example.html', ext: 'HTML' },
    ],
    accentColor: 'emerald-accent',
    badgeColor: 'bg-emerald-accent/10 text-emerald-accent border-emerald-accent/20',
    checkColor: 'text-emerald-accent',
  },
];

function ExtBadge({ ext }) {
  const colors = {
    MD: 'bg-accent/[0.08] text-accent/80 border-accent/15',
    HTML: 'bg-emerald-accent/[0.08] text-emerald-accent/80 border-emerald-accent/15',
  };
  return (
    <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold border ${colors[ext] || 'bg-white/[0.05] text-ash border-white/10'}`}>
      {ext}
    </span>
  );
}

function PackageCard({ pkg, selected, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full text-left rounded-2xl border transition-all duration-300 cursor-pointer p-5
        ${selected
          ? 'border-accent/30 bg-accent/[0.05] shadow-[0_0_0_1px_rgba(96,165,250,0.15)]'
          : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.03]'
        }
      `}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <div className={`
          mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200
          ${selected ? 'bg-accent border-accent' : 'border-white/20 bg-transparent'}
        `}>
          {selected && <Icon icon="solar:check-bold" className="w-3 h-3 text-white" />}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon={pkg.icon} className={`w-5 h-5 ${pkg.checkColor}`} />
            <span className="text-snow text-sm font-bold">{pkg.title}</span>
            <span className={`inline-block px-2 py-0.5 rounded-full border text-[10px] font-semibold ${pkg.badgeColor}`}>
              {pkg.subtitle}
            </span>
          </div>
          <p className="text-ash text-[12px] leading-[1.7] mb-3">{pkg.description}</p>

          {/* File list */}
          <div className="flex flex-wrap gap-1.5">
            {pkg.files.map((f) => (
              <span key={f.url} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] text-silver">
                <ExtBadge ext={f.ext} />
                {f.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function DownloadArea({ selectedIds }) {
  const selectedPkgs = PACKAGES.filter((p) => selectedIds.includes(p.id));
  const allFiles = selectedPkgs.flatMap((p) => p.files.map((f) => ({ ...f, pkg: p.title })));

  if (selectedIds.length === 0) {
    return (
      <div className="text-center py-6 text-ash/50 text-[13px]">
        위에서 받고 싶은 리소스를 선택하세요
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-2"
    >
      <p className="text-silver text-[12px] font-semibold mb-3">
        <Icon icon="solar:download-bold-duotone" className="inline w-4 h-4 mr-1 text-accent" />
        선택된 파일 {allFiles.length}개 — 클릭하여 개별 다운로드
      </p>
      {allFiles.map((f) => (
        <a
          key={f.url}
          href={f.url}
          download
          className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-accent/25 hover:bg-accent/[0.04] transition-all duration-200 group"
        >
          <div className="flex items-center gap-2 min-w-0">
            <ExtBadge ext={f.ext} />
            <span className="text-silver text-[12px] group-hover:text-pearl transition-colors duration-200 truncate">{f.label}</span>
          </div>
          <Icon icon="solar:download-minimalistic-linear" className="w-4 h-4 text-ash/40 group-hover:text-accent shrink-0 transition-colors duration-200" />
        </a>
      ))}
    </motion.div>
  );
}

export default function FreeDownloadSection() {
  const [selectedIds, setSelectedIds] = useState(['frameworks', 'prompts', 'examples']);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const togglePkg = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('올바른 이메일 주소를 입력해 주세요.');
      setStatus('error');
      return;
    }
    if (selectedIds.length === 0) {
      setErrorMsg('다운로드할 리소스를 하나 이상 선택해 주세요.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setErrorMsg(data.error || '오류가 발생했습니다. 다시 시도해 주세요.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      setStatus('error');
    }
  };

  return (
    <section id="free-email" className="w-full py-24 border-t border-white/[0.04]">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-medium tracking-wider uppercase mb-5">
              Free Resources
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-snow tracking-tight mb-3">
              무료 리소스 패키지
            </h2>
            <p className="text-silver text-[14px] leading-[1.8]">
              이메일 주소만 입력하면 즉시 다운로드. 스팸 없음, 언제든 구독 취소 가능.
            </p>
          </div>

          <div className="card-bezel">
            <div className="card-bezel-inner py-8 px-6 md:px-8 flex flex-col gap-6">
              {/* Step 1: 패키지 선택 */}
              <div>
                <p className="text-ash text-[11px] font-semibold uppercase tracking-widest mb-3">
                  Step 1 — 받고 싶은 리소스 선택
                </p>
                <div className="flex flex-col gap-3">
                  {PACKAGES.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      selected={selectedIds.includes(pkg.id)}
                      onToggle={() => togglePkg(pkg.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.04]" />

              {/* Step 2: 이메일 입력 또는 다운로드 */}
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-ash text-[11px] font-semibold uppercase tracking-widest mb-3">
                      Step 2 — 이메일 입력 후 받기
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                        placeholder="your@email.com"
                        className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl text-silver placeholder:text-ash/40 text-[13px] px-4 py-3 focus:outline-none focus:border-accent/40 focus:bg-white/[0.06] transition-all duration-200"
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading' || selectedIds.length === 0}
                        className="shrink-0 rounded-xl font-semibold text-[13px] transition-all duration-200 bg-accent/90 hover:bg-accent text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <Icon icon="solar:refresh-bold-duotone" className="w-4 h-4 animate-spin" />
                        ) : '무료로 받기'}
                      </button>
                    </form>
                    {status === 'error' && (
                      <p className="mt-2 text-red-400/80 text-[11px]">{errorMsg}</p>
                    )}
                    <p className="mt-2.5 text-ash/40 text-[11px]">
                      스팸 없음. 언제든 구독 취소 가능. 이메일로도 발송됩니다.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="download"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* 성공 메시지 */}
                    <div className="flex items-center gap-3 mb-5 p-4 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04]">
                      <div className="w-8 h-8 rounded-full bg-emerald-accent/10 border border-emerald-accent/20 flex items-center justify-center shrink-0">
                        <Icon icon="solar:check-circle-bold-duotone" className="w-4 h-4 text-emerald-accent" />
                      </div>
                      <div>
                        <p className="text-emerald-accent text-[13px] font-semibold">구독 완료! 이메일도 발송되었습니다.</p>
                        <p className="text-ash text-[11px]">아래에서 바로 다운로드하세요.</p>
                      </div>
                    </div>

                    {/* 다운로드 목록 */}
                    <DownloadArea selectedIds={selectedIds} />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </motion.div>

        {/* 가이드 링크 */}
        <div className="mt-6 text-center">
          <Link
            to="/guide"
            className="inline-flex items-center gap-1.5 text-ash/60 hover:text-accent text-[12px] transition-colors duration-200"
          >
            <Icon icon="ph:book-open-duotone" className="w-4 h-4" />
            받은 파일 어떻게 사용하나요? → 사용 가이드 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

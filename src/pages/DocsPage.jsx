import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import PageHero from '../components/shared/PageHero';
import AccordionFAQ from '../components/shared/AccordionFAQ';

const sysReqs = {
  macOS: [
    { label: 'OS', min: 'macOS 12 (Monterey) 이상', rec: 'macOS 14 (Sonoma) 이상' },
    { label: 'RAM', min: '8GB', rec: '16GB' },
    { label: '저장 공간', min: '5GB 여유', rec: '10GB 여유' },
    { label: '프로세서', min: 'Intel Core i5 / Apple M1', rec: 'Apple M2 이상' },
  ],
  Windows: [
    { label: 'OS', min: 'Windows 10 (21H2) 이상', rec: 'Windows 11' },
    { label: 'RAM', min: '8GB', rec: '16GB' },
    { label: '저장 공간', min: '5GB 여유', rec: '10GB 여유' },
    { label: '프로세서', min: 'Intel Core i5 8세대 / AMD Ryzen 5', rec: 'Intel Core i7 12세대 이상' },
  ],
};

const installSteps = [
  { step: '1', title: '다운로드 링크 확인', desc: '결제 완료 후 이메일로 수신된 다운로드 링크를 클릭합니다.' },
  { step: '2', title: '설치 파일 실행', desc: 'macOS: .dmg 파일을 열고 Mindpack AI.app을 Applications 폴더로 드래그합니다. Windows: .exe 설치 파일을 실행하고 안내에 따라 진행합니다.' },
  { step: '3', title: 'API 키 설정', desc: '최초 실행 시 Anthropic API 키 입력 화면이 표시됩니다. Anthropic Console에서 발급한 API 키를 입력하십시오. 사내 AI 서버를 사용하는 경우 엔드포인트 주소를 입력하십시오.' },
  { step: '4', title: '문서 투입 및 분석 시작', desc: '분석할 문서를 드래그 앤 드롭하고, 프레임워크를 선택한 뒤 분석 시작을 클릭합니다.' },
];

const faqInstall = [
  { q: 'API 키는 어디서 발급합니까?', a: 'Anthropic Console(console.anthropic.com)에서 발급할 수 있습니다. 계정 생성 후 API Keys 메뉴에서 새 키를 생성하십시오.' },
  { q: 'API 키를 입력했는데 오류가 발생합니다.', a: 'API 키 앞뒤의 공백을 확인하십시오. 키가 정상인데도 오류가 발생하면 Anthropic 계정의 크레딧 잔액을 확인하십시오. 잔액이 부족하면 분석이 실행되지 않습니다.' },
  { q: 'macOS에서 "개발자를 확인할 수 없음" 메시지가 표시됩니다.', a: '시스템 환경설정 → 개인 정보 보호 및 보안 → "확인 없이 열기"를 클릭하십시오. 또는 터미널에서 xattr -cr /Applications/Mindpack AI.app 을 실행하십시오.' },
  { q: 'Windows에서 Defender가 차단합니다.', a: '"추가 정보" 클릭 후 "실행" 버튼을 누르십시오. 최초 실행 시에만 표시되는 경고입니다.' },
];

export default function DocsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Documentation"
        headline={'시작하기'}
        subCopy="설치부터 첫 분석까지, 10분이면 충분합니다."
      />

      {/* Quick nav */}
      <section className="pb-8">
        <div className="section-container max-w-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: '시스템 요구사항', href: '#requirements', icon: 'solar:monitor-bold-duotone' },
              { label: '설치 방법', href: '#install', icon: 'solar:download-minimalistic-bold-duotone' },
              { label: '첫 번째 분석', href: '#first-run', icon: 'solar:play-circle-bold-duotone' },
              { label: 'FAQ', href: '/docs/faq', icon: 'solar:question-circle-bold-duotone' },
            ].map(item => (
              <Link key={item.href} to={item.href.startsWith('/') ? item.href : undefined}
                href={item.href.startsWith('#') ? item.href : undefined}
                onClick={item.href.startsWith('#') ? (e) => { e.preventDefault(); document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' }); } : undefined}
                className="card-bezel block"
              >
                <div className="card-bezel-inner !py-4 flex flex-col items-center gap-2 text-center">
                  <Icon icon={item.icon} className="w-5 h-5 text-accent" />
                  <span className="text-silver text-[12px] font-medium">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* System requirements */}
      <section id="requirements" className="py-16 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl font-extrabold text-snow tracking-tight mb-2">시스템 요구사항</h2>
          <p className="text-ash text-[13.5px] mb-8">일반 업무용 노트북이면 충분합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.entries(sysReqs).map(([os, rows]) => (
              <div key={os} className="card-bezel">
                <div className="card-bezel-inner !p-0 overflow-hidden">
                  <div className="flex items-center gap-2 px-6 py-4 border-b border-white/[0.05] bg-white/[0.02]">
                    <Icon icon={os === 'macOS' ? 'solar:apple-bold-duotone' : 'solar:windows-bold-duotone'} className="w-4 h-4 text-accent" />
                    <span className="text-ivory font-bold text-[14px]">{os}</span>
                  </div>
                  <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px]">
                    <thead>
                      <tr className="border-b border-white/[0.04]">
                        <th className="text-left px-5 py-2.5 text-ash text-[11px]">항목</th>
                        <th className="text-left px-4 py-2.5 text-ash text-[11px]">최소</th>
                        <th className="text-left px-4 py-2.5 text-emerald-accent text-[11px]">권장</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={i} className="border-b border-white/[0.03]">
                          <td className="px-5 py-2.5 text-ash text-[12px]">{r.label}</td>
                          <td className="px-4 py-2.5 text-silver text-[12px]">{r.min}</td>
                          <td className="px-4 py-2.5 text-emerald-accent text-[12px] font-medium">{r.rec}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install steps */}
      <section id="install" className="py-16 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl font-extrabold text-snow tracking-tight mb-2">설치 방법</h2>
          <p className="text-ash text-[13.5px] mb-8">CLI가 없습니다. 일반 앱처럼 설치합니다.</p>
          <div className="flex flex-col gap-4">
            {installSteps.map((s) => (
              <div key={s.step} className="flex gap-4 card-bezel">
                <div className="card-bezel-inner flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/[0.1] border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold text-[13px]">{s.step}</span>
                  </div>
                  <div>
                    <div className="text-ivory font-semibold text-[14px] mb-1">{s.title}</div>
                    <div className="text-silver text-[13px] leading-[1.75]">{s.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First run */}
      <section id="first-run" className="py-16 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl font-extrabold text-snow tracking-tight mb-2">첫 번째 분석 실행</h2>
          <p className="text-ash text-[13.5px] mb-8">설치 완료 후 첫 분석까지 5분이면 충분합니다.</p>
          <div className="card-bezel">
            <div className="card-bezel-inner">
              <ol className="space-y-5">
                {[
                  '분석할 문서 파일을 앱 화면에 드래그 앤 드롭합니다 (PDF, DOCX, PPTX, XLSX 등)',
                  '전처리 진행 상태를 확인합니다 — 자동으로 토큰 다이어트가 진행됩니다',
                  '목적에 맞는 컨설팅 프레임워크를 드롭다운에서 선택합니다',
                  '"분석 시작" 버튼을 클릭합니다',
                  '분석 완료 후 자동 생성된 .pptx 파일을 지정 폴더에서 확인합니다',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-accent/[0.1] border border-emerald-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-accent font-bold text-[11px]">{i + 1}</span>
                    </div>
                    <span className="text-silver text-[13.5px] leading-[1.75]">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 border-t border-white/[0.04]">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl font-extrabold text-snow tracking-tight mb-8">설치 FAQ</h2>
          <AccordionFAQ items={faqInstall} />
          <div className="mt-8 text-center">
            <Link to="/docs/faq" className="text-accent text-[13px] font-medium hover:opacity-80 transition-opacity">
              전체 FAQ 보기 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const footerLinks = {
  제품: [
    { label: '데모 체험', href: '/demo' },
    { label: '생산성 스킬', href: '/productivity-skills' },
    { label: '활용 사례', href: '/use-cases' },
    { label: '보안 · 개인정보', href: '/security' },
  ],
  지원: [
    { label: '시작하기', href: '/docs' },
    { label: '사용 가이드', href: '/guide' },
    { label: '자주 묻는 질문', href: '/docs/faq' },
    { label: '업데이트 내역', href: '/changelog' },
    { label: '시스템 요구사항', href: '/docs/requirements' },
  ],
  회사: [
    { label: '소개', href: '/about' },
    { label: '요금제', href: '/pricing' },
    { label: '고객 후기', href: '/reviews' },
  ],
  법적고지: [
    { label: '이용약관', href: '/terms' },
    { label: '개인정보처리방침', href: '/privacy' },
    { label: '환불 정책', href: '/refund' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/[0.04]">
      {/* Main footer grid */}
      <div className="section-container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-glow to-accent-deep flex items-center justify-center">
                <Icon icon="solar:star-bold-duotone" className="w-4 h-4 text-white" />
              </div>
              <span className="text-ivory font-extrabold text-sm tracking-tight">Mindpack AI</span>
            </Link>
            <p className="text-ash text-xs leading-[1.8] mb-5">
              기획자의 시간은 텍스트 정리가 아닌,<br />결정에 쓰여야 합니다.
            </p>
            <a
              href="mailto:mindpackai.help@gmail.com"
              className="text-ash/60 text-[11px] hover:text-silver transition-colors duration-200"
            >
              mindpackai.help@gmail.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-ivory/60 text-[10px] font-semibold tracking-widest uppercase mb-4">
                {category === '법적고지' ? '법적 고지' : category}
              </h4>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-ash text-xs hover:text-pearl transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.03]">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-ash/50 text-[11px]">
            © 2026 Mindpack AI. Private Intelligence System. All rights reserved.
          </p>
          <p className="text-ash/40 text-[11px]">
            Powered by Claude API (Anthropic) · 원본 파일은 업로드되지 않습니다
          </p>
        </div>
      </div>
    </footer>
  );
}

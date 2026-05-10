import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const productLinks = [
  { label: '데모 체험', href: '/demo', icon: 'solar:play-circle-bold-duotone', desc: '5분 안에 당신의 시스템 만들기' },
  { label: '생산성 스킬', href: '/productivity-skills', icon: 'solar:library-bold-duotone', desc: '14개 검증된 프레임워크' },
  { label: '활용 사례', href: '/use-cases', icon: 'solar:case-bold-duotone', desc: '직업별 실제 효과 확인' },
  { label: '보안 · 개인정보', href: '/security', icon: 'solar:shield-check-bold-duotone', desc: 'E2E 암호화 & GDPR 준수' },
];

const guideLinks = [
  { label: '시작하기', href: '/docs', icon: 'solar:book-bold-duotone' },
  { label: '자주 묻는 질문', href: '/docs/faq', icon: 'solar:question-circle-bold-duotone' },
  { label: '업데이트 내역', href: '/changelog', icon: 'solar:refresh-circle-bold-duotone' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const productRef = useRef(null);
  const guideRef = useRef(null);
  const { pathname } = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductOpen(false);
    setGuideOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClick = (e) => {
      if (productRef.current && !productRef.current.contains(e.target)) setProductOpen(false);
      if (guideRef.current && !guideRef.current.contains(e.target)) setGuideOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.14 } },
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-void/80 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-glow to-accent-deep flex items-center justify-center">
            <Icon icon="solar:star-bold-duotone" className="w-4 h-4 text-white" />
          </div>
          <span className="text-ivory font-extrabold text-sm tracking-tight group-hover:text-snow transition-colors duration-300">
            Mindpack AI
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">

          {/* 제품 드롭다운 */}
          <div ref={productRef} className="relative">
            <button
              onClick={() => { setProductOpen(!productOpen); setGuideOpen(false); }}
              className="flex items-center gap-1 text-ash text-[13.5px] font-medium hover:text-pearl transition-colors duration-300 py-1"
            >
              제품
              <Icon
                icon="solar:alt-arrow-down-bold"
                className={`w-3 h-3 transition-transform duration-200 ${productOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {productOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl bg-obsidian/95 backdrop-blur-2xl border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <div className="p-2">
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-200 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/[0.08] border border-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon icon={link.icon} className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <div className="text-ivory text-[13px] font-semibold group-hover:text-snow transition-colors">{link.label}</div>
                          <div className="text-ash text-[11px] leading-[1.5] mt-0.5">{link.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 요금제 */}
          <Link
            to="/pricing"
            className="text-ash text-[13.5px] font-medium hover:text-pearl transition-colors duration-300 relative group py-1"
          >
            요금제
            <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>

          {/* 가이드 드롭다운 */}
          <div ref={guideRef} className="relative">
            <button
              onClick={() => { setGuideOpen(!guideOpen); setProductOpen(false); }}
              className="flex items-center gap-1 text-ash text-[13.5px] font-medium hover:text-pearl transition-colors duration-300 py-1"
            >
              가이드
              <Icon
                icon="solar:alt-arrow-down-bold"
                className={`w-3 h-3 transition-transform duration-200 ${guideOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {guideOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl bg-obsidian/95 backdrop-blur-2xl border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                  <div className="p-2">
                    {guideLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors duration-200 group"
                      >
                        <Icon icon={link.icon} className="w-4 h-4 text-accent/60" />
                        <span className="text-silver text-[13px] font-medium group-hover:text-pearl transition-colors">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 소개 */}
          <Link
            to="/about"
            className="text-ash text-[13.5px] font-medium hover:text-pearl transition-colors duration-300 relative group py-1"
          >
            소개
            <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <Link to="/pricing">
            <button className="group inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-accent/[0.08] border border-accent/20 text-accent-bright text-[13px] font-semibold hover:bg-accent/[0.15] hover:border-accent/35 transition-all duration-300">
              얼리버드 특가
              <Icon icon="solar:arrow-right-bold" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/[0.05] transition-colors duration-200"
          aria-label="메뉴 열기"
        >
          <Icon
            icon={mobileOpen ? 'solar:close-circle-bold-duotone' : 'solar:hamburger-menu-bold-duotone'}
            className="w-5 h-5 text-silver"
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-obsidian/95 backdrop-blur-2xl border-b border-white/[0.04]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {/* 제품 그룹 */}
              <p className="text-ash/60 text-[10px] font-semibold tracking-widest uppercase mb-2 mt-1">제품</p>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-3 py-2.5 text-silver text-[14px] font-medium hover:text-pearl transition-colors duration-200"
                >
                  <Icon icon={link.icon} className="w-4 h-4 text-accent/60" />
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/[0.04] my-3" />
              {/* 요금제 / 소개 */}
              <Link to="/pricing" className="py-2.5 text-silver text-[14px] font-medium hover:text-pearl transition-colors duration-200">요금제</Link>
              <Link to="/about" className="py-2.5 text-silver text-[14px] font-medium hover:text-pearl transition-colors duration-200">소개</Link>
              <div className="h-px bg-white/[0.04] my-3" />
              {/* 가이드 그룹 */}
              <p className="text-ash/60 text-[10px] font-semibold tracking-widest uppercase mb-2">가이드</p>
              {guideLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="py-2.5 text-silver text-[14px] font-medium hover:text-pearl transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/[0.04] my-3" />
              <Link to="/pricing">
                <button className="w-full py-3 rounded-xl bg-accent/[0.1] border border-accent/20 text-accent-bright text-sm font-semibold hover:bg-accent/[0.18] transition-all duration-300">
                  얼리버드 특가로 소장하기
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

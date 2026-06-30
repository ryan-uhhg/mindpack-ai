# Framer-Motion Inventory — Mindpack AI Redesign

## Summary
- **20 files** use framer-motion
- **~79 motion.div instances** across src/
- **12 AnimatePresence** usages
- **4 useScroll/useTransform** (HeroSection only)
- **~20 whileInView** reveal animations
- **~10 hover/tap** micro-interactions

## Classification

### KEEP — Functional UX motion (no change)
| File | Instances | Reason |
|------|-----------|--------|
| Navbar.jsx | header entrance, 4x AnimatePresence dropdowns | UX 필수, scroll hide/show |
| AccordionFAQ.jsx | AnimatePresence + height animate | 기능적 확장/축소 |
| FreeDownloadSection.jsx | AnimatePresence modal, whileTap scale | 폼 전환, UX 피드백 |
| DemoPage.jsx | AnimatePresence tab 전환, whileHover/tap | 기능적 상호작용 |
| ProductivitySkillsPage.jsx | AnimatePresence 필터 전환 | 기능적 |
| UseCasesPage.jsx | AnimatePresence 상세 패널 | 기능적 |
| HeroSection.jsx | whileInView fadeUp chips, useScroll parallax (y, opacity) | Hero scroll parallax는 유지 |
| VisualProofSection.jsx | whileInView fadeUp cards | 진입 시 1회 |
| FounderNoteSection.jsx | whileInView fadeUp + bar chart width grow | 진입 시 1회 |
| PricingSection.jsx | whileInView fadeUp | 진입 시 1회 |
| ProblemReliefSection.jsx | whileInView fadeUp | 진입 시 1회 |
| SecurityPage.jsx | whileInView fadeUp | 진입 시 1회 |
| AboutPage.jsx | whileInView fadeUp | 진입 시 1회 |
| PageHero.jsx | entrance animate | 페이지 진입 1회 |

### REMOVE — AI slop / decorative animation
| File | Lines | Pattern | Reason |
|------|-------|---------|--------|
| HeroSection.jsx | 115-121 | `motion.div animate={{ y: [0,6,0] }} repeat: Infinity` | bounce-hint 제거됨, scroll down indicator |
| HeroSection.jsx | 116 | `initial opacity:0 → animate opacity:1 delay:1.5` | 느린 entrance. duration 단축 |

### MODIFY — 축소/단순화
| File | Change |
|------|--------|
| 모든 whileInView | `transition={{ duration: 0.6 }}` 유지하되 `delay` chain 제거 (delay는 REMOVE 대상 아님, but 0.5+는 과함) |
| HeroSection fadeUp | custom delay 0.15→0.1, 총 지속시간 2s→1s |
| VisualProofSection delay | 0.5→0.3 |

## Total: 20 KEEP / 1 REMOVE / 3 MODIFY

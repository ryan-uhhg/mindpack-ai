import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, headline, subCopy, children }) {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.06] text-accent text-xs font-semibold tracking-widest uppercase mb-10">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-[-0.04em] leading-[1.25] mb-10 whitespace-pre-line max-w-[18ch] md:max-w-none mx-auto">
            {headline}
          </h1>
          {subCopy && (
            <p className="text-text-secondary text-base md:text-lg leading-[1.9] max-w-xl mx-auto mb-12 text-center">
              {subCopy}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
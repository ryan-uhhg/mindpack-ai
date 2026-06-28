import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function AccordionFAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={i} className="card-bezel">
          <div className="card-bezel-inner !py-0 !px-0 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left cursor-pointer"
            >
              <span className="text-text-primary text-[14px] font-semibold leading-[1.5]">{item.q}</span>
              <Icon
                icon="solar:alt-arrow-down-bold"
                className={`w-4 h-4 text-accent/60 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 border-t border-border-light/50">
                    <p className="text-text-secondary text-[13.5px] leading-[1.85] pt-5">{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
}
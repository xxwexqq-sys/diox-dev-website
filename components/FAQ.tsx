import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqItems } from '@/data/faq';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="container-shell py-24 md:py-28">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">FAQ</p>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Частые вопросы</h2>
      </div>

      <div className="space-y-3">
        {faqItems.map((item) => {
          const isOpen = item.id === openId;
          return (
            <div key={item.id} className="panel overflow-hidden rounded-[20px] border border-white/10">
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
              >
                <span className="text-base font-medium text-white md:text-lg">{item.question}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-violet-200">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-7 text-zinc-300 md:px-6">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

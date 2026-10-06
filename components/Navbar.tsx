'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Главная', href: '#home' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/50 backdrop-blur-xl border-b border-white/5">
      <nav className="container-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-[0.2em] text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-violet-400/30 bg-violet-500/10 text-[10px] text-violet-200 shadow-glow">D</span>
          DIOX DEV
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#cta" className="inline-flex items-center rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100 transition hover:border-violet-300 hover:bg-violet-500/20">
            Заказать проект
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={cn('block h-0.5 w-5 rounded-full bg-white transition', open && 'translate-y-2 rotate-45')} />
            <span className={cn('block h-0.5 w-5 rounded-full bg-white transition', open && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 rounded-full bg-white transition', open && '-translate-y-2 -rotate-45')} />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-white/5 bg-[#080808]/90 px-4 pb-5 md:hidden"
        >
          <div className="space-y-3 pt-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-zinc-200" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 block rounded-full bg-violet-600 px-4 py-3 text-center text-sm font-medium text-white" onClick={() => setOpen(false)}>
              Заказать проект
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

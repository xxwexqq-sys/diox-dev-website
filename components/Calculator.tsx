'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const projectTypes = ['Семейный бот', 'Организация', 'GTA 5 RP', 'Бот на заказ'];
const complexity = ['Базовая', 'Средняя', 'Продвинутая'];
const extras = ['Логи', 'Панель управления', 'База данных', 'Web Dashboard', 'API', 'Система заявок', 'Авторизация', 'Статистика'];

const basePrices: Record<string, number> = {
  'Семейный бот': 750,
  'Организация': 950,
  'GTA 5 RP': 1200,
  'Бот на заказ': 1500,
};

const complexityMultiplier: Record<string, number> = {
  'Базовая': 1,
  'Средняя': 1.45,
  'Продвинутая': 2.1,
};

export function Calculator() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [level, setLevel] = useState(complexity[1]);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['Логи', 'База данных']);

  const total = useMemo(() => {
    const base = basePrices[projectType] ?? 1000;
    const multiplier = complexityMultiplier[level] ?? 1;
    const extraTotal = selectedExtras.length * 180;
    return Math.round(base * multiplier + extraTotal);
  }, [projectType, level, selectedExtras]);

  const toggleExtra = (item: string) => {
    setSelectedExtras((prev) => (prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]));
  };

  return (
    <section id="calculator" className="container-shell py-24 md:py-28">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">Рассчитать стоимость</p>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Оценка проекта без лишней бюрократии</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="panel rounded-[28px] p-5 md:p-7"
        >
          <div className="space-y-7">
            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-zinc-400">Тип проекта</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={
                      type === projectType
                        ? 'rounded-2xl border border-white/20 bg-white/[0.08] px-4 py-3 text-left text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)] transition'
                        : 'rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04]'
                    }
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-zinc-400">Сложность</h3>
              <div className="grid gap-3 md:grid-cols-3">
                {complexity.map((levelItem) => (
                  <button
                    key={levelItem}
                    type="button"
                    onClick={() => setLevel(levelItem)}
                    className={
                      levelItem === level
                        ? 'rounded-2xl border border-white/20 bg-white/[0.08] px-4 py-3 text-sm font-medium text-white transition'
                        : 'rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04]'
                    }
                  >
                    {levelItem}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm uppercase tracking-[0.18em] text-zinc-400">Дополнительные функции</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {extras.map((item) => {
                  const checked = selectedExtras.includes(item);
                  return (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleExtra(item)}
                        className="custom-check"
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="panel rounded-[28px] p-6 md:p-8"
        >
          <p className="text-sm uppercase tracking-[0.16em] text-zinc-400">Предварительная стоимость</p>
          <div className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-white">${total}</div>
          <p className="mt-3 text-sm text-zinc-300">Итоговая стоимость рассчитывается после обсуждения технического задания.</p>
          <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.08]">Обсудить проект</a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { siteConfig } from '@/config';

const primaryActions = [
  { label: 'Заказать бота', href: '#cta', variant: 'primary' },
  { label: 'Наши проекты', href: '#projects', variant: 'secondary' },
];

export function Hero() {
  return (
    <section id="home" className="container-shell relative pt-20 pb-20 md:pt-28 md:pb-24">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-violet-100">
            {siteConfig.brandName}
          </div>
          <h1 className="text-5xl font-semibold leading-none tracking-[-0.04em] text-white md:text-7xl">
            Discord-боты,<br />
            <span className="text-gradient">которые работают за вас.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-zinc-300">
            Создаём кастомные Discord-решения для Majestic RP, GTA 5 RP, игровых сообществ и бизнеса.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className={
                  action.variant === 'primary'
                    ? 'inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500'
                    : 'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/50 hover:bg-violet-500/10'
                }
              >
                {action.label}
              </a>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-zinc-400">
            <span>Custom bots</span>
            <span>Automation</span>
            <span>Support</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[32px] bg-violet-500/10 blur-2xl" />
          <div className="panel card-shine relative overflow-hidden rounded-[28px] border border-violet-400/20 bg-[#0d0d0f]/80 p-5 shadow-card">
            <div className="mb-4 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <span>dashboard / live</span>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#111114] p-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">Server status</p>
                  <h3 className="mt-1 text-xl font-semibold">DIOX Control</h3>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300">
                  online
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['Роли', '132'],
                  ['Логи', '19.2k'],
                  ['Команды', '86'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-3">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {[
                  ['Moderation', '96%'],
                  ['Automation', '88%'],
                  ['Stability', '99.9%'],
                ].map(([label, value], index) => (
                  <div key={label}>
                    <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-violet-300"
                        style={{ width: `${65 + index * 12}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

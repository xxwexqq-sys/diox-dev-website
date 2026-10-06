'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';

export function Services() {
  return (
    <section id="services" className="container-shell py-24 md:py-28">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">Услуги</p>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Решения для серверов любого масштаба</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="panel card-shine group relative overflow-hidden rounded-[26px] p-5 md:p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">0{service.id}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-2xl shadow-glow">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{service.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

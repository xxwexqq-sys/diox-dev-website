import { motion } from 'framer-motion';
import { advantages } from '@/data/advantages';

export function Advantages() {
  return (
    <section id="advantages" className="container-shell py-24 md:py-28">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">Почему мы</p>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Инструменты, которые оправдывают доверие</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {advantages.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="panel rounded-[24px] p-5 md:p-6"
          >
            <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-200">0{item.id}</div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Technologies() {
  return (
    <section className="container-shell py-24 md:py-28">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">Технологии</p>
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Стек, который помогает масштабировать продукт</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {['Node.js', 'TypeScript', 'Discord.js', 'PostgreSQL', 'MongoDB', 'Redis', 'React', 'Next.js', 'Express', 'Docker', 'REST API', 'Web Dashboard'].map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200">{tech}</span>
        ))}
      </div>
    </section>
  );
}

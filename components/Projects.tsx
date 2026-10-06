'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  const activeProject = useMemo(() => selectedProject, [selectedProject]);

  return (
    <>
      <section id="projects" className="container-shell py-24 md:py-28">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">Наши проекты</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Готовые решения, которые реально работают</h2>
          </div>
          <a href="#cta" className="text-sm font-medium text-violet-200 transition hover:text-violet-100">Рассчитать стоимость →</a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="panel card-shine group relative overflow-hidden rounded-[26px] p-5 text-left"
            >
              <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                <span>{project.category}</span>
                <span>0{project.id}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{project.shortDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-violet-200">Посмотреть детали →</div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050505]/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              className="panel max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/10 p-5 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-violet-200">{activeProject.category}</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{activeProject.title}</h3>
                </div>
                <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">Закрыть</button>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="rounded-[22px] border border-white/10 bg-[#111114] p-5">
                    <p className="text-sm leading-7 text-zinc-300">{activeProject.description}</p>
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-sm uppercase tracking-[0.16em] text-zinc-400">Задачи</h4>
                      <ul className="space-y-3 text-sm text-zinc-300">
                        {activeProject.tasks.map((task) => <li key={task}>• {task}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm uppercase tracking-[0.16em] text-zinc-400">Функционал</h4>
                      <ul className="space-y-3 text-sm text-zinc-300">
                        {activeProject.features.map((feature) => <li key={feature}>• {feature}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[22px] border border-white/10 bg-[#111114] p-5">
                    <h4 className="text-sm uppercase tracking-[0.16em] text-zinc-400">Технологии</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-violet-100">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-[#111114] p-5">
                    <h4 className="text-sm uppercase tracking-[0.16em] text-zinc-400">Результаты</h4>
                    <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                      {activeProject.results.map((result) => <li key={result}>• {result}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

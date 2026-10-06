import { siteConfig } from '@/config';

export function CTA() {
  return (
    <section id="cta" className="container-shell py-24 md:py-28">
      <div className="panel relative overflow-hidden rounded-[32px] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-[#111114] to-[#0d0d0f] p-8 md:p-12">
        <div className="absolute -left-10 top-8 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-8 bottom-8 h-52 w-52 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-200">Есть идея для Discord-бота?</p>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">Расскажите о задаче — мы превратим её в готовое решение.</h2>
          <a href={siteConfig.discordUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:bg-violet-500">Обсудить проект</a>
        </div>
      </div>
    </section>
  );
}

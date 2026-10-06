import { siteConfig } from '@/config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container-shell pb-10 pt-6">
      <div className="panel rounded-[28px] p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold tracking-[0.18em] text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-violet-400/30 bg-violet-500/10 text-[10px] text-violet-200">D</span>
              {siteConfig.brandName}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-300">Discord-разработка нового поколения.</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Навигация</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li><a href="#home">Главная</a></li>
              <li><a href="#services">Услуги</a></li>
              <li><a href="#projects">Проекты</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Контакты</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li><a href={siteConfig.discordUrl} target="_blank" rel="noreferrer">Discord</a></li>
              <li><a href={siteConfig.telegramUrl} target="_blank" rel="noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <span>© {year} {siteConfig.brandName}</span>
          <span>Все права защищены.</span>
        </div>
      </div>
    </footer>
  );
}

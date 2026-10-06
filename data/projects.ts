export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  technologies: string[];
  tasks: string[];
  features: string[];
  results: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'Majestic Family Bot',
    category: 'Family System',
    description: 'Комплексная система управления семьёй, ролями, статистикой и внутренними процессами для Majestic RP.',
    shortDescription: 'Полнофункциональная семья для Majestic RP',
    technologies: ['Node.js', 'TypeScript', 'Discord.js', 'PostgreSQL', 'Redis'],
    tasks: ['Система ролей и статусов', 'Логическое распределение доступов', 'Интеграция с базой данных'],
    features: ['Статистика семьи', 'Роли и управление', 'Логи', 'Автоматизация процессов'],
    results: ['Поддержка 15+ семей', '99.9% стабильности', 'Снижение нагрузки на администраторов'],
  },
  {
    id: 2,
    title: 'Organization Manager',
    category: 'GTA 5 RP',
    description: 'Управление всеми процессами внутри организации: заявка, роли, экономика, статистика и модерация.',
    shortDescription: 'Система управления организациями',
    technologies: ['Node.js', 'TypeScript', 'MongoDB', 'Discord.js', 'Express'],
    tasks: ['Подготовка архитектуры', 'Интеграция с API', 'Настройка логов и ролей'],
    features: ['Система заявок', 'Экономика', 'Управление участниками', 'Логирование'],
    results: ['8+ организаций в работе', 'Ускорение обработки заявок', 'Повышение контроля и прозрачности'],
  },
  {
    id: 3,
    title: 'Discord Control',
    category: 'Automation',
    description: 'Готовая автоматизированная система для Discord-сервера: модерация, события, статистика и кастомные команды.',
    shortDescription: 'Автоматизация сервера и процессов',
    technologies: ['Node.js', 'TypeScript', 'Discord.js', 'MongoDB', 'REST API'],
    tasks: ['Создание команд и модерации', 'Сбор аналитики', 'Интеграции и события'],
    features: ['Авто-ответы', 'Логирование', 'Команды', 'Система уровней'],
    results: ['50+ установок', '100k+ обработанных событий', 'Стабильная поддержка сообщества'],
  },
];

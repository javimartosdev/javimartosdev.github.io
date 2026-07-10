export interface ProjectEntry {
  id: string;
  github?: string;
  live?: string;
  stack: string[];
}

export const projects: ProjectEntry[] = [
  {
    id: 'habit-dock',
    github: 'https://github.com/javimartosdev/habit-dock',
    live: 'https://habit-dock.vercel.app',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'PWA'],
  },
  {
    id: 'pomodoro-java',
    github: 'https://github.com/javimartosdev/Pomodoro-Java',
    stack: ['Java 17'],
  },
  {
    id: 'inventario',
    stack: ['PHP', 'MySQL'],
  },
];

export const stackTags = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'PHP',
  'Java',
  'MySQL',
  'Next.js',
  'PostgreSQL',
  'Tailwind CSS',
  'PWA',
  'Astro',
];

export type Locale = 'es' | 'en';

export interface Translation {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    projects: string;
    experience: string;
    education: string;
  };
  hero: {
    name: string;
    subtitle: string;
    location: string;
  };
  sections: {
    about: string;
    projects: string;
    experience: string;
    stack: string;
    languages: string;
    softSkills: string;
    education: string;
    complementary: string;
  };
  about: string;
  experience: {
    role: string;
    company: string;
    period: string;
    items: string[];
  };
  languages: {
    english: string;
  };
  softSkills: string[];
  education: {
    daw: { title: string; school: string };
    bachillerato: { title: string; school: string };
  };
  complementary: Array<{ title: string; school: string }>;
  liveDemo: string;
  projects: Record<
    string,
    {
      title: string;
      description: string;
      status?: string;
    }
  >;
  downloadCv: string;
  footer: string;
  theme: {
    light: string;
    dark: string;
  };
  language: {
    es: string;
    en: string;
  };
}

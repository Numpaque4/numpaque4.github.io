import type { SectionMeta } from './types';

export const sections: SectionMeta[] = [
  {
    id: 'education',
    heading: { en: 'Education', es: 'Educación' },
    weight: { academic: 1, industry: 5 },
  },
  {
    id: 'research',
    heading: { en: 'Research Experience', es: 'Experiencia en Investigación' },
    weight: { academic: 2, industry: 3 },
    hideInMode: 'industry',
  },
  {
    id: 'publications',
    heading: { en: 'Publications', es: 'Publicaciones' },
    weight: { academic: 3, industry: 4 },
  },
  {
    id: 'conferences',
    heading: { en: 'Conferences', es: 'Congresos' },
    weight: { academic: 4, industry: 7 },
  },
  {
    id: 'technical',
    heading: { en: 'Technical Experience', es: 'Experiencia Técnica' },
    weight: { academic: 5, industry: 2 },
    hideInMode: 'academic',
  },
  {
    id: 'outreach',
    heading: { en: 'Outreach & Teaching', es: 'Divulgación y Docencia' },
    weight: { academic: 6, industry: 6 },
  },
  {
    id: 'skills',
    heading: { en: 'Skills', es: 'Habilidades' },
    weight: { academic: 7, industry: 1 },
  },
  {
    id: 'languages',
    heading: { en: 'Languages', es: 'Idiomas' },
    weight: { academic: 8, industry: 9 },
  },
  {
    id: 'certifications',
    heading: { en: 'Certifications', es: 'Certificaciones' },
    weight: { academic: 9, industry: 8 },
  },
  {
    id: 'references',
    heading: { en: 'References', es: 'Referencias' },
    weight: { academic: 10, industry: 10 },
  },
];

import type { EducationEntry } from './types';

export const education: EducationEntry = {
  degree: { en: 'BSc in Astronomy', es: 'Pregrado en Astronomía' },
  institution: { en: 'University of Antioquia', es: 'Universidad de Antioquia' },
  location: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
  startYear: 2021,
  expectedEnd: { en: 'Expected graduation: June 2026', es: 'Graduación esperada: junio de 2026' },
  honors: [
    {
      text: {
        en: 'Outstanding Advanced Student in Astronomy (2025)',
        es: 'Distinción de Reconocimiento a Mejor Estudiante Avanzado en Astronomía (2025)',
      },
      url: 'https://drive.google.com/file/d/1U0p9EjMKj7JTylV96l90XCa1OudIKOIy/view?usp=sharing',
    },
  ],
  courses: [
    {
      id: 'research-project-design',
      title: { en: 'Research Project Design', es: 'Formulación de Proyectos de Investigación' },
      provider: {
        en: 'Office of Research, University of Antioquia',
        es: 'Vicerrectoría de Investigación, Universidad de Antioquia',
      },
      year: 2025,
      certified: true,
    },
    {
      id: 'exoplanets-geneva',
      title: { en: 'The Diversity of Exoplanets', es: 'The Diversity of Exoplanets' },
      provider: { en: 'University of Geneva (Coursera)', es: 'Universidad de Ginebra (Coursera)' },
      year: 2024,
      certified: true,
    },
    {
      id: 'data-mining-puc',
      title: { en: 'Data Mining', es: 'Minería de Datos' },
      provider: {
        en: 'Pontifical Catholic University of Chile (Coursera)',
        es: 'Pontificia Universidad Católica de Chile (Coursera)',
      },
      year: 2021,
      certified: true,
    },
    {
      id: 'intro-ai',
      title: { en: 'Introduction to AI', es: 'Introduction to AI' },
      provider: { en: 'DeepLearning.AI (Coursera)', es: 'DeepLearning.AI (Coursera)' },
      year: 2021,
      certified: true,
    },
  ],
};

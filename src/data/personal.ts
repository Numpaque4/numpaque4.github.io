import type { LocalizedText } from './types';

export const personal = {
  fullName: 'David Sebastián Rodríguez Numpaque',
  publicName: 'Sebastian Numpaque',
  email: 'david.rodriguez1@udea.edu.co',
  github: 'https://github.com/Numpaque4',
  githubHandle: 'Numpaque4',
  orcid: 'https://orcid.org/0009-0000-5697-3416',
  orcidId: '0009-0000-5697-3416',
  linkedin: 'https://www.linkedin.com/in/sebastian-numpaque-b257072a6',
  linkedinHandle: 'sebastian-numpaque-b257072a6',
} as const;

export const tagline: Record<'academic' | 'industry', LocalizedText> = {
  academic: {
    en: 'Astronomy Researcher — Exoplanetary Science',
    es: 'Investigador en Astronomía — Ciencia Exoplanetaria',
  },
  industry: {
    en: 'Scientific Software Developer',
    es: 'Desarrollador de Software Científico',
  },
};

export const aboutMe: LocalizedText = {
  en: 'BSc. in Astronomy focused on exoplanetary science and computational astrophysics. Experienced in scientific software development, spectral analysis, photometric modeling, collaborative research and academic outreach. Lead developer of a Bayesian, cluster-parallelized inference pipeline for exoplanetary ring detection, and co-developer of an open-source simulation package. Additional interests include machine learning, AI applied to science and high-energy astrophysics.',
  es: 'Investigador en Astronomía enfocado en ciencia exoplanetaria y astrofísica computacional. Experiencia en desarrollo de software científico, análisis espectral, modelado fotométrico, investigación colaborativa y divulgación científica. Desarrollador principal de un pipeline de inferencia bayesiana paralelizado en clúster para detección de anillos exoplanetarios, y co-desarrollador de un paquete de simulación de código abierto. Intereses adicionales en machine learning, AI aplicada a ciencia y astrofísica de altas energías.',
};

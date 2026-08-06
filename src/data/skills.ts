import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  {
    id: 'programming-tools',
    label: { en: 'Programming & Tools', es: 'Programación y Herramientas' },
    items: [
      'Python (scientific computing, OOP)',
      'C',
      'Bash & Linux',
      'Git / GitHub',
      'Parallel computing',
      'Cluster / HPC',
      'Sphinx / Read the Docs',
      'Jupyter',
      'LaTeX',
    ],
    audience: 'both',
    weight: { academic: 4, industry: 1 },
  },
  {
    id: 'computational-statistics',
    label: { en: 'Bayesian & Statistical Computing', es: 'Cómputo Bayesiano y Estadístico' },
    items: [
      'Bayesian inference',
      'Nested Sampling',
      'MCMC',
      // 'Kernel density estimation',
      'Forward Modeling',
    ],
    audience: 'both',
    weight: { academic: 2, industry: 2 },
  },
  {
    id: 'ml-data-science',
    label: { en: 'Machine Learning & Data Science', es: 'Machine Learning y Data Science' },
    items: [
      'scikit-learn',
      'Supervised learning (classification, SVM)',
      'Unsupervised learning (clustering)',
      'Deep learning fundamentals',
    ],
    audience: 'both',
    weight: { academic: 6, industry: 3 },
  },
  {
    id: 'data-tools',
    label: { en: 'Data Access & Databases', es: 'Acceso a Datos y Bases de Datos' },
    items: ['SQL', 'Relational databases', 'ADQL (Virtual Observatory)', 'FITS file handling'],
    audience: 'both',
    weight: { academic: 7, industry: 4 },
  },
  {
    id: 'scientific-python',
    label: { en: 'Scientific Python Packages', es: 'Paquetes Científicos de Python' },
    items: ['NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Astropy', 'Astroquery'],
    audience: 'both',
    weight: { academic: 1, industry: 5 },
  },
  {
    id: 'astronomy-software',
    label: { en: 'Astronomy Software', es: 'Software de Astronomía' },
    items: ['IRAF', 'iSpec', 'Rebound', 'Lightkurve', 'Batman', 'pyPplusS', 'Pryngles', 'Spiderman'],
    audience: 'academic',
    weight: { academic: 3, industry: 6 },
  },
];

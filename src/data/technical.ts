import type { TechnicalEntry } from './types';

export const technical: TechnicalEntry[] = [
  {
    id: 'bayesian-pipeline-engineering',
    title: {
      en: 'Bayesian Inference Pipelines',
      es: 'Pipelines de Inferencia Bayesiana',
    },
    description: {
      en: 'Designed and developed PRisma, a modular Bayesian inference framework for exoplanetary research, integrating forward modeling, KDE-based likelihood estimation, and nested sampling (dynesty). Implemented parallel execution on HPC clusters, reproducible workflows, and version-controlled inference campaigns, enabling large-scale analyses and supporting ongoing first-author research.',
      es: 'Diseñé y desarrollé PRisma, un framework modular de inferencia bayesiana para investigación en exoplanetas, integrando modelos forward, funciones de verosimilitud basadas en KDE e inferencia mediante nested sampling (dynesty). Implementé ejecución paralela en clústeres HPC, flujos de trabajo reproducibles y campañas de inferencia versionadas, permitiendo análisis a gran escala y respaldando investigación como primer autor.',
    },
    highlights: [
      'Python',
      'Bayesian inference',
      'Nested sampling (dynesty)',
      'Parallel computing',
      'HPC',
      'Scientific computing',
      'Reproducible research',
    ],
    audience: 'both',
    weight: { academic: 1, industry: 1 },
  },

  {
    id: 'applied-data-mining-ml',
    title: {
      en: 'Applied Data Mining & Machine Learning',
      es: 'Minería de Datos y Machine Learning Aplicados',
    },
    description: {
      en: 'Applied end-to-end data science workflows to astronomical datasets, including SQL/ADQL querying, data preprocessing, visualization, feature engineering, and supervised and unsupervised machine learning. Developed predictive and clustering models using the Python scientific ecosystem as part of research-oriented projects.',
      es: 'Apliqué flujos completos de ciencia de datos sobre conjuntos de datos astronómicos, incluyendo consultas SQL/ADQL, preprocesamiento, visualización, ingeniería de características y aprendizaje automático supervisado y no supervisado. Desarrollé modelos predictivos y de agrupamiento utilizando el ecosistema científico de Python en proyectos orientados a investigación.',
    },
    highlights: [
      'SQL',
      'ADQL',
      'scikit-learn',
      'Data analysis',
      'Classification',
      'Clustering',
      'Machine learning',
      'Data visualization',
    ],
    audience: 'both',
    weight: { academic: 4, industry: 2 },
  },

  {
    id: 'scientific-software-engineering',
    title: {
      en: 'Scientific Software Engineering',
      es: 'Ingeniería de Software Científico',
    },
    description: {
      en: 'Co-developed and maintained Pryngles, an open-source Python package for photometric simulations of planetary systems. Designed and evolved its public API, implemented testing and documentation infrastructure, and applied modern software engineering practices including modular architecture, collaborative Git workflows, reproducible development, and long-term maintainability. Built research software intended to be extensible, reliable, and accessible to both developers and scientists.',
      es: 'Co-desarrollé y mantuve Pryngles, un paquete open source en Python para simulaciones fotométricas de sistemas planetarios. Diseñé y evolucioné su API pública, implementé infraestructura de pruebas y documentación, y apliqué prácticas modernas de ingeniería de software, incluyendo arquitectura modular, flujos colaborativos con Git, desarrollo reproducible y mantenibilidad a largo plazo. Desarrollé software científico orientado a ser extensible, confiable y accesible tanto para desarrolladores como para investigadores.',
    },
    highlights: [
      'Python',
      'Software architecture',
      'API design',
      'Open-source development',
      'Git / GitHub',
      'Unit testing',
      'Documentation',
      'Reproducible research',
    ],
    audience: 'both',
    weight: { academic: 2, industry: 3 },
  },
];
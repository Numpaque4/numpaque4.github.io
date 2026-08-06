import type { PublicationEntry } from './types';

export const publications: PublicationEntry[] = [
  {
    id: 'kepler-51-photoring',
    authors: [
      { name: 'Numpaque, S.', isSelf: true },
      { name: 'Zuluaga, J. I.' },
      { name: 'Alvarado-Montes, J. A.' },
      { name: 'Kipping, D.' },
    ],
    title: {
      en: 'Probing Exoplanetary Rings with Asterodensity Profiling: A PhotoRing Analysis of Kepler-51',
      es: 'Probing Exoplanetary Rings with Asterodensity Profiling: A PhotoRing Analysis of Kepler-51',
    },
    venue: { en: 'In preparation', es: 'En preparación' },
    year: 2026,
    status: 'in-prep',
    type: 'paper',
    audience: 'academic',
    weight: { academic: 1, industry: 3 },
  },
  {
    id: 'ai-teaching-natural-sciences',
    authors: [
      { name: 'Valderrama, D. A.' },
      { name: 'Numpaque, D. S.', isSelf: true },
      { name: 'et al.' },
    ],
    title: {
      en: 'Artificial Intelligence in the Teaching of Natural Sciences on the Threshold of the Fifth Industrial Revolution',
      es: 'Artificial Intelligence in the Teaching of Natural Sciences on the Threshold of the Fifth Industrial Revolution',
    },
    venue: {
      en: 'Explainable AI for Education: Recent Trends and Challenges (book chapter)',
      es: 'Explainable AI for Education: Recent Trends and Challenges (capítulo de libro)',
    },
    year: 2024,
    status: 'published',
    type: 'book-chapter',
    doi: '10.1007/978-3-031-72410-7_9',
    audience: 'both',
    weight: { academic: 2, industry: 1 },
  },
  {
    id: 'astrodidaxis-ods',
    authors: [{ name: 'Numpaque, S.', isSelf: true }, { name: 'et al.' }],
    title: {
      en: 'Contributions of Astronomy and Its Teaching to the Sustainable Development Goals: the AstrodidaXis Case',
      es: 'Aportes de la Astronomía y su enseñanza a los Objetivos de Desarrollo Sostenible, caso AstrodidaXis',
    },
    venue: {
      en: 'Góndola, Enseñanza y Aprendizaje de las Ciencias (ISSN 2665-3303)',
      es: 'Góndola, Enseñanza y Aprendizaje de las Ciencias (ISSN 2665-3303)',
    },
    year: 2025,
    status: 'submitted',
    type: 'outreach-article',
    audience: 'academic',
    weight: { academic: 3, industry: 4 },
  },
  {
    id: 'exoplanets-workshop-circular',
    authors: [{ name: 'Numpaque, S.', isSelf: true }],
    title: {
      en: 'Exploring Distant Worlds: Exoplanet Detection Workshop',
      es: 'Explorando Mundos Distantes: Taller en Detección de Exoplanetas',
    },
    venue: {
      en: 'Circular Astronómica No. 999, Colombian Astronomy Network (RAC)',
      es: 'Circular Astronómica No. 999, Red de Astronomía de Colombia (RAC)',
    },
    year: 2024,
    status: 'published',
    type: 'outreach-article',
    url: 'https://rac.net.co/wp-content/uploads/2024/05/Circular-mayo-2024.pdf',
    audience: 'academic',
    weight: { academic: 4, industry: 5 },
  },
];

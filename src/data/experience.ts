import type { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [
  {
    id: 'prisma',
    category: 'research',
    org: {
      en: 'SEAP Research Group (Solar, Earth and Planetary Physics)',
      es: 'Grupo de Investigación SEAP (Física Solar, Terrestre y Planetaria)',
    },
    role: {
      en: 'Lead Developer — PRisma',
      es: 'Desarrollador Principal — PRisma',
    },
    location: { en: 'University of Antioquia, Colombia', es: 'Universidad de Antioquia, Colombia' },
    startDate: '2024-10',
    endDate: 'present',
    bullets: [
      {
        en: 'Lead developer of PRisma, a Bayesian pipeline that detects exoplanetary rings via asterodensity profiling — comparing transit-inferred stellar densities against independent estimates to reveal the "PhotoRing effect" caused by unmodeled rings.',
        es: 'Desarrollador principal de PRisma, un pipeline bayesiano que detecta anillos exoplanetarios mediante "asterodensity profiling": compara densidades estelares inferidas por tránsito contra estimaciones independientes para revelar el "efecto PhotoRing" causado por anillos no modelados.',
      },
      {
        en: 'Built a deterministic forward model of ringed-transit observables (exorings) and a KDE-based likelihood, running nested-sampling inference (dynesty) to recover posteriors and Bayesian evidence.',
        es: 'Construcción de un forward model determinístico de observables de tránsitos anillados (exorings) y una verosimilitud basada en KDE, ejecutando inferencia por nested sampling (dynesty) para obtener posteriores y evidencia bayesiana.',
      },
      {
        en: 'Designed and ran parallelized nested-sampling campaigns across compute-cluster resources to process TTV photometry posteriors for the Kepler-51 system.',
        es: 'Diseño y ejecución de campañas paralelas de nested sampling en recursos de clúster de cómputo para procesar posteriores de fotometría TTV del sistema Kepler-51.',
      },
      {
        en: 'Lead author of the resulting manuscript (in preparation, 2026), applying the pipeline to Kepler-51 as a case study.',
        es: 'Autor principal del manuscrito resultante (en preparación, 2026), aplicando el pipeline a Kepler-51 como caso de estudio.',
      },
    ],
    tags: ['python', 'open-source', 'bayesian-inference', 'nested-sampling', 'parallel-computing', 'hpc', 'exoplanets'],
    audience: 'both',
    weight: { academic: 1, industry: 1 },
    gallery: [
      {
        name: 'PRisma',
        badges: ['Open Source', 'Python', 'MIT License'],
        description: {
          en: 'A reproducible pipeline for exoplanet-ring detection via asterodensity profiling',
          es: 'Un pipeline reproducible para la detección de anillos exoplanetarios mediante perfilado de asterodensidad.',
        },
        meta: 'github.com/seap-udea/PRisma',
        href: 'https://github.com/seap-udea/PRisma',
      },
      {
        name: 'SEAP Research Group',
        badges: ['Research Group', 'University of Antioquia'],
        description: {
          en: 'Solar, Earth and Planetary Physics group — 80+ public repositories in planetary science, celestial mechanics, and computational astrophysics.',
          es: 'Grupo de Física Solar, Terrestre y Planetaria — más de 80 repositorios públicos en ciencia planetaria, mecánica celeste y astrofísica computacional.',
        },
        meta: 'seap-udea.github.io',
        href: 'https://seap-udea.github.io/',
      },
    ],
  },
  {
    id: 'pryngles',
    category: 'research',
    org: {
      en: 'SEAP Research Group (Solar, Earth and Planetary Physics)',
      es: 'Grupo de Investigación SEAP (Física Solar, Terrestre y Planetaria)',
    },
    role: { en: 'Co-Developer — Pryngles', es: 'Co-Desarrollador — Pryngles' },
    location: { en: 'University of Antioquia, Colombia', es: 'Universidad de Antioquia, Colombia' },
    startDate: '2024-10',
    endDate: 'present',
    bullets: [
      {
        en: 'Co-developed Pryngles, contributing core simulation and visualization capabilities used in the group\'s ring-detection research.',
        es: 'Co-desarrollador de Pryngles, contribuyendo capacidades clave de simulación y visualización usadas en la investigación de detección de anillos del grupo.',
      },
      {
        en: 'Contributed the package\'s current System interface, replacing its earlier procedural API.',
        es: 'Contribución de la interfaz System actual del paquete, en reemplazo de su API procedural anterior.',
      },
      {
        en: 'Maintained the package with tests, documentation, and collaborative Git/GitHub workflows.',
        es: 'Mantenimiento del paquete con pruebas, documentación y flujos de trabajo colaborativos con Git/GitHub.',
      },
    ],
    tags: ['python', 'open-source', 'testing', 'api-design', 'documentation', 'exoplanets', 'oop'],
    audience: 'both',
    weight: { academic: 2, industry: 2 },
    gallery: [
      {
        name: 'Pryngles',
        badges: ['Open Source', 'Python', 'MIT License'],
        description: {
          en: 'PlanetaRY spaNGLES — produces visualizations of ringed exoplanets and computes the light curves and polarimetric signals they produce.',
          es: 'PlanetaRY spaNGLES — genera visualizaciones de exoplanetas anillados y calcula las curvas de luz y señales polarimétricas que producen.',
        },
        meta: 'github.com/seap-udea/pryngles',
        href: 'https://github.com/seap-udea/pryngles',
      },
      {
        name: 'Pryngles Docs',
        badges: ['Documentation', 'Read the Docs'],
        description: {
          en: 'Full API reference, tutorials, and Jupyter/Colab examples for the System interface.',
          es: 'Referencia completa de la API, tutoriales y ejemplos en Jupyter/Colab para la interfaz System.',
        },
        meta: 'pryngles.readthedocs.io',
        href: 'https://pryngles.readthedocs.io',
      },
    ],
  },
  {
    id: 'astrodidaxis-manager',
    category: 'outreach',
    org: { en: 'AstrodidaXis Foundation', es: 'Fundación AstrodidaXis' },
    role: { en: 'Organizational Manager', es: 'Gestor Organizacional' },
    location: { en: 'Boyacá, Colombia', es: 'Boyacá, Colombia' },
    startDate: '2023-01',
    endDate: 'present',
    summary: {
      en: 'Coordination of outreach initiatives and research projects to strengthen astronomy education in Colombia.',
      es: 'Coordinación de iniciativas de divulgación y proyectos de investigación para fortalecer la educación en astronomía en Colombia.',
    },
    bullets: [
      {
        en: 'Planned and executed academic and outreach events, strengthening the foundation’s visibility and community impact in Boyacá.',
        es: 'Planificación y ejecución de eventos académicos y de divulgación, fortaleciendo la visibilidad de la fundación y su impacto en comunidades de Boyacá.',
      },
      {
        en: 'Organizing Committee member for the II & III Workshop on Astronomy Education (OAE-Colombia, AstrodidaXis, UPTC).',
        es: 'Miembro del comité organizador del II y III Workshop on Astronomy Education (OAE-Colombia, AstrodidaXis, UPTC).',
      },
    ],
    tags: ['outreach', 'project-management', 'education'],
    audience: 'both',
    weight: { academic: 4, industry: 5 },
    links: [{ label: { en: 'AstrodidaXis', es: 'AstrodidaXis' }, href: 'https://sites.google.com/view/astrodidaxis/home?authuser=0' }],
  },
  {
    id: 'reca-mentorship',
    category: 'outreach',
    org: {
      en: 'RECA — Colombian Astronomy Students Network',
      es: 'RECA — Red de Estudiantes Colombianos en Astronomía',
    },
    role: { en: 'Mentorship Program Organizer', es: 'Organizador del Programa de Mentorías' },
    location: { en: 'Colombia', es: 'Colombia' },
    startDate: '2025-01',
    endDate: '2025-12',
    summary: {
      en: 'National-level program organizer for early-career astronomy students across Colombia.',
      es: 'Organizador a nivel nacional del programa para estudiantes de astronomía en etapa temprana en Colombia.',
    },
    bullets: [
      {
        en: 'Managed the national call for applications and communications strategy.',
        es: 'Gestión de la convocatoria nacional y de la estrategia de comunicación.',
      },
      {
        en: 'Planned panels, activities, and logistics as an Organizing Committee member of the RECA Mentorship Node.',
        es: 'Planificación de paneles, actividades y logística como miembro del comité organizador del Nodo de Mentorías RECA.',
      },
    ],
    tags: ['mentorship', 'community', 'event-planning'],
    audience: 'both',
    weight: { academic: 5, industry: 6 },
    links: [{ label: { en: 'RECA', es: 'RECA' }, href: 'https://www.astroreca.org/en' }],
  },
  {
    id: 'astronomy-seedbed',
    category: 'outreach',
    org: {
      en: 'Astronomy Research Seedbed, University of Antioquia',
      es: 'Semillero de Formación en Investigación en Astronomía, Universidad de Antioquia',
    },
    role: { en: 'Co-founder & Coordinator', es: 'Cofundador y Coordinador' },
    location: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
    startDate: '2025-01',
    endDate: 'present',
    summary: {
      en: 'Co-founded a peer program building early research skills among undergraduate astronomy students.',
      es: 'Cofundador de un programa entre pares para desarrollar habilidades tempranas de investigación en estudiantes de pregrado en astronomía.',
    },
    bullets: [
      {
        en: 'Designed and led a training program focused on computational skills, scientific software practices, and effective scientific communication for early-career researchers.',
        es: 'Diseño y liderazgo de un programa de formación enfocado en habilidades computacionales, prácticas de software científico y comunicación científica efectiva para investigadores en formación.',
      },
    ],
    tags: ['mentorship', 'research-training', 'community'],
    audience: 'both',
    weight: { academic: 3, industry: 7 },
  },
];

import type { ConferenceEntry } from './types';

export const conferences: ConferenceEntry[] = [
  {
    id: 'rac-2025',
    name: { en: 'XXI National Astronomy Meeting, RAC 2025, Colombia', es: 'XXI Encuentro Nacional de Astronomía RAC 2025, Colombia' },
    role: 'speaker',
    talkTitle: {
      en: 'Strengthening Research Training in Astronomy: The First Astronomy Research Seedbed at the University of Antioquia',
      es: 'Fortaleciendo la Formación Investigativa en Astronomía: El Primer Semillero de Investigación de la Universidad de Antioquia',
    },
    year: 2025,
    url: 'https://rac.net.co/index.php/encuentro-rac-2025/',
    audience: 'academic',
  },
  {
    id: 'cocoa-2024',
    name: { en: 'VIII Colombian Congress of Astronomy and Astrophysics (CoCoA) 2024, Colombia', es: 'VIII Congreso Colombiano de Astronomía y Astrofísica (CoCoA) 2024, Colombia' },
    role: 'speaker',
    talkTitle: {
      en: 'A Python Package for Modelling the Photometric Signatures of Exoplanetary Rings and Satellites',
      es: 'A Python Package for Modelling the Photometric Signatures of Exoplanetary Rings and Satellites',
    },
    year: 2024,
    url: 'https://jupyterhd.redclara.net/event/45/',
    audience: 'both',
  },
  {
    id: 'cieac-2024',
    name: { en: 'III International Congress on Community Environmental Education (CIEAC) 2024, Colombia', es: 'III Congreso Internacional de Educación Ambiental Comunitaria (CIEAC) 2024, Colombia' },
    role: 'speaker',
    talkTitle: {
      en: 'Exploring the Contribution of Astronomy to the Sustainable Development Goals and Community Empowerment in Boyacá',
      es: 'Explorando la Contribución de la Astronomía a los Objetivos de Desarrollo Sostenible y el Empoderamiento Comunitario en Boyacá',
    },
    year: 2024,
    url: 'https://www.unicordoba.edu.co/index.php/event/iii-congreso-internacional-de-educacion-ambiental-comunitaria-cieac-2024/',
    audience: 'academic',
  },
  {
    id: 'cief-2023',
    name: { en: 'II Ibero-American Congress of Physics Students (CIEF), Peru', es: 'II Congreso Iberoamericano de Estudiantes de Física (CIEF), Perú' },
    role: 'assistant',
    year: 2023,
    url: 'https://sites.google.com/view/congresoiberoamericanodefisica/seminars/2023?authuser=0',
    audience: 'academic',
  },
  {
    id: 'cocoa-2022',
    name: { en: 'VII Colombian Congress of Astronomy and Astrophysics (CoCoA), Colombia', es: 'VII Congreso Colombiano de Astronomía y Astrofísica (CoCoA), Colombia' },
    role: 'assistant',
    year: 2022,
    url: 'https://www.uptc.edu.co/sitio/portal/cal_not_eve/eventos/det/VII-Congreso-Colombiano-Astronomia-y-Astrofisica-COCOA-Tunja-2022-2022.09.21/?instancedate=1663765200000',
    audience: 'academic',
  },
];

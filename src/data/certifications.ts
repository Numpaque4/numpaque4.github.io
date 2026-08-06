import type { CertificationEntry } from './types';

// `verified: false` entries are transcribed only from the original filename
// and file date in certificates/ — no confirmed issuer/title text was found
// in legacy/cv.tex or the markdown drafts. These MUST be reviewed and
// corrected by the site owner before publishing (title/issuer/year are
// best-effort guesses, not verified credential text). `verified: true`
// entries are cross-referenced against explicit text in legacy/cv.tex.
export const certifications: CertificationEntry[] = [
  {
    id: 'formulacion-proyectos',
    title: { en: 'Research Project Design', es: 'Formulación de Proyectos de Investigación' },
    issuer: { en: 'University of Antioquia', es: 'Universidad de Antioquia' },
    year: 2025,
    file: '/certificates/formulacion-proyectos.pdf',
    category: 'course',
    verified: true,
  },
  {
    id: 'cieac-2024',
    title: { en: 'Speaker — III CIEAC 2024', es: 'Ponente — III CIEAC 2024' },
    issuer: {
      en: 'III International Congress on Community Environmental Education',
      es: 'III Congreso Internacional de Educación Ambiental Comunitaria',
    },
    year: 2024,
    file: '/certificates/cieac-2024.pdf',
    category: 'conference',
    verified: true,
  },
  {
    id: 'cocoa-2024',
    title: { en: 'Speaker — VIII CoCoA 2024', es: 'Ponente — VIII CoCoA 2024' },
    issuer: {
      en: 'Colombian Congress of Astronomy and Astrophysics',
      es: 'Congreso Colombiano de Astronomía y Astrofísica',
    },
    year: 2024,
    file: '/certificates/cocoa-2024.pdf',
    category: 'conference',
    verified: true,
  },
  {
    id: 'workshop-ii-organizador',
    title: {
      en: 'Organizing Committee — II Workshop on Astronomy Education',
      es: 'Comité Organizador — II Workshop on Astronomy Education',
    },
    issuer: { en: 'OAE-Colombia / AstrodidaXis / UPTC', es: 'OAE-Colombia / AstrodidaXis / UPTC' },
    year: 2024,
    file: '/certificates/workshop-ii-organizador.pdf',
    category: 'workshop',
    verified: true,
  },
  {
    id: 'workshop-i-astrodidaxis',
    title: { en: 'I Workshop on Astronomy Education', es: 'I Workshop on Astronomy Education' },
    issuer: { en: 'AstrodidaXis', es: 'AstrodidaXis' },
    year: 2024,
    file: '/certificates/workshop-i-astrodidaxis.pdf',
    category: 'workshop',
    verified: false,
  },
  {
    id: 'aula-itm',
    title: { en: 'Aula ITM', es: 'Aula ITM' },
    issuer: { en: 'ITM — to verify', es: 'ITM — por verificar' },
    year: null,
    file: '/certificates/aula-itm.pdf',
    category: 'course',
    verified: false,
  },
  {
    id: 'asasac',
    title: { en: 'ASASAC Certificate', es: 'Certificado ASASAC' },
    issuer: { en: 'ASASAC — to verify', es: 'ASASAC — por verificar' },
    year: 2021,
    file: '/certificates/asasac.pdf',
    category: 'course',
    verified: false,
  },
  {
    id: 'cocoa-assistant',
    title: { en: 'CoCoA Certificate', es: 'Certificado CoCoA' },
    issuer: {
      en: 'Colombian Congress of Astronomy and Astrophysics — to verify which edition',
      es: 'Congreso Colombiano de Astronomía y Astrofísica — por verificar la edición',
    },
    year: 2022,
    file: '/certificates/cocoa-assistant.pdf',
    category: 'conference',
    verified: false,
  },
  {
    id: 'unam-irya',
    title: { en: 'UNAM IRyA Certificate', es: 'Certificado UNAM IRyA' },
    issuer: {
      en: 'Institute of Radioastronomy and Astrophysics, UNAM — to verify',
      es: 'Instituto de Radioastronomía y Astrofísica, UNAM — por verificar',
    },
    year: 2020,
    file: '/certificates/unam-irya.pdf',
    category: 'course',
    verified: false,
  },
  {
    id: 'congreso-pucp',
    title: { en: 'PUCP Congress', es: 'Congreso PUCP' },
    issuer: {
      en: 'Pontifical Catholic University of Peru — to verify which event',
      es: 'Pontificia Universidad Católica del Perú — por verificar el evento',
    },
    year: 2024,
    file: '/certificates/congreso-pucp.pdf',
    category: 'conference',
    verified: false,
  },
  {
    id: 'minicurso-altas-energias',
    title: { en: 'High-Energy Astrophysics Minicourse', es: 'Minicurso de Altas Energías' },
    issuer: { en: 'To verify', es: 'Por verificar' },
    year: 2024,
    file: '/certificates/minicurso-altas-energias.pdf',
    category: 'course',
    verified: false,
  },
  {
    id: 'minicurso-cosmologia',
    title: { en: 'Cosmology Minicourse', es: 'Minicurso de Cosmología' },
    issuer: { en: 'To verify', es: 'Por verificar' },
    year: 2024,
    file: '/certificates/minicurso-cosmologia.pdf',
    category: 'course',
    verified: false,
  },
  {
    id: 'minicurso-cuantica',
    title: { en: 'Quantum Physics Minicourse', es: 'Minicurso de Física Cuántica' },
    issuer: { en: 'To verify', es: 'Por verificar' },
    year: 2024,
    file: '/certificates/minicurso-cuantica.pdf',
    category: 'course',
    verified: false,
  },
];

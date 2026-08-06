export type Lang = 'en' | 'es';

export const ui = {
  en: {
    modeAcademic: 'Academic',
    modeIndustry: 'Industry',
    modeToggleLabel: 'View as',
    langLabel: 'Language',
    themeLight: 'Light',
    themeDark: 'Dark',
    downloadCv: 'Download CV (PDF)',
    downloadOtherVariant: 'Other version',
    contactEmail: 'Email',
    contactGithub: 'GitHub',
    contactOrcid: 'ORCID',
    contactLinkedin: 'LinkedIn',
    referencesNote: 'Contact information available upon request.',
    referencesCta: 'Get in touch',
    certificationsCta: 'View certificate',
    certificationsUnverified: 'Details pending confirmation',
    present: 'Present',
    skipToContent: 'Skip to content',
    viewProject: 'View project',
  },
  es: {
    modeAcademic: 'Académico',
    modeIndustry: 'Industria',
    modeToggleLabel: 'Ver como',
    langLabel: 'Idioma',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    downloadCv: 'Descargar CV (PDF)',
    downloadOtherVariant: 'Otra versión',
    contactEmail: 'Correo',
    contactGithub: 'GitHub',
    contactOrcid: 'ORCID',
    contactLinkedin: 'LinkedIn',
    referencesNote: 'Información de contacto disponible a solicitud.',
    referencesCta: 'Contactar',
    certificationsCta: 'Ver certificado',
    certificationsUnverified: 'Detalles pendientes de confirmación',
    present: 'Presente',
    skipToContent: 'Saltar al contenido',
    viewProject: 'Ver proyecto',
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}

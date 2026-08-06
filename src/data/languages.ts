import type { LocalizedText } from './types';

export interface LanguageEntry {
  id: string;
  name: LocalizedText;
  level: LocalizedText;
}

export const languages: LanguageEntry[] = [
  {
    id: 'spanish',
    name: { en: 'Spanish', es: 'Español' },
    level: { en: 'Native', es: 'Nativo' },
  },
  {
    id: 'english',
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'B2', es: 'B2' },
  },
];

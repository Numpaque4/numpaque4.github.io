export interface LocalizedText {
  en: string;
  es: string;
}

export type Audience = 'academic' | 'industry' | 'both';

export interface ModeWeight {
  academic: number;
  industry: number;
}

export interface LinkRef {
  label: LocalizedText;
  href: string;
}

export interface ProjectLink {
  icon?: string;
  name: string;
  badges: string[];
  description: LocalizedText;
  meta?: string;
  href: string;
}

export interface ExperienceEntry {
  id: string;
  category: 'research' | 'outreach';
  org: LocalizedText;
  role: LocalizedText;
  location?: LocalizedText;
  startDate: string;
  endDate: string;
  summary?: LocalizedText;
  bullets: LocalizedText[];
  tags: string[];
  audience: Audience;
  weight: ModeWeight;
  links?: LinkRef[];
  gallery?: ProjectLink[];
}

export interface TechnicalEntry {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  highlights: string[];
  audience: Audience;
  weight: ModeWeight;
}

export interface Author {
  name: string;
  isSelf?: boolean;
  link?: string;
}

export interface PublicationEntry {
  id: string;
  authors: Author[];
  title: LocalizedText;
  venue: LocalizedText;
  year: number;
  status: 'published' | 'in-prep' | 'submitted';
  type: 'paper' | 'book-chapter' | 'outreach-article';
  doi?: string;
  url?: string;
  audience: Audience;
  weight: ModeWeight;
}

export interface SkillGroup {
  id: string;
  label: LocalizedText;
  items: string[];
  audience: Audience;
  weight: ModeWeight;
}

export interface ConferenceEntry {
  id: string;
  name: LocalizedText;
  role: 'speaker' | 'assistant';
  talkTitle?: LocalizedText;
  year: number;
  url?: string;
  audience: Audience;
}

export interface ReferenceEntry {
  id: string;
  name: string;
  title: LocalizedText;
}

export interface CertificationEntry {
  id: string;
  title: LocalizedText;
  issuer: LocalizedText;
  year: number | null;
  file: string;
  category: 'workshop' | 'course' | 'conference' | 'award';
  verified: boolean;
}

export interface EducationCourse {
  id: string;
  title: LocalizedText;
  provider: LocalizedText;
  year: number;
  certified: boolean;
}

export interface EducationEntry {
  degree: LocalizedText;
  institution: LocalizedText;
  location: LocalizedText;
  startYear: number;
  expectedEnd: LocalizedText;
  honors: { text: LocalizedText; url?: string }[];
  courses: EducationCourse[];
}

export interface SectionMeta {
  id: string;
  heading: LocalizedText;
  weight: ModeWeight;
  hideInMode?: 'academic' | 'industry';
}

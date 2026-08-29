export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface TechStackItem {
  id: string;
  name: string;
  category: 'Languages' | 'AI & ML' | 'Databases' | 'Frameworks' | 'Tools & Analytics';
  icon: string;
  description: string;
  color: string;
  bgLight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Web Development' | 'UI/UX' | 'Data Analyst';
  tagline: string;
  folderName: string;
  thumbnailIcon?: string;
  imageUrl?: string;
  date: string;
  overview: string;
  role: string;
  techStack: string[];
  features: string[];
  metricsOrOutcomes?: string[];
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  tableauUrl?: string;
  highlights: string[];
  mockupType: 'anpr-ai' | 'web-app' | 'ui-design' | 'dashboard' | 'cv-ocr';
}

export interface SkillCategory {
  id: string;
  title: string;
  type: 'hard' | 'soft' | 'tools' | 'languages';
  description: string;
  icon: string;
  items: {
    name: string;
    level?: string;
    context?: string;
    proficiency?: number;
  }[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  highlights: string[];
}

export interface ContactInfo {
  email: string;
  whatsapp: string;
  whatsappRaw: string;
  instagram: string;
  instagramUrl: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
}

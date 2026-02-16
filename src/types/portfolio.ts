export interface Basics {
  name: string;
  label: string;
  email: string;
  phone: string;
  summary: string;
  location: Location;
  profiles: Profile[];
  imageUrl?: string;
}

export interface Location {
  city: string;
  region: string;
  countryCode: string;
  country: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
  courses?: string[];
}

export interface Publication {
  name: string;
  description?: string;
  releaseDate: string;
  url?: string;
  doi?: string;
  authors?: string[];
}

export interface Project {
  name: string;
  description: string;
  startDate?: string;
  endDate?: string;
  url?: string;
  githubUrl?: string;
  technologies?: string[];
  status?: 'completed' | 'in-progress' | 'archived';
  highlights?: string[];
}

export interface Skill {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  keywords: string[];
}

export interface Course {
  name: string;
  provider?: string;
  instructor?: string;
  date?: string;
  url?: string;
  certificateUrl?: string;
}

export interface Experience {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string;
  location?: string;
  highlights?: string[];
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  credentialId?: string;
}

export interface PortfolioData {
  basics: Basics;
  education: Education[];
  publications: Publication[];
  projects: Project[];
  skills: Skill[];
  courses: Course[];
  experience: Experience[];
  volunteer: Experience[];
  achievements: {
    awards: Award[];
    certificates: Certificate[];
  };
}
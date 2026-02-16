import { 
  Home, GraduationCap, FolderOpen, FlaskConical,
  BookOpen, Wrench, Briefcase, Trophy
} from 'lucide-react';

export interface SectionConfig {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

export const sections: SectionConfig[] = [
  { id: 'home', label: 'HOME', icon: Home, path: '/' },
  { id: 'education', label: 'EDUCATION', icon: GraduationCap, path: '/education' },
  { id: 'projects', label: 'PROJECTS', icon: FolderOpen, path: '/projects' },
  { id: 'research', label: 'RESEARCH', icon: FlaskConical, path: '/research' },
  { id: 'courses', label: 'COURSES', icon: BookOpen, path: '/courses' },
  { id: 'skills', label: 'SKILLS', icon: Wrench, path: '/skills' },
  { id: 'experience', label: 'EXPERIENCE', icon: Briefcase, path: '/experience' },
  { id: 'achievements', label: 'ACHIEVEMENTS', icon: Trophy, path: '/achievements' },
];

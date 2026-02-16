import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from '@/context';
import { Layout } from '@/components/layout';
import {
  HeroSection,
  EducationSection,
  ResearchSection,
  ProjectsSection,
  SkillsSection,
  CoursesSection,
  ExperienceSection,
  AchievementsSection,
} from '@/components/sections';

export default function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/education" element={<EducationSection />} />
            <Route path="/research" element={<ResearchSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/courses" element={<CoursesSection />} />
            <Route path="/experience" element={<ExperienceSection />} />
            <Route path="/achievements" element={<AchievementsSection />} />
          </Routes>
        </Layout>
      </Router>
    </PortfolioProvider>
  );
}

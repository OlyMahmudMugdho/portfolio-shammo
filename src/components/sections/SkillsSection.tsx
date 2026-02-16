import { Section, PageHero, Card } from '@/components/ui';
import { usePortfolio } from '@/context';
import { 
  Cpu, Brain, Activity, Code, Database, Eye, Globe, 
  Terminal, Layers, Monitor, HardDrive, Settings, 
  PenTool, Users, Presentation, Search
} from 'lucide-react';

const iconMap: Record<string, any> = {
  // Technical Skills
  'Robotics': Cpu,
  'Machine Learning': Brain,
  'Signal Processing': Activity,
  'Python': Terminal,
  'Deep Learning': Database,
  'Computer Vision': Eye,
  'IoT': Globe,
  // Tools & Frameworks
  'TensorFlow': Layers,
  'PyTorch': Layers,
  'OpenCV': Monitor,
  'ROS': Settings,
  'Arduino': HardDrive,
  'MATLAB': Code,
  // Soft Skills
  'Research': Search,
  'Technical Writing': PenTool,
  'Team Collaboration': Users,
  'Presentation': Presentation,
};

const order = ['Technical Skills', 'Tools & Frameworks', 'Soft Skills'];

export function SkillsSection() {
  const { skills } = usePortfolio();

  const sortedSkills = [...skills].sort((a, b) => {
    return order.indexOf(a.name) - order.indexOf(b.name);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Skills" 
        backgroundImage="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop"
      />
      <Section id="skills" className="bg-white flex-1 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-12 md:gap-16 max-w-full">
          {sortedSkills.map((skillGroup, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6 md:mb-10">
                <div className="w-8 md:w-16 h-[2px] bg-gray-900" />
                <h3 className="font-sans font-black text-gray-900 text-sm md:text-lg uppercase tracking-[0.3em] md:tracking-[0.4em]">
                  {skillGroup.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {skillGroup.keywords.map((skill, i) => {
                  const Icon = iconMap[skill] || Code;
                  return (
                    <Card 
                      key={i} 
                      className="group border border-gray-100 hover:border-gray-900 transition-all duration-300"
                    >
                      <div className="py-3 px-2 md:py-4 md:px-3 flex items-center gap-2 md:gap-4">
                        <div className="p-2 md:p-2.5 bg-gray-50 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                          <Icon className="w-4 h-4 md:w-6 md:h-6" />
                        </div>
                        <span className="font-sans font-black text-gray-900 uppercase text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wider leading-tight flex-1 min-w-0 break-words">
                          {skill}
                        </span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

import { Section, SectionTitle, Card, PageHero } from '@/components/ui';
import { usePortfolio } from '@/context';
import { FolderOpen, ExternalLink, Github, Layers } from 'lucide-react';

export function ProjectsSection() {
  const { projects } = usePortfolio();

  if (!projects || projects.length === 0) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Projects" 
        backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
      />
      <Section id="projects" className="bg-white flex-1 px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group border border-gray-100 hover:border-gray-900 transition-all duration-500"
            >
              <div className="px-6 py-3 md:px-7 md:py-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-gray-50 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-500">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="font-sans font-black text-xl text-gray-900 uppercase tracking-tighter mb-1.5 group-hover:text-gray-600 transition-colors leading-tight">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-xs md:text-sm mb-4 text-justify">
                  {project.description}
                </p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-[11px] font-black text-gray-900 uppercase tracking-tighter bg-gray-50 px-2 py-0.5 border border-gray-100 group-hover:border-gray-900 transition-colors duration-500">
                        #{tech.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-5 pt-3 border-t border-gray-50">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline font-bold text-[8px] tracking-widest uppercase flex items-center gap-1.5">
                      <ExternalLink className="w-2.5 h-2.5" /> Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black hover:underline font-bold text-[8px] tracking-widest uppercase flex items-center gap-1.5">
                      <Github className="w-2.5 h-2.5" /> Code
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

import { Section, PageHero, Card } from '@/components/ui';
import { usePortfolio } from '@/context';
import { Award, ExternalLink, Cpu } from 'lucide-react';

export function CoursesSection() {
  const { courses } = usePortfolio();

  if (!courses || courses.length === 0) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Courses" 
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
      />
      <Section id="courses" className="bg-white flex-1 px-6 md:px-12 lg:px-24 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] hover:bg-gray-50 transition-all duration-500"
            >
              <div className="p-4 md:p-5 flex flex-col h-full">
                <div className="mb-2 flex justify-between items-start">
                  <div className="p-2 bg-gray-50 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-500 border border-gray-100 group-hover:border-gray-900">
                    <Cpu className="w-5 h-5" />
                  </div>
                  {course.url && (
                    <a 
                      href={course.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 border border-gray-100 text-gray-300 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all duration-500"
                      title="View Certificate"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                
                <h3 className="font-sans font-black text-base md:text-lg text-gray-900 uppercase tracking-tight group-hover:text-gray-600 transition-colors leading-tight mb-2">
                  {course.name}
                </h3>

                <div className="mt-auto pt-2 border-t border-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[11px] font-black text-gray-900 uppercase tracking-[0.2em]">{course.provider}</span>
                      {course.date && (
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">{course.date}</span>
                      )}
                    </div>
                    <Award className="w-4 h-4 text-gray-100 group-hover:text-gray-900 transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

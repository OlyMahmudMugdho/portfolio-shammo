import { Section, Timeline, TimelineItem, PageHero } from '@/components/ui';
import { usePortfolio } from '@/context';
import { MapPin } from 'lucide-react';

export function ExperienceSection() {
  const { experience, volunteer } = usePortfolio();
  
  // Combine and sort by date
  const allExperience = [...experience, ...volunteer].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Experience" 
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
      />
      <Section id="experience" className="bg-white flex-1 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <Timeline>
            {allExperience.map((exp, index) => (
              <TimelineItem
                key={index}
                dateRange={{ start: exp.startDate, end: exp.endDate || 'Present' }}
                title={exp.position}
                subtitle={exp.name}
                description={exp.summary}
                className="last:pb-0"
              >
                {exp.location && (
                  <div className="flex items-center gap-2 mt-4 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Section>
    </div>
  );
}

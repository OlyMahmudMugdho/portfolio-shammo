import { Section, SectionTitle, Timeline, TimelineItem, PageHero } from '@/components/ui';
import { usePortfolio } from '@/context';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  const { education } = usePortfolio();

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Education" 
        backgroundImage="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop"
      />
      <Section id="education" className="bg-white flex-1 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                dateRange={{ start: edu.startDate, end: edu.endDate }}
                title={edu.institution}
                subtitle={`${edu.studyType} in ${edu.area}`}
                description={edu.description}
                logo={(edu as any).logoUrl}
              />
            ))}
          </Timeline>
        </div>
      </Section>
    </div>
  );
}
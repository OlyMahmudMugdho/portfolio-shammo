import { Section, PageHero, Card } from '@/components/ui';
import { usePortfolio } from '@/context';
import { Trophy, Medal, Star, Calendar, Building } from 'lucide-react';

export function AchievementsSection() {
  const { achievements } = usePortfolio();

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Achievements" 
        backgroundImage="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop"
      />
      
      <Section id="achievements-awards" className="bg-white px-6 md:px-12 lg:px-24 flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {achievements.awards.map((award, index) => (
              <Card 
                key={index} 
                className="group border-none shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
              >
                <div className="flex h-full">
                  <div className="w-1 md:w-1.5 bg-gray-50 group-hover:bg-gray-900 transition-colors duration-500" />
                  <div className="p-5 md:p-6 flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 md:p-3 bg-gray-50 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-500">
                        <Medal className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <Star className="w-4 h-4 md:w-6 md:h-6 text-gray-100 group-hover:text-yellow-400 transition-colors" />
                    </div>
                    
                    <h3 className="font-sans font-black text-lg md:text-xl text-gray-900 uppercase tracking-tight mb-4 leading-tight">
                      {award.title}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-gray-500 font-bold text-[8px] md:text-[9px] tracking-widest uppercase">
                        <Building className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-300" />
                        {award.awarder}
                      </div>
                      {award.date && (
                        <div className="flex items-center gap-3 text-gray-400 font-bold text-[8px] md:text-[9px] tracking-widest uppercase">
                          <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-300" />
                          {award.date}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

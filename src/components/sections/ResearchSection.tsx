import { Section, Card, PageHero } from '@/components/ui';
import { usePortfolio } from '@/context';
import { FileText, ExternalLink, FlaskConical, Quote, MapPin } from 'lucide-react';

export function ResearchSection() {
  const { volunteer, experience, publications } = usePortfolio();
  
  const researchRoles = [...volunteer, ...experience].filter(
    e => e.position.toLowerCase().includes('research') || e.name.toLowerCase().includes('research')
  );

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Research" 
        backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
      />
      
      <Section id="research-publications" className="bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16 border-b border-gray-900 pb-6 flex justify-between items-end">
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-[0.4em]">Publications</h2>
            <FileText className="w-6 h-6 text-gray-200" />
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {publications.map((pub, index) => (
              <div key={index} className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                <div className="hidden md:block md:col-span-1">
                  <span className="text-4xl lg:text-5xl font-black text-gray-100 group-hover:text-gray-900 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="md:col-span-11">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10 mb-6">
                    <div className="flex-1">
                      <h3 className="font-sans font-black text-xl md:text-2xl lg:text-3xl text-gray-900 uppercase tracking-tighter leading-tight mb-4 group-hover:text-gray-600 transition-colors">
                        {pub.name}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed text-justify mb-6 max-w-4xl">
                        {pub.summary}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 md:gap-8">
                        <div className="flex items-center gap-2">
                          <span className="w-6 md:w-12 h-[1px] bg-gray-900" />
                          <span className="text-[10px] md:text-xs font-black text-gray-900 uppercase tracking-widest">{pub.releaseDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 font-bold uppercase text-[9px] md:text-[10px] tracking-widest italic">
                          Peer Reviewed Journal
                        </div>
                      </div>
                    </div>
                    
                    {pub.url && (
                      <a 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-4 md:p-6 border border-gray-100 text-gray-400 hover:text-white hover:bg-gray-900 hover:border-gray-900 transition-all duration-500 self-end md:self-start"
                      >
                        <ExternalLink className="w-5 h-5 md:w-7 md:h-7" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="research-interests" className="bg-gray-50 flex-1 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 md:mb-12 flex items-center gap-4">
            <FlaskConical className="w-6 h-6 md:w-8 md:h-8 text-gray-900" />
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-[0.4em]">Research Roles</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {researchRoles.map((role, index) => (
              <Card key={index} className="border-0 bg-white p-6 md:p-10 group hover:shadow-2xl transition-all duration-700">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 md:w-12 md:h-12 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h4 className="relative z-10 font-sans font-black text-lg md:text-2xl text-gray-900 uppercase tracking-tight mb-2">
                    {role.position}
                  </h4>
                  <p className="relative z-10 text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest mb-4 md:mb-6">
                    {role.name}
                  </p>
                  <p className="relative z-10 text-gray-600 text-sm md:text-base leading-relaxed text-justify italic mb-4 md:mb-6">
                    {role.summary}
                  </p>
                  {role.location && (
                    <div className="relative z-10 flex items-center gap-2 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                      <MapPin className="w-3 h-3" />
                      {role.location}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

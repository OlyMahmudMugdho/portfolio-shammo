import { Section, SectionTitle, Card, PageHero } from '@/components/ui';
import { usePortfolio } from '@/context';
import { FileText, ExternalLink } from 'lucide-react';

export function PublicationsSection() {
  const { publications } = usePortfolio();

  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Publications" 
        backgroundImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"
      />
      <Section id="publications" className="bg-white flex-1">
        <div className="grid grid-cols-1 gap-0 border-t border-l border-gray-200">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="border-0 border-r border-b border-gray-200 hover:bg-white"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-gray-900 text-xl hover:text-black transition-colors leading-snug uppercase tracking-tight">
                    {pub.name}
                  </h3>
                  {pub.releaseDate && (
                    <div className="flex items-center gap-4 mt-6">
                      <span className="px-2 py-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest">
                        {pub.releaseDate}
                      </span>
                      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest italic">Research Paper</span>
                    </div>
                  )}
                </div>
                {pub.url && (
                  <a 
                    href={pub.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 border border-gray-200 text-gray-400 hover:text-black hover:border-black transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
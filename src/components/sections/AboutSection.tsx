import { Section, SectionTitle } from '@/components/ui';
import { usePortfolio } from '@/context';
import { User, Mail, MapPin, Phone, Languages } from 'lucide-react';

export function AboutSection() {
  const { basics } = usePortfolio();

  return (
    <Section id="about" className="bg-white">
      <SectionTitle icon={<User className="w-7 h-7" />}>About Me</SectionTitle>
      <div className="max-w-4xl">
        <div className="prose prose-lg prose-cyan">
          <p className="font-serif text-gray-700 text-xl leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-cyan-600 first-letter:mr-3 first-letter:float-left">
            {basics.summary}
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-100">
          {[
            { label: 'Location', value: `${basics.location.city}, ${basics.location.country}`, icon: MapPin },
            { label: 'Email', value: basics.email, icon: Mail, href: `mailto:${basics.email}` },
            { label: 'Phone', value: basics.phone, icon: Phone },
            { label: 'Language', value: 'English, Bengali', icon: Languages },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 p-8 bg-white border-r border-b border-gray-100 group hover:bg-gray-50 transition-all duration-300">
              <div className="text-gray-400 group-hover:text-gray-900 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-gray-900 font-bold hover:underline transition-colors">{item.value}</a>
                ) : (
                  <p className="text-gray-900 font-bold">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

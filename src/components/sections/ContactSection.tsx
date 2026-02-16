import { Section, SectionTitle } from '@/components/ui';
import { usePortfolio } from '@/context';
import { Mail, Linkedin, Github, Twitter, Phone, MapPin, ExternalLink } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
  Email: Mail,
};

export function ContactSection() {
  const { basics } = usePortfolio();

  return (
    <Section id="contact" className="bg-white pb-24">
      <SectionTitle icon={<Mail className="w-7 h-7" />}>Contact</SectionTitle>
      
      <div className="bg-white rounded-none border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-16 bg-[#212121] text-white">
            <h3 className="text-4xl font-bold mb-8 tracking-tighter">Get in Touch</h3>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Open to research collaborations, academic inquiries, and technical discussions.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: basics.email, href: `mailto:${basics.email}` },
                { icon: Phone, label: 'Phone', value: basics.phone, href: `tel:${basics.phone}` },
                { icon: MapPin, label: 'Location', value: `${basics.location.city}, ${basics.location.country}` },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="text-gray-500 group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold hover:text-gray-300 transition-colors tracking-tight">{item.value}</a>
                    ) : (
                      <p className="text-xl font-bold tracking-tight">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-16 bg-gray-50">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Social & Academic Networks</h3>
            <div className="grid grid-cols-1 gap-0 border-t border-l border-gray-200">
              {basics.profiles.map((profile, index) => {
                const Icon = iconMap[profile.network] || Mail;
                return (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 bg-white border-r border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-gray-400 group-hover:text-gray-900 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-gray-900 text-sm tracking-widest uppercase">{profile.network}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
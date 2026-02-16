import { usePortfolio } from '@/context';
import { Section } from '@/components/ui';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

export function HeroSection() {
  const { basics } = usePortfolio();

  return (
    <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
      {/* Top Section: Image and Name */}
      <Section id="home-top" className="flex items-center bg-white py-8 md:py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-4 flex justify-center order-2 lg:order-1">
            <div className="relative p-0 border-[12px] border-gray-50 shadow-xl group overflow-hidden max-w-[320px] lg:max-w-full">
              <img 
                src={basics.imageUrl} 
                alt={basics.name}
                className="w-full h-auto object-cover rounded-none grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 border border-gray-200 pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Name and Label */}
          <div className="lg:col-span-8 order-1 lg:order-2 mt-2 lg:mt-0">
            <h1 className="font-sans font-black text-3xl md:text-5xl lg:text-6xl text-gray-900 leading-[1] tracking-tighter uppercase mb-6">
              {basics.name}
            </h1>
            
            <div className="relative pl-6 border-l-4 border-gray-900 py-1 mb-0">
              <p className="text-lg md:text-xl text-gray-600 font-light italic leading-tight">
                {basics.label}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Middle Section: Summary Paragraph */}
      <Section id="home-summary" className="bg-gray-50 py-12 md:py-16 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-serif text-gray-800 text-lg md:text-xl leading-relaxed text-justify italic">
            {basics.summary}
          </p>
        </div>
      </Section>

      {/* Bottom Section: Contact Information */}
      <Section id="home-contact" className="bg-white py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 px-6">
          {/* Row 1, Col 1: Location */}
          <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 p-3 bg-gray-50 rounded-none border border-gray-100 group-hover:bg-gray-900 transition-all duration-500">
              <MapPin className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Current Base</p>
              <p className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-tight truncate">{basics.location.city}, {basics.location.country}</p>
            </div>
          </div>
          
          {/* Row 1, Col 2: Email */}
          <a href={`mailto:${basics.email}`} className="flex items-center gap-4 group">
            <div className="flex-shrink-0 p-3 bg-gray-50 rounded-none border border-gray-100 group-hover:bg-gray-900 transition-all duration-500">
              <Mail className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Direct Email</p>
              <p className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-tight break-all group-hover:underline decoration-2 underline-offset-4 transition-all">{basics.email}</p>
            </div>
          </a>

          {/* Row 2, Col 1: LinkedIn */}
          <a href="https://www.linkedin.com/in/md-basim-al-zabir-shammo-759082205/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="flex-shrink-0 p-3 bg-gray-50 rounded-none border border-gray-100 group-hover:bg-gray-900 transition-all duration-500">
              <Linkedin className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Professional Network</p>
              <p className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-tight truncate group-hover:underline decoration-2 underline-offset-4 transition-all">LinkedIn</p>
            </div>
          </a>

          {/* Row 2, Col 2: GitHub */}
          <a href="https://github.com/AlZabir08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
            <div className="flex-shrink-0 p-3 bg-gray-50 rounded-none border border-gray-100 group-hover:bg-gray-900 transition-all duration-500">
              <Github className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Source Code</p>
              <p className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-tight truncate group-hover:underline decoration-2 underline-offset-4 transition-all">GitHub</p>
            </div>
          </a>
        </div>
      </Section>
    </div>
  );
}

import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export function PageHero({ title, backgroundImage, children }: PageHeroProps) {
  return (
    <div className="relative h-48 md:h-64 lg:h-80 flex items-center justify-center overflow-hidden bg-[#212121]">
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.2) grayscale(0.8)'
          }}
        />
      )}
      <div className="relative z-10 px-6 text-center w-full">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

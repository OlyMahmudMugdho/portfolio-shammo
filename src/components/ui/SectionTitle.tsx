import { ReactNode } from 'react';
import { cn } from '@/utils';

interface SectionTitleProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ icon, children, className }: SectionTitleProps) {
  return (
    <div className={cn('flex items-center gap-4 mb-12 group border-b border-gray-200 pb-4', className)}>
      {icon && (
        <div className="text-gray-900">
          {icon}
        </div>
      )}
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-gray-900 tracking-tight uppercase">{children}</h2>
    </div>
  );
}

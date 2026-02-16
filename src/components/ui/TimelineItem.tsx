import { ReactNode } from 'react';
import { cn } from '@/utils';
import { formatDateRange } from '@/utils/formatDate';

interface TimelineItemProps {
  date?: string;
  dateRange?: { start: string; end: string };
  title: string;
  subtitle?: string;
  description?: string;
  logo?: string;
  children?: ReactNode;
  className?: string;
}

export function TimelineItem({ 
  date, 
  dateRange, 
  title, 
  subtitle, 
  description, 
  logo,
  children,
  className 
}: TimelineItemProps) {
  const displayDate = dateRange 
    ? formatDateRange(dateRange.start, dateRange.end) 
    : date;

  return (
    <div className={cn('relative pl-12 md:pl-36 pb-12 last:pb-0 group', className)}>
      {logo ? (
        <div className="absolute left-[-24px] md:left-[-48px] top-0 w-12 h-12 md:w-24 md:h-24 bg-white border border-gray-100 p-1 md:p-3 flex items-center justify-center z-10 overflow-hidden shadow-sm">
          <img src={logo} alt={title} className="max-w-full max-h-full object-contain" />
        </div>
      ) : (
        <div className="absolute left-[-11px] top-1 w-5 h-5 bg-gray-900 border-2 border-gray-900 group-hover:scale-110 transition-transform duration-200 z-10" />
      )}
      {displayDate && (
        <time className="text-xs font-bold text-gray-400 mb-2 block tracking-widest uppercase">{displayDate}</time>
      )}
      <h3 className="font-sans font-bold text-gray-900 text-2xl tracking-tight leading-snug uppercase">{title}</h3>
      {subtitle && <p className="text-gray-900 font-bold text-[17px] mt-1">{subtitle}</p>}
      {description && <p className="text-gray-600 mt-4 text-base leading-relaxed max-w-3xl text-justify">{description}</p>}
      <div className="mt-6">
        {children}
      </div>
    </div>
  );
}
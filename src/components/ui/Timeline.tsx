import { ReactNode } from 'react';
import { cn } from '@/utils';

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn('relative border-l-2 border-gray-200 ml-4 md:ml-16', className)}>
      {children}
    </div>
  );
}
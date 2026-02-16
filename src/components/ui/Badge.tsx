import { ReactNode } from 'react';
import { cn } from '@/utils';

interface BadgeProps {
  color?: 'cyan' | 'green' | 'purple' | 'orange' | 'gray';
  children: ReactNode;
  className?: string;
}

export function Badge({ color = 'cyan', children, className }: BadgeProps) {
  const colors = {
    cyan: 'bg-gray-100 text-gray-800 border border-gray-200',
    green: 'bg-green-50 text-green-700 border border-green-100',
    purple: 'bg-purple-50 text-purple-700 border border-purple-100',
    orange: 'bg-orange-50 text-orange-700 border border-orange-100',
    gray: 'bg-gray-50 text-gray-600 border border-gray-100',
  };

  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded-none text-[11px] font-bold tracking-wider uppercase', colors[color], className)}>
      {children}
    </span>
  );
}

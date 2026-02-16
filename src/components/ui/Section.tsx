import { ReactNode } from 'react';
import { cn } from '@/utils';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 px-6 md:px-12', className)}>
      {children}
    </section>
  );
}

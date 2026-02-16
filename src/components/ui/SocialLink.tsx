import { ReactNode } from 'react';
import { cn } from '@/utils';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-cyan-100 hover:text-cyan-600 transition-colors',
        className
      )}
    >
      {icon}
    </a>
  );
}
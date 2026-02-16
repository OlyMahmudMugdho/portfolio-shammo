import { ReactNode } from 'react';
import { cn } from '@/utils';

interface CardProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Card({ title, subtitle, children, footer, className }: CardProps) {
  return (
    <div className={cn('bg-white rounded-none border border-gray-200 shadow-none hover:border-gray-400 transition-all duration-300 overflow-hidden', className)}>
      {(title || subtitle) && (
        <div className="px-6 py-5 border-b border-gray-100 bg-gray-50/30">
          {title && <h3 className="font-sans font-bold text-gray-900 text-xl tracking-tight leading-tight">{title}</h3>}
          {subtitle && <p className="text-[15px] font-medium text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      {children && <div className="px-6 py-6 text-gray-600 text-base leading-relaxed">{children}</div>}
      {footer && <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">{footer}</div>}
    </div>
  );
}

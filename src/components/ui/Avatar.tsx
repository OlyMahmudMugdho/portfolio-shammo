import { cn } from '@/utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Avatar({ src, alt, fallback, size = 'lg', className }: AvatarProps) {
  const sizes = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-24 h-24 text-2xl',
    xl: 'w-32 h-32 text-4xl',
  };

  if (src) {
    return (
      <img 
        src={src} 
        alt={alt || 'Avatar'} 
        className={cn('rounded-full object-cover', sizes[size], className)} 
      />
    );
  }

  return (
    <div 
      className={cn(
        'rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold',
        sizes[size],
        className
      )}
    >
      {fallback || '?'}
    </div>
  );
}
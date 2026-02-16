import { useState, ReactNode } from 'react';
import { useMediaQuery } from '@/hooks';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {isMobile && (
        <MobileNav isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      )}
      <main className={`md:ml-sidebar ${isMobile ? 'pt-16' : ''} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
}

import { cn } from '@/utils';
import { useMediaQuery } from '@/hooks';
import { usePortfolio } from '@/context';
import { SidebarNav } from './SidebarNav';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { basics } = usePortfolio();

  if (isMobile) {
    return (
      <>
        <div 
          className={cn(
            'fixed inset-0 bg-black/60 backdrop-blur-none z-40 transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={onClose}
        />
        <aside 
          className={cn(
            'fixed top-0 left-0 h-full w-sidebar bg-sidebar z-50 transform transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <SidebarContent basics={basics} onClose={onClose} />
        </aside>
      </>
    );
  }

  return (
    <aside className="fixed top-0 left-0 h-full w-sidebar bg-sidebar z-30 border-r border-white/5">
      <SidebarContent basics={basics} />
    </aside>
  );
}

function SidebarContent({ basics, onClose }: { basics: any; onClose?: () => void }) {
  return (
    <div className="flex flex-col h-full text-white">
      <div className="p-10 border-b border-white/5 bg-black/20">
        <h1 className="font-sans font-black text-2xl tracking-tighter text-white uppercase leading-none">
          {basics.name.split(' ').slice(-2).join(' ')}
        </h1>
        <div className="w-8 h-1 bg-white mt-4" />
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <SidebarNav onClose={onClose} />
      </div>
    </div>
  );
}
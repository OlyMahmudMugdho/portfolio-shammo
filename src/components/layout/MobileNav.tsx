import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-900 px-6 py-4">
      <div className="flex items-center justify-between">
        <span className="font-sans font-black text-gray-900 uppercase tracking-tighter text-xl italic">Shammo</span>
        <Button variant="ghost" size="sm" onClick={onToggle} className="p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
    </div>
  );
}

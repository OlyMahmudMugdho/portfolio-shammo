import { NavLink } from 'react-router-dom';
import { sections } from '@/constants';
import { cn } from '@/utils';

interface SidebarNavProps {
  onClose?: () => void;
}

export function SidebarNav({ onClose }: SidebarNavProps) {
  return (
    <nav className="py-6 px-0">
      <ul className="space-y-0">
        {sections.map(({ path, label, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              onClick={onClose}
              className={({ isActive }) => cn(
                'w-full flex items-center gap-4 px-8 py-4 text-left transition-all duration-200 group relative',
                isActive 
                  ? 'bg-white/10 text-white border-l-4 border-white' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
              )}
            >
              <Icon className="w-5 h-5 transition-transform duration-200" />
              <span className="font-bold text-sm tracking-widest uppercase">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
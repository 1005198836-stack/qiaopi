import { ArrowLeft, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { backgroundStyles } from '@/lib/styles';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  showMenu?: boolean;
  onBack?: () => void;
  onMenu?: () => void;
  className?: string;
}

export function Header({ 
  title, 
  subtitle,
  showBack = false, 
  showMenu = false,
  onBack, 
  onMenu,
  className 
}: HeaderProps) {
  return (
    <header 
      className={cn(
        "sticky top-0 z-40 px-4 py-3",
        className
      )}
      style={backgroundStyles.writeLetter}
    >
      <div className="max-w-md mx-auto flex items-center justify-between">
        {showBack && (
          <button
            onClick={onBack}
            className="text-qiaopi-font p-2 hover:bg-qiaopi-brown/20 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        {!showBack && <div className="w-9" />}
        
        <div className="flex-1 text-center">
          {title && (
            <h1 className="text-xl font-qiaopi text-qiaopi-font font-bold">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-qiaopi-font font-qiaopi text-sm mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        
        {showMenu && (
          <button
            onClick={onMenu}
            className="text-qiaopi-font p-2 hover:bg-qiaopi-brown/20 rounded-full transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        {!showMenu && <div className="w-9" />}
      </div>
    </header>
  );
}

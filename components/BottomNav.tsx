import { Home, PenLine, Mailbox, User } from 'lucide-react';
import Link from 'next/link';
import { navigationItems } from '@/stores/qiaopi';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  currentPage: string;
}

export function BottomNav({ currentPage }: BottomNavProps) {
  const iconMap: Record<string, React.ReactNode> = {
    home: <Home className="w-5 h-5" />,
    write: <PenLine className="w-5 h-5" />,
    mailbox: <Mailbox className="w-5 h-5" />,
    profile: <User className="w-5 h-5" />
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-qiaopi-dark border-t border-qiaopi-brown/30 px-2 py-2 pb-safe-bottom z-50">
      <div className="max-w-md mx-auto flex justify-around items-center">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={cn(
              "flex flex-col items-center py-1 px-3 rounded-lg transition-all duration-200",
              currentPage === item.id
                ? "text-qiaopi-gold"
                : "text-qiaopi-cream/70 hover:text-qiaopi-cream"
            )}
          >
            {iconMap[item.icon]}
            <span className="text-xs mt-1 font-qiaopi">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

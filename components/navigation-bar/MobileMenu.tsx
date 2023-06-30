'use client';

import { NavItem } from '@/types/nav';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '../ThemeToggle';
import { Sheet, SheetContent } from '../ui/sheet';
import MenuTrigger from './MenuTrigger';

export interface MobileMenuProps {
  items?: NavItem[];
}

const MobileMenu = ({ items }: MobileMenuProps) => {
  const renderItems = (item: NavItem, index: number) => {
    if (!item.href) return null;
    return (
      <li key={index}>
        <a
          href={item.href}
          className={cn(
            'items-center text-center text-sm font-medium text-muted-foreground',
            item.disabled && 'w-full flex-1 cursor-not-allowed opacity-80'
          )}
        >
          {item.title}
        </a>
      </li>
    );
  };

  return (
    <Sheet>
      <MenuTrigger />
      <SheetContent
        size="xl"
        className="flex flex-col items-center justify-start"
      >
        {items?.length ? (
          <ul className="my-8 flex flex-col justify-center gap-6 text-center">
            {items?.map(renderItems)}
          </ul>
        ) : null}
        <ThemeToggle />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
